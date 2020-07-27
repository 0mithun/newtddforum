<template>
  <div>
    <div class="panel" v-for="(thread, index) in threads" :key="index">
      <div class="card-header thread_thumb">
        <a :href="thread.path">
          <img :src="thread.threadImagePath" class="img-responsive" :alt="thread.title" />
        </a>
      </div>
      <div class="panel-body">
        <div class="trendig_thread_title">
          <a :href="thread.path">
            <strong>{{ thread.title }}</strong>
          </a>
        </div>
        <div class="trendong_footer">
          <comment-counts color="#ff4301" :comment_count="thread.replies_count"></comment-counts>
          <point-counts :like_count="thread.like_count" :dislike_count="thread.dislike_count"></point-counts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      threads: [],
    };
  },
  created() {
    this.getTrending();
  },
  methods: {
    getTrending() {
      axios.get("/trending").then((res) => {
        this.threads = res.data;
      });
    },
  },
};
</script>