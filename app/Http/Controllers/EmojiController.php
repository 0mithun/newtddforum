<?php

namespace App\Http\Controllers;

use App\Emoji;
use App\Thread;
use Illuminate\Http\Request;
use DB;
class EmojiController extends Controller
{
    public function index($thread){
        if(\Request::ajax()){
            $emojis = Emoji::all();
            foreach($emojis as $emoji){
                $count = DB::table('thread_emoji')
                        ->where('thread_id', $thread)
                        ->where('emoji_id', $emoji->id)
                        ->count() ; 
                $emoji['count'] = $count;
            }
            return response()->json($emojis);
        }
        
        return abort(404);
    }

    public function saveEmoji($thread){
        $authUser = auth()->user();
        $type = request('type');

        $thread = Thread::where('id', $thread)->first();

        $vote = $this->isVote($thread->id, $authUser->id);
        if($vote){
            if($vote->emoji_id == $type){
                $this->removeVote($thread->id, $authUser->id);
            }else{
                $this->removeVote($thread->id, $authUser->id);
                $thread->emojis()->attach($type,['user_id'=>$authUser->id]);
            }
        }else{
            $thread->emojis()->attach($type,['user_id'=>$authUser->id]);
        }

        return response()->json($thread);
    }

    private function isVote($thread, $user){
        $count = DB::table('thread_emoji')
                    ->where('thread_id', $thread)
                    ->where('user_id', $user)
                    ->first(); 
        
        return $count;
    }

    private function removeVote($thread, $user){
        DB::table('thread_emoji')
        ->where('thread_id', $thread)
        ->where('user_id', $user)
        ->delete(); 
    }


    public function getUserEmojiType($thread){
         

        if(\Request::ajax()){
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
        return abort(404);
     }
}
