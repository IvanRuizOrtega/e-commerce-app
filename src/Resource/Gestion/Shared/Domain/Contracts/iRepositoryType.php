<?php


namespace Src\Resource\Gestion\Shared\Domain\Contracts;


interface iRepositoryType
{
    /**
     * @return string
     */
    public function getRepositoryType(): ?string;
}
