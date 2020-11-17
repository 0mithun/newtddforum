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

        .story-text{
            font-size:17px;
        }
        .image-description{
            text-align:left;
            font-size:12px;
            padding:0px 10px;
        }
        .channel-name{
            margin-right:10px;
        }
        .thread-show-tags{
            margin-top:15px;
        }

        .story{
            color:rgba(0,0,0,.8);
        }
        
        .thread-image{
            max-width: 100%;
            height:240px;
        }

        html {
            scroll-behavior: smooth;
            }

            @media (prefers-reduced-motion: reduce) {
            html {
                scroll-behavior: auto;
            }
            }
    </style>
    
@endsection

@section('content')

    <div class="container">
        <div class="row top-margin" >
            <div class="col-md-8">

                <div class="panel">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-10">
                                <span class="channel-name" >  <a href="{{ route('tags.threads.list', strtolower($thread->channel->name)) }}" class="tag-name">{{ $thread->channel->name }}</a></span>
                                <span class="created_time">{{ $thread->created_at->diffForHumans() }}</span>
                            </div>
                            <div class="col-md-2 thread-edit-delete-btn"> 
                                @if (auth()->check())
                                    @if (auth()->user()->id == $thread->user_id || auth()->user()->id == 1)
                                        <delete-thread-btn :thread="{{ $thread }}"></delete-thread-btn>
                                        <a href="{{ route('threads.edit', $thread->slug) }}" class="btn btn-sm btn-default">Edit</a>
                                    @endif                                    
                                @endif                             
                                    
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="thread_title" style="margin-top: 5px;margin-bottom:5px"> {!! ($thread->title) !!}</h1>
                            </div>
                            
                        </div>
                        <div class="row thread-show-item-counts">
                            <div class="col-md-12 thread_item_counts no-padding">
                                <view-counts :thread="{{ $thread }}"></view-counts>
                                <point-counts :thread="{{ $thread }}"></point-counts>
                                <comment-counts :thread="{{ $thread }}"></comment-counts>
                                <favorite-counts :thread="{{ $thread }}"></favorite-counts>
                                <emoji-counts :thread="{{ $thread }}"></emoji-counts>
            
                                <div  class="thread-map-icon">
                                    @if($thread->location != NULL && $thread->location !='null')
                                        <img src="{{ asset('images/png/map-icon-red.png') }}" alt="">
                                        <span class="full-location">{{ $thread->location }}</span>

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
                            <vote-emoji-list :thread="{{ $thread }}"  position="top"></vote-emoji-list>
                            <div class="col-md-3 social-share-btn">
                                <fb-share :thread="{{ $thread }}"></fb-share>
                                <twitter-share :thread="{{ $thread }}"></twitter-share>
                            </div>
                            <div class="col-md-9 thread-show-tools">
                                <focus-comment size="small"></focus-comment>
                                <vote-emojis :thread="{{ $thread }}"  position="top" size="small"></vote-emojis>
                                <favorite-thread :thread="{{ $thread }}" size="small"></favorite-thread>
                                <up-votes :thread="{{ $thread }}" size="small"></up-votes>
                                <down-votes :thread="{{ $thread }}" size="small"></down-votes>
                                <report-thread :thread="{{ $thread }}" size="small"></report-thread>                             
                                <show-source source="{{ $thread->source }}" size="small"></show-source>                            
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 no-padding">
                                <div class="story">
                                    <div class="thread_thumb" style="margin-bottom:0px; background: rgba({{ $thread->imageColor }})">
                                        <img src="{{ $thread->threadImagePath }}" alt="{{ $thread->title }}" class="thread-image thread_thumb_image">
                                        {{-- Under images: need show img description + license info + amazon [shop] --}}
                                    </div>
                                    <p class="image-description" style="text-align:left">{!! $thread->wiki_image_description !!}</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="story">
                                    <div class="story-text">
                                        {!! $thread->body !!}
                                    </div>
                                </div>
                            </div>
                        </div>

                        @php 
                            $threadTags = $thread->tag_name_list;
                        @endphp
                        @if ( count($threadTags)>0)
                            <div class="row">
                                <div class="col-md-12 thread-show-tags">                                                                   
                                    Tags:
                                    
                                   
                                    @foreach ($threadTags as $tag)
                                        <a  href="{{ strtolower(route('tags.threads.list', trim($tag)))  }}" class="tag-name">#{{ trim($tag) }}</a>
                                    @endforeach                               
                                </div>
                            </div>
                        @endif
                        
                        {{-- @php $threadTags = $thread->tags()->get(); @endphp
                        @if ($threadTags->count()>0)
                            <div class="row">
                                <div class="col-md-12 thread-show-tags">                                                                   
                                    Tags:
                                    
                                   
                                    @foreach ($threadTags as $tag)
                                        <a  href="{{ strtolower(route('tags.threads.list', $tag->name))  }}" class="tag-name">#{{ $tag->name }}</a>
                                    @endforeach                               
                                </div>
                            </div>
                        @endif --}}

                        <div class="row thread-show-tool-items">
                            <vote-emoji-list :thread="{{ $thread }}"  position="bottom"></vote-emoji-list>
                            <div class="col-md-3 social-share-btn">
                                <fb-share :thread="{{ $thread }}"></fb-share>
                                <twitter-share :thread="{{ $thread }}"></twitter-share>
                            </div>
                            <div class="col-md-9 thread-show-tools">
                                <focus-comment size="small"></focus-comment>
                                <vote-emojis :thread="{{ $thread }}"  position="bottom" size="small"></vote-emojis>
                                <favorite-thread :thread="{{ $thread }}" size="small"></favorite-thread>
                                <up-votes :thread="{{ $thread }}" size="small"></up-votes>
                                <down-votes :thread="{{ $thread }}" size="small"></down-votes>
                                <report-thread :thread="{{ $thread }}" size="small"></report-thread>                             
                                <show-source source="{{ $thread->source }}" size="small"></show-source>                            
                            </div>
                        </div>
                    </div>
                </div>

                @if($thread->location != NULL)
                <div class="row">
                    <div class="col-md-12">
                        <h3 style="color:black;">Story Location</h3>
                        <simple-map :thread="{{ $thread }}"></simple-map>                    
                    </div>
                </div>
            @endif
    
            <div class="row">
                <div class="col-md-12">
                <thread-replies :thread="{{ $thread }}"></thread-replies>
                </div>
            </div>
            </div>
            <div class="col-md-4">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="social-follow-btn">
                            <a href="https://facebook.com/Anecdotagecom-104983414515616/" class="follow-item">
                                <img class="follow-item-icon" src="{{ asset('images/social/facebook.png') }}" alt="">
                            </a>
                            <a href="https://twitter.com/anecdotage_com" class="follow-item">
                                <img class="follow-item-icon" src="{{ asset('images/social/twitter.png') }}" alt="">
                            </a>
                            <a href="https://www.instagram.com/anecdevs_ig/" class="follow-item">
                                <img class="follow-item-icon" src="{{ asset('images/social/instagram.png') }}" alt="">
                            </a>
                        </div>
                        <h3 class="follow-on-title">Follow Us On</h3>
                    </div>
                </div>
                <trending-thread></trending-thread>
              </div>
        </div>

       
    </div>
@endsection
@section('footer_script')

    <script>
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

        $(document).ready(function() {
            if(window.location.hash){
                console.log(location.hash)
                var hash = window.location.hash;
                window.location.hash = "";
                window.location.hash = hash;
            }
        });

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