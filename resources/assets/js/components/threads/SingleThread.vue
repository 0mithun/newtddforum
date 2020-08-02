<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="thread-tags">
        <a
          :href="'/threads/' + tag.name.toLowerCase()"
          class="tag-name"
          v-for="(tag, index) in thread.tags"
          :key="index"
          >#{{ tag.name }}</a
        >
      </div>
      <div class="thread_title">
        <a :href="thread.path">
          <strong>{{ thread.title }}</strong>
        </a>
      </div>
      <div class="card-header threads-counts">
        <view-counts :thread="thread"></view-counts>
        <comment-counts :comment_count="thread.replies_count"></comment-counts>
        <point-counts
          :like_count="thread.like_count"
          :dislike_count="thread.dislike_count"
        ></point-counts>
        <favorite-counts
          :favorite_count="thread.favorite_count"
        ></favorite-counts>

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
      </div>

      <div v-html="thread.excerpt"></div>
      <!-- 
      <div class="thread_creator">
        <a href="#" class="creator_name" v-if="thread.anonymous == 1">
          <img
            src="/images/default.png"
            alt="anonymous"
            width="25"
            height="25"
            class="avatar-photo"
          />
          <user-online :user="thread.creator"></user-online>anonymous
        </a>
        <a
          :href="'/profiles/' + thread.creator.username"
          class="creator_name"
          v-else
        >
          <img
            :src="thread.creator.profileAvatarPath"
            :alt="thread.creator.name"
            width="25"
            height="25"
            class="avatar-photo"
          />
          <user-online :user="thread.creator"></user-online>
          {{ thread.creator.name }}
        </a>
      </div> -->

      <div class="tools-row">
        <vote-emoji-list
          :thread="thread"
          size="small"
          position="top"
        ></vote-emoji-list>
        <div class="col-md-3 social-share-btn">
          <fb-share :thread="thread"></fb-share>
          <twitter-share :thread="thread"></twitter-share>
        </div>
        <!--         
        <div class="col-md-4 thread_item_counts"></div>
        <div class="col-md-5 thread_emoji_count_map"></div> -->
        <div class="col-md-9 thread-show-tools">
          <vote-emojis
            :thread="thread"
            size="small"
            position="top"
          ></vote-emojis>
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
  padding-left: 0px;
  padding-right: 0px;
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
</style>
