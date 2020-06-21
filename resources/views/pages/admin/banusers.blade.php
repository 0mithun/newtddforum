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
                                            <th width="35%">Description</th>
                                            <th width="22%">Value</th>
                                            <th width="21%">Ban Type</th>
                                            <th width="22%">Days</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>
                                                Banned all users: if thread title contains
                                            </td>
                                            <td colspan="3">
                                                <form action="{{ route('admin.bans.users') }}"  class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="ban_users_title">
                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_users_title') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter title text" name="ban_users_title">
                                                            @if ($errors->has('ban_users_title'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_title') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm  {{ $errors->has('ban_users_title_type') ? ' has-error' : '' }}">                                                        
                                                            <select name="ban_users_title_type" id="ban_users_title_type" class="form-control">
                                                                <option value="">Select ban type</option>
                                                                <option value="0">Tempoary </option>
                                                                <option value="1">Permanent </option>
                                                            </select>
                                                            @if ($errors->has('ban_users_title_type'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_title_type') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_users_title_days') ? ' has-error' : '' }}" >
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter day" name="ban_users_title_days">
                                                                <span class="input-group-btn">
                                                                <button class="btn btn-primary btn-sm" type="submit">Ban Users</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('ban_users_title_days'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_title_days') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Banned all users: if thread body contains
                                            </td>
                                            <td colspan="3">
                                                <form action="{{ route('admin.bans.users') }}"  class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="ban_users_body">
                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_users_body') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter body text" name="ban_users_body">
                                                            @if ($errors->has('ban_users_body'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_body') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm  {{ $errors->has('ban_users_body_type') ? ' has-error' : '' }}">                                                        
                                                            <select name="ban_users_body_type" id="ban_users_body_type" class="form-control">
                                                                <option value="">Select ban type</option>
                                                                <option value="0">Tempoary </option>
                                                                <option value="1">Permanent </option>
                                                            </select>
                                                            @if ($errors->has('ban_users_body_type'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_body_type') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_users_body_days') ? ' has-error' : '' }}" >
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter day" name="ban_users_body_days">
                                                                <span class="input-group-btn">
                                                                <button class="btn btn-primary btn-sm" type="submit">Ban Users</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('ban_users_body_days'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_body_days') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Banned all users:  if thread has tag
                                            </td>
                                            <td colspan="3">
                                                <form action="{{ route('admin.bans.users') }}"  class="form-inline" method="POST">
                                                    @csrf
                                                    <input type="hidden" name="field" value="ban_users_tag">
                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_users_tag') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter tag name" name="ban_users_tag">
                                                            @if ($errors->has('ban_users_tag'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_tag') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm  {{ $errors->has('ban_users_tag_type') ? ' has-error' : '' }}">                                                        
                                                            <select name="ban_users_tag_type" id="ban_users_tag_type" class="form-control">
                                                                <option value="">Select ban type</option>
                                                                <option value="0">Tempoary </option>
                                                                <option value="1">Permanent </option>
                                                            </select>
                                                            @if ($errors->has('ban_users_tag_type'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_tag_type') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_users_tag_days') ? ' has-error' : '' }}" >
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter day" name="ban_users_tag_days">
                                                                <span class="input-group-btn">
                                                                <button class="btn btn-warning btn-sm" type="submit">Ban Users</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('ban_users_tag_days'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_users_tag_days') }}</strong>
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
                                            <th width="80%">Description</th>
                                            <th width="20%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Un banned all users
                                            </td>
                                            <td colspan="3">
                                                <form action="{{ route('admin.unbans.users') }}" method="POST">
                                                    @csrf
                                                    <button class="btn btn-primary btn-sm">Unbanned all Users</button>
                                                </form>                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table class="table table-bordered table-responsive table-condensed">
                                    <thead>
                                        <tr>
                                            
                                            <th width="20%">Description</th>
                                            <th width="25%">Value</th>
                                            <th width="25%">Ban Type</th>
                                            <th width="25%">Days</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Ban single user
                                            </td>
                                            <td colspan="3">
                                                <form action="{{ route('admin.bans.singleusers') }}"  class="form-inline" method="POST">
                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_single_user_username') ? ' has-error' : '' }}">
                                                            <input type="text" class="form-control" placeholder="Enter username" name="ban_single_user_username">
                                                            @if ($errors->has('ban_single_user_username'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_single_user_username') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm  {{ $errors->has('ban_single_user_type') ? ' has-error' : '' }}">                                                        
                                                            <select name="ban_single_user_type" id="ban_single_user_type" class="form-control">
                                                                <option value="">Select ban type</option>
                                                                <option value="0">Tempoary </option>
                                                                <option value="1">Permanent </option>
                                                            </select>
                                                            @if ($errors->has('ban_single_user_type'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_single_user_type') }}</strong>
                                                                </span>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="form-group form-group-sm {{ $errors->has('ban_single_user_days') ? ' has-error' : '' }}" >
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Enter day" name="ban_single_user_days">
                                                                <span class="input-group-btn">
                                                                <button class="btn btn-primary btn-sm" type="submit">Ban Users</button>
                                                                </span>
                                                            </div>
                                                            @if ($errors->has('ban_single_user_days'))
                                                                <span class="help-block ">
                                                                    <strong class="">{{ $errors->first('ban_single_user_days') }}</strong>
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
                                            <th width="35%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Un-Ban single user
                                            </td>
                                            <td >
                                                <form action="{{ route('admin.unbans.single.users') }}"  class="form-inline" method="POST">
                                                    @csrf 
                                                    <div class="form-group form-group-sm {{ $errors->has('unban_single_user_username') ? ' has-error' : '' }}" >
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Enter username" name="unban_single_user_username">
                                                            <span class="input-group-btn">
                                                            <button class="btn btn-primary btn-sm" type="submit">Unban User</button>
                                                            </span>
                                                        </div>
                                                        @if ($errors->has('unban_single_user_username'))
                                                            <span class="help-block ">
                                                                <strong class="">{{ $errors->first('unban_single_user_username') }}</strong>
                                                            </span>
                                                        @endif
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
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
        hr{
            margin-top:10px;
            margin-bottom:10px;
        }
        h5{
            font-size: 15px;
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

@section('footer_script')
    <script>
        $('#ban_type').change(function(event){
            $('#ban_expire_on').removeAttr('disabled');
            if(this.value ==1){
                $('#ban_expire_on').attr('disabled','disabled')
            }
        })

        $('#ban_type_single').change(function(event){
            $('#ban_expire_on_single').removeAttr('disabled');
            if(this.value ==1){
                $('#ban_expire_on_single').attr('disabled','disabled')
            }
        })
        //
    </script>
@endsection