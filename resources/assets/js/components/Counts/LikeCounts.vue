<template>
  <div class="counts-item">
    <i class="fa fa-arrow-up"></i>
    <strong>{{ like_counts | formatCount}}</strong>  {{ like_counts | strPlural('like') }}
  </div>
</template>

<script>
export default {
  props: ["like_counts"],
};
</script>


<style  scoped>
.counts-item {
}
</style>