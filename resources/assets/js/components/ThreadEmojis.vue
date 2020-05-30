<template>
  <div>
    <div class="btn-group btn-group-xs emoji-buttons" >
      <button data-toggle="tooltip" :title="emoji.name" class="btn btn-xs  emoji-btn" :class="[{ 'big-emoji-btn': emoji.id == userEmoji }, emoji.name]"  @click="voteEmoji(emoji.id)" v-for="(emoji, index) in emojis" :key="index"> 
        {{ emoji.count }}
      </button>
  </div>
  </div>
</template>

<script>
export default {
  props:['thread'],
  data(){
    return{
      emojis:null,
      userEmoji:null
    }
  },
  computed:{
    signedIn() {
      return window.App.user ? true : false;
    },
  },

  created(){
    this.getUserEmojiType();
    this.getAllEmojis();
  },
  methods:{
    voteEmoji(type){
      if (!this.signedIn) {
        return false;
      }
      axios.post(`/thread/${this.thread.id}/emojis`,{
          type:type
      }).then(res => {
          if(this.userEmoji !== type){
            this.userEmoji = type
          }else{
            this.userEmoji = null
          }
         this.getAllEmojis();
      });
    },
    getAllEmojis(){
       axios.get(`/thread/${this.thread.id}/emojis`).then(res => {
         this.emojis = res.data;
      });
    },
    getUserEmojiType(){
      if (!this.signedIn) {
        return false;
      }
       axios.get(`/thread/${this.thread.id}/user-emoji-type`).then(res => {
         this.userEmoji = res.data
      });
    }
  }
};
</script>


<style scoped>
  .emoji-buttons{
    margin-top: 5px;
  }
  button.emoji-btn{
        height: 40px;
    background-color: transparent;
    background-size: 20px;
    background-repeat: no-repeat;
    vertical-align: bottom;
    text-align: center;
    padding-top: 20px;
    margin-right: 5px;
    width: 24px;
  }
  button.big-emoji-btn{
    height: 40px;
    background-color: transparent;
    background-size: 32px;
    background-repeat: no-repeat;
    vertical-align: bottom;
    text-align: center;
    padding-top: 28px;
    margin-right: 5px;
    width: 32px;
  }
    .funny{
      background-image :url(/images/emojis/funny.png);
    }
    .sad{
      background-image :url(/images/emojis/sad.png);
    }
    .strange{
      background-image :url(/images/emojis/strange.png);
    }
    .inspiring{
      background-image :url(/images/emojis/inspiring.png);
    }
    .amazing{
      background-image :url(/images/emojis/amazing.png);
    }
    .dumb{
      background-image :url(/images/emojis/dumb1.png);
    }
    .famous{
      background-image :url(/images/emojis/famous.png);
    }
</style>
