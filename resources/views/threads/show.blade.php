@extends('layouts.app')

@section('head')
    <link rel="stylesheet" href="/css/vendor/jquery.atwho.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    
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
    </style>
    
@endsection

@section('content')
    <thread-view :thread="{{ $thread }}" inline-template>
        <div class="container">
            <div class="row">
                <div class="col-md-8" v-cloak>
                    @include ('threads._question')
                    <hr>
                    <replies @added="repliesCount++" @removed="repliesCount--"></replies>
                </div>

                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <p>
                                <subscribe-button :active="{{ json_encode($thread->isSubscribedTo) }}" v-if="signedIn"></subscribe-button>

                                <button class="btn btn-default"
                                        v-if="authorize('isAdmin')"
                                        @click="toggleLock"
                                        v-text="locked ? 'Unlock' : 'Lock'"></button>
                            </p>
                        </div>
                        <div class="panel-body">
                           



                            {{-- <p>
                                This thread was published {{ $thread->created_at->diffForHumans() }} by
                                <a href="#">{{ $thread->creator->name }}</a>, and currently
                                has <span
                                        v-text="repliesCount"></span> {{ str_plural('comment', $thread->replies_count) }}
                                .
                            </p> --}}

                           

                            <h4>Related Threads</h4>

                            {{-- {{ $relatedThreads->count() }} --}}

                            <ul style="margin:0;padding:0">
                                @forelse ($relatedThreads as $relatedThread)
                                    <li style="list-style:none;padding:10px 5px;margin-bottom:10px">
                                        <a href="{{ url($relatedThread->path) }}">{{ $relatedThread->title }}</a>
                                    </li>
                                @empty
                                    <li>Currently No Related Threads </li>
                                @endforelse



                                {{-- @foreach($relatedThreads as $relatedThread)
                                    <li>
                                    <a href="{{ url($relatedThread->path) }}">{{ $relatedThread->title }}</a>
                                    </li>
                                @endforeach --}}
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
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

            $('#tags').select2({
                placeholder: 'Select tags',
                cache:true
            });
        })
    </script>
    <script src="//cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js"></script> --}}

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>

    <script>
        $(document).ready(function() {

/* This is basic - uses default settings */

        $("a#single_image").fancybox({
            showCloseButton:false,
            titlePosition:'inside'
        });

        /* Using custom settings */

        // $("a#inline").fancybox({
        //     'hideOnContentClick': true
        // });

        /* Apply fancybox to multiple items */

        // $("a.group").fancybox({
        //     'transitionIn'	:	'fade',
        //     'transitionOut'	:	'elastic',
        //     'speedIn'		:	600, 
        //     'speedOut'		:	200, 
        //     'overlayShow'	:	false,
        //     'modal' : true
        // });

        });
    
    </script>
    
    @endsection
