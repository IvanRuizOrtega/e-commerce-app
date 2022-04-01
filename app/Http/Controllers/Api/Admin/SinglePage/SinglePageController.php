<?php


namespace App\Http\Controllers\Api\Admin\SinglePage;


use App\Http\Controllers\Controller;

final class SinglePageController extends Controller
{
    public function __invoke()
    {
        return view('admin.layouts.app');
    }
}
