<template>
  <div class="container">
    <div class="top-margin row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-3">
            <img src="/images/default.png" alt class="profile-img" />
          </div>
          <div class="col-md-9">
            <h2 class="profile-name">{{ profile_user.name}}</h2>
            <div class="profile-count"></div>
            <div class="profile-buttons">
              <button class="btn btn-danger btn-sm follow-btn">Follow</button>
              <add-friend :recipient="profile_user" :isFriend="is_friend"></add-friend>

              <button class="btn btn-default btn-sm">
                <i class="fa fa-envelope"></i>
              </button>
              <!-- <button class="btn btn-primary" v-if="is_owner">Profile</button> -->
              <button class="btn btn-default btn-sm">
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
              </button>
              <div class="btn-group">
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
            <div class="profile-tags">Following: habijabi</div>
          </div>
        </div>
        <div class="row">
          <div class="profile-menu"></div>
        </div>
      </div>
      <div class="col-md-4">sidebar</div>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {};
  },
  computed: {
    settingsUrl() {
      return `/profiles/${this.profile_user.username}/settings`;
    },
    editUrl() {
      return `/profiles/${this.profile_user.username}/edit`;
    }
  },
  created() {
    console.log("paisi");
  },
  methods: {}
};
</script>

<style  scoped>
.profile-buttons {
}
.follow-btn {
  width: 100px;
}
</style>