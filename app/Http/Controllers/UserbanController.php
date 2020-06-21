<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use App\Thread;
use App\Userban;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Notifications\UserBanNotification;

class UserbanController extends Controller
{
    protected $findKeyword = 'xxx';

    public function ban(Request $request){
        if($request->field == 'ban_users_title'){
            $request->validate([
                'ban_users_title' =>  'required',
                'ban_users_title_type' =>  'required',
            ],[
                'ban_users_title.required'  => 'The title field is required.',
                'ban_users_title_type.required'  => 'The type field is required.',
            ]);

            if($request->ban_users_title_type == 1){
                $request->validate([
                    'ban_users_title_days' =>  'required',
                ],[
                    'ban_users_title_days.required'  => 'The day field is required.',
                ]);
            }

            $userIds = Thread::
                        where('title', 'LIKE', "%{$request->ban_users_title}%")
                        ->distinct()
                        ->pluck('user_id')
                        ->all()
                        ;
            $this->banUsers($userIds, $request->ban_users_title_type, $request->ban_users_title_days);

        }else if($request->field == 'ban_users_body'){
            $request->validate([
                'ban_users_body' =>  'required',
                'ban_users_body_type' =>  'required',
            ],[
                'ban_users_body.required'  => 'The title field is required.',
                'ban_users_body_type.required'  => 'The type field is required.',
            ]);

            if($request->ban_users_body_type == 1){
                $request->validate([
                    'ban_users_body_days' =>  'required',
                ],[
                    'ban_users_body_days.required'  => 'The day field is required.',
                ]);
            }

            $userIds = Thread::
                        where('title', 'LIKE', "%{$request->ban_users_body}%")
                        ->distinct()
                        ->pluck('user_id')
                        ->all()
                        ;
            $this->banUsers($userIds, $request->ban_users_body_type, $request->ban_users_body_days);

            
        }else if($request->field == 'ban_users_tag'){           
            $request->validate([
                'ban_users_tag' =>  'required',
                'ban_users_tag_type' =>  'required',
            ],[
                'ban_users_tag.required'  => 'The title field is required.',
                'ban_users_tag_type.required'  => 'The type field is required.',
            ]);
            
            if($request->ban_users_tag_type == 1){
                $request->validate([
                    'ban_users_tag_days' =>  'required',
                ],[
                    'ban_users_tag_days.required'  => 'The day field is required.',
                ]);
            }
            

            $tag = Tags::where('name', strtolower($request->ban_users_tag))->first();
            if($tag){
                $threads = $tag->threads;
                $threads->each(function($thread) use($request){
                    $this->banUsers([$thread->user_id], $request->ban_users_tag_type, $request->ban_users_tag_days);
                });

            }else{
                session()->flash('errormessage','No tag found');
                return redirect()->route('admin.manage.user');
            }
        }
        
        session()->flash('successmessage','Users Banned Successfully');
        return redirect()->route('admin.manage.user');
    }

    public function unban(){
        $banUsers = Userban::pluck('id');
        Userban::destroy($banUsers);

        session()->flash('successmessage','All users unbanned Successfully');
        return redirect()->route('admin.manage.user');

    }

    public function banSingleUser(Request $request){
        $request->validate([
            'ban_single_user_username' =>  'required',
            'ban_single_user_type' =>  'required',
        ],[
            'ban_single_user_username.required'  => 'The username field is required.',
            'ban_single_user_type.required'  => 'The type field is required.',
        ]);
        
        if($request->ban_single_user_type == 1){
            $request->validate([
                'ban_single_user_days' =>  'required',
            ],[
                'ban_single_user_days.required'  => 'The day field is required.',
            ]);
        }

        $user = User::where('username',$request->ban_single_user_username)->first();
        if($user){
            $this->banUsers([$user->id], $request->ban_single_user_type, $request->ban_single_user_days);
        }else{
            session()->flash('errormessage','User not found');
            return redirect()->route('admin.manage.user');
        }

        session()->flash('successmessage','User banned Successfully');
        return redirect()->route('admin.manage.user');
    }

    public function unbanSingleUser(Request $request){
        $request->validate([
            'unban_single_user_username' =>  'required',
        ],[
            'unban_single_user_username.required'  => 'The username field is required.',
        ]);


        $user = User::where('username',$request->unban_single_user_username)->first();
        if($user){
            $user->userban->delete();
        }else{
            session()->flash('errormessage','User not found');
            return redirect()->route('admin.manage.user');
        }

        session()->flash('successmessage','User unbanned Successfully');
        return redirect()->route('admin.manage.user');
    }
    
    public function banUsers($userIds, $type, $days){
        if($type==1){
            $expire =  NULL;
            $reason = 'You have violated our Terms of Service, your account has been permanently suspended.';
        }else{
            $expire = Carbon::now()->addDay($days)->toDateTimeString();
            $reason = "You have violated our Terms of Service, your account has been suspended for {$days} days";
        }

         foreach($userIds as $id){
            $user = User::where('id', $id)->first();
            Userban::create([
                'user_id'       =>  $id,
                'ban_type'      =>  $type,
                'ban_expire_on' =>  $expire,
                'ban_reason'    =>  $reason
            ]);
            $user->notify(new UserBanNotification($reason));
        }
    }
}
