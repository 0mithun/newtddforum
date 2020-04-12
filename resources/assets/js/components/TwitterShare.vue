<template>
    <!-- <button class="btn btn-xs btn-default" style="padding:0px">
    <!-- <span :class="classes"  class="glyphicon glyphicon-heart "  @click="toggle"></span> -->
        <!-- <i class="fa fa-twitter-square" aria-hidden="true"></i> -->
    <!-- </button> -->
    <a :href="threadUrl" target="_blank" class="btn btn-xs btn-default" style="padding:0px">
        <i class="fa fa-twitter-square" aria-hidden="true" @click.prevent="share"></i>
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
               //return "https://twitter.com/intent/tweet?url="+this.thread.title+"&text="+this.thread.path+"&via=0mithun_mithun"
               //title
               return "https://twitter.com/intent/tweet?url="+this.thread.path+"&text="+this.thread.title+"&via=0mithun_mithun"
            },
             signedIn(){
                return  (window.App.user)? true : false;
            },
        },

        methods: {
            share(){
                
                if(this.signedIn){
                    window.open(this.threadUrl, 'Share on Twitter', 'width=600, height=400')
                }
                return false;
            },
        }
    }
</script>