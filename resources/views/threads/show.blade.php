@extends('layouts.app')
@section('head')
<meta property="og:image" content="{{ $thread->threadImagePath }}"/>
<meta property="og:site_name" content="{{ config('app.name') }}">
<meta property="og:title" content="{{ $thread->title }}">
<meta property="og:url" content="{{ url($thread->path) }}">
<meta property="og:type" content="article">
<meta property="og:description" content="{{ $thread->excerpt }}">

<meta name=twitter:card content=summary_large_image />
<meta name=twitter:site content="@anecdotage" />
<meta name=twitter:creator content="@anecdotage" />
<meta name=twitter:url content="{{ url($thread->path) }}" />
<meta name=twitter:title content="{{ $thread->title }}" />
<meta name=twitter:description content="{{ $thread->excerpt }}" />
<meta name=twitter:image content="{{ $thread->threadImagePath }}" />	



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
    <div class="container">
        <div class="row top-margin" >
            <div class="col-md-12">

                <div class="panel">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-12">
                                <span class="channel-name"></span>
                            <span class="created_time">{{ $thread->created_at->diffForHumans() }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                            <h1 class="thread_title"> {{ $thread->title }}</h1>
                            </div>
                        </div>
                        <div class="row thread-show-item-counts">
                            <div class="col-md-4 thread_item_counts">
                                <view-counts :thread="{{ $thread }}"></view-counts>
                                <point-counts :like_count="{{ $thread->like_count }}" :dislike_count="{{ $thread->dislike_count }}"></point-counts>
                                <comment-counts :comment_counts="{{ $thread->replies_count }}"></comment-counts>
                            </div>
                            <div class="col-md-3">
                                <star-rating :thread="{{ $thread }}"></star-rating>
                            </div>
                            <div class="col-md-5 thread_emoji_count_map">
                                {{-- <thread-emojis :thread="{{ $thread }}"></thread-emojis> --}}
                                <emoji-counts :thread="{{ $thread }}"></emoji-counts>
            
                                <div  class="thread-map-icon">
                                    @if($thread->location != NULL)
                                        <img src="{{ asset('images/png/map-icon-red.png') }}" alt="">
                                    @else
                                        <img src="{{ asset('images/png/map-icon-black.png') }}" alt="">
                                    @endif
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="thread_creator">
                                    @if($thread->anonymous ==1)
                                        <a href="#" class="creator_name">
                                            <img src="{{ asset('images/default.png') }}"
                                                alt="anonymous"
                                                width="25"
                                                height="25"
                                                class="avatar-photo">
                                            <user-online :user="{{ json_encode($thread->creator) }}"></user-online>
                                            anonymous
                                        </a>
                                    @else 
                                        <a href="{{ route('profile', $thread->creator->username)  }}" class="creator_name">
                                            <img src="{{ asset($thread->creator->avatar_path) }}"
                                                alt="{{ $thread->creator->name }}"
                                                width="25"
                                                height="25"
                                                class="avatar-photo">
                                            <user-online :user="{{ json_encode($thread->creator) }}"></user-online>
                                            {{ $thread->creator->name }}
                                        </a> 
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row thread-show-tool-items">
                            <vote-emoji-list :thread="{{ $thread }}"></vote-emoji-list>
                            <div class="col-md-3 social-share-btn">
                                <fb-share :thread="{{ $thread }}"></fb-share>
                                <twitter-share :thread="{{ $thread }}"></twitter-share>
                            </div>
                            <div class="col-md-9 thread-show-tools">
                                <focus-comment></focus-comment>
                                <vote-emojis :thread="{{ $thread }}"></vote-emojis>
                                <favorite-thread :thread="{{ $thread }}"></favorite-thread>
                                <up-votes :thread="{{ $thread }}"></up-votes>
                                <down-votes :thread="{{ $thread }}"></down-votes>
                                <report-thread :thread="{{ $thread }}"></report-thread>                             
                                <show-source :thread="{{ $thread }}"></show-source>                            
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="story">
                                    <figure class="thread_thumb">
                                        <img src="{{ $thread->threadImagePath }}" alt="{{ $thread->title }}" class="thread-image">
                                    </figure>
                                    <div class="story-text">
                                        {!! $thread->body !!}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 thread-show-tags">
                                Tags:
                                @foreach ($thread->tags as $tag)
                                    <a  href="{{ strtolower(route('tags.threads.list', $tag->name))  }}" class="tag-name">{{ $tag->name }}</a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @if($thread->location != NULL)
            <div class="row">
                <div class="col-md-12">
                    <simple-map :thread="{{ $thread }}"></simple-map>                    
                </div>
            </div>
        @endif

        <div class="row">
            <div class="col-md-12">
                <thread-replies ></thread-replies>
            </div>
        </div>
    </div>
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
        })
    </script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>

    <script>
        $(document).ready(function() {
            $("a#single_image").fancybox({
                showCloseButton:false,
                titlePosition:'inside'
            });
        });
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

    </script>
    
    @endsection
        @section('head')
            <style>
                ul.dropdown-menu.age-restrictd-dropdown {
            left: 45px;
            top: 50%;
        }
    </style>
@endsection