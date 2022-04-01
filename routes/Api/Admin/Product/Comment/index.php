<?php

use Illuminate\Support\Facades\Route;

Route::middleware(\Src\Resource\Constants\Constant::AUTH_ADMIN)->group(function () {

    Route::put('admin:products/{product}/is-approved-comment/{comment}', [
        \App\Http\Controllers\Api\Admin\Product\Comment\CommentController::class, 'update'
    ])->whereUuid(['product', 'comment']);

});
