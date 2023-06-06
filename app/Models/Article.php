<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'title',
        'body',
        'author_id',
    ];

    protected $casts = [
        'author_id' => 'integer',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
