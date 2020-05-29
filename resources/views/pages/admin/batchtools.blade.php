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
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Set famous = true : if thread (title, body, or tag) contains XXX, set famous = true</h5>
                                    </div>
                                    <div class="col-md-3">
                                    <form action="{{ route('batchtools.set.famaus') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Set Famous</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Add emoji : if thread has tag XXX, add emoji </h5>
                                    </div>


                                    <div class="col-md-3">
                                        <div class="modal fade" id="addEmojiModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                            <div class="modal-dialog" role="document">
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                  <h4 class="modal-title" id="myModalLabel">Ban Single Users</h4>
                                                </div>
                                                <div class="modal-body">
                                                <form action="{{ route('batchtools.add.emoji') }}" class="form-horizontal" method="POST">
                                                    @csrf
                                                      <div class="form-group">
                                                          <label for="emoji" class="control-label col-md-3">Emoji:</label>
                                                          <div class="col-md-9">
                                                             <select name="emoji" id="emoji" class="form-control">
                                                                 <option value="">Select Emoji</option>

                                                                 @foreach ($emojis as $emoji)
                                                                    <option value="{{ $emoji->id }}" >                                                                    
                                                                        {{ $emoji->name }}
                                                                    </option>
                                                                 @endforeach
                                                                 
                                                             </select>
                                                          </div>
                                                      </div>

                                                      <div class="form-group">
                                                          <div class="col-md-9 col-md-offset-3">
                                                            <button type="submit" class="btn btn-primary">Add Emoji</button>
                                                          </div>
                                                      </div>
                                                  </form>
                                                </div>
                                               
                                              </div>
                                            </div>
                                          </div>

                                        <button class="btn btn-primary btn-sm" type="button"  data-target="#addEmojiModal" data-toggle="modal">Add Emoji</button>
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
        .funny{
      background-image :url(/images/emojis/funny.png);
    }
    .sad{
      background-image :url(/images/emojis/sad.png);
    }
    .strange{
      background-image :url(/images/emojis/strange.png);
    }
    .inspiring{
      background-image :url(/images/emojis/inspiring.png);
    }
    .amazing{
      background-image :url(/images/emojis/amazing.png);
    }
    .dumb{
      background-image :url(/images/emojis/dumb1.png);
    }
    .famous{
      background-image :url(/images/emojis/famous.png);
    }
    </style>
@endsection