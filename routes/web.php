<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PageSectionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicContactController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;

// ============================================
// SEO ROUTES (sitemap, robots)
// ============================================
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');
Route::get('/robots.txt', [SitemapController::class, 'robots'])->name('robots');

// ============================================
// IMAGE OPTIMIZATION ROUTES
// ============================================
Route::get('/img', [ImageController::class, 'show'])->name('image.show');
Route::post('/img/clear-cache', [ImageController::class, 'clearCache'])->name('image.clear-cache')->middleware('auth');

// ============================================
// TEST ROUTES (Development Only)
// ============================================
Route::middleware('auth')->prefix('test')->group(function () {
    Route::get('/storage', function () {
        return \Inertia\Inertia::render('Test/StorageTest');
    })->name('test.storage');
});

// ============================================
// PUBLIC WEBSITE ROUTES
// ============================================
Route::get('/', [WebsiteController::class, 'home'])->name('website.home');
Route::get('/ar', [WebsiteController::class, 'home'])->name('website.home.ar');
Route::get('/en', [WebsiteController::class, 'home'])->name('website.home.en');

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

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // Contacts routes
    Route::prefix('contacts')->name('contacts.')->group(function () {
        Route::get('/', [ContactController::class, 'index'])->name('index');
        Route::get('/{contact}', [ContactController::class, 'show'])->name('show');
        Route::delete('/{contact}', [ContactController::class, 'destroy'])->name('destroy');
        Route::post('/{contact}/toggle-read', [ContactController::class, 'toggleRead'])->name('toggle-read');
        Route::post('/bulk-delete', [ContactController::class, 'bulkDestroy'])->name('bulk-destroy');
        Route::post('/bulk-mark-read', [ContactController::class, 'bulkMarkRead'])->name('bulk-mark-read');
    });

    // Settings routes
    Route::prefix('settings')->name('settings.')->group(function () {
        Route::get('/custom-code', [SettingsController::class, 'customCode'])->name('custom-code');
        Route::put('/custom-code', [SettingsController::class, 'updateCustomCode'])->name('custom-code.update');
        Route::get('/seo', [SettingsController::class, 'seo'])->name('seo');
        Route::put('/seo', [SettingsController::class, 'updateSeo'])->name('seo.update');
        Route::get('/email', [SettingsController::class, 'email'])->name('email');
        Route::put('/email', [SettingsController::class, 'updateEmail'])->name('email.update');
        Route::post('/email/test', [SettingsController::class, 'testEmail'])->name('email.test');
        Route::get('/storage', [SettingsController::class, 'storage'])->name('storage');
        Route::put('/storage/disk', [SettingsController::class, 'updateStorageDisk'])->name('storage.disk.update');
        Route::post('/storage/test-connection', [SettingsController::class, 'testStorageConnection'])->name('storage.test-connection');
        Route::post('/storage/dry-run', [SettingsController::class, 'storageDryRun'])->name('storage.dry-run');
        Route::post('/storage/migrate', [SettingsController::class, 'storageMigrate'])->name('storage.migrate');
        Route::delete('/storage/logs', [SettingsController::class, 'clearStorageLogs'])->name('storage.logs.clear');
    });

    // Pages CRUD routes
    Route::get('/pages', [PageController::class, 'index'])->name('pages.index');
    Route::get('/pages/create', [PageController::class, 'create'])->name('pages.create');
    Route::post('/pages', [PageController::class, 'store'])->name('pages.store');
    Route::get('/pages/{page}/edit', [PageController::class, 'edit'])->name('pages.edit');
    Route::put('/pages/{page}', [PageController::class, 'update'])->name('pages.update');
    Route::delete('/pages/{page}', [PageController::class, 'destroy'])->name('pages.destroy');
    Route::post('/pages/{page}/duplicate', [PageController::class, 'duplicate'])->name('pages.duplicate');
    Route::post('/pages/{page}/toggle-homepage', [PageController::class, 'toggleHomepage'])->name('pages.toggle-homepage');
    Route::post('/pages/{page}/toggle-published', [PageController::class, 'togglePublished'])->name('pages.toggle-published');

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

// ============================================
// PUBLIC CONTACT FORM
// ============================================
Route::post('/contact', [PublicContactController::class, 'store'])->name('contact.store');

// ============================================
// DYNAMIC PAGE ROUTES (must be last - catch-all)
// ============================================
// Arabic routes need to accept URL-encoded Arabic characters
Route::get('/ar/{slug}', [WebsiteController::class, 'showBySlug'])->name('website.page.ar')->where('slug', '.*');
// English routes with /en prefix
Route::get('/en/{slug}', [WebsiteController::class, 'showBySlug'])->name('website.page.en')->where('slug', '[a-zA-Z0-9\-_]+');
// Default English routes (no prefix)
Route::get('/{slug}', [WebsiteController::class, 'showBySlug'])->name('website.page')->where('slug', '[a-zA-Z0-9\-_]+');
