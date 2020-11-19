<?php

namespace App\Http\Controllers;

use App\Reply;
use App\Thread;

class FavoritesController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Store a new favorite in the database.
     *
     * @param  Reply $reply
     */
    public function store(Reply $reply)
    {
        $reply->favorite();
    }

    /**
     * Delete the favorite.
     *
     * @param Reply $reply
     */
    public function destroy(Reply $reply)
    {
        $reply->unfavorite();
    }


    /**
     * Check Thread Favorited
    */
    public function checkFavorite(){
         //return request()->all();

         $threadId = request('thread');
         $thread = Thread::where('id', $threadId)->first();
 
         
         // $subscribed = $thread->subscriptions()
         //     ->where('user_id', auth()->id())
         //     ->exists();
             
         if($thread->isFavorited){
             return response()->json(['favorited'=>true]);
         }
         return response()->json(['favorited'=>false]);
    }




    public  function threadStore($thread){
        $thread = Thread::findOrFail($thread);
        $thread->favorite();

        $thread->increment('favorite_count');
        
    }
     public  function thraeadDestroy( $thread){
         $thread = Thread::findOrFail($thread);
         $thread->unfavorite();

         $thread->decrement('favorite_count');
    }

    

}
