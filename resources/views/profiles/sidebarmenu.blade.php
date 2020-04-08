<div class="list-group">

@php 
    $routeName = \Request::route()->getName();

    //dd($routeName)
    
        
@endphp


{{-- Other People Profile --}}
@if($profileUser->username != $user->username)

    <a class="list-group-item @if($routeName == 'profile') active @endif"  href="{{ route('profile', $profileUser->username)  }}">Profile</a>

    @if($profileUserPrivacy->see_my_friends ==3)
        <a class="list-group-item  @if($routeName == 'profile.friendlist') active @endif"  href="{{ route('profile.friendlist', $profileUser->username)  }}">Friends</a>

    @elseif($profileUserPrivacy->see_my_friends == 2 && $is_friend)
        <a class="list-group-item @if($routeName == 'profile.friendlist') active @endif"  href="{{ route('profile.friendlist', $profileUser->username)  }}">Friends</a>
    @endif
    

    {{-- <a class="list-group-item "  href="{{ route('profile.friendlist', $profileUser->username)  }}">Friends</a> --}}

    @if($profileUserPrivacy->see_my_threads==3)
        <a class="list-group-item @if($routeName == 'profile.threads') active @endif" href="{{ route('profile.threads', $profileUser->username)  }}">Threads</a>
    @elseif($profileUserPrivacy->see_my_threads == 2 && $is_friend)
        <a class="list-group-item @if($routeName == 'profile.threads') active @endif" href="{{ route('profile.threads', $profileUser->username)  }}">Threads</a>
    @endif
    {{-- <a class="list-group-item" href="{{ route('profile.threads', $profileUser->username)  }}">Threads</a> --}}

    

    @if($profileUserPrivacy->see_my_favorites==3)
        <a class="list-group-item @if($routeName == 'profile.favorites') active @endif" href="{{ route('profile.favorites', $profileUser->username)  }}">Favorites</a>
    @elseif($profileUserPrivacy->see_my_favorites == 2 && $is_friend)
        <a class="list-group-item @if($routeName == 'profile.favorites') active @endif" href="{{ route('profile.favorites', $profileUser->username)  }}">Favorites</a>
    @endif
   
    


@else 
    {{-- My profile Menu --}}
    <a class="list-group-item @if($routeName == 'profile') active @endif"  href="{{ route('profile', $user->username)  }}">Profile</a>
    <a class="list-group-item @if($routeName == 'profile.friendlist') active @endif"  href="{{ route('profile.friendlist', $user->username)  }}">Friends</a>
    <a class="list-group-item @if($routeName == 'profile.friendrequest') active @endif"  href="{{ route('profile.friendrequest', $user->username)  }}">Friend Request</a>
    <a class="list-group-item @if($routeName == 'profile.blockfriends') active @endif"  href="{{ route('profile.blockfriends', $user->username)  }}">Bloking</a>

    <a class="list-group-item @if($routeName == 'profile.avatar.page') active @endif" href="{{ route('profile.avatar.page', $user->username)  }}">Avatar</a>
    <a class="list-group-item @if($routeName == 'profile.subscriptions') active @endif" href="{{ route('profile.subscriptions', $user->username)  }}">My Subscriptions </a>
    <a class="list-group-item @if($routeName == 'profile.favorites') active @endif" href="{{ route('profile.favorites', $user->username)  }}">My Favorites</a>
    <a class="list-group-item @if($routeName == 'profile.threads') active @endif" href="{{ route('profile.threads', $user->username)  }}">My Threads</a>
    <a class="list-group-item @if($routeName == 'profile.likes') active @endif" href="{{ route('profile.likes', $user->username)  }}">My Likes</a>
    <a class="list-group-item @if($routeName == 'user.edit.password') active @endif" href="{{ route('user.edit.password')  }}">Change Password</a>
@endif




{{-- Admiin Route --}}
@if($user->isAdmin)

{{--                                    For Admin--}}
<a class="list-group-item @if($routeName == 'admin.setesettings') active @endif"  href="{{ route('admin.setesettings') }}">Site Settings</a>
<a class="list-group-item @if($routeName == 'admin.tag') active @endif"  href="{{ route('admin.tag') }}">Tags</a>
<a class="list-group-item @if($routeName == 'admin.privacypolicy') active @endif"  href="{{ route('admin.privacypolicy') }}">Privacy</a>
<a class="list-group-item @if($routeName == 'admin.tos') active @endif"  href="{{ route('admin.tos') }}">Terms</a>
<a class="list-group-item @if($routeName == 'admin.faq') active @endif"  href="{{ route('admin.faq') }}">faq</a>
{{--                                    --}}
@endif

</div>