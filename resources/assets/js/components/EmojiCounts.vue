<template>
  <div class="emoji-lists">
    <span
      data-toggle="tooltip"
      :title="emoji.name"
      class="emoji-count-btn"
      :class="[{ 'big-emoji-btn': emoji.id == userEmoji }, emoji.name]"
      v-bind:style="{ 'background-image': 'url(/images/emojis/' + emoji.name + '.png)' }"
      v-for="(emoji, index) in emojis"
      :key="index"
    >{{ formateEmojiCounts(emoji.count) }}</span>
  </div>
</template>

<script>
export default {
  props: ["thread"],
  data() {
    return {
      emojis: null,
      userEmoji: null
    };
  },
  computed: {
    signedIn() {
      return window.App.user ? true : false;
    }
  },

  created() {
    // this.getUserEmojiType();
    this.getEmojiCount();
  },
  methods: {
    formateEmojiCounts(value) {
      return abbreviate(value, 1);
    },
    getEmojiCount() {
      axios.get(`/thread/${this.thread.id}/emoji-counts`).then(res => {
        this.emojis = res.data;
      });
    },
    getUserEmojiType() {
      if (!this.signedIn) {
        return false;
      }
      axios
        .get(`/thread/${this.thread.id}/user-emoji-type`)
        .then(res => {
          this.userEmoji = res.data;
        })
        .catch(err => {});
    }
  }
};
</script>


<style scoped>
.emoji-lists {
  display: flex;
  justify-content: space-between;
}
.emoji-buttons {
  margin-top: 5px;
}
.emoji-count-btn {
  height: 16px;
  /* background-color: transparent; */
  background-size: 16px;
  background-repeat: no-repeat;
  vertical-align: bottom;
  text-align: center;
  /* padding-top: 20px; */
  margin-right: 7px;
  background-position: 0px 0px;
  padding-left: 17px;
}
.big-emoji-btn {
  height: 40px;
  background-color: transparent;
  background-size: 32px;
  background-repeat: no-repeat;
  vertical-align: bottom;
  text-align: center;
  padding-top: 28px;
  margin-right: 5px;
  width: 32px;
}
</style>
