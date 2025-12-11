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
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            
            // English fields
            $table->string('name_en')->nullable();
            $table->string('url_slug_en')->nullable();
            $table->string('meta_title_en')->nullable();
            $table->string('h1_title_en')->nullable();
            $table->string('og_title_en')->nullable();
            $table->string('hreflang_en')->nullable();
            $table->text('meta_description_en')->nullable();
            $table->text('og_description_en')->nullable();
            $table->string('og_image_en')->nullable();
            
            // Arabic fields
            $table->string('name_ar')->nullable();
            $table->string('url_slug_ar')->nullable();
            $table->string('meta_title_ar')->nullable();
            $table->string('h1_title_ar')->nullable();
            $table->string('og_title_ar')->nullable();
            $table->string('hreflang_ar')->nullable();
            $table->text('meta_description_ar')->nullable();
            $table->text('og_description_ar')->nullable();
            $table->string('og_image_ar')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
