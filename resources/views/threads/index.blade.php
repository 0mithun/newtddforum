@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-8">
                @include ('threads._list')

                {{ $threads->render() }}
            </div>

            <div class="col-md-4">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="social-follow-btn">
                            <a href="#" class="follow-item">
                                <img class="follow-item-icon" src="{{ asset('images/social/facebook.png') }}" alt="">
                            </a>
                            <a href="#" class="follow-item">
                                <img class="follow-item-icon" src="{{ asset('images/social/twitter.png') }}" alt="">
                            </a>
                            <a href="#" class="follow-item">
                                <img class="follow-item-icon" src="{{ asset('images/social/instagram.png') }}" alt="">
                            </a>
                        </div>
                        <h3 class="follow-on-title">Follow Us On</h3>
                    </div>
                </div>
                @if (count($trending))
                        @php
                            $auth_user = null;
                            if(auth()->check()){
                                $auth_user = auth()->user();
                            }
                        @endphp
                        @foreach ($trending as $thread)
                            @if($auth_user == null)
                                @if($thread->age_restriction == 0)
                                    @include('threads._trendingitem')
                                @endif
                            @else 
                                @if($thread->age_restriction == 0)
                                    @include('threads._trendingitem')
                                @elseif($auth_user->id ==1)
                                     @include('threads._trendingitem')
                                @elseif($thread->user_id == $auth_user->id)
                                    @include('threads._trendingitem')
                                @elseif($auth_user->userprivacy->restricted_18==1)
                                    @include('threads._trendingitem')
                                @elseif($auth_user->userprivacy->restricted_13==1 && $thread->age_restriction==13)
                                    @include('threads._trendingitem')                                  
                                @endif
                            @endif
                        @endforeach
                @endif
               
            </div>
        </div>
    </div>
@endsection
