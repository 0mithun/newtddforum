<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use DB;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;

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

    /**
     * get all followers
     * @param string $user
     * @return App\User
     */

    public function followers( Request $request, User $user ) {
        $followersId = DB::table( 'follows' )->where( 'followable_id', $user->id )->where( 'followable_type', 'App\User' )->get()->pluck( 'user_id' );

        $followers = User::whereIn( 'id', $followersId )->get();

        return response()->json( ['success' => true, 'followers' => $followers] );
    }

    /**
     * get all following
     * @param string $user
     * @return App\User
     */

    public function followings( Request $request, User $user ) {
        $userFollowingId = DB::table( 'follows' )->where( 'user_id', $user->id )->where( 'followable_type', 'App\User' )->get()->pluck( 'followable_id' );
        $userFollowings = User::whereIn( 'id', $userFollowingId )->get();

        $tagFollowingId = DB::table( 'follows' )->where( 'user_id', $user->id )->where( 'followable_type', 'App\Tags' )->get()->pluck( 'followable_id' );
        $tagFollowings = Tags::whereIn( 'id', $tagFollowingId )->get();

        $data = collect( $userFollowings );
        $followings = $data->merge( $tagFollowings );

        return response()->json( ['success' => true, 'followings' => $followings->all()] );

    }

    /**
     * get all following
     * @param Integer $id
     * @return App\User
     */

    public function tagFollowings( Request $request, Tags $tag ) {
        $followingId = $tag->follows()->pluck( 'user_id' );
        $followings = User::whereIn( 'id', $followingId )->get();

        return response()->json( ['success' => true, 'followings' => $followings] );
    }

}
