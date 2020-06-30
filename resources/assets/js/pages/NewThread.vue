<template>
  <div class="div">
      <thread-show :thread="thread"></thread-show>
      <div class="panel-footer thread-buttons">
        <div class="row">
          <div class="col-md-8 tag-list" style="padding-left: 15px;">
            Tags
            <div class="col-md-12" v-if="authorize('owns', thread)" style="margin-top:5px;">
              <button class="btn btn-xs" v-if="!authorize('isBan')">Edit</button>
            </div>
          </div>
          <div
            class="col-md-4"
            style="padding: 0px;padding-right:5px;"
            v-if="!authorize('isBan')"
          >Bottom share/like vote button</div>
          <star-rating :thread="thread"></star-rating>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  props: ["thread"]
};
</script>