<template>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="media">
          <div class="row">
            <div class="col-md-11">
              <h2 class="media-heading" v-text="thread.title" style="margin-bottom: 10px;"></h2>
            </div>Report Thread Creator
          </div>
          <div class="media-left">
            <a href="#">
              <img
                :src="thread.creator.profileAvatarPath"
                :alt="thread.creator.name"
                width="25"
                height="25"
                class="avatar-photo"
              />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading thread-info">
              Posted by:
              <a :href="'/profile/'+ thread.creator.name">{{ thread.creator.name }}</a>
              <user-online :user="thread.creator" type="message"></user-online>
              <!-- {{ $thread->created_at->diffForHumans()  }} -->
            </h4>
          </div>
        </div>
        <div class="row" style="margin-top: 0px;">
          <div class="col-md-1"></div>
          <div class="col-md-10" style="padding: 0px;">
            <div class>
              {{ thread.visits }},
              {{ thread.like_count }},
              {{ thread.replies_count }},
              {{ thread.favorite_count }}
              <span class="glyphicon glyphicon-heart red-icon" style="font-size: 12px;"></span>
              ,
              {{ thread.word_count }} words
              Social Share + Report
            </div>
          </div>
        </div>
      </div>

      <div class="panel-body" style="min-height: 345px;">
        <a id="single_image" :href="thread.threadImagePath">
          <img
            :src="thread.threadImagePath"
            alt
            style="display:inline; float:left;margin-bottom:0px;margin-right:20px;"
            width="250"
          />
        </a>
        <div v-html="thread.body" style="display:inline;"></div>
      </div>
    </div>
</template>

<script>
    export default {
        props:['thread']
    }
</script>

<style lang="scss" scoped>

</style>