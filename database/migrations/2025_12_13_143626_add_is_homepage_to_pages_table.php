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
        Schema::table('pages', function (Blueprint $table) {
            $table->boolean('is_homepage')->default(false)->after('og_image_ar');
            $table->boolean('is_published')->default(true)->after('is_homepage');

            // Add unique index for slugs (only for non-null values)
            $table->unique('url_slug_en');
            $table->unique('url_slug_ar');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->dropUnique(['url_slug_en']);
            $table->dropUnique(['url_slug_ar']);
            $table->dropColumn(['is_homepage', 'is_published']);
        });
    }
};
