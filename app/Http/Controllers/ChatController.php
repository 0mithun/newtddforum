<?php

namespace App\Http\Controllers;

use App\Chat;
use App\Events\MessegeSentEvent;
use App\User;
use Illuminate\Http\Request;

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

            return response()->json([
                'friend'  =>  $friend,
                'messages'=>$messages
            ]);
        }
        return \abort(404);
        
    }


    public function sendMessage(Request $request){
        if($request->ajax()){
            $message = Chat::create([
                'from'      =>  auth()->user()->id,
                'to'        =>  $request->friend,
                'message'   =>  $request->message
            ]);
            
            broadcast(new MessegeSentEvent($message));
            // broadcast(new NewMessage($message));

            return response()->json($message);
        }

        return \abort(404);
        
    }
}
