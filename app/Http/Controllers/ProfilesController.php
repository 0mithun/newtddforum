<?php

namespace App\Http\Controllers;

use App\Mail\ConfirmNewEmail;
use App\Reply;
use App\Thread;
use App\Traits\ThreadPrivacy;
use App\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Spatie\Geocoder\Geocoder;

class ProfilesController extends Controller {
    use ThreadPrivacy;
    public $perPage = 10;
    /**
     * Show the user's profile.
     *
     * @param  User $user
     * @return \Response
     */
    public function show( $user ) {
        $authUser = auth()->user();
        $friend = User::where( 'username', $user )
            ->first();
        
            if(!$friend){
                return abort(404);
            }

        if ( $authUser->isBlockedBy( $friend ) || $authUser->hasBlocked( $friend ) ) {
            return redirect( '/' );
        }

        $usredata = User::
            with( 'userprivacy' )->
            where( 'username', $user )
            ->first();

        $pageTitle = 'Profile | ' . $friend->name;

        if ( $authUser->username == $user ) {
            return view( 'profiles.show', [
                'profileUser'        => $usredata,
                'profileUserPrivacy' => $usredata->userprivacy,
                'is_owner'           => true,
                'is_friend'          => false,
                'pageTitle'          => $pageTitle,

                // 'activities' => Activity::feed($usredata)
            ] );
        } else {
            $isFriend = $authUser->isFriendWith( $friend );

            return view( 'profiles.show', [
                'profileUser'        => $usredata,
                'profileUserPrivacy' => $usredata->userprivacy,
                'is_owner'           => false,
                'is_friend'          => $isFriend,
                'pageTitle'          => $pageTitle,
            ] );
        }

    }

    public function edit( $user ) {
        $user = auth()->user();
        $profileUser = $user;

        $pageTitle = 'Profile edit information';

        return view( 'profiles.edit', compact( 'user', 'profileUser', 'pageTitle' ) );

    }

    public function update( Request $request ) {
        $user = auth()->user();
        $request->validate( [
            'first_name' => 'required|max:255',
            'last_name'  => 'required|max:255',
            'email'      => 'required|email|max:255|unique:users,email,' . auth()->user()->id,
        ] );
        $data = [
            'first_name'    => $request->first_name,
            'last_name'     => $request->last_name,
            'date_of_birth' => $request->date_of_birth,
            'city'          => $request->city,
            'country'       => $request->country,
            // 'about'         => $request->about,
        ];

        if ( request( 'city' ) != null && $user->city != $request->city ) {
            $location = $this->getGeocodeing( request( 'city' ) );
            if ( $location['accuracy'] != 'result_not_found' ) {
                $data['lat'] = $location['lat'];
                $data['lng'] = $location['lng'];
            }
        }

        $user->update( $data );

        if ( $user->email != $request->email ) {
            $token = md5( uniqid() . str_random() );
            DB::table( 'confirm_email' )
                ->insert( [
                    'new_email'          => $request->email,
                    'user_id'            => $user->id,
                    'confirmation_token' => $token,
                ] );
            $data = [
                'confirmation_token' => $token,
            ];

            Mail::to( $request->email )->send( new ConfirmNewEmail( $token ) );
            session()->flash( 'message', 'Your profile information update successfully. New email need to confirm' );

            return redirect()->route( 'profile', $user->username );
        }

        session()->flash( 'message', 'Your profile information update successfully' );

        return redirect()->route( 'profile', $user->username );
    }

    public function updateAbout( Request $request ) {
        $user = auth()->user();
        $user->update( [
            'about' => $request->about,
        ] );

        return response()->json( ['success' => true, 'message', 'About update successfully'] );
    }

    public function confirmNewEmail() {
        $token = request( 'token' );

        $data = DB::table( 'confirm_email' )
            ->where( 'confirmation_token', $token )
            ->first();
        if ( $data ) {
            $old_email = DB::table( 'users' )
                ->where( 'email', $data->new_email )
                ->first();
            if ( $old_email ) {
                session()->flash( 'This email already taken' );

                return redirect( '/' );
            } else {
                DB::table( 'users' )
                    ->where( 'id', $data->user_id )
                    ->update( [
                        'email' => $data->new_email,
                    ] );
                DB::table( 'confirm_email' )->where( 'new_email', $data->new_email )->delete();

                session()->flash( 'New email update successfully' );

                return redirect( '/' );
            }

        } else {
            session()->flash( 'Invalid Token' );

            return redirect( '/' );
        }

    }

    public function editPassword() {
        $profileUser = auth()->user();

        return view( 'profiles.changepassword', compact( 'profileUser' ) );
    }

    public function updatePassword( Request $request ) {
        $auth_user = auth()->user();

        $request->validate( [
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
        ], [
            'password.required' => 'The mew password field is required.',
            'password.min'      => 'The mew password must be at least 6 characters.',
        ] );

        if ( $auth_user->auth_type == 'email' ) {
            $request->validate( [
                'old_password' => 'required',
            ] );
            if ( Hash::check( $request->old_password, $auth_user->password ) ) {
                $auth_user->update( [
                    'password' => bcrypt( $request->password ),
                ] );
            } else {
                session()->flash( 'errormessage', 'Your current password dose not match.' );

                return redirect()->back();
            }
        } else {
            $auth_user->update( [
                'password'  => bcrypt( $request->password ),
                'auth_type' => 'email',
            ] );
        }
        session()->flash( 'successmessage', 'Your password change successfully.' );

        return redirect()->back();
    }

    public function avatar() {
        $user = request( 'user' );
        $auth_user = auth()->user();
        if ( $user != $auth_user->username ) {
            return redirect( '/' );
        }

        $profileUser = $auth_user;

        $pageTitle = 'Update Avatar';

        return view( 'profiles.avatar', compact( 'profileUser', 'pageTitle' ) );
    }

    public function settings() {
        $user = request( 'user' );
        $auth_user = auth()->user();
        if ( $user != $auth_user->username ) {
            return redirect( '/' );
        }

        $pageTitle = 'Profile settings';

        return view( 'profiles.settings', compact( 'pageTitle' ) );
    }

    public function avatarChange( $user ) {
        request()->validate( [
            'avatar' => 'required|image',
        ] );

        if ( request()->has( 'avatar' ) ) {
            $avatar_path = auth()->user()->avatar_path;
            $path = 'uploads/' . request()->avatar->store( 'avatars' );

            if ( file_exists( $avatar_path ) ) {
                if ( !$avatar_path == 'images/avatars/default.png' ) {
                    unlink( $avatar_path );
                }
                auth()->user()->update( [
                    'avatar_path' => $path,
                ] );
            } else {
                auth()->user()->update( [
                    'avatar_path' => $path,
                ] );
            }
        }

        return response()->json( ['status' => 'success', 'message' => 'Avatar Change Successfully', 'avatar_path' => asset( $path )] );
    }

    /**
     * Get all subscriptions
     */

    public function mySubscriptionsShow() {
        $user = request( 'user' );
        $getUserInfo = User::where( 'username', $user )->first();

        if(!$getUserInfo){
            return abort(404);
        }

        $subscriptionsId = DB::table( 'thread_subscriptions' )
            ->where( 'user_id', $getUserInfo->id )
            ->get()
            ->pluck( 'thread_id' )
            ->all();
        
        $threads = Thread::whereIn( 'id', $subscriptionsId );

        $this->sortBy($threads);
        $totalRecords = $threads->count();

        
        $threads = $this->generateCurrentPageResults($threads, $this->perPage);        
        $threads = $this->convert_from_latin1_to_utf8_recursively($threads->toArray());
        $threads = $this->convertToObject($threads);

        return response()->json( [
            'threads' => $threads,
            'total_records' => $totalRecords,
        ] );
    }

    /**
     * Get all comments
     */

    public function myCommentsShow() {
        $user = request( 'user' );
        $getUserInfo = User::where( 'username', $user )->first();

        if(!$getUserInfo){
            return abort(404);
        }

        $count = Reply::where('user_id', $getUserInfo->id)->count();

        return response()->json( ['replies_count' => $count] );
    }


    /**
     * Get all Favoreite Threads
     */

    public function myFavoritesShow() {
        $user = request( 'user' );
        $getUserInfo = User::where( 'username', $user )->first();
        if(!$getUserInfo){
            return abort(404);
        }
        $auth_user = auth()->user();
        $favoritesId = DB::table( 'favorites' )
            ->where( 'user_id', $getUserInfo->id )
            ->where( 'favorited_type', 'App\Thread' )
            ->get()
            ->pluck( 'favorited_id' )
            ->all();

        $threads = Thread::whereIn('id', $favoritesId);

        if($user != $auth_user->username || $auth_user->id != 1 ){
            $threads->where( 'anonymous', '=', 0 );
        }
        $this->filterThreads($threads);  
        $this->sortBy($threads);
        $totalRecords = $threads->count();

        
        $threads = $this->generateCurrentPageResults($threads, $this->perPage);        
        $threads = $this->convert_from_latin1_to_utf8_recursively($threads->toArray());
        $threads = $this->convertToObject($threads);

        return response()->json( [
            'threads' => $threads,
            'total_records' => $totalRecords,
        ] );
    }

    /***
     *
     * Get all Thread where current profile

     */

    public function myThreadsShow() {
        $user = request( 'user' );
        
        $auth_user = auth()->user();
        $getUserInfo = User::with( 'userprivacy' )->where( 'username', $user )->first();

        if(!$getUserInfo){
            return abort(404);
        }

        $threads = Thread::where('user_id', $getUserInfo->id);

        if($user != $auth_user->username || $auth_user->id != 1 ){
            $threads->where( 'anonymous', '=', 0 );
        }

        $this->filterThreads($threads);                    
        $this->sortBy($threads);
        $totalRecords = $threads->count();

        
        $threads = $this->generateCurrentPageResults($threads, $this->perPage);        
        $threads = $this->convert_from_latin1_to_utf8_recursively($threads->toArray());
        $threads = $this->convertToObject($threads);

        return response()->json( [
            'threads' => $threads,'per_page'  => $this->perPage,
            'total_records' => $totalRecords,
        ] );
    }

    /**
     * Get all like Threads
     */
    public function myLikesShow() {
        $user = request( 'user' );
        $getUserInfo = User::where( 'username', $user )->first();

        if(!$getUserInfo){
            return abort(404);
        }

        $likesId = DB::table( 'likes' )
            ->where( 'user_id', $getUserInfo->id )
            ->where( 'likeable_type', 'App\Thread' )
            ->get()
            ->pluck( 'likeable_id' )
            ->all();
                    
        $threads = Thread::whereIn( 'id', $likesId );
        $this->sortBy($threads);
        $totalRecords = $threads->count();

        
        $threads = $this->generateCurrentPageResults($threads, $this->perPage);        
        $threads = $this->convert_from_latin1_to_utf8_recursively($threads->toArray());
        $threads = $this->convertToObject($threads);

        return response()->json( [
            'threads' => $threads,
            'total_records' => $totalRecords,
        ] );
    }

    /**
     * Get all friend lists
     */

    public function friendList() {
        $user = request( 'user' );
        $userInfo = User::where( 'username', $user )->first();
        if(!$userInfo){
            return abort(404);
        }

        $friendLists = $userInfo->getFriends();

        $this->authorize( 'show', $userInfo );

        return \response()->json( ['friends' => $friendLists] );
    }

    /**
     * Check is friend with authenticated users
     */
    public function checkFriend( $friend, $privacy ) {
        $auth_user = auth()->user();

        if ( $friend->username != $auth_user->username ) {
            if ( $friend->userprivacy->{$privacy} == 1 ) {
                return false;
            } else if (
                $friend->userprivacy->{$privacy} == 2 && !$auth_user->isFriendWith( $friend ) ) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get lat/lng information with string
     */
    public function getGeocodeing( $address ) {
        $client = new \GuzzleHttp\Client();

        $geocoder = new Geocoder( $client );

        $geocoder->setApiKey( config( 'geocoder.key' ) );

        $geocoder->setCountry( config( 'geocoder.country', 'US' ) );

        return $geocoder->getCoordinatesForAddress( $address );
    }

    public function sortBy($threads){
        if(request('sort_by') && request('sort_by') !=''){
            $sort = request('sort_by');
            $valid_sort = ['visits','favorite_count'];
            if($sort == 'topRated'){
                $threads->orderByRaw('like_count - dislike_count DESC');
            }else if(in_array($sort, $valid_sort)){
                $threads->orderBy($sort, 'desc');
            }
        }else{
            $threads->orderByRaw('like_count - dislike_count DESC');
        }
    }
}
