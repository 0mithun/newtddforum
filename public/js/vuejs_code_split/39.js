(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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
    },
    threads: {
      type: Array,
      required: true
    },
    current_page: {
      type: Number,
      required: true
    },
    total_records: {
      type: Number,
      required: true
    }
  },
  components: {},
  data: function data() {
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
      showDescription: false,
      editTag: false,
      selectFile: null,
      formData: new FormData(),
      form: {
        description: '',
        license: '',
        amazon: '',
        tagThumb: this.tag.profileAvatarPath,
        tagThumbError: ''
      }
    };
  },
  computed: {
    tagAvatarPhoto: function tagAvatarPhoto() {
      return this.tagPhoto ? this.tagPhoto : this.tag.profileAvatarPath;
    },
    thumb: function thumb() {
      return this.form.tagThumb == '' ? '/images/default-thread-thumb.jpg' : this.form.tagThumb;
    },
    postCounts: function postCounts() {
      return abbreviate(this.total_records, 1);
    },
    currentPage: function currentPage() {
      return this.page;
    },
    totalPage: function totalPage() {
      return Math.ceil(this.total_records / this.perPage);
    },
    signedIn: function signedIn() {
      return window.App.user ? true : false;
    },
    isAdmin: function isAdmin() {
      return window.App.user && window.App.user.id == 1;
    },
    pageRange: function pageRange() {
      return _.range(this.formPage, this.toPage);
    }
  },
  created: function created() {
    this.checkIsFollow();
    this.getAllFollowings();
    this.paginateLimit();
  },
  methods: {
    onFileSelected: function onFileSelected(event) {
      var _this = this;

      console.log(event.target.files);
      if (!event.target.files.length) return;
      this.form.tagThumbError = false;
      this.form.threadThumbErrorMessage = '';
      var file = event.target.files[0];

      if (file.size > 1024 * 2048) {
        event.preventDefault();
        this.tagThumbError = true;
        this.threadThumbErrorMessage = 'Thread image may not be greater than 2048 kilobytes';
        return;
      }

      this.selectFile = event.target.files[0];
      this.formData.append('photo', this.selectFile);
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        var src = e.target.result;
        _this.form.tagThumb = src;
      };
    },
    OpenImgUpload: function OpenImgUpload() {
      $('#image_path').trigger('click');
    },
    editTagInfo: function editTagInfo() {
      var _this2 = this;

      this.formData.append('description', this.form.description);
      this.formData.append('license', this.form.license);
      this.formData.append('amazon', this.form.amazon);
      axios.post("/tag/".concat(this.tag.id, "/update"), this.formData).then(function (res) {
        _this2.tagPhoto = _this2.thumb;
        _this2.editTag = false;
        flash('Tag Update Successfully');
      })["catch"](function (err) {
        console.log(err);
      });
    },
    toggleFollow: function toggleFollow() {
      var _this3 = this;

      axios.post("/tag/".concat(this.tag.id, "/follow")).then(function (res) {
        // this.isFollow = !this.isFollow;
        if (_this3.isFollow) {
          var newFollowings = _this3.followings.filter(function (item) {
            return item.id != window.App.user.id;
          });

          _this3.followings = newFollowings;
          _this3.isFollow = false;
        } else {
          var _newFollowings = [].concat(_toConsumableArray(_this3.followings), [window.App.user]);

          _this3.followings = _newFollowings;
          _this3.isFollow = true;
        }

        flash(res.data.message);
      });
    },
    checkIsFollow: function checkIsFollow() {
      var _this4 = this;

      if (!this.signedIn) {
        return;
      }

      axios.get("/tag/".concat(this.tag.id, "/is-follow")).then(function (res) {
        _this4.isFollow = res.data;
      });
    },
    getAllFollowings: function getAllFollowings() {
      var _this5 = this;

      axios.get("/tag/".concat(this.tag.id, "/followings")).then(function (res) {
        _this5.followings = res.data.followings;
      });
    },
    getPageUrl: function getPageUrl(page) {
      return "?page=" + page;
    },
    paginateLimit: function paginateLimit() {
      var half_total_links = Math.floor(this.limitLinks / 2);
      var from = this.page - half_total_links;
      var to = Number.parseInt(this.page) + half_total_links;

      if (this.page < half_total_links) {
        to += half_total_links - this.page;
      }

      if (this.totalPage - this.page < half_total_links) {
        from -= half_total_links - (this.totalPage - this.page) - 1;
      }

      if (from < half_total_links) {
        from = 1;
      }

      if (to > this.totalPage) {
        to = this.totalPage;
      }

      this.formPage = from;
      this.toPage = to + 1;
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
exports.push([module.i, "\n.profile-header[data-v-83915526] {\n  margin: 30px auto;\n  display: flex;\n  align-items: center;\n  margin-top:10px;\n  margin-bottom: 0px;\n}\n.profile-name[data-v-83915526] {\n  padding: 0;\n  margin: 0;\n}\n.profile-name span[data-v-83915526] {\n  color: rgb(255, 67, 1);\n}\n.profile-buttons[data-v-83915526] {\n  padding: 10px 0px;\n}\n.profile-img[data-v-83915526] {\n  width: 120px;\n  height: 120px;\n  padding: 3px;\n  border: 2px solid rgb(255, 67, 1);\n  border-radius: 50%;\n  display: block;\n}\n.profile-avatar[data-v-83915526] {\n  margin-right: 30px;\n}\n.profile-count[data-v-83915526] {\n  display: flex;\n  align-items: center;\n}\n.profile-count > *[data-v-83915526] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.follow-btn[data-v-83915526] {\n  width: 100px;\n  background-color: rgb(255, 67, 1);\n  color: white;\n}\n.unfollow-btn[data-v-83915526] {\n  width: 100px;\n  background-color: red;\n  color: white;\n}\n.single-tags-name[data-v-83915526] {\n  color: black;\n}\n.single-tags-name span[data-v-83915526] {\n  color: rgb(255, 67, 1);\n}\n.post-counts[data-v-83915526] {\n  color: black;\n  padding:  0;\n  font-weight: bold;\n  padding-bottom: 0px;\n}\n.sidebar[data-v-83915526] {\n  /* margin: 30px auto; */\n}\n.pagination li[data-v-83915526] {\n  cursor: pointer;\n}\n.tools-row[data-v-83915526]{\n  margin-bottom: 20px;\n}\n.tooltip-icon[data-v-83915526]{\n  font-size:14px;\n  cursor:pointer\n}\n.description[data-v-83915526]{\n  transition: cubic-bezier(0.075, 0.82, 0.165, .3) ease-in;\n  overflow: hidden;\n}\n.thread-thumb-placeholder[data-v-83915526]{\n        width: 100px;\n        height: 100px;\n        background-color: #eeeeee;\n}\n#tinymce iframe[data-v-83915526] {\n            width: 100%!important;\n            height: 350px!important;\n}\n.tox-tinymce[data-v-83915526]{\n        min-height:500px!important;\n}\n.error[data-v-83915526]{\n        color:red;\n}\n.help-block.error[data-v-83915526]{\n        color:red;\n}\n", ""]);

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
                  attrs: { src: _vm.tagAvatarPhoto, alt: "" }
                }),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "center" } }, [
                  _c("i", {
                    staticClass: "fa fa-question-circle tooltip-icon",
                    on: {
                      click: function($event) {
                        _vm.showDescription = !_vm.showDescription
                      }
                    }
                  })
                ])
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
                      attrs: { post_count: _vm.total_records }
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
                        [
                          _vm._v(
                            "\n                  Unfllow\n                "
                          )
                        ]
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
                        [_vm._v("\n                  Follow\n                ")]
                      ),
                  _vm._v(" "),
                  _vm.isAdmin
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm  btn-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.editTag = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                  Edit Tag\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.showDescription
              ? _c("div", { staticClass: "row description" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", {
                      staticStyle: {
                        overflow: "hidden",
                        "overflow-wrap": "anywhere"
                      },
                      domProps: { innerHTML: _vm._s(_vm.tag.description) }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "post-header" }, [
                  _c("div", { staticClass: "post-counts" }, [
                    _vm._v(
                      _vm._s(_vm.postCounts) +
                        "   " +
                        _vm._s(_vm._f("strPlural")(_vm.postCounts, "post")) +
                        "  "
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "post-body" },
          [
            _vm._l(_vm.threads, function(thread, index) {
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
                        ? _c("li", [
                            _c("a", { attrs: { href: _vm.getPageUrl(1) } }, [
                              _vm._m(0)
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.pageRange, function(page) {
                        return _c(
                          "li",
                          {
                            key: page,
                            class: { active: _vm.currentPage == page }
                          },
                          [
                            _c("a", { attrs: { href: _vm.getPageUrl(page) } }, [
                              _c("span", [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(page) +
                                    "\n                          "
                                )
                              ])
                            ])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.currentPage != _vm.totalPage
                        ? _c("li", [
                            _c(
                              "a",
                              {
                                attrs: { href: _vm.getPageUrl(_vm.totalPage) }
                              },
                              [_vm._m(1)]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                ])
              : _vm._e()
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-4 sidebar" },
        [_vm._m(2), _vm._v(" "), _c("trending-thread")],
        1
      )
    ]),
    _vm._v(" "),
    _vm.editTag
      ? _c(
          "div",
          {
            staticClass: "modal fade in",
            staticStyle: { display: "block" },
            attrs: {
              id: "editTagModal",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "myModalLabel"
            }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.editTag = false
                          }
                        }
                      },
                      [
                        _c("span", { attrs: { "aria-hidden": "true" } }, [
                          _vm._v("×")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "gridSystemModalLabel" }
                      },
                      [
                        _vm._v("\n                Edit Tag: "),
                        _c("strong", [_vm._v(_vm._s(_vm.tag.name))])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "This item contains" } }, [
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.description,
                            expression: "form.description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "description",
                          id: "description",
                          rows: "2"
                        },
                        domProps: { value: _vm.form.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "This item contains" } }, [
                        _vm._v("License")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.license,
                            expression: "form.license"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "license",
                          id: "license",
                          rows: "2"
                        },
                        domProps: { value: _vm.form.license },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "license", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "This item contains" } }, [
                        _vm._v("Amazon Link")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.amazon,
                            expression: "form.amazon"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "amazon",
                          id: "amazon",
                          rows: "2"
                        },
                        domProps: { value: _vm.form.amazon },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "amazon", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group ",
                        class: {
                          "has-error": _vm.form.tagThumbError,
                          "has-error": _vm.form.tagThumbError
                        }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "image_path" }
                          },
                          [_vm._v("Add an image")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "thread-thumb-placeholder",
                            on: { click: _vm.OpenImgUpload }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: _vm.thumb,
                                width: "100%",
                                height: "100%"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          staticStyle: { display: "none" },
                          attrs: {
                            type: "file",
                            name: "image_path",
                            accept: "image/*",
                            id: "image_path"
                          },
                          on: { change: _vm.onFileSelected }
                        }),
                        _vm._v(" "),
                        _vm.form.tagThumbError
                          ? _c("span", { staticClass: "help-block  error" }, [
                              _c("strong", {
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.form.threadThumbErrorMessage
                                  )
                                }
                              })
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.editTagInfo($event)
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]
        )
      : _vm._e()
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c("div", { staticClass: "social-follow-btn" }, [
          _c(
            "a",
            {
              staticClass: "follow-item",
              attrs: {
                href: "https://facebook.com/Anecdotagecom-104983414515616/"
              }
            },
            [
              _c("img", {
                staticClass: "follow-item-icon",
                attrs: { src: "/images/social/facebook.png", alt: "" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "follow-item",
              attrs: { href: "https://twitter.com/anecdotage_com" }
            },
            [
              _c("img", {
                staticClass: "follow-item-icon",
                attrs: { src: "/images/social/twitter.png", alt: "" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "follow-item",
              attrs: { href: "https://www.instagram.com/anecdevs_ig/" }
            },
            [
              _c("img", {
                staticClass: "follow-item-icon",
                attrs: { src: "/images/social/instagram.png", alt: "" }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "follow-on-title" }, [_vm._v("Follow Us On")])
      ])
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