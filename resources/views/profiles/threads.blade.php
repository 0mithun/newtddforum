
@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
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
                                            <h4>My Threads</h4>
                                        </div>
                                        <div class="panel-body">
                                            <table class="table table-responsive table-hover table-bordered table-condensed">
                                                <thead>
                                                <tr>
                                                    <th class="td" width="85%">Thread Title</th>
                                                    <th class="td" colspan="2">
                                                        Action
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                @forelse($threads as $thread)
                                                    <tr>
                                                        <td>{{ $thread->title }}</td>
                                                        <td>
                                                            <button class="btn btn-default">
                                                                <a href="{{ url($thread->path()) }}">Show Thread</a>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                @empty
                                                    <tr>
                                                        <td colspan="2">
                                                            <div class="alert alert-warning">
                                                                You are not created any Thread
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