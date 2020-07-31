<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Follows extends Model {
    protected $guarded = [];

    public function followable() {
        return $this->morphTo();
    }

}
