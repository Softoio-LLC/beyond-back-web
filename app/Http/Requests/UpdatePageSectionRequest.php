<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePageSectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Authorization handled by middleware
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'is_active' => 'nullable|boolean',
            'content' => 'required|array',
            'custom_css' => 'nullable|string|max:5000',
            
            // Content validation (flexible based on section type)
            'content.title_en' => 'nullable|string|max:500',
            'content.title_ar' => 'nullable|string|max:500',
            'content.description_en' => 'nullable|string|max:10000',
            'content.description_ar' => 'nullable|string|max:10000',
            
            // Images array validation
            'content.images' => 'nullable|array|max:50',
            'content.images.*.path' => 'nullable|string|max:500',
            'content.images.*.caption_en' => 'nullable|string|max:255',
            'content.images.*.caption_ar' => 'nullable|string|max:255',
            'content.images.*.size' => 'nullable|string|in:thumbnail,small,medium,large,hero,original',
            'content.images.*.alignment' => 'nullable|string|in:left,center,right',
            
            // Button configuration
            'content.button' => 'nullable|array',
            'content.button.text_en' => 'nullable|string|max:100',
            'content.button.text_ar' => 'nullable|string|max:100',
            'content.button.url' => 'nullable|string|max:500',
            'content.button.icon' => 'nullable|string|max:255',
            'content.button.icon_position' => 'nullable|string|in:before,after',
            'content.button.icon_alignment' => 'nullable|string|in:left,center,right',
            
            // Animation settings (for counter sections)
            'content.animation' => 'nullable|array',
            'content.animation.start_number' => 'nullable|integer|min:0',
            'content.animation.end_number' => 'nullable|integer|min:0',
            'content.animation.unit' => 'nullable|string|max:20',
            'content.animation.duration' => 'nullable|integer|min:100|max:10000',
            
            // Items array (for FAQ, services, team, etc.)
            'content.items' => 'nullable|array|max:100',
            'content.items.*.title_en' => 'nullable|string|max:500',
            'content.items.*.title_ar' => 'nullable|string|max:500',
            'content.items.*.description_en' => 'nullable|string|max:5000',
            'content.items.*.description_ar' => 'nullable|string|max:5000',
            'content.items.*.image' => 'nullable|string|max:500',
            'content.items.*.icon' => 'nullable|string|max:255',
            'content.items.*.url' => 'nullable|string|max:500',
            
            // Counters array (for statistics section)
            'content.counters' => 'nullable|array|max:10',
            'content.counters.*.label_en' => 'nullable|string|max:100',
            'content.counters.*.label_ar' => 'nullable|string|max:100',
            'content.counters.*.start_number' => 'nullable|integer|min:0',
            'content.counters.*.end_number' => 'nullable|integer|min:0',
            'content.counters.*.unit' => 'nullable|string|max:20',
            'content.counters.*.duration' => 'nullable|integer|min:100|max:10000',
            
            // Partners/brands logos
            'content.logos' => 'nullable|array|max:50',
            'content.logos.*.path' => 'nullable|string|max:500',
            'content.logos.*.alt_en' => 'nullable|string|max:100',
            'content.logos.*.alt_ar' => 'nullable|string|max:100',
            'content.logos.*.url' => 'nullable|string|max:500',
            
            // Slider items
            'content.slides' => 'nullable|array|max:20',
            'content.slides.*.title_en' => 'nullable|string|max:500',
            'content.slides.*.title_ar' => 'nullable|string|max:500',
            'content.slides.*.subtitle_en' => 'nullable|string|max:500',
            'content.slides.*.subtitle_ar' => 'nullable|string|max:500',
            'content.slides.*.description_en' => 'nullable|string|max:2000',
            'content.slides.*.description_ar' => 'nullable|string|max:2000',
            'content.slides.*.image' => 'nullable|string|max:500',
            'content.slides.*.background_image' => 'nullable|string|max:500',
            'content.slides.*.button_text_en' => 'nullable|string|max:100',
            'content.slides.*.button_text_ar' => 'nullable|string|max:100',
            'content.slides.*.button_url' => 'nullable|string|max:500',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        // Ensure content is an array
        if ($this->has('content') && is_string($this->content)) {
            $this->merge([
                'content' => json_decode($this->content, true) ?? [],
            ]);
        }
    }
}
