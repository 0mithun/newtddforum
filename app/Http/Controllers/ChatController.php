<?php

namespace App\Http\Controllers;

use App\Chat;
use App\Events\MessegeSentEvent;
use App\Notifications\NewMessageNotification;
use App\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ChatController extends Controller
{
    public function index(){
        $user = auth()->user();

        $friendLists = $user->getFriends();

        return view('chat.index', compact('friendLists'));
    }

    public function getAllFriends(Request $request){

        $user =User::where('id', $request->id)->first();

        $friendLists = $user->getFriends();
        
        $otherMessageUsers = $this->getOtherMessageUsers();

        $friendLists  = $friendLists->merge($otherMessageUsers);

        return response()->json($friendLists);
    }

    public function getFriendMessage($id = null){
        
       

        if(\Request::ajax()){
            $friend = User::findOrFail($id);

            // $messages = Chat::where(function($q) use($id){
            //     $q->where('from', auth()->user()->id);
            //     $q->where('to', $id);
            // })->orWhere(function($q) use($id){
            //     $q->where('to', auth()->user()->id);
            //     $q->where('from', $id);
            // })->with('user')->get();

            $messages = Chat::where(function($q) use($id){
                    $q->where('from', auth()->user()->id);
                    $q->where('to', $id);
                })->orWhere(function($q) use($id){
                    $q->where('to', auth()->user()->id);
                    $q->where('from', $id);
                })->get();



                $last_seen = Chat::where(function($q) use($id){
                    $q->where('from', auth()->user()->id);
                    $q->where('to', $id);
                })->orWhere(function($q) use($id){
                    $q->where('to', auth()->user()->id);
                    $q->where('from', $id);
                })
                // ->whereNotNull('seen_at')
                ->where('seen_at', '!=', null)
                
                ->orderBy('seen_at','DESC')->first();



                // ->first()
                ;
            // $last_seen = 'gotokal';
            return response()->json([
                'friend'  =>  $friend,
                'messages'=>$messages,
                'last_seen'=> $last_seen
            ]);
        }
        return \abort(404);
        
    }

    public function getOtherMessageUsers(){
        $authUser = auth()->user();

        $otherFromMessageUsers = Chat::
            where('to', $authUser->id)
            ->where('friend_message', 0)
            ->distinct()          
            ->pluck('from')
            ;

        $otherToMessageUsers = Chat::
            where('from', $authUser->id)
            ->where('friend_message', 0) 
            ->distinct()           
            ->pluck('to')
            
            ;
        
        $otherMessageUsers = $otherFromMessageUsers->merge($otherToMessageUsers);


        $otherUsers = User::whereIn('id', $otherMessageUsers)->get();

        return $otherUsers;
    }
    
    public function getOtherUsersMessage(){

    }

    public function sendMessage(Request $request){

        if($request->ajax()){
            $friend_message = $request->friend_message ? 1 : 0;

            $authUser = auth()->user();
            
            $message = Chat::create([
                'from'      =>  $authUser->id,
                'to'        =>  $request->friend,
                'message'   =>  $request->message,
                'friend_message'    => $friend_message
            ]);

            $friend = User::where('id', $request->friend)->first();

            
            $friend->notify(new NewMessageNotification($authUser, $message));
            
            broadcast(new MessegeSentEvent($message));


            return response()->json($message);
        }

        return \abort(404);
        
    }

    public function seenMessage(Request $request){
       $chat = Chat::find($request->message);
    
       $current_timestamp =now();

       $chat->seen_at =  $current_timestamp;
       $chat->save();

       $chat = $chat->fresh();
       return $chat;
    }
}
