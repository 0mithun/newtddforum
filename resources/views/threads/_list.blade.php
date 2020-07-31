@php
    $restriction = 0;
    $userId = null;
    if(auth()->check()){
        $user = auth()->user();
        $userId = $user->id;
        $restriction = $user->userprivacy->show_restricted;
    }    

@endphp

