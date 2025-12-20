<?php

namespace Database\Factories;

use App\Models\SectionType;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SectionType>
 */
class SectionTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->unique()->words(2, true);
        
        return [
            'key' => Str::slug($name, '_'),
            'name_en' => ucwords($name),
            'name_ar' => 'قسم تجريبي',
            'icon' => 'far fa-cube',
            'preview_image' => null,
            'component_name' => Str::studly($name) . 'Section',
            'default_content' => [
                'title_en' => '',
                'title_ar' => '',
                'description_en' => '',
                'description_ar' => '',
            ],
            'is_fixed' => false,
            'default_order' => fake()->numberBetween(1, 20),
            'is_active' => true,
        ];
    }

    /**
     * Indicate that the section type is fixed (header/footer).
     */
    public function fixed(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_fixed' => true,
        ]);
    }

    /**
     * Indicate that the section type is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}
