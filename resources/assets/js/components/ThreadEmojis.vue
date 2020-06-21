<template>
  <div>
    <div class="btn-group btn-group-xs emoji-buttons" >
      <button data-toggle="tooltip" 
        :title="emoji.name" class="btn btn-xs  emoji-btn" 
        :class="[{ 'big-emoji-btn': emoji.id == userEmoji }, emoji.name]" 
        v-bind:style="{ 'background-image': 'url(/images/emojis/' + emoji.name + '.png)' }" 
        @click="voteEmoji(emoji.id)" v-for="(emoji, index) in emojis" 
        :key="index"
      > 
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
      }).catch(err=>{
        
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

</style>
