<template>
  <div class="container">
    <div class="top-margin row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
                <img src="/images/default.png" alt class="profile-img" />
              </div>
              <div class="col-md-8">
                <h2 class="profile-name">prfile name</h2>
                <div class="profile-count"></div>
                <div class="profile-buttons">
                  <button class="btn btn-primary">Follow</button>
                </div>
                <div class="profile-tags">Following: habijabi</div>
              </div>
            </div>
          </div>

          <div class="col-md-4"></div>
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
  data() {
    return {};
  },
  created() {
    console.log("paisi");
  },
  methods: {}
};
</script>

<style  scoped>
</style>