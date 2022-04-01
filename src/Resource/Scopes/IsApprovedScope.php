<?php


namespace Src\Resource\Scopes;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

final class IsApprovedScope implements Scope
{

    /**
     * @param Builder $builder
     * @param Model $model
     */
    public function apply(Builder $builder, Model $model)
    {
        $builder->where('is_approved', true);
    }

}
