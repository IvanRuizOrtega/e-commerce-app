<?php


namespace Src\Resource\Gestion\Shared\Domain\ValueObjects;


use DateTime;
use Src\Resource\Gestion\Shared\Domain\Contracts\iValue;

final class UpdatedAt implements iValue
{
    /**
     * @var DateTime
     */
    private $updatedAt;

    /**
     * CreatedAt constructor.
     * @param DateTime $updatedAt
     */
    public function __construct(DateTime $updatedAt)
    {
        $this->updatedAt = $updatedAt;
    }

    /**
     * @return DateTime
     */
    public function value(): DateTime
    {
        return $this->updatedAt;
    }
}
