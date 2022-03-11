<?php

use App\Http\Controllers\Admin\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('admin');

Route::get('/users', function () {
    return 'users';
})->name('users');



Route::resource('posts', PostController::class);
