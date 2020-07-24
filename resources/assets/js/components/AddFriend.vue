<template>
  <div class="btn-group">
    <template v-if="isMyFriend">
      <button
        class="btn btn-default btn-sm dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fa fa-user" aria-hidden="true"></i>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a @click.prevent="unFriend">Unfriend</a>
        </li>
        <li>
          <a>Unfollow</a>
        </li>
        <li>
          <a @click.prevent="blockFriend">Block</a>
        </li>
      </ul>
    </template>
    <template v-else>
      <template v-if="sentRequst">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i> Request sent
        </button>
        <ul class="dropdown-menu">
          <li>
            <a @click.prevent="cancelRequest">Cancel Request</a>
          </li>
        </ul>
      </template>
      <template v-else>
        <button
          class="btn btn-primary btn-sm"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click.prevent="addFriend"
        >
          <i class="fa fa-user-plus" aria-hidden="true"></i>
        </button>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: ["recipient", "isFriend"],
  data() {
    return {
      sentRequst: false,
      isMyFriend: this.isFriend
    };
  },
  created() {
    if (!this.isMyFriend) {
      this.checkSentRequest();
    }
  },

  methods: {
    addFriend() {
      axios
        .post("/friend/sent-request", {
          recipient: this.recipient.id
        })
        .then(res => {
          this.sentRequst = true;
        });
    },

    checkSentRequest() {
      axios
        .post("/friend/check-request-sent", {
          recipient: this.recipient.id
        })
        .then(res => {
          if (res.data == true) {
            this.sentRequst = true;
          }
        });
    },
    unFriend() {
      axios
        .post("/friend/unfriend", {
          friend: this.recipient.id
        })
        .then(res => {
          this.isMyFriend = false;
          this.sentRequst = false;
          this.$store.dispatch("removeFriend", window.App.user.id);
        });
    },
    blockFriend() {
      axios
        .post("/profiles/block-friend", {
          friend: this.recipient.id
        })
        .then(res => {
          this.$store.dispatch("addBlockLists", this.recipient);

          flash(res.data.message);
          window.location = "/";
        });
    },
    cancelRequest() {
      axios
        .post("/profiles/cancel-friend-request", {
          friend: this.recipient.id
        })
        .then(res => {
          this.sentRequst = false;
          this.$store.dispatch("removeFriendRequest", this.recipient.id);

          flash(res.data.message);
        });
    }
  }
};
</script>

<style  scoped>
</style>