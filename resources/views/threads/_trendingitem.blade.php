<div class="panel">
    <div class="card-header">
        <img src="{{ $thread->threadImagePath }}" class="img-responsive" alt="Responsive image">
        {{-- @php 
            dd($thread);
        @endphp --}}
    </div>
    <div class="panel-body">
        <div class="trendig_thread_title">
            <a href="{{ $thread->path }}"> <strong> {{ $thread->title }}</strong></a> 
        </div>
        <div class="trendong_footer">
            <comment-counts color="#ff4301" :comment_counts="{{ $thread->replies_count }}"></comment-counts>
            <point-counts :like_count="{{ $thread->like_count }}" :dislike_count="{{ $thread->dislike_count }}"></point-counts>
        </div>
    </div>
</div>