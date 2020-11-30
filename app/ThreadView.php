<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ThreadView extends Model
{
    protected $fillable = ['thread_id'];


    protected $table = 'views';

    public function thread(){
        return $this->belongsTo(Thread::class);
    }
}
