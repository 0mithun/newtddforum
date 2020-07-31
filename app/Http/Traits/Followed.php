<?php
namespace App\Traits;

trait Followed {
    public function follow() {
        return $this->follows()->create( [
            'user_id' => auth()->id(),
        ] );
    }

    public function unfollow() {
        return $this->follows()->where( 'user_id', auth()->id() )->delete();
    }

    public function isFollow() {
        return $this->follows()->where( 'user_id', auth()->id() )->exists();
    }
}