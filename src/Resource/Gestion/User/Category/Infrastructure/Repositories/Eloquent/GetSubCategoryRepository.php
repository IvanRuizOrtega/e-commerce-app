<?php


namespace Src\Resource\Gestion\User\Category\Infrastructure\Repositories\Eloquent;


use App\Models\Category;
use Src\Resource\Gestion\Shared\Domain\ValueObjects\CreatedAt;
use Src\Resource\Gestion\Shared\Domain\ValueObjects\Id;
use Src\Resource\Gestion\User\Category\Domain\Contracts\iSubCategoryRepositoryContract;
use Src\Resource\Gestion\User\Category\Domain\ValueObjects\Name;

final class GetSubCategoryRepository implements iSubCategoryRepositoryContract
{
    /**
     * @var Category
     */
    private $model;

    /**
     * GetSubCategoryRepository constructor.
     * @param Category $model
     */
    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    /**
     * @param string $modelId
     * @return array|null
     */
    public function getSubCategories(string $modelId): ?array
    {
        $resp = $this->model->findOrFail($modelId);
        $array = [];
        foreach ($resp->categories as $c) {
            array_push($array, [
                "id" => (new Id($c->id))->value(),
                "name" => (new Name($c->name))->value(),
                "created_at" => (new CreatedAt($c->created_at))->value(),
                "type_repository" => "CON ELOQUENT"
            ]);
        }
        return $array;
    }
}
