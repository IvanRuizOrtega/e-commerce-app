<?php

use Illuminate\Support\Facades\Route;

Route::middleware(\Src\Resource\Constants\Constant::AUTH_USER)->group(function () {
    Route::get('products', [\App\Http\Controllers\Api\User\Product\ProductController::class, 'index']);

    Route::get('products/{product}', [
        \App\Http\Controllers\Api\User\Product\ProductController::class, 'show'
    ])->whereUuid('product');

    Route::put('products/{product}', [
        \App\Http\Controllers\Api\User\Product\ProductController::class, 'update'
    ])->whereUuid('product');
});

