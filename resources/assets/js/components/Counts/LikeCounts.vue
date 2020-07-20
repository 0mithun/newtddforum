<template>
  <div class="counts-item">
    <i class="fa fa-arrow-up"></i>
    <strong>{{ likeCounts }}</strong> likes
  </div>
</template>

<script>
export default {
  props: ["like_counts"],

  computed: {
    likeCounts() {
      return abbreviate(this.like_counts, 1);
    }
  }
};
</script>


<style  scoped>
.counts-item {
}
</style>