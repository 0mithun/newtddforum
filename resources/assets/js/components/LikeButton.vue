<template>
    <div class="btn-group btn-group-xs pull-left" role="group" >
        <button class="btn btn-xs btn-default ml-a  " @click="toggleLike"  >
            <span class="glyphicon glyphicon-thumbs-up like-icon" :class="likeClass">&nbsp;{{ likesCount }}</span>
        </button>
        <button class="btn btn-xs btn-default ml-a  " @click="toggleDislike"  >
            <span class="glyphicon glyphicon-thumbs-down like-icon" :class="dislikeClass">&nbsp;{{ dislikesCount }}</span>
        </button>

        
       <favorite-thread :thread="thread"></favorite-thread>
        
    </div>
</template>

<script>
import FbShare from './FbShare.vue'
import TwitterShare from './TwitterShare.vue'
    export default {
        props: {
            thread:{
                type:Object
            }
        },
        components:{
            FbShare,
            TwitterShare
        },

        data() {
            return {
                //isDesliked:false
                isLiked:  this.thread.isLiked,
                isDesliked:  this.thread.isDesliked,
                // likesCount:this.thread.likesCount,
                likesCount:0,
                // dislikesCount:this.thread.dislikesCount
                dislikesCount:0
            }
        },
        created(){
            this.getLikesCount();
            this.getDislikeCount();
        },

        computed: {
            likeClass(){
                return [
                    this.isLiked ? 'blue-icon' : 'black-icon'
                ];
            },
            dislikeClass(){
                return [
                    this.isDesliked ? 'red-icon' : 'black-icon'
                ];
            },
             signedIn(){
                return  (window.App.user)? true : false;
            },
        },

        methods: {
            getLikesCount(){
                // this.likesCount = 1;

                axios.get('/thread/' + this.thread.id + '/likes-count').then((res)=>{
                   
                   this.likesCount = res.data
                });
            },
            getDislikeCount(){
                // this.dislikesCount = 1;
                axios.get('/thread/' + this.thread.id + '/dislikes-count').then((res)=>{
                   
                   this.dislikesCount = res.data
                });
            },

            toggleDislike(){
                if(!this.signedIn){
                    return false;
                }
                axios.post('/thread/' + this.thread.id + '/dislikes').then((res)=>{
                    if(this.isDesliked){
                        this.isDesliked = false;
                        this.dislikesCount--;

                    }else{
                        this.isDesliked = true;
                        if(this.isLiked){
                            this.likesCount--;
                        }
                        this.dislikesCount++

                    }
                    this.isLiked=false;
                });
            },
            toggleLike(){
                if(!this.signedIn){
                    return false;
                }

                axios.post('/thread/' + this.thread.id + '/likes').then((res)=>{
                    if(this.isLiked){
                        this.isLiked = false;
                        this.likesCount--;
                    }else{
                        this.isLiked = true;
                        if(this.isDesliked){
                            this.dislikesCount--;
                        }
                        this.likesCount++
                    }
                    this.isDesliked=false;
                });
            },

        }
    }
</script>