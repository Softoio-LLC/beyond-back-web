<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('pages.index');
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
});
