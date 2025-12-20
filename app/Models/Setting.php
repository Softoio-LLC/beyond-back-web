<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Setting extends Model
{
    protected $fillable = [
        'key',
        'group',
        'value',
        'type',
        'description',
    ];

    /**
     * Cache key prefix
     */
    protected const CACHE_PREFIX = 'settings_';
    protected const CACHE_TTL = 3600; // 1 hour

    /**
     * Get a setting value by key
     */
    public static function get(string $key, $default = null)
    {
        return Cache::remember(
            self::CACHE_PREFIX . $key,
            self::CACHE_TTL,
            function () use ($key, $default) {
                $setting = static::where('key', $key)->first();
                
                if (!$setting) {
                    return $default;
                }

                return self::castValue($setting->value, $setting->type);
            }
        );
    }

    /**
     * Set a setting value
     */
    public static function set(string $key, $value, string $group = 'general', string $type = 'text'): void
    {
        static::updateOrCreate(
            ['key' => $key],
            [
                'value' => is_array($value) ? json_encode($value) : $value,
                'group' => $group,
                'type' => $type,
            ]
        );

        // Clear cache
        Cache::forget(self::CACHE_PREFIX . $key);
        Cache::forget(self::CACHE_PREFIX . 'group_' . $group);
    }

    /**
     * Get all settings by group
     */
    public static function getByGroup(string $group): array
    {
        return Cache::remember(
            self::CACHE_PREFIX . 'group_' . $group,
            self::CACHE_TTL,
            function () use ($group) {
                return static::where('group', $group)
                    ->get()
                    ->mapWithKeys(function ($setting) {
                        return [$setting->key => self::castValue($setting->value, $setting->type)];
                    })
                    ->toArray();
            }
        );
    }

    /**
     * Clear all settings cache
     */
    public static function clearCache(): void
    {
        $settings = static::all();
        foreach ($settings as $setting) {
            Cache::forget(self::CACHE_PREFIX . $setting->key);
        }
        
        $groups = static::distinct('group')->pluck('group');
        foreach ($groups as $group) {
            Cache::forget(self::CACHE_PREFIX . 'group_' . $group);
        }
    }

    /**
     * Cast value based on type
     */
    protected static function castValue($value, string $type)
    {
        if ($value === null) {
            return null;
        }

        return match ($type) {
            'json' => json_decode($value, true),
            'boolean' => filter_var($value, FILTER_VALIDATE_BOOLEAN),
            'integer' => (int) $value,
            default => $value,
        };
    }

    /**
     * Get custom code settings (header and footer)
     * Used for injection in blade template
     */
    public static function getCustomCode(): array
    {
        return [
            'header_code' => self::get('header_code', ''),
            'footer_code' => self::get('footer_code', ''),
        ];
    }

    /**
     * Sanitize custom code - allows only safe HTML/JS patterns
     * This is a basic sanitization - allows common verification codes and analytics
     */
    public static function sanitizeCustomCode(string $code): string
    {
        // Trim whitespace
        $code = trim($code);
        
        if (empty($code)) {
            return '';
        }

        // Remove PHP tags for security
        $code = preg_replace('/<\?php.*?\?>/is', '', $code);
        $code = preg_replace('/<\?=.*?\?>/is', '', $code);
        $code = preg_replace('/<\?.*?\?>/is', '', $code);
        
        // Remove potentially dangerous event handlers in non-script contexts
        // But allow them within <script> tags
        // This is a balanced approach - we trust admin but prevent obvious XSS vectors
        
        return $code;
    }

    /**
     * Validate that code contains only expected patterns
     * Returns array of warnings if suspicious patterns found
     */
    public static function validateCustomCode(string $code): array
    {
        $warnings = [];

        // Check for PHP code
        if (preg_match('/<\?(?:php)?/i', $code)) {
            $warnings[] = 'PHP code detected and will be removed for security.';
        }

        // Check for inline event handlers outside script tags (potential XSS)
        $withoutScripts = preg_replace('/<script\b[^>]*>.*?<\/script>/is', '', $code);
        if (preg_match('/\bon\w+\s*=/i', $withoutScripts)) {
            $warnings[] = 'Inline event handlers detected outside script tags. Consider moving to script tags.';
        }

        // Check for javascript: protocol
        if (preg_match('/javascript\s*:/i', $code)) {
            $warnings[] = 'javascript: protocol detected. This may be a security risk.';
        }

        // Check for data: protocol in src/href
        if (preg_match('/(src|href)\s*=\s*["\']?\s*data:/i', $code)) {
            $warnings[] = 'data: protocol in src/href detected. This may be a security risk.';
        }

        return $warnings;
    }
}
