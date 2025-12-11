<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PageSectionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ============================================
// PUBLIC WEBSITE ROUTES
// ============================================
Route::get('/', [WebsiteController::class, 'home'])->name('website.home');
Route::get('/ar', [WebsiteController::class, 'home'])->name('website.home.ar');

// ============================================
// DASHBOARD ROUTES (Auth Required)
// ============================================
Route::prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return redirect()->route('pages.index');
    })->name('dashboard');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthController::class, 'createLogin'])->name('login');
    Route::post('login', [AuthController::class, 'storeLogin']);

    Route::get('forgot-password', [AuthController::class, 'createForgotPassword'])->name('password.request');
    Route::post('forgot-password', [AuthController::class, 'storeForgotPassword'])->name('password.email');
    
    Route::get('reset-password/{token}', [AuthController::class, 'createResetPassword'])->name('password.reset');
    Route::post('reset-password', [AuthController::class, 'storeResetPassword'])->name('password.update');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'destroyLogin'])->name('logout');

    Route::get('/dashboard', function () {
        return redirect()->route('pages.index');
    })->name('dashboard');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // Pages CRUD routes
    Route::get('/pages', [PageController::class, 'index'])->name('pages.index');
    Route::get('/pages/create', [PageController::class, 'create'])->name('pages.create');
    Route::post('/pages', [PageController::class, 'store'])->name('pages.store');
    Route::get('/pages/{page}/edit', [PageController::class, 'edit'])->name('pages.edit');
    Route::put('/pages/{page}', [PageController::class, 'update'])->name('pages.update');
    Route::delete('/pages/{page}', [PageController::class, 'destroy'])->name('pages.destroy');
    Route::post('/pages/{page}/duplicate', [PageController::class, 'duplicate'])->name('pages.duplicate');

    // Page Builder / Section Management routes
    Route::prefix('pages/{page}/builder')->name('pages.builder.')->group(function () {
        Route::get('/', [PageSectionController::class, 'builder'])->name('index');
        Route::post('/sections', [PageSectionController::class, 'store'])->name('sections.store');
        Route::put('/sections/{section}', [PageSectionController::class, 'update'])->name('sections.update');
        Route::delete('/sections/{section}', [PageSectionController::class, 'destroy'])->name('sections.destroy');
        Route::post('/sections/{section}/duplicate', [PageSectionController::class, 'duplicate'])->name('sections.duplicate');
        Route::post('/sections/{section}/toggle', [PageSectionController::class, 'toggle'])->name('sections.toggle');
        Route::post('/sections/{section}/preview', [PageSectionController::class, 'preview'])->name('sections.preview');
        Route::post('/sections/reorder', [PageSectionController::class, 'reorder'])->name('sections.reorder');
    });

    // Media upload routes
    Route::prefix('media')->name('media.')->group(function () {
        Route::post('/upload/image', [MediaController::class, 'uploadSectionImage'])->name('upload.image');
        Route::post('/upload/icon', [MediaController::class, 'uploadSectionIcon'])->name('upload.icon');
        Route::post('/upload/images', [MediaController::class, 'uploadMultipleImages'])->name('upload.images');
        Route::delete('/delete', [MediaController::class, 'destroy'])->name('delete');
    });
});
