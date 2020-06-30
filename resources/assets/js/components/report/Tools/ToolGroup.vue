<template>
    <div>
        <div class=" pull-right" role="group">
                     <div class="btn-group  btn-group-xs pull-right">
                        <like-button :thread="thread"></like-button>
                       
                        <favorite-thread :thread="thread"></favorite-thread>
                        <!-- @include('threads._socialshare') -->
                        <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg "   data-placement="left">
                            <span class="glyphicon glyphicon-flag"></span>
                        </button>

                        <button type="button" class="btn btn-default dropdown-toggle btn-xs" title="Report Thread Age Restriction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                          <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu age-restrictd-dropdown" style="left:45px;top:50%">

                            <!-- @if(auth()->id() == 1)
                                <li><a href="#" @click.prevent="makeRestrictionReport('Should be Pg-13', 0)">Under 13</a></li>
                            @endif -->

                            <li><a href="#" >Should be Pg-13</a></li>
                            <li><a href="#" >Should be rated R</a></li>
                        </ul>
                      </div>
                      <thread-emojis :thread="thread" v-if="!authorize('isBan')"></thread-emojis>
                </div>

                

                <div class="btn-group btn-group-xs pull-right" data-toggle="tooltip" title="Please log in or sign up" onclick="alert('Please log in or sign up')">
                    <like-button :thread="thread"></like-button>
                    <favorite-thread :thread="thread"></favorite-thread>
                    
                    <fb-share :thread="thread"></fb-share>
                    <twitter-share :thread="thread"></twitter-share>
                    
                    <button data-toggle="tooltip"  class="btn btn-xs btn-danger ml-a red-bg" data-placement="left">
                        <span class="glyphicon glyphicon-flag"></span>
                    </button>
                    <button type="button" class="btn btn-default dropdown-toggle btn-xs" title="Report Thread Age Restriction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="caret"></span>
                      </button>
                    <ul class="dropdown-menu age-restrictd-dropdown">
                        <li><a href="#" >Should be Pg-13</a></li>
                        <li><a href="#" >Should be rated R</a></li>
                    </ul>
                    <thread-emojis :thread="thread"></thread-emojis>
                   
                </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>