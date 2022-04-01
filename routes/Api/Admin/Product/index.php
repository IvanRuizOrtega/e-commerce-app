<?php

use Illuminate\Support\Facades\Route;

Route::middleware(\Src\Resource\Constants\Constant::AUTH_ADMIN)->group(function () {
    Route::get('admin:products', [\App\Http\Controllers\Api\Admin\Product\ProductController::class, 'index']);

    Route::post('admin:products', [\App\Http\Controllers\Api\Admin\Product\ProductController::class, 'store']);

    Route::get('admin:products/{product}', [
        \App\Http\Controllers\Api\Admin\Product\ProductController::class, 'show'
    ])->whereUuid('product');

    Route::put('admin:products/{product}', [
        \App\Http\Controllers\Api\Admin\Product\ProductController::class, 'update'
    ])->whereUuid('product');

    Route::delete('admin:products/{product}', [
        \App\Http\Controllers\Api\Admin\Product\ProductController::class, 'destroy'
    ])->whereUuid('product');
});

