<template>
  <div class="tools-single-item">
    <button
      class="btn  thread-items-show-tools-btn"
      @click="toggleLike"
      :class="activeClass"
      :style="style"
    >
      <i class="fa fa-arrow-up"></i>
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
      isLiked: this.thread.isLiked,
    };
  },
  created() {
    window.events.$on("isDesliked", (id) => {
      if (this.thread.id == id) {
        this.isLiked = false;
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
    toggleLike() {
      if (!this.signedIn) {
        this.redirectToLogin();
      }
      axios.post("/thread/" + this.thread.id + "/likes").then((res) => {
        if (this.isLiked) {
          this.isLiked = false;
        } else {
          this.isLiked = true;
          window.events.$emit("isLiked", this.thread.id);
        }
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
