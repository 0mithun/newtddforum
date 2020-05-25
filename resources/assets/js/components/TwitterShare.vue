<template>
    <a :href="threadUrl" target="_blank" class="btn btn-xs btn-default" style="padding:0px;">
        <i class="fa fa-twitter-square" aria-hidden="true" @click.prevent="share" style="font-size:18px"></i>
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