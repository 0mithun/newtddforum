@extends('layouts.app')
@section('content')
    @php
        $user = auth()->user();
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
                                <form action="{{ route('user.update.password', $user->username) }}" class="form-horizontal" method="post">
                                    @csrf
                                    
                                    @if($user->auth_type == 'email')
                                        <div class="form-group{{ $errors->has('old_password') ? ' has-error' : '' }}">
                                            <label for="old_password" class="col-md-3 control-label">Old Password:</label>
                                            <div class="col-md-9">
                                                <input id="old_password" type="text" class="form-control" name="old_password" value="{{ old('old_password', $user->old_password) }}"  autofocus>
                                                @if ($errors->has('old_password'))
                                                    <span class="help-block">
                                                    <strong>{{ $errors->first('old_password') }}</strong>
                                                </span>
                                                @endif
                                            </div>
                                        </div>
                                    @endif
                                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                        <label for="password" class="col-md-3 control-label">New Password:</label>
                                        <div class="col-md-9">
                                            <input id="password" type="password" class="form-control" name="password" >
                                            @if ($errors->has('password'))
                                                <span class="help-block">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                                        <label for="password_confirmation" class="col-md-3 control-label">Confirm Password:</label>
                                        <div class="col-md-9">
                                            <input id="password_confirmation" type="password" class="form-control" name="password_confirmation"  >
                                            @if ($errors->has('password_confirmation'))
                                                <span class="help-block">
                                                <strong>{{ $errors->first('password_confirmation') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group{{ $errors->has('country') ? ' has-error' : '' }}">
                                        <div class="col-md-9 col-md-offset-3">
                                            <input type="submit" class="btn btn-success" value="Change Password">
                                            <a  class="btn btn-danger"  href="{{  route('profile', $user->username) }}"> Cancel</a>
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


@section('head')
    <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" >
    <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/country-select-js/2.0.1/css/countrySelect.min.css" >

@endsection


@section('footer_script')
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"> </script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/country-select-js/2.0.1/js/countrySelect.min.js"> </script>

    <script>
        $(document).ready(function () {
            $.fn.datepicker.defaults.format = "yyyy-mm-dd";

            $('#date_of_birth').datepicker({
//                format: 'yy-mm-dd',

            });

            $("#country").countrySelect({
                defaultCountry:'us',
                responsiveDropdown: true
            });

        });
    </script>
@endsection
