@extends('layouts.app')
@section ('head')
    <script src='https://www.google.com/recaptcha/api.js'></script>
@endsection

@section('content')
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-12">
                <edit-thread :alltags="{{ $tags }}" :allchannels="{{ $channel }}" :thread="{{ $thread }}"></-thread>
            </div>
        </div>
    </div>
@endsection