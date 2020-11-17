<template>
<div>

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
      
      <div  class="panel">
        <div  class="panel-body">
          <div  class="trending_thread_title"><strong>{{ thread.title }}</strong>
          </div>
          <div class="card-header thread_thumb" :style="threadThumbStyle(thread)">
              <img
                :src="thread.threadImagePath"
                alt="Jason Ritter: Tan Wizard"
                class="thread_thumb_image"
                style="max-width: 100%;height:70px"
            />
          </div>
          <div class="trending_footer">
             <view-counts :thread="thread"></view-counts>
              <emoji-counts :thread="thread"></emoji-counts>
              <point-counts :thread="thread"></point-counts>
          </div>
        </div>
      </div>
    </div>
    <div class="panel" v-if="results.length == 0">
     <div class="panel-body">
        <div class="alert alert-danger text-center">
          <strong>  No Results </strong>
        </div>
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
  computed: {
    
  },

  methods: {
    threadThumbStyle(thread) {
      return `background: rgba(${thread.imageColor});cursor:pointer;`;
    },
    isActive(index) {
      return this.activeIndex == index ? "panel-primary" : "";
    },
    focusMarker(index) {
      this.activeIndex = index;
     

      eventBus.$emit("markers_result_clicked", index);
       eventBus.$emit("zoom_decreased", 6);
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
  height: 85vh;
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
  margin-bottom: 0px;
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
  padding: 0px;
}
.panel-body {
  padding: 0px;
}
.thread_thumb{
  margin-bottom: 0px;
}
.trending_thread_title{
  font-size: 13px;
  font-weight: bold;
  color:black
}
.trending_footer{
  font-size: 12px;
}
.alert{
  margin-bottom: 0px;
}
</style>
