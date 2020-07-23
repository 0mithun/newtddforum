@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();

        // $profileUserPrivacy = $profileUser->userprivacy;
        // dd($profileUserPrivacy);
    @endphp

    <profile-page 
        :profile_user="{{ json_encode($profileUser) }}" 
        :profile_user_privacy="{{ $profileUserPrivacy }}"
        :is_owner="{{ json_encode($is_owner) }}"
        :is_friend="{{ json_encode($is_friend) }}"
></profile-page>
 