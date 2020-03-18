<?php

namespace App\Http\Controllers;

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

        return view('profiles.friendrequest', compact('requestFriendLists'));

    }

    public function friendList(){

        $user = request('user');

        $authUser = auth()->user();

        $userInfo = User::where('username', $user)->first();

        //return $userInfo;

        //$authUser = auth()->user();

        
        $friendLists = $userInfo->getFriends();



        return view('profiles.friendlist', compact('friendLists','userInfo'));
        
    }


    public function acceptFriendRequest(Request $request){

        $authUser = auth()->user();
        $sender = User::findOrFail($request->sender);

        //dd($sender);
        $authUser->acceptFriendRequest($sender);

        session()->flash('succes','Friend Request Accept successfully');
        return redirect()->route('profile.friendrequest', $authUser->username);

        return 'Friend Request accept';
    }

    public function unfriend(Request $request){
        $authUser = auth()->user();

        $friend = User::findOrFail($request->friend);

        $authUser->unfriend($friend);

        if(\Request::ajax()){
            return response()->json(['success'=>'Friend unfriend successfully']);
        }
        
        session()->flash('succes','Friend unfriend successfully');
        return redirect()->route('profile.friendlist', $authUser->username);

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
