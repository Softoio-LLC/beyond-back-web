<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
