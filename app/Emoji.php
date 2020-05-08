<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Emoji extends Model
{
    protected $guarded = [];

    protected $table = 'emojis';

    public function threads(){
        return $this->belongsToMany(Thread::class,'thread_tag','emoji_id','thread_id');
    }
}
