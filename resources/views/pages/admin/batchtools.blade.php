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
                                            <th width="70%">Title</th>
                                            <th width="30%">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                set age 13 : if thread title contains
                                            </td>
                                            <td  >
                                                <form action="{{ route('batchtools.setage.thirteen') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter title text" name="thread_title_contains">
                                                            <span class="input-group-btn">
                                                            <button class="btn btn-primary btn-sm" type="button">Set age=13+</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 13 : if thread body contains                                                
                                            </td>
                                            <td  >
                                                <form action="{{ route('batchtools.setage.thirteen') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter body text" name="thread_body_contains">
                                                            <span class="input-group-btn">
                                                            <button class="btn btn-success btn-sm" type="button">Set age=13+</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 13 : if thread has tag                                                
                                            </td>
                                            <td  >
                                                <form action="{{ route('batchtools.setage.thirteen') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="thread_has_tag">
                                                            <span class="input-group-btn">
                                                            <button class="btn btn-warning btn-sm" type="button">Set age=13+</button>
                                                            </span>
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
                                            <th width="70%">Title</th>
                                            <th width="30%">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                set age 18 : if thread title contains
                                            </td>
                                            <td  >
                                            <form action="{{ route('batchtools.setage.eighteen') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter title text" name="thread_title_contains">
                                                            <span class="input-group-btn">
                                                              <button class="btn btn-primary btn-sm" type="button">Set age=18+</button>
                                                            </span>
                                                          </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 18 : if thread body contains                                                
                                            </td>
                                            <td  >
                                            <form action="{{ route('batchtools.setage.eighteen') }}" class="form-inline">
                                                <div class="form-group form-group-sm">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Enter body text" name="thread_body_contains">
                                                        <span class="input-group-btn">
                                                          <button class="btn btn-success btn-sm" type="button">Set age=18+</button>
                                                        </span>
                                                      </div>
                                                </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                set age 18 : if thread has tag                                                
                                            </td>
                                            <td  >
                                            <form action="{{ route('batchtools.setage.eighteen') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="thread_has_tag">
                                                            <span class="input-group-btn">
                                                              <button class="btn btn-warning btn-sm" type="button">Set age=18+</button>
                                                            </span>
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
                                            <th width="50%">Title</th>
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
                                                <form action="{{ route('batchtools.search.replace') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter old text" name="thread_body_old">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter new text" name="thread_body_new">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-primary btn-sm" type="button">Replace</button>
                                                            </span>
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
                                                <form action="{{ route('batchtools.search.replace') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter old text" name="thread_title_old">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter new text" name="thread_title_new">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-success btn-sm" type="button">Replace</button>
                                                            </span>
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
                                            <th width="50%">Title</th>
                                            <th width="20%">Value</th>
                                            <th width="30%">Tag Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                add tag: every thread, if body contains                                                 
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.add.tag') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter body text" name="thread_body_contains">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="tag_name">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-primary btn-sm" type="button">Add Tag</button>
                                                            </span>
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
                                                <form action="{{ route('batchtools.add.tag') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter title text" name="thread_title_contains">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="tag_name">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-success btn-sm" type="button">Add Tag</button>
                                                            </span>
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
                                                <form action="{{ route('batchtools.add.tag') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter old tag name" name="thread_title_contains">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="tag_name">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-warning btn-sm" type="button">Add Tag</button>
                                                            </span>
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
                                            <th width="45%">Title</th>
                                            <th width="20%">Value</th>
                                            <th width="35%">Tag Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                rename tag: for tag                                                 
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.rename.tag') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter old name" name="old_tag_name">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter new name" name="new_tag_name">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-primary btn-sm" type="button">Rename Tag</button>
                                                            </span>
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
                                            <th width="65%">Title</th>
                                            <th width="35%">Tag Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                delete tag: for tag                                                 
                                            </td>
                                            <td >
                                                <form action="{{ route('batchtools.delete.tag') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="new_tag_name">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-danger btn-sm" type="button">Delete Tag</button>
                                                            </span>
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
                                            <th width="55%">Title</th>
                                            <th width="25%">Tag Name</th>
                                            <th width="20%">Emoji</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                add emoji: if thread has tag
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.add.emoji') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter tag name" name="tag_name">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <select name="emoji_name" id="emoji_name" class="form-control">
                                                                <option value="">Select Emoji</option>
                                                                @foreach($emojis as $emoji)
                                                                    <option value="{{ $emoji->id }}">{{ $emoji->name  }}</option>
                                                                @endforeach
                                                            </select>
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-primary btn-sm" type="button">Add Emoji</button>
                                                            </span>
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
                                            <th width="50%">Title</th>
                                            <th width="20%">Value</th>
                                            <th width="30%">Famous</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                set famous: every thread, if body contains
                                            </td>
                                            <td colspan="2">
                                                <form action="{{ route('batchtools.set.famaus') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter body text" name="thread_body_contains">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <select name="set_body_contain_famous" id="set_body_contain_famous" class="form-control">
                                                                <option value="">Select famous</option>
                                                                <option value="C">Celebrities</option>
                                                                <option value="N">Other notables</option>
                                                                <option value="O">Other people</option>
                                                            </select>
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-primary btn-sm" type="button">Set Famous</button>
                                                            </span>
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
                                                <form action="{{ route('batchtools.set.famaus') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter title text" name="thread_title_contains">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <select name="set_title_contain_famous" id="set_title_contain_famous" class="form-control">
                                                                <option value="">Select famous</option>
                                                                <option value="C">Celebrities</option>
                                                                <option value="N">Other notables</option>
                                                                <option value="O">Other people</option>
                                                            </select>
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-success btn-sm" type="button">Set Famous</button>
                                                            </span>
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
                                                <form action="{{ route('batchtools.set.famaus') }}" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter tag name" name="tag_name">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <select name="set_has_tag_famous" id="set_has_tag_famous" class="form-control">
                                                                <option value="">Select famous</option>
                                                                <option value="C">Celebrities</option>
                                                                <option value="N">Other notables</option>
                                                                <option value="O">Other people</option>
                                                            </select>
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-warning btn-sm" type="button">Set Famous</button>
                                                            </span>
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
                                            <th width="50%">Title</th>
                                            <th width="20%">Old Source</th>
                                            <th width="30%">New Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                source, search & replace every thread, in source field, replace

                                            </td>
                                            <td colspan="2">
                                                <form action="" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Old source" name="old_source">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="New source" name="new_source">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-primary btn-sm" type="button">Replace</button>
                                                            </span>
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
                                            <th width="48%">Title</th>
                                            <th width="20%">Value</th>
                                            <th width="32%">Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>assign items to specific user every thread, if body contains                                                
                                            </td>
                                            <td colspan="2">
                                                <form action="" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter body text" name="body_contains">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter username" name="username">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-primary btn-sm" type="button">Assign Items</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>assign items to specific user every thread, if title contains                                                
                                            </td>
                                            <td colspan="2">
                                                <form action="" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter body text" name="title_contains">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter username" name="username">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-success btn-sm" type="button">Assign Items</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>assign items to specific user every thread, if thread has tag                                                                                                
                                            </td>
                                            <td colspan="2">
                                                <form action="" class="form-inline">
                                                    <div class="form-group form-group-sm">
                                                        <input type="text" class="form-control" placeholder="Enter tag name" name="tag_name">
                                                    </div>
                                                    <div class="form-group form-group-sm">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter username" name="username">
                                                            <span class="input-group-btn ">
                                                              <button class="btn btn-warning btn-sm" type="button">Assign Items</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>                                          
                                    </tbody>
                                </table>
                                

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