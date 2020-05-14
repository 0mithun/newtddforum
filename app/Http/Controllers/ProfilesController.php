<?php

namespace App\Http\Controllers;

use App\Activity;
use App\Mail\ConfirmNewEmail;
use App\Thread;
use App\User;
use App\Usersetting;
use Illuminate\Http\Request;

use Carbon\Carbon;

use DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ProfilesController extends Controller
{
    /**
     * Show the user's profile.
     *
     * @param  User $user
     * @return \Response
     */
    public function show($user)
    {
       $authUser = auth()->user();
       $usredata = User::
            with('userprivacy')->
            where('username', $user)
            ->first();


       if($authUser->username == $user){
            return view('profiles.show', [
                'profileUser' => $usredata,
                // 'activities' => Activity::feed($usredata)
            ]);
       }else{
           

        $friend = User::where('username', $user)
                    ->first();
        $isFriend = $authUser->isFriendWith($friend);



           return view('profiles.show', [
            'profileUser' => $usredata,
            // 'activities' => Activity::feed($usredata),
            'is_friend' =>  $isFriend
        ]);
       }


    }


    public function edit($user){
        $user = auth()->user();
        $profileUser = $user;
        return view('profiles.edit',compact('user','profileUser'));


    }

    public  function  update(Request $request){
        $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users,email,'.auth()->user()->id,
        ]);
        auth()->user()->update($request->only(['first_name','last_name','date_of_birth','city','country','about']));

        if(auth()->user()->email != $request->email){
            $token = md5(uniqid().str_random());
            DB::table('confirm_email')
                    ->insert([
                        'new_email'     =>  $request->email,
                        'user_id'       =>  auth()->user()->id,
                        'confirmation_token'    =>$token
                    ])
                ;
            $data = [
                'confirmation_token'    => $token
            ];
                Mail::to($request->email)->send(new ConfirmNewEmail($token));
            session()->flash('message','Your profile information update successfully. New email need to confirm');
        }

        session()->flash('message','Your profile information update successfully');

        return redirect()->route('profile', auth()->user()->username);
    }


    public  function confirmNewEmail(){
        $token = request('token');

        $data = DB::table('confirm_email')
                ->where('confirmation_token', $token)
                ->first()
            ;
        if($data){
           $old_email =  DB::table('users')
                ->where('email', $data->new_email)
                ->first()
            ;
           if($old_email){
               session()->flash('This email already taken');
               return redirect('/');
           }else{
               DB::table('users')
                   ->where('id', $data->user_id)
                   ->update([
                       'email'  =>  $data->new_email
                   ]);
               DB::table('confirm_email')->where('new_email', $data->new_email)->delete();

               session()->flash('New email update successfully');
               return redirect('/');
           }

        }else{
            session()->flash('Invalid Token');
            return redirect('/');
        }

    }

    public function editPassword(){

        $profileUser = auth()->user();
        return view('profiles.changepassword', compact('profileUser'));
    }

    public function updatePassword(Request $request){

        $request->validate([
            'old_password' => 'required',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
        ],[
            'password.required' =>  'The mew password field is required.',
            'password.min' =>  'The mew password must be at least 6 characters.',
        ]);

        $data = [];

        $user = auth()->user();

        $auth_user = DB::table('users')->where('id', $user->id)->first();


        if (Hash::check($request->old_password, $auth_user->password)) {
            $user->update([
                'password'  =>  bcrypt($request->password)
            ]);
            session()->flash('successmessage','Your password change successfully.');
            return redirect()->back();

        }else{
            session()->flash('errormessage','Your current password dose not match.');
            return redirect()->back();
        }




    }


    public function avatar(){
        $user =  request('user');
        $auth_user = auth()->user();
        if($user != $auth_user->username){
            return redirect('/');
        }

        $profileUser = $auth_user;
        
        return view('profiles.avatar', compact('profileUser'));
    }

    public  function settings(){
        $user =  request('user');
        $auth_user = auth()->user();
        if($user != $auth_user->username){
            return redirect('/');
        }
        return view('profiles.settings');
    }





    public function avatarChange($user){

        // $user =  request('user');
        // $auth_user = auth()->user();
        // if($user != $auth_user->username){
        //     return redirect('/');
        // }

        request()->validate([
            'avatar' => 'required|image'
        ]);



        if(request()->has('avatar')){
            $avatar_path= auth()->user()->avatar_path;
            $path = 'uploads/'.request()->avatar->store('avatars');


            if(file_exists($avatar_path)){
                if(!$avatar_path == 'images/avatars/default.png'){
                    unlink($avatar_path);
                }


                auth()->user()->update([
                    'avatar_path' => $path
                ]);
            }else{
                auth()->user()->update([
                    'avatar_path' => $path
                ]);
            }

        }
        return response()->json(['status'=>'success', 'message'=>'Avatar Change Successfully', 'avatar_path'=>asset($path)]);

    }




    public function mySubscriptionsShow(){

        $user =  request('user');
        $auth_user = auth()->user();
        if($user != $auth_user->username){
            return redirect('/');
        }


        $subscriptions = DB::table('thread_subscriptions')
                ->where('user_id', $auth_user->id)
                ->get()

            ;
        $profileUser = $auth_user;
        return view('profiles.subscriptions', compact('subscriptions','profileUser'));
    }

    public  function myFavoritesShow(){
        
        $user =  request('user');
        $getUserInfo = User::where('username', $user)->first();      
        

        if(!$this->checkFriend($getUserInfo,'see_my_favorites')){
            return redirect('/');
        }

        

        $favoritesId = DB::table('favorites')
                ->where('user_id', $getUserInfo->id)
                ->where('favorited_type','App\Thread')
                ->get()
                ->pluck('favorited_id')
                ->all()

            ;
        $auth_user = auth()->user();



        // $favorites = Thread::whereIn('id', $favoritesId)->get();

        if($auth_user->username == $user){
            $favorites = Thread::whereIn('id', $favoritesId)->get();
        }else{
            if($auth_user->userprivacy->show_restricted == 1){
                $favorites = Thread::whereIn('id', $favoritesId)->get();
            }else{
                $favorites = Thread::whereIn('id', $favoritesId)->where('age_restriction',0)->get();
            }
        }



        $profileUser = $getUserInfo;   
        $is_friend = $auth_user->isFriendWith($getUserInfo);

        return view('profiles.favorites', compact('favorites','profileUser', 'is_friend'));
    }



    public function myThreadsShow(){

        $user =  request('user');
        
                
        $getUserInfo = User::with('userprivacy')->where('username', $user)->first();
        
        
        if(!$this->checkFriend($getUserInfo,'see_my_threads')){
            return redirect('/');
        }


        $auth_user =auth()->user();
        if($auth_user->username == $user){
            $threads =Thread::where('user_id', $getUserInfo->id)->get();
        }else{
            if($auth_user->userprivacy->show_restricted == 1){
                $threads =Thread::where('user_id', $getUserInfo->id)->get();
            }else{
                $threads =Thread::where('user_id', $getUserInfo->id)->where('age_restriction',0)->get();
            }
        }

        



        
        $profileUser = $getUserInfo;      

        $friend = User::where('username', $user)
                    ->first();

                    
        $is_friend = auth()->user()->isFriendWith($friend);

        return view('profiles.threads', compact('threads','profileUser', 'is_friend'));
    }



    public function myLikesShow(){

        $user =  request('user');
        $auth_user = auth()->user();
        if($user != $auth_user->username){
            return redirect('/');
        }


        $likes = DB::table('likes')
            ->where('user_id', $auth_user ->id)
            ->where('likeable_type','App\Thread')
            ->get()

        ;

        $profileUser = $auth_user;
        return view('profiles.likes', compact('likes','profileUser'));
    }



    public function friendList(){

        $user = request('user');

        $userInfo = User::where('username', $user)->first();

        if(!$this->checkFriend($userInfo,'see_my_friends')){
            return redirect('/');
        }

        
        $friendLists = $userInfo->getFriends();

        $profileUser = $userInfo;      


        $is_friend = auth()->user()->isFriendWith($userInfo);


        return view('profiles.friendlist', compact('friendLists','userInfo','profileUser','is_friend'));
        
    }


    public function checkFriend($friend, $privacy){
        $auth_user = auth()->user();
       
        
        if($friend->username != $auth_user->username){
            if($friend->userprivacy->{$privacy} == 1 ){
               
                return false;
           }else if(
               $friend->userprivacy->{$privacy} == 2 && !$auth_user->isFriendWith($friend)){
                return false;
           }
        }
        return true;
    }
}
