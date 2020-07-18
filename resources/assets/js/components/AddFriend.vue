<template>
  <fragement>
    <template v-if="isFriend">
      <button class="btn btn-danger btn-sm" @click.prevent="unFriend">
        <i class="fa fa-times"></i>
      </button>
    </template>
    <template v-else>
      <button class="btn btn-success btn-sm" v-if="sentRequst">Request Sent</button>
      <button class="btn btn-default btn-sm" @click.prevent="addFriend" v-else>
        <i class="fa fa-user-plus"></i>
      </button>
    </template>
  </fragement>
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
    }
  }
};
</script>

<style  scoped>
</style>