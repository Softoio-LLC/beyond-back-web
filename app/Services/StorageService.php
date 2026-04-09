<?php

namespace App\Services;

use App\Models\StorageLog;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class StorageService
{
    /**
     * The preferred disk name from config
     */
    protected string $preferredDisk;

    /**
     * The fallback disk name
     */
    protected const FALLBACK_DISK = 'public';

    /**
     * Cached active disk name
     */
    protected ?string $activeDiskName = null;

    public function __construct()
    {
        // Check DB setting first, fall back to env config
        $dbDisk = \App\Models\Setting::get('storage_disk');
        $this->preferredDisk = $dbDisk ?: config('filesystems.uploads', 'public');
    }

    /**
     * Get the currently active disk name.
     * Returns the preferred disk if available, otherwise falls back to 'public'.
     */
    public function getActiveDiskName(): string
    {
        if ($this->activeDiskName !== null) {
            return $this->activeDiskName;
        }

        // If preferred is local, just use it
        if ($this->preferredDisk === 'public' || $this->preferredDisk === 'local') {
            $this->activeDiskName = $this->preferredDisk;

            return $this->activeDiskName;
        }

        // For cloud disks (oci), verify connectivity
        if ($this->isCloudDiskAvailable()) {
            $this->activeDiskName = $this->preferredDisk;
        } else {
            Log::warning("StorageService: Cloud disk '{$this->preferredDisk}' unavailable, falling back to local storage.");
            $this->logToDb('warning', 'connection_check', null, $this->preferredDisk, self::FALLBACK_DISK, "Cloud disk '{$this->preferredDisk}' unavailable, falling back to local storage.");
            $this->activeDiskName = self::FALLBACK_DISK;
        }

        return $this->activeDiskName;
    }

    /**
     * Get the active disk instance.
     */
    public function disk(): Filesystem
    {
        return Storage::disk($this->getActiveDiskName());
    }

    /**
     * Check if cloud disk is available.
     */
    protected function isCloudDiskAvailable(): bool
    {
        try {
            // Try a lightweight operation to test connectivity
            Storage::disk($this->preferredDisk)->exists('.connection-test');

            return true;
        } catch (\Exception $e) {
            Log::error("StorageService: Cloud disk check failed - {$e->getMessage()}");

            return false;
        }
    }

    /**
     * Check if currently using cloud storage.
     */
    public function isUsingCloudStorage(): bool
    {
        return $this->getActiveDiskName() === 'oci';
    }

    /**
     * Put file contents to storage.
     */
    public function put(string $path, mixed $contents, array $options = []): bool
    {
        try {
            return $this->disk()->put($path, $contents, $options);
        } catch (\Exception $e) {
            // If cloud fails, try fallback
            if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
                Log::warning("StorageService: Cloud put failed, trying fallback - {$e->getMessage()}");
                $this->logToDb('warning', 'put', $path, $this->getActiveDiskName(), self::FALLBACK_DISK, $e->getMessage());

                return Storage::disk(self::FALLBACK_DISK)->put($path, $contents, $options);
            }
            throw $e;
        }
    }

    /**
     * Store an uploaded file.
     */
    public function putFile(string $path, UploadedFile $file, array $options = []): string|false
    {
        try {
            return $this->disk()->putFile($path, $file, $options);
        } catch (\Exception $e) {
            if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
                Log::warning("StorageService: Cloud putFile failed, trying fallback - {$e->getMessage()}");
                $this->logToDb('warning', 'putFile', $path, $this->getActiveDiskName(), self::FALLBACK_DISK, $e->getMessage());

                return Storage::disk(self::FALLBACK_DISK)->putFile($path, $file, $options);
            }
            throw $e;
        }
    }

    /**
     * Store an uploaded file with a given name.
     */
    public function putFileAs(string $path, UploadedFile $file, string $name, array $options = []): string|false
    {
        try {
            return $this->disk()->putFileAs($path, $file, $name, $options);
        } catch (\Exception $e) {
            if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
                Log::warning("StorageService: Cloud putFileAs failed, trying fallback - {$e->getMessage()}");
                $this->logToDb('warning', 'putFileAs', "{$path}/{$name}", $this->getActiveDiskName(), self::FALLBACK_DISK, $e->getMessage());

                return Storage::disk(self::FALLBACK_DISK)->putFileAs($path, $file, $name, $options);
            }
            throw $e;
        }
    }

    /**
     * Get file contents.
     */
    public function get(string $path): ?string
    {
        // Try primary disk first
        try {
            if ($this->disk()->exists($path)) {
                return $this->disk()->get($path);
            }
        } catch (\Exception $e) {
            Log::warning("StorageService: Failed to get from primary disk - {$e->getMessage()}");
        }

        // Try fallback if different
        if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
            try {
                if (Storage::disk(self::FALLBACK_DISK)->exists($path)) {
                    return Storage::disk(self::FALLBACK_DISK)->get($path);
                }
            } catch (\Exception $e) {
                Log::warning("StorageService: Failed to get from fallback disk - {$e->getMessage()}");
            }
        }

        return null;
    }

    /**
     * Check if a file exists.
     */
    public function exists(string $path): bool
    {
        try {
            if ($this->disk()->exists($path)) {
                return true;
            }
        } catch (\Exception $e) {
            // Continue to fallback check
        }

        // Also check fallback if different
        if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
            try {
                return Storage::disk(self::FALLBACK_DISK)->exists($path);
            } catch (\Exception $e) {
                return false;
            }
        }

        return false;
    }

    /**
     * Delete a file.
     */
    public function delete(string|array $paths): bool
    {
        $paths = is_array($paths) ? $paths : [$paths];
        $success = true;

        foreach ($paths as $path) {
            // Try to delete from primary disk
            try {
                if ($this->disk()->exists($path)) {
                    $this->disk()->delete($path);
                }
            } catch (\Exception $e) {
                Log::warning("StorageService: Failed to delete from primary disk - {$e->getMessage()}");
                $success = false;
            }

            // Also try fallback if different
            if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
                try {
                    if (Storage::disk(self::FALLBACK_DISK)->exists($path)) {
                        Storage::disk(self::FALLBACK_DISK)->delete($path);
                    }
                } catch (\Exception $e) {
                    Log::warning("StorageService: Failed to delete from fallback disk - {$e->getMessage()}");
                    $success = false;
                }
            }
        }

        return $success;
    }

    /**
     * Copy a file.
     */
    public function copy(string $from, string $to): bool
    {
        try {
            return $this->disk()->copy($from, $to);
        } catch (\Exception $e) {
            if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
                Log::warning("StorageService: Cloud copy failed, trying fallback - {$e->getMessage()}");

                return Storage::disk(self::FALLBACK_DISK)->copy($from, $to);
            }
            throw $e;
        }
    }

    /**
     * Get the URL for a file.
     */
    public function url(string $path): string
    {
        // If path is empty or null, return empty string
        if (empty($path)) {
            return '';
        }

        // Check primary disk first
        try {
            if ($this->disk()->exists($path)) {
                return $this->disk()->url($path);
            }
        } catch (\Exception $e) {
            // Continue to fallback
        }

        // Check fallback disk
        if ($this->getActiveDiskName() !== self::FALLBACK_DISK) {
            try {
                if (Storage::disk(self::FALLBACK_DISK)->exists($path)) {
                    return Storage::disk(self::FALLBACK_DISK)->url($path);
                }
            } catch (\Exception $e) {
                // Continue
            }
        }

        // Default to primary disk URL even if file doesn't exist
        // (e.g., for newly uploaded files that haven't propagated yet)
        try {
            return $this->disk()->url($path);
        } catch (\Exception $e) {
            return Storage::disk(self::FALLBACK_DISK)->url($path);
        }
    }

    /**
     * Get the base URL for the active storage disk.
     * Useful for frontend to construct URLs.
     */
    public function getBaseUrl(): string
    {
        if ($this->isUsingCloudStorage()) {
            // Check for CDN/custom URL first
            $customUrl = config('filesystems.disks.oci.url');
            if ($customUrl) {
                return rtrim($customUrl, '/');
            }

            $endpoint = config('filesystems.disks.oci.endpoint');
            $bucket = config('filesystems.disks.oci.bucket');

            // S3-compatible path-style URL: {endpoint}/{bucket}
            return rtrim($endpoint, '/').'/'.$bucket;
        }

        // Local storage URL
        return config('app.url').'/storage';
    }

    /**
     * Store an uploaded file and return the path (compatible with UploadedFile->store()).
     */
    public function store(UploadedFile $file, string $path): string|false
    {
        $filename = $file->hashName();
        $fullPath = trim($path, '/').'/'.$filename;

        if ($this->putFileAs(dirname($fullPath), $file, basename($fullPath))) {
            return $fullPath;
        }

        return false;
    }

    /**
     * Get the path to a file on the local disk.
     * Only works for local storage, returns null for cloud storage.
     */
    public function path(string $path): ?string
    {
        $diskName = $this->getActiveDiskName();

        if ($diskName === 'public' || $diskName === 'local') {
            return Storage::disk($diskName)->path($path);
        }

        // For cloud storage, we can't get a local path
        return null;
    }

    /**
     * Get a temporary URL for a file (useful for private cloud storage).
     */
    public function temporaryUrl(string $path, \DateTimeInterface $expiration): string
    {
        if ($this->isUsingCloudStorage()) {
            return $this->disk()->temporaryUrl($path, $expiration);
        }

        // For local storage, just return the regular URL
        return $this->url($path);
    }

    /**
     * List all files in a directory.
     */
    public function files(string $directory = '', bool $recursive = false): array
    {
        if ($recursive) {
            return $this->disk()->allFiles($directory);
        }

        return $this->disk()->files($directory);
    }

    /**
     * Get the size of a file.
     */
    public function size(string $path): int
    {
        return $this->disk()->size($path);
    }

    /**
     * Get the MIME type of a file.
     */
    public function mimeType(string $path): string|false
    {
        return $this->disk()->mimeType($path);
    }

    /**
     * Log a storage event to the database.
     */
    protected function logToDb(string $level, string $action, ?string $filePath, string $diskAttempted, string $diskUsed, string $error): void
    {
        try {
            StorageLog::create([
                'level' => $level,
                'action' => $action,
                'file_path' => $filePath,
                'disk_attempted' => $diskAttempted,
                'disk_used' => $diskUsed,
                'error_message' => $error,
            ]);
        } catch (\Exception $e) {
            // Don't let logging failures break the application
            Log::error("StorageService: Failed to write storage log - {$e->getMessage()}");
        }
    }
}
