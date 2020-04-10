<?php

namespace App\Http\Controllers;

use App\Thread;

class ThreadSubscriptionsController extends Controller
{
    /**
     * Store a new thread subscription.
     *
     * @param int    $channelId
     * @param Thread $thread
     */
    public function store($channelId, Thread $thread)
    {
        $thread->subscribe();
    }

    /**
     * Delete an existing thread subscription.
     *
     * @param int    $channelId
     * @param Thread $thread
     */
    public function destroy($channelId, Thread $thread)
    {
        $thread->unsubscribe();
    }

    /**
     * Check thread is subscribed
     */

    public function checkSubscribe(){
        //return request()->all();

        $threadId = request('thread');
        $thread = Thread::where('id', $threadId)->first();

        
        // $subscribed = $thread->subscriptions()
        //     ->where('user_id', auth()->id())
        //     ->exists();
            
        if($thread->isSubscribedTo){
            return response()->json(['subscribed'=>true]);
        }
        return response()->json(['subscribed'=>false]);
     

    }
}
