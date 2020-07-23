<template>
  <div class="container">
    <div class="top-margin row">
      <div class="col-md-8">
        <div class="row profile-header">
          <div class="profile-avatar">
            <img src="/images/default.png" alt class="profile-img" />
          </div>
          <div class="profile-details">
            <h2 class="profile-name">
              #
              <span>{{ tag.name.toLowerCase() }}</span>
            </h2>
            <div class="profile-count">
              <post-counts :post_count="posts.length"></post-counts>
              <following-counts :following_count="followings.length"></following-counts>
            </div>
            <div class="profile-buttons">
              <button class="btn btn-danger btn-sm follow-btn">Follow</button>
            </div>
            <div class="profile-tags">
              <strong>Following:</strong>
              <a href="#" class="single-tags-name">
                #
                <span>Home</span>
              </a>
              <a href="#" class="single-tags-name">
                #
                <span>Entertainment</span>
              </a>
              <a href="#" class="single-tags-name">
                #
                <span>Television</span>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="post-header">
            <div class="post-counts">{{ postCounts }} posts</div>
          </div>
          <div class="post-body">
            <single-thread v-for="(thread, index) in posts" :thread="thread" :key="index"></single-thread>
          </div>
        </div>
      </div>
      <div class="col-md-4">sidebar</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  components: {},
  data() {
    return {
      posts: this.tag.threads,
      followings: []
    };
  },
  computed: {
    postCounts() {
      return abbreviate(this.posts.length, 1);
    }
  },
  created() {},
  methods: {
    // getAllPost() {
    //   axios.get(`/profiles/${this.profile_user.username}/threads`).then(res => {
    //     this.posts = res.data.threads;
    //   });
    // }
  }
};
</script>

<style  scoped>
.profile-header {
  margin: 30px auto;
  display: flex;
  align-items: center;
}
.profile-name {
  padding: 0;
  margin: 0;
}
.profile-name span {
  color: rgb(255, 67, 1);
}
.profile-buttons {
  padding: 10px 0px;
}
.profile-img {
  width: 120px;
  height: 120px;
  padding: 3px;
  border: 2px solid rgb(255, 67, 1);
  border-radius: 50%;
}

.profile-avatar {
  margin-right: 30px;
}
.profile-count {
  display: flex;
  align-items: center;
}

.profile-count > * {
  margin-left: 5px;
  margin-right: 5px;
}

.follow-btn {
  width: 100px;
  background-color: rgb(255, 67, 1);
}

.single-tags-name {
  color: black;
}
.single-tags-name span {
  color: rgb(255, 67, 1);
}
.post-counts {
  color: black;
  padding: 15px 0;
  font-weight: bold;
}
</style>