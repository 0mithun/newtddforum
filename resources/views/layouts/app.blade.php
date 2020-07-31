<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

<title> {{ $pageTitle }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/trix/0.11.1/trix.css">

    <!-- Scripts -->
    <script>
        window.App = {!! json_encode([
            'csrfToken' => csrf_token(),
            'user' => Auth::user(),
            'signedIn' => Auth::check()
        ]) !!};
    </script>

    <script>
        window.MIX_GOOGLE_MAP_KEY ="AIzaSyCi8raV_JKtL4xUfmHIvHkxA07DBEr9WbA";
        window.TINY_EDITOR_API_KEY="{{ config('services.tiny.key') }}"
    </script>
    @yield('head')
    <style>
        body { padding-bottom: 100px; }
        .level { display: flex; align-items: center; }
        .level-item { margin-right: 1em; }
        .flex { flex: 1; }
        .mr-1 { margin-right: 1em; }
        .ml-a { margin-left: auto; }
        [v-cloak] { display: none; }
        .ais-highlight > em { background: yellow; font-style: normal; }
        #footer{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #484848;
            color: #ffffff;
            height: 50px;
            padding: 15px;
            z-index: 2;
        }
        
        .footer-content{

        }
        .footer-menu{
            margin: 0px;
            padding: 0px;
            list-style:none;
        }
        .footer-menu li{
            float: left;
            display: inline-block;
        }
        .footer-menu li a{
            display: block;
            padding: 0px 10px;
            color: #ffffff;
        }

        .navbar {
            margin-bottom: 5px;
        }
        
        .source-button{
            padding: 0px;
            padding-left: 15px
            /* display: block; */
            /* overflow: hidden */
        }

        .tag-list{
            padding: 0px
        }

        .userprivacy hr{
            margin-top:10px;
            margin-bottom: 10px;
        }
        .list-group-item.acive{
            background: blue;
        }
        .chat-sidebar {
            position: fixed;
            right: 0;
            top: 0;
            width: 350px;
        }
        .top-margin{
            margin-top: 55px;
        }
        .top-30{
            margin-top: 30px;
        }
    </style>

    
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

    <style>
        .chat-list{
            list-style: none;
            margin:0;
            padding:0;
        }
        .chat-list li{
            list-style-type: none;
        }
        li.receiver {
            width: 100%;
            
            overflow: hidden;
            
        }

        li.receiver span.message{
            float: left;
            background: #e4e4e4;
        }

        .sender{
            width: 100%;
            overflow: hidden;

        }

        li.sender span.message{
            float: right;
            
            background: #01a0ec;
            color: white
        }
        span.message{
            padding: 5px 10px;
            border-radius: 15px;
        }
        .messageBox{
            margin-top: 20px;
        }


        .social-icon{
            text-decoration: none;
            background-repeat: no-repeat;
            background-size: 32px;
            background-position: 0 0;
            display: inline-block;
            overflow: hidden;
            margin-top: 10px;
            margin-right: 10px;
            padding-left: 36px;
        }
        .facebook{
            background-image: url(/images/social/facebook.png);
        }
        .twitter{
            background-image: url(/images/social/twitter.png);
        }
        .instagram{
            background-image: url(/images/social/instagram.png);
        }

    </style>
</head>
<body>
<div id="app">
    @include ('layouts.nav')

    @yield('content')

    @include('layouts.footer')
    <flash message="{{ session('flash') }}"></flash>
    <flash message="{{ session('succes') }}"></flash>
</div>



<!-- Scripts -->
<script src="{{ asset('js/app.js') }}"></script>
@php
    $tinyapikey = config('services.tiny.key');
    $url = "https://cdn.tiny.cloud/1/".$tinyapikey."/tinymce/5/tinymce.min.js";
@endphp
<script src="{{ $url  }}" referrerpolicy="origin"></script>



@yield('scripts')

<script>
    $(document).ready(function(){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    });
</script>

@yield('footer_script')

    

</body>
</html>
