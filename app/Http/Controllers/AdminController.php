<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Emoji;
use App\Tags;
use Artisan;
use Illuminate\Http\Request;

class AdminController extends Controller {
    public function tags() {
        $profileUser = auth()->user();

        return view( 'pages.admin.tags', compact( 'profileUser' ) );
    }

    public function tagsAdd() {
        \request()->validate( [
            'name' => 'required',
        ] );

        $tags = Tags::create( \request()->all() );
        //$thread = Thread::first();
        //$thread->tags()->syncWithoutDetaching(1);
        //        dd($thread->tags);
        //return $thread->tags;
    }

    public function tagsUpdate() {
        \request()->validate( [
            'name' => 'required',
        ] );

        $id = request( 'id' );
        $name = request( 'name' );

        $tag = Tags::findOrFail( $id );

        $tag->update( [
            'name' => $name,
        ] );
    }

    public function privacyPolicy() {
        $profileUser = auth()->user();
        $adminInfo = Admin::first();

        $pageTitle = 'Admin | Privacy Policy';

        return view( 'pages.admin.privacypolicy', compact( 'adminInfo', 'profileUser', 'pageTitle' ) );
    }

    public function tos() {
        $profileUser = auth()->user();
        $adminInfo = Admin::first();

        $pageTitle = 'Admin | Terms & Condition';

        return view( 'pages.admin.tos', compact( 'adminInfo', 'profileUser', 'pageTitle' ) );
    }

    public function faq() {
        $profileUser = auth()->user();
        $adminInfo = Admin::first();

        $pageTitle = 'Admin  | Frequently asked questions';

        return view( 'pages.admin.faq', compact( 'adminInfo', 'profileUser', 'pageTitle' ) );
    }

    public function tosUpdate() {
        \request()->validate( [
            'body' => 'required',
        ] );

        $admin = Admin::first();

        $admin->tos = \request( 'body' );
        $admin->save();

        session()->flash( 'successmessage', 'Tos Information Update Successfully' );

        return redirect()->back();
    }

    public function privacyPolicyUpdate() {
        \request()->validate( [
            'body' => 'required',
        ] );

        $admin = Admin::first();

        $admin->privacypolicy = \request( 'body' );
        $admin->save();

        session()->flash( 'successmessage', 'Tos Information Update Successfully' );

        return redirect()->back();
    }

    public function faqUpdate() {
        \request()->validate( [
            'body' => 'required',
        ] );

        $admin = Admin::first();

        $admin->faq = \request( 'body' );
        $admin->save();

        session()->flash( 'successmessage', 'Faq Information Update Successfully' );

        return redirect()->back();

    }

    public function siteSettings() {
        $profileUser = auth()->user();
        $admin = Admin::first();

        $pageTitle = 'Admin  | Admin Site Settings';

        return view( 'pages.admin.sitesettings', compact( 'admin', 'profileUser', 'pageTitle' ) );
    }

    public function siteSettingsUpdate() {
        \request()->validate( [
            'app_name'        => 'required',
            'mail_driver'     => 'required',
            'mail_host'       => 'required',
            'mail_port'       => 'required',
            'username'        => 'required',
            'password'        => 'required',
            'mail_encryption' => 'required',
            'copyright'       => 'required',
            'timezone'        => 'required',
        ] );

        $admin = Admin::first();

        $this->setEnv( 'APP_NAME', request( 'app_name' ), $admin->app_name );

        $this->setEnv( 'TIME_ZONE', request( 'timezone' ), $admin->timezone );

        $this->setEnv( 'MAIL_DRIVER', request( 'mail_driver' ), $admin->mail_driver );
        $this->setEnv( 'MAIL_HOST', request( 'mail_host' ), $admin->mail_host );
        $this->setEnv( 'MAIL_PORT', request( 'mail_port' ), $admin->mail_port );
        $this->setEnv( 'MAIL_USERNAME', request( 'username' ), $admin->username );
        $this->setEnv( 'MAIL_PASSWORD', request( 'password' ), $admin->password );
        $this->setEnv( 'MAIL_ENCRYPTION', request( 'mail_encryption' ), $admin->mail_encryption );

        $admin->update( request()->all() );

        Artisan::call( 'config:clear' );
        // Artisan::call('cache:clear');
        // Artisan::call('config:cache');

        session()->flash( 'successmessage', 'Admin Settings Update Successfully' );

        return redirect()->route( 'admin.setesettings' );
    }

    public function setEnv( $key, $value, $oldValue ) {
        $old = env( $key );
        $new = $key . '=' . $value;

        file_put_contents( app()->environmentFilePath(), str_replace(
            $key . '=' . $oldValue,
            $key . '=' . $value,
            file_get_contents( app()->environmentFilePath() )
        ) );
    }

    public function batchTools() {
        $profileUser = auth()->user();
        $admin = Admin::first();
        $emojis = Emoji::all();

        $pageTitle = 'Admin  | Admin batch tools';

        return view( 'pages.admin.batchtools', compact( 'admin', 'profileUser', 'emojis', 'pageTitle' ) );

        // return 'batch tools';
        // return redirect()->route('admin.batchtools');
    }

    public function banUsers() {
        $profileUser = auth()->user();
        $admin = Admin::first();

        $pageTitle = 'Admin  | Ban users';

        return view( 'pages.admin.banusers', compact( 'admin', 'profileUser', 'pageTitle' ) );
    }
}
