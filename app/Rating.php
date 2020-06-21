<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $fillable = [
        'thread_id', 'user_id', 'rating'
    ];

    public function thread(){
        return $this->belongsTo(Thread::class);
    }
}
