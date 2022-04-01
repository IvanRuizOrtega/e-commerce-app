<?php

use Illuminate\Support\Facades\Route;

Route::middleware(\Src\Resource\Constants\Constant::AUTH_USER)->group(function () {
    Route::get('categories', \App\Http\Controllers\Api\User\Category\CategoryController::class);
    Route::get('categories/{category}', \App\Http\Controllers\Api\User\Category\ShowController::class);
});
