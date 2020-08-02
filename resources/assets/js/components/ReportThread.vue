<template>
  <div class="tools-single-item tools-single-item-align-bottoms">
    <button
      class="btn thread-items-show-tools-btn report-btn"
      type="button"
      data-toggle="modal"
      data-target="#showReportModal"
      @click.prevent="signedIn ? true : redirectToLogin()"
    >
      Report
    </button>
    <div class="modal fade" tabindex="-1" role="dialog" id="showReportModal">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="gridSystemModalLabel">
              Report Thread
            </h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <textarea
                name="reason"
                id="reason"
                rows="2"
                class="form-control"
                v-model="reason"
              ></textarea>
            </div>
            <div class="form-group">
              <select class="form-control" v-model="restrictions">
                <option selected>Select age restrictions</option>
                <option value="0">Under 13</option>
                <option value="13">Should be Pg-13</option>
                <option value="18">Should be rated R</option>
              </select>
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary"
                @click.prevent="report"
                :disabled="isDiabled"
              >
                Report
              </button>
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
    thread: {
      type: Object,
    },
  },

  data() {
    return {
      reason: "",
      restrictions: "",
    };
  },
  created() {},

  computed: {
    signedIn() {
      return window.App.user ? true : false;
    },
    isDiabled() {
      if (this.reason == "" && this.restrictions == "") {
        return true;
      }
    },
  },

  methods: {
    report() {
      if (!this.signedIn) {
        this.redirectToLogin();
      }
      axios
        .post("/report/thread", {
          id: this.thread.id,
          reason: this.reason,
          restrictions: this.restrictions,
        })
        .then((res) => {});
    },
    redirectToLogin() {
      window.location = "/redirect-to?page=" + location.pathname;
    },
  },
};
</script>

<style scoped>
.tools-single-item-align-bottoms {
  align-self: flex-end;
}
.report-btn {
  background-color: transparent;
  border: none;
  font-size: 14px;
  padding: 0;
  height: auto;
  width: auto;
}
#reason {
  resize: vertical;
}
</style>
