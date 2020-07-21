<template>
  <div class="panel panel-default">
    <div class="card-header thread_thumb">
      <a :href="thread.path">
        <img :src="thread.threadImagePath" class="thread-image" :alt="thread.title" />
      </a>
    </div>
    <div class="panel-body">
      <div class="thread_title">
        <a :href="thread.path">
          <strong>{{ thread.title }}</strong>
        </a>
      </div>

      <div v-html="thread.excerpt "></div>

      <div class="thread_creator">
        <a href="#" class="creator_name" v-if="thread.anonymous ==1">
          <img
            src="/images/default.png"
            alt="anonymous"
            width="25"
            height="25"
            class="avatar-photo"
          />
          <user-online :user="thread.creator"></user-online>anonymous
        </a>
        <a :href="'/profiles/'+thread.creator.username" class="creator_name" v-else>
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
      </div>
    </div>
    <div class="panel-footer">
      <div class="row">
        <div class="col-md-3 social-share-btn">
          <fb-share :thread="thread"></fb-share>
          <twitter-share :thread="thread"></twitter-share>
        </div>
        <div class="col-md-4 thread_item_counts">
          <view-counts :thread="thread"></view-counts>
          <comment-counts :comment_count="thread.replies_count"></comment-counts>
          <point-counts :like_count="thread.like_count" :dislike_count="thread.dislike_count"></point-counts>
        </div>
        <div class="col-md-5 thread_emoji_count_map">
          <emoji-counts :thread="thread"></emoji-counts>
          <div class="thread-map-icon">
            <img src="/images/png/map-icon-red.png" alt v-if="thread.location !=null" />
            <img src="/images/png/map-icon-black.png" alt v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thread"]
};
</script>

<style lang="scss" scoped>
</style>