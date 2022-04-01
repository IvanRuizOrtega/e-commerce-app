<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Src\Resource\Scopes\isCategory;
use Src\Resource\Traits\Model\Uuid;

final class Category extends Model
{
    use HasFactory, Uuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'parent_id',
    ];

    /**
     * Relationships
     */
    public function categories(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id')->withoutGlobalScopes();
    }

    /**
     * Scope
     */
    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new isCategory);
    }
}
