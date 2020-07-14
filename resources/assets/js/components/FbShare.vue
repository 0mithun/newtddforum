<template>
    <a :href="threadUrl" target="_blank" class="btn btn-xs facebook-share-btn"  @click.prevent="share">
        <i class="fa fa-facebook-square" aria-hidden="true" ></i> Share
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
                 if(!this.signedIn){
                    this.redirectToLogin();  
                 }
                 
                window.open(this.threadUrl, 'Share on Facebook', 'width=600, height=400')             
            },
            redirectToLogin(){
                window.location =  '/redirect-to?page='+location.pathname;
            },
        }
    }
</script>


<style scoped>
    .facebook-share-btn{
        color: white;
        background-color: #1b6ca8;
    }
</style>