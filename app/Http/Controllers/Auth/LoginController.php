<?php

namespace App\Http\Controllers\Auth;

use Abraham\TwitterOAuth\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Socialite;

class LoginController extends Controller {
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware( 'guest', ['except' => 'logout'] );
    }

    public function redirectToPage() {
        if ( request()->has( 'page' ) ) {
            $page = request( 'page' );
            session()->put( 'url.intended', $page );

            return redirect( '/login' );
        }

        return redirect( '/' );
    }

/**
 * Show the application's login form.
 *
 * @return \Illuminate\Http\Response
 */
    public function showLoginForm() {
        $pageTitle = 'Login';
        $previous =  url()->previous();
        session()->put( 'url.intended', $previous );
        return view( 'auth.login', compact( 'pageTitle' ) );
    }

    /**
     * Redirect the user to the Facebook authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToFacebookProvider() {
        return Socialite::driver( 'facebook' )->redirect();
    }

    /**
     * Obtain the user information from Facebook.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleFacebookProviderCallback() {
        if ( request()->has( 'error' ) ) {
            return redirect( '/login' );
        }

        $user = Socialite::driver( 'facebook' )->user();

        return $this->oauthLogin( $user, 'facebook' );
        // $user->token;
    }

    /**
     * Redirect the user to the Twitter authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToTwitterProvider() {
        return Socialite::driver( 'twitter' )->redirect();
    }

    /**
     * Obtain the user information from Twitter.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleTwitterProviderCallback() {
        $user = Socialite::driver( 'twitter' )->user();

        return $this->oauthLogin( $user, 'twitter' );
        // $user->token;
    }

    /**
     * Redirect the user to the Instagram authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToInstagramProvider() {
        // return Socialite::driver('instagram')->redirect();
        return Socialite::with( 'instagram' )->redirect();

    }

    /**
     * Obtain the user information from Instagram.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleInstagramProviderCallback() {
        // $user = Socialite::driver('instagram')->user();
        $user = Socialite::driver( 'instagram' )->user();
        // dd( $user );

        return $this->oauthLogin( $user, 'instagram' );
        // $user->token;
    }

    public function oauthLogin( $user, $provider ) {
        //  dd($user);
        $userExists = User::where( 'email', '=', $user->email )->first();
        if ( !$userExists ) {
            $name = $user->name;
            $splitName = explode( ' ', $name );
            $userName = strtolower( implode( '', $splitName ) . uniqid() );

            if ( count( $splitName ) > 1 ) {
                $firstName = $splitName[0];
                $lastName = $splitName[1];
            } else {
                $firstName = $name;
                $lastName = $name;
            }
            $newUser = User::create( [
                'name'        => $name,
                'username'    => $userName,
                'first_name'  => $firstName,
                'last_name'   => $lastName,
                'email'       => $user->email,
                'avatar_path' => $user->avatar,
                'password'    => Hash::make( md5( uniqid() . now() ) ),
                'confirmed'   => 1,
                'auth_type'   => $provider,
            ] );
            Auth::login( $newUser );
        } else {
            if ( $userExists->auth_type != $provider ) {
                if ( $userExists->auth_type == 'email' ) {
                    $message = 'This email is already associated with an account, pelase reset your password or login with your email and password below.';
                } else {
                    $message = 'This email has already registered using ' . $provider . '. Please login with ' . ucfirst( $provider ) . ', or you may reset your password';
                }

                return redirect( 'login' )->with( ['alert' => $message, 'alert_type' => 'error'] );
            }
            Auth::login( $userExists );
        }

        return redirect( '/' );
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function login( \Illuminate\Http\Request $request ) {
        $input = $request->all();

        $this->validate( $request, [
            'email'    => 'required',
            'password' => 'required',
        ] );

        $fieldType = filter_var( $request->email, FILTER_VALIDATE_EMAIL ) ? 'email' : 'username';
        if ( auth()->attempt( array( $fieldType => $input['email'], 'password' => $input['password'] ) ) ) {
            return redirect()->intended( $this->redirectPath() );
        } else {
            return redirect()->route( 'login' )
                ->with( 'error', 'Email-Address And Password Are Wrong.' );
        }

    }

}
