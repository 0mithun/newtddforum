<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use Illuminate\Http\Request;

class FollowController extends Controller {
    /**
     * Toggle follow Tag
     * @param integer $tag
     * @return App\Tag
     */
    public function followTag( Request $request, Tags $tag ) {
        if ( $tag->isFollow() ) {
            $tag->unfollow();

            return response()->json( ['success' => true, 'message' => 'Tag unfollow successfully'] );
        } else {
            $tag->follow();

            return response()->json( ['success' => true, 'message' => 'Tag follow successfully'] );
        }
    }

    /**
     * check is follow Tag
     * @param Integer $tag
     *@return App\Tag
     */

    public function isFollowTag( Request $request, Tags $tag ) {
        return response()->json( $tag->isFollow() );
    }

    /**
     * Toggle Follow User
     * @param string $user
     * @return App\User
     */
    public function followUser( Request $request, User $user ) {
        if ( $user->isFollow() ) {
            $user->unfollow();

            return response()->json( ['success' => true, 'message' => 'User unfollow successfully'] );
        } else {
            $user->follow();

            return response()->json( ['success' => true, 'message' => 'User follow successfully'] );
        }
    }

    /**
     * Check is follow user
     * @param string $user
     * @return App\User
     */
    public function isFollowUser( Request $request, User $user ) {
        return response()->json( $user->isFollow() );
    }

}
