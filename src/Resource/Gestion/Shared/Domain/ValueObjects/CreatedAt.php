<?php


namespace Src\Resource\Gestion\Shared\Domain\ValueObjects;


use DateTime;
use Src\Resource\Gestion\Shared\Domain\Contracts\iValue;

final class CreatedAt implements iValue
{
    /**
     * @var DateTime
     */
    private $createdAt;

    /**
     * CreatedAt constructor.
     * @param DateTime $createdAt
     */
    public function __construct(DateTime $createdAt)
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @return DateTime
     */
    public function value(): DateTime
    {
        return $this->createdAt;
    }
}
