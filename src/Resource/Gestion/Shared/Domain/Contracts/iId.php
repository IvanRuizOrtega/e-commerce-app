<?php


namespace Src\Resource\Gestion\Shared\Domain\Contracts;


use Src\Resource\Gestion\Shared\Domain\ValueObjects\Id;

interface iId
{
    /**
     * @return Id
     */
    public function getId(): Id;
}
