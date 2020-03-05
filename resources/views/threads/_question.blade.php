{{-- Editing the question. --}}

@include('threads._edit')




{{-- Viewing the question. --}}
<div class="panel panel-default" v-else>
    <div class="panel-heading">
        <div class="panel-heading" style="display: block;overflow: hidden;"> <div class="pull-left"><h4  v-text="title"></h4> </div> <div class="pull-right">
                <favorite-thread :thread="{{ $thread }}" v-if="signedIn "></favorite-thread>
            </div> </div>
        <div class="media">
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
                <h4 class="media-heading thread-info">
                    Posted by: <a href="/threads?by={{ $thread->creator->username  }}">{{ $thread->creator->name }}</a>
                    {{ $thread->created_at->diffForHumans()  }}
                </h4>

                

            </div>
        </div>

    </div>

    <div class="panel-body" >
        <img class="" style="display:inline; float:left;margin-right:20px;margin-bottom:0px" width="250"  src="{{ $thread->threadImagePath() }}" alt="...">
        <div  v-html="body" style="display:inline">
            
        </div>     
        
        <div v-if="showSource">
            <!-- <a href="{{ $thread->source }}" target="_blank">{!! $thread->source !!}</a> -->
            {!! $thread->source !!}
            <br>
            <button class="btn btn-danger btn-xs" @click="showSource = false">Close</button>
        </div>
  



    </div>



    <div v-if="report" class="panel-body">
        <div class="form-group">
            <label for="report_reason">Reason for report the thread:</label>
            <textarea name="report_reason" id="report_reason"  v-model="report_reason" cols="30" rows="2" class="form-control"></textarea>
        </div>

        <div class="form-group">
            <button class="btn btn-xs btn-primary mr-1" @click="makeReport">Make Report</button>
            <button class="btn btn-xs btn-danger mr-1 red-bg" @click="report = false">Cancel</button>
        </div>
    </div>


    <div class="panel-footer">

        <div class="row">
            <div class="col-md-2 source-button">
                @if($thread->source)
                    <button class="btn btn-primary btn-xs" @click="showSource = true" v-if="!showSource">View Source</button> 
                @endif
            </div>
            <div class="col-md-5 tag-list">           
                Tagged: 
                @foreach($thread->tags as $tag)
                    <span> <a href="{{ route('tags.threads.list', $tag->name)  }}">{{ $tag->name  }}</a> </span>
                @endforeach
            </div>



        </div>

        <div class="row">
            <div class=" col-md-12"  v-if="authorize('owns', thread)">
                <button class="btn btn-xs" @click="startEdit">Edit</button>
            </div>
            <div class="col-md-12">
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

            </div>
        </div>
    </div>
</div>

