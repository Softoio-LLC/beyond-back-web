<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthController::class, 'createLogin'])->name('login');
    Route::post('login', [AuthController::class, 'storeLogin']);

    Route::get('forgot-password', [AuthController::class, 'createForgotPassword'])->name('password.request');
    Route::post('forgot-password', [AuthController::class, 'storeForgotPassword'])->name('password.email');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'destroyLogin'])->name('logout');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
