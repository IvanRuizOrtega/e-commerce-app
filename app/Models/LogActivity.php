<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Src\Resource\Traits\Model\Uuid;

final class LogActivity extends Model
{
    use HasFactory, Uuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'subject',
        'action',
        'product_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'product_id',
        'model_type',
        'model_id',
        'updated_at'
    ];

    /**
     * Relationships
     */
    public function model(): MorphTo
    {
        return $this->morphTo();
    }
}
