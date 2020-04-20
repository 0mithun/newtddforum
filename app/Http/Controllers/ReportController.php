<?php

namespace App\Http\Controllers;

use App\Notifications\ReplywasReported;
use App\Notifications\ThreadWasReported;
use App\Notifications\UserWasReported;
use Illuminate\Http\Request;
use App\Reply;
use App\User;
use App\Thread;
use DB;


class ReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function reply(Reply $reply){
//
        request()->validate([
            'reason'    =>  'required'
        ]);
        $user = User::find(1);

        DB::table('reports')->insert([
            'user_id'           =>  auth()->id(),
            'reported_id'       =>  $reply->id,
            'reported_type'     =>  get_class($reply)
        ]);

        $reason = request('reason');
        $user->notify(new ReplywasReported($reply, $reason));

        return 'Thread Succssfully reported';
    }


    public  function  user(){

        $reason = \request('reason');
        $user_id = \request('user_id');
        $user = User::find(1);
        $reported_user = User::find($user_id);

//        $user = User::find(1);
        DB::table('reports')->insert([
            'user_id'           =>  auth()->id(),
            'reported_id'       =>  $user_id,
            'reported_type'     =>  'App\User'
        ]);


        $user->notify(new UserWasReported($reported_user, $reason) );
    }

    public function checkUserReport(){
        $reported_id = request('reported_id');
        $user_id = request('user');

        //return auth()->user()->id;
        //return $creatorId;


        if(auth()->user()->id == $user_id){
            $report = DB::table('reports')
            ->where('user_id', $user_id )
            ->where('reported_type','App\User')
            ->where('reported_id', $reported_id )
            ->first();

            if($report){
                return response()->json(['reported'=>true]);
            }
            return response()->json(['reported'=>false]);
        }

        return response()->json(['reported'=>false]);
    }


    public function thread(){

        request()->validate([
            'reason'    =>  'required'
        ]);

        $id = \request('id');
        $reason = \request('reason');
        $thread = Thread::findOrFail($id);

        DB::table('reports')->insert([
            'user_id'           =>  auth()->id(),
            'reported_id'       =>  $id,
            'reported_type'     =>  get_class($thread)
        ]);

        $user = User::find(1);
        $user->notify(new ThreadWasReported($thread, $reason));
    }

    public function checkThreadReport(){
        $threadId = request('thread');
        $userId = request('user');

        if(auth()->user()->id == $userId){
            $report = DB::table('reports')
            ->where('user_id', $userId )
            ->where('reported_type','App\Thread')
            ->where('reported_id', $threadId )
            ->first();

            if($report){
                return response()->json(['reported'=>true]);
            }
            return response()->json(['reported'=>false]);
        }

        return response()->json(['reported'=>false]);

    }

    public function checkReplyReport(){
        //return request()->all();


        $replyId = request('reply');
        $userId = request('user');

        if(auth()->user()->id == $userId){
            $report = DB::table('reports')
            ->where('user_id', $userId )
            ->where('reported_type','App\Reply')
            ->where('reported_id', $replyId )
            ->first();

            if($report){
                return response()->json(['reported'=>true]);
            }
            return response()->json(['reported'=>false]);
        }

        return response()->json(['reported'=>false]);
    }
}
