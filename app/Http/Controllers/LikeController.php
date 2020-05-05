<?php

namespace App\Http\Controllers;

use App\Favorite;
use App\Likes;
use App\Thread;
use Illuminate\Http\Request;

use DB;

class LikeController extends Controller
{


    public function like($thread){
        $thread = Thread::findOrFail($thread);

        $type = request('type');
        $isDelete = request('isDelete');
       
       


        if($thread->isLiked()){
            if($isDelete){
                $thread->decrement('like_count');
                return $thread->unlike();
            }else{
                $thread->changeEmoji($type);
            }
            


        }else{
            if($thread->isDesliked()){
                $thread->decrement('dislike_count');
                $thread->unlike();
                return $thread->like($type);
            }
            return $thread->like($type);
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
        //$thread = Thread::findOrFail($thread);
        $emoji = DB::table('thread_emoji')
            ->where('user_id', auth()->id())
            ->where('thread_id', $thread)
            ->first()
            ;
        if($emoji){
            return response()->json($emoji);
        }
        
     }

     public function getAllLikeType($thread){
          //$thread = Thread::findOrFail($thread);
        $likes = DB::table('thread_emoji')
            ->groupBy('emoji_type')
            ->where('thread_id', $thread)
            ->orderBy('emoji_type','ASC')
            ->pluck('emoji_type')
        ;
        return response()->json($likes);
     }

     public function getLikeTypeUsers($thread,$type){
        if(\Request::ajax()){
            $thread = Thread::findOrFail($thread);
            $users = $thread->emojis()->where('emoji_type', $type)->get()->pluck('name')
            ;
            //->pluck('name');
    
            return response()->json($users);
        }

        return abort(404);
        
     }
}
