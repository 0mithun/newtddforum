<template>
  <div class="tools-single-item tools-single-item-align-bottoms" >
    <button class="btn thread-items-show-tools-btn report-btn" type="button" data-toggle="modal" data-target="#showSourceModal">
      Source
    </button>

        <div class="modal fade" tabindex="-1" role="dialog" id="showSourceModal">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="gridSystemModalLabel">Thread Source</h4>
                    </div>
                    <div class="modal-body">
                        {{ thread.source }}
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
      type: Object
    }
  },

  data() {
    return {
      isLiked: this.thread.isLiked
    };
  },
  created(){

  },

  computed: {

    signedIn() {
      return window.App.user ? true : false;
    },
  },

  methods: {
    report() {
      if (!this.signedIn) {
        return false;
      }
      axios
        .post("/thread/" + this.thread.id + "/likes")
        .then(res => {

        });
    }
  }
};
</script>


<style  scoped>
  .tools-single-item-align-bottoms{
    align-self: flex-end;
  }
  .report-btn{
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 0;
    height: auto;
  }
</style>