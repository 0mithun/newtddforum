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
    <div
      class="panel"
      v-for="(thread, index) in results"
      :key="index"
      @click="focusMarker(index)"
      @mouseenter="focusMarker(index)"
      :class="isActive(index)"
    >
      <div class="panel-header">
        <h5 class="thread-title">{{ thread.title }}</h5>
      </div>
      <div class="panel-body thread-info">
        <div class="thread-thumb-side">
          <img :src="thread.threadImagePath" class="thread-thumb" alt />
        </div>
        <div class="thread-counts">
          <view-counts :thread="thread"></view-counts>
          <point-counts :thread="thread"></point-counts>
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
      activeIndex: null,
    };
  },

  methods: {
    isActive(index) {
      return this.activeIndex == index ? "panel-primary" : "";
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
          thread_id,
        })
        .then((res) => {
          window.open(res.data.path, "_blank");
        });
    },
  },
  created() {
    eventBus.$on("markers_fetched", (data) => {
      this.results = data.results;
    });
  },
};
</script>

<style scoped>
.map_thraed_list {
  height: 100vh;
  overflow-y: scroll;
}
.thread-info {
  display: flex;
}
.thread-thumb-side {
  width: 50%;
  margin-right: 5%;
}
.thread-thumb {
  max-width: 100%;
  height: 60px;
  display: inline-block;
}
.thread-counts {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: auto;
}
.thread-title {
  color: black;
}
.panel {
  margin-bottom: 5px;
  cursor: pointer;
  padding: 5px;
}
.panel-body {
  padding: 0px;
}
</style>
