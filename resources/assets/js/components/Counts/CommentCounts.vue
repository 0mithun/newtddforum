<template>
  <div class="counts-item" :style="commentStyle">
    <i class="fa fa-comment"></i>
    <strong>{{ commentCounts | formatCount }}</strong> comments
  </div>
</template>

<script>
export default {
  props: ["thread", "color"],
  data() {
    return {
      count: this.thread.replies_count,
    };
  },

  computed: {
    commentCounts() {
      return this.count;
    },
    commentStyle() {
      return {
        color: this.color ? this.color : "#636b6f",
      };
    },
  },
  created() {
    eventBus.$on("commentAdded-" + this.thread.id, () => {
      console.log("New Reply added");
      this.count = this.count + 1;
    });

    eventBus.$on("commentDeleted-" + this.thread.id, () => {
      console.log("Reply Deleted");
      this.count = this.count - 1;
    });
  },
};
</script>

<style scoped>
.counts-item {
}
</style>
