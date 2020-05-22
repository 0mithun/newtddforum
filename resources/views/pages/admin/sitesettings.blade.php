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
                                <form action="{{ route('admin.setesettings.update')  }}" class="form-horizontal" method="post">

                                    @csrf

                                    <div class="form-group{{ $errors->has('app_name') ? ' has-error' : '' }}">
                                        <label for="app_name" class="col-md-3 control-label">App Name</label>
                                        <div class="col-md-9">
                                            <input id="app_name" type="text" class="form-control" name="app_name" value="{{ $admin->app_name }}"  autofocus>

                                            @if ($errors->has('app_name'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('app_name') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group{{ $errors->has('timezone') ? ' has-error' : '' }}">
                                        <label for="timezone" class="col-md-3 control-label">Time Zone</label>
                                        <div class="col-md-9">
                                            <input id="timezone" type="text" class="form-control" name="timezone" value="{{ $admin->timezone }}"  >

                                            @if ($errors->has('timezone'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('timezone') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group{{ $errors->has('copyright') ? ' has-error' : '' }}">
                                        <label for="copyright" class="col-md-3 control-label">Copyright Text</label>
                                        <div class="col-md-9">
                                            <input id="copyright" type="text" class="form-control" name="copyright" value="{{ $admin->copyright }}"  >

                                            @if ($errors->has('copyright'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('copyright') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group{{ $errors->has('mail_driver') ? ' has-error' : '' }}">
                                        <label for="mail_driver" class="col-md-3 control-label">Mail Driver</label>
                                        <div class="col-md-9">
                                            <input id="mail_driver" type="text" class="form-control" name="mail_driver" value="{{ $admin->mail_driver }}"  autofocus>

                                            @if ($errors->has('mail_driver'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('mail_driver') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group{{ $errors->has('mail_host') ? ' has-error' : '' }}">
                                        <label for="mail_host" class="col-md-3 control-label">Mail Host</label>
                                        <div class="col-md-9">
                                            <input id="mail_host" type="text" class="form-control" name="mail_host" value="{{ $admin->mail_host }}"  autofocus>

                                            @if ($errors->has('mail_host'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('mail_host') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group{{ $errors->has('mail_port') ? ' has-error' : '' }}">
                                        <label for="mail_port" class="col-md-3 control-label">Mail Port</label>
                                        <div class="col-md-9">
                                            <input id="mail_port" type="text" class="form-control" name="mail_port" value="{{ $admin->mail_port }}"  autofocus>

                                            @if ($errors->has('mail_port'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('mail_port') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                                        <label for="username" class="col-md-3 control-label">Mail User Name</label>
                                        <div class="col-md-9">
                                            <input id="username" type="text" class="form-control" name="username" value="{{ $admin->username }}"  autofocus>

                                            @if ($errors->has('username'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('username') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                        <label for="password" class="col-md-3 control-label">Mail Password</label>
                                        <div class="col-md-9">
                                            <input id="password" type="text" class="form-control" name="password" value="{{ $admin->password }}"  autofocus>

                                            @if ($errors->has('password'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('password') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group{{ $errors->has('mail_encryption') ? ' has-error' : '' }}">
                                        <label for="mail_encryption" class="col-md-3 control-label">Mail Encryption</label>
                                        <div class="col-md-9">
                                            <input id="mail_encryption" type="text" class="form-control" name="mail_encryption" value="{{ $admin->mail_encryption }}"  autofocus>

                                            @if ($errors->has('mail_encryption'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('mail_encryption') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-9 col-md-offset-3">
                                            <input type="submit" class="btn btn-primary" value="Save">
                                        </div>
                                    </div>


                                </form>                                      
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    </div>
@endsection
