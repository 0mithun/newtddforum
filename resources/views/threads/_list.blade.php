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
        <div class="card-header">
            <a href="{{ $thread->path() }}"> 
                <img src="{{ $thread->threadImagePath }}" class="img-responsive" alt="Responsive image">
            </a>
        </div>
        <div class="panel-body">
            <div class="thread_title">
                    <a href="{{ $thread->path() }}"> <strong> {{ $thread->title }}</strong></a> 
            </div>
            <div class="thread_excerpt">
                {!! $thread->excerpt !!}
            </div>
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
        <div class="panel-footer">
            <div class="row">
                <div class="col-md-3 social-share-btn">
                    <fb-share :thread="{{ $thread }}"></fb-share>
                    <twitter-share :thread="{{ $thread }}"></twitter-share>
                </div>
                <div class="col-md-4 thread_item_counts">
                    <view-counts :thread="{{ $thread }}"></view-counts>
                    <comment-counts :comment_counts="{{ $thread->replies_count }}"></comment-counts>
                    <point-counts :like_count="{{ $thread->like_count }}" :dislike_count="{{ $thread->dislike_count }}"></point-counts>
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
            
        </div>
    </div>

@empty
    <p>There are no relevant results at this time.</p>
@endforelse
