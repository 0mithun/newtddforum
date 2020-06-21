<?php

namespace App\Policies;

use App\Thread;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ThreadPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the thread.
     *
     * @param  \App\User   $user
     * @param  \App\Thread $thread
     * @return mixed
     */
    public function update(User $user, Thread $thread)
    {
        return $thread->user_id == $user->id || $user->id == 1;
    }

    public function show(?User $user, Thread $thread){
        if ($user) {
            if($user->id == 1){
                $user->read($thread); 
                return true;
            }

            else if($thread->age_restriction == 0){
                $user->read($thread);  
                return true;
            }else if($thread->age_restriction == 13 && $user->userprivacy->restricted_13 ==1){
                $user->read($thread);
                return true;
            }else if($thread->age_restriction == 13 && $user->userprivacy->restricted_18 ==1){
                $user->read($thread);
                return true;
            }else if($thread->age_restriction == 18 && $user->userprivacy->restricted_18 ==1){
                $user->read($thread);
                return true;
            }else if($thread->creator->id == $user->id){
                $user->read($thread);
                return true;
            }

            return false;

        }else{
            if($thread->age_restriction ==0){
                return true;
            }
            return false;
        }
        
        
    }
}
