<template>
  <div class="tools-single-item"  >
    <button class="btn  thread-items-show-tools-btn" @click="toggleDislike" :class="activeClass">
      <i class="fa fa-arrow-down"></i>
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
      isDesliked: this.thread.isDesliked
    };
  },
  created(){
    window.events.$on('isLiked', id=>{
      if(this.thread.id == id){
        this.isDesliked = false
      }
    });
  },

  computed: {
    activeClass() {
      return [this.isDesliked ? "active-icon" : "inactive-icon"];
    },
    signedIn() {
      return window.App.user ? true : false;
    },
  },

  methods: {
    toggleDislike() {
      if (!this.signedIn) {
        this.redirectToLogin()
      }
      axios.post("/thread/" + this.thread.id + "/dislikes").then(res => {
        if (this.isDesliked) {
          this.isDesliked = false;
        } else {
          this.isDesliked = true;
          window.events.$emit('isDesliked', this.thread.id);
        }
      });
    },
    redirectToLogin(){
        window.location =  '/redirect-to?page='+location.pathname;
    },
  }
};
</script>
