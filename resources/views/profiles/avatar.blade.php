
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
                            <div class="row" >
                                <div class="col-md-3">
                                    @include('profiles.sidebarmenu')
                                </div>
                                <div class="col-md-9">
                                    <div class="row">
                                        <form action="{{ route('profile.avatar.change', $user->username)  }}" method="post" enctype="multipart/form-data" id="profilePhotoChange">
                                            @csrf
                                            <div class="col-md-4" >
                                                <img src="{{ asset($user->avatar_path)  }}" id="avatarImg" style="width: 80px; height: auto;">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label class="control-label" for="avatar">Select Your Profile Photo</label>
                                                    <input class="form-control" type="file" id="avatar" accept="image/*" name="avatar" onchange="loadFile(event,'avatarImg')"/>
                                                </div>
                                                <br><br>
                                                <div class="form-group">
                                                    <button class="btn btn-success">Change Photo</button>
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
    </div>
@endsection

@section('footer_script')
    <script>
        loadFile = function(event, id) {
            var output = document.getElementById(id);
            output.src = URL.createObjectURL(event.target.files[0]);
        };

        $(document).ready(function () {

            $('#profilePhotoChange').submit(function (event) {
                event.preventDefault();
                var form = $('#profilePhotoChange')[0];
                var data = new FormData(form);
                $.ajax({
                    url: "{{ route('profile.avatar.change', $user->username)  }}",
                    type: 'POST',
                    data: data,
                    beforeSend: function (xhr) {
                        $('#app_logo_form').find('.help-block').detach();
                        $('#app_logo_form').find('.form-group').removeClass('has-error');
                    },
                    processData: false, // Important!
                    contentType: false,
                    cache: false,
                    dataType: 'json',
                    success: function (resource) {
                        $('#avatarphoto').attr('src', resource.avatar_path);
                        flash(resource.message, 'success');
                    },
                    error: function (error) {

                    }
                });
            });
        });
    </script>
    @endsection

 