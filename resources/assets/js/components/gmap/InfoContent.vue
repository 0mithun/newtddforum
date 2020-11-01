<template>
  <!-- <div class="info-content" @click="openThread">
        <div class="">
            {{ this.infoContent.title }}
        </div>
        <div class="" style="margin-top:10px" v-if="infoContent.anonymous ==0">
            <img :src="infoContent.creator.profileAvatarPath" alt="" width="25"> Posted By: {{ this.infoContent.creator.name }}   
        </div>
        <div class="" style="margin-top:10px" v-else>
            <img src="/images/default.png" alt="" width="25"> Posted By: Anonymous
        </div>
  </div>-->
  <div class="info-content" @click="openThread">
    <h5 class="thread-title">{{ thread.title }}</h5>
    <div class="info-content-body">
      <div class="info-content-thread-thumb">
        <img :src="thread.threadImagePath" class="thread-thumb" alt />
      </div>

      <div class="thread-counts">
        <view-counts :thread="thread"></view-counts>
        <point-counts :thread="thread"></point-counts>
        <emoji-counts :thread="thread"></emoji-counts>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thread"],
  data() {
    return {
      drawer: null,
      results: []
    };
  },
  methods: {
    focusMarker(index) {
      eventBus.$emit("markers_result_clicked", index);
    },
    openThread() {
      window.open(
        this.thread.path,
        "_blank" // <- This is what makes it open in a new window.
      );
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
.info-content {
  cursor: pointer;
  max-width: 10vw;
}
.info-content-body {
  display: flex;
  justify-content: space-between;
}
.info-content-thread-thumb {
  margin-right: 5%;
  width: 50%;
}

.thread-thumb {
  max-width: 100%;
  height: auto;
  display: inline-block;
  height: 60px;
}
.thread-counts {
  width: 45%;
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}

.thread-title {
  color: black;
}
</style>
