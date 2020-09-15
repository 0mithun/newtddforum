<template>
  <div>
    <div class="panel panel-default">
      <new-reply @created="add" v-if="!authorize('isBan')"></new-reply>
      <div class="panel-">
        <div v-for="(reply, index) in items" :key="reply.id">
          <reply :reply="reply" @deleted="remove(index)"></reply>
        </div>
        <paginator :dataSet="dataSet" @changed="fetch"></paginator>
      </div>
    </div>
  </div>
</template>

<script>
import Reply from "./Reply.vue";
import NewReply from "./NewReply.vue";
import collection from "../mixins/collection";

import Paginator from "./Paginator";
export default {
  props: ["thread"],
  components: { Reply, NewReply, Paginator },

  mixins: [collection],

  data() {
    return { dataSet: false };
  },

  created() {
    this.fetch();
    eventBus.$on("addNewReply", (thread) => {
      eventBus.$emit("commentAdded-" + this.thread.id);
    });

    eventBus.$on("deleteReply", () => {
      eventBus.$emit("commentDeleted-" + this.thread.id);
    });

    eventBus.$on("addNestedReplies-" + this.thread.id, () => {
      eventBus.$emit("commentAdded-" + this.thread.id);
    });
    eventBus.$on("deleteNestedReplies-" + this.thread.id, () => {
      eventBus.$emit("commentDeleted-" + this.thread.id);
    });
  },

  methods: {
    fetch(page) {
      axios.get(this.url(page)).then(this.refresh);
    },

    url(page) {
      if (!page) {
        let query = location.search.match(/page=(\d+)/);

        page = query ? query[1] : 1;
      }

      return `${location.pathname}/replies?page=${page}`;
    },

    refresh({ data }) {
      this.dataSet = data;
      this.items = data.data;

      window.scrollTo(0, 0);
    },
  },
};
</script>
