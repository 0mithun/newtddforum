<template>
    <a :href="threadUrl" target="_blank" class="btn btn-xs btn-default" style="padding:0px;" @click.prevent="share"    >
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
                // return 'https://www.facebook.com/sharer/sharer.php?u='+ this.thread.path + '&quote='+this.thread.title+'&title='+this.thread.title;
                return 'https://www.facebook.com/sharer/sharer.php?u='+ this.thread.path +'&title='+this.thread.title;
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