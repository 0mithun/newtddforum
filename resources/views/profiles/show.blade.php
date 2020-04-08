@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
       
        // $profileUser 
        $profileUserPrivacy = $profileUser->userprivacy;
    @endphp
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-10">
                                <h3>{{ strtoupper($profileUser->name) }}</h3>
                            </div>
                            <div class="col-md-2">
                                <img src="{{ asset($profileUser->avatar_path)  }}" class="img-circle" alt="Cinque Terre" style="width:60px; height: auto;">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-3">

                            @include('profiles.sidebarmenu')

                            </div>
                            <div class="col-md-9">
                                <div class="panel">
                                    <div class="panel-heading">

                                        @if(session()->has('message'))
                                            <div class="row">
                                                <div class="alert alert-success alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    <strong>{{ session('message')  }}</strong>
                                                </div>
                                            </div>
                                        @endif
                                        <div class="row">
                                            <div class="col-md-8">
                                                <h4>Joined {{ $profileUser->created_at->diffForHumans()  }}
                                                    {{ ($profileUser->city !='' || $profileUser->country !='')? 'From:' : '' }}
                                                     {{ $profileUser->city !=''? $profileUser->city.", ": ''  }} {{ $user->country  }}
                                                </h4>
                                            </div>
                                            <div class="col-md-4">
                                                
                                                @if($profileUser->username != $user->username)
                                                    <add-friend :recipient="{{ $profileUser }}"></add-friend>
                                                @else 
                                                    <a class="btn btn-primary btn-sm pull-right" href="{{ route('profile.user.edit', $user->username) }}" >Edit My Information</a>
                                                @endif
                                            </div>
                                        </div>

                                    </div>
                                    <div class="panel-body">
                                        <h4>About</h4>
                                        {{ $profileUser->about }}

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
@endsection
