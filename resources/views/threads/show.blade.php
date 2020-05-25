@extends('layouts.app')

@section('head')
<meta property="og:image" content="{{ $thread->threadImagePath }}"/>
<meta property="og:site_name" content="{{ config('app.name') }}">
<meta property="og:title" content="{{ $thread->title }}">
<meta property="og:url" content="{{ url($thread->path) }}">
<meta property="og:type" content="article">
<meta property="og:description" content="{{ $thread->excerpt }}">

   

    <link rel="stylesheet" href="/css/vendor/jquery.atwho.css">
    {{-- <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" /> --}}
    
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/css/lightbox.min.css"> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" type="text/css" media="screen" />

    <style>
        div.phpdebugbar-openhandler-overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: .8;
            z-index: 20000;
        }
        .fancybox-content {
            border: 10px solid #ffffff;
            border-radius: 10px;
            width: 7240px;
            height:474px;
        }
        
        .thread-buttons{
            padding: 5px 15px 5px 5px;
            background-color: #f5f5f5;
            border-top: 1px solid #d3e0e9;
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        } 

        iframe{
            margin-top: 5px;
            max-width: 100%;
            height: -webkit-fill-available;
            height: fill-available;
            height: -moz-available;
            height: 350px;
            /* width: 100%; */

        }
        .mce-content-body  iframe{
            margin-top: 5px;
            max-width: 80%!;
            height: -webkit-fill-available;
            height: fill-available;
            height: -moz-available;
            height: 350px;
            /* width: 100%; */

        }

        body#tinymce iframe {
            width: 500px!important;
            height: 350px!important;
        }

        .tox-tinymce{
            min-height:500px!important;
            overflow: scroll;
        }
    </style>
    
@endsection

@section('content')
    <thread-view :thread="{{ $thread }}" inline-template>
        <div class="container">
            <div class="row top-margin">
                <div  class="col-md-8" v-cloak>
                    @include ('threads._question')                   
                </div>

                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Search
                        </div>
    
                        <div class="panel-body">
                            <form method="GET" action="/threads/search">
                                <div class="form-group">
                                    <input type="text" placeholder="Search for something..." name="query" class="form-control">
                                </div>
    
                                <div class="form-group" style="margin-bottom: 0px;">
                                    <button class="btn btn-default" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <p>
                               

                                
                                {{-- <subscribe-button :active="{{ json_encode($thread->isSubscribedTo) }}" v-if="signedIn"></subscribe-button> --}}
                            <subscribe-button :thread="{{ $thread }}" v-if="!authorize('isBan')"></subscribe-button>

                                <button class="btn btn-default"
                                        v-if="authorize('isAdmin')"
                                        @click="toggleLock"
                                        v-text="locked ? 'Unlock' : 'Lock'"></button>
                               
                            </p>
                        </div>
                        <div class="panel-body">
                            <h4 style="padding: 0px;">Related Threads</h4>
                            <ul  class="list-group">
                                @forelse ($relatedThreads as $relatedThread)
                                    <li class="list-group-item">
                                        <a href="{{ url($relatedThread->path) }}">{{ $relatedThread->title }}</a>
                                    </li>
                                @empty
                                    <li class="list-group-item">Currently No Related Threads </li>
                                @endforelse
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                @if($thread->lat != null && $thread->lng != null )
                    <div class="col-md-12">
                        <simple-map :thread="{{ $thread }}"></simple-map>
                    </div>
                    
                @endif
            </div>
            <replies @added="repliesCount++" @removed="repliesCount--"></replies>
        </div>
    </thread-view>
@endsection
@section('footer_script')

    <script>
        tinymce.init({
            selector: '#tinyeditor',
            plugins: 'a11ychecker advcode casechange formatpainter linkchecker lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
            toolbar: 'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
            toolbar_drawer: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
        });
        $(function () {
            //$('[data-toggle="tooltip"]').tooltip();

            $('#bodyedit').atwho({
                at: "@",
                delay: 750,
                callbacks: {
                    remoteFilter: function(query, callback) {
                        $.getJSON("/api/users", {name: query}, function(usernames) {
                            callback(usernames)
                        });
                    }
                }
            });
            // $('#tags').select2({
            //     placeholder: 'Select tags',
            //     cache:true
            // });
        })
    </script>
    {{-- <script src="//cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script> --}}
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>

    <script>
        $(document).ready(function() {
            $("a#single_image").fancybox({
                showCloseButton:false,
                titlePosition:'inside'
            });
        });
        

    </script>
    
    @endsection
