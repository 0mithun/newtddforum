<template>
  <div class="counts-item">
    <i class="fa fa-user"></i>
    <strong>{{ followingCounts }}</strong> following
  </div>
</template>

<script>
export default {
  props: ["following_count"],

  computed: {
    followingCounts() {
      return abbreviate(this.following_count, 1);
    }
  }
};
</script>


<style  scoped>
.counts-item {
}
</style>