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
      count: this.thread.favorite_count,
    };
  },
  computed: {
    favoriteCounts() {
      return this.count;
    },
  },
  created() {
    eventBus.$on("favoriteAdded-" + this.thread.id, (thread) => {
      this.count = this.count + 1;
    });

    eventBus.$on("favoriteDeleted-" + this.thread.id, (thread) => {
      this.count = this.count + -1;
    });
  },
};
</script>

<style scoped>
.fa-star {
  color: #f6d743;
}
</style>
