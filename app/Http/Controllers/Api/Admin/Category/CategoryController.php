<?php


namespace App\Http\Controllers\Api\Admin\Category;


use App\Http\Controllers\Controller;
use App\Models\Category;
use Src\Resource\Traits\Response\ApiResponse;

final class CategoryController extends Controller
{
    use ApiResponse;

    private $model;

    public function __construct(Category $model)
    {
        $this->middleware(\Src\Resource\Constants\Constant::AUTH_ADMIN);
        $this->model = $model;
    }

    public function __invoke()
    {
        $resp = $this->model->get();
        return $this->successResponse($resp);
    }
}
