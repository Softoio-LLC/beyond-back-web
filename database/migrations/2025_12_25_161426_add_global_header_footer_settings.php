<?php

use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Add global header settings
        Setting::set('global_header', [
            'logo' => '/assets/img/logo.png',
            'logo_dark' => '/assets/img/logo-black.png',
            'menu_items' => [],
            'contact_button_text_en' => 'Contact Us',
            'contact_button_text_ar' => 'تواصل معنا',
            'contact_button_url' => '/contact',
            'flag_ar' => '/assets/img/flag-1.png',
            'flag_en' => '/assets/img/flag-2.png',
        ], 'global', 'json');

        // Add global footer settings
        Setting::set('global_footer', [
            'logo' => '/assets/img/logo.png',
            'tagline_en' => '',
            'tagline_ar' => '',
            'menu_columns' => [],
            'contact_info' => [
                'title_en' => 'Contact Us',
                'title_ar' => 'تواصل معنا',
                'items' => [],
            ],
            'social' => [
                'title_en' => 'Follow Us',
                'title_ar' => 'تابعنا',
                'links' => [],
            ],
            'copyright_text' => 'All Rights Reserved Beyond © '.date('Y'),
            'shape_image' => null,
        ], 'global', 'json');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Remove global settings
        Setting::where('key', 'global_header')->delete();
        Setting::where('key', 'global_footer')->delete();
    }
};
