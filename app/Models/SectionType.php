<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SectionType extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'key',
        'name_en',
        'name_ar',
        'icon',
        'preview_image',
        'component_name',
        'default_content',
        'is_fixed',
        'default_order',
        'is_active',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'default_content' => 'array',
            'is_fixed' => 'boolean',
            'is_active' => 'boolean',
            'default_order' => 'integer',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

    /**
     * Get all page sections using this type.
     */
    public function pageSections(): HasMany
    {
        return $this->hasMany(PageSection::class);
    }

    /**
     * Scope to get only active section types.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to get only fixed sections (header/footer).
     */
    public function scopeFixed($query)
    {
        return $query->where('is_fixed', true);
    }

    /**
     * Scope to get only non-fixed sections.
     */
    public function scopeDraggable($query)
    {
        return $query->where('is_fixed', false);
    }

    /**
     * Scope to order by default position.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('default_order', 'asc');
    }

    /**
     * Get localized name based on current locale.
     */
    public function getName(string $lang = 'en'): string
    {
        return $lang === 'ar' ? $this->name_ar : $this->name_en;
    }

    /**
     * Get the Vue component path.
     */
    public function getComponentPath(): string
    {
        return "Sections/{$this->component_name}";
    }

    /**
     * Create a new PageSection with default content for this type.
     */
    public function createDefaultSection(int $pageId, int $order = 0): PageSection
    {
        return PageSection::create([
            'page_id' => $pageId,
            'section_type_id' => $this->id,
            'order' => $order,
            'is_active' => true,
            'content' => $this->default_content,
        ]);
    }
}
