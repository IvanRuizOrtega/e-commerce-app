<?php


namespace Src\Resource\Gestion\User\Category\Domain\Model;


use Src\Resource\Gestion\Shared\Domain\Contracts\iId;
use Src\Resource\Gestion\Shared\Domain\Model\TimestampAndRepositoryType;
use Src\Resource\Gestion\Shared\Domain\ValueObjects\{Id, CreatedAt, UpdatedAt};
use Src\Resource\Gestion\User\Category\Domain\ValueObjects\Name;

final class Category extends TimestampAndRepositoryType implements iId
{
    /**
     * @var Id
     */
    private $id;
    /**
     * @var Name
     */
    private $name;

    /**
     * Category constructor.
     * @param Id $id
     * @param Name $name
     * @param CreatedAt $createdAt
     * @param UpdatedAt $updatedAt
     * @param string|null $repositoryType
     */
    public function __construct(Id $id, Name $name, CreatedAt $createdAt, UpdatedAt $updatedAt, ?string $repositoryType = null)
    {
        $this->id = $id;
        $this->name = $name;
        parent::__construct($createdAt, $updatedAt, $repositoryType);
    }

    /**
     * @return Id
     */
    public function getId(): Id
    {
        return $this->id;
    }

    /**
     * @return Name
     */
    public function getName(): Name
    {
        return $this->name;
    }
}
