
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
                                <table class="table table-responsive table-hover table-bordered table-condensed ">
                                    <thead>
                                    <tr>
                                        <th class="td" width="80%">Thread Title</th>
                                        <th class="td" width="5%" style="text-align: center">Type</th>
                                        <th class="td" >
                                            Action
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    @forelse($likes as $like)
                                        @php
                                            $thread = \App\Thread::where('id', $like->likeable_id)->first();
                                        @endphp
                                        <tr>
                                            <td>{{ $thread->title }}</td>
                                            <td style="text-align: center">
                                                @if($like->up ==1)
                                                    <span class="glyphicon glyphicon-thumbs-up blue-icon"></span>
                                                    @endif
                                                @if($like->down ==1)
                                                    <span class="glyphicon glyphicon-thumbs-down"></span>
                                                    @endif
                                            </td>
                                            <td>
                                                <button class="btn btn-default btn-sm">
                                                    <a href="{{ url($thread->path()) }}">Show Thread</a>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    @empty
                                        <tr>
                                            <td colspan="3">
                                                <div class="alert alert-warning">
                                                    You was not like any Thread
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