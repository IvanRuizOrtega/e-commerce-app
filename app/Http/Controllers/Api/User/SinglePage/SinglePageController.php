<?php


namespace App\Http\Controllers\Api\User\SinglePage;


use App\Http\Controllers\Controller;

final class SinglePageController extends Controller
{
    public function __invoke()
    {
        return view('user.layouts.app');
    }
}
