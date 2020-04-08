@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
       
        // $profileUser 
        $profileUserPrivacy = $profileUser->userprivacy;
    @endphp
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-10">
                                <h3>{{ strtoupper($profileUser->name) }}</h3>
                            </div>
                            <div class="col-md-2">
                                <img src="{{ asset($profileUser->avatar_path)  }}" class="img-circle" alt="Cinque Terre" style="width:60px; height: auto;">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="list-group">

                                    @if($profileUser->username != $user->username)
                                    @php    
                                    //dd($is_friend);

                                    @endphp
                                        <a class="list-group-item active"  href="{{ route('profile', $profileUser->username)  }}">Profile</a>

                                        @if($profileUserPrivacy->see_my_friends ==3)
                                            <a class="list-group-item "  href="{{ route('profile.friendlist', $profileUser->username)  }}">Friends</a>

                                        @elseif($profileUserPrivacy->see_my_friends == 2 && $is_friend)
                                            <a class="list-group-item "  href="{{ route('profile.friendlist', $profileUser->username)  }}">Friends</a>
                                        @endif
                                        

                                        {{-- <a class="list-group-item "  href="{{ route('profile.friendlist', $profileUser->username)  }}">Friends</a> --}}

                                        @if($profileUserPrivacy->see_my_threads==3)
                                            <a class="list-group-item" href="{{ route('profile.threads', $profileUser->username)  }}">Threads</a>
                                        @elseif($profileUserPrivacy->see_my_threads == 2 && $is_friend)
                                            <a class="list-group-item" href="{{ route('profile.threads', $profileUser->username)  }}">Threads</a>
                                        @endif
                                        {{-- <a class="list-group-item" href="{{ route('profile.threads', $profileUser->username)  }}">Threads</a> --}}

                                        

                                        @if($profileUserPrivacy->see_my_favorites==3)
                                            <a class="list-group-item" href="{{ route('profile.favorites', $profileUser->username)  }}">Favorites</a>
                                        @elseif($profileUserPrivacy->see_my_favorites == 2 && $is_friend)
                                            <a class="list-group-item" href="{{ route('profile.favorites', $profileUser->username)  }}">Favorites</a>
                                        @endif
                                        

                                    @else 

                                    
                                        <a class="list-group-item active"  href="{{ route('profile', $user->username)  }}">Profile</a>
                                        <a class="list-group-item "  href="{{ route('profile.friendlist', $user->username)  }}">Friends</a>
                                        <a class="list-group-item "  href="{{ route('profile.friendrequest', $user->username)  }}">Friend Request</a>
                                        <a class="list-group-item  "  href="{{ route('profile.blockfriends', $user->username)  }}">Bloking</a>

                                        <a class="list-group-item " href="{{ route('profile.avatar.page', $user->username)  }}">Avatar</a>
                                        <a class="list-group-item" href="{{ route('profile.subscriptions', $user->username)  }}">My Subscriptions </a>
                                        <a class="list-group-item" href="{{ route('profile.favorites', $user->username)  }}">My Favorites</a>
                                        <a class="list-group-item" href="{{ route('profile.threads', $user->username)  }}">My Threads</a>
                                        <a class="list-group-item" href="{{ route('profile.likes', $user->username)  }}">My Likes</a>
                                        <a class="list-group-item" href="{{ route('user.edit.password')  }}">Change Password</a>
                                    @endif
                                @if($user->isAdmin)
{{--                                    For Admin--}}
                                        <a class="list-group-item"  href="{{ route('admin.setesettings') }}">Site Settings</a>
                                    <a class="list-group-item"  href="{{ route('admin.tag') }}">Tags</a>
                                    <a class="list-group-item"  href="{{ route('admin.privacypolicy') }}">Privacy</a>
                                    <a class="list-group-item"  href="{{ route('admin.tos') }}">Terms</a>
                                    <a class="list-group-item"  href="{{ route('admin.faq') }}">faq</a>
{{--                                    --}}
                                @endif

                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="panel">
                                    <div class="panel-heading">

                                        @if(session()->has('message'))
                                            <div class="row">
                                                <div class="alert alert-success alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    <strong>{{ session('message')  }}</strong>
                                                </div>
                                            </div>
                                        @endif
                                        <div class="row">
                                            <div class="col-md-8">
                                                <h4>Joined {{ $profileUser->created_at->diffForHumans()  }}
                                                    {{ ($profileUser->city !='' || $profileUser->country !='')? 'From:' : '' }}
                                                     {{ $profileUser->city !=''? $profileUser->city.", ": ''  }} {{ $user->country  }}
                                                </h4>
                                            </div>
                                            <div class="col-md-4">
                                                {{-- <a class="btn btn-primary" href="{{ route('profile.user.edit', $user->username) }}" >Edit My Information</a> --}}
                                                @if($profileUser->username != $user->username)
                                                    <add-friend :recipient="{{ $profileUser }}"></add-friend>
                                                @endif
                                            </div>
                                        </div>

                                    </div>
                                    <div class="panel-body">
                                        <h4>About Me</h4>
                                        {{ $profileUser->about }}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
