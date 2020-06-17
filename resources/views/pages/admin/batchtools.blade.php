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

                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="70%">Description</th>
                                            <th width="30%">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                set age 13 : if thread title contains
                                            </td>
                                            <td  >
                                                <form action="{{ route('batchtools.setage.thirteen') }}" class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="title_13">
                                                    <div class="form-group form-group-sm {{ $errors->has('title_13') ? ' has-error' : '' }}" >
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter title text" name="title_13">
                                                            <span class="input-group-btn">
                                                            <button class="btn btn-primary btn-sm" type="submit">Set age=13+</button>
                                                            </span>
                                                        </div>
                                                        @if ($errors->has('title_13'))
                                                            <span class="help-block ">
                                                                <strong class="">{{ $errors->first('title_13') }}</strong>
                                                            </span>
                                                        @endif
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 13 : if thread body contains                                                
                                            </td>
                                            <td  >
                                                <form action="{{ route('batchtools.setage.thirteen') }}" class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="body_13">
                                                    <div class="form-group form-group-sm {{ $errors->has('body_13') ? ' has-error' : '' }}">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter body text" name="body_13">
                                                            <span class="input-group-btn">
                                                            <button class="btn btn-success btn-sm" type="submit">Set age=13+</button>
                                                            </span>
                                                        </div>
                                                        @if ($errors->has('body_13'))
                                                            <span class="help-block ">
                                                                <strong class="">{{ $errors->first('body_13') }}</strong>
                                                            </span>
                                                        @endif
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 13 : if thread has tag                                                
                                            </td>
                                            <td  >
                                                <form action="{{ route('batchtools.setage.thirteen') }}" class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="tag_13">
                                                    <div class="form-group form-group-sm {{ $errors->has('tag_13') ? ' has-error' : '' }}">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="tag_13">
                                                            <span class="input-group-btn">
                                                            <button class="btn btn-warning btn-sm" type="submit">Set age=13+</button>
                                                            </span>
                                                        </div>
                                                        @if ($errors->has('tag_13'))
                                                            <span class="help-block ">
                                                                <strong class="">{{ $errors->first('tag_13') }}</strong>
                                                            </span>
                                                        @endif
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="70%">Description</th>
                                            <th width="30%">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                set age 18 : if thread title contains
                                            </td>
                                            <td  >
                                            <form action="{{ route('batchtools.setage.eighteen') }}" class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="title_18">
                                                    <div class="form-group form-group-sm {{ $errors->has('title_18') ? ' has-error' : '' }}">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter title text" name="title_18">
                                                            <span class="input-group-btn">
                                                              <button class="btn btn-primary btn-sm" type="submit">Set age=18+</button>
                                                            </span>
                                                        </div>
                                                        @if ($errors->has('title_18'))
                                                            <span class="help-block ">
                                                                <strong class="">{{ $errors->first('title_18') }}</strong>
                                                            </span>
                                                        @endif
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 18 : if thread body contains                                                
                                            </td>
                                            <td  >
                                            <form action="{{ route('batchtools.setage.eighteen') }}" class="form-inline" method="POST">
                                                @csrf
                                                <input type="hidden" name="field" value="body_18">
                                                <div class="form-group form-group-sm {{ $errors->has('body_18') ? ' has-error' : '' }}">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Enter body text" name="body_18">
                                                        <span class="input-group-btn">
                                                          <button class="btn btn-success btn-sm" type="submit">Set age=18+</button>
                                                        </span>
                                                    </div>
                                                    @if ($errors->has('body_18'))
                                                        <span class="help-block ">
                                                            <strong class="">{{ $errors->first('body_18') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 18 : if thread has tag                                                
                                            </td>
                                            <td  >
                                            <form action="{{ route('batchtools.setage.eighteen') }}" class="form-inline" method="POST">
                                                @csrf
                                                <input type="hidden" name="field" value="tag_18">
                                                    <div class="form-group form-group-sm {{ $errors->has('tag_18') ? ' has-error' : '' }}">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="tag_18">
                                                            <span class="input-group-btn">
                                                              <button class="btn btn-warning btn-sm" type="submit">Set age=18+</button>
                                                            </span>
                                                          </div>
                                                          @if ($errors->has('tag_18'))
                                                            <span class="help-block ">
                                                                <strong class="">{{ $errors->first('tag_18') }}</strong>
                                                            </span>
                                                        @endif
                                                    </div>
                                                    
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="50%">Description</th>
                                            <th width="20%">Old Text</th>
                                            <th width="30%">New Text</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                thread body search & replace: every thread, in body replace
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.search.replace') }}" class="form-inline" method="POST">
                                                    <div class="col-md-5">

                                                        @csrf
                                                        <input type="hidden" name="field" value="replace_body">
                                                        <div class="form-group form-group-sm {{ $errors->has('replace_body_old') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter old text" name="replace_body_old">
                                                            @if ($errors->has('replace_body_old'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('replace_body_old') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7">

                                                        <div class="form-group form-group-sm {{ $errors->has('replace_body_new') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter new text" name="replace_body_new">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-primary btn-sm" type="submit">Replace</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('replace_body_new'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('replace_body_new') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                thread title search & replace: every thread, in title replace
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.search.replace') }}" class="form-inline" method="POST">
                                                    <div class="col-md-5">
                                                        @csrf
                                                        <input type="hidden" name="field" value="replace_title">
                                                        <div class="form-group form-group-sm {{ $errors->has('replace_title_old') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter old text" name="replace_title_old">
                                                            @if ($errors->has('replace_title_old'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('replace_title_old') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <div class="form-group form-group-sm {{ $errors->has('replace_title_new') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter new text" name="replace_title_new">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-success btn-sm" type="submit">Replace</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('replace_title_new'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('replace_title_new') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </form>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                                               


                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="40%">Description</th>
                                            <th width="30%">Value</th>
                                            <th width="30%">Tag Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                add tag: every thread, if body contains                                                 
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.add.tag') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">

                                                        @csrf
                                                        <input type="hidden" name="field" value="add_tag_body">
                                                        <div class="form-group form-group-sm {{ $errors->has('add_tag_body') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter body text" name="add_tag_body">
                                                            @if ($errors->has('add_tag_body'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('add_tag_body') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('add_tag_body_tag_name') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter tag name" name="add_tag_body_tag_name">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-primary btn-sm" type="submit">Add Tag</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('add_tag_body_tag_name'))
                                                                    <span class="help-block ">
                                                                        <strong class="">{{ $errors->first('add_tag_body_tag_name') }}</strong>
                                                                    </span>
                                                                @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                add tag: every thread, if title contains
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.add.tag') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <input type="hidden" name="field" value="add_tag_title">
                                                        <div class="form-group form-group-sm {{ $errors->has('add_tag_title') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter title text" name="add_tag_title">
                                                            @if ($errors->has('add_tag_title'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('add_tag_title') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('add_tag_title_tag_name') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter tag name" name="add_tag_title_tag_name">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-success btn-sm" type="submit">Add Tag</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('add_tag_title_tag_name'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('add_tag_title_tag_name') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                add tag: every thread with tag
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.add.tag') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">

                                                        @csrf
                                                        <input type="hidden" name="field" value="add_tag_with_tag">
                                                        <div class="form-group form-group-sm {{ $errors->has('add_tag_with_tag') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter old tag name" name="add_tag_with_tag">
                                                            @if ($errors->has('add_tag_with_tag'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('add_tag_with_tag') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-md-6">

                                                        <div class="form-group form-group-sm {{ $errors->has('add_tag_with_tag_tag_name') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter tag name" name="add_tag_with_tag_tag_name">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-warning btn-sm" type="submit">Add Tag</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('add_tag_with_tag_tag_name'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('add_tag_with_tag_tag_name') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                        
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                

                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="40%">Description</th>
                                            <th width="30%">Value</th>
                                            <th width="30%">Tag Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                rename tag: for tag                                                 
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.rename.tag') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <div class="form-group form-group-sm {{ $errors->has('old_tag_name') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter old name" name="old_tag_name">
                                                            @if ($errors->has('old_tag_name'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('old_tag_name') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('new_tag_name') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter new name" name="new_tag_name">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-primary btn-sm" type="submit">Rename Tag</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('new_tag_name'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('new_tag_name') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>                                        
                                    </tbody>
                                </table>


                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="65%">Description</th>
                                            <th width="35%">Tag Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                delete tag: for tag                                                 
                                            </td>
                                            <td >
                                                <form action="{{ route('batchtools.delete.tag') }}" class="form-inline" method="POST">
                                                    @csrf
                                                    <div class="form-group form-group-sm {{ $errors->has('delete_tag_name') ? ' has-error' : '' }}">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="delete_tag_name">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-danger btn-sm" type="submit">Delete Tag</button>
                                                            </span>
                                                        </div>
                                                        @if ($errors->has('delete_tag_name'))
                                                            <span class="help-block ">
                                                                <strong class="">{{ $errors->first('delete_tag_name') }}</strong>
                                                            </span>
                                                        @endif
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                               

                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="30%">Description</th>
                                            <th width="28%">Tag Name</th>
                                            <th width="42%">Emoji</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                add emoji: if thread has tag
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.add.emoji') }}" class="form-inline" method="POST">
                                                    @csrf
                                                    <div class="col-md-5">
                                                        <div class="form-group form-group-sm {{ $errors->has('add_emoji_tag_name') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="add_emoji_tag_name">
                                                            @if ($errors->has('add_emoji_tag_name'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('add_emoji_tag_name') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <div class="col-md-9">
                                                            <div class="form-group form-group-sm  {{ $errors->has('emoji_name') ? ' has-error' : '' }}">                                                        
                                                                <select name="emoji_name" id="emoji_name" class="form-control">
                                                                    <option value="">Select Emoji</option>
                                                                    @foreach($emojis as $emoji)
                                                                        <option value="{{ $emoji->id }}">{{ $emoji->name  }}</option>
                                                                    @endforeach
                                                                </select>
                                                                @if ($errors->has('emoji_name'))
                                                                    <span class="help-block ">
                                                                        <strong class="">{{ $errors->first('emoji_name') }}</strong>
                                                                    </span>
                                                                @endif
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group form-group-sm">
                                                                <button class="btn btn-primary btn-sm" type="submit">Add Emoji</button>                                          
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                               
                                
                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="40%">Description</th>
                                            <th width="30%">Value</th>
                                            <th width="30%">Famous</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                set famous: every thread, if body contains
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.set.famaus') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <input type="hidden" name="field" value="set_famous_body">
                                                        <div class="form-group form-group-sm {{ $errors->has('set_famous_body') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter body text" name="set_famous_body">
                                                            @if ($errors->has('set_famous_body'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('set_famous_body') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('set_famous_body_category') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <select name="set_famous_body_category" id="set_famous_body_category" class="form-control">
                                                                    <option value="">Select famous</option>
                                                                    <option value="C">Celebrities</option>
                                                                    <option value="N">Other notables</option>
                                                                    <option value="O">Other people</option>
                                                                </select>
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-primary btn-sm" type="submit">Set Famous</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('set_famous_body_category'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('set_famous_body_category') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>  
                                        <tr>
                                            <td>
                                                set famous: every thread, if title contains
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.set.famaus') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <input type="hidden" name="field" value="set_famous_title">
                                                        <div class="form-group form-group-sm {{ $errors->has('set_famous_title') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter title text" name="set_famous_title">
                                                            @if ($errors->has('set_famous_title'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('set_famous_title') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">

                                                        <div class="form-group form-group-sm {{ $errors->has('set_famous_title_category') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <select name="set_famous_title_category" id="set_famous_title_category" class="form-control">
                                                                    <option value="">Select famous</option>
                                                                    <option value="C">Celebrities</option>
                                                                    <option value="N">Other notables</option>
                                                                    <option value="O">Other people</option>
                                                                </select>
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-success btn-sm" type="submit">Set Famous</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('set_famous_title_category'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('set_famous_title_category') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>  
                                        <tr>
                                            <td>
                                                set famous: every thread, if thread has tag
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.set.famaus') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <input type="hidden" name="field" value="set_famous_tag">
                                                        <div class="form-group form-group-sm {{ $errors->has('set_famous_tag') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="set_famous_tag">
                                                            @if ($errors->has('set_famous_tag'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('set_famous_tag') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('set_famous_tag_category') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <select name="set_famous_tag_category" id="set_famous_tag_category" class="form-control">
                                                                    <option value="">Select famous</option>
                                                                    <option value="C">Celebrities</option>
                                                                    <option value="N">Other notables</option>
                                                                    <option value="O">Other people</option>
                                                                </select>
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-warning btn-sm" type="submit">Set Famous</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('set_famous_tag_category'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('set_famous_tag_category') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                            </td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                                
                                

                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="46%">Description</th>
                                            <th width="27%">Old Source</th>
                                            <th width="27%">New Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                source search & replace every thread, in source replace

                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.replace.source') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <div class="form-group form-group-sm {{ $errors->has('old_source') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Old source" name="old_source">
                                                            @if ($errors->has('old_source'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('old_source') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('new_source') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="New source" name="new_source">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-primary btn-sm" type="submit">Replace</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('new_source'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('new_source') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>                                                    
                                                </form>
                                            </td>
                                        </tr>                                         
                                    </tbody>
                                </table>
                                
                                
                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            <th width="48%">Description</th>
                                            <th width="25%">Value</th>
                                            <th width="27%">Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>assign items to specific user every thread, if body contains                                                
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.assign.user') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <input type="hidden" name="field" value="assign_user_body">
                                                        <div class="form-group form-group-sm {{ $errors->has('assign_user_body') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter body text" name="assign_user_body">
                                                            @if ($errors->has('assign_user_body'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('assign_user_body') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('assign_user_body_username') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter username" name="assign_user_body_username">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-primary btn-sm" type="submit">Assign user</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('assign_user_body_username'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('assign_user_body_username') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>assign items to specific user every thread, if title contains                                                
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.assign.user') }}" class="form-inline" method="POST">
                                                    <div class="col-md-6">
                                                        @csrf
                                                        <input type="hidden" name="field" value="assign_user_title">
                                                        <div class="form-group form-group-sm {{ $errors->has('assign_user_title') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter body text" name="assign_user_title">
                                                            @if ($errors->has('assign_user_title'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('assign_user_title') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('assign_user_title_username') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter username" name="assign_user_title_username">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-success btn-sm" type="submit">Assign user</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('assign_user_title_username'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('assign_user_title_username') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>                                                    
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>assign items to specific user every thread, if thread has tag                                                                                                
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.assign.user') }}" class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="assign_user_tag">
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('assign_user_tag') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="assign_user_tag">
                                                            @if ($errors->has('assign_user_tag'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('assign_user_tag') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group form-group-sm {{ $errors->has('assign_user_tag_username') ? ' has-error' : '' }}">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter username" name="assign_user_tag_username">
                                                                <span class="input-group-btn ">
                                                                  <button class="btn btn-warning btn-sm" type="submit">Assign user</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('assign_user_tag_username'))
                                                                <span class="help-block ">
                                                                    {{ $errors->first('assign_user_tag_username') }}
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                            </td>
                                        </tr>                                          
                                    </tbody>
                                </table>
                                

                                {{--
                                    Need check
                                    <hr>

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
                                <hr>  --}}

                               
                                






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
    .form-inline .col-md-3, .form-inline .col-md-4, .form-inline .col-md-5, .form-inline .col-md-6, .form-inline .col-md-7, .form-inline .col-md-8, .form-inline .col-md-9{
        padding: 0 !important;
    }

    .help-block{
        margin: 0 !important;
    }

    #emoji_name.form-control{
        width: 100%;
    }
    .emoji_select {
        width: 90%;
    }
    .form-group.form-group-sm{
        width: 98%;
    }
    .form-group.form-group-sm .form-control{
        width: 100%;
    }
    </style>
@endsection