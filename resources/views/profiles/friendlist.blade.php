
@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
        $profileUserPrivacy = $profileUser->userprivacy;
    @endphp
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            @include('profiles._header')
                            @include('profiles._friendstatus')
                        </div>
                        <hr>
                        <div class="row">                                
                            <div class="col-md-3">
                                @include('profiles.sidebarmenu')
                            </div>

                            <div class="col-md-9">
                                <table class="table table-responsive table-hover table-bordered table-condensed">
                                    <thead>
                                        <tr>
                                            <th class="td" width="10%">
                                                Avatar
                                            </th>
                                            <th class="td" width="70%">Name</th>
                                            <th class="td" colspan="3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @forelse($friendLists as $friendList)
                                        
                                        @if($friendList->username != $user->username )
                                        <tr>
                                            <td>
                                            <img src="{{ asset($friendList->avatar_path) }}" alt="" width="30px">
                                            </td>
                                            <td>{{ $friendList->name }}</td>

                                            <td>
                                                <button class="btn btn-default btn-sm">
                                                    <a href="{{ route('profile', $friendList->username)  }}">Show Profile</a>
                                                </button>
                                            </td>

                                            @if( $user->username == $userInfo->username)
                                            <td>
                                                <form action="{{ route('profile.friend.block', $user->username) }}" method="post">
                                                    @csrf

                                                    <input type="hidden" name="friend" value="{{ $friendList->id   }}">
                                                    <input type="submit" value="Block" class="btn btn-info btn-sm">
                                                </form>
                                            </td>

                                            <td>
                                                <form action="{{ route('friend.unfriend') }}" method="post">
                                                    @csrf

                                                    <input type="hidden" name="friend" value="{{ $friendList->id   }}">
                                                    <input type="submit" value="Unfriend" class="btn btn-danger btn-sm">
                                                </form>
                                            </td>
                                            @endif
                                        </tr>
                                        
                                        @endif

                                    </tbody>
                                    @empty
                                        <tr>
                                            <td colspan="3">
                                                <div class="alert alert-warning">
                                                    You are don't have any Friends
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
@endsection

@section('head')
    <style>
        .alert{
            margin-bottom: 0px;
        }
    </style>
@endsection