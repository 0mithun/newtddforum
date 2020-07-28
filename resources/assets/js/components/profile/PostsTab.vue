<template>
  <div>
    <div class="post-header">
      <div class="post-counts">{{ postCounts | formatCount }} posts</div>
      <div class="post-sorting">
        <div class="dropdown">
          <button
            class="btn sorting-btn dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="#" @click.prevent="sortPost('top')">Top Rated</a>
            </li>
            <li>
              <a href="#" @click.prevent="sortPost('top')">Most Viewed</a>
            </li>
            <li>
              <a href="#" @click.prevent="sortPost('top')">Most Favorited</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="post-body">
      <single-thread v-for="(thread, index) in posts" :thread="thread" :key="index"></single-thread>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile_user"],
  data() {
    return {
      //   posts: [],
    };
  },
  computed: {
    postCounts() {
      return this.$store.getters.profilePostcount;
    },
    posts() {
      return this.$store.getters.profilePosts;
    },
  },
  created() {
    // this.getAllPost();
  },
  methods: {},
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
</style>