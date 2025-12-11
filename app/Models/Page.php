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
        ];
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
            ->whereHas('sectionType', fn($q) => $q->where('key', 'header'))
            ->first();
    }

    /**
     * Get footer section for this page.
     */
    public function getFooterSection(): ?PageSection
    {
        return $this->sections()
            ->whereHas('sectionType', fn($q) => $q->where('key', 'footer'))
            ->first();
    }

    /**
     * Get content sections (excluding header/footer).
     */
    public function getContentSections()
    {
        return $this->sections()
            ->whereHas('sectionType', fn($q) => $q->where('is_fixed', false))
            ->get();
    }

    /**
     * Initialize default sections for a new page.
     */
    public function initializeDefaultSections(): void
    {
        $sectionTypes = SectionType::active()->ordered()->get();
        
        foreach ($sectionTypes as $index => $type) {
            $type->createDefaultSection($this->id, $index);
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
