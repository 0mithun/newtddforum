<template>
  <div class="container">
    <div class="top-margin row">
      <div class="col-md-8">
        <div class="panel">
          <div class="panel-body">
            <div class="row profile-header">
              <div class="profile-avatar">
                <img :src="tagAvatarPhoto" alt class="profile-img" />
                <div style="text-align:center;overflow">

                <!-- <button class="btn btn-xs btn-primary">Show</button> -->
                <i class="fa fa-question-circle tooltip-icon" @click="showDescription = !showDescription"></i>
                </div>
              </div>
              <div class="profile-details">
                <h2 class="profile-name">
                  <span>#{{ tag.name.toLowerCase() }}</span>
                </h2>
                <div class="profile-count">
                  <post-counts :post_count="total_records"></post-counts>
                  <following-counts
                    :following_count="followings.length"
                  ></following-counts>
                </div>
                <div class="profile-buttons">
                  <button
                    class="btn btn-sm unfollow-btn"
                    @click.prevent="toggleFollow"
                    v-if="isFollow"
                  >
                    Unfllow
                  </button>
                  <button
                    class="btn btn-sm follow-btn"
                    @click.prevent="toggleFollow"
                    v-else
                  >
                    Follow
                  </button>
                  <button
                    class="btn btn-sm  btn-primary"  
                    @click.prevent="editTag = true" 
                    v-if="isAdmin"                 
                  >
                    Edit Tag
                  </button>
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
            <div class="row description" v-if="showDescription">
              <div class="col-md-12">
                <div v-html="tag.description" style="overflow:hidden;overflow-wrap: anywhere;">
                                   
                </div>                
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="post-header">
                  <div class="post-counts">{{ postCounts }}   {{ postCounts | strPlural('post') }}  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="post-body">
                  <single-thread
                    v-for="(thread, index) in threads"
                    :thread="thread"
                    :key="index"
                  ></single-thread>

                  
                  <nav aria-label="..." v-if="totalPage > 1">
                    <ul class="pagination">
                      <li v-if="currentPage != 1">                        
                        <a :href="getPageUrl(1)">
                        <span>
                          <span aria-hidden="true">&laquo;</span>
                        </span>
                      </a>
                      </li>
                      <li
                        v-for="page in pageRange"
                        :key="page"
                        :class="{ active: currentPage == page }"
                      >
                          <a :href="getPageUrl(page)">
                            <span>
                              {{ page}}
                            </span>
                           </a>
                      </li>

                      <li
                        v-if="currentPage != totalPage"
                      >
                      <a :href="getPageUrl(totalPage)">

                        <span>
                          <span aria-hidden="true">&raquo;</span>
                        </span>
                      </a>
                      </li>
                    </ul>
                  </nav>
                </div>
      </div>
      <div class="col-md-4 sidebar">
        <div class="panel">
            <div class="panel-heading">
                <div class="social-follow-btn">
                    <a href="https://facebook.com/Anecdotagecom-104983414515616/" class="follow-item">
                        <img class="follow-item-icon" src="/images/social/facebook.png" alt="">
                    </a>
                    <a href="https://twitter.com/anecdotage_com" class="follow-item">
                        <img class="follow-item-icon" src="/images/social/twitter.png" alt="">
                    </a>
                    <a href="https://www.instagram.com/anecdevs_ig/" class="follow-item">
                        <img class="follow-item-icon" src="/images/social/instagram.png" alt="">
                    </a>
                </div>
                <h3 class="follow-on-title">Follow Us On</h3>
            </div>
        </div>
        <trending-thread></trending-thread>
      </div>
      </div>


           <!-- Modal -->
      <div class="modal fade in" id="editTagModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="display:block" v-if="editTag">
          <div class="modal-dialog" role="document">
              <div class="modal-content"> 
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click.prevent="editTag = false"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h5 class="modal-title" id="gridSystemModalLabel">
                  Edit Tag: <strong>{{ tag.name }}</strong> 
                  </h5>
                </div>                       
                  <div class="modal-body">
                      <div class="form-group">
                        <label for="This item contains">Description</label>
                        <textarea
                          name="description"
                          id="description"
                          rows="2"
                          class="form-control"
                          v-model="form.description"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="This item contains">License</label>
                        <input
                          type="text"
                          name="license"
                          id="license"
                          rows="2"
                          class="form-control"
                          v-model="form.license"
                        />
                      </div>
                      <div class="form-group">
                        <label for="This item contains">Amazon Link</label>
                        <input
                        type="text"
                          name="amazon"
                          id="amazon"
                          rows="2"
                          class="form-control"
                          v-model="form.amazon"
                        />
                      </div>

                        <div class="form-group " :class="{ 'has-error': form.tagThumbError, 'has-error': form.tagThumbError }">
                          <label for="image_path" class="control-label">Add an image</label>
                          <div class="thread-thumb-placeholder" @click="OpenImgUpload">
                              <img :src="thumb" width="100%" height="100%">
                          </div>
                          <input style="display:none" type="file" name="image_path" accept="image/*" class="form-control" id="image_path" @change="onFileSelected">

                          <span class="help-block  error" v-if="form.tagThumbError">
                              <strong class="" v-text="form.threadThumbErrorMessage"></strong>
                          </span>

                      </div>
                      <div class="form-group">
                        <button class="btn btn-primary" type="button" @click.prevent="editTagInfo">Save</button>
                      </div>
                      
                  </div>
              </div>
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
     threads: {
      type: Array,
      required: true,
    },
    current_page:{
      type: Number,
      required: true
    },
    total_records:{
      type: Number,
      required: true
    },
  },
  components: {},
  data() {
    return {
      tagPhoto: null,
      posts: this.threads,
      followings: [],
      isFollow: false,
      page: this.current_page,
      perPage: 10,
      limitLinks: 10,
      formPage: 1,
      toPage: 1,
      showDescription:false,
      editTag: false,
      selectFile: null,
      formData: new FormData,
      form:{
        description: '',
        license:'',
        amazon:'',
        tagThumb: this.tag.profileAvatarPath,
        tagThumbError: '',
      }
    };
  },
  computed: {
    tagAvatarPhoto(){
      return this.tagPhoto ? this.tagPhoto :  this.tag.profileAvatarPath;
    },
    thumb(){
        return this.form.tagThumb == '' ? '/images/default-thread-thumb.jpg' : this.form.tagThumb
    },
    postCounts() {
      return abbreviate(this.total_records, 1);
    },
    currentPage() {
      return this.page;
    },
    totalPage() {
      return Math.ceil(this.total_records / this.perPage);
    },
    signedIn() {
      return window.App.user ? true : false;
    },
    isAdmin(){
      return  window.App.user && window.App.user.id == 1;
    },
    pageRange() {
      return _.range(this.formPage, this.toPage);
    },
  },
  created() {
    this.checkIsFollow();
    this.getAllFollowings();

    this.paginateLimit();
  },
  methods: {
    onFileSelected(event){
      console.log(event.target.files)
      if (! event.target.files.length) return;
      
      this.form.tagThumbError = false;
      this.form.threadThumbErrorMessage = '';
      let file =  event.target.files[0];
      
      if (file.size > 1024 *2048) {
          event.preventDefault();
          this.tagThumbError = true;
          this.threadThumbErrorMessage = 'Thread image may not be greater than 2048 kilobytes';
          return;
      }
      this.selectFile = event.target.files[0];
      this.formData.append('photo', this.selectFile);


      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
          let src = e.target.result;
          this.form.tagThumb = src
      };
  },
  OpenImgUpload(){
    $('#image_path').trigger('click')
  },
  editTagInfo(){
    this.formData.append('description', this.form.description);
    this.formData.append('license', this.form.license);
    this.formData.append('amazon', this.form.amazon);

     axios.post(`/tag/${this.tag.id}/update`, this.formData).then(res=>{
          this.tagPhoto = this.thumb;
          this.editTag = false;
          flash('Tag Update Successfully')
      }).catch(err=>{
          console.log(err)
      })
  },
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
      if (!this.signedIn) {
        return;
      }

      axios.get(`/tag/${this.tag.id}/is-follow`).then((res) => {
        this.isFollow = res.data;
      });
    },
    getAllFollowings() {
      axios.get(`/tag/${this.tag.id}/followings`).then((res) => {
        this.followings = res.data.followings;
      });
    },


    getPageUrl(page){
      return "?page="+ page;
    },


    paginateLimit() {
      let half_total_links = Math.floor(this.limitLinks / 2);
      let from = this.page - half_total_links;
      let to = Number.parseInt(this.page) + half_total_links;
      if (this.page < half_total_links) {
        to += half_total_links - this.page;
      }
      if (this.totalPage - this.page < half_total_links) {
        from -= half_total_links - (this.totalPage - this.page) - 1;
      }

      if (from < half_total_links) {
        from = 1;
      }
      
      if(to>this.totalPage){
        to = this.totalPage;
      }


      this.formPage = from;
      this.toPage = to+1;
    },
  },
};
</script>

<style  scoped>
.profile-header {
  margin: 30px auto;
  display: flex;
  align-items: center;
  margin-top:10px;
  margin-bottom: 0px;
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
  display: block;
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
  padding:  0;
  font-weight: bold;
  padding-bottom: 0px;
}
.sidebar {
  /* margin: 30px auto; */
}

.pagination li {
  cursor: pointer;
}

.tools-row{
  margin-bottom: 20px;
}

.tooltip-icon{
  font-size:14px;
  cursor:pointer
}

.description{
  transition: cubic-bezier(0.075, 0.82, 0.165, .3) ease-in;
  overflow: hidden;
}

 .thread-thumb-placeholder{
        width: 100px;
        height: 100px;
        background-color: #eeeeee;
    }

     #tinymce iframe {
            width: 100%!important;
            height: 350px!important;
        }
    .tox-tinymce{
        min-height:500px!important;
    }

    .error{
        color:red;
    }
    .help-block.error{
        color:red;
    }
</style>

