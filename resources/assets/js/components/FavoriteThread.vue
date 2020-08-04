<template>
  <div class="tools-single-item">
    <button
      class="btn thread-items-show-tools-btn"
      @click.prevent="toggle"
      :class="classes"
      :style="style"
    >
      <i class="fa fa-star"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
    },
    size: {
      type: String,
      default: "big",
    },
  },
  data() {
    return {
      active: this.thread.isFavorited,
      isFavoriteThread: false,
    };
  },
  computed: {
    style() {
      return {
        borderWidth: this.size == "small" ? "1px" : "2px",
        height: this.size == "small" ? "24px" : "40px",
        width: this.size == "small" ? "24px" : "40px",
        fontSize: this.size == "small" ? "20px" : "25px",
      };
    },
    classes() {
      return [this.isFavoriteThread ? "active-favorite" : "inactive-favorite"];
    },

    endpoint() {
      return "/thread/" + this.thread.id + "/favorites";
    },
    signedIn() {
      return window.App.user ? true : false;
    },
  },
  created() {
    this.checkIsFavoriteThread();
  },
  methods: {
    toggle() {
      if (!this.signedIn) {
        this.redirectToLogin();
      }
      this.isFavoriteThread ? this.destroy() : this.create();
    },

    create() {
      axios.post(this.endpoint).then((res) => {});
      this.isFavoriteThread = true;
      eventBus.$emit("favoriteAdded-" + this.thread.id, this.thread.id);
      flash("You are successfully favorite this thread", "success");
    },

    destroy() {
      axios.delete(this.endpoint);
      this.isFavoriteThread = false;
      eventBus.$emit("favoriteDeleted-" + this.thread.id, this.thread.id);
      flash("You are successfully unfavorite this thread", "success");
    },
    checkIsFavoriteThread() {
      if (this.signedIn) {
        axios
          .post("/thread/check-thread-favorite", {
            thread: this.thread.id,
            user: window.App.user.id,
          })
          .then((res) => {
            if (res.data.favorited) {
              return (this.isFavoriteThread = true);
            }
            return (this.isFavoriteThread = false);
          });
      }
      return (this.isFavoriteThread = false);
    },
    redirectToLogin() {
      window.location = "/redirect-to?page=" + location.pathname;
    },
  },
};
</script>

<style lang="scss" scoped>
.active-favorite {
  color: #f6d743;
  border: 2px solid #f6d743;
}
.active-favorite:hover {
  color: #92959e;
  border: 2px solid #92959e;
}

.inactive-favorite {
  color: #92959e;
  border: 2px solid #92959e;
}
.inactive-favorite:hover {
  color: #f6d743;
  border: 2px solid #f6d743;
}
.thread-items-show-tools-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
