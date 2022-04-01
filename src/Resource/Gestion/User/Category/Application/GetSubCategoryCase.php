<?php


namespace Src\Resource\Gestion\User\Category\Application;


use Src\Resource\Gestion\User\Category\Domain\Contracts\iSubCategoryRepositoryContract;

final class GetSubCategoryCase
{
    /**
     * @var iSubCategoryRepositoryContract
     */
    private $contract;

    /**
     * GetSubCategoryCase constructor.
     * @param iSubCategoryRepositoryContract $contract
     */
    public function __construct(iSubCategoryRepositoryContract $contract)
    {
        $this->contract = $contract;
    }


    /**
     * @param string $modelId
     * @return array|null
     */
    public function __invoke(string $modelId): ?array
    {
        return $this->contract->getSubCategories($modelId);
    }
}
