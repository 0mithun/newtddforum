<div class="list-group">

@php 
    $routeName = \Request::route()->getName();
  
@endphp


{{-- My profile Menu --}}
<a class="list-group-item @if($routeName == 'profile.user.edit') active @endif"  href="{{ route('profile.user.edit', $user->username)  }}">Profile</a>

<a class="list-group-item @if($routeName == 'profile.avatar.page') active @endif" href="{{ route('profile.avatar.page', $user->username)  }}">Avatar</a>
<a class="list-group-item @if($routeName == 'user.edit.password') active @endif" href="{{ route('user.edit.password')  }}">Change Password</a>





{{-- Admiin Route --}}
@if($user->isAdmin && $profileUser->id == $user->id)

{{--                                    For Admin--}}
<a class="list-group-item @if($routeName == 'admin.batchtools') active @endif"  href="{{ route('admin.batchtools') }}">Batch Tools</a>
<a class="list-group-item @if($routeName == 'admin.manage.user') active @endif"  href="{{ route('admin.manage.user') }}">Manage Users</a>
<a class="list-group-item @if($routeName == 'admin.setesettings') active @endif"  href="{{ route('admin.setesettings') }}">Site Settings</a>
<a class="list-group-item @if($routeName == 'admin.tag') active @endif"  href="{{ route('admin.tag') }}">Tags</a>
<a class="list-group-item @if($routeName == 'admin.privacypolicy') active @endif"  href="{{ route('admin.privacypolicy') }}">Privacy</a>
<a class="list-group-item @if($routeName == 'admin.tos') active @endif"  href="{{ route('admin.tos') }}">Terms</a>
<a class="list-group-item @if($routeName == 'admin.faq') active @endif"  href="{{ route('admin.faq') }}">faq</a>
{{--                                    --}}
@endif

</div>