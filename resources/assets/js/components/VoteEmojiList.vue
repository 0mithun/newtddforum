<template>
  <div
    class="emoji-list-buttons"
    v-if="show"
    @mouseleave="hideEmojiList"
    :class="emojiLiistBtnClass"
  >
    <button
      data-toggle="tooltip"
      :title="emoji.name"
      class="btn emoji-btn"
      v-bind:style="{
        'background-image': 'url(/images/emojis/' + emoji.name + '.png)',
      }"
      @click="voteEmoji(emoji)"
      v-for="(emoji, index) in emojis"
      :key="index"
      :class="btnClass"
    ></button>
  </div>
</template>

<script>
export default {
  props: ["thread", "size", "position"],
  data() {
    return {
      emojis: null,
      show: false,
    };
  },
  computed: {
    signedIn() {
      return window.App.user ? true : false;
    },
    btnClass() {
      return this.size == "small" ? "small-emoji" : "big-emoji";
    },
    emojiLiistBtnClass() {
      return this.size == "small"
        ? "small-emoji-list-btn"
        : "big-emoji-list-btn";
    },
  },

  created() {
    this.getAllEmojis();
    window.events.$on("showEmojiList", (data) => {
      if (this.thread.id == data.thread && this.position == data.position) {
        this.show = true;
      }
    });
  },
  methods: {
    voteEmoji(emoji) {
      if (!this.signedIn) {
        this.redirectToLogin();
      }
      axios
        .post(`/thread/${this.thread.id}/emojis`, {
          type: emoji.id,
        })
        .then((res) => {
          // window.events.$emit("VoteUserEmojis", emoji);
          eventBus.$emit("VoteUserEmojis-" + this.thread.id, emoji);
        });
    },
    getAllEmojis() {
      axios.get(`/thread/${this.thread.id}/emojis`).then((res) => {
        this.emojis = res.data;
      });
    },
    redirectToLogin() {
      window.location = "/redirect-to?page=" + location.pathname;
    },
    hideEmojiList() {
      this.show = false;
      // setTimeout(() => {
      //   this.show = false;
      // }, 1500);
    },
  },
};
</script>

<style scoped>
.emoji-list-buttons {
  margin-top: 5px;
  position: absolute;

  background-color: #eeeeee;
  border-radius: 50px;
}
button.emoji-btn {
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: bottom;
  text-align: center;

  padding: 0;
  transition: all 0.2s;
}
button.emoji-btn:focus {
  outline: none;
}
button.emoji-btn:hover {
  transform: scale(1.1);
}

button.small-emoji {
  background-size: 20px;
  margin: 0px 3px;
  width: 20px;
  height: 20px;
}
button.big-emoji {
  background-size: 32px;
  margin: 0px 3px;
  width: 32px;
  height: 32px;
}

.small-emoji-list-btn {
  right: 90px;
  bottom: 45px;
  padding: 5px 0px;
  padding-top: 2px;
}
.big-emoji-list-btn {
  right: 55px;
  bottom: 45px;
  padding: 3px 0px;
}
</style>
