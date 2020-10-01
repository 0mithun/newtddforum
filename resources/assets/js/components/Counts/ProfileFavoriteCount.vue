<template>
  <div class="counts-item">
    <i class="fa fa-star"></i>
    <strong>{{ favoriteCounts | formatCount }}</strong> favorite
  </div>
</template>

<script>
export default {
  props: ["thread"],
  data() {
    return {
      count: this.thread.length,
    };
  },
  computed: {
    favoriteCounts() {
      return this.count;
    },
  },

};
</script>

<style scoped>
.fa-star {
  color: #f6d743;
}
</style>
