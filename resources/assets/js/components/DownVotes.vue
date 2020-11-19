<template>
  <div class="tools-single-item">
    <button
      class="btn  thread-items-show-tools-btn"
      @click="toggleDislike"
      :class="activeClass"
      :style="style"
    >
      <i class="fa fa-arrow-down"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
    },
    size: {
      type: String,
      default: "big",
    },
  },

  data() {
    return {
      isDesliked: this.thread.isDesliked,
    };
  },
  created() {
     eventBus.$on("threadDislikeAdd-"+this.thread.id, (id) => {
      this.isDesliked = true;
    });
     eventBus.$on("threadDislikeDelete-"+this.thread.id, (id) => {
      this.isDesliked = false;
    });
  },

  computed: {
    activeClass() {
      return [this.isDesliked ? "active-icon" : "inactive-icon"];
    },
    signedIn() {
      return window.App.user ? true : false;
    },
    style() {
      return {
        borderWidth: this.size == "small" ? "1px" : "2px",
        height: this.size == "small" ? "24px" : "40px",
        width: this.size == "small" ? "24px" : "40px",
        fontSize: this.size == "small" ? "20px" : "25px",
      };
    },
  },

  methods: {
    toggleDislike() {
      if (!this.signedIn) {
        this.redirectToLogin();
      }
      axios.post("/thread/" + this.thread.id + "/dislikes").then((res) => {
        eventBus.$emit("threadLikeDelete-" + this.thread.id, this.thread.id);
        if (this.isDesliked) {
          this.isDesliked = false;
           eventBus.$emit("threadDislikeDelete-" + this.thread.id, this.thread.id);
        } else {
          this.isDesliked = true;
           eventBus.$emit("threadDislikeAdd-" + this.thread.id, this.thread.id);
        }
         flash("You are successfully down vote this thread", "success");
      });

    },
    redirectToLogin() {
      window.location = "/redirect-to?page=" + location.pathname;
    },
  },
};
</script>

<style lang="scss" scoped>
.thread-items-show-tools-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 5px;
}
</style>
