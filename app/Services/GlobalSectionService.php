<?php

namespace App\Services;

use App\Models\Setting;
use Illuminate\Support\Facades\Cache;

class GlobalSectionService
{
    /**
     * Cache TTL in seconds (1 hour)
     */
    protected const CACHE_TTL = 3600;

    /**
     * Get global header content.
     * Returns the global settings for header (logo, menu_items, contact button, flags).
     */
    public function getGlobalHeader(): array
    {
        return Setting::get('global_header', [
            'logo' => '/assets/img/logo.png',
            'logo_dark' => '/assets/img/logo-black.png',
            'menu_items' => [],
            'contact_button_text_en' => 'Contact Us',
            'contact_button_text_ar' => 'تواصل معنا',
            'contact_button_url' => '/contact',
            'flag_ar' => '/assets/img/flag-1.png',
            'flag_en' => '/assets/img/flag-2.png',
        ]);
    }

    /**
     * Get global footer content.
     * Returns the global settings for footer (logo, menu columns, contact info, social links).
     */
    public function getGlobalFooter(): array
    {
        return Setting::get('global_footer', [
            'logo' => '/assets/img/logo.png',
            'tagline_en' => '',
            'tagline_ar' => '',
            'menu_columns' => [],
            'contact_info' => [
                'title_en' => 'Contact Us',
                'title_ar' => 'تواصل معنا',
                'items' => [],
            ],
            'social' => [
                'title_en' => 'Follow Us',
                'title_ar' => 'تابعنا',
                'links' => [],
            ],
            'copyright_text' => 'All Rights Reserved Beyond © '.date('Y'),
            'shape_image' => null,
        ]);
    }

    /**
     * Update global header content.
     */
    public function updateGlobalHeader(array $content): void
    {
        $current = $this->getGlobalHeader();
        $updated = array_merge($current, $content);
        Setting::set('global_header', $updated, 'global', 'json');
    }

    /**
     * Update global footer content.
     */
    public function updateGlobalFooter(array $content): void
    {
        $current = $this->getGlobalFooter();
        $updated = array_merge($current, $content);
        Setting::set('global_footer', $updated, 'global', 'json');
    }

    /**
     * Merge page-specific header content with global header.
     * Page-specific fields (variant) override global, but global provides nav, logo, etc.
     */
    public function mergeHeaderContent(array $pageContent): array
    {
        $global = $this->getGlobalHeader();

        // Page-specific fields that can override global
        $pageSpecificFields = ['variant'];

        // Start with global content
        $merged = $global;

        // Apply page-specific overrides
        foreach ($pageSpecificFields as $field) {
            if (isset($pageContent[$field])) {
                $merged[$field] = $pageContent[$field];
            }
        }

        // Set default variant if not specified
        if (! isset($merged['variant'])) {
            $merged['variant'] = 'dark';
        }

        return $merged;
    }

    /**
     * Merge page-specific footer content with global footer.
     * Currently footer is fully global, but this allows for future page-specific overrides.
     */
    public function mergeFooterContent(array $pageContent): array
    {
        $global = $this->getGlobalFooter();

        // Page-specific fields that can override global (none for now, but extensible)
        $pageSpecificFields = [];

        // Start with global content
        $merged = $global;

        // Apply page-specific overrides
        foreach ($pageSpecificFields as $field) {
            if (isset($pageContent[$field])) {
                $merged[$field] = $pageContent[$field];
            }
        }

        return $merged;
    }

    /**
     * Extract global fields from header content for saving to global settings.
     */
    public function extractGlobalHeaderFields(array $content): array
    {
        $globalFields = [
            'logo',
            'logo_dark',
            'menu_items',
            'contact_button_text_en',
            'contact_button_text_ar',
            'contact_button_url',
            'flag_ar',
            'flag_en',
            'check_icon',
        ];

        $globalContent = [];
        foreach ($globalFields as $field) {
            if (array_key_exists($field, $content)) {
                $globalContent[$field] = $content[$field];
            }
        }

        return $globalContent;
    }

    /**
     * Extract page-specific fields from header content for saving to page section.
     */
    public function extractPageHeaderFields(array $content): array
    {
        $pageFields = ['variant'];

        $pageContent = [];
        foreach ($pageFields as $field) {
            if (array_key_exists($field, $content)) {
                $pageContent[$field] = $content[$field];
            }
        }

        return $pageContent;
    }

    /**
     * Extract global fields from footer content for saving to global settings.
     */
    public function extractGlobalFooterFields(array $content): array
    {
        // All footer fields are global
        return $content;
    }

    /**
     * Check if a section type key is a global section (header or footer).
     */
    public function isGlobalSection(string $sectionTypeKey): bool
    {
        return in_array($sectionTypeKey, ['header', 'footer']);
    }
}
