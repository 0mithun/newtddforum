<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

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

        i.fa.fa-facebook-square {
            font-size: 17px;
            color: blue;
            padding: 0px 3px;
            
        }

        i.fa.fa-twitter-square {
            font-size: 17px;
            color: #3097d1;
            padding: 0px 3px;
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

    </style>

    @yield('head')
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    @include ('layouts.nav')

    @yield('content')
    <div class="chat-sidebar">
        <div class="panel">
            <div class="panel-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptates? Odio dolores molestiae totam eos numquam saepe non, possimus nulla ipsum quos exercitationem, aut, quam obcaecati fuga aspernatur adipisci distinctio cumque dolor! Officia a libero alias ipsa, molestias eligendi consequatur aperiam quam! Sequi fugiat, ratione vitae voluptatum iste officia distinctio doloremque nobis suscipit enim accusantium dolorem quis minima eum aliquam itaque exercitationem ipsa similique aliquid quo ex ad perferendis ipsam. Ducimus expedita non incidunt sunt, vel illo minima, illum odit qui rem accusamus, tenetur provident inventore? Ea a incidunt ut obcaecati optio debitis numquam, nemo dolor. Iure at odio reprehenderit.
            </div>
        </div>
    
    </div>
    

    @include('layouts.footer')
    <flash message="{{ session('flash') }}"></flash>
</div>



<!-- Scripts -->
<script src="{{ asset('js/app.js') }}"></script>
@php
    $tinyapikey = config('services.tiny.key');
    $url = "https://cdn.tiny.cloud/1/".$tinyapikey."/tinymce/5/tinymce.min.js";
@endphp
<script src="{{ $url  }}" referrerpolicy="origin"></script>



@yield('scripts')

@yield('footer_script')

</body>
</html>
