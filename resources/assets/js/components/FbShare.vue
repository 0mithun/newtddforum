<template>
    <!-- <button class="btn btn-xs btn-default" style="padding:0px">
    <!-- <span :class="classes"  class="glyphicon glyphicon-heart "  @click="toggle"></span> -->
        <!-- <i class="fa fa-facebook-square" aria-hidden="true"></i> -->
    <!-- </button> -->

    <a :href="threadUrl" target="_blank" class="btn btn-xs btn-default" style="padding:0px" @click.prevent="share"    >
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
    </a>


</template>

<script>
    export default {
        props: {
            thread:{
                type:Object
            }
        },


        computed: {
            
            threadUrl(){
                return 'https://www.facebook.com/sharer/sharer.php?u='+ this.thread.path
            },
            signedIn(){
                return  (window.App.user)? true : false;
            },
        },

        methods: {
             share(){
                 if(this.signedIn){
                    window.open(this.threadUrl, 'Share on Facebook', 'width=600, height=400')
                 }
                 return false;
                
            },
        }
    }
</script>