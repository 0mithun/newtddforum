
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
                                                    <button class="btn btn-default btn-sm">
                                                        <a href="{{ url($thread->path()) }}">Show Thread</a>
                                                    </button>
                                                </td>
                                            </tr>
                                        
                                        @empty
                                            <tr>
                                                <td colspan="2">
                                                    <div class="alert alert-warning">
                                                        You are not created any Thread
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforelse
                                    </tbody>
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