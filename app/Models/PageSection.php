<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PageSection extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'page_id',
        'section_type_id',
        'order',
        'is_active',
        'content',
        'custom_css',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'content' => 'array',
            'is_active' => 'boolean',
            'order' => 'integer',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

    /**
     * Get the page that owns this section.
     */
    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    /**
     * Get the section type.
     */
    public function sectionType(): BelongsTo
    {
        return $this->belongsTo(SectionType::class);
    }

    /**
     * Scope to get only active sections.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to order by position.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }

    /**
     * Get content value by key with language fallback.
     */
    public function getContent(string $key, string $lang = 'en', $default = null)
    {
        $content = $this->content ?? [];
        $langKey = "{$key}_{$lang}";
        
        return $content[$langKey] ?? $content[$key] ?? $default;
    }

    /**
     * Set content value by key.
     */
    public function setContent(string $key, $value): self
    {
        $content = $this->content ?? [];
        $content[$key] = $value;
        $this->content = $content;
        
        return $this;
    }

    /**
     * Merge content values.
     */
    public function mergeContent(array $newContent): self
    {
        $this->content = array_merge($this->content ?? [], $newContent);
        
        return $this;
    }

    /**
     * Get images from content.
     */
    public function getImages(): array
    {
        return $this->content['images'] ?? [];
    }

    /**
     * Get button configuration from content.
     */
    public function getButton(): array
    {
        return $this->content['button'] ?? [];
    }

    /**
     * Get animation settings from content.
     */
    public function getAnimation(): array
    {
        return $this->content['animation'] ?? [];
    }
}
