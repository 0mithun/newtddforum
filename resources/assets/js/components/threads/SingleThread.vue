<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="thread-tags">
        <!-- <a
          :href="'/threads/'+ tag.toLowerCase().trim()"
          class="tag-name"
          v-for="(tag, index) in thread.tagNameList"
          :key="index"
        >#{{ tag.toLowerCase().trim() }}</a> -->

          <a
          :href="'/threads/'+ thread.channel.name.toLowerCase().trim()"
          class="tag-name"
        >#{{ thread.channel.name }}</a>


        
      </div>
      <div class="thread_title">
        <a :href="thread.path">
          <strong v-html="thread.title"></strong>
        </a>
      </div>
      <div class="card-header threads-counts">
        <view-counts :thread="thread"></view-counts>
        <comment-counts :thread="thread"></comment-counts>
        <point-counts :thread="thread"></point-counts>
        <favorite-counts :thread="thread"></favorite-counts>

        <emoji-counts :thread="thread"></emoji-counts>
        <div class="thread-map-icon">
          <map-location :location="thread.location"></map-location>
        </div>
      </div>

      <div class="card-header thread_thumb" :style="threadThumbStyle">
        <a :href="thread.path">
          <img
            :src="thread.threadImagePath"
            class="thread-image thread_thumb_image"
            :alt="thread.title"
          />
        </a>
        <!-- Under images: need show img description + license info + amazon [shop] -->
      </div>

      <div v-html="thread.excerpt" class="thread_excerpt"></div>
      <div class="tools-row">
        <vote-emoji-list :thread="thread" size="small" position="top"></vote-emoji-list>
        <div class="col-md-3 social-share-btn">
          <fb-share :thread="thread"></fb-share>
          <twitter-share :thread="thread"></twitter-share>
        </div>
        <!--         
        <div class="col-md-4 thread_item_counts"></div>
        <div class="col-md-5 thread_emoji_count_map"></div>-->
        <div class="col-md-9 thread-show-tools">
          <vote-emojis :thread="thread" size="small" position="top"></vote-emojis>
          <favorite-thread :thread="thread" size="small"></favorite-thread>
          <up-votes :thread="thread" size="small"></up-votes>
          <down-votes :thread="thread" size="small"></down-votes>
          <report-thread :thread="thread" size="small"></report-thread>
          <show-source :thread="thread" size="small"></show-source>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thread"],
  computed: {
    threadThumbStyle() {
      return `background: rgba(${this.thread.imageColor})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.social-share-btn {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.threads-counts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.thread_thumb {
  display: block;
  max-width: 100%;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
}
.thread_thumb_image {
  max-width: 100%;
}
.panel {
  position: relative;
}
.tools-row {
  margin-top: 20px;
}
.panel-body{
  padding:0px;
}

.thread-tags, .thread_title, .threads-counts, .thread_excerpt, .tools-row{
  padding-left: 15px;
  padding-right: 15px;
}
.thread-tags{
  padding-top:15px;
}

.tools-row{
  padding-bottom: 15px;
}
</style>
