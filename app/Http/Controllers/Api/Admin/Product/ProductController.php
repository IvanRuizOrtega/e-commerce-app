<?php


namespace App\Http\Controllers\Api\Admin\Product;


use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\CreateProductRequest;
use App\Http\Requests\Admin\Product\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
        $this->middleware(\Src\Resource\Constants\Constant::AUTH_ADMIN);
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
     * @param CreateProductRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(CreateProductRequest $request)
    {
        $rt = DB::transaction( function () use ($request) {
            $path = $request->file('image')->storePublicly('produts', 'public');
            $resp = $this->model->create([
                'name' => $request->name,
                'image' => $path,
                'slug' => Str::slug($request->slug),
                'description' => $request->description,
                'price' => $request->price,
                'category_id' => $request->category
            ]);
            auth('admin')->user()->logActivities()->create([
                'subject' => 'Product created successfully',
                'action' => 'create',
                'product_id' => $resp->id
            ]);
            return $resp;
        });
        return $this->successResponse($rt);
    }

    /**
     * @param Product $product
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $resp = $product->load('category:id,name',
            'allComments',
            'allComments.commentable:id,name,email',
            'logActivities',
            'logActivities.model:id,name,email');
        return $this->successResponse($resp);
    }

    /**
     * @param UpdateProductRequest $request
     * @param Product $product
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
         DB::transaction( function () use ($request, $product) {
            $product->update([
                'price' => $request->price,
                'category_id' => $request->category,
            ]);
            auth('admin')->user()->logActivities()->create([
                'subject' => 'Product updated successfully',
                'action' => 'update',
                'product_id' => $product->id
            ]);
        });
        return $this->successResponse($product);
    }

    /**
     * @param Product $product
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        Storage::disk('public')->delete($product->image);
        $resp = $product->delete();
        return $this->successResponse($resp);
    }
}
