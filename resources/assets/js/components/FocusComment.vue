<template>
  <div class="tools-single-item">
    <button
      class="btn  thread-items-show-tools-btn focus-comment-btn"
      @click.prevent="focusComment"
      :style="style"
    >
      <i class="fa fa-comment"></i>
    </button>
  </div>
</template>

<script>
export default {
  props:{
    size: {
      type: String,
      default: "big",
    },
  },
  computed: {
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
    focusComment() {
      if (!this.signedIn) {
        this.redirectToLogin();
      }
      let comment = document.getElementById("body");
      comment.focus();
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
  padding-top: 0px;
}
</style>


