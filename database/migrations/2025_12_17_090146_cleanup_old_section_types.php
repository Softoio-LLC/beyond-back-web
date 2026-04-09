<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Remove old/duplicate section types:
     * - 'hero' (replaced by 'hero_slider')
     * - 'slider' (duplicate, same as hero)
     * - 'contact_cta_2' (duplicate CTA, uses same InquirySection as 'inquiry')
     */
    public function up(): void
    {
        // Keys to remove
        $keysToRemove = ['hero', 'slider', 'contact_cta_2'];

        // Delete section types with these keys
        DB::table('section_types')->whereIn('key', $keysToRemove)->delete();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Cannot restore deleted section types - would need to re-seed
    }
};
