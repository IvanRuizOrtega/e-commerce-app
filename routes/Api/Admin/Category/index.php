<?php

use Illuminate\Support\Facades\Route;

Route::middleware(\Src\Resource\Constants\Constant::AUTH_ADMIN)->group(function () {
    Route::get('admin:categories', \App\Http\Controllers\Api\Admin\Category\CategoryController::class);
});
