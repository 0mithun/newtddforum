<template>
  <div class="tools-single-item" >
    <button class="btn  thread-items-show-tools-btn" @click="toggleLike" :class="activeClass">
      <i class="fa fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object
    }
  },

  data() {
    return {
      isLiked: this.thread.isLiked
    };
  },
  created(){
    window.events.$on('isDesliked', id=>{
      if(this.thread.id == id){
        this.isLiked = false
      }
    });
  },

  computed: {
    activeClass() {
      return [this.isLiked ? "active-icon" : "inactive-icon"];
    },
    signedIn() {
      return window.App.user ? true : false;
    },
  },

  methods: {
    toggleLike() {
      if (!this.signedIn) {
        return false;
      }
      axios
        .post("/thread/" + this.thread.id + "/likes")
        .then(res => {
          if (this.isLiked) {
            this.isLiked = false;
          }else {
            this.isLiked = true;
            window.events.$emit('isLiked', this.thread.id);
          }
        });
    }
  }
};
</script>
