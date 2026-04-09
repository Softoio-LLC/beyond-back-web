<?php

namespace Database\Factories;

use App\Models\Page;
use App\Models\SectionType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PageSection>
 */
class PageSectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'page_id' => Page::factory(),
            'section_type_id' => SectionType::inRandomOrder()->first()?->id ?? 1,
            'order' => fake()->numberBetween(0, 20),
            'is_active' => fake()->boolean(90), // 90% chance of being active
            'content' => [
                'title_en' => fake()->sentence(4),
                'title_ar' => 'عنوان تجريبي',
                'description_en' => fake()->paragraph(),
                'description_ar' => 'وصف تجريبي للقسم',
            ],
            'custom_css' => null,
        ];
    }

    /**
     * Indicate that the section is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => true,
        ]);
    }

    /**
     * Indicate that the section is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }

    /**
     * Set a specific section type by key.
     */
    public function ofType(string $key): static
    {
        return $this->state(function (array $attributes) use ($key) {
            $sectionType = SectionType::where('key', $key)->first();

            return [
                'section_type_id' => $sectionType?->id ?? 1,
                'content' => $sectionType?->default_content ?? $attributes['content'],
            ];
        });
    }

    /**
     * Set the order position.
     */
    public function atPosition(int $order): static
    {
        return $this->state(fn (array $attributes) => [
            'order' => $order,
        ]);
    }
}
