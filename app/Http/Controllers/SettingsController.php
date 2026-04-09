<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\StorageLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SettingsController extends Controller
{
    /**
     * Display custom code settings page.
     */
    public function customCode(): Response
    {
        $settings = Setting::getByGroup('custom_code');

        return Inertia::render('Settings/CustomCode', [
            'settings' => [
                'header_code' => $settings['header_code'] ?? '',
                'footer_code' => $settings['footer_code'] ?? '',
            ],
        ]);
    }

    /**
     * Update custom code settings.
     */
    public function updateCustomCode(Request $request)
    {
        $request->validate([
            'header_code' => 'nullable|string|max:65535',
            'footer_code' => 'nullable|string|max:65535',
        ]);

        $headerCode = $request->input('header_code', '');
        $footerCode = $request->input('footer_code', '');

        // Validate and collect warnings
        $warnings = [];

        if ($headerCode) {
            $headerWarnings = Setting::validateCustomCode($headerCode);
            $warnings = array_merge($warnings, array_map(fn ($w) => "Header: $w", $headerWarnings));
            $headerCode = Setting::sanitizeCustomCode($headerCode);
        }

        if ($footerCode) {
            $footerWarnings = Setting::validateCustomCode($footerCode);
            $warnings = array_merge($warnings, array_map(fn ($w) => "Footer: $w", $footerWarnings));
            $footerCode = Setting::sanitizeCustomCode($footerCode);
        }

        // Save settings
        Setting::set('header_code', $headerCode, 'custom_code', 'html');
        Setting::set('footer_code', $footerCode, 'custom_code', 'html');

        $message = 'Custom code settings saved successfully.';
        if (! empty($warnings)) {
            $message .= ' Warnings: '.implode(' ', $warnings);
        }

        return back()->with('success', $message);
    }

    /**
     * Display SEO settings page.
     */
    public function seo(): Response
    {
        $settings = Setting::getByGroup('seo');

        return Inertia::render('Settings/Seo', [
            'settings' => [
                'default_schema' => $settings['default_schema'] ?? '',
            ],
        ]);
    }

    /**
     * Update SEO settings.
     */
    public function updateSeo(Request $request)
    {
        $request->validate([
            'default_schema' => 'nullable|string|max:65535',
        ]);

        $schema = $request->input('default_schema', '');

        // Validate JSON if provided
        if ($schema) {
            $decoded = json_decode($schema);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return back()->withErrors(['default_schema' => 'Invalid JSON format.']);
            }
        }

        Setting::set('default_schema', $schema, 'seo', 'json');

        return back()->with('success', 'SEO settings saved successfully.');
    }

    /**
     * Display general settings page.
     */
    public function general(): Response
    {
        $settings = Setting::getByGroup('general');

        return Inertia::render('Settings/General', [
            'settings' => $settings,
        ]);
    }

    /**
     * Update general settings.
     */
    public function updateGeneral(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            if ($key !== '_token') {
                Setting::set($key, $value, 'general');
            }
        }

        return back()->with('success', 'General settings saved successfully.');
    }

    /**
     * Display email settings page.
     */
    public function email(): Response
    {
        $settings = Setting::getByGroup('email');

        return Inertia::render('Settings/Email', [
            'settings' => [
                'mail_mailer' => $settings['mail_mailer'] ?? env('MAIL_MAILER', 'smtp'),
                'mail_host' => $settings['mail_host'] ?? env('MAIL_HOST', ''),
                'mail_port' => $settings['mail_port'] ?? env('MAIL_PORT', '587'),
                'mail_username' => $settings['mail_username'] ?? env('MAIL_USERNAME', ''),
                'mail_password' => $settings['mail_password'] ?? '',
                'mail_encryption' => $settings['mail_encryption'] ?? env('MAIL_ENCRYPTION', 'tls'),
                'mail_from_address' => $settings['mail_from_address'] ?? env('MAIL_FROM_ADDRESS', ''),
                'mail_from_name' => $settings['mail_from_name'] ?? env('MAIL_FROM_NAME', 'Beyond'),
                'admin_email' => $settings['admin_email'] ?? env('MAIL_ADMIN_EMAIL', ''),
            ],
        ]);
    }

    /**
     * Update email settings.
     */
    public function updateEmail(Request $request)
    {
        $request->validate([
            'mail_mailer' => 'required|string|in:smtp',
            'mail_host' => 'required|string|max:255',
            'mail_port' => 'required|string|max:10',
            'mail_username' => 'required|string|max:255',
            'mail_password' => 'nullable|string|max:255',
            'mail_encryption' => 'required|string|in:tls,ssl,null',
            'mail_from_address' => 'required|email|max:255',
            'mail_from_name' => 'required|string|max:255',
            'admin_email' => 'nullable|email|max:255',
        ]);

        // Save all email settings
        Setting::set('mail_mailer', $request->input('mail_mailer', 'smtp'), 'email', 'text');
        Setting::set('mail_host', $request->input('mail_host', ''), 'email', 'text');
        Setting::set('mail_port', $request->input('mail_port', '587'), 'email', 'text');
        Setting::set('mail_username', $request->input('mail_username', ''), 'email', 'text');

        // Only update password if provided (don't clear existing)
        if ($request->filled('mail_password')) {
            Setting::set('mail_password', $request->input('mail_password'), 'email', 'password');
        }

        Setting::set('mail_encryption', $request->input('mail_encryption', 'tls'), 'email', 'text');
        Setting::set('mail_from_address', $request->input('mail_from_address', ''), 'email', 'text');
        Setting::set('mail_from_name', $request->input('mail_from_name', 'Beyond'), 'email', 'text');
        Setting::set('admin_email', $request->input('admin_email', ''), 'email', 'text');

        return back()->with('success', 'Email settings saved successfully.');
    }

    /**
     * Send a test email.
     */
    public function testEmail(Request $request)
    {
        $request->validate([
            'test_email' => 'required|email',
        ]);

        try {
            // Apply settings temporarily for testing
            $settings = Setting::getByGroup('email');

            Config::set('mail.default', $settings['mail_mailer'] ?? 'smtp');
            Config::set('mail.mailers.smtp.host', $settings['mail_host'] ?? '');
            Config::set('mail.mailers.smtp.port', $settings['mail_port'] ?? 587);
            Config::set('mail.mailers.smtp.username', $settings['mail_username'] ?? '');
            Config::set('mail.mailers.smtp.password', $settings['mail_password'] ?? '');
            Config::set('mail.mailers.smtp.encryption', $settings['mail_encryption'] ?? 'tls');
            Config::set('mail.from.address', $settings['mail_from_address'] ?? '');
            Config::set('mail.from.name', $settings['mail_from_name'] ?? 'Beyond');

            Mail::raw('This is a test email from Beyond CMS. If you received this, your email settings are working correctly!', function ($message) use ($request) {
                $message->to($request->test_email)
                    ->subject('Beyond CMS - Test Email');
            });

            return back()->with('success', 'Test email sent successfully to '.$request->test_email);
        } catch (\Exception $e) {
            return back()->withErrors(['test_email' => 'Failed to send test email: '.$e->getMessage()]);
        }
    }

    /**
     * Display storage settings page.
     */
    public function storage(): Response
    {
        $ociConfig = config('filesystems.disks.oci');
        $hasCredentials = ! empty($ociConfig['key']) && ! empty($ociConfig['secret']);
        $activeDisk = Setting::get('storage_disk') ?: config('filesystems.uploads', 'public');

        // CMS uploads from storage/app/public
        $cmsFiles = ['count' => 0, 'total_size' => '0 B'];
        try {
            $localDisk = Storage::disk('public');
            $files = collect($localDisk->allFiles())->filter(fn ($f) => $f !== '.gitignore');
            $totalSize = 0;
            foreach ($files as $file) {
                $totalSize += $localDisk->size($file);
            }
            $cmsFiles = [
                'count' => $files->count(),
                'total_size' => $this->formatStorageBytes($totalSize),
            ];
        } catch (\Exception $e) {
            $cmsFiles['error'] = $e->getMessage();
        }

        // Static assets from public/assets/img
        $staticFiles = ['count' => 0, 'total_size' => '0 B'];
        try {
            $assetsPath = public_path('assets/img');
            if (File::isDirectory($assetsPath)) {
                $files = File::allFiles($assetsPath);
                $totalSize = 0;
                foreach ($files as $file) {
                    $totalSize += $file->getSize();
                }
                $staticFiles = [
                    'count' => count($files),
                    'total_size' => $this->formatStorageBytes($totalSize),
                ];
            }
        } catch (\Exception $e) {
            $staticFiles['error'] = $e->getMessage();
        }

        return Inertia::render('Settings/Storage', [
            'config' => [
                'active_disk' => $activeDisk,
                'has_credentials' => $hasCredentials,
                'region' => $ociConfig['region'] ?? '',
                'bucket' => $ociConfig['bucket'] ?? '',
                'endpoint' => $ociConfig['endpoint'] ?? '',
            ],
            'cmsFiles' => $cmsFiles,
            'staticFiles' => $staticFiles,
            'storageLogs' => StorageLog::orderByDesc('created_at')->limit(50)->get(),
        ]);
    }

    /**
     * Update the active storage disk.
     */
    public function updateStorageDisk(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'disk' => 'required|string|in:public,oci',
        ]);

        $disk = $request->input('disk');

        // If switching to OCI, verify credentials exist
        if ($disk === 'oci') {
            $ociConfig = config('filesystems.disks.oci');
            if (empty($ociConfig['key']) || empty($ociConfig['secret'])) {
                return back()->withErrors(['disk' => 'Cannot switch to OCI: credentials not configured. Set OCI_ACCESS_KEY_ID and OCI_SECRET_ACCESS_KEY in .env first.']);
            }
        }

        // Save to settings table
        Setting::set('storage_disk', $disk, 'storage', 'text');

        // Also update .env file for persistence across deploys
        $this->updateEnvValue('STORAGE_DISK', $disk);

        $label = $disk === 'oci' ? 'OCI Object Storage' : 'Local Storage';

        return back()->with('success', "Active storage disk switched to {$label}.");
    }

    /**
     * Update a value in the .env file.
     */
    private function updateEnvValue(string $key, string $value): void
    {
        $envPath = base_path('.env');
        if (! file_exists($envPath)) {
            return;
        }

        $envContent = file_get_contents($envPath);
        $pattern = '/^'.preg_quote($key, '/').'=.*/m';

        if (preg_match($pattern, $envContent)) {
            $envContent = preg_replace($pattern, "{$key}={$value}", $envContent);
        } else {
            $envContent .= "\n{$key}={$value}\n";
        }

        file_put_contents($envPath, $envContent);
    }

    /**
     * Test OCI storage connection.
     */
    public function testStorageConnection(): \Illuminate\Http\JsonResponse
    {
        try {
            $ociConfig = config('filesystems.disks.oci');
            if (empty($ociConfig['key']) || empty($ociConfig['secret'])) {
                return response()->json([
                    'success' => false,
                    'message' => 'OCI credentials not configured. Set OCI_ACCESS_KEY_ID and OCI_SECRET_ACCESS_KEY in .env.',
                ]);
            }

            Storage::disk('oci')->exists('.connection-test');

            return response()->json([
                'success' => true,
                'message' => 'OCI connection successful. Bucket is accessible.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Connection failed: '.$e->getMessage(),
            ]);
        }
    }

    /**
     * Run migration dry-run preview.
     */
    public function storageDryRun(): \Illuminate\Http\JsonResponse
    {
        try {
            $fileList = [];
            $totalSize = 0;

            // CMS uploads from storage/app/public
            $localDisk = Storage::disk('public');
            $cmsFiles = collect($localDisk->allFiles())->filter(fn ($f) => $f !== '.gitignore');
            foreach ($cmsFiles as $file) {
                $size = $localDisk->size($file);
                $totalSize += $size;
                $fileList[] = [
                    'path' => $file,
                    'size' => $this->formatStorageBytes($size),
                    'source' => 'cms',
                ];
            }

            // Static assets from public/assets/img
            $assetsPath = public_path('assets/img');
            if (File::isDirectory($assetsPath)) {
                $basePath = public_path();
                foreach (File::allFiles($assetsPath) as $file) {
                    $relativePath = str_replace('\\', '/', $file->getRelativePathname());
                    $size = $file->getSize();
                    $totalSize += $size;
                    $fileList[] = [
                        'path' => 'assets/img/'.$relativePath,
                        'size' => $this->formatStorageBytes($size),
                        'source' => 'static',
                    ];
                }
            }

            if (empty($fileList)) {
                return response()->json([
                    'success' => true,
                    'message' => 'No files found to migrate.',
                    'files' => [],
                    'summary' => ['count' => 0, 'total_size' => '0 B'],
                ]);
            }

            $count = count($fileList);

            return response()->json([
                'success' => true,
                'message' => "Dry run complete. {$count} files ready to migrate.",
                'files' => array_slice($fileList, 0, 100),
                'summary' => [
                    'count' => $count,
                    'total_size' => $this->formatStorageBytes($totalSize),
                    'showing' => min($count, 100),
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Dry run failed: '.$e->getMessage(),
                'files' => [],
                'summary' => ['count' => 0, 'total_size' => '0 B'],
            ]);
        }
    }

    /**
     * Run actual storage migration.
     */
    public function storageMigrate(): \Illuminate\Http\JsonResponse
    {
        try {
            $exitCode = Artisan::call('storage:migrate-to-oci', ['--force' => true, '--include-static' => true]);
            $output = Artisan::output();

            return response()->json([
                'success' => $exitCode === 0,
                'message' => $exitCode === 0
                    ? 'Migration completed successfully.'
                    : 'Migration completed with errors.',
                'output' => $output,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Migration failed: '.$e->getMessage(),
                'output' => '',
            ]);
        }
    }

    /**
     * Format bytes to human readable format.
     */
    private function formatStorageBytes(int $bytes): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        $unitIndex = 0;

        while ($bytes >= 1024 && $unitIndex < count($units) - 1) {
            $bytes /= 1024;
            $unitIndex++;
        }

        return round($bytes, 2).' '.$units[$unitIndex];
    }

    /**
     * Clear storage logs.
     */
    public function clearStorageLogs(): \Illuminate\Http\RedirectResponse
    {
        StorageLog::truncate();

        return back()->with('success', 'Storage logs cleared.');
    }
}
