<?php


namespace Src\Resource\Gestion\User\Category\Domain\ValueObjects;


use Src\Resource\Gestion\Shared\Domain\Contracts\iValue;

final class Name implements iValue
{
    /**
     * @var string
     */
    private $name;

    /**
     * Name constructor.
     * @param string $name
     */
    public function __construct(string $name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function value(): string
    {
        return $this->name;
    }
}
