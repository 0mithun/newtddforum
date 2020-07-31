<template>
  <div>
    <div class="post-header">
      <div class="post-counts">{{ postCounts | formatCount }} posts</div>
      <div class="post-sorting">
        <select v-model="sort" class="sortBy">
          <option value="topRated">Top Rated</option>
          <option value="visits">Most Viewed</option>
          <option value="favorite_count">Most Favorited</option>
        </select>
      </div>
    </div>
    <div class="post-body">
      <single-thread v-for="(thread, index) in sortPosts" :thread="thread" :key="index"></single-thread>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile_user"],
  data() {
    return {
      sort: "topRated",
      subscribePosts: [],
    };
  },
  computed: {
    postCounts() {
      return this.subscribePosts.length;
    },
    posts() {
      return this.subscribePosts;
    },
    sortPosts() {
      let threads = _.orderBy(this.posts, [this.sort], "desc");
      return threads;
    },
  },
  created() {
    this.getAllSubscriptionPost();
  },
  methods: {
    sortBy(sort) {
      this.sort = sort;
    },
    getAllSubscriptionPost() {
      axios
        .get(`/profiles/${this.profile_user.username}/subscriptions`)
        .then((res) => {
          this.subscribePosts = res.data.threads;
        });
    },
  },
};
</script>

<style scoped>
.post-header {
  display: flex;
  padding: 15px 0;
}
.post-counts {
  color: black;
  font-weight: bold;
  margin-right: 20px;
}
.sortBy {
  background-color: transparent;
  border: none;
  outline: none;
  width: auto;
  color: rgb(255, 67, 1);
}
.sortBy:focus {
  outline: none;
  border: none;
}
</style>