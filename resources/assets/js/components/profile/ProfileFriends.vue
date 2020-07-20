<template>
  <div>
    <div class="friends-header">
      <div class="friends-menu">
        <ul class="nav nav-tabs friend-nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#friend-friends">Friends</a>
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
      <div class="tab-pane" id="friend-following">Following</div>
      <div class="tab-pane" id="friend-followers">Followers</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile_user"],
  data() {
    return {
      friendsList: []
    };
  },

  created() {
    this.getAllFriends();
  },
  methods: {
    unFriend(id) {
      axios
        .post("/friend/unfriend", {
          friend: id
        })
        .then(res => {
          console.log("unfriend");
          const filterFriend = this.friendsLis.filter(friend => {
            return friend.id != id;
          });
          this.friendsList = filterFriend;
        });
    },
    getAllFriends() {
      axios
        .get(`/profiles/${this.profile_user.username}/friend-list`)
        .then(res => {
          this.friendsList = res.data.friends;
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