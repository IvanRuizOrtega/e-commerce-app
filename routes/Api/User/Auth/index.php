<?php

use Illuminate\Support\Facades\Route;

Route::post('login', [
    \App\Http\Controllers\Api\User\Auth\AuthController::class, 'login'
]);
Route::middleware(\Src\Resource\Constants\Constant::AUTH_USER)->post('logout', [
    \App\Http\Controllers\Api\User\Auth\AuthController::class, 'logout'
]);
