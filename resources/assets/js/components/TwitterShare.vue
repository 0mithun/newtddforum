<template>
    <a :href="threadUrl" target="_blank" class="btn btn-xs twitter-share-btn" @click.prevent="share">
        <i class="fa fa-twitter" aria-hidden="true" @click.prevent="share"></i> Share
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
               return "https://twitter.com/intent/tweet?url="+this.thread.path+"&text="+this.thread.title+"&via=anecdotage_com"
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
                
                window.open(this.threadUrl, 'Share on Twitter', 'width=600, height=400')

            },
            redirectToLogin(){
                window.location =  '/redirect-to?page='+location.pathname;
            },
        }
    }
</script>


<style scoped>
    .twitter-share-btn{
        /* padding: 5px; */
        color: white;
        background-color: #12cad6;
    }
</style>