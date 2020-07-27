<template>
  <div class="counts-item" :style="commentStyle">
    <i class="fa fa-comment"></i>
    <strong>{{ comment_count | formatCount }}</strong> comment
  </div>
</template>

<script>
export default {
  props: ["comment_count", "color"],

  computed: {
    commentStyle() {
      return {
        color: this.color ? this.color : "#636b6f",
      };
    },
  },
};
</script>


<style  scoped>
.counts-item {
}
</style>