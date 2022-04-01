<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Src\Resource\Traits\Model\Uuid;

final class Product extends Model
{
    use HasFactory, Uuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'price',
        'category_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'category_id',
    ];


    /**
     * Relationships
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class)->withoutGlobalScopes();
    }

    public function logActivities(): HasMany
    {
        return $this->hasMany(LogActivity::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function allComments(): HasMany
    {
        return $this->hasMany(Comment::class)->withoutGlobalScopes();
    }

    /**
     * Scope
     */
    public function scopeFilterOfCategory($query, string $category = null)
    {
        if (!empty($category)) {
            $query->where('category_id', $category);
        }
    }
}
