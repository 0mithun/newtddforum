<template>
  <div class="counts-item">
    <i class="fa fa-star"></i>
    <strong>{{ favoriteCounts | formatCount   }}</strong> {{ favoriteCounts | strPlural('favorite')}}
  </div>
</template>

<script>
export default {
  props: ["thread"],

  computed: {
    favoriteCounts() {
      return this.thread.length;
    },
  },

};
</script>

<style scoped>
.fa-star {
  color: #f6d743;
}
</style>
