<?php

namespace App\Http\Controllers;

use App\Thread;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function saveRating(Request $request){
        $thread = Thread::where('id', $request->threadId)->first();

        $thread->ratings()->where('user_id', auth()->id())->delete();
        
        $thread->ratings()->create([
            'user_id'   =>  auth()->id(),
            'rating'    =>  $request->rating
        ]);
        
        $avg = $thread->ratings->avg('rating');
        $thread->average_rating = $avg;
        $thread->save();
        return \response()->json(['status'=>'success', 'message'=>'Rating Successfully']);
    }

    public function isRated($thread){
        $thread = Thread::where('id', $thread)->first();

        $rating = $thread->ratings()->where('user_id', auth()->id())->first();
        if($rating){
            return response()->json(['success'=>true, 'data'=>$rating]);
        }else{
            return response()->json(['success'=>false]);
        }
        
    }

    public function totalRating($thread){
        $thread = Thread::where('id', $thread)->first();

        $rating = $thread->ratings()->count();

        if($rating){
            return response()->json(['success'=>true, 'count'=>$rating]);
        }else{
            return response()->json(['success'=>false]);
        }
    }
}
