<template>
  <div>
    <div class="panel" v-for="(thread, index) in threads" :key="index">
      
      <div class="panel-body">
        <div class="trending_thread_title">
          <a :href="thread.path">
            <strong v-html="thread.title"></strong>
          </a>
        </div>
      <div class="card-header thread_thumb" :style="threadThumbStyle(thread)"  @click="openThreadUrl(thread.path)">
        <a :href="thread.path">
          <img
            :src="thread.threadImagePath"
            class="thread_thumb_image"
            :alt="thread.title"
            style="max-width:100%"
          />
        </a>
      </div>

        <div class="trending_footer">
          <comment-counts color="#ff4301" :thread="thread"></comment-counts>
          <point-counts :thread="thread"></point-counts>
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
    threadThumbStyle(thread) {
      return `background: rgba(${thread.imageColor});cursor:pointer;`;
    },
    getTrending() {
      axios.get("/trending").then((res) => {
        this.threads = res.data;
      });
    },
     openThreadUrl(path){
       window.location = path;

     }
  },
};
</script>

<style scoped>
.thread_thumb {
  display: block;
  max-width: 100%;
  text-align: center;
  overflow: hidden;
  margin-bottom: 0px;
}
.thread_thumb_image {
  max-width: 100%;
  height:120px;
}

.panel-body{
  padding: 0px;
}
.trending_thread_title{
  padding:10px 10px;
  overflow-wrap: anywhere;
}
.trending_footer{
  padding: 5px 10px;
}
</style>
