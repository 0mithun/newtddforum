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
              <post-counts :post_count="profilePostCount"></post-counts>
              <like-counts :like_counts="profileLikeCount"></like-counts>
              <comment-counts :comment_count="comments"></comment-counts>
              <favorite-counts :favorite_count="profileFavoriteCount"></favorite-counts>
            </div>
            <div class="profile-buttons">
              <template v-if="!is_owner">
                <button
                  class="btn btn-sm unfollow-btn"
                  @click.prevent="toggleFollow"
                  v-if="isFollow"
                >Unfllow</button>
                <button class="btn btn-sm follow-btn" @click.prevent="toggleFollow" v-else>Follow</button>
              </template>
              <add-friend :recipient="profile_user" :isFriend="is_friend" v-if="!is_owner"></add-friend>

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
            <div class="profile-tags" v-if="followings.length> 0">
              <strong>Following:</strong>
              <a
                :href="profilePath(following)"
                class="single-tags-name"
                v-for="(following,index) in followings"
                :key="index"
              >
                #
                <span>{{ following.name.toLowerCase() }}</span>
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
                <a data-toggle="tab" href="#friends" v-if="isShowFriends">
                  Friends
                  <span
                    style="color:black; font-weight:bold"
                  >{{ friendsCount | formatCount }}</span>
                </a>
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
              <div class="tab-pane following-details" id="following">
                <div class="post-header">
                  <!-- <div class="post-counts">{{ postCounts }} posts</div> -->
                </div>
                <div class="post-body">
                  <div class="row">
                    <div class="col-md-4" v-for="(friend, index) in followings" :key="index">
                      <div class="profile-single-item">
                        <a :href="profilePath(friend)">
                          <img
                            :src="friend.profileAvatarPath"
                            :alt="friend.name"
                            class="friends-avatar"
                          />
                        </a>
                        <a :href="profilePath(friend)" class="friends-name">{{ friend.name }}</a>
                        <button
                          class="btn btn-primary btn-sm unfriend-btn"
                          @click.prevent="unfollow(friend)"
                        >
                          <i class="fa fa-user-times"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane post-details" id="posts">
                <PostTab :profile_user="profile_user" />
              </div>
              <div class="tab-pane favorite-details" id="favorites">
                <FavoriteTab :profile_user="profile_user" />
              </div>
              <div class="tab-pane like-details" id="likes">
                <LikeTab :profile_user="profile_user" />
              </div>
              <div class="tab-pane like-details" id="subscriptions">
                <SubscribeTab :profile_user="profile_user" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 sidebar">
        <trending-thread></trending-thread>
      </div>
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
import PostTab from "./PostsTab";
import LikeTab from "./LikeTab";
import FavoriteTab from "./LikeTab";
import SubscribeTab from "./SubscribeTab";
export default {
  props: {
    profile_user: {
      required: true,
    },
    profile_user_privacy: {
      type: Object,
      required: true,
    },
    is_friend: {
      type: Boolean,
      required: true,
    },
    is_owner: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    About,
    Friends,
    PostTab,
    LikeTab,
    FavoriteTab,
    SubscribeTab,
  },
  data() {
    return {
      showModal: false,
      showMessageButton: true,
      newMessage: "",

      favorites: [],
      likes: [],
      comments: [],
      isFollow: false,
    };
  },
  computed: {
    profilePostCount() {
      return this.$store.getters.profilePostcount;
    },
    profileLikeCount() {
      return this.$store.getters.profileLikeCount;
    },
    profileFavoriteCount() {
      return this.$store.getters.profileFavoritecount;
    },
    followings() {
      return this.$store.getters.followings;
    },
    friendsCount() {
      return this.$store.getters.friends.length;
    },
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
  },
  created() {
    this.checkPrivacy();
    if (this.isShowPosts) {
      this.getAllPost();
    }
    if (this.isShowFavorites) {
      // this.getAllFavoritePost();
    }
    if (this.is_owner) {
      this.getAllLikePost();
      // this.getAllSubscriptionPost();
    }

    if (!this.is_owner) {
      this.checkIsFollow();
    }
  },
  methods: {
    getAllPost() {
      axios
        .get(`/profiles/${this.profile_user.username}/threads`)
        .then((res) => {
          // this.posts = res.data.threads;
          this.$store.dispatch("profilePosts", res.data.threads);
        });
    },
    getAllLikePost() {
      axios.get(`/profiles/${this.profile_user.username}/likes`).then((res) => {
        // this.posts = res.data.threads;
        this.$store.dispatch("profileLikePosts", res.data.threads);
      });
    },
    getAllFavoritePost() {
      axios
        .get(`/profiles/${this.profile_user.username}/favorites`)
        .then((res) => {
          // this.posts = res.data.threads;
          this.$store.dispatch("profileFavoritePosts", res.data.threads);
        });
    },
    toggleFollow() {
      let url = `/user/${this.profile_user.username}/follow`;

      axios.post(url).then((res) => {
        if (this.isFollow) {
          this.$store.dispatch("removeFollowers", window.App.user.id);
        } else {
          this.$store.dispatch("addFollowers", window.App.user);
        }
        this.isFollow = !this.isFollow;

        flash(res.data.message);
      });
    },
    unfollow(friend) {
      let url = "";
      if (friend.followType == "tag") {
        url = `/tag/${friend.id}/follow`;
      } else if (friend.followType == "user") {
        url = `/user/${friend.username}/follow`;
      }
      axios.post(url).then((res) => {
        this.$store.dispatch("removeFollowings", friend);

        flash(res.data.message);
      });
    },
    profilePath(item) {
      if (item.followType == "user") {
        return `/profiles/${item.username}`;
      } else if (item.followType === "tag") {
        return `/threads/${item.name.toLowerCase()}`;
      }
    },
    checkIsFollow() {
      axios.get(`/user/${this.profile_user.username}/is-follow`).then((res) => {
        this.isFollow = res.data;
      });
    },
    checkPrivacy() {
      if (this.is_friend) {
        this.showMessageButton = true;
      } else if (this.profile_user.userprivacy.send_me_message === 2) {
        this.showMessageButton = true;
      } else if (this.profile_user.userprivacy.send_me_message === 1) {
        this.showMessageButton = false;
      }
    },

    sendMessage() {
      axios
        .post("/chat-send-message", {
          message: this.newMessage,
          friend: this.profile_user.id,
          friend_message: this.is_friend,
        })
        .then((res) => {
          this.newMessage = "";
          this.showModal = false;
          $("#messageModal").modal("hide");
        });
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
  color: white;
}

.unfollow-btn {
  width: 100px;
  background-color: red;
  color: white;
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

.friends-avatar {
  width: 80px;
  height: 80px;
  padding: 10px;
  border-radius: 15px;
}
.friends-name {
  font-size: 14px;
  color: black;
  font-weight: bold;
  padding: 0;
}
.unfriend-btn {
  margin-left: auto;
}
.sidebar {
  margin: 30px auto;
}
.counts-item {
  margin: 0 5px;
}
</style>