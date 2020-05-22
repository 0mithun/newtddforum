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
                                
                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Delete thread: if thread (title or body) contains XXX, delete thread</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.delete.thread') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Delete Thread</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Set age 13: if thread (title, body, or tag) contains XXX, set age=13+</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.setage.thirteen') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Set age 13</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Set age 18: if thread (title, body, or tag) contains XXX, set age=18+</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.setage.eighteen') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Set age 18</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Thread search & replace: every place where any thread (any title or body) contains XXX, replace with YYY</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.search.replace') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Search & replace</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Add tag: if thread (title, body, or tag) contains XXX, add tag YYY</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.add.tag') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Add tag</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 
                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Rename tag: rename tag XXX to YYY</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.rename.tag') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Rename tag</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Delete tag: delete tag XXX</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.delete.tag') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Delete tag</button>
                                        </form>
                                        
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

@section('head')
    <style>
        hr{
            margin-top:10px;
            margin-bottom:10px;
        }
        h5{
            font-size: 15px;
        }
    </style>
@endsection