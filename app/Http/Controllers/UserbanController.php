<?php

namespace App\Http\Controllers;

use App\Notifications\UserBanNotification;
use App\User;
use App\Thread;
use App\Userban;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserbanController extends Controller
{
    protected $findKeyword = 'xxx';

    public function ban(Request $request){

        $request->validate([
            'ban_type'  =>  'required',
        ]);

        $days = 7;
        $reason = '';

        if($request->ban_expire_on !=''){
            $days = $request->ban_expire_on;
        }

        if($request->ban_type==1){
            $reason = 'You have violated our Terms of Service, your account has been permanently suspended.';
        }else{
            $expire = Carbon::now()->addDay($days)->toDateTimeString();
            $reason = ($request->ban_reason) == '' ? "You have violated our Terms of Service, your account has been suspended for {$days} days" : $request->ban_reason;
        }

        $userId = Thread::
                    where('title', 'LIKE', "%{$this->findKeyword}%")
                    ->orWhere('body', 'LIKE', "%{$this->findKeyword}%")
                    ->distinct()
                    ->pluck('user_id')
                    ->all()
                    ;
        
  

        foreach($userId as $user){
            Userban::create([
                'user_id'       =>  $user,
                'ban_type'      =>  $request->ban_type,
                'ban_expire_on' =>  $expire,
                'ban_reason'    =>  $reason
            ]);
            $user->notify(new UserBanNotification($reason));
        }

        session()->flash('successmessage','Users Banned Successfully');
        return redirect()->route('admin.manage.user');
    }

    public function unban(){
        $banUsers = Userban::pluck('id');
        Userban::destroy($banUsers);

        session()->flash('successmessage','Users Unbanned Successfully');
        return redirect()->route('admin.manage.user');

    }

    public function banSingleUser(Request $request){
        $request->validate([
            'username'  =>  'required',
            'ban_type'  =>  'required',
        ]);

        $days = 7;
        $reason = '';

        if($request->ban_expire_on !=''){
            $days = $request->ban_expire_on;
        }

        if($request->ban_type==1){
            $reason = 'You have violated our Terms of Service, your account has been permanently suspended.';
        }else{
            $expire = Carbon::now()->addDay($days)->toDateTimeString();
            $reason = ($request->ban_reason) == '' ? "You have violated our Terms of Service, your account has been suspended for {$days} days" : $request->ban_reason;
        }


        $user = User::where('username',$request->username)->first();

        if($user){
             Userban::create([
                'user_id'       =>  $user->id,
                'ban_type'      =>  $request->ban_type,
                'ban_expire_on' =>  $expire,
                'ban_reason'    =>  $reason
            ]);
            
            $user->notify(new UserBanNotification($reason));

            session()->flash('successmessage','User banned Successfully');
            return redirect()->route('admin.manage.user');
        }

        session()->flash('errormessage','User not found');
        return redirect()->route('admin.manage.user');


        
    }
}
