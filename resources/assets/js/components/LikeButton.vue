<template>
    <div class="btn-group btn-group-xs pull-left like-buttons" role="group" >
        
       <div class="emoji-icons-div" style="background:green">
			<div class="box">
				<div class="Like">
					
					<a class="Like__link js-hover" style="visibility:hidden">Like <kbd>hover me!!</kbd>
					</a>
					<div class="Emojis" v-if="visibleEmoticion">
						<div class="Emoji Emoji--like" @click="toggleLike(1, false)">
							<div class="icon icon--like"></div>
						</div>
						<div class="Emoji Emoji--love" @click="toggleLike(2,false)">
							<div class="icon icon--heart"></div>
						</div>
						<div class="Emoji Emoji--haha" @click="toggleLike(3, false)">
							<div class="icon icon--haha"></div>
						</div>
						<div class="Emoji Emoji--wow" @click="toggleLike(4, false)">
							<div class="icon icon--wow"></div>
						</div>
						<div class="Emoji Emoji--sad" @click="toggleLike(5, false)">
							<div class="icon icon--sad"></div>
						</div>
						<div class="Emoji Emoji--angry" @click="toggleLike(6, false)">
							<div class="icon icon--angry"></div>
						</div>
					</div>
				</div>
			</div>

        </div>

        <button class="btn btn-xs btn-default ml-a  like-emoji-icon " @click="toggleLike(1, true)" @mouseenter="showEmoticion">
            <span class="glyphicon glyphicon-thumbs-up like-icon" :class="likeClass">&nbsp;{{ likesCount }}</span>
        </button>
        <button class="btn btn-xs btn-default ml-a  " @click="toggleDislike"  >
            <span class="glyphicon glyphicon-thumbs-down like-icon" :class="dislikeClass">&nbsp;{{ dislikesCount }}</span>
        </button>

        
       <favorite-thread :thread="thread"></favorite-thread>

	   <div style="background:red"  class="small-emoticion-icons" :class="{'small-emoticion-icons-left-margin':!isLiked}">
			<div class="like-type-users" v-if="showLikeTypeUser">
        <span v-for="(user, index) in likeTypeUsers" :key="index">{{user}} <br /> </span>

        <span v-if="loadingUser">loading...</span>
			</div>

			<button class="emoji-like-counts" :class="emojiClass" style="margin-top:5px;padding-bottom:3px;" >
			</button>




      <button class="emoji-like-counts " :class="smallEmojiClass(likeType)"  @mouseenter="likeTypeUserHandle(likeType)" @mouseout="showLikeTypeUser = false" v-for=" (likeType, index) in allLikeTypes" :key="index">
			</button>



      <!-- <button class="emoji-like-counts emoji-like-small" @mouseenter="likeTypeUserHandle('like')" @mouseleave="showLikeTypeUser = false" >
			</button>

			<button class="emoji-like-counts emoji-love-small" @mouseenter="likeTypeUserHandle('love')" @mouseleave="showLikeTypeUser = false">
			</button>

			<button class="emoji-like-counts emoji-haha-small" @mouseenter="likeTypeUserHandle('haha')" @mouseleave="showLikeTypeUser = false" >
			</button>
			<button class="emoji-like-counts emoji-wow-small" @mouseenter="likeTypeUserHandle('wow')" @mouseleave="showLikeTypeUser = false" >
			</button>
			<button class="emoji-like-counts emoji-sad-small" @mouseenter="likeTypeUserHandle('sad')" @mouseleave="showLikeTypeUser = false" >
			</button>
			<button class="emoji-like-counts emoji-angry-small" @mouseenter="likeTypeUserHandle('angry')" @mouseleave="showLikeTypeUser = false"  >
			</button> -->

		</div>
        
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
              dislikesCount:0,
              visibleEmoticion:false,
              showLikeTypeUser:false,
              emojiType: null,
              allLikeTypes:null,
              likeTypeUsers:null,
              loadingUser:false
            }
        },
        created(){
            this.getLikesCount();
            this.getDislikeCount();
            this.getUserLikeType();
            this.getThreadAllLikeType();
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

            

            emojiClass(){
              if(this.emojiType==1){
                return 'emoji-like-big'
              }
              else if(this.emojiType==2){
                return 'emoji-love-big'
              }
              else if(this.emojiType==3){
                return 'emoji-haha-big'
              }
              else if(this.emojiType==4){
                return 'emoji-wow-big'
              }
              else if(this.emojiType==5){
                return 'emoji-sad-big'
              }
              else if(this.emojiType==6){
                return 'emoji-angry-big'
              }else{
                return null;
              }
            }
        },

        methods: {
            smallEmojiClass(type){
              if(type==1){
                return 'emoji-like-small'
              }
              else if(type==2){
                return 'emoji-love-small'
              }
              else if(type==3){
                return 'emoji-haha-small'
              }
              else if(type==4){
                return 'emoji-wow-small'
              }
              else if(type==5){
                return 'emoji-sad-small'
              }
              else if(type==6){
                return 'emoji-angry-small'
              }else{
                return null;
              }
            },
            getThreadAllLikeType(){
              axios.post('/thread/' + this.thread.id + '/all-like-type').then((res)=>{
                   this.allLikeTypes = res.data;
                });
            },
            getUserLikeType(){
              if(this.isLiked){
                axios.post('/thread/' + this.thread.id + '/like-type').then((res)=>{
                   this.emojiType = res.data.emoji_type;
                });
              }
            },
            likeTypeUserHandle(type){

              this.likeTypeUsers = null;
              this.loadingUser = true;
              
              axios.get('/thread/' + this.thread.id + '/like-type-users/'+type).then((res)=>{
                this.loadingUser = false;
                this.likeTypeUsers = res.data;
                this.showLikeTypeUser = true;
              });

              
            },
            showEmoticion(){
              this.visibleEmoticion = true;
              setTimeout(()=> {
                this.visibleEmoticion = false;
              }, 5000);
              
              
              
            },
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
                     this.emojiType = null
                     this.getThreadAllLikeType();
                });
            },
            toggleLike(type, isDelete){
                if(!this.signedIn){
                    return false;
                }

                axios.post('/thread/' + this.thread.id + '/likes',{
                  type:type,
                  isDelete: isDelete
                }).then((res)=>{
                    if(this.isLiked){
                        if(isDelete){
                          this.isLiked = false;
                          this.likesCount--;
                           this.emojiType = null;
                        }else{
                          this.emojiType = type;
                        }
                        
                    }else{
                        this.isLiked = true;
                        if(this.isDesliked){
                            this.dislikesCount--;
                        }
                        this.likesCount++
                        this.emojiType = type;
                    }
                    this.isDesliked=false;
                    this.getThreadAllLikeType();
                });
            },

        }
    }
</script>

<style scoped>
    .like-buttons{
        position: relative;
    }
    .emoji-icons-div{
		    /* background: #ffffff; */
		position: absolute;
		top: -100!important;
		left: 100;
		width: 150px;
		height: 35px;
		margin-top: 3px;
		/* border-radius: 10px; */
		/* border: 1px solid #ccc; */
		/* padding: 5px 15px; */
		right: -55px;
    }

    .emoji-icons{
        color:red;
        font-size: 18px;
        font-weight: bold
    }


.Like {
  display: inline-block;
    margin-top: 20px;
}

.Like__link {
  cursor: pointer;
}

.Emojis {
  position: absolute;
  left: 0;
  bottom: 120%;
  -webkit-transform: translate3d(-10%, 0, 0);
          transform: translate3d(-10%, 0, 0);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: .125rem;
  border-radius: 100rem;
  -webkit-transition: .3s .3s;
  transition: .3s .3s;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  background:white;
}
.Emojis:hover, .Like__link.js-hover ~ .Emojis, .Like__link:hover ~ .Emojis {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
  opacity: 1;
  visibility: visible;
}

.Emoji {
     position: relative;
    width: 3rem;
    height: 3rem;
    color: #ffd972;
    cursor: pointer;
    transition-delay: .6s, .3s;
    transition-duration: 0s, .3s;
    transition-property: transform, opacity;
    opacity: 0;
    transform: translate3d(0, 100%, 0) scale(0.3);
	
}
.Emojis:hover .Emoji, .Like__link.js-hover + .Emojis .Emoji, .Like__link:hover + .Emojis .Emoji {
  -webkit-transform: none;
          transform: none;
  opacity: 1;
}
.Emoji .icon {
    position: absolute;
    position: absolute;
    top: -8px;
    left: -8px;
    right: -10px;
    bottom: -10px;
    transform: scale(0.4);
    transition: transform .2s ease;
    padding: 0px!important;
    
   
}
.Emoji:hover .icon {
  -webkit-transform: scale(0.6) translate3d(0, -10%, 0);
          transform: scale(0.6) translate3d(0, -10%, 0);
}
.Emojis:hover .Emoji:nth-of-type(1), .Like__link:hover + .Emojis .Emoji:nth-of-type(1) {
  -webkit-transition-duration: 0.2s;
          transition-duration: 0.2s;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1);
          transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1);
}
.Emojis:hover .Emoji:nth-of-type(2), .Like__link:hover + .Emojis .Emoji:nth-of-type(2) {
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  -webkit-transition-delay: 0.02s;
          transition-delay: 0.02s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.2);
          transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.2);
}
.Emojis:hover .Emoji:nth-of-type(3), .Like__link:hover + .Emojis .Emoji:nth-of-type(3) {
  -webkit-transition-duration: 0.4s;
          transition-duration: 0.4s;
  -webkit-transition-delay: 0.04s;
          transition-delay: 0.04s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.4);
          transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.4);
}
.Emojis:hover .Emoji:nth-of-type(4), .Like__link:hover + .Emojis .Emoji:nth-of-type(4) {
  -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
  -webkit-transition-delay: 0.06s;
          transition-delay: 0.06s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.6);
          transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.6);
}
.Emojis:hover .Emoji:nth-of-type(5), .Like__link:hover + .Emojis .Emoji:nth-of-type(5) {
  -webkit-transition-duration: 0.6s;
          transition-duration: 0.6s;
  -webkit-transition-delay: 0.08s;
          transition-delay: 0.08s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.8);
          transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 1.8);
}
.Emojis:hover .Emoji:nth-of-type(6), .Like__link:hover + .Emojis .Emoji:nth-of-type(6) {
  -webkit-transition-duration: 0.7s;
          transition-duration: 0.7s;
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
  -webkit-transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 2);
          transition-timing-function: cubic-bezier(0.6, 0.6, 0.5, 2);
}

.Emoji--like {
  /* color: $c-blue; */
}

.Emoji--love {
  /* color: $c-red; */
}

.icon {
  background-image: url("https://media.giphy.com/media/xT9DPr2QnsfTFoykFO/giphy.gif");
  background-repeat: no-repeat;
}

.icon--like {
  background-position: -6px -6px;
}

.icon--heart {
  background-position: -68px -4px;
}

.icon--haha {
  background-position: -129px -6px;
}

.icon--wow {
  background-position: -191px -6px;
}

.icon--sad {
  background-position: -252px -5px;
}

.icon--angry {
  background-position: -314px -6px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}


/* body {
  min-height: 100%;
  margin: 0;
  background-color: #fff;
  color: #222;
  text-align: center;
} */

.intro {
  width: 100%;
  max-width: 30rem;
  padding-bottom: 1rem;
  margin: 0 auto 1em;
  padding-top: .5em;
  text-transform: capitalize;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
}
.intro small {
  display: block;
  opacity: .5;
  font-style: italic;
  text-transform: none;
}

.info {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 1em;
  font-size: .9em;
  font-style: italic;
  font-family: serif;
  text-align: right;
  opacity: .5;
}
.info a {
  color: inherit;
}

kbd {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.05);
  color: #666;
  text-shadow: 1px 1px #fff;
  padding: 1px 2px;
  border-radius: 2px;
  box-shadow: inset 1px 1px 3px -1px rgba(0, 0, 0, 0.5);
}


   .Emoji--like::after,.Emoji--love::after,.Emoji--haha::after,.Emoji--wow::after,.Emoji--sad::after,.Emoji--angry::after{
	    color: white;
    position: absolute;
    width: 40px;
    top: -40;
    left: 0;
    margin-top: -24px;
    background-color: rgb(0, 0, 0,0.6);
    padding: 0px 0px;
    border-radius: 25px;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
		
   }
	.Emoji--like::after{
		content: 'like';
		top: -40;
		left: 0;
		margin-top: -24px;
		display: none;
	}
	.Emoji--like:hover:after{
		display: block;
	}

	.Emoji--love::after{
		content: 'love';
		top: -40;
		left: 0;
		margin-top: -24px;
		display: none;
	}

	.Emoji--love:hover:after{
		display: block;
	}


	.Emoji--haha::after{
		content: 'haha';
		top: -40;
		left: 0;
		margin-top: -24px;
		 width: 45px;
		display: none;

	}

	.Emoji--haha:hover:after{
		display: block;
	}

	.Emoji--wow::after{
		content: 'wow';
		top: -40;
		left: 0;
		margin-top: -24px;
		display: none;
	}
	.Emoji--wow:hover:after{
		display: block;
	}

	.Emoji--sad::after{
		content: 'sad';
		top: -40;
		left: 0;
		margin-top: -24px;
		display: none;
	}

	.Emoji--sad:hover:after{
		display: block;
	}


	.Emoji--angry::after{
		content: 'angry';
		top: -40;
		left: 0;
		margin-top: -24px;
		 width: 50px;
		display: none;
	}
	.Emoji--angry:hover::after{
		display: block;
	}

	.icon[data-v-7a27c6a0] {
		background-image: url(https://media.giphy.com/media/xT9DPr2QnsfTFoykFO/giphy.gif);
		background-repeat: no-repeat;
	}



		.icon[data-v-7a27c6a0] {
		background-image: url(https://media.giphy.com/media/xT9DPr2QnsfTFoykFO/giphy.gif);
		background-repeat: no-repeat;
	}

	button.emoji-like-counts{
		border: none;
		background: none;
		border: none;
		background: none;
		
		background-size: 14px;
		height: 14px;
		width:14px;
		margin-left: 0;
		margin-top: 5px

	}

	

	button.emoji-like-counts.emoji-like-small{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -42px;
	}
	button.emoji-like-counts.emoji-love-small{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -56px;
	}
	button.emoji-like-counts.emoji-haha-small{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -28px;
	}
	button.emoji-like-counts.emoji-wow-small{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -112px;
	}
	button.emoji-like-counts.emoji-sad-small{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -70px;
	}
	button.emoji-like-counts.emoji-angry-small{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -0px;
	}
	button.emoji-like-counts span{
		margin-left: 7px;
    	margin-top: -5px;
		overflow: hidden;
		display: inline-block;
		font-size: 13px;
	}

	.like-type-users{
		color: white;
		position: absolute;
		width: 120px;
		top: -40;
		left: 40px;
		margin-top: -84px;
		background-color: rgb(0, 0, 0,.9);
		padding: 0px 0px;
		border-radius: 5px;
		text-align: left;
		font-size: 12px;
		z-index: 99999999999;
		padding: 5px;
		bottom: 0px;
	}

	.small-emoticion-icons{
		background: red;
		position: relative;
		z-index: 88888;
		top: 0px;
		height: 0px;
	}
	 .emoji-icons-div{
			height: 0px;
	 }

	 .emoji-icons-div{
		 margin-top: -5px;
	 }

	 .like-emoji-icon{
		 border-radius: 3px 0px 0px 3px!important;
	 }


  .like-buttons {
    position: relative;
    width: 106px;
}


   .small-emoticion-icons {
      background: red;
      position: relative;
      z-index: 88888;
      top: 0px;
      height: 0px;
      left: 24px;
      display: block;
      width: 161px;
      display: inline-block;
  }

  button.emoji-like-counts.emoji-like-big, button.emoji-like-counts.emoji-love-big,button.emoji-like-counts.emoji-haha-big,button.emoji-like-counts.emoji-wow-big,button.emoji-like-counts.emoji-sad-big,button.emoji-like-counts.emoji-angry-big{
      border: none;
      background: none;
      border: none;
      background: none;
      
      background-size: 22px;
      height: 22px;
      width:22px;
      margin-left: 0;
      margin-top: 5px
  }

  button.emoji-like-counts.emoji-like-big{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -42px;
	}

  button.emoji-like-counts.emoji-like-big{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -66px;
	}

   button.emoji-like-counts.emoji-love-big{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -88px;
	}

   button.emoji-like-counts.emoji-haha-big{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -44px;
	}


   button.emoji-like-counts.emoji-wow-big{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -176px;
	}

  button.emoji-like-counts.emoji-sad-big{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px -110px;
	}

  button.emoji-like-counts.emoji-angry-big{
		background-image: url(/images/png/facebook_iconset.png);
		background-repeat: no-repeat;
		background-position: 0px 0px;
	}

  button.emoji-like-counts {
    margin-right: 8px;
}

.small-emoticion-icons{
  left:0px
}

.small-emoticion-icons-left-margin{
  left:-20px;
}

.emoji-icons-div{
    margin-top: -10px;
}

</style>