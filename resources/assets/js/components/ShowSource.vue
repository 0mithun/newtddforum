<template>
  <div class="tools-single-item tools-single-item-align-bottoms">
    <button
      class="btn thread-items-show-tools-btn report-btn"
      type="button"
      data-toggle="modal"
      data-target="#showSourceModal"
    >
      Source
    </button>

    <div class="modal fade" tabindex="-1" role="dialog" id="showSourceModal">
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
            <h4 class="modal-title" id="gridSystemModalLabel">Article source</h4>
          </div>
          <div class="modal-body">
             <span v-html="source"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source'],
  created(){
    console.log(unescape(this.source))
  }
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
.modal-header{
  padding:5px 10px;
}

.modal-body{
  padding:5px 10px;
}
</style>
