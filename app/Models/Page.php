<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        // English fields
        'name_en',
        'url_slug_en',
        'meta_title_en',
        'h1_title_en',
        'og_title_en',
        'hreflang_en',
        'meta_description_en',
        'og_description_en',
        'og_image_en',
        // Arabic fields
        'name_ar',
        'url_slug_ar',
        'meta_title_ar',
        'h1_title_ar',
        'og_title_ar',
        'hreflang_ar',
        'meta_description_ar',
        'og_description_ar',
        'og_image_ar',
        // Status fields
        'is_homepage',
        'is_published',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'is_homepage' => 'boolean',
            'is_published' => 'boolean',
        ];
    }

    /**
     * Scope to get only published pages.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    /**
     * Get the homepage.
     */
    public static function getHomepage(): ?self
    {
        return static::where('is_homepage', true)->published()->first();
    }

    /**
     * Get all slugs for published pages.
     */
    public static function getSlugs(): array
    {
        $slugs = static::select(['url_slug_en', 'url_slug_ar'])
            ->where('is_published', true)
            ->get()
            ->map(function ($page) {
                return [
                    'en' => $page->url_slug_en,
                    'ar' => $page->url_slug_ar,
                ];
            });

        return $slugs->toArray();
    }

    /**
     * Find a page by its slug based on language.
     */
    public static function findBySlug(string $slug, string $lang = 'en'): ?self
    {
        $field = $lang === 'ar' ? 'url_slug_ar' : 'url_slug_en';

        return static::where($field, $slug)->published()->first();
    }

    /**
     * Get the URL for this page based on language.
     */
    public function getUrl(string $lang = 'en'): string
    {
        if ($this->is_homepage) {
            return $lang === 'ar' ? '/ar' : '/';
        }

        $slug = $lang === 'ar' ? $this->url_slug_ar : $this->url_slug_en;

        return $lang === 'ar' ? "/ar/{$slug}" : "/{$slug}";
    }

    /**
     * Get all sections for this page.
     */
    public function sections(): HasMany
    {
        return $this->hasMany(PageSection::class)->ordered();
    }

    /**
     * Get only active sections for this page.
     */
    public function activeSections(): HasMany
    {
        return $this->hasMany(PageSection::class)->active()->ordered();
    }

    /**
     * Get header section for this page.
     */
    public function getHeaderSection(): ?PageSection
    {
        return $this->sections()
            ->whereHas('sectionType', fn ($q) => $q->where('key', 'header'))
            ->first();
    }

    /**
     * Get footer section for this page.
     */
    public function getFooterSection(): ?PageSection
    {
        return $this->sections()
            ->whereHas('sectionType', fn ($q) => $q->where('key', 'footer'))
            ->first();
    }

    /**
     * Get content sections (excluding header/footer).
     */
    public function getContentSections()
    {
        return $this->sections()
            ->whereHas('sectionType', fn ($q) => $q->where('is_fixed', false))
            ->get();
    }

    /**
     * Initialize default sections for a new page.
     * Only initializes fixed sections (header/footer) by default.
     * Content sections should be added manually via page builder.
     */
    public function initializeDefaultSections(): void
    {
        // Only create fixed sections (header and footer) for new pages
        $fixedSectionTypes = SectionType::active()->fixed()->ordered()->get();

        foreach ($fixedSectionTypes as $index => $type) {
            // Set order: header at 0, footer at high number
            $order = $type->key === 'footer' ? 999 : $index;
            $type->createDefaultSection($this->id, $order);
        }
    }

    /**
     * Initialize all sections for a new page (for homepage or template duplication).
     */
    public function initializeAllSections(): void
    {
        $sectionTypes = SectionType::active()->ordered()->get();

        foreach ($sectionTypes as $index => $type) {
            $type->createDefaultSection($this->id, $type->default_order ?? $index);
        }
    }

    /**
     * Duplicate all sections to a new page.
     */
    public function duplicateSectionsTo(Page $newPage): void
    {
        foreach ($this->sections as $section) {
            $newSection = $section->replicate();
            $newSection->page_id = $newPage->id;
            $newSection->save();
        }
    }
}
