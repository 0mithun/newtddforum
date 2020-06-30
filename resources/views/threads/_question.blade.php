{{-- Editing the question. --}}

@include('threads._edit')




{{-- Viewing the question. --}}
<div  class="panel panel-default" v-else>
    <div class="panel-heading">
        <div class="media">
            <div class="row">
                <div class="col-md-11">
                    <h2 class="media-heading" v-text="title" style="margin-bottom: 10px;"></h2>
                </div>
                <div class="col-md-1">
                    <div v-if="signedIn">
                        <button v-if="!authorize('isBan')" data-toggle="tooltip" title="Report Thread Creator" class="btn btn-xs btn-danger ml-a red-bg pull-right" @click="reportCreator"  :disabled="isCreatorReported" data-placement="right">
                            <span class="glyphicon glyphicon-flag"></span>
                        </button>
                    </div>
                    <div v-else>
                        <button data-toggle="tooltip" title="Please Login To Report Creator" class="btn btn-xs btn-danger ml-a red-bg pull-right" data-placement="top" onclick="alert('Please log in or sign up')">
                            <span class="glyphicon glyphicon-flag"></span>
                        </button>
                    </div>

                </div>
            </div>    
             
         
            <div class="media-left">

                <a href="#">
                    <img src="{{ asset($thread->creator->avatar_path) }}"
                         alt="{{ $thread->creator->name }}"
                         width="25"
                         height="25"
                         class="avatar-photo">
                </a>
                
            </div>

                <!-- Report Thread -->
            <div  class="row" v-if="userReport">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="report_reason" class="control-label">Reason for report the Creator:</label>
                        <textarea name="report_reason" id="report_reason"  v-model="report_reason" cols="30" rows="2" class="form-control"></textarea>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-xs btn-primary mr-1" @click="makeUserReport">Make Report</button>
                        <button class="btn btn-xs btn-danger mr-1 red-bg" @click="userReport = false">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="media-body" >
                <h4 class="media-heading thread-info">
                    Posted by: 
                        <a href="{{ route('profile', $thread->creator->username)  }}">{{ $thread->creator->name }}</a>


                        <user-online :user="{{ json_encode($thread->creator) }}" type="message"></user-online>
                    </a>
                    {{ $thread->created_at->diffForHumans()  }}
                </h4>
            </div>            
        </div>
        <div class="row" style="margin-top: 0px;">
            <div class="col-md-1">

            </div>
            <div class="col-md-10" style="padding: 0px;">

                <div class="">
                        {{ $thread->visits }} {{ str_plural('view', $thread->visits) }}, 
                        
                        {{ $thread->like_count }}  {{ str_plural('like', $thread->like_count) }},


                        {{ $thread->replies->count() }}  {{ str_plural('reply', $thread->replies->count()) }},


                        {{ $thread->favorite_count }} <span class="glyphicon glyphicon-heart red-icon " style="font-size: 12px;"></span>,

                        {{ $thread->word_count }} words
                        
                        <div class="btn-group btn-group-xs " v-if="signedIn">
                                                      

                            {{-- <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg pull-right" @click="reportReply"  :disabled="isThreadReported" data-placement="left">
                                <span class="glyphicon glyphicon-flag"></span>
                            </button> --}}

                            <div class="btn-group " v-if="!authorize('isBan')">
                                @include('threads._socialshare') 
                                <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg " @click="reportReply"  :disabled="isThreadReported"  data-placement="left">
                                    <span class="glyphicon glyphicon-flag"></span>
                                </button>
        
                                <button type="button" class="btn btn-default dropdown-toggle btn-xs" title="Report Thread Age Restriction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :disabled="isThreadReported">
                                  <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" >
                                    @if(auth()->id() == 1)
                                        <li><a href="#" @click.prevent="makeRestrictionReport('Should be Pg-13', 0)">Under 13</a></li>
                                    @endif
                                    <li><a href="#" @click.prevent="makeRestrictionReport('Should be Pg-13', 13)">Should be Pg-13</a></li>
                                    <li><a href="#" @click.prevent="makeRestrictionReport('Should be rated R', 18)">Should be rated R</a></li>
                                </ul>
                              </div>                           
                            
                        </div>
                        <div  class="btn-group btn-group-xs "  data-toggle="tooltip" title="Please log in or sign up" v-else >
                            
                            <button  class="btn btn-xs btn-default" style="padding:0px;" type="button"data-placement="left" onclick="alert('Please log in or sign up')">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-xs btn-default" style="padding:0px;" type="button"data-placement="left"  onclick="alert('Please log in or sign up')">
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-xs btn-danger ml-a red-bg pull-right"  data-placement="left" onclick="alert('Please log in or sign up')">
                                <span class="glyphicon glyphicon-flag"></span>
                            </button> 

                        </div>  
                </div>
            </div>
        </div>

    </div>






    <div class="panel-body" style="min-height: 345px;">
        
        <a id="single_image" href="{{ $thread->threadImagePath() }}" ><img src="{{ $thread->threadImagePath() }}" alt="" style="display:inline; float:left;margin-bottom:0px;margin-right:20px;" width="250" /></a>

        <div  v-html="body" style="display:inline;">      
        </div>   
        
        <div >
            @if($thread->source !=null)
                <a href="{{ $thread->source }}" target="_blank">{!! $thread->source !!}</a>
            @endif
        </div>  
    </div>



    <div class="panel-footer thread-buttons">

        <div class="row" >
            <div class="col-md-8 tag-list" style="padding-left: 15px;">  
                @if($thread->tags->count())
                    Tagged: 
                    @foreach($thread->tags as $tag)
                        <span> <a href="{{ strtolower(route('tags.threads.list', $tag->name))  }}">{{ strtolower($tag->name)  }}</a> </span>
                    @endforeach
                @endif

                <div class=" col-md-12"  v-if="authorize('owns', thread)" style="margin-top:5px;">
                    <button class="btn btn-xs" @click="startEdit" v-if="!authorize('isBan')">Edit</button>
                    
                </div>

            </div>
            <div class="col-md-4" style="padding: 0px;padding-right:5px;" v-if="!authorize('isBan')">                
                <div class=" pull-right" role="group" v-if="signedIn ">
                     <div class="btn-group  btn-group-xs pull-right">
                        <like-button :thread="{{ $thread }}"></like-button>
                       
                        <favorite-thread :thread="thread"></favorite-thread>
                        @include('threads._socialshare')
                        <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg " @click="reportReply"  :disabled="isThreadReported"  data-placement="left">
                            <span class="glyphicon glyphicon-flag"></span>
                        </button>

                        <button type="button" class="btn btn-default dropdown-toggle btn-xs" title="Report Thread Age Restriction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :disabled="isThreadReported">
                          <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu age-restrictd-dropdown" style="left:45px;top:50%">
                            @if(auth()->id() == 1)
                                <li><a href="#" @click.prevent="makeRestrictionReport('Should be Pg-13', 0)">Under 13</a></li>
                            @endif
                            <li><a href="#" @click.prevent="makeRestrictionReport('Should be Pg-13', 13)">Should be Pg-13</a></li>
                            <li><a href="#" @click.prevent="makeRestrictionReport('Should be rated R', 18)">Should be rated R</a></li>
                        </ul>
                      </div>
                      <thread-emojis :thread="{{ $thread }}" v-if="!authorize('isBan')"></thread-emojis>
                </div>

                

                <div class="btn-group btn-group-xs pull-right" data-toggle="tooltip" title="Please log in or sign up" v-else  onclick="alert('Please log in or sign up')">
                    <like-button :thread="{{ $thread }}"></like-button>
                    <favorite-thread :thread="thread"></favorite-thread>
                    
                    <fb-share :thread="thread"></fb-share>
                    <twitter-share :thread="thread"></twitter-share>
                    
                    <button data-toggle="tooltip"  class="btn btn-xs btn-danger ml-a red-bg" data-placement="left">
                        <span class="glyphicon glyphicon-flag"></span>
                    </button>
                    <button type="button" class="btn btn-default dropdown-toggle btn-xs" title="Report Thread Age Restriction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :disabled="isThreadReported">
                        <span class="caret"></span>
                      </button>
                    <ul class="dropdown-menu age-restrictd-dropdown">
                        <li><a href="#" >Should be Pg-13</a></li>
                        <li><a href="#" >Should be rated R</a></li>
                    </ul>
                    <thread-emojis :thread="{{ $thread }}"></thread-emojis>
                   
                </div>
                
                
            </div>  
            <star-rating :thread="{{ $thread }}"></star-rating>          
        </div>


        
        <!-- Report Thread -->
        <div v-if="report" class="row" >
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

    </div>
</div>




