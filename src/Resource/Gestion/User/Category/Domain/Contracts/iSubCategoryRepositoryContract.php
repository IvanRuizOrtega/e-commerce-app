<?php


namespace Src\Resource\Gestion\User\Category\Domain\Contracts;


interface iSubCategoryRepositoryContract
{
    /**
     * @param string $modelId
     * @return array|null
     */
    public function getSubCategories(string $modelId): ?array;
}
