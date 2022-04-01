<?php


namespace App\Http\Controllers\Api\Admin\Product\Comment;


use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\Comment\UpdateCommentToProductRequest;
use App\Models\{
    Comment,
    Product
};
use Src\Resource\Scopes\IsApprovedScope;
use Src\Resource\Traits\Response\ApiResponse;

final class CommentController extends Controller
{
    use ApiResponse;

    /**
     * CommentController constructor.
     */
    public function __construct()
    {
        $this->middleware(\Src\Resource\Constants\Constant::AUTH_ADMIN);
    }

    public function update(UpdateCommentToProductRequest $request, Product $product, $comment)
    {
        $comment = Comment::withoutGlobalScope(IsApprovedScope::class)->findOrFail($comment);
        $data = array ($product->id, $comment->product_id);
        $this->authorize('belongs', [ $data ]);
        $comment->update([
            'is_approved' => $request->is_approved
        ]);
        return $this->successResponse($comment);
    }
}
