<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StorageLog extends Model
{
    protected $fillable = [
        'level',
        'action',
        'file_path',
        'disk_attempted',
        'disk_used',
        'error_message',
    ];

    /**
     * Log a storage fallback event.
     */
    public static function logFallback(string $action, string $filePath, string $diskAttempted, string $diskUsed, string $error): static
    {
        return static::create([
            'level' => 'warning',
            'action' => $action,
            'file_path' => $filePath,
            'disk_attempted' => $diskAttempted,
            'disk_used' => $diskUsed,
            'error_message' => $error,
        ]);
    }

    /**
     * Log a storage error event.
     */
    public static function logError(string $action, string $filePath, string $diskAttempted, string $error): static
    {
        return static::create([
            'level' => 'error',
            'action' => $action,
            'file_path' => $filePath,
            'disk_attempted' => $diskAttempted,
            'disk_used' => $diskAttempted,
            'error_message' => $error,
        ]);
    }

    /**
     * Log a successful connection recovery.
     */
    public static function logInfo(string $action, string $message): static
    {
        return static::create([
            'level' => 'info',
            'action' => $action,
            'file_path' => null,
            'disk_attempted' => config('filesystems.uploads', 'public'),
            'disk_used' => config('filesystems.uploads', 'public'),
            'error_message' => $message,
        ]);
    }
}
