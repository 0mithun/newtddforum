<template>
  <div class="container">
    <div class="top-margin row">
      <div class="col-md-8">
        <div class="row profile-header">
          <div class="col-md-3">
            <img src="/images/default.png" alt class="profile-img" />
          </div>
          <div class="col-md-9">
            <h2 class="profile-name">{{ profile_user.name}}</h2>
            <div class="profile-count"></div>
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
            <div class="profile-tags"> <strong>Following:</strong>
                <a href="#" class="single-tags-name">#<span>Home</span> </a> 
                <a href="#" class="single-tags-name">#<span>Entertainment</span> </a> 
                <a href="#" class="single-tags-name">#<span>Television</span> </a> 
            </div>
          </div>
        </div>
        <div class="row">
          <div class="profile-menu">
            <ul class="nav nav-tabs profile-nav-tabs">
              <li class="active"><a data-toggle="tab"  href="#about">About</a></li>
              <li><a data-toggle="tab" href="#friends">Friends</a></li>
              <li><a data-toggle="tab" href="#posts">posts</a></li>
              <li><a data-toggle="tab" href="#favorites">Favorites</a></li>
              <li><a data-toggle="tab" href="#likes">likes</a></li>
              <li><a data-toggle="tab" href="#following">Following</a></li>
              <li><a data-toggle="tab" href="#comments">Comments</a></li>
            </ul>
            <div class="tab-content">

                <div class="tab-pane active about-details" id="about">
                    <div class="about-header">
                      <h4 class="about-name" >About {{profile_user.name  }}</h4>
                      <button class="btn btn-default btn-sm about-edit-btn">
                        <i class="fa fa-pencil"></i>
                      </button>
                    </div>
                    <div v-html="profile_user.about"></div>
                    <profile-map :profile_user="profile_user"></profile-map>
                </div>
                <div class="tab-pane  friend-details" id="friends"> 
                    friends
                </div>
                <div class="tab-pane  post-details" id="posts"> 
                    posts
                </div>
                <div class="tab-pane  favorite-details" id="favorites"> 
                    favorites
                </div>
                <div class="tab-pane  like-details" id="likes"> 
                    likes
                </div>
                <div class="tab-pane  following-details" id="following"> 
                    following
                </div>
                <div class="tab-pane  comments-details" id="comments"> 
                    comments
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
    return {
      showModal: false,
      showMessageButton: true,
      newMessage:''
    };
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
        this.checkPrivacy();
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
    },
  }
};
</script>

<style  scoped>
.profile-header{
  margin: 30px auto;
}
  .profile-buttons {
    padding: 10px 0px;
  }
  .follow-btn {
    width: 100px;
  }
  .nav-tabs > li > a {
    color: black;
    border:none;
    margin-right: 0;
}
.nav-tabs > li > a, .nav-tabs > li > a:hover, .nav-tabs > li > a:focus {
    border:none;
}
.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
    color: #555555;
    background-color: #f5f8fa;
    border-bottom: 3px solid rgb(255, 67, 1);
    cursor: default;
}
.profile-nav-tabs{
  display: flex;
  justify-content: space-between;
}
.profile-nav-tabs::before, 
.profile-nav-tabs::after{
  content: none;
}

.single-tags-name{
  color: black;
}
.single-tags-name span{
  color: rgb(255, 67, 1);
}
.about-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 15px;
}
.about-name{
  color: black;
  font-weight: bold;
  padding: 0;
}
.about-edit-btn{
  font-size: 16px;
  color: black;
}
</style>