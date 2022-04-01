<?php


namespace App\Http\Controllers\Api\User\Product;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\Product\Comment\CreateCommentToProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Src\Resource\Traits\Response\ApiResponse;

final class ProductController extends Controller
{
    use ApiResponse;

    private $model;

    /**
     * ProductController constructor.
     * @param Product $model
     */
    public function __construct(Product $model)
    {
        $this->middleware(\Src\Resource\Constants\Constant::AUTH_USER);
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function index()
    {
        $resp = $this->model->filterOfCategory(request()->category)->with('category:id,name')->get();
        return $this->successResponse($resp);
    }

    /**
     * @param Product $product
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $resp = $product->load('category:id,name',
            'comments',
            'comments.commentable:id,name,email');
        return $this->successResponse($resp);
    }

    /**
     * @param CreateCommentToProductRequest $request
     * @param Product $product
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(CreateCommentToProductRequest $request, Product $product)
    {
        $rt = DB::transaction( function () use ($request, $product) {
            return auth('user')->user()->comments()->create([
                'comment' => $request->comment,
                'product_id' => $product->id
            ]);
        });
        return $this->successResponse($rt);
    }
}
