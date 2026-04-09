<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Remove unused section types that are not used in HTML templates
        // These sections are being removed: page-banner, newsletter, and duplicate contact_banner

        $sectionsToRemove = [
            'page-banner',      // Not used in any HTML template
            'newsletter',       // Not used in any HTML template
            'contact_banner',   // Duplicate of contact-banner (underscore vs hyphen)
        ];

        foreach ($sectionsToRemove as $sectionKey) {
            // First, delete any page_sections that use this section type
            DB::table('page_sections')
                ->whereIn('section_type_id', function ($query) use ($sectionKey) {
                    $query->select('id')
                        ->from('section_types')
                        ->where('key', $sectionKey);
                })
                ->delete();

            // Then delete the section type itself
            DB::table('section_types')
                ->where('key', $sectionKey)
                ->delete();
        }

        // Log the cleanup
        Log::info('Removed unused section types', [
            'sections' => $sectionsToRemove,
            'timestamp' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Note: This migration is destructive and cannot be fully reversed
        // The removed sections would need to be re-seeded from SectionContentSeeder
        // if you need to restore them

        Log::warning('Cannot reverse removal of unused section types - re-seed if needed');
    }
};
