<template>
  <div class="counts-item">
    <i class="fa fa-eye"></i>
    <strong>{{ viewCounts | formatCount }}</strong> {{ viewCounts | strPlural('view') }}
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
    },
  },

  computed: {
    viewCounts() {
      //   return abbreviate(this.thread.visits, 1);
      return this.thread.visits;
    },
  },
};
</script>


<style  scoped>
.counts-item {
}
</style>