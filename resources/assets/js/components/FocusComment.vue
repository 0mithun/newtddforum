<template>
  <div class="tools-single-item">
    <button
      class="btn  thread-items-show-tools-btn focus-comment-btn"
      @click.prevent="focusComment"
    >
      <i class="fa fa-comment"></i>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    signedIn() {
      return window.App.user ? true : false;
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
