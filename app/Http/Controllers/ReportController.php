<?php

namespace App\Http\Controllers;

use DB;
use App\User;
use App\Reply;
use App\Thread;
use Illuminate\Http\Request;
use App\Mail\TreadWasReportedEmail;
use Illuminate\Support\Facades\Mail;
use App\Notifications\UserWasReported;
use App\Notifications\ReplywasReported;
use App\Notifications\ThreadWasReported;
use App\Notifications\ThreadReportUpdated;
use App\Notifications\ThreadRestrictionReported;
use App\Notifications\ThreadReportAdminNotifications;

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
        $report_type = request( 'report_type' );
        $reason = \request( 'reason' );

        $authUser = auth()->user();
        $thread = Thread::findOrFail( $id );

        DB::table( 'reports' )->insert( [
            'user_id'       => $authUser->id,
            'reported_id'   => $id,
            'reported_type' => get_class( $thread ),
        ] );

        if ( $report_type == 13 ||  $report_type == 18 ) {
            $thread->age_restriction = $report_type;
            if($report_type == 13){
                $report_type = 'PG-13';
            }else if($report_type == 18){
                $report_type = 'R-rated (18+)' ;
            }

            $thread->flagged = $report_type;
            $thread->save();
                    
            // $profileLInk = '<a href="/profiles/'.$authUser->username.'">'.$authUser->username .'</a>';
            // $reason = "User ".$profileLInk." reported to your thread. Your item has been changed to ".$report_type;

            $reason = "Your item <a href=".$thread->path().">here</a> has been flagged as ".$report_type.". It is under review & may be hidden from other people.";
            $creator = User::find( $thread->creator->id );
            $creator->notify( new ThreadRestrictionReported( $thread, $reason ) );

            $adminUser = User::find( 1 );
            $threadLink = '<a href="'.$thread->path().'">This</a>';
            $reason = $threadLink.' item has been flagged as '.$report_type.' & is under review.';
            $adminUser->notify( new ThreadReportAdminNotifications( $thread, $reason ) );

            Mail::to('anecdotage-reports@gmail.com')
            ->send(new TreadWasReportedEmail($thread, $report_type,  $reason ));
            
        } else{
            if($report_type == 'Miscategorized'){
                $thread->is_published = 1; 
            }else if($report_type == 'Incorrect'){
                $thread->is_published = 1; 
            }else{
                $thread->is_published = 0;
            }
            $report_type =  ucwords(str_replace('_', ' ', $report_type));
            $thread->flagged = $report_type;
            $thread->is_published = 0;           
            $thread->save();
    
            $reason = "Your item <a href=".$thread->path().">here</a> has been flagged as ".$report_type.". It is under review & may be hidden from other people.";
            $creator = User::find( $thread->creator->id );
            $creator->notify( new ThreadWasReported( $thread, $reason ) );

            $adminUser = User::find( 1 );
            $threadLink = '<a href="'.$thread->path().'">This</a>';
            $reason = $threadLink.' item has been flagged as '.$report_type.' & is under review.';
            $adminUser->notify( new ThreadReportAdminNotifications( $thread, $reason ) );

            Mail::to('anecdotage-reports@gmail.com')
            ->send(new TreadWasReportedEmail($thread, $report_type, $reason));
        
            $reason = "After review, your post changed to ".$report_type;
            $creator = User::find( $thread->creator->id );
            $creator->notify( new ThreadReportUpdated( $thread, $reason ) );
            
        }
       
        return \response()->json( ['status' => 'success', 'message' => 'Thread Reported Successfully'] );
    }

    public function threadReview(){
        $id = \request( 'id' );
        $report_type = request( 'report_type' );
        $reason = \request( 'reason' );

        $authUser = auth()->user();
        $thread = Thread::findOrFail( $id );

        DB::table( 'reports' )->insert( [
            'user_id'       => $authUser->id,
            'reported_id'   => $id,
            'reported_type' => get_class( $thread ),
        ] );

        DB::table( 'reports' )->where('reported_id', $id)->where('reported_type', get_class( $thread ),)->delete();

        if ( $report_type == 13 ||  $report_type == 18 ) {
            $thread->age_restriction = $report_type;

            if($report_type == 13){
                $report_type = 'PG-13';
            }else if($report_type == 18){
                $report_type = 'R-rated (18+)' ;
            }

            $thread->flagged = $report_type;
            $thread->is_published = 1; 

            $thread->save();
            $reason = "After review, your post changed to ".report_type;
            $creator = User::find( $thread->creator->id );
            $creator->notify( new ThreadReportUpdated( $thread, $reason ) );
           
        } else{
            if($report_type == 'Miscategorized'){
                $thread->is_published = 1; 
            }else if($report_type == 'Incorrect'){
                $thread->is_published = 1; 
            }else{
                $thread->is_published = 0;
            }
            $report_type =  ucwords(str_replace('_', ' ', $report_type));

            $thread->flagged = $report_type;
            $thread->is_published = 0;           
            $thread->save();

            $reason = "After review, your post changed to ".report_type;
            $creator = User::find( $thread->creator->id );
            $creator->notify( new ThreadReportUpdated( $thread, $reason ) );
            
        }
       
        return \response()->json( ['status' => 'success', 'message' => 'Thread review Successfully'] );
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
