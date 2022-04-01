<?php


namespace Src\Resource\Gestion\User\Category\Infrastructure\Controllers;


use Src\Resource\Gestion\User\Category\Application\GetSubCategoryCase;

final class GetSubCategoryController
{
    /**
     * @var GetSubCategoryCase
     */
    private $case;

    /**
     * GetSubCategoryController constructor.
     * @param GetSubCategoryCase $case
     */
    public function __construct(GetSubCategoryCase $case)
    {
        $this->case = $case;
    }

    /**
     * @param string $modelId
     * @return array|null
     */
    public function __invoke(string $modelId): ?array
    {
        return $this->case->__invoke($modelId);
    }
}
