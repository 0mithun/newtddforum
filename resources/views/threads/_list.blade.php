@php
    $restriction = 0;
    $userId = null;
    if(auth()->check()){
        $user = auth()->user();
        $userId = $user->id;
        $restriction = $user->userprivacy->show_restricted;
    }    

@endphp
@forelse ($threads as $thread)
    @include('threads._single')
@empty
    <p>There are no relevant results at this time.</p>
@endforelse
