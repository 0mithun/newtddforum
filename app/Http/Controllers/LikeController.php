<?php

namespace App\Http\Controllers;

use App\Favorite;
use App\Likes;
use App\Thread;
use App\User;
use Illuminate\Http\Request;

use DB;

class LikeController extends Controller
{


    public function like($thread){
        $thread = Thread::findOrFail($thread);

        if($thread->isLiked()){
                $thread->decrement('like_count');
                return $thread->unlike();
        }else{
            if($thread->isDesliked()){
                $thread->decrement('dislike_count');
                $thread->unlike();
                return $thread->like();
            }
            return $thread->like();
        }

    }

    public function dislike($thread){

        $thread = Thread::findOrFail($thread);

        if($thread->isDesliked()){
            $thread->decrement('dislike_count');
            return $thread->unlike();
        }else{
            if($thread->isLiked()){
                $thread->decrement('like_count');
                $thread->unlike();
                return $thread->disLike();
            }
            return $thread->disLike();
        }
    }

    /**
     * 
     * Get Likes Count
     */

     public function getLikesCount($thread){
        $thread = Thread::findOrFail($thread);
        return $thread->likesCount;
     }


     public function getDisikesCount($thread){
        $thread = Thread::findOrFail($thread);
        return $thread->dislikesCount;
     }

     public function getUserLikeType($thread){
         
        $emoji = DB::table('thread_emoji')
            ->where('user_id', auth()->id())
            ->where('thread_id', $thread)
            ->pluck('emoji_id')
            ->first()
            ;
        
        if($emoji){
            return response()->json($emoji);
        }
        
     }


     /**
      * Not using now
      */

     public function getAllLikeType($thread){
        $likes = DB::table('thread_emoji')
            ->groupBy('emoji_id')
            ->where('thread_id', $thread)
            ->orderBy('emoji_id','ASC')
            ->pluck('emoji_id')
        ;
        return response()->json($likes);
     }

     public function getLikeTypeUsers($thread,$type){
        if(\Request::ajax()){

            $usersId = DB::table('thread_emoji')
                // ->groupBy('user_id')
                ->where('thread_id', $thread)
                ->where('emoji_id', $type)
                ->get()
                ->pluck('user_id')
        ;

        $users = User::whereIn('id', $usersId)->get()->pluck('name');
        
        return response()->json($users);
        }

        return abort(404);
        
     }

     /**
      * Not using now
      */
}
