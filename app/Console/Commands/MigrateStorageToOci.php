<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class MigrateStorageToOci extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storage:migrate-to-oci
                            {--dry-run : Preview files without uploading}
                            {--force : Skip confirmation prompt}
                            {--directory= : Migrate only a specific directory}
                            {--include-static : Also migrate static assets from public/assets/img}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrate files from local storage to OCI Object Storage';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $dryRun = $this->option('dry-run');
        $force = $this->option('force');
        $directory = $this->option('directory') ?? '';
        $includeStatic = $this->option('include-static');

        // Check OCI configuration
        if (! config('filesystems.disks.oci.key') || ! config('filesystems.disks.oci.secret')) {
            $this->error('OCI credentials not configured. Please set OCI_ACCESS_KEY_ID and OCI_SECRET_ACCESS_KEY in your .env file.');

            return self::FAILURE;
        }

        $this->info('');
        $this->info('  OCI Storage Migration Tool');
        $this->info('  ==========================');
        $this->info('');

        // Collect all files to migrate: [['path' => ..., 'contents_callback' => ..., 'size' => ...]]
        $migrationFiles = [];

        // CMS uploads from storage/app/public
        $localDisk = Storage::disk('public');
        $cmsFiles = collect($localDisk->allFiles($directory))->filter(fn ($f) => $f !== '.gitignore');
        foreach ($cmsFiles as $file) {
            $migrationFiles[] = [
                'path' => $file,
                'size' => $localDisk->size($file),
                'source' => 'cms',
                'get_contents' => fn () => $localDisk->get($file),
            ];
        }

        // Static assets from public/assets/img
        if ($includeStatic || $force) {
            $assetsPath = public_path('assets/img');
            if (File::isDirectory($assetsPath)) {
                foreach (File::allFiles($assetsPath) as $file) {
                    $relativePath = 'assets/img/'.str_replace('\\', '/', $file->getRelativePathname());
                    $migrationFiles[] = [
                        'path' => $relativePath,
                        'size' => $file->getSize(),
                        'source' => 'static',
                        'get_contents' => fn () => File::get($file->getPathname()),
                    ];
                }
            }
        }

        if (empty($migrationFiles)) {
            $this->warn('No files found to migrate.');

            return self::SUCCESS;
        }

        $this->info("  Found {$this->formatNumber(count($migrationFiles))} files to migrate.");
        $this->info('');

        // Calculate total size
        $totalSize = array_sum(array_column($migrationFiles, 'size'));

        $this->info("  Total size: {$this->formatBytes($totalSize)}");
        $this->info('');

        if ($dryRun) {
            $this->warn('  [DRY RUN] No files will be uploaded.');
            $this->info('');

            $this->table(
                ['File', 'Size', 'Source'],
                collect($migrationFiles)->take(50)->map(fn ($f) => [
                    $f['path'],
                    $this->formatBytes($f['size']),
                    $f['source'],
                ])->toArray()
            );

            if (count($migrationFiles) > 50) {
                $this->info('  ... and '.(count($migrationFiles) - 50).' more files.');
            }

            $this->info('');
            $this->info('  Run without --dry-run to upload files.');

            return self::SUCCESS;
        }

        // Confirm upload
        if (! $force && ! $this->confirm('Do you want to proceed with the migration?')) {
            $this->info('Migration cancelled.');

            return self::SUCCESS;
        }

        // Test OCI connection
        $this->info('  Testing OCI connection...');
        try {
            Storage::disk('oci')->exists('.connection-test');
            $this->info('  <fg=green>✓</> OCI connection successful.');
        } catch (\Exception $e) {
            $this->error("  OCI connection failed: {$e->getMessage()}");

            return self::FAILURE;
        }

        $this->info('');

        // Migrate files with progress bar
        $ociDisk = Storage::disk('oci');
        $bar = $this->output->createProgressBar(count($migrationFiles));
        $bar->setFormat('  %current%/%max% [%bar%] %percent:3s%% %message%');
        $bar->setMessage('Starting...');
        $bar->start();

        $success = 0;
        $failed = 0;
        $skipped = 0;
        $errors = [];

        foreach ($migrationFiles as $file) {
            $bar->setMessage($file['path']);

            try {
                // Skip if already exists on OCI
                if ($ociDisk->exists($file['path'])) {
                    $skipped++;
                    $bar->advance();

                    continue;
                }

                // Get file contents and upload
                $contents = ($file['get_contents'])();
                $ociDisk->put($file['path'], $contents, [
                    'visibility' => 'public',
                ]);

                $success++;
            } catch (\Exception $e) {
                $failed++;
                $errors[] = "{$file['path']}: {$e->getMessage()}";
            }

            $bar->advance();
        }

        $bar->setMessage('Complete!');
        $bar->finish();

        $this->info('');
        $this->info('');

        // Summary
        $this->info('  Migration Summary');
        $this->info('  -----------------');
        $this->info("  <fg=green>✓</> Uploaded: {$success}");
        $this->info("  <fg=yellow>○</> Skipped (already exists): {$skipped}");
        $this->info("  <fg=red>✗</> Failed: {$failed}");
        $this->info('');

        if (! empty($errors)) {
            $this->warn('  Errors:');
            foreach (array_slice($errors, 0, 10) as $error) {
                $this->error("    - {$error}");
            }
            if (count($errors) > 10) {
                $this->error('    ... and '.(count($errors) - 10).' more errors.');
            }
            $this->info('');
        }

        if ($failed > 0) {
            return self::FAILURE;
        }

        $this->info('  <fg=green>Migration complete!</>');
        $this->info('');
        $this->info('  Next steps:');
        $this->info('  1. Set STORAGE_DISK=oci in your .env file');
        $this->info('  2. Clear config cache: php artisan config:clear');
        $this->info('  3. Test your application');
        $this->info('');

        return self::SUCCESS;
    }

    /**
     * Format bytes to human readable format.
     */
    private function formatBytes(int $bytes): string
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
     * Format number with thousand separators.
     */
    private function formatNumber(int $number): string
    {
        return number_format($number);
    }
}
