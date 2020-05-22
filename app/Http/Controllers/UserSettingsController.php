<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserSettingsController extends Controller
{


    public  function index(){
        $settings = auth()->user()->usersetting;
        return view('profiles.settings.notifications',compact('settings'));
    }

    public function update(Request $request){

        //return $request->all();
        auth()->user()->usersetting()->delete();
        auth()->user()->usersetting()->create($request->all());

        session()->flash('successmessage','Notification settings update successfully');
        return redirect()->route('user.settnigs', auth()->user()->username);
        //dd($request->all());
    }


    public function getPrivacy(){
        $privacy = auth()->user()->userprivacy;
        return view('profiles.settings.privacy',compact('privacy'));
    }

    public function updatePrivacy(Request $request){
        //return $request->all();
        $data['see_my_threads'] = $request->see_my_threads;
        $data['see_my_favorites'] = $request->see_my_favorites;
        $data['see_my_friends'] = $request->see_my_friends;
        $data['send_me_message'] = $request->send_me_message;

        $data['thread_create_share_facebook'] = request('thread_create_share_facebook',0);
        $data['thread_create_share_twitter'] = request('thread_create_share_twitter',0);

        $data['anyone_share_my_thread_facebook'] = request('anyone_share_my_thread_facebook',0);
        $data['anyone_share_my_thread_twitter'] = request('anyone_share_my_thread_twitter',0);
        $data['restricted_13'] = request('restricted_13',0);
        $data['restricted_18'] = request('restricted_18',0);


        $authUser = auth()->user();
        $authUser->userprivacy()->update($data);
        session()->flash('successmessage','Privacy settings update successfully');
        return redirect()->route('user.settnigs.privacy', $authUser->username);

    }

}
