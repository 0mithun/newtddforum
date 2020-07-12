<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Mail\ContactToAdmin;
use App\Rules\Recaptcha;
use App\Tags;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use DB;

class FrontendController extends Controller
{


    public function contact(){
        return view('pages.contact');
    }

    public function tos(){
        $admin = Admin::first();
        return view('pages.tos', compact('admin'));
    }

    public function faq(){
        $admin = Admin::first();
        return view('pages.faq', compact('admin'));
    }

    public  function privacyPolicy(){
        $admin = Admin::first();
        return view('pages.privacypolicy', compact('admin'));
    }

    public function contactAdmin(Recaptcha $recaptcha){

        request()->validate([
            'from'      =>  'required',
            'subject'   =>  'required',
            'body'      =>  'required',
            'g-recaptcha-response' => ['required', $recaptcha],
        ],
            [
            'g-recaptcha-response.required' =>  'Please solve the captcha'
        ]);

        $data =  request()->only(['from','subject','body']);

       Mail::to('admin@anecdotage.com')->send(new ContactToAdmin($data));
        return  redirect('/');
    }

    public function getTags(){
        return Tags::all();
    }

    

    public function showTags(){
        $tags = Tags::withCount('threads')->orderBy('threads_count','desc')->take(100)->get();
        //return response()->json($tags);
        $tags = json_encode($tags);
        return view('threads.tags', compact('tags'));
    }
}
