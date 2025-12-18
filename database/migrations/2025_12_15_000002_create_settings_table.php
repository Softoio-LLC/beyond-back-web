<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('group')->default('general'); // general, custom_code, seo, etc.
            $table->text('value')->nullable();
            $table->string('type')->default('text'); // text, json, boolean, html
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // Insert default settings
        DB::table('settings')->insert([
            [
                'key' => 'header_code',
                'group' => 'custom_code',
                'value' => null,
                'type' => 'html',
                'description' => 'Custom code injected in the <head> section (Google Analytics, verification codes, meta tags)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'footer_code',
                'group' => 'custom_code',
                'value' => null,
                'type' => 'html',
                'description' => 'Custom code injected before </body> (tracking scripts, chat widgets)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'default_schema',
                'group' => 'seo',
                'value' => null,
                'type' => 'json',
                'description' => 'Default JSON-LD schema for SEO',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
