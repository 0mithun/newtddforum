@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
    @endphp
    {{-- <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-10">
                                <h3>{{ strtoupper($user->name) }}</h3>
                            </div>
                            <div class="col-md-2">
                                <img src="{{ asset($user->avatar_path)  }}" class="img-circle" alt="Cinque Terre" style="width:60px; height: auto;">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="list-group">

                                    @foreach($friendLists as $friend)

                                    

                                        <a class="list-group-item"  href="{{ route('profile', $user->username)  }}">
                                                <img src="{{ $friend->profileAvatarPath }}" alt="" width="30px">  {{ $friend->name }}
                                        </a>

                                    @endforeach
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="panel">
                                    <div class="panel-body">
                                        <ul class="chat-list">
                                            <li class="receiver">
                                                <span class="message">How are you ?</span>
                                            </li>
                                            <li class="sender">
                                                <span class="message">I'm fine you ?</span>
                                            </li>
                                            <li class="receiver">
                                                <span class="message">
                                                    ok see you again
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="messageBox">
                                            <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
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
    </div> --}}
    
<chat-message :authuser="{{ $user }}"></chat-message>
@endsection

@section('head')

<style>

        
</style>
    
@endsection