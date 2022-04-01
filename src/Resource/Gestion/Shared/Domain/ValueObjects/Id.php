<?php


namespace Src\Resource\Gestion\Shared\Domain\ValueObjects;


use Src\Resource\Gestion\Shared\Domain\Contracts\iValue;

final class Id implements iValue
{
    /**
     * @var string
     */
    private $id;

    /**
     * Id constructor.
     * @param string $id
     */
    public function __construct(string $id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed|string
     */
    public function value()
    {
        return $this->id;
    }
}
