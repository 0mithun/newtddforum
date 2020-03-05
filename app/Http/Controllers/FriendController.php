<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class FriendController extends Controller
{

    public function sentRequest(Request $request){

        $user = auth()->user();
        $receipentuser = User::find($request->recipient);
        
        $user->befriend($receipentuser);
        return 'Friend Request Sent Successfully';
    }


    public function getFriendRequest(){
        $user = auth()->user();
        $requestFriendLists =  $user->getFriendRequests();

        $pendingRequestId = [];

        foreach($requestFriendLists  as $requestFriendList ){
            $pendingRequestId [] = $requestFriendList->sender_id;
        }

        $requestFriendLists = User::whereIn('id', $pendingRequestId)->get();

        return view('profiles.friendrequest', compact('requestFriendLists'));

    }

    public function friendList(){
        $user = auth()->user();
        $friendLists = $user->getFriends();

        //dd($friendLists);

        return view('profiles.friendlist', compact('friendLists'));
        
    }


    public function acceptFriendRequest(Request $request){

        $user = auth()->user();
        $sender = User::findOrFail($request->sender);

        //dd($sender);
        $user->acceptFriendRequest($sender);

        return 'Friend Request accept';
    }

    public function unfriend(Request $request){
        $user = auth()->user();

        $friend = User::findOrFail($request->friend);

        $user->unfriend($friend);

        return 'Friend unfriend successfully';
    }


    public function blockFriend(Request $request){
        $user = auth()->user();

        $friend = User::findOrFail($request->friend);
        $user->blockFriend($friend);

        return 'Friend block successfully';
    }


    public function getBlockFriends(){

        $user = auth()->user();
        $blockFriends = $user->getBlockedFriendships();

        $blockFriendLists = [];       
        
        foreach($blockFriends  as $blockFriend ){
            $blockFriendLists [] = $blockFriend->recipient_id;
        }
        

        $blockFriendLists = User::whereIn('id', $blockFriendLists)->get();

   
        return view('profiles.blockfriendlist', compact('blockFriendLists'));
    }

    public function unBlockFriends(Request $request){
        $user = auth()->user();

        $friend = User::findOrFail($request->friend);

        $user->unblockFriend($friend);


        return 'Friend Un block successfully';
    }
}
