<?php

namespace App\Http\Controllers;

use App\Chat;
use App\User;
use DB;
use Illuminate\Http\Request;

class FriendController extends Controller {
    public function sentRequest( Request $request ) {
        $user = auth()->user();
        $receipentuser = User::find( $request->recipient );
        $friend = $user->befriend( $receipentuser );
    }

    public function cancelRequest( Request $request ) {
        $auth_user = auth()->user();
        $friend = DB::table( 'friendships' )
            ->where( 'sender_id', $auth_user->id )
            ->where( 'recipient_id', $request->friend )
            ->delete();

        return response()->json( ['success' => 'Cancel request successfully'] );
    }

    public function getAllFriendRequest() {
        $user = auth()->user();
        $requestFriendLists = $user->getFriendRequests();

        $pendingRequestId = [];

        foreach ( $requestFriendLists as $requestFriendList ) {
            $pendingRequestId[] = $requestFriendList->sender_id;
        }

        $requestFriendLists = User::whereIn( 'id', $pendingRequestId )->get();

        return response()->json( ['friendRequests' => $requestFriendLists] );

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

    public function setFriendMessage() {
        $authUser = auth()->user();

        $otherFromMessageUsers = Chat::
            where( 'to', $authUser->id )
            ->where( 'friend_message', 0 )
            ->distinct()
            ->pluck( 'id' );

        $otherToMessageUsers = Chat::
            where( 'from', $authUser->id )
            ->where( 'friend_message', 0 )
            ->distinct()
            ->pluck( 'id' );

        $otherMessageUsers = $otherFromMessageUsers->merge( $otherToMessageUsers );

        foreach ( $otherMessageUsers as $otherMessage ) {
            $chat = Chat::find( $otherMessage );
            $chat->friend_message = 1;
            $chat->save();
        }

    }

    public function unsetFriendMessage() {
        $authUser = auth()->user();

        $otherFromMessageUsers = Chat::
            where( 'to', $authUser->id )
            ->distinct()
            ->pluck( 'id' );

        $otherToMessageUsers = Chat::
            where( 'from', $authUser->id )
            ->distinct()
            ->pluck( 'id' );

        $otherMessageUsers = $otherFromMessageUsers->merge( $otherToMessageUsers );

        foreach ( $otherMessageUsers as $otherMessage ) {
            $chat = Chat::find( $otherMessage );
            $chat->friend_message = 0;
            $chat->save();
        }

    }

    public function acceptFriendRequest( Request $request ) {
        $authUser = auth()->user();
        $sender = User::findOrFail( $request->friend );
        $authUser->acceptFriendRequest( $sender );

        $this->setFriendMessage();

        return response()->json( ['success' => true, 'message' => 'Friend request accept successfully'] ); // session()->flash( 'succes', 'Friend Request Accept successfully' );

    }

    public function unfriend( Request $request ) {
        $authUser = auth()->user();

        $friend = User::findOrFail( $request->friend );

        $authUser->unfriend( $friend );

        $this->unsetFriendMessage();

        if ( \Request::ajax() ) {
            return response()->json( ['success' => 'Friend unfriend successfully'] );
        }
    }

    public function blockFriend( Request $request ) {
        $authUser = auth()->user();

        $friend = User::findOrFail( $request->friend );
        $authUser->blockFriend( $friend );

        $this->unsetFriendMessage();

        return \response()->json( ['success' => true, 'message' => 'User block successfully'] );
    }

    public function getBlockFriends() {
        $user = auth()->user();
        $blockFriends = $user->getBlockedFriendships();

        $blockFriendLists = [];

        foreach ( $blockFriends as $blockFriend ) {
            if ( $blockFriend->recipient_id != $user->id ) {
                $blockFriendLists[] = $blockFriend->recipient_id;
            }

        }

        $blockFriendLists = User::whereIn( 'id', $blockFriendLists )->get();

        return \response()->json( ['blockLists' => $blockFriendLists] );

    }

    public function unBlockFriends( Request $request ) {
        $authUser = auth()->user();

        $friend = User::findOrFail( $request->friend );

        $authUser->unblockFriend( $friend );

        return \response()->json( ['success' => true, 'message' => 'User unblock successfully'] );

        // session()->flash( 'succes', 'Unblock successfully' );

        // return redirect()->route( 'profile.friendlist', $authUser->username );
    }

    public function checkFriend( Request $request ) {
        $user = auth()->user();

        $friend = User::find( $request->recipient );

        $isFriend = $user->isFriendWith( $friend );

        return response()->json( $isFriend );

        //return $isFriend;

    }

    public function checkFriendRequestSent( Request $request ) {
        $user = auth()->user();

        $recipient = User::find( $request->recipient );

        $isSentRequest = $user->hasSentFriendRequestTo( $recipient );

        return response()->json( $isSentRequest );

    }
}
