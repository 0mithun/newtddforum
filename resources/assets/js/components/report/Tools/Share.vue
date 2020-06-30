<template>
    <div>
         <div class="btn-group btn-group-xs ">
            <div class="btn-group " v-if="!authorize('isBan')">
                <!-- @include('threads._socialshare')  -->
                <button data-toggle="tooltip" title="Report Thread" class="btn btn-xs btn-danger ml-a red-bg " data-placement="left">
                    <span class="glyphicon glyphicon-flag"></span>
                </button>

                <button type="button" class="btn btn-default dropdown-toggle btn-xs" title="Report Thread Age Restriction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" >

                    <!-- @if(auth()->id() == 1)
                        <li><a href="#" @click.prevent="makeRestrictionReport('Should be Pg-13', 0)">Under 13</a></li>
                    @endif -->

                    <li><a href="#" >Should be Pg-13</a></li>
                    <li><a href="#" >Should be rated R</a></li>
                </ul>
                </div>                           
            
        </div>
        <div  class="btn-group btn-group-xs "  data-toggle="tooltip" title="Please log in or sign up" >
            
            <button  class="btn btn-xs btn-default" style="padding:0px;" type="button" data-placement="left" onclick="alert('Please log in or sign up')">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </button>

            <button class="btn btn-xs btn-default" style="padding:0px;" type="button" data-placement="left"  onclick="alert('Please log in or sign up')">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </button>

            <button class="btn btn-xs btn-danger ml-a red-bg pull-right"  data-placement="left" onclick="alert('Please log in or sign up')">
                <span class="glyphicon glyphicon-flag"></span>
            </button> 
        </div>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>