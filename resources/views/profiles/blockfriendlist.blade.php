
@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
        $profileUser = $user;
    @endphp
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            @include('profiles._header')
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
                                            <th class="td" colspan="2">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @forelse($blockFriendLists as $friendList)                                                    
                                        <tr>
                                            <td>
                                                <img src="{{ asset($friendList->avatar_path) }}" alt="" width="30px">
                                            </td>
                                            <td>{{ $friendList->name }}</td>
                                            <td>
                                                <form action="{{ route('profile.unblockfriends', $user->username) }}" method="post">
                                                    @csrf

                                                    <input type="hidden" name="friend" value="{{ $friendList->id   }}">
                                                    <input type="submit" value="Unblock" class="btn btn-danger btn-sm">
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                    @empty
                                        <tr>
                                            <td colspan="3">
                                                <div class="alert alert-warning">
                                                    No Blocking
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