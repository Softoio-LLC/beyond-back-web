<?php

namespace App\Console\Commands;

use App\Models\Page;
use App\Models\PageSection;
use App\Models\SectionType;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class SyncMenuLinksWithPages extends Command
{
    protected $signature = 'menu:sync-pages 
                            {--header : Only sync header menu}
                            {--footer : Only sync footer menu}
                            {--dry-run : Show what would be changed without making changes}
                            {--children : Also sync children/dropdown menu items}';

    protected $description = 'Sync header and footer menu links with page slugs from the database';

    /**
     * Cached pages collection
     */
    protected $pages;

    public function handle(): int
    {
        $this->info('Starting menu sync with page slugs...');
        $this->newLine();

        $dryRun = $this->option('dry-run');
        $syncHeader = $this->option('header') || (! $this->option('header') && ! $this->option('footer'));
        $syncFooter = $this->option('footer') || (! $this->option('header') && ! $this->option('footer'));

        if ($dryRun) {
            $this->warn('DRY RUN MODE - No changes will be made');
            $this->newLine();
        }

        // Load all pages with their slugs
        $this->pages = $this->loadPages();

        if ($this->pages->isEmpty()) {
            $this->error('No pages found in the database.');

            return Command::FAILURE;
        }

        $this->info("Found {$this->pages->count()} pages in the database:");
        $this->displayPagesTable($this->pages);
        $this->newLine();

        $totalUpdated = 0;

        if ($syncHeader) {
            $headerUpdated = $this->syncHeaderMenus($dryRun);
            $totalUpdated += $headerUpdated;
        }

        if ($syncFooter) {
            $footerUpdated = $this->syncFooterMenus($dryRun);
            $totalUpdated += $footerUpdated;
        }

        $this->newLine();
        if ($dryRun) {
            $this->info("Would update {$totalUpdated} section(s).");
        } else {
            $this->info("Updated {$totalUpdated} section(s).");
        }

        return Command::SUCCESS;
    }

    /**
     * Load all published pages
     */
    protected function loadPages()
    {
        return Page::select(['id', 'name_en', 'name_ar', 'url_slug_en', 'url_slug_ar', 'is_homepage'])
            ->where('is_published', true)
            ->get();
    }

    /**
     * Display pages in a table format
     */
    protected function displayPagesTable($pages): void
    {
        $headers = ['ID', 'Name (EN)', 'Name (AR)', 'Slug (EN)', 'Slug (AR)', 'Homepage'];
        $rows = $pages->map(fn ($page) => [
            $page->id,
            $page->name_en,
            $page->name_ar,
            $page->url_slug_en,
            $page->url_slug_ar,
            $page->is_homepage ? 'Yes' : 'No',
        ])->toArray();

        $this->table($headers, $rows);
    }

    /**
     * Sync header menu sections
     */
    protected function syncHeaderMenus(bool $dryRun): int
    {
        $this->info('Syncing Header Menus...');

        $headerType = SectionType::where('key', 'header')->first();
        if (! $headerType) {
            $this->warn('  Header section type not found.');

            return 0;
        }

        $headerSections = PageSection::where('section_type_id', $headerType->id)->get();

        if ($headerSections->isEmpty()) {
            $this->warn('  No header sections found.');

            return 0;
        }

        $updated = 0;
        foreach ($headerSections as $section) {
            $result = $this->updateHeaderContent($section, $dryRun);
            if ($result) {
                $updated++;
            }
        }

        return $updated;
    }

    /**
     * Sync footer menu sections
     */
    protected function syncFooterMenus(bool $dryRun): int
    {
        $this->info('Syncing Footer Menus...');

        $footerType = SectionType::where('key', 'footer')->first();
        if (! $footerType) {
            $this->warn('  Footer section type not found.');

            return 0;
        }

        $footerSections = PageSection::where('section_type_id', $footerType->id)->get();

        if ($footerSections->isEmpty()) {
            $this->warn('  No footer sections found.');

            return 0;
        }

        $updated = 0;
        foreach ($footerSections as $section) {
            $result = $this->updateFooterContent($section, $dryRun);
            if ($result) {
                $updated++;
            }
        }

        return $updated;
    }

    /**
     * Update header section content with page slugs
     */
    protected function updateHeaderContent(PageSection $section, bool $dryRun): bool
    {
        $content = $section->content;

        if (! isset($content['menu_items']) || ! is_array($content['menu_items'])) {
            $this->line("  Section ID {$section->id}: No menu_items found");

            return false;
        }

        $changed = false;
        $this->line("  Processing Header Section ID: {$section->id} (Page ID: {$section->page_id})");

        foreach ($content['menu_items'] as $index => &$item) {
            $itemChanged = $this->updateMenuItem($item, '    ');
            if ($itemChanged) {
                $changed = true;
            }

            // Process children if present and --children option is set
            if ($this->option('children') && isset($item['children']) && is_array($item['children'])) {
                foreach ($item['children'] as $childIndex => &$child) {
                    $childChanged = $this->updateMenuItem($child, '      ');
                    if ($childChanged) {
                        $changed = true;
                    }
                }
            }
        }

        if ($changed && ! $dryRun) {
            $section->content = $content;
            $section->save();
            $this->info('    ✓ Section saved');
        }

        return $changed;
    }

    /**
     * Update footer section content with page slugs
     */
    protected function updateFooterContent(PageSection $section, bool $dryRun): bool
    {
        $content = $section->content;

        if (! isset($content['menu_columns']) || ! is_array($content['menu_columns'])) {
            $this->line("  Section ID {$section->id}: No menu_columns found");

            return false;
        }

        $changed = false;
        $this->line("  Processing Footer Section ID: {$section->id} (Page ID: {$section->page_id})");

        foreach ($content['menu_columns'] as $colIndex => &$column) {
            if (isset($column['links']) && is_array($column['links'])) {
                foreach ($column['links'] as $linkIndex => &$link) {
                    $linkChanged = $this->updateMenuItem($link, '    ');
                    if ($linkChanged) {
                        $changed = true;
                    }
                }
            }
        }

        if ($changed && ! $dryRun) {
            $section->content = $content;
            $section->save();
            $this->info('    ✓ Section saved');
        }

        return $changed;
    }

    /**
     * Update a single menu item with correct URLs from database
     */
    protected function updateMenuItem(array &$item, string $indent = ''): bool
    {
        $labelEn = trim($item['label_en'] ?? '');
        $labelAr = trim($item['label_ar'] ?? '');

        // Get current URLs - check both old format (url) and new format (url_en/url_ar)
        $currentUrlEn = $item['url_en'] ?? $item['url'] ?? '#';
        $currentUrlAr = $item['url_ar'] ?? $item['url'] ?? '#';

        // Skip if BOTH are external/special URLs
        if ($this->isExternalOrSpecialUrl($currentUrlEn) && $this->isExternalOrSpecialUrl($currentUrlAr)) {
            // But still process if url is just '#' - we want to replace those!
            if ($currentUrlEn !== '#' && $currentUrlAr !== '#') {
                return false;
            }
        }

        // Try to find matching page from database
        $page = $this->findMatchingPage($labelEn, $labelAr);

        if (! $page) {
            $this->line("{$indent}⚠ No page match for: '{$labelEn}' / '{$labelAr}'");

            return false;
        }

        $changed = false;

        // Generate correct URLs from page slugs
        $newUrlEn = $this->generateUrl($page, 'en');
        $newUrlAr = $this->generateUrl($page, 'ar');

        // Check if URLs changed - compare with whatever format currently exists
        $oldUrlEn = $item['url_en'] ?? $item['url'] ?? '';
        $oldUrlAr = $item['url_ar'] ?? $item['url'] ?? '';

        if ($oldUrlEn !== $newUrlEn) {
            $this->line("{$indent}→ [{$labelEn}] url_en: {$oldUrlEn} → {$newUrlEn}");
            $item['url_en'] = $newUrlEn;
            $changed = true;
        }

        if ($oldUrlAr !== $newUrlAr) {
            $this->line("{$indent}→ [{$labelAr}] url_ar: {$oldUrlAr} → {$newUrlAr}");
            $item['url_ar'] = $newUrlAr;
            $changed = true;
        }

        // Remove legacy 'url' field since we now have url_en and url_ar
        if (isset($item['url'])) {
            unset($item['url']);
            $changed = true;
        }

        return $changed;
    }

    /**
     * Find a matching page based on menu labels by comparing with page names from database
     */
    protected function findMatchingPage(string $labelEn, string $labelAr): ?Page
    {
        $labelEnLower = strtolower($labelEn);
        $labelEnNormalized = $this->normalizeString($labelEn);
        $labelArNormalized = $this->normalizeString($labelAr);

        // 1. Exact match on name_en or name_ar
        $page = $this->pages->first(function ($p) use ($labelEnLower, $labelAr) {
            return strtolower($p->name_en) === $labelEnLower || $p->name_ar === $labelAr;
        });

        if ($page) {
            return $page;
        }

        // 2. Normalized match (remove special chars, lowercase)
        $page = $this->pages->first(function ($p) use ($labelEnNormalized, $labelArNormalized) {
            return $this->normalizeString($p->name_en) === $labelEnNormalized ||
                   $this->normalizeString($p->name_ar) === $labelArNormalized;
        });

        if ($page) {
            return $page;
        }

        // 3. Partial match - label contains page name or vice versa
        $page = $this->pages->first(function ($p) use ($labelEnLower, $labelAr) {
            $pageNameEn = strtolower($p->name_en);
            $pageNameAr = $p->name_ar;

            return Str::contains($labelEnLower, $pageNameEn) ||
                   Str::contains($pageNameEn, $labelEnLower) ||
                   Str::contains($labelAr, $pageNameAr) ||
                   Str::contains($pageNameAr, $labelAr);
        });

        if ($page) {
            return $page;
        }

        // 4. Match by slug similarity
        $page = $this->pages->first(function ($p) use ($labelEnNormalized, $labelArNormalized) {
            $slugEnNormalized = $this->normalizeString($p->url_slug_en);
            $slugArNormalized = $this->normalizeString($p->url_slug_ar);

            return $slugEnNormalized === $labelEnNormalized ||
                   $slugArNormalized === $labelArNormalized ||
                   Str::contains($slugEnNormalized, $labelEnNormalized) ||
                   Str::contains($labelEnNormalized, $slugEnNormalized);
        });

        return $page;
    }

    /**
     * Normalize string for comparison - remove special chars, lowercase
     */
    protected function normalizeString(string $str): string
    {
        // Remove special characters but keep Arabic letters
        $str = preg_replace('/[^\p{L}\p{N}\s]/u', '', $str);
        // Convert to lowercase (for English)
        $str = mb_strtolower($str, 'UTF-8');
        // Remove extra spaces
        $str = preg_replace('/\s+/', '', $str);

        return $str;
    }

    /**
     * Generate URL for a page in the given language using database slugs
     */
    protected function generateUrl(Page $page, string $lang): string
    {
        // Homepage special case
        if ($page->is_homepage) {
            return $lang === 'ar' ? '/ar' : '/';
        }

        $slug = $lang === 'ar' ? $page->url_slug_ar : $page->url_slug_en;

        // Ensure slug doesn't start with /
        $slug = ltrim($slug, '/');

        if ($lang === 'ar') {
            return "/ar/{$slug}";
        }

        return "/{$slug}";
    }

    /**
     * Check if URL is external or special (mailto, tel, anchor, etc.)
     */
    protected function isExternalOrSpecialUrl(string $url): bool
    {
        $url = trim($url);

        return str_starts_with($url, 'http://') ||
               str_starts_with($url, 'https://') ||
               str_starts_with($url, 'mailto:') ||
               str_starts_with($url, 'tel:') ||
               str_starts_with($url, 'javascript:') ||
               str_starts_with($url, '#') ||
               str_starts_with($url, 'wa.me') ||
               str_contains($url, 'whatsapp');
    }
}
