<template>
  <div>
    <div class="post-header">
      <div class="post-counts">{{ postCounts | formatCount }}   {{ postsCount | strPlural('post') }} </div>
      <div class="post-sorting">
        <select v-model="sort" class="sortBy">
          <option value="topRated">Top Rated</option>
          <option value="visits">Most Viewed</option>
          <option value="favorite_count">Most Favorited</option>
        </select>
      </div>
    </div>
    <div class="post-body">
      <single-thread v-for="(thread, index) in posts" :thread="thread" :key="index"></single-thread>
      <div class="load-more-btn" v-if="page< totalPage">
        <button class="btn btn-primary" type="button" disabled v-if="loading">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
        </button>
          <button class="btn btn-primary btn-sm" @click.prevent="loadMore" v-else >Load More</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile_user"],
  data() {
     return {
      sort: "topRated",
       page:1,
      loading: false,
      subscribePosts: []
    };
  },
   watch:{
    sort(sortBy){
      this.subscribePosts = []
      this.getAllPost();
    }
  },
  computed: {
    postCounts() {
      return this.subscribePosts.length;
    },
    posts() {
      return this.subscribePosts;
    },
        totalPage() {
      return Math.ceil(this.postCounts / 10);
    },
    signedIn() {
      return window.App.user ? true : false;
    },

  },
  created() {
    this.getAllPost();
  },
  methods: {
    loadMore(){
      this.page = this.page + 1
      this.getAllPost();
    },
    getAllPost() {
      this.loading = true;
      let query = `?page=${this.page}&sort_by=${this.sort}`;
      let url = `/profiles/${this.profile_user.username}/subscriptions${query}`;
      axios
        .get(url)
        .then((res) => {
          let threads = []
          let old_threads = this.subscribePosts;
          threads = [...old_threads, ...res.data.threads];
          this.subscribePosts = threads;
          this.loading = false;
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