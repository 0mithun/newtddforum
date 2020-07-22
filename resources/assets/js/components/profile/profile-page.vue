<template>
  <div class="container">
    <div class="top-margin row">
      <div class="col-md-8">
        <div class="row profile-header">
          <div class="profile-avatar">
            <img src="/images/default.png" alt class="profile-img" />
          </div>
          <div class="profile-details">
            <h2 class="profile-name">{{ profile_user.name}}</h2>
            <div class="profile-count">
              <post-counts :post_count="posts.length"></post-counts>
              <like-counts :like_counts="likes.length"></like-counts>
              <comment-counts :comment_count="comments.length"></comment-counts>
              <favorite-counts :favorite_count="favorites.length"></favorite-counts>
            </div>
            <div class="profile-buttons">
              <button class="btn btn-danger btn-sm follow-btn">Follow</button>
              <add-friend :recipient="profile_user" :isFriend="is_friend"></add-friend>

              <button
                class="btn btn-default btn-sm"
                data-toggle="modal"
                data-target="#messageModal"
                v-if="showMessageButton"
                @click="showModal=true"
              >
                <i class="fa fa-envelope"></i>
              </button>

              <div class="btn-group" v-if="is_owner">
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
                    <a :href="editUrl">Edit my information</a>
                    <a :href="settingsUrl">Settings</a>
                  </li>
                </ul>
              </div>
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
        <div class="row" v-if="isShowProfile">
          <div class="profile-menu">
            <ul class="nav nav-tabs profile-nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#about">About</a>
              </li>
              <li>
                <a data-toggle="tab" href="#friends" v-if="isShowFriends">Friends</a>
              </li>
              <li>
                <a data-toggle="tab" href="#following">Following</a>
              </li>
              <li>
                <a data-toggle="tab" href="#posts" v-if="isShowPosts">Posts</a>
              </li>
              <li>
                <a data-toggle="tab" href="#favorites" v-if="isShowFavorites">Favorites</a>
              </li>
              <li>
                <a data-toggle="tab" href="#likes" v-if="is_owner">Likes</a>
              </li>
              <li>
                <a data-toggle="tab" href="#subscriptions" v-if="is_owner">Subscriptions</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active about-details" id="about">
                <About :profile_user="profile_user" :is_owner="is_owner"></About>
              </div>
              <div class="tab-pane friend-details" id="friends">
                <Friends
                  :profile_user="profile_user"
                  :is_owner="is_owner"
                  :is_friend="is_friend"
                  :profileUserPrivacy="profile_user_privacy"
                  v-if="isShowFriends"
                ></Friends>
              </div>
              <div class="tab-pane following-details" id="following">following</div>

              <div class="tab-pane post-details" id="posts">
                <div class="post-header">
                  <div class="post-counts">{{ postCounts }} posts</div>
                </div>
                <div class="post-body">
                  <single-thread v-for="(thread, index) in posts" :thread="thread" :key="index"></single-thread>
                </div>
              </div>
              <div class="tab-pane favorite-details" id="favorites">
                <div class="post-header">
                  <div class="post-counts">{{ favoriteCounts }} posts</div>
                </div>
                <div class="post-body">
                  <single-thread v-for="(thread, index) in favorites" :thread="thread" :key="index"></single-thread>
                </div>
              </div>
              <div class="tab-pane like-details" id="likes">
                <div class="post-header">
                  <div class="post-counts">{{ likeCounts }} posts</div>
                </div>
                <div class="post-body">
                  <single-thread v-for="(thread, index) in likes" :thread="thread" :key="index"></single-thread>
                </div>
              </div>
              <div class="tab-pane like-details" id="subscriptions">
                <div class="post-header">
                  <div class="post-counts">{{ subscriptionCounts }} posts</div>
                </div>
                <div class="post-body">
                  <single-thread
                    v-for="(thread, index) in subscriptions"
                    :thread="thread"
                    :key="index"
                  ></single-thread>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">sidebar</div>
    </div>

    <div
      class="modal fade"
      id="messageModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="exampleModalLabel">New message</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <textarea class="form-control" id="message-text" v-model="newMessage"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="sendMessage"
              :disabled="newMessage == ''"
            >Send message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./ProfileAbout";
import Friends from "./ProfileFriends";
export default {
  props: {
    profile_user: {
      required: true
    },
    profile_user_privacy: {
      type: Object,
      required: true
    },
    is_friend: {
      type: Boolean,
      required: true
    },
    is_owner: {
      type: Boolean,
      required: false
    }
  },
  components: {
    About,
    Friends
  },
  data() {
    return {
      showModal: false,
      showMessageButton: true,
      newMessage: "",
      posts: [],
      favorites: [],
      likes: [],
      subscriptions: [],
      comments: []
    };
  },
  computed: {
    isShowProfile() {
      if (this.is_owner == true) {
        return true;
      } else if (this.profile_user.id == 1) {
        return true;
      } else if (this.profile_user_privacy.see_my_profiles == 3) {
        return true;
      } else if (
        this.profile_user_privacy.see_my_profiles == 2 &&
        this.is_friend == true
      ) {
        return true;
      }
    },
    isShowFriends() {
      if (this.is_owner == true) {
        return true;
      } else if (this.profile_user.id == 1) {
        return true;
      } else if (this.profile_user_privacy.see_my_friends == 3) {
        return true;
      } else if (
        this.profile_user_privacy.see_my_friends == 2 &&
        this.is_friend == true
      ) {
        return true;
      }
    },
    isShowPosts() {
      if (this.is_owner == true) {
        return true;
      } else if (this.profile_user.id == 1) {
        return true;
      } else if (this.profile_user_privacy.see_my_threads == 3) {
        return true;
      } else if (
        this.profile_user_privacy.see_my_threads == 2 &&
        this.is_friend == true
      ) {
        return true;
      }
    },
    isShowFavorites() {
      if (this.is_owner == true) {
        return true;
      } else if (this.profile_user.id == 1) {
        return true;
      } else if (this.profile_user_privacy.see_my_favorites == 3) {
        return true;
      } else if (
        this.profile_user_privacy.see_my_favorites == 2 &&
        this.is_friend == true
      ) {
        return true;
      }
    },

    settingsUrl() {
      return `/profiles/${this.profile_user.username}/settings`;
    },
    editUrl() {
      return `/profiles/${this.profile_user.username}/edit`;
    },
    postCounts() {
      return abbreviate(this.posts.length, 1);
    },
    favoriteCounts() {
      return abbreviate(this.favorites.length, 1);
    },
    likeCounts() {
      return abbreviate(this.likes.length, 1);
    },
    subscriptionCounts() {
      return abbreviate(this.subscriptions.length, 1);
    }
  },
  created() {
    this.checkPrivacy();
    if (this.isShowPosts) {
      this.getAllPost();
    }
    if (this.isShowFavorites) {
      this.getAllFavoritePost();
    }
    if (this.is_owner) {
      this.getAllLikePost();
      this.getAllSubscriptionPost();
    }
  },
  methods: {
    checkPrivacy() {
      if (this.is_friend) {
        this.showMessageButton = true;
      } else if (this.profile_user.userprivacy.send_me_message === 2) {
        this.showMessageButton = true;
      } else if (this.profile_user.userprivacy.send_me_message === 1) {
        this.showMessageButton = false;
      }
    },
    getAllPost() {
      axios.get(`/profiles/${this.profile_user.username}/threads`).then(res => {
        this.posts = res.data.threads;
      });
    },
    getAllFavoritePost() {
      axios
        .get(`/profiles/${this.profile_user.username}/favorites`)
        .then(res => {
          // console.log(res.data);
          this.favorites = res.data.threads;
        });
    },
    getAllLikePost() {
      axios.get(`/profiles/${this.profile_user.username}/likes`).then(res => {
        this.likes = res.data.threads;
        // console.log(res.data.threads);
      });
    },
    getAllSubscriptionPost() {
      axios
        .get(`/profiles/${this.profile_user.username}/subscriptions`)
        .then(res => {
          this.subscriptions = res.data.threads;
        });
    },
    sendMessage() {
      axios
        .post("/chat-send-message", {
          message: this.newMessage,
          friend: this.profile_user.id,
          friend_message: this.is_friend
        })
        .then(res => {
          this.newMessage = "";
          this.showModal = false;
          $("#messageModal").modal("hide");
        });
    }
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
  color: black;
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
  justify-content: space-between;
}
.follow-btn {
  width: 100px;
  background-color: rgb(255, 67, 1);
}

.nav-tabs > li > a {
  color: black;
  border: none;
  margin-right: 0;
}
.nav-tabs > li > a,
.nav-tabs > li > a:hover,
.nav-tabs > li > a:focus {
  border: none;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  background-color: #f5f8fa;
  border-bottom: 3px solid rgb(255, 67, 1);
  cursor: default;
}
.profile-nav-tabs {
  display: flex;
  justify-content: space-between;
}
.profile-nav-tabs::before,
.profile-nav-tabs::after {
  content: none;
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