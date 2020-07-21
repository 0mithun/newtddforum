<template>
  <div>
    <div class="friends-header">
      <div class="friends-menu">
        <ul class="nav nav-tabs friend-nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#friend-friends">Friends</a>
          </li>
          <li class v-if="is_owner">
            <a data-toggle="tab" href="#friend-request">Friend Requests</a>
          </li>
          <li v-if="is_owner">
            <a data-toggle="tab" href="#friend-blocking">Blockng</a>
          </li>
          <li>
            <a data-toggle="tab" href="#friend-following">Following</a>
          </li>
          <li>
            <a data-toggle="tab" href="#friend-followers">Followers</a>
          </li>
        </ul>
      </div>
      <div class="friends-search">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-pane active" id="friend-friends">
        <div class="row">
          <div class="col-md-4" v-for="(friend, index) in friendsList" :key="index">
            <div class="profile-single-item">
              <a :href="`/profiles/${friend.username}`">
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a :href="`/profiles/${friend.username}`" class="friends-name">{{ friend.name }}</a>

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
          <div class="col-md-4" v-for="(friend, index) in friendRequests" :key="index">
            <div class="profile-single-item">
              <a :href="`/profiles/${friend.username}`">
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a :href="`/profiles/${friend.username}`" class="friends-name">{{ friend.name }}</a>

              <button
                class="btn btn-primary btnn-sm unfriend-btn"
                @click.prevent="accept(friend.id)"
              >
                <i class="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="friend-blocking" v-if="is_owner">
        <div class="row">
          <div class="col-md-4" v-for="(friend, index) in blockLists" :key="index">
            <div class="profile-single-item">
              <a>
                <img :src="friend.profileAvatarPath" :alt="friend.name" class="friends-avatar" />
              </a>
              <a class="friends-name">{{ friend.name }}</a>

              <button
                class="btn btn-primary btnn-sm unfriend-btn"
                @click.prevent="unblock(friend.id)"
              >
                <i class="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="friend-following">Following</div>
      <div class="tab-pane" id="friend-followers">Followers</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile_user", "is_owner", "is_friend", "profileUserPrivacy"],
  data() {
    return {
      friendsList: [],
      friendRequests: [],
      blockLists: []
    };
  },
  computed: {},
  created() {
    this.getAllFriends();

    if (this.is_owner == true) {
      this.getAllFriendRequests();
      this.getAllBlockList();
    }
  },
  methods: {
    unFriend(id) {
      axios
        .post("/friend/unfriend", {
          friend: id
        })
        .then(res => {
          const filterFriend = this.friendsLis.filter(friend => {
            return friend.id != id;
          });
          this.friendsList = filterFriend;
        });
    },
    accept(id) {
      axios
        .post("/profiles/accept-friend", {
          friend: id
        })
        .then(res => {
          const newFriendRequests = this.friendRequests.filter(friend => {
            return friend.id != id;
          });
          this.friendRequests = newFriendRequests;
        });
      const newFriend = this.friendRequests.filter(friend => {
        return friend.id === id;
      });
      this.friendsList.push(newFriend);
    },
    unblock(id) {
      axios
        .post("/profiles/unblock-friends", {
          friend: id
        })
        .then(res => {
          const newBlockList = this.blockList.filter(friend => {
            return friend.id != id;
          });
          this.blockList = newBlockList;
          flash("Unblock successfully");
        });
    },
    getAllFriends() {
      axios
        .get(`/profiles/${this.profile_user.username}/friend-list`)
        .then(res => {
          this.friendsList = res.data.friends;
        });
    },
    getAllFriendRequests() {
      axios
        .get(`/profiles/${this.profile_user.username}/friend-request`)
        .then(res => {
          this.friendRequests = res.data.friendRequests;
        });
    },
    getAllBlockList() {
      axios
        .get(`/profiles/${this.profile_user.username}/block-friends`)
        .then(res => {
          this.blockLists = res.data.blockList;
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