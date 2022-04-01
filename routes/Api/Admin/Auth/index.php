<?php

use Illuminate\Support\Facades\Route;

Route::post('admin:login', [
    \App\Http\Controllers\Api\Admin\Auth\AuthController::class, 'login'
]);
Route::middleware(\Src\Resource\Constants\Constant::AUTH_ADMIN)->post('admin:logout', [
    \App\Http\Controllers\Api\Admin\Auth\AuthController::class, 'logout'
]);
