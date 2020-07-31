<template>
  <div>
    <div class="about-header">
      <h4 class="about-name">About {{profile_user.name }}</h4>
      <button
        class="btn btn-default btn-sm about-edit-btn"
        data-toggle="modal"
        data-target="#aboutEditModal"
        @click.prevent="showModal = true"
        v-if="is_owner"
      >
        <i class="fa fa-pencil"></i>
      </button>
    </div>
    <div v-html="aboutBody"></div>
    <profile-map :profile_user="profile_user"></profile-map>

    <div
      class="modal fade"
      id="aboutEditModal"
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
            <h4 class="modal-title" id="exampleModalLabel">Edit about</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <textarea class="form-control" id="about-edit-body" rows="5" v-model="aboutBody"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="saveAbout"
              :disabled="aboutBody == ''"
            >Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile_user", "is_owner"],
  data() {
    return {
      aboutBody: this.profile_user.about,
      showModal: false
    };
  },
  methods: {
    saveAbout() {
      axios
        .post(`/profiles/${this.profile_user.username}/update-about`, {
          about: this.aboutBody
        })
        .then(res => {
          flash("About update successfully");
          this.showModal = false;
          $("#aboutEditModal").modal("hide");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.about-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 15px;
}
.about-name {
  color: black;
  font-weight: bold;
  padding: 0;
}
.about-edit-btn {
  font-size: 16px;
  color: black;
}
#about-edit-body {
  resize: vertical;
}
</style>