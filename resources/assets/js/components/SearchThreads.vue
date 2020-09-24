<template>
  <div>
    <div class="col-md-8">
      <div class="panel">
        <div class="panel-body">
          <!-- <div class="row">
          <div class="col-md-10">
            <div class="input-group">
              <input
                type="text"
                name="query"
                id="q"
                v-model="q"
                class="form-control"
                placeholder="Search Threads"
                @keyup="searchThreads"
              />
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="searchThread">Search!</button>
              </span>
            </div>
          </div>

          <div class="col-md-2">
            <select name id class="form-control" v-model="sort_by" @change="sortBy">
              <option value="topRated">Top Rated</option>
              <option value="created_at">Most Recent</option>
              <option value="like_count">Most Liked</option>
              <option value="favorite_count">Most Favorited</option>
              <option value="visits">Most Visits</option>
            </select>
          </div>
          </div>-->

          <div class="row">
            <div class="col-md-12 filter-search">
              <div class="count-column">{{ postsCount | formatCount }} Results</div>
              <div class="sort-column">
                <select name id class="sortBy" v-model="sort_by" @change="sortBy">
                  <option value="topRated">Top Rated</option>
                  <option value="created_at">Most Recent</option>
                  <option value="like_count">Most Liked</option>
                  <option value="favorite_count">Most Favorited</option>
                  <option value="visits">Most Visits</option>
                </select>
              </div>

              <div class="btn-group">
                <button
                  class="btn btn-link btn-xs dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Tags
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu search-dropdown">
                  <li v-for="(tag, index) in tags" :key="index">
                    <div class="checkbox filter-item">
                      <label>
                        <input
                          type="checkbox"
                          name="rated"
                          id
                          :value="tag.toLowerCase()"
                          v-model="filter_tags"
                        />
                        {{ tag.toLowerCase() }}
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  class="btn btn-link btn-xs dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All People
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu search-dropdown">
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input type="checkbox" name="rated" id value="C" v-model="category" />
                        Celebrities
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input type="checkbox" name="rated" id value="N" v-model="category" />
                        Other notables
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input type="checkbox" name="rated" id value="O" v-model="category" />
                        Other People
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  class="btn btn-link btn-xs dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Moods
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu search-dropdown">
                  <li v-for="(emoji, index) in emojis" :key="index">
                    <div class="checkbox filter-item">
                      <label>
                        <input
                          type="checkbox"
                          name="like"
                          id
                          :value="emoji.name"
                          class="filter-emoji-checkbox"
                          v-model="filter_emojis"
                        />
                        <span
                          class="filter-emoji"
                          :class="emoji.name"
                          :key="index"
                          v-bind:style="{
                            'background-image':
                              'url(/images/emojis/' + emoji.name + '.png)',
                          }"
                        >{{ emoji.name }}</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  class="btn btn-link btn-xs dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Lengths
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu search-dropdown">
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input
                          type="checkbox"
                          name="length"
                          id
                          value="sort"
                          v-model="filter_length"
                        />
                        Sort
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input
                          type="checkbox"
                          name="length"
                          id
                          value="medium"
                          v-model="filter_length"
                        />
                        Medium
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input
                          type="checkbox"
                          name="length"
                          id
                          value="long"
                          v-model="filter_length"
                        />
                        Long
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  class="btn btn-link btn-xs dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  G/PG
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu search-dropdown">
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input type="checkbox" name="rated" id :value="0" v-model="filter_rated" />
                        G-rated
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input type="checkbox" name="rated" id :value="13" v-model="filter_rated" />
                        PG-rated
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="checkbox filter-item">
                      <label>
                        <input type="checkbox" name="rated" id :value="18" v-model="filter_rated" />
                        R-rated
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="map-column">
                <a :href="mapUrl">
                  <img src="/images/png/map-icon-red.png" alt />
                  Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default" v-if="search == false && allThreads.length == 0">
        <div class="panel-body">
          <h3 class="text-center">No Results Found</h3>
        </div>
      </div>

      <div class="panel panel-default" v-if="search">
        <div class="panel-body">
          <h3 class="text-center">Search.....</h3>
        </div>
      </div>
      <single-thread v-for="(thread, index) in paginatedItems" :thread="thread" :key="index"></single-thread>

      <!-- <SearchPagination
        :dataSet="threads"
        @changedSearch="fetch"
        :query="q"
      ></SearchPagination>-->

      <nav aria-label="..." v-if="totalPage > 1">
        <ul class="pagination">
          <li v-if="currentPage != 1">
            <span>
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
          <li
            v-for="page in totalPage"
            :key="page"
            @click="onPageChange(page)"
            :class="{ active: currentPage == page }"
          >
            <span>
              {{ page }}
              <span class="sr-only">{{ page }}</span>
            </span>
          </li>

          <li v-if="currentPage != totalPage">
            <span>
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="col-md-4">
      <trending-thread></trending-thread>
    </div>
  </div>
</template>

<script>
import SearchPagination from "./SearchPagination";
import moment, { max } from "moment";

export default {
  props: ["threads", "query"],
  components: {
    SearchPagination,
  },

  data() {
    return {
      allThreads: [],
      // paginateThreads: this.threads,
      q: this.query,
      sort_by: "topRated",
      filter_emojis: [],
      filter_rated: [],
      search: false,
      category: [],
      // famous:[0,1],
      filter_tags: [],
      filter_length: [],
      emojis: "",
      tags: [],

      page: 1,
      perPage: 10,
      paginatedItems: this.allThreads,
    };
  },
  watch: {
    filter_length(filter) {
      this.filterThreads();
    },
    filter_emojis(filter) {
      this.filterThreads();
    },
    filter_rated(filter) {
      this.filterThreads();
    },
    category(filter) {
      this.filterThreads();
    },
    filter_tags(filter) {
      this.filterThreads();
    },
  },
  created() {
    this.allThreads = this.threads;
    this.getAllEmojis();
    this.getAllTags();
    this.setCurrentPage();
    this.paginate(this.perPage, this.page);
  },
  computed: {
    currentPage() {
      return this.page;
    },
    totalPage() {
      return Math.ceil(this.postsCount / this.perPage);
    },
    filterOpen() {
      if (
        this.filter_length.length > 0 ||
        this.filter_emojis.length > 0 ||
        this.filter_rated.length > 0 ||
        this.category.length > 0 ||
        this.filter_tags.length > 0
      ) {
        return true;
      }
      return false;
    },
    postsCount() {
      if (this.filterOpen) {
        return this.allThreads.length;
      }
      return this.threads.length;
    },
    mapUrl() {
      return `/map/show?query=${this.q}`;
    },
  },

  methods: {
    setCurrentPage() {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("page");

      if (page && page != "") {
        this.page = page;
      } else {
        this.page = this.page;
      }
    },
    paginate(per_page, page_number) {
      let itemsToParse = this.allThreads;
      let start = (page_number - 1) * per_page;
      let end = page_number * per_page;
      const newThreads = itemsToParse.slice(start, end);

      this.paginatedItems = newThreads;
    },

    onPageChange(page) {
      this.page = page;

      history.pushState(null, null, "?query=" + this.q + "&page=" + page);
      this.paginate(this.perPage, page);
    },

    filterThreads() {
      this.paginatedItems = [];
      this.page = 1;

      let data = this.threads;

      if (this.filter_rated.length > 0) {
        data = this.filterByRated(this.filter_rated, data);
      }

      if (this.category.length > 0) {
        data = this.filterByCategory(this.category, data);
      }

      if (this.filter_tags.length > 0) {
        data = this.filterByTags(this.filter_tags, data);
      }

      if (this.filter_emojis.length > 0) {
        data = this.filterByEmojis(this.filter_emojis, data);
      }

      if (this.filter_length.length > 0) {
        data = this.filterByLength(this.filter_length, data);
      }

      this.allThreads = data;
      this.paginatedItems = this.allThreads;
      this.paginate(this.perPage, this.currentPage);
    },
    filterByLength(filter, data) {
      // filter_length: [],
      let filterThreads = _.filter(data, (thread) => {
        let match = false;
        for (let i = 0; i < filter.length; i++) {
          let min = 0;
          let max = 301;
          if (filter[i] == "sort") {
            min = 0;
            max = 100;
          } else if (filter[i] == "medium") {
            min = 100;
            max = 300;
          } else if (filter[i] == "long") {
            min = 300;
            max = 301;
          }

          if (max === 301) {
            if (thread.word_count >= 300) {
              match = true;
              break;
            }
          } else {
            if ((thread.word_count >= min) & (thread.word_count <= max)) {
              match = true;
              break;
            }
          }
        }

        return match;
      });
      return filterThreads;
    },
    filterByEmojis(filter, data) {
      let newThreads = _.filter(data, (thread) => {
        return thread.emojis.length > 0;
      });

      let filterThreads = _.filter(newThreads, (thread) => {
        for (let i = 0; i < thread.emojis.length; i++) {
          if (_.includes(filter, thread.emojis[i].name)) {
            return true;
          }
        }
      });
      return filterThreads;
    },

    filterByRated(filter, data) {
      let filterThreads = _.filter(data, (thread) => {
        if (_.includes(filter, thread.age_restriction)) {
          return true;
        }
      });
      return filterThreads;
    },
    filterByCategory(filter, data) {
      let filterThreads = _.filter(data, (thread) => {
        if (_.includes(filter, thread.cno)) {
          return true;
        }
      });
      return filterThreads;
    },

    filterByTags(filter, data) {
      let newThreads = _.filter(data, (thread) => {
        return thread.tags.length > 0;
      });
      let filterThreads = _.filter(newThreads, (thread) => {
        for (let i = 0; i < thread.tags.length; i++) {
          if (_.includes(filter, thread.tags[i].name.toLowerCase())) {
            return true;
          }
        }
      });
      return filterThreads;
    },

    getAllEmojis() {
      axios.get("/all-emojis").then((res) => {
        this.emojis = res.data;
      });
    },
    getAllTags() {
      axios.get("/all-tags").then((res) => {
        this.tags = res.data;
      });
    },
    searchThread() {
      // /threads/search
      let url = "/threads/search?query=" + this.q;
      window.location.href = url;
    },
    sortBy() {
      let threads = _.orderBy(this.allThreads, [this.sort_by], "desc");
      this.paginatedItems = threads;
      // this.threads = threads;
    },
    ago(created_at) {
      return moment(created_at, "YYYY-MM-DD HH:mm:ss").fromNow() + "...";
    },
    searchThreads() {
      if (this.q == "") {
        return;
      }
      this.search = true;
      axios
        .get("/threads/search?query=" + this.q + "&sort_by=" + this.sort_by)
        .then((res) => {
          this.allThreads = res.data;
          this.threads = res.data;
          // let pageUrl = {
          //   prev_page_url: res.data.prev_page_url,
          //   next_page_url: res.data.next_page_url,
          // };
          // eventBus.$emit("pageChange", pageUrl);
          // this.search = false;
        });
    },
    // fetch(page) {
    //   axios
    //     .get("/threads/search?query=" + this.q + "&page=" + page)
    //     .then((res) => {
    //       this.allThreads = res.data;
    //       let pageUrl = {
    //         prev_page_url: res.data.prev_page_url,
    //         next_page_url: res.data.next_page_url,
    //       };
    //       eventBus.$emit("pageChange", pageUrl);
    //     });
    // },
  },
};
</script>

<style scoped>
.row.filter-row {
  /* margin-top: 10px; */
}
.filter-title {
  margin-top: 10px;
}

.filter-emoji {
  height: 24px;
  background-color: transparent;
  background-size: 24px;
  background-repeat: no-repeat;
  display: flex;
  margin-right: 20px;
  padding-left: 30px;
  align-items: center;
}

.filter-rated {
  display: inline-flex;
  margin-right: 20px;
  padding-top: 3px;
  margin-top: 10px;
}

.btn-link {
  color: #636b6f;
  text-decoration: none;
}

.btn-link:hover {
  color: #636b6f;
  text-decoration: none;
}

.btn-link:focus {
  outline: none;
  text-decoration: none;
}
.dropdown-menu.search-dropdown {
  font-size: 12px;
}

.dropdown-menu.search-dropdown li a:hover {
  background-color: #eeeeee;
}

.filter-item {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
}
.filter-item:hover {
  background-color: #eeeeee;
}
.search-results-sorting {
  display: flex;
  align-items: center;
  color: black;
  font-size: 13px;
}
.search-results-sorting > * {
  margin-right: 25px;
}

.sortBy {
  background-color: transparent;
  border: none;
  outline: none;
  width: auto;
  /* color: rgb(255, 67, 1); */
  color: black;
  font-weight: bold;
  box-shadow: none;
  font-size: 12px;
}
.sortBy:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
hr {
  margin: 5px 0;
}
.map-column a {
  color: black;
  font-size: 13px;
  text-decoration: none;
}

.pagination li {
  cursor: pointer;
}
.filter-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count-column {
  font-size: 13px;
}
</style>
