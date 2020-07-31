<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\PleaseConfirmYourEmail;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller {
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
     */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware( 'guest' );
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator( array $data ) {
        return Validator::make( $data, [
            'first_name' => 'required|max:255',
            'last_name'  => 'required|max:255',
            'email'      => 'required|email|max:255|unique:users',
            'username'   => 'required|max:40|unique:users',
            'password'   => 'required|min:6|confirmed',
        ] );
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create( array $data ) {
        $arr_ip = geoip()->getLocation( $_SERVER['REMOTE_ADDR'] );

        return User::forceCreate( [
            'name'               => $data['first_name'] . " " . $data['last_name'],
            'first_name'         => $data['first_name'],
            'last_name'          => $data['last_name'],
            'email'              => $data['email'],
            'username'           => $data['username'],
            'password'           => bcrypt( $data['password'] ),
            'confirmation_token' => str_limit( md5( $data['email'] . str_random() ), 25, '' ),
            'lat'                => $arr_ip['lat'],
            'lng'                => $arr_ip['lon'],
        ] );
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\User                $user
     * @return void
     */
    protected function registered( Request $request, $user ) {
        Mail::to( $user )->send( new PleaseConfirmYourEmail( $user ) );
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm() {
        $pageTitle = 'Register';

        return view( 'auth.register', compact( 'pageTitle' ) );
    }

}
