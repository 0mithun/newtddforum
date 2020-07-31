<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Mail\ContactToAdmin;
use App\Rules\Recaptcha;
use App\Tags;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FrontendController extends Controller {
    public function contact() {
        return view( 'pages.contact' );
    }

    public function tos() {
        $admin = Admin::first();
        $pageTitle = 'Terms & conditions';

        return view( 'pages.tos', compact( 'admin', 'pageTitle' ) );
    }

    public function faq() {
        $admin = Admin::first();

        $pageTitle = 'Frequently asked questions';

        return view( 'pages.faq', compact( 'admin', 'pageTitle' ) );
    }

    public function privacyPolicy() {
        $admin = Admin::first();

        $pageTitle = 'Privacy policy';

        return view( 'pages.privacypolicy', compact( 'admin', 'pageTitle' ) );
    }

    public function contactAdmin( Recaptcha $recaptcha ) {
        request()->validate( [
            'from'                 => 'required',
            'subject'              => 'required',
            'body'                 => 'required',
            'g-recaptcha-response' => ['required', $recaptcha],
        ],
            [
                'g-recaptcha-response.required' => 'Please solve the captcha',
            ] );

        $data = request()->only( ['from', 'subject', 'body'] );

        Mail::to( 'admin@anecdotage.com' )->send( new ContactToAdmin( $data ) );

        return redirect( '/' );
    }

    public function showTags() {
        $tags = Tags::withCount( 'threads' )->orderBy( 'threads_count', 'desc' )->take( 100 )->get();
        //return response()->json($tags);
        $tags = json_encode( $tags );
        $pageTitle = 'All Tags';

        return view( 'threads.tags', compact( 'tags', 'pageTitle' ) );
    }

    public function allTags() {
        $tags = Tags::orderBy( 'name', 'ASC' )->get()->pluck( 'name' );

        return response()->json( $tags );
    }
}
