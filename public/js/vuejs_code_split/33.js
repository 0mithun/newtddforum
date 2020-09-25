<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  components: {},
  data: function data() {
    return {
      posts: this.tag.threads,
      followings: [],
      isFollow: false,
      page: 1,
      perPage: 10,
      paginatedItems: []
    };
  },
  computed: {
    postCounts: function postCounts() {
      return abbreviate(this.posts.length, 1);
    },
    currentPage: function currentPage() {
      return this.page;
    },
    totalPage: function totalPage() {
      return Math.ceil(this.posts.length / this.perPage);
    }
  },
  created: function created() {
    this.checkIsFollow();
    this.getAllFollowings();
    this.setCurrentPage();
    this.paginate(this.perPage, this.page);
  },
  methods: {
    toggleFollow: function toggleFollow() {
      var _this = this;

      axios.post("/tag/".concat(this.tag.id, "/follow")).then(function (res) {
        // this.isFollow = !this.isFollow;
        if (_this.isFollow) {
          var newFollowings = _this.followings.filter(function (item) {
            return item.id != window.App.user.id;
          });

          _this.followings = newFollowings;
          _this.isFollow = false;
        } else {
          var _newFollowings = [].concat(_toConsumableArray(_this.followings), [window.App.user]);

          _this.followings = _newFollowings;
          _this.isFollow = true;
        }

        flash(res.data.message);
      });
    },
    checkIsFollow: function checkIsFollow() {
      var _this2 = this;

      axios.get("/tag/".concat(this.tag.id, "/is-follow")).then(function (res) {
        _this2.isFollow = res.data;
      });
    },
    getAllFollowings: function getAllFollowings() {
      var _this3 = this;

      axios.get("/tag/".concat(this.tag.id, "/followings")).then(function (res) {
        _this3.followings = res.data.followings;
      });
    },
    setCurrentPage: function setCurrentPage() {
      var urlParams = new URLSearchParams(window.location.search);
      var page = urlParams.get("page");

      if (page && page != "") {
        this.page = page;
      } else {
        this.page = this.page;
      }
    },
    paginate: function paginate(per_page, page_number) {
      var itemsToParse = this.tag.threads;
      var start = (page_number - 1) * per_page;
      var end = page_number * per_page;
      var newThreads = itemsToParse.slice(start, end);
      this.paginatedItems = newThreads;
    },
    onPageChange: function onPageChange(page) {
      this.page = page;
      history.pushState(null, null, "?page=" + page);
      this.paginate(this.perPage, page);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.profile-header[data-v-83915526] {\r\n  margin: 30px auto;\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-name[data-v-83915526] {\r\n  padding: 0;\r\n  margin: 0;\n}\n.profile-name span[data-v-83915526] {\r\n  color: rgb(255, 67, 1);\n}\n.profile-buttons[data-v-83915526] {\r\n  padding: 10px 0px;\n}\n.profile-img[data-v-83915526] {\r\n  width: 120px;\r\n  height: 120px;\r\n  padding: 3px;\r\n  border: 2px solid rgb(255, 67, 1);\r\n  border-radius: 50%;\n}\n.profile-avatar[data-v-83915526] {\r\n  margin-right: 30px;\n}\n.profile-count[data-v-83915526] {\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-count > *[data-v-83915526] {\r\n  margin-left: 5px;\r\n  margin-right: 5px;\n}\n.follow-btn[data-v-83915526] {\r\n  width: 100px;\r\n  background-color: rgb(255, 67, 1);\r\n  color: white;\n}\n.unfollow-btn[data-v-83915526] {\r\n  width: 100px;\r\n  background-color: red;\r\n  color: white;\n}\n.single-tags-name[data-v-83915526] {\r\n  color: black;\n}\n.single-tags-name span[data-v-83915526] {\r\n  color: rgb(255, 67, 1);\n}\n.post-counts[data-v-83915526] {\r\n  color: black;\r\n  padding: 15px 0;\r\n  font-weight: bold;\n}\n.sidebar[data-v-83915526] {\r\n  margin: 30px auto;\n}\n.pagination li[data-v-83915526] {\r\n  cursor: pointer;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "top-margin row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "panel" }, [
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "row profile-header" }, [
              _c("div", { staticClass: "profile-avatar" }, [
                _c("img", {
                  staticClass: "profile-img",
                  attrs: { src: _vm.tag.profileAvatarPath, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "profile-details" }, [
                _c("h2", { staticClass: "profile-name" }, [
                  _c("span", [_vm._v("#" + _vm._s(_vm.tag.name.toLowerCase()))])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "profile-count" },
                  [
                    _c("post-counts", {
                      attrs: { post_count: _vm.posts.length }
                    }),
                    _vm._v(" "),
                    _c("following-counts", {
                      attrs: { following_count: _vm.followings.length }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "profile-buttons" }, [
                  _vm.isFollow
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm unfollow-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.toggleFollow($event)
                            }
                          }
                        },
                        [_vm._v("Unfllow")]
                      )
                    : _c(
                        "button",
                        {
                          staticClass: "btn btn-sm follow-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.toggleFollow($event)
                            }
                          }
                        },
                        [_vm._v("Follow")]
                      )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "post-header" }, [
                  _c("div", { staticClass: "post-counts" }, [
                    _vm._v(_vm._s(_vm.postCounts) + " posts")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "post-body" },
                  [
                    _vm._l(_vm.paginatedItems, function(thread, index) {
                      return _c("single-thread", {
                        key: index,
                        attrs: { thread: thread }
                      })
                    }),
                    _vm._v(" "),
                    _vm.totalPage > 1
                      ? _c("nav", { attrs: { "aria-label": "..." } }, [
                          _c(
                            "ul",
                            { staticClass: "pagination" },
                            [
                              _vm.currentPage != 1
                                ? _c("li", [_vm._m(0)])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.totalPage, function(page) {
                                return _c(
                                  "li",
                                  {
                                    key: page,
                                    class: { active: _vm.currentPage == page },
                                    on: {
                                      click: function($event) {
                                        return _vm.onPageChange(page)
                                      }
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(page) +
                                          "\n                        "
                                      ),
                                      _c("span", { staticClass: "sr-only" }, [
                                        _vm._v(_vm._s(page))
                                      ])
                                    ])
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.currentPage != _vm.totalPage
                                ? _c("li", [_vm._m(1)])
                                : _vm._e()
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 sidebar" }, [_c("trending-thread")], 1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("«")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("»")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagPage.vue?vue&type=template&id=83915526&scoped=true& */ "./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&");
/* harmony import */ var _TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagPage.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& */ "./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "83915526",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/tag/TagPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=template&id=83915526&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"3r7u":function(n,e,a){"use strict";var t=a("V0In");a.n(t).a},V0In:function(n,e,a){var t=a("uvG4");"string"==typeof t&&(t=[[n.i,t,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(t,s);t.locals&&(n.exports=t.locals)},s8b4:function(n,e,a){"use strict";a.r(e);var t=a("f0Wu"),s=a.n(t);s.a.tz.setDefault("America/New_York");var i={props:["authuser"],data:function(){return{message:"",selectFriend:null,typing:"",last_seen:"",typingClock:null,replyId:"",replyMessage:"",showReplyBox:!1}},computed:{friendLists:function(){return this.$store.getters.friendLists},friendMessages:function(){return this.$store.getters.friendMessage},lastSeen:function(){if(null!=this.$store.getters.friendMessage.last_seen&&null!=this.$store.getters.friendMessage.last_seen.seen_at){var n=this.$store.getters.friendMessage.last_seen.seen_at;return s()(n,"YYYY-MM-DD HH:mm:ss").fromNow()}}},mounted:function(){var n=this;this.$store.dispatch("friendList",this.authuser.id),Echo.private("chat.".concat(this.authuser.id)).listen("MessegeSentEvent",(function(e){0==e.message.friend_message&&n.$store.dispatch("friendList",n.authuser.id),n.selectFriend==e.message.from?n.selectUser(e.message.from,!0):n.selectUser(e.message.from,!1)}))},created:function(){var n=this;Echo.private("typingevent").listenForWhisper("typing",(function(e){n.selectFriend&&e.user.id==n.friendMessages.friend.id&&e.userId==n.authuser.id&&(n.typing=e,n.typingClock&&clearTimeout(n.typingClock),n.typingClock=setTimeout((function(){n.typing=""}),2e3))}))},methods:{cancelReplyMessage:function(){this.replyMessage="",this.replyId="",this.showReplyBox=!1},replyToMessage:function(n,e){this.replyMessage=e,this.replyId=n,this.showReplyBox=!0,document.getElementById("message-to-send").focus()},messageSound:function(){new Audio("https://notificationsounds.com/soundfiles/acc3e0404646c57502b480dc052c4fe1/file-sounds-1140-just-saying.mp3").play()},seenMessage:function(n){var e=this;this.last_seen="",null==n.seen_at&&axios.post("/chat-seen-message",{message:n.id}).then((function(n){e.last_seen=s()(n.data.seen_at,"YYYY-MM-DD HH:mm:ss").fromNow()}))},typingMessage:function(n){Echo.private("typingevent").whisper("typing",{user:this.authuser,typing:this.message,userId:n})},selectUser:function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e?(this.selectFriend=n,this.$store.dispatch("userMessage",{friend:n}),this.messageStatus(n,!1)):this.messageStatus(n,!0),this.message=""},messageStatus:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="messageStatus"+n,t=this.$el.querySelector("#"+a);t.style.display=e?"block":"none"},scrollToBottom:function(){var n=this.$el.querySelector("#chat-history"),e=n.scrollHeight;n.scrollTop=e},formateMessageTime:function(n){return s()(n).format("MMM Do YYYY, h:mm:ss A")},sendMessage:function(n){var e=this;n.preventDefault(),""!=this.message&&axios.post("/chat-send-message",{message:this.message,friend:this.selectFriend,replyMessage:this.replyMessage,replyId:this.replyId}).then((function(n){e.showReplyBox=!1,e.selectUser(e.selectFriend)}))},selected:function(n){if(this.selectFriend==n)return"active-friend"},onlineUser:function(n){return _.find(this.onlineUsers,{id:n})}}},r=(a("3r7u"),a("KHd+")),o=Object(r.a)(i,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row chat-page"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"people-list",attrs:{id:"people-list"}},[a("ul",{staticClass:"list"},n._l(n.friendLists,(function(e,t){return a("li",{key:t,staticClass:"clearfix",class:e.id==n.selectFriend?"active-friend":"",on:{click:function(a){return a.preventDefault(),n.selectUser(e.id)}}},[a("img",{staticStyle:{width:"50px","border-radius":"50%",height:"50px"},attrs:{src:e.profileAvatarPath,alt:"avatar"}}),n._v(" "),a("div",{staticClass:"about"},[a("div",{staticClass:"name",staticStyle:{color:"black"}},[n._v(n._s(e.name))]),n._v(" "),a("user-online",{attrs:{user:e,type:"status"}})],1),n._v(" "),a("div",[a("span",{staticClass:"glyphicon glyphicon-comment messageStatus",staticStyle:{color:"red",display:"none"},attrs:{id:"messageStatus"+e.id}})])])})),0)])]),n._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"chat"},[a("div",{staticClass:"chat-header clearfix"},[n.friendMessages.friend?a("img",{staticStyle:{width:"50px","border-radius":"50%",height:"50px"},attrs:{src:n.friendMessages.friend.profileAvatarPath,alt:"avatar"}}):n._e(),n._v(" "),n.friendMessages.friend?a("div",{staticClass:"chat-about"},[a("div",{staticClass:"chat-with"},[a("a",{attrs:{href:"/profiles/"+n.friendMessages.friend.username}},[n._v(n._s(n.friendMessages.friend.name))])]),n._v(" "),0==n.friendMessages.messages.length?a("div",{staticClass:"chat-num-messages"},[n._v("No Message")]):n._e(),n._v(" "),n.last_seen?a("div",{staticClass:"chat-num-messages"},[n._v("\n                                        Last seen  "),a("span",[n._v(n._s(n.last_seen))])]):a("div",{staticClass:"chat-num-messages"},[n.lastSeen?a("div",{},[n._v("\n                                            Last seen "),a("span",[n._v(n._s(n.lastSeen))])]):n._e()])]):n._e(),n._v(" "),a("i",{staticClass:"fa fa-star"})]),n._v(" "),a("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"chat-history ",attrs:{id:"chat-history"}},[a("ul",{staticStyle:{margin:"0px",padding:"0px"}},n._l(n.friendMessages.messages,(function(e,t){return a("li",{key:t,staticClass:"clearfix message-list"},[n.friendMessages.friend.id==(e.to||n.friendMessages.from)?a("div",[a("div",{staticClass:"message-data align-right"},[a("span",{staticClass:"message-data-time"},[n._v(n._s(n.formateMessageTime(e.created_at)))]),n._v("    \n                                                "),a("span",{staticClass:"message-data-name"},[n._v(n._s(n.authuser.name))]),n._v(" "),a("img",{staticStyle:{width:"40px","border-radius":"50%",height:"40px"},attrs:{src:n.authuser.profileAvatarPath,alt:""}})]),n._v(" "),a("div",{staticClass:"btn-group reply-to-me"},[n._m(0,!0),n._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),n.replyToMessage(e.id,e.message)}}},[n._v("Reply")])])])]),n._v(" "),a("div",{staticClass:"message other-message float-right"},[null!=e.reply_message?a("blockquote",{staticClass:"reply-to-message"},[a("span",{staticClass:"reply-message-user"},[a("i",{staticClass:"fa fa-share"}),n._v("\n                                                        You replied to "),a("strong",[n._v(n._s(n.friendMessages.friend.name))]),n._v(" "),a("br")]),n._v(" "),a("span",{staticClass:"text-muted"},[n._v("\n                                                        "+n._s(e.reply_message)+"\n                                                    ")])]):n._e(),n._v("\n                                                "+n._s(e.message)+"\n                                            ")])]):a("div",[a("li",[a("div",{staticClass:"message-data"},[a("img",{staticStyle:{width:"40px","border-radius":"50%",height:"40px"},attrs:{src:n.friendMessages.friend.profileAvatarPath,alt:""}}),n._v(" "),a("span",{staticClass:"message-data-name"},[a("user-online",{attrs:{user:n.friendMessages.friend,type:"message"}}),n._v("\n\n\n                                                    "+n._s(n.friendMessages.friend.name))],1),n._v(" "),a("span",{staticClass:"message-data-time"},[n._v(n._s(n.formateMessageTime(e.created_at)))])]),n._v(" "),a("div",{staticClass:"message my-message",on:{click:function(a){return n.seenMessage(e)}}},[null!=e.reply_message?a("blockquote",{staticClass:"reply-to-message"},[a("span",{staticClass:"reply-message-user"},[a("i",{staticClass:"fa fa-share"}),n._v(" "),a("strong",[n._v(n._s(n.friendMessages.friend.name))]),n._v(" replied to you   "),a("br")]),n._v(" "),a("span",{staticClass:"text-muted"},[n._v("\n                                                            "+n._s(e.reply_message)+"\n                                                        ")])]):n._e(),n._v("\n                                                    "+n._s(e.message)+"\n                                                                                                       \n                                                ")]),n._v(" "),a("div",{staticClass:"btn-group"},[n._m(1,!0),n._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),n.replyToMessage(e.id,e.message)}}},[n._v("Reply")])])])])])])])})),0)]),n._v(" "),a("div",{staticClass:"chat-message clearfix chat-message-reply"},[n.typing?a("div",[n._v("   "+n._s(n.typing.user.name)+" "),a("img",{attrs:{src:"/images/png/pen.png",alt:""}}),n._v(" .........")]):n._e(),n._v(" "),n.selectFriend&&n.showReplyBox?a("div",{staticClass:"reply-to"},[n._v("\n                                    Reply to "),n.friendMessages.friend?a("strong",[n._v(n._s(n.friendMessages.friend.name))]):n._e(),n._v(" "),a("span",{staticClass:"close-reply",on:{click:n.cancelReplyMessage}},[n._v("X")]),n._v(" "),a("br"),n._v(" "),a("p",{staticClass:"text-muted reply-message"},[a("small",[n._v(n._s(n.replyMessage))])])]):n._e(),n._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:n.message,expression:"message"}],staticClass:"form-control",class:n.showReplyBox?"remove-top-border":"",attrs:{name:"message-to-send",id:"message-to-send",placeholder:"Type your message",rows:"2",disabled:!n.selectFriend},domProps:{value:n.message},on:{keydown:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.sendMessage(e)},keyup:function(e){return n.typingMessage(n.friendMessages.friend.id)},input:function(e){e.target.composing||(n.message=e.target.value)}}})])])])])])}),[function(){var n=this.$createElement,e=this._self._c||n;return e("button",{staticClass:"btn btn-default btn-sm dropdown-toggle reply-btn",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("span",{staticClass:"caret"})])},function(){var n=this.$createElement,e=this._self._c||n;return e("button",{staticClass:"btn btn-default btn-sm dropdown-toggle reply-btn",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("span",{staticClass:"caret"})])}],!1,null,"f9a19de8",null);e.default=o.exports},uvG4:function(n,e,a){(n.exports=a("I1BE")(!1)).push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .people-list {\n        width: 260px;\n        float: left;\n    } */\n.people-list .search[data-v-f9a19de8] {\n        padding: 20px;\n}\n.people-list input[data-v-f9a19de8] {\n        border-radius: 3px;\n        border: none;\n        padding: 14px;\n        color: white;\n        background: #6a6c75;\n        width: 90%;\n        font-size: 14px;\n}\n.people-list .fa-search[data-v-f9a19de8] {\n        position: relative;\n        left: -25px;\n}\n.people-list ul[data-v-f9a19de8] {\n        padding: 20px;\n        height: 770px;\n        background: #6a6c75\n}\n.people-list ul li[data-v-f9a19de8] {\n        padding-bottom: 20px;\n        cursor: pointer;\n}\n.people-list img[data-v-f9a19de8] {\n        float: left;\n}\n.people-list .about[data-v-f9a19de8] {\n        float: left;\n        margin-top: 8px;\n}\n.people-list .about[data-v-f9a19de8] {\n        padding-left: 8px;\n}\n.people-list .status[data-v-f9a19de8] {\n        color: #92959e;\n}\n.chat[data-v-f9a19de8] {\n        float: left;\n        background: #f2f5f8;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n        color: #434651;\n}\n.chat .chat-header[data-v-f9a19de8] {\n        padding: 20px;\n        border-bottom: 2px solid white;\n}\n.chat .chat-header img[data-v-f9a19de8] {\n        float: left;\n}\n.chat .chat-header .chat-about[data-v-f9a19de8] {\n        float: left;\n        padding-left: 10px;\n        margin-top: 6px;\n}\n.chat .chat-header .chat-with[data-v-f9a19de8] {\n        font-weight: bold;\n        font-size: 16px;\n}\n.chat .chat-header .chat-num-messages[data-v-f9a19de8] {\n        color: #92959e;\n}\n.chat .chat-header .fa-star[data-v-f9a19de8] {\n        float: right;\n        color: #d8dadf;\n        font-size: 20px;\n        margin-top: 12px;\n}\n.chat .chat-history[data-v-f9a19de8] {\n        padding: 30px 30px 20px;\n        border-bottom: 2px solid white;\n        overflow-y: scroll;\n        height: 575px;\n}\n.chat .chat-history .message-data[data-v-f9a19de8] {\n        margin-bottom: 15px;\n}\n.chat .chat-history .message-data-time[data-v-f9a19de8] {\n        color: #a8aab1;\n        padding-left: 6px;\n}\n.chat .chat-history .message[data-v-f9a19de8] {\n        color: white;\n        padding: 18px 20px;\n        line-height: 26px;\n        font-size: 16px;\n        border-radius: 7px;\n        margin-bottom: 30px;\n        width: 80%;\n        position: relative;\n}\n.chat .chat-history .message[data-v-f9a19de8]:after {\n        bottom: 100%;\n        left: 7%;\n        border: solid transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #86bb71;\n        border-width: 10px;\n        margin-left: -10px;\n}\n.chat .chat-history .my-message[data-v-f9a19de8] {\n        background: #86bb71;\n}\n.chat .chat-history .other-message[data-v-f9a19de8] {\n        background: #94c2ed;\n}\n.chat .chat-history .other-message[data-v-f9a19de8]:after {\n        border-bottom-color: #94c2ed;\n        left: 93%;\n}\n.chat .chat-message[data-v-f9a19de8] {\n        padding: 30px;\n}\n.chat .chat-message textarea[data-v-f9a19de8] {\n        /* width: 100%; */\n        /* border: none;\n        padding: 10px 20px;\n        font: 14px/22px "Lato", Arial, sans-serif;\n        margin-bottom: 10px;\n        border-radius: 5px; */\n        resize: none;\n}\n.chat .chat-message .fa-file-o[data-v-f9a19de8], .chat .chat-message .fa-file-image-o[data-v-f9a19de8] {\n        font-size: 16px;\n        color: gray;\n        cursor: pointer;\n}\n.chat .chat-message button[data-v-f9a19de8] {\n        float: right;\n        color: #94c2ed;\n        font-size: 16px;\n        text-transform: uppercase;\n        border: none;\n        cursor: pointer;\n        font-weight: bold;\n        background: #f2f5f8;\n}\n.chat .chat-message button[data-v-f9a19de8]:hover {\n        color: #75b1e8;\n}\n.online[data-v-f9a19de8], .offline[data-v-f9a19de8], .me[data-v-f9a19de8] {\n        margin-right: 3px;\n        font-size: 10px;\n}\n.online[data-v-f9a19de8] {\n        color: #86bb71;\n}\n.offline[data-v-f9a19de8] {\n        color: #e38968;\n}\n.me[data-v-f9a19de8] {\n        color: #94c2ed;\n}\n.align-left[data-v-f9a19de8] {\n        text-align: left;\n}\n.align-right[data-v-f9a19de8] {\n        text-align: right;\n}\n.float-right[data-v-f9a19de8] {\n        float: right;\n}\n.clearfix[data-v-f9a19de8]:after {\n        visibility: hidden;\n        display: block;\n        font-size: 0;\n        content: " ";\n        clear: both;\n        height: 0;\n}\n.people-list ul li[data-v-f9a19de8] {\n        padding-bottom: 20px;\n        list-style: none;\n}\n.chat-history li[data-v-f9a19de8]{\n        list-style: none;\n}\n.chat[data-v-f9a19de8] {\n        width: 100%;\n}\n\n    /**\n        Change Chat Color\n     */\n.chat .chat-history .other-message[data-v-61f93f4f][data-v-f9a19de8] {\n        background: #34a4ef;\n}\n.chat .chat-history .other-message[data-v-f9a19de8] {\n        background: #34a4ef;\n}\n.chat .chat-history .other-message[data-v-f9a19de8]:after {\n        border-bottom-color:  #34a4ef;;\n        left: 93%;\n}\n.chat .chat-message button[data-v-f9a19de8]:hover {\n        color:#34a4ef;\n}\n.me[data-v-f9a19de8] {\n        color:#34a4ef;\n}\n#people-list ul[data-v-f9a19de8]{\n        overflow-x: scroll\n}\n.active-friend[data-v-f9a19de8]{\n        background: white;\n}\n.people-list ul[data-v-61f93f4f][data-v-f9a19de8] {\n        padding: 0;\n}\n.people-list ul li[data-v-61f93f4f][data-v-f9a19de8] {\n        cursor: pointer;\n        padding: 10px 20px;\n}\n.chat .chat-history[data-v-61f93f4f][data-v-f9a19de8] {\n        padding: 10px 15px;\n}\n.people-list ul[data-v-61f93f4f][data-v-f9a19de8] {\n        height: 670px;\n}\n.chat .chat-message[data-v-61f93f4f][data-v-f9a19de8] {\n        padding: 15px;\n}\n.badge-danger[data-v-f9a19de8]{\n        background: red\n}\n.messageStatus[data-v-f9a19de8]{\n        color: #d84660;\n        float: right;\n        margin-top: 10px;\n        font-size: 20px;\n}\n.chat-page[data-v-f9a19de8]{\n        margin-top: 55px;\n}\n.chat .chat-history .message[data-v-f9a19de8]{\n        color: white;\n        padding: 18px 20px;\n        line-height: 26px;\n        font-size: 16px;\n        border-radius: 7px;\n        margin-bottom: 30px;\n        width: 75%;\n        position: relative;\n        display: inline-block;\n}\n.reply-btn[data-v-f9a19de8]{\n        background:none;\n        border: none;\n}\n.dropdown-toggle.reply-btn[data-v-f9a19de8]:active{\n        background:none;\n}\n.reply-to[data-v-f9a19de8]{\n        border:1px solid #ccd0d2;            \n        min-height:50px;\n        padding:8px;\n        border: 1px solid #ccd0d2;\n        border-radius: 4px;\n        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n        border-color: #98cbe8;\n        outline: 0;\n        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(152, 203, 232, 0.6);\n        border-radius: 4px 4px 0px 0px;  \n        border-bottom: none;\n}\n.reply-message[data-v-f9a19de8]{\n        padding:0px;\n        margin:0px;\n}\n.remove-top-border[data-v-f9a19de8]{\n        border-top: none;\n        box-shadow: none;\n        border-radius: 0px 0px 4px 4px;\n}\nspan.close-reply[data-v-f9a19de8] {\n        float: right;\n        padding: 0px 5px;\n        cursor: pointer;\n}\n.chat-message-reply.clearfix[data-v-f9a19de8] {\n        position: absolute;\n        width: 98%;\n        bottom: 0;\n        left: 0;\n        background: white;\n        padding: 0px!important;\n}\n    /* .chat .chat-message-reply {\n        padding: 0px!important;\n    } */\n.message-list[data-v-f9a19de8]:last-child{\n        margin-bottom: 50px;\n}\n.chat .chat-history .message[data-v-f9a19de8]{\n        \n        margin-bottom: 20px;\n}\n.reply-to-message[data-v-f9a19de8]{\n        border-left: 2px solid grey;\n        /* margin-right: 5px; */\n        padding: 0px;\n        margin: 0px;\n        padding-right: 0;\n        padding-left: 10px;\n        margin-bottom: 5px;\n        font-size:13px;\n}\n.reply-message-user[data-v-f9a19de8]{\n        color:#777777;\n}\n.reply-to-me[data-v-f9a19de8]{\n        margin-left: 20%;\n        margin-top: 20px;\n}\n.chat .chat-history .message[data-v-f9a19de8]{\n        padding: 15px 10px;\n}\n',""])}}]);
>>>>>>> social
