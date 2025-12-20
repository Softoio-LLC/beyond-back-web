<?php

namespace App\Http\Requests;

use App\Models\SectionType;
use Illuminate\Foundation\Http\FormRequest;

class StorePageSectionRequest extends FormRequest
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
            'section_type_id' => 'required|integer|exists:section_types,id',
            'is_active' => 'nullable|boolean',
            'content' => 'nullable|array',
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
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'section_type_id.required' => 'Please select a section type.',
            'section_type_id.exists' => 'The selected section type is invalid.',
            'content.images.max' => 'You can upload a maximum of 50 images.',
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
