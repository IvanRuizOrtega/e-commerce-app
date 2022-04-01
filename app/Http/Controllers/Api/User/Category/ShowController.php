<?php


namespace App\Http\Controllers\Api\User\Category;


use App\Http\Controllers\Controller;
use Src\Resource\Gestion\User\Category\Infrastructure\Controllers\GetSubCategoryController;
use Src\Resource\Traits\Response\ApiResponse;

final class ShowController extends Controller
{
    use ApiResponse;

    /**
     * @var GetSubCategoryController
     */
    private $controller;

    /**
     * ShowController constructor.
     * @param GetSubCategoryController $controller
     */
    public function __construct(GetSubCategoryController $controller)
    {
        $this->middleware(\Src\Resource\Constants\Constant::AUTH_USER);
        $this->controller = $controller;
    }

    /**
     * @param string $category
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function __invoke(string $category)
    {
        $resp = $this->controller->__invoke($category);
        return $this->successResponse($resp);
    }
}
