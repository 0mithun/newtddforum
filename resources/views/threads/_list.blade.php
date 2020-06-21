@php
    $restriction = 0;
    $userId = null;
    if(auth()->check()){
        $user = auth()->user();
        $userId = $user->id;
        $restriction = $user->userprivacy->show_restricted;
    }    

@endphp
@forelse ($threads as $thread)
        <div class="panel panel-default">

            <div class="panel-heading">
                <div class="panel-heading" style="padding-left: 0px;">
                        <a href="{{ $thread->path() }}" style="font-size: 20px;">
                            @if (auth()->check() && $thread->hasUpdatesFor(auth()->user()))
                                <strong>
                                    {{ $thread->title }}
                                </strong>
                            @else
                                {{ $thread->title }}
                            @endif
                        </a>
                    <span style="font-size:16px"> {{ $thread->word_count }} Words</span>
                </div>
                @if($thread->anonymous ==1)
                    <div class="media" style="margin-top: 0px;">
                        <div class="media-left">
                            <a href="#">
                                <img src="{{ asset('images/default.png') }}"
                                    alt="{{ $thread->creator->name }}"
                                    width="25"
                                    height="25"
                                    class="mr-1 avatar-photo">
                            </a>
                        </div>
                        <div class="media-body">
                            <div class="col-md-9" style="padding:0px;">
                                <h4 class="media-heading thread-info">
                                        anonymous                                   
                                    <small> Posted: {{ $thread->created_at->diffForHumans()  }}</small>                                
                                </h4>
                            </div>                 

                        </div>
                    </div>
                @else
                    <div class="media" style="margin-top: 0px;">
                        <div class="media-left">
                            <a href="#">
                                <img src="{{ asset($thread->creator->avatar_path) }}"
                                    alt="{{ $thread->creator->name }}"
                                    width="25"
                                    height="25"
                                    class="mr-1 avatar-photo">
                            </a>
                        </div>
                        <div class="media-body">
                            <div class="col-md-9" style="padding:0px;">
                                <h4 class="media-heading thread-info">
                                    <a href="{{ route('profile', $thread->creator->username)  }}">{{ $thread->creator->name }}</a>
                                    <user-online :user="{{ json_encode($thread->creator) }}"></user-online>
                                   
                                    <small> Posted: {{ $thread->created_at->diffForHumans()  }}</small>                                
                                </h4>
                            </div>                 

                        </div>
                    </div>
                @endif
            </div>

            <div class="panel-body">
                
                <div class="media">
                    <div class="media-left">
                    <a href="#">
                    <img class="media-object " width="80" height="60" src="{{ $thread->threadImagePath }}" alt="...">
                    </a>
                    </div>
                    <div class="media-body">
                        {!! $thread->excerpt !!}
                    </div>
                </div>

                {{-- <div class="body"></div> --}}
            </div>

            <div class="panel-footer">
                {{ $thread->visits }} {{  str_plural('visit', $thread->visits) }}
            </div>
        </div>



@empty
    <p>There are no relevant results at this time.</p>
@endforelse