<template>
  <div class="counts-item" :style="commentStyle">
    <i class="fa fa-comment"></i>
    <strong>{{ replies_count | formatCount }}</strong>  {{ replies_count | strPlural('comment') }}
  </div>
</template>

<script>
export default {
  props: ["replies_count", "color"],

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

};
</script>

<style scoped>
.counts-item {
}
</style>
