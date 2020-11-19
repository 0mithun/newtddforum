<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Userban extends Model
{
    protected $guarded  = [];
    protected $dates = ['ban_expire_on'];


    public function user(){
        return $this->belongsTo(User::class);
    }
}
