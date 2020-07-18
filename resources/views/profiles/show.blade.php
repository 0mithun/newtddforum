@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();

        $profileUserPrivacy = $profileUser->userprivacy;
    @endphp

    <profile-page></profile-page>
    <!-- <div class="container">
        <div class="row top-margin">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            @include('profiles._header')
                            @include('profiles._friendstatus')
                        </div>

                        @if( ($user->id == $profileUser->id) || ($profileUserPrivacy->see_my_profiles == 3) ||  ($profileUserPrivacy->see_my_profiles == 2 && $is_friend))
                            <hr>
                            <div class="row">
                                <div class="col-md-3">
                                    @include('profiles.sidebarmenu')
                                </div>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h4>Joined {{ $profileUser->created_at->diffForHumans()  }}
                                                {{ ($profileUser->city !='' || $profileUser->country !='')? 'From:' : '' }}
                                                {{ $profileUser->city !=''? $profileUser->city.", ": ''  }} {{ $user->country  }}
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3>About</h3>
                                            {{ $profileUser->about }}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <profile-map lat="{{ $profileUser->lat }}" lng={{ $profileUser->lng}}></profile-map>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        @else
                            @include('profiles._alert')
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div> -->
@endsection

@section('head')
    <style>
        .top-30{
            margin-top: 30px;
        }
    </style>
@endsection