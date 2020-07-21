<template>
  <!-- <template v-if="isFriend">
    <button class="btn btn-danger btn-sm" @click.prevent="unFriend">
      <i class="fa fa-times"></i>
    </button>
  </template>
  <template v-else>
    <button class="btn btn-success btn-sm" v-if="sentRequst">Request Sent</button>
    <button class="btn btn-default btn-sm" @click.prevent="addFriend" v-else>
      <i class="fa fa-user-plus"></i>
    </button>
  </template>-->

  <div class="btn-group">
    <template v-if="isFriend">
      <button
        class="btn btn-default btn-sm dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
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
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i> Add Friend
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
      sentRequst: false
    };
  },
  created() {
    if (!this.isFriend) {
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
          this.isFriend = false;
          this.sentRequst = false;
        });
    },
    blockFriend() {
      axios
        .post("/profiles/block-friend", {
          friend: this.recipient.id
        })
        .then(res => {
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
          flash(res.data.message);
        });
    }
  }
};
</script>

<style  scoped>
</style>