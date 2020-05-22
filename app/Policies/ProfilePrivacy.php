<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProfilePrivacy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */



    public function show(User $user, User $profileUser){        
        $is_friend = $user->isFriendWith($profileUser);

       if($user->id == $profileUser->id){        
           return true;
       }
        else if($user->id ==1){
            return true;
        }

        else if($profileUser->userprivacy->see_my_profiles==3){
            return true;
        }

        else if($profileUser->userprivacy->see_my_profiles==2 && $is_friend){
            return true;
        }        
        return false;  
    }
}
