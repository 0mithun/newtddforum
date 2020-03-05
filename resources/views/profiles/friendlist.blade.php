
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
                                    <div class="list-group">
                                        <a class="list-group-item "  href="{{ route('profile', $user->username)  }}">Profile</a>
                                              
                                    <a class="list-group-item active"  href="{{ route('profile.friendlist', $user->username)  }}">Friends</a>
                                    <a class="list-group-item  "  href="{{ route('profile.friendrequest', $user->username)  }}">Friend Request</a>

                                    <a class="list-group-item  "  href="{{ route('profile.blockfriends', $user->username)  }}">Bloking</a>

                                        @if($user->isAdmin)
                                            {{--                                    For Admin--}}
                                            <a class="list-group-item"  href="{{ route('admin.setesettings') }}">Site Settings</a>
                                            <a class="list-group-item"  href="{{ route('admin.tag') }}">Tags</a>
                                            <a class="list-group-item"  href="{{ route('admin.privacypolicy') }}">Privacy</a>
                                            <a class="list-group-item"  href="{{ route('admin.tos') }}">Terms</a>
                                            <a class="list-group-item"  href="{{ route('admin.faq') }}">faq</a>
                                            {{--                                    --}}
                                        @endif


                                        <a class="list-group-item " href="{{ route('profile.avatar.page',$user->username)  }}">Avatar</a>
                                        <a class="list-group-item " href="{{ route('profile.subscriptions', $user->username)  }}">My Subscriptions </a>
                                        <a class="list-group-item" href="{{ route('profile.favorites', $user->username)  }}">My Favorites</a>
                                        <a class="list-group-item" href="{{ route('profile.threads', $user->username)  }}">My Threads</a>
                                        <a class="list-group-item" href="{{ route('profile.likes', $user->username)  }}">My Likes</a>
                                        <a class="list-group-item " href="{{ route('user.edit.password')  }}">Change Password</a>
                                    </div>
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
                                            <h4>My Friends</h4>
                                        </div>
                                        <div class="panel-body">
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
                                                    
                                                    <tr>
                                                        <td>
                                                        <img src="{{ asset($friendList->avatar_path) }}" alt="" width="30px">
                                                        </td>
                                                        <td>{{ $friendList->name }}</td>

                                                        <td>
                                                            <button class="btn btn-default btn-sm">
                                                                <a href="">Show Profile</a>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            

                                                            <form action="{{ route('profile.friend.block', $user->username) }}" method="post">
                                                                @csrf

                                                                <input type="hidden" name="friend" value="{{ $friendList->id   }}">
                                                                <input type="submit" value="Block" class="btn btn-info btn-sm">
                                                            </form>
                                                        </td>

                                                        <td>
                                                            <form action="{{ route('profile.unfriend', $user->username) }}" method="post">
                                                                @csrf

                                                                <input type="hidden" name="friend" value="{{ $friendList->id   }}">
                                                                <input type="submit" value="Unfriend" class="btn btn-danger btn-sm">
                                                            </form>
                                                        </td>
                                                    </tr>
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
            </div>
        </div>
    </div>
@endsection