<?php

namespace App\Http\Controllers;

use App\Notifications\ReplywasReported;
use App\Notifications\ThreadRestrictionReported;
use App\Notifications\ThreadWasReported;
use App\Notifications\UserWasReported;
use App\Reply;
use App\Thread;
use App\User;
use DB;
use Illuminate\Http\Request;

class ReportController extends Controller {
    public function __construct() {
        $this->middleware( 'auth' );
    }

    public function reply( Reply $reply ) {
        request()->validate( [
            'reason' => 'required',
        ] );
        $user = User::find( 1 );

        DB::table( 'reports' )->insert( [
            'user_id'       => auth()->id(),
            'reported_id'   => $reply->id,
            'reported_type' => get_class( $reply ),
        ] );

        $reason = request( 'reason' );
        $user->notify( new ReplywasReported( $reply, $reason ) );

        return 'Thread Succssfully reported';
    }

    public function user() {
        $reason = \request( 'reason' );
        $user_id = \request( 'user_id' );
        $user = User::find( 1 );
        $reported_user = User::find( $user_id );

        DB::table( 'reports' )->insert( [
            'user_id'       => auth()->id(),
            'reported_id'   => $user_id,
            'reported_type' => 'App\User',
        ] );

        $user->notify( new UserWasReported( $reported_user, $reason ) );
    }

    public function checkUserReport() {
        $reported_id = request( 'reported_id' );
        $user_id = request( 'user' );

        if ( auth()->user()->id == $user_id ) {
            $report = DB::table( 'reports' )
                ->where( 'user_id', $user_id )
                ->where( 'reported_type', 'App\User' )
                ->where( 'reported_id', $reported_id )
                ->first();

            if ( $report ) {
                return response()->json( ['reported' => true] );
            }

            return response()->json( ['reported' => false] );
        }

        return response()->json( ['reported' => false] );
    }

    public function thread() {
        $id = \request( 'id' );
        $restrictions = request( 'restrictions' );
        $reason = \request( 'reason' );

        $authUser = auth()->user();
        $thread = Thread::findOrFail( $id );

        DB::table( 'reports' )->insert( [
            'user_id'       => $authUser->id,
            'reported_id'   => $id,
            'reported_type' => get_class( $thread ),
        ] );

        if ( $restrictions != '' ) {
            $thread->age_restriction = $restrictions;
            $thread->save();

            if ( $authUser->id != 1 ) {
                $adminUser = User::find( 1 );
                $reason = 'Check age for this item';
                $adminUser->notify( new ThreadRestrictionReported( $thread, $reason ) );

                $reason = "User " . $authUser->username . " " . " reported thread with id = " . $thread->id . " has been flagged, we have changed it to PG/R pending review";
                $creator = User::find( $thread->creator->id );
                $creator->notify( new ThreadRestrictionReported( $thread, $reason ) );

                $reason = 'This item has been changed to pg/R pending review';
                $authUser->notify( new ThreadRestrictionReported( $thread, $reason ) );
            } else {
                $reason = "After review, your post changed to PG";
                $creator = User::find( $thread->creator->id );
                $creator->notify( new ThreadRestrictionReported( $thread, $reason ) );
            }
        } else {
            $user = User::find( 1 );
            $user->notify( new ThreadWasReported( $thread, $reason ) );
        }

        $thread->is_published = 0;
        $thread->save();

        return \response()->json( ['status' => 'success', 'message' => 'Thread Reported Successfully'] );
    }

    public function checkThreadReport() {
        $threadId = request( 'thread' );
        $userId = request( 'user' );

        if ( auth()->user()->id == $userId ) {
            $report = DB::table( 'reports' )
                ->where( 'user_id', $userId )
                ->where( 'reported_type', 'App\Thread' )
                ->where( 'reported_id', $threadId )
                ->first();

            if ( $report ) {
                return response()->json( ['reported' => true] );
            }

            return response()->json( ['reported' => false] );
        }

        return response()->json( ['reported' => false] );

    }

    public function checkReplyReport() {
        $replyId = request( 'reply' );
        $userId = request( 'user' );

        if ( auth()->user()->id == $userId ) {
            $report = DB::table( 'reports' )
                ->where( 'user_id', $userId )
                ->where( 'reported_type', 'App\Reply' )
                ->where( 'reported_id', $replyId )
                ->first();

            if ( $report ) {
                return response()->json( ['reported' => true] );
            }

            return response()->json( ['reported' => false] );
        }

        return response()->json( ['reported' => false] );
    }
}
