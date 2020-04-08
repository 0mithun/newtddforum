
@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
    @endphp
    <div class="container">
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
                                            <h4>Friend Request</h4>
                                        </div>
                                        <div class="panel-body">
                                            <table class="table table-responsive table-hover table-bordered table-condensed">
                                                <thead>
                                                    <tr>
                                                        <th class="td" width="70%">Avatar</th>
                                                        <th class="td" width="70%">Name</th>
                                                        <th class="td" colspan="2">
                                                          Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                @forelse($requestFriendLists as $requestFriendList)
                                                    
                                                    <tr>
                                                        <td><img src="{{ asset($requestFriendList->avatar_path) }}" alt="" width="30px"></td>
                                                        <td>{{ $requestFriendList->name }}</td>
                                                        <td>
                                                            <button class="btn btn-default">
                                                                <a href="">Show Profile</a>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            
                                                            <form action="{{ route('profile.acceptfriendrequest', $user->username) }}" method="post">

                                                                @csrf

                                                                <input type="hidden" name="sender" value="{{ $requestFriendList->id  }}">

                                                                <input type="submit" value="Accept" class="btn btn-primary">

                                                            </form>

                                                           <!-- <a href="{{ route('profile.acceptfriendrequest', $user->username) }}"> Accept</a> -->


                                                        </td>
                                                    </tr>
                                                </tbody>
                                                @empty
                                                    <tr>
                                                        <td colspan="3">
                                                            <div class="alert alert-warning">
                                                                No Friends Request
                                                            </div>
                                                        </td>
                                                    </tr>
                                                @endforelse
                                            </table>

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