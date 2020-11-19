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
                                <form action="{{  route('admin.faq.update') }}" method="post" class="form-horizontal">
                                    @csrf
                                    <div class="form-group{{ $errors->has('body') ? ' has-error' : '' }}">
                                        <label for="body" class="col-md-2 control-label">Faq Body </label>

                                        <div class="col-md-10">
                                            <textarea name="body" id="body" cols="30" rows="20" class="form-control">{{ $adminInfo->faq }}</textarea>
                                            @if ($errors->has('body'))
                                                <span class="help-block">
                                                    <strong>{{ $errors->first('body') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-10 col-md-offset-2">
                                            <input type="submit" value="Update" class="btn btn-primary">
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

@section('footer_script')
    <script>
        tinymce.init({
            selector: '#tinyeditor',
            plugins: 'code',
            toolbar: 'formatselect fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | code',
            menubar: 'tools',


            toolbar_drawer: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
        });
    </script>
    @endsection