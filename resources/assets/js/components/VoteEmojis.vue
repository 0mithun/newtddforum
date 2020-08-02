<template>
  <div class="tools-single-item">
    <button
      class="btn  thread-items-show-tools-btn emojis-default-btn"
      :style="emojiStyle"
      :class="activeClass"
      @mouseenter="showEmojiList"
    ></button>
  </div>
</template>

<script>
export default {
  props: ["thread", "size", "position"],
  data() {
    return {
      userEmoji: "",
    };
  },
  computed: {
    signedIn() {
      return window.App.user ? true : false;
    },
    emojiStyle() {
      return {
        backgroundImage:
          this.userEmoji != ""
            ? "url(/images/emojis/" + this.userEmoji.name + ".png)"
            : "url(/images/emojis/funny.png)",
        backgroundSize: this.size == "small" ? "20px" : "32px",
        height: this.size == "small" ? "24px" : "40px",
        width: this.size == "small" ? "24px" : "40px",
        borderWidth: this.size == "small" ? "1px" : "2px",
      };
    },
    activeClass() {
      return [this.userEmoji != "" ? "active-emoji" : "inactive-emoji"];
    },
  },

  created() {
    this.getUserEmojiType();

    window.events.$on("VoteUserEmojis", (emoji) => {
      this.userEmoji = emoji;
    });
  },
  methods: {
    showEmojiList() {
      let data = {
        thread: this.thread.id,
        position: this.position,
      };
      window.events.$emit("showEmojiList", data);
    },
    getUserEmojiType() {
      if (!this.signedIn) {
        return false;
      }
      axios
        .get(`/thread/${this.thread.id}/user-emoji-type`)
        .then((res) => {
          this.userEmoji = res.data;
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped>
.emojis-default-btn {
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
.active-emoji {
  color: #ffa931;
  border: 1px solid #ffa931;
  background-size: 22px;
}
.inactive-emoji {
  color: #92959e;
  border: 1px solid #92959e;
}
</style>
