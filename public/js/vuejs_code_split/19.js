(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NestedReplies.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_caret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery.caret */ "./node_modules/jquery.caret/dist/jquery.caret.js");
/* harmony import */ var jquery_caret__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_caret__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var at_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! at.js */ "./node_modules/at.js/dist/js/jquery.atwho.js");
/* harmony import */ var at_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(at_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NestedReplies",
  props: ["reply"],
  components: {
    NestedReplies: function NestedReplies() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./NestedReplies.vue */ "./resources/assets/js/components/NestedReplies.vue"));
    }
  },
  data: function data() {
    return {
      editing: false,
      id: this.reply.id,
      body: this.reply.body,
      editBody: this.reply.body,
      replies: [],
      replies_count: this.reply.reply_count,
      showNested: false,
      addNested: false,
      nestedbody: "",
      showLoadMore: true
    };
  },
  computed: {
    ago: function ago() {
      return moment(this.reply.created_at, "YYYY-MM-DD HH:mm:ss").fromNow() + "...";
    },
    signedIn: function signedIn() {
      return window.App.user ? true : false;
    },
    redirectToLogin: function redirectToLogin() {
      return "/redirect-to?page=" + location.pathname;
    }
  },
  created: function created() {
    var _this = this;

    eventBus.$on("nested_delete-" + this.reply.id, function (id) {
      var newReplies = _this.replies.filter(function (item) {
        return item.id != id;
      });

      _this.replies = newReplies;
      _this.replies_count = _this.replies_count - 1;
    });
  },
  methods: {
    toggleNestedReplies: function toggleNestedReplies() {
      if (this.showNested) {
        this.showNested = false;
      } else {
        this.loadNestedReply();
        this.showNested = true;
      }
    },
    addReplySuggest: function addReplySuggest() {
      $("#bodyedit-" + this.reply.id).atwho({
        at: "@",
        delay: 750,
        callbacks: {
          remoteFilter: function remoteFilter(query, callback) {
            $.getJSON("/api/users", {
              name: query
            }, function (usernames) {
              callback(usernames);
            });
          }
        }
      });
      $("#addNested-" + this.reply.id).atwho({
        at: "@",
        delay: 750,
        callbacks: {
          remoteFilter: function remoteFilter(query, callback) {
            $.getJSON("/api/users", {
              name: query
            }, function (usernames) {
              callback(usernames);
            });
          }
        }
      });
    },
    addNestedReplySuggest: function addNestedReplySuggest() {
      $("#addNested-" + this.reply.id).atwho({
        at: "@",
        delay: 750,
        callbacks: {
          remoteFilter: function remoteFilter(query, callback) {
            $.getJSON("/api/users", {
              name: query
            }, function (usernames) {
              callback(usernames);
            });
          }
        }
      });
    },
    loadNestedReply: function loadNestedReply() {
      var _this2 = this;

      var url = "/replies/".concat(this.reply.id, "/load-reply");
      axios.get(url).then(function (_ref) {
        var data = _ref.data;
        _this2.replies = data;
      });
    },
    update: function update() {
      axios.patch("/replies/" + this.id, {
        body: this.editBody
      })["catch"](function (error) {
        flash(error.response.data, "danger");
      });
      this.body = this.editBody;
      this.editing = false;
      flash("Updated!");
    },
    destroy: function destroy() {
      if (this.replies_count > 0) {
        flash("Your reply has many replies.", "danger");
        return;
      }

      if (confirm("Are you sure delete this reply")) {
        axios["delete"]("/replies/" + this.id);
        eventBus.$emit("nested_delete-" + this.reply.parent_id, this.id);
        flash("Your reply has been deleted.");
      }
    },
    addNestedReply: function addNestedReply() {
      var _this3 = this;

      var url = "/replies/".concat(this.reply.id, "/new-reply");
      axios.post(url, {
        body: this.nestedbody
      })["catch"](function (error) {
        flash(error.response.data, "danger");
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this3.nestedbody = "";

        _this3.replies.push(data);

        _this3.replies_count = _this3.replies_count + 1;
        _this3.addNested = false;
        _this3.showLoadMore = true;
        flash("Your reply has been posted.");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.single-reply[data-v-5b761aea] {\r\n  margin: 5px;\n}\n.comment-body[data-v-5b761aea] {\r\n  resize: vertical !important;\n}\n.reply_created_at[data-v-5b761aea] {\r\n  color: #92959e;\r\n  font-size: 12px;\r\n  font-style: italic;\r\n  margin-right: 10px;\n}\n.reply-body[data-v-5b761aea] {\r\n  padding: 0;\r\n  margin-left: 20px;\r\n  margin-top: -8px;\r\n  color: #92959e;\n}\n.nested-reply-btn[data-v-5b761aea] {\r\n  margin-left: 10px;\n}\n.more-reply[data-v-5b761aea] {\r\n  margin-left: 20px;\n}\n.add-nested-reply-btn[data-v-5b761aea] {\r\n  color: #92959e;\n}\n.add-nested-reply-btn[data-v-5b761aea]:hover {\r\n  color: #92959e;\r\n  text-decoration: none;\n}\n.add-nested-reply-btn[data-v-5b761aea]:focus {\r\n  outline: none;\r\n  text-decoration: none;\n}\n.reply-edit-delete-btn[data-v-5b761aea] {\r\n  display: flex;\r\n  justify-content: flex-end;\n}\n.show-nested-replies-btn[data-v-5b761aea] {\r\n  /* color: black; */\r\n  color: #92959e;\n}\n.show-nested-replies-btn[data-v-5b761aea]:focus {\r\n  outline: none;\r\n  text-decoration: none;\n}\n.show-nested-replies-btn[data-v-5b761aea]:hover {\r\n  color: #92959e;\r\n  text-decoration: none;\n}\n.glyphicon-triangle-top[data-v-5b761aea],\r\n.glyphicon-triangle-bottom[data-v-5b761aea] {\r\n  margin-right: 5px;\r\n  font-size: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "single-reply", attrs: { id: "reply-" + _vm.id } },
    [
      _c("div", { staticClass: "row reply-heading" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "thread_creator" }, [
            _c(
              "a",
              {
                staticClass: "creator_name",
                attrs: { href: _vm.reply.ownerProfileUrl }
              },
              [
                _c("img", {
                  staticClass: "avatar-photo",
                  attrs: {
                    src: _vm.reply.owner.profileAvatarPath,
                    alt: _vm.reply.owner.name,
                    width: "25",
                    height: "25"
                  }
                }),
                _vm._v(" "),
                _c("user-online", { attrs: { user: _vm.reply.owner } }),
                _vm._v(
                  "\n          " + _vm._s(_vm.reply.owner.name) + "\n        "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("span", {
              staticClass: "reply_created_at",
              domProps: { textContent: _vm._s(_vm.ago) }
            })
          ])
        ]),
        _vm._v(" "),
        _vm.signedIn
          ? _c("div", { staticClass: "col-md-4 reply-edit-delete-btn" }, [
              _c("div", { staticClass: "form-g" }, [
                (_vm.authorize("owns", _vm.reply) ||
                  _vm.authorize("isAdmin")) &&
                !_vm.authorize("isBan")
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-xs btn-danger",
                        on: { click: _vm.destroy }
                      },
                      [_vm._v("Delete")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.authorize("owns", _vm.reply) && !_vm.authorize("isBan")
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-xs btn-primary",
                        on: {
                          click: function($event) {
                            _vm.editing = true
                          }
                        }
                      },
                      [_vm._v("Edit")]
                    )
                  : _vm._e()
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row reply-body" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", {
            staticClass: "reply-body",
            domProps: { innerHTML: _vm._s(_vm.body) }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "nested-reply-btn" }, [
            _vm.signedIn
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-link add-nested-reply-btn",
                    on: {
                      click: function($event) {
                        _vm.addNested = true
                        _vm.showLoadMore = false
                      }
                    }
                  },
                  [_vm._v("Reply")]
                )
              : _c(
                  "a",
                  {
                    staticClass: "btn btn-link add-nested-reply-btn",
                    attrs: { href: _vm.redirectToLogin }
                  },
                  [_vm._v("Reply")]
                ),
            _vm._v(" "),
            _vm.editing
              ? _c("div", { staticClass: "edit-reply" }, [
                  _c("div", [
                    _c(
                      "form",
                      {
                        attrs: { action: "" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.update($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editBody,
                                expression: "editBody"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              "aria-label": "...",
                              id: "bodyedit-" + _vm.reply.id,
                              placeholder: "Add a comment"
                            },
                            domProps: { value: _vm.editBody },
                            on: {
                              keyup: _vm.addReplySuggest,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.editBody = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-xs",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Save")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-xs",
                              on: {
                                click: function($event) {
                                  _vm.editing = false
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.addNested
              ? _c("div", { staticClass: "edit-reply" }, [
                  _c("div", [
                    _c(
                      "form",
                      {
                        attrs: { action: "" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.addNestedReply($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.nestedbody,
                                expression: "nestedbody"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              "aria-label": "...",
                              id: "addNested-" + _vm.reply.id,
                              placeholder: "Add a comment"
                            },
                            domProps: { value: _vm.nestedbody },
                            on: {
                              keyup: _vm.addNestedReplySuggest,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.nestedbody = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-xs",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Add")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-xs",
                              on: {
                                click: function($event) {
                                  _vm.addNested = false
                                  _vm.showLoadMore = true
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.showLoadMore && _vm.replies_count > 0
            ? _c(
                "div",
                { staticClass: "more-reply" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-xs btn-link show-nested-replies-btn",
                      on: { click: _vm.toggleNestedReplies }
                    },
                    [
                      _vm.showNested
                        ? _c("div", [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-triangle-top"
                            }),
                            _vm._v(" Hide Reply\n          ")
                          ])
                        : _c("div", [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-triangle-bottom"
                            }),
                            _vm._v(
                              "\n            " +
                                _vm._s("View " + _vm.replies_count + " Reply") +
                                "\n          "
                            )
                          ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.replies, function(reply, index) {
                    return _vm.showNested
                      ? _c("NestedReplies", {
                          key: index,
                          attrs: { reply: reply }
                        })
                      : _vm._e()
                  })
                ],
                2
              )
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/NestedReplies.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/NestedReplies.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NestedReplies_vue_vue_type_template_id_5b761aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true& */ "./resources/assets/js/components/NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true&");
/* harmony import */ var _NestedReplies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NestedReplies.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/NestedReplies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NestedReplies_vue_vue_type_style_index_0_id_5b761aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css& */ "./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NestedReplies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NestedReplies_vue_vue_type_template_id_5b761aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NestedReplies_vue_vue_type_template_id_5b761aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b761aea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/NestedReplies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/NestedReplies.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/NestedReplies.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NestedReplies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_style_index_0_id_5b761aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=style&index=0&id=5b761aea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_style_index_0_id_5b761aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_style_index_0_id_5b761aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_style_index_0_id_5b761aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_style_index_0_id_5b761aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_style_index_0_id_5b761aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_template_id_5b761aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NestedReplies.vue?vue&type=template&id=5b761aea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_template_id_5b761aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NestedReplies_vue_vue_type_template_id_5b761aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);