<div class="col-md-3 top-30">
    @if($profileUser->username != $user->username)
        <add-friend :recipient="{{ $profileUser }}"></add-friend>
    @else 
        <a class="btn btn-primary btn-sm pull-right" href="{{ route('profile.user.edit', $user->username) }}" >Edit My Information</a>
    @endif
</div>