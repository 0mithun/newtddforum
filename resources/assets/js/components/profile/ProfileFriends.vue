<template>
  <div>
    <div class="friends-header">
      <div class="friends-menu">
        <ul class="nav nav-tabs friend-nav-tabs">
          <li class="active" @click="searchItem=''">
            <a data-toggle="tab" href="#friend-friends">Friends</a>
          </li>
          <li class v-if="is_owner" @click="searchItem=''">
            <a data-toggle="tab" href="#friend-request">Friend Requests</a>
          </li>
          <li v-if="is_owner" @click="searchItem=''">
            <a data-toggle="tab" href="#friend-blocking">Blockng</a>
          </li>
          <li @click="searchItem=''">
            <a data-toggle="tab" href="#friend-following">Following</a>
          </li>
          <li @click="searchItem=''">
            <a data-toggle="tab" href="#friend-followers">Followers</a>
          </li>
        </ul>
      </div>
      <div class="friends-search">
        <input type="text" class="form-control" placeholder="Search" v-model="searchItem" />
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-pane active" id="friend-friends">
        <div class="row">
          <div class="col-md-4" v-for="(friend, index) in filterFriendLists" :key="index">
            <div class="profile-single-item">
              <a :href="profilePath(friend)">
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a :href="profilePath(friend)" class="friends-name">{{ friend.name }}</a>

              <button
                class="btn btn-danger btn-sm unfriend-btn"
                @click.prevent="unFriend(friend.id)"
              >
                <i class="fa fa-user-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="friend-request" v-if="is_owner">
        <div class="row">
          <div class="col-md-4" v-for="(friend, index) in filterFriendRequests" :key="index">
            <div class="profile-single-item">
              <a :href="profilePath(friend)">
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a :href="profilePath(friend)" class="friends-name">{{ friend.name }}</a>

              <button class="btn btn-primary btn-sm" @click.prevent="accept(friend.id)">
                <i class="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="friend-blocking" v-if="is_owner">
        <div class="row">
          <div class="col-md-4" v-for="(friend, index) in filterBlockLists" :key="index">
            <div class="profile-single-item">
              <a :href="profilePath(friend)">
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a :href="profilePath(friend)" class="friends-name">{{ friend.name }}</a>

              <button
                class="btn btn-primary btn-sm unfriend-btn"
                @click.prevent="unblock(friend.id)"
              >
                <i class="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="friend-following">
        <div class="row">
          <div class="col-md-4" v-for="(friend, index) in filterFollowings" :key="index">
            <div class="profile-single-item">
              <a :href="profilePath(friend)">
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a :href="profilePath(friend)" class="friends-name">{{ friend.name }}</a>
              <button
                class="btn btn-primary btn-sm unfriend-btn"
                @click.prevent="unfollow(friend)"
                v-if="is_owner"
              >
                <i class="fa fa-user-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="friend-followers">
        <div class="row">
          <div class="col-md-4" v-for="(friend, index) in filterFollowers" :key="index">
            <div class="profile-single-item">
              <a :href="profilePath(friend)">
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a :href="profilePath(friend)" class="friends-name">{{ friend.name }}</a>

              <!-- <button
                class="btn btn-primary btn-sm unfriend-btn"
                @click.prevent="unblock(friend.id)"
              >
                <i class="fa fa-user"></i>
              </button>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile_user", "is_owner", "is_friend", "profileUserPrivacy"],
  data() {
    return {
      // blockLists: [],
      // followers: []
      // followings: []
      searchItem: ""
    };
  },
  computed: {
    friendLists() {
      return this.$store.getters.friends;
    },
    filterFriendLists() {
      return this.friendLists.filter(item => {
        return item.name.toLowerCase().includes(this.searchItem.toLowerCase());
      });
    },
    friendRequests() {
      return this.$store.getters.friendRequests;
    },
    filterFriendRequests() {
      return this.friendRequests.filter(item => {
        return item.name.toLowerCase().includes(this.searchItem.toLowerCase());
      });
    },
    blockLists() {
      return this.$store.getters.blockLists;
    },
    filterBlockLists() {
      return this.blockLists.filter(item => {
        return item.name.toLowerCase().includes(this.searchItem.toLowerCase());
      });
    },
    followings() {
      return this.$store.getters.followings;
    },
    filterFollowings() {
      return this.followings.filter(item => {
        return item.name.toLowerCase().includes(this.searchItem.toLowerCase());
      });
    },

    followers() {
      return this.$store.getters.followers;
    },
    filterFollowers() {
      return this.followers.filter(item => {
        return item.name.toLowerCase().includes(this.searchItem.toLowerCase());
      });
    }
  },
  created() {
    this.getAllFriends();
    this.getAllFollowers();
    this.getAllFollowings();

    if (this.is_owner == true) {
      this.getAllFriendRequests();
      this.getAllBlockList();
    }
  },
  methods: {
    unfollow(friend) {
      let url = "";
      if (friend.followType == "tag") {
        url = `/tag/${friend.id}/follow`;
      } else if (friend.followType == "user") {
        url = `/user/${friend.username}/follow`;
      }
      axios.post(url).then(res => {
        this.$store.dispatch("removeFollowings", friend);

        flash(res.data.message);
      });
    },
    profilePath(item) {
      // return `/profiles/${user.username}`;
      if (item.followType == "user") {
        return `/profiles/${item.username}`;
      } else if (item.followType === "tag") {
        return `/threads/${item.name.toLowerCase()}`;
      }
    },
    getAllFollowers() {
      axios.get(`/user/${this.profile_user.username}/followers`).then(res => {
        // this.followers = res.data.followers;
        this.$store.dispatch("followers", res.data.followers);
      });
    },
    getAllFollowings() {
      axios.get(`/user/${this.profile_user.username}/followings`).then(res => {
        // this.followings = res.data.followings;
        this.$store.dispatch("followings", res.data.followings);
      });
    },
    unFriend(id) {
      axios
        .post("/friend/unfriend", {
          friend: id
        })
        .then(res => {
          this.$store.dispatch("removeFriend", id);
        });
    },
    accept(id) {
      axios
        .post("/profiles/accept-friend", {
          friend: id
        })
        .then(res => {
          const newFriend = this.friendRequests.filter(friend => {
            return friend.id === id;
          });
          this.$store.dispatch("removeFriendRequest", id);
          this.$store.dispatch("addFriend", ...newFriend);
        });
    },
    unblock(id) {
      axios
        .post("/profiles/unblock-friends", {
          friend: id
        })
        .then(res => {
          this.$store.dispatch("unblock", id);

          flash("Unblock successfully");
        });
    },
    getAllFriends() {
      axios
        .get(`/profiles/${this.profile_user.username}/friend-list`)
        .then(res => {
          this.$store.dispatch("friends", res.data.friends);
        });
    },
    getAllFriendRequests() {
      axios
        .get(`/profiles/${this.profile_user.username}/friend-request`)
        .then(res => {
          this.$store.dispatch("friendRequests", res.data.friendRequests);
        });
    },
    getAllBlockList() {
      axios
        .get(`/profiles/${this.profile_user.username}/block-friends`)
        .then(res => {
          this.$store.dispatch("blockLists", res.data.blockLists);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.friends-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.nav-tabs.friend-nav-tabs > li > a {
  color: black;
  border: none;
  margin-right: 0;
  padding-left: 30px;
  padding-right: 30px;
}

.nav-tabs.friend-nav-tabs > li:first-child > a {
  padding-left: 10px;
}
.nav-tabs.friend-nav-tabs > li:last-child > a {
  padding-right: 10px;
}
.nav-tabs.friend-nav-tabs > li > a,
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

.friend-nav-tabs::before,
.friend-nav-tabs::after {
  content: none;
}
.friend-nav-tabs {
  border: none;
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
</style>