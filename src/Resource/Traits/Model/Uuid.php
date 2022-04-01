<?php


namespace Src\Resource\Traits\Model;


use Illuminate\Support\Str;

trait Uuid
{
    protected static function bootUuid()
    {
        static::creating(function ($model)  {
            if (!$model->getKey()) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    /**
     * @return bool
     */
    public function getIncrementing(): bool
    {
        return false;
    }

    /**
     * @return string
     */
    public function getKeyType(): string
    {
        return 'string';
    }
}
