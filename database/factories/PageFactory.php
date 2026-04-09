<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Page>
 */
class PageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // English fields
            'name_en' => fake()->words(3, true),
            'url_slug_en' => fake()->slug(),
            'meta_title_en' => fake()->sentence(),
            'h1_title_en' => fake()->sentence(),
            'og_title_en' => fake()->sentence(),
            'hreflang_en' => 'en-US',
            'meta_description_en' => fake()->paragraph(),
            'og_description_en' => fake()->paragraph(),
            'og_image_en' => null,

            // Arabic fields
            'name_ar' => fake()->words(3, true),
            'url_slug_ar' => fake()->slug(),
            'meta_title_ar' => fake()->sentence(),
            'h1_title_ar' => fake()->sentence(),
            'og_title_ar' => fake()->sentence(),
            'hreflang_ar' => 'ar-SA',
            'meta_description_ar' => fake()->paragraph(),
            'og_description_ar' => fake()->paragraph(),
            'og_image_ar' => null,
        ];
    }
}
