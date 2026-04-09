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
        Schema::create('storage_logs', function (Blueprint $table) {
            $table->id();
            $table->string('level')->default('error');
            $table->string('action');
            $table->string('file_path')->nullable();
            $table->string('disk_attempted');
            $table->string('disk_used');
            $table->text('error_message')->nullable();
            $table->timestamps();

            $table->index('created_at');
            $table->index('level');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('storage_logs');
    }
};
