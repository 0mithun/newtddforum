<template>
  <div class="tools-single-item">
    <a
      class="btn  thread-items-show-tools-btn focus-comment-btn"
      :href="goToComment"
      :style="style"
    >
      <i class="fa fa-comment"></i>
    </a>
  </div>
</template>

<script>
export default {
  props:{
    thread:{
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: "big",
    },
  },
  computed: {
     goToComment() {
      return `${this.thread.path}#comments`;      
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


