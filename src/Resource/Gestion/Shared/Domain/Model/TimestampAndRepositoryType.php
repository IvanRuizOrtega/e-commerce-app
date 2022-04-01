<?php


namespace Src\Resource\Gestion\Shared\Domain\Model;


use Src\Resource\Gestion\Shared\Domain\Contracts\{iRepositoryType, iTimestamp};
use Src\Resource\Gestion\Shared\Domain\ValueObjects\{CreatedAt, UpdatedAt};

class TimestampAndRepositoryType implements iRepositoryType,iTimestamp
{
    /**
     * @var CreatedAt
     */
    private $createdAt;
    /**
     * @var UpdatedAt
     */
    private $updatedAt;
    /**
     * @var string|null
     */
    private $repoType;

    /**
     * TimestampAndRepositoryType constructor.
     * @param CreatedAt $createdAt
     * @param UpdatedAt $updatedAt
     * @param string|null $repositoryType
     */
    public function __construct(CreatedAt $createdAt,
                                UpdatedAt $updatedAt,
                                ?string $repositoryType = null)
    {
        $this->createdAt = $createdAt;
        $this->updatedAt = $updatedAt;
        $this->repoType = $repositoryType;
    }

    /**
     * @return string|null
     */
    public function getRepositoryType(): ?string
    {
        return $this->repoType;
    }

    /**
     * @return CreatedAt
     */
    public function getCreatedAt(): CreatedAt
    {
        return $this->createdAt;
    }

    /**
     * @return UpdatedAt
     */
    public function getUpdatedAt(): UpdatedAt
    {
        return $this->updatedAt;
    }
}
