@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row top-margin">
        <search-threads :threads="{{ json_encode($threads )}}" query="{{ $query }}"></search-threads>

            {{-- <div class="col-md-8">
                @foreach ($threads as $thread)
                    <li>
                        <a href="{{ $thread->path }}">
                            {{ $thread->title }}
                        </a>
                    </li>
                @endforeach
            </div>
            <div class="col-md-4">
                <div class="panel">
                    <div class="panel-heading">
                        Search
                    </div>
                    <div class="panel-body">
                        <form action="">
                            <div class="form-group">
                                <input type="text" name="q" id="q" class="form-control" placeholder="Search Threads">
                            </div>
                        </form>
                    </div>
                </div>
            </div> --}}
{{--            
            
            <ais-index
                app-id="{{ config('scout.algolia.id') }}"
                api-key="{{ config('scout.algolia.key') }}"
                index-name="threads"
                query="{{ request('q') }}"
            >
                <div class="col-md-8">
                    <ais-results>
                        <template scope="{ result }">
                            <li>
                                <a :href="result.path">
                                    <ais-highlight :result="result" attribute-name="title"></ais-highlight>
                                </a>
                            </li>
                        </template>
                    </ais-results>
                </div>



                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Search
                        </div>

                        <div class="panel-body">
                            <ais-search-box>
                                <ais-input placeholder="Find a thread..." :autofocus="true" class="form-control"></ais-input>
                            </ais-search-box>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Filter By Channel
                        </div>

                        <div class="panel-body">
                            <ais-refinement-list attribute-name="channel.name"></ais-refinement-list>
                        </div>
                    </div>

                    @if (count($trending))
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                Trending Threads
                            </div>

                            <div class="panel-body">
                                <ul class="list-group">
                                    @foreach ($trending as $thread)
                                        <li class="list-group-item">
                                            <a href="{{ url($thread->path) }}">
                                                {{ $thread->title }}
                                            </a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif
                </div>
            </ais-index> --}}




        </div>
    </div>
@endsection
