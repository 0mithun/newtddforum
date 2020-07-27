<template>
  <div class="counts-item">
    <i class="fa fa-user"></i>
    <strong>{{ following_counts | formatCount}}</strong> following
  </div>
</template>

<script>
export default {
  props: ["following_count"],
};
</script>


<style  scoped>
.counts-item {
}
</style>