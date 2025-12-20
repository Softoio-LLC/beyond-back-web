<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('page_sections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('page_id')->constrained()->cascadeOnDelete();
            $table->foreignId('section_type_id')->constrained()->cascadeOnDelete();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            
            // Content stored as JSON - bilingual structure
            // Structure: {
            //   "title_en": "...", "title_ar": "...",
            //   "description_en": "...", "description_ar": "...",
            //   "images": [{ "path": "...", "caption_en": "...", "caption_ar": "...", "size": "...", "alignment": "..." }],
            //   "button": { "text_en": "...", "text_ar": "...", "url": "...", "icon": "...", "icon_position": "..." },
            //   "animation": { "start_number": 0, "end_number": 100, "unit": "%", "duration": 2000 },
            //   ... additional fields based on section_type
            // }
            $table->json('content');
            
            // Custom CSS classes or inline styles if needed
            $table->text('custom_css')->nullable();
            
            $table->timestamps();
            
            // Index for faster queries
            $table->index(['page_id', 'order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_sections');
    }
};
