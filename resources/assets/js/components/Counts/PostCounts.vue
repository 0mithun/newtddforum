<template>
  <div class="counts-item">
    <i class="fa fa-pencil-square"></i>
    <strong>{{ postCounts }}</strong> posts
  </div>
</template>

<script>
export default {
  props: ["post_count"],

  computed: {
    postCounts() {
      return abbreviate(this.post_count, 1);
    }
  }
};
</script>


<style  scoped>
.counts-item {
}
</style>