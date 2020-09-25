@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-8">
                {{-- @include ('threads._list') --}}
                @forelse ($threads as $thread)
                
                    <single-thread :thread="{{ $thread }}"></single-thread>
                @empty
                    <p>There are no relevant results at this time.</p>
                @endforelse

                @include('threads._pagination')
                {{-- {{ $threads->render() }} --}}
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
                <trending-thread></trending-thread>
{{-- 

                @if (count($trending))
                        @php
                            $auth_user = null;
                            if(auth()->check()){
                                $auth_user = auth()->user();
                            }
                        @endphp
                            @if($auth_user == null)
                                @if($thread->age_restriction == 0)
                                    <trending-thread></trending-thread>
                                @endif
                            @else 
                                @if($thread->age_restriction == 0)
                                <trending-thread></trending-thread>

                                @elseif($auth_user->id ==1)
                                <trending-thread></trending-thread>

                                @elseif($thread->user_id == $auth_user->id)
                                <trending-thread></trending-thread>

                                @elseif($auth_user->userprivacy->restricted_18==1)
                                <trending-thread></trending-thread>

                                @elseif($auth_user->userprivacy->restricted_13==1 && $thread->age_restriction==13)
                                    <trending-thread></trending-thread>
                                @endif
                            @endif
                @endif --}}
               
            </div>
        </div>
    </div>
@endsection
