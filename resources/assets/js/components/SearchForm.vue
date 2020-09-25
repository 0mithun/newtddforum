<template>
  <form class="navbar-form search-form" method="GET" action="/threads/search">
    <input
      type="text"
      class="form-control search-box"
      :class="activeSearch"
      name="query"
      :value="query"
      placeholder="Search"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  computed: {
    activeSearch() {
      return this.query != "" ? "active-search" : "";
    },
  },
  created() {
    this.getSearchQuery();
  },
  methods: {
    getSearchQuery() {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get("query");

      if (query && query != "") {
        this.query = query;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-form .form-control.search-box.active-search {
  width: 100%;
  border: 2px solid #98cbe8;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
</style>