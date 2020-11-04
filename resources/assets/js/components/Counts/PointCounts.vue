<template>
  <div class="counts-item">
    <i class="fa fa-arrow-up"></i>
    <strong>{{ pointCounts | formatCount }}</strong>  {{ pointCounts | strPlural('point') }}
  </div>
</template>

<script>
export default {
  props: ["thread"],
  data() {
    return {
      likeCount: this.thread.like_count,
      dislikeCount: this.thread.dislike_count,
    };
  },

  computed: {
    pointCounts() {
      // return this.likeCount - (this.dislikeCount + 1);
      return this.likeCount - this.dislikeCount;
      // return abbreviate((this.like_count - this.dislike_count), 1)
    },
  },
  created() {
    eventBus.$on("threadVoted-" + this.thread.id, (thread) => {
      this.getThreads();
    });
  },
  methods: {
    getThreads() {
      axios.get("/thread/get-single-thread/" + this.thread.slug).then((res) => {
        this.likeCount = res.data.like_count;
        this.dislikeCount = res.data.dislike_count;
      });
    },
  },
};
</script>

<style scoped>
.counts-item {
}
</style>
