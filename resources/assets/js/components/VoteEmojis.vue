<template>
  <div class="tools-single-item" >
    <button class="btn  thread-items-show-tools-btn emojis-default-btn" :style="emojiStyle" :class="activeClass">
    </button>
  </div>
</template>



<script>
export default {
  props:['thread'],
  data(){
    return{
      userEmoji:''
    }
  },
  computed:{
    signedIn() {
      return window.App.user ? true : false;
    },
    emojiStyle(){
        return {
            backgroundImage: this.userEmoji !='' ? 'url(/images/emojis/'+this.userEmoji.name+'.png)' : 'url(/images/emojis/funny.png)'
        }
    },
    activeClass() {
      return [ this.userEmoji !='' ? "active-emoji" : "inactive-emoji"];
    },
  },

  created(){
    this.getUserEmojiType();
    
    window.events.$on('VoteUserEmojis', emoji=>{
      this.userEmoji = emoji;
    });
  },
  methods:{

    getUserEmojiType(){
      if (!this.signedIn) {
        return false;
      }
       axios.get(`/thread/${this.thread.id}/user-emoji-type`).then(res => {
         this.userEmoji = res.data
      }).catch(err=>{
        
      });
    }
  }
};
</script>


<style scoped>
  
  .emojis-default-btn{
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: center;
  }
    .active-emoji{
        color: #ffa931;
        border: 2px solid #ffa931;
        background-size: 40px;
    }
    .inactive-emoji{
        color: #92959e;
        border: 2px solid #92959e;
    }
</style>
