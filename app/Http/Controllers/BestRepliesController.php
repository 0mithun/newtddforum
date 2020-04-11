<?php

namespace App\Http\Controllers;

use App\Reply;
use App\Thread;

class BestRepliesController extends Controller
{
    /**
     * Mark the best reply for a thread.
     *
     * @param  Reply $reply
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Reply $reply)
    {
        $this->authorize('update', $reply->thread);

        $reply->thread->markBestReply($reply);
    }


    /**
     * Check Is Reply Best
     * 
     */

     public function checkIsBest(){
         
         $thread = Thread::where('id',request('thread_id'))
                            ->where('best_reply_id', request('reply'))
                            ->first();


        if($thread){
            return response()->json(['isBest'=>true]);
        }
        return response()->json(['isBest'=>false]);

     }
}
