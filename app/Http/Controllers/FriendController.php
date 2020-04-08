<?php

namespace App\Http\Controllers;

use App\Chat;
use App\User;
use Illuminate\Http\Request;

class FriendController extends Controller
{

    public function sentRequest(Request $request){
        
        $user = auth()->user();
        $receipentuser = User::find($request->recipient);
        
        $friend = $user->befriend($receipentuser);

       
    }


    public function getFriendRequest(){
        $user = auth()->user();
        $requestFriendLists =  $user->getFriendRequests();

        $pendingRequestId = [];

        foreach($requestFriendLists  as $requestFriendList ){
            $pendingRequestId [] = $requestFriendList->sender_id;
        }

        $requestFriendLists = User::whereIn('id', $pendingRequestId)->get();
        $profileUser =  $user; 
        return view('profiles.friendrequest', compact('requestFriendLists','profileUser'));

    }

    /**
     * Currently Un used
     */

    // public function friendList(){

    //     $user = request('user');

    //     $authUser = auth()->user();

    //     $userInfo = User::where('username', $user)->first();

    //     //return $userInfo;

    //     //$authUser = auth()->user();

        
    //     $friendLists = $userInfo->getFriends();



    //     return view('profiles.friendlist', compact('friendLists','userInfo'));
        
    // }


    public function setFriendMessage(){
        $authUser = auth()->user();
        
        $otherFromMessageUsers = Chat::
            where('to', $authUser->id)
            ->where('friend_message', 0)
            ->distinct()          
            ->pluck('id')
            ;

        $otherToMessageUsers = Chat::
            where('from', $authUser->id)
            ->where('friend_message', 0) 
            ->distinct()           
            ->pluck('id')
            
            ;
        

        $otherMessageUsers = $otherFromMessageUsers->merge($otherToMessageUsers);

        foreach($otherMessageUsers as $otherMessage){
            $chat = Chat::find($otherMessage);
            $chat->friend_message = 1;
            $chat->save();
        }
        
    }

    public function unsetFriendMessage(){
        $authUser = auth()->user();
        
        $otherFromMessageUsers = Chat::
            where('to', $authUser->id)
            ->distinct()          
            ->pluck('id')
            ;

        $otherToMessageUsers = Chat::
            where('from', $authUser->id) 
            ->distinct()           
            ->pluck('id')
            
            ;
        

        $otherMessageUsers = $otherFromMessageUsers->merge($otherToMessageUsers);

        foreach($otherMessageUsers as $otherMessage){
            $chat = Chat::find($otherMessage);
            $chat->friend_message = 0;
            $chat->save();
        }
        
    }



    public function acceptFriendRequest(Request $request){

        $authUser = auth()->user();
        $sender = User::findOrFail($request->sender);

        //dd($sender);
        $authUser->acceptFriendRequest($sender);

        $this->setFriendMessage();

        session()->flash('succes','Friend Request Accept successfully');
        return redirect()->route('profile.friendrequest', $authUser->username);

        return 'Friend Request accept';
    }

    public function unfriend(Request $request){
        $authUser = auth()->user();

        $friend = User::findOrFail($request->friend);

        $authUser->unfriend($friend);

        $this->unsetFriendMessage();

        if(\Request::ajax()){
            return response()->json(['success'=>'Friend unfriend successfully']);
        }
        
        session()->flash('succes','Friend unfriend successfully');
        return redirect()->route('profile.friendlist', $authUser->username);

        return 'Friend unfriend successfully';
    }


    public function blockFriend(Request $request){
        $authUser = auth()->user();

        $friend = User::findOrFail($request->friend);
        $authUser->blockFriend($friend);

        $this->unsetFriendMessage();

        session()->flash('succes','Friend Block successfully');
        return redirect()->route('profile.friendlist', $authUser->username);

        return 'Friend unfriend successfully';
    }


    public function getBlockFriends(){

        $user = auth()->user();
        $blockFriends = $user->getBlockedFriendships();

        $blockFriendLists = [];       
        
        foreach($blockFriends  as $blockFriend ){
            if($blockFriend->recipient_id != $user->id){
                $blockFriendLists [] = $blockFriend->recipient_id;
            } 
            
        }
        

        $blockFriendLists = User::whereIn('id', $blockFriendLists)->get();

        $profileUser =  $user; 
   
        return view('profiles.blockfriendlist', compact('blockFriendLists','profileUser'));
    }

    public function unBlockFriends(Request $request){
        $authUser = auth()->user();

        $friend = User::findOrFail($request->friend);

        $authUser->unblockFriend($friend);


        session()->flash('succes','Unblock successfully');
        return redirect()->route('profile.friendlist', $authUser->username);
    }


    public function checkFriend(Request $request){
        $user = auth()->user();

        $friend = User::find($request->recipient);


        $isFriend = $user->isFriendWith($friend);

        
        return response()->json($isFriend);
       
        //return $isFriend;



    }

    public function checkFriendRequestSent(Request $request){

        $user = auth()->user();


        $recipient = User::find($request->recipient);


        $isSentRequest = $user->hasSentFriendRequestTo($recipient);

        return response()->json($isSentRequest);

    }
}
