{{-- Editing the question. --}}

@include('threads._edit')




{{-- Viewing the question. --}}
<div class="panel panel-default" v-else>
    <div class="panel-heading">
        <div class="media">    
        <h2 class="media-heading" v-text="title" style="margin-bottom: 10px"></h2>
         
            <div class="media-left">

                <a href="#">
                    <img src="{{ asset($thread->creator->avatar_path) }}"
                         alt="{{ $thread->creator->name }}"
                         width="25"
                         height="25"
                         class="mr-1 avatar-photo">
                </a>
                {{-- <a href="{{ asset($thread->creator->avatar_path) }}" data-lightbox="{{ asset($thread->creator->avatar_path) }}" data-title="My caption">Image #1</a> --}}
                
            </div>
            <div class="media-body">
                <h4 class="media-heading thread-info">
                    Posted by: 

                    {{-- <a href="{{ route('threadsbyuser', $thread->creator->username) }}">{{ $thread->creator->name }}  --}}
                        <a href="{{ route('profile', $thread->creator->username)  }}">{{ $thread->creator->name }}</a>


                    <user-online :user="{{ json_encode($thread->creator) }}" type="message"></user-online>
                    </a>
                    {{ $thread->created_at->diffForHumans()  }}
                </h4>
            </div>            
        </div>
        <div class="media" style="margin-top: 0px">
            <div class="col-md-1">

            </div>
            <div class="col-md-10" style="padding: 0px">

                <div class="media-body">
                    @php 

                    //dd($thread);

                    @endphp
                        {{ $thread->visits }} {{ str_plural('view', $thread->visits) }}, 
                        
                        {{ $thread->like_count }}  {{ str_plural('like', $thread->like_count) }},


                        {{ $thread->replies->count() }}  {{ str_plural('reply', $thread->replies->count()) }},


                        {{ $thread->favorites->count() }} <span class="glyphicon glyphicon-heart red-icon " style="font-size: 12px;"></span>,

                        {{ $thread->word_count }} words
                        
                        <div class="btn-group btn-group-xs ">
                            
                            <fb-share :thread="thread"></fb-share>
                            <twitter-share :thread="thread"></twitter-share>
                            <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg pull-right" @click="reportReply"  :disabled=thread.isReported  data-placement="left">
                                <span class="glyphicon glyphicon-flag"></span>
                            </button>
                        </div>
                        


                </div>
            </div>
        </div>

    </div>






    <div class="panel-body" >
        <a id="single_image" href="{{ $thread->threadImagePath() }}" ><img src="{{ $thread->threadImagePath() }}" alt="" style="display:inline; float:left;margin-bottom:0px;margin-right:20px" width="250" /></a>

        {{-- <a href="{{ $thread->threadImagePath() }}" data-lightbox="{{ $thread->threadImagePath() }}" data-title="My caption">Image #1</a> --}}

        {{-- <img class="" style="display:inline; float:left;margin-right:20px;margin-bottom:0px" width="250"  src="{{ $thread->threadImagePath() }}" alt="..."> --}}

        <div  v-html="body" style="display:inline;">            
        </div>   
        
        <div >
            <a href="{{ $thread->source }}" target="_blank">{!! $thread->source !!}</a>
        </div>
  



    </div>



    


    <div class="panel-footer">

        <div class="row">
            <!-- <div class="col-md-2 source-button">
                @if($thread->source)
                    <button class="btn btn-primary btn-xs" @click="showSource = true" v-if="!showSource">View Source</button> 
                @endif
            </div> -->
            <div class="col-md-9 tag-list" style="padding-left: 15px">  
                @if($thread->tags->count())
                    Tagged: 
                    @foreach($thread->tags as $tag)
                        <span> <a href="{{ route('tags.threads.list', $tag->name)  }}">{{ $tag->name  }}</a> </span>
                    @endforeach
                @endif
                
            </div>
            <div class="col-md-3" style="padding: 0px;padding-right:5px">                
                <div class="btn-group btn-group-xs pull-right" role="group" >
                    <like-button :thread="{{ $thread }}"></like-button>
                    <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg pull-right" @click="reportReply"  :disabled=thread.isReported  data-placement="left">
                        <span class="glyphicon glyphicon-flag"></span>
                    </button>
                </div>
            </div>            
        </div>
        <!-- Report Thread -->
        <div v-if="report" class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="report_reason" class="control-label">Reason for report the thread:</label>
                    <textarea name="report_reason" id="report_reason"  v-model="report_reason" cols="30" rows="2" class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <button class="btn btn-xs btn-primary mr-1" @click="makeReport">Make Report</button>
                    <button class="btn btn-xs btn-danger mr-1 red-bg" @click="report = false">Cancel</button>
                </div>
            </div>
        </div>



        <div class="row">
            <div class=" col-md-12"  v-if="authorize('owns', thread)">
                <button class="btn btn-xs" @click="startEdit">Edit</button>
            </div>
            
            <!-- Change like/dislike posistion to top -->

            <!-- <div class="col-md-12">
                <div v-if=signedIn >
                    <div class="col-md-8">
                    </div>
                    <div class="col-md-4">
                        <div class="btn-group btn-group-xs pull-right" role="group" >
                            <like-button :thread="{{ $thread }}"></like-button>
                            <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg pull-right" @click="reportReply" v-if="!report" :disabled=thread.isReported  data-placement="left">
                                <span class="glyphicon glyphicon-flag"></span>
                            </button>
                        </div>
                    </div>
                </div>

            </div> -->

            <!-- Change like/dislike posistion to top -->


        </div>
    </div>
</div>

<simple-map :thread="{{ $thread }}"></simple-map>

