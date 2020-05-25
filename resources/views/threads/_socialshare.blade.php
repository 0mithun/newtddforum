@php
    $creatorPrivacy =  $thread->creator->userprivacy;
@endphp


@if($creatorPrivacy->anyone_share_my_thread_facebook == 1)                            
    <fb-share :thread="thread"></fb-share>                            
@else
    <button  class="btn btn-xs btn-default" style="padding:0px;" type="button"data-placement="left" data-toggle="tooltip" title="You have no permission" disabled>
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
    </button>
@endif

@if($creatorPrivacy->anyone_share_my_thread_twitter == 1) 
    <twitter-share :thread="thread"></twitter-share>
@else 
    <button class="btn btn-xs btn-default" style="padding:0px;" type="button"data-placement="left" data-toggle="tooltip" title="You have no permission" disabled>
        <i class="fa fa-twitter-square" aria-hidden="true"></i>
    </button>
@endif