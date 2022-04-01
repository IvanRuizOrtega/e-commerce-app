<?php


namespace Src\Resource\Gestion\Shared\Domain\Contracts;



use Src\Resource\Gestion\Shared\Domain\ValueObjects\{
    CreatedAt,
    UpdatedAt
};

interface iTimestamp
{
    /**
     * @return CreatedAt
     */
    public function getCreatedAt(): CreatedAt;

    /**
     * @return UpdatedAt
     */
    public function getUpdatedAt(): UpdatedAt;
}
