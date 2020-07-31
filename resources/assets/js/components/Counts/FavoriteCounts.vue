<template>
  <div class="counts-item">
    <i class="fa fa-star"></i>
    <strong>{{ favorite_count | formatCount}}</strong> favorite
  </div>
</template>

<script>
export default {
  props: ["favorite_count"],
};
</script>


<style  scoped>
.fa-star {
  color: #f6d743;
}
</style>