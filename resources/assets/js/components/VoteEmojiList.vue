<template>
    <div class="emoji-list-buttons" >
      <button data-toggle="tooltip" 
        :title="emoji.name" class="btn emoji-btn" 
        v-bind:style="{'background-image': 'url(/images/emojis/' + emoji.name + '.png)' }" 
        @click="voteEmoji(emoji)" v-for="(emoji, index) in emojis" 
        :key="index"
      >
      </button>
  </div>
</template>

<script>
export default {
  props:['thread'],
  data(){
    return{
      emojis:null,
    }
  },
  computed:{
    signedIn() {
      return window.App.user ? true : false;
    },
  },

  created(){
    this.getAllEmojis();
  },
  methods:{
    voteEmoji(emoji){
      if (!this.signedIn) {
        return false;
      }
      axios.post(`/thread/${this.thread.id}/emojis`,{
          type:emoji.id
      }).then(res => {
          window.events.$emit('VoteUserEmojis', emoji);
      });
    },
    getAllEmojis(){
       axios.get(`/thread/${this.thread.id}/emojis`).then(res => {
         this.emojis = res.data;
      });
    },
  }
};
</script>


<style scoped>
  .emoji-list-buttons{
    margin-top: 5px;
    position: absolute;
    right: 65px;
    bottom: 55px;
    background-color: #eeeeee;
    padding: 5px 0px;
    border-radius: 50px;
  }
  button.emoji-btn{
    background-color: transparent;
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: bottom;
    text-align: center;
    margin: 0px 5px;
    width: 34px;
    height: 34px;
    padding: 0;
    transition: all 0.2s;
  }
button.emoji-btn:focus{
    outline: none;
}
button.emoji-btn:hover{
    transform: scale(1.2);
}

</style>
