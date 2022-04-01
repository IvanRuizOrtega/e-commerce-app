<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Src\Resource\Scopes\IsApprovedScope;
use Src\Resource\Traits\Model\Uuid;

final class Comment extends Model
{
    use HasFactory, Uuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'comment',
        'is_approved',
        'product_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'product_id',
        'commentable_type',
        'commentable_id'
    ];

    /**
     * Relationships
     */
    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Scope
     */
    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new IsApprovedScope);
    }
}
