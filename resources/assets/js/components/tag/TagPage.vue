<template>
  <div class="container">
    <div class="top-margin row">
      <div class="col-md-8">
        <div class="panel">
          <div class="panel-body">
            <div class="row profile-header">
              <div class="profile-avatar">
                <img :src="tag.profileAvatarPath" alt class="profile-img" />
              </div>
              <div class="profile-details">
                <h2 class="profile-name">
                  <span>#{{ tag.name.toLowerCase() }}</span>
                </h2>
                <div class="profile-count">
                  <post-counts :post_count="posts.length"></post-counts>
                  <following-counts :following_count="followings.length"></following-counts>
                </div>
                <div class="profile-buttons">
                  <button
                    class="btn btn-sm unfollow-btn"
                    @click.prevent="toggleFollow"
                    v-if="isFollow"
                  >Unfllow</button>
                  <button class="btn btn-sm follow-btn" @click.prevent="toggleFollow" v-else>Follow</button>
                </div>
                <!-- <div class="profile-tags">
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
                </div>-->
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="post-header">
                  <div class="post-counts">{{ postCounts }} posts</div>
                </div>
                <div class="post-body">
                  <single-thread v-for="(thread, index) in posts" :thread="thread" :key="index"></single-thread>
                  <nav aria-label="..." v-if="totalPage > 1">
                    <ul class="pagination">
                      <li v-if="currentPage != 1">
                        <span>
                          <span aria-hidden="true">&laquo;</span>
                        </span>
                      </li>
                      <li
                        v-for="page in totalPage"
                        :key="page"
                        @click="onPageChange(page)"
                        :class="{ active: currentPage == page }"
                      >
                        <span>
                          {{ page }}
                          <span class="sr-only">{{ page }}</span>
                        </span>
                      </li>

                      <li v-if="currentPage != totalPage">
                        <span>
                          <span aria-hidden="true">&raquo;</span>
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 sidebar">
        <trending-thread></trending-thread>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      posts: this.tag.threads,
      followings: [],
      isFollow: false,
      page: 1,
      perPage: 10,
      paginatedItems: [],
    };
  },
  computed: {
    postCounts() {
      return abbreviate(this.posts.length, 1);
    },
    currentPage() {
      return this.page;
    },
    totalPage() {
      return Math.ceil(this.posts.length / this.perPage);
    },
  },
  created() {
    this.checkIsFollow();
    this.getAllFollowings();

    this.setCurrentPage();
    this.paginate(this.perPage, 1);
  },
  methods: {
    toggleFollow() {
      axios.post(`/tag/${this.tag.id}/follow`).then((res) => {
        // this.isFollow = !this.isFollow;
        if (this.isFollow) {
          let newFollowings = this.followings.filter((item) => {
            return item.id != window.App.user.id;
          });
          this.followings = newFollowings;
          this.isFollow = false;
        } else {
          let newFollowings = [...this.followings, window.App.user];
          this.followings = newFollowings;
          this.isFollow = true;
        }
        flash(res.data.message);
      });
    },
    checkIsFollow() {
      axios.get(`/tag/${this.tag.id}/is-follow`).then((res) => {
        this.isFollow = res.data;
      });
    },
    getAllFollowings() {
      axios.get(`/tag/${this.tag.id}/followings`).then((res) => {
        this.followings = res.data.followings;
      });
    },

    setCurrentPage() {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("page");

      if (page && page != "") {
        this.page = page;
      } else {
        this.page = this.page;
      }
    },
    paginate(per_page, page_number) {
      let itemsToParse = this.tag.threads;
      let start = (page_number - 1) * per_page;
      let end = page_number * per_page;
      const newThreads = itemsToParse.slice(start, end);

      this.paginatedItems = newThreads;
    },

    onPageChange(page) {
      this.page = page;

      history.pushState(null, null, "?page=" + page);
      this.paginate(this.perPage, page);
    },
  },
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
  color: white;
}

.unfollow-btn {
  width: 100px;
  background-color: red;
  color: white;
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
.sidebar {
  margin: 30px auto;
}
</style>