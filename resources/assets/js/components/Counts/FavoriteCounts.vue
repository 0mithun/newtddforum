<template>
  <div class="counts-item">
    <i class="fa fa-star"></i>
    <strong>{{ favoriteCounts }}</strong> favorite
  </div>
</template>

<script>
export default {
  props: ["favorite_count"],

  computed: {
    favoriteCounts() {
      return abbreviate(this.favorite_count, 1);
    }
  }
};
</script>


<style  scoped>
.fa-heart {
  color: red;
}
</style>