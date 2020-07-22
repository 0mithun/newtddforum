<template>
  <div class="map_thraed_list">
    <!-- <div class="list-group">
      <a
        style="padding:10px 5px"
        href="#"
        class="list-group-item"
        v-for="(item, i) in results"
        :key="i"
        @click="focusMarker(i)"
        :class="isActive(i)"
      >
        <div class="col-md-10">{{ item.text }}</div>
        <button class="btn-default btn btn-sm" @click="viewThread(item.thread_id)">View</button>
      </a>
    </div>-->
    <div class="panel" v-for="(thread, index) in results" :key="index" @click="focusMarker(index)">
      <div class="panel-header">
        <h5 class="thread-title">{{ thread.title }}</h5>
      </div>
      <div class="panel-body">
        <div class="col-md-6">
          <img :src="thread.threadImagePath" class="thread-thumb" alt />
        </div>
        <div class="col-md-6 thread-counts">
          <view-counts :thread="thread"></view-counts>
          <point-counts :like_count="thread.like_count" :dislike_count="thread.dislike_count"></point-counts>
          <emoji-counts :thread="thread"></emoji-counts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      results: [],
      activeIndex: null
    };
  },
  methods: {
    isActive(index) {
      //return this.activeIndex == index ? 'active' : '';
      //return 'active';
    },
    focusMarker(index) {
      this.activeIndex = index;
      eventBus.$emit("markers_result_clicked", index);
    },
    viewThread(thread_id) {
      this.getThreadDetails(thread_id);
    },
    getThreadDetails(thread_id) {
      axios
        .post("/map/thread-details", {
          thread_id
        })
        .then(res => {
          window.open(res.data.path, "_blank");
        });
    }
  },
  created() {
    eventBus.$on("markers_fetched", data => {
      this.results = data.results;
    });
  }
};
</script>

<style scoped>
.map_thraed_list {
  height: 100vh;
  overflow-y: scroll;
}
.thread-thumb {
  max-width: 100%;
  height: auto;
  display: inline-block;
}
.thread-counts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
}
.thread-title {
  color: black;
}
.panel {
  margin-bottom: 5px;
  cursor: pointer;
}
.panel-body {
  padding: 5px;
}
</style>
