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
        Schema::create('section_types', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique(); // e.g., 'hero', 'partners', 'about_us'
            $table->string('name_en'); // Display name in English
            $table->string('name_ar'); // Display name in Arabic
            $table->string('icon')->nullable(); // FontAwesome or custom icon class
            $table->string('preview_image')->nullable(); // Path to preview image for hover
            $table->string('component_name'); // Vue component name e.g., 'HeroSection'
            $table->json('default_content'); // Default JSON schema for this section type
            $table->boolean('is_fixed')->default(false); // True for Header/Footer
            $table->integer('default_order')->default(0); // Default sort order
            $table->boolean('is_active')->default(true); // Can be used in pages
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('section_types');
    }
};
