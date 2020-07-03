@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-8">
                @include ('threads._list')

                {{ $threads->render() }}
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

                            <div class="form-group">
                                <button class="btn btn-default" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                @if (count($trending))
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Trending Threads
                        </div>

                        <div class="panel-body">
                            <ul class="list-group">
                                @php
                                    $auth_user = null;
                                    if(auth()->check()){
                                        $auth_user = auth()->user();
                                    }
                                @endphp

                                @foreach ($trending as $thread)
                                    @if($auth_user == null)
                                        @if($thread->age_restriction == 0)
                                            <li class="list-group-item">
                                                <a href="{{ url($thread->path) }}">
                                                    {{ $thread->title }}
                                                </a>
                                            </li>
                                        @endif
                                    @else 
                                        @if($thread->age_restriction == 0)
                                            <li class="list-group-item">
                                                <a href="{{ url($thread->path) }}">
                                                    {{ $thread->title }}
                                                </a>
                                            </li>
                                        @elseif($auth_user->id ==1)
                                            <li class="list-group-item">
                                                <a href="{{ url($thread->path) }}">
                                                    {{ $thread->title }}
                                                </a>
                                            </li>
                                        @elseif($thread->user_id == $auth_user->id)
                                            <li class="list-group-item">
                                                <a href="{{ url($thread->path) }}">
                                                    {{ $thread->title }}
                                                </a>
                                            </li>
                                        @elseif($auth_user->userprivacy->restricted_18==1)
                                            <li class="list-group-item">
                                                <a href="{{ url($thread->path) }}">
                                                    {{ $thread->title }}
                                                </a>
                                            </li>
                                        @elseif($auth_user->userprivacy->restricted_13==1 && $thread->age_restriction==13)
                                            <li class="list-group-item">
                                                <a href="{{ url($thread->path) }}">
                                                    {{ $thread->title }}
                                                </a>
                                            </li>                                    
                                        
                                        @endif
                                    @endif
                                    
                                @endforeach
                            </ul>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
