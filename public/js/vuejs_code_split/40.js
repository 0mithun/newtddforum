(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["recipient", "isFriend"],
  data: function data() {
    return {
      sentRequst: false,
      isMyFriend: this.isFriend
    };
  },
  created: function created() {
    if (!this.isMyFriend) {
      this.checkSentRequest();
    }
  },
  methods: {
    addFriend: function addFriend() {
      var _this = this;

      axios.post("/friend/sent-request", {
        recipient: this.recipient.id
      }).then(function (res) {
        _this.sentRequst = true;
      });
    },
    checkSentRequest: function checkSentRequest() {
      var _this2 = this;

      axios.post("/friend/check-request-sent", {
        recipient: this.recipient.id
      }).then(function (res) {
        if (res.data == true) {
          _this2.sentRequst = true;
        }
      });
    },
    unFriend: function unFriend() {
      var _this3 = this;

      axios.post("/friend/unfriend", {
        friend: this.recipient.id
      }).then(function (res) {
        _this3.isMyFriend = false;
        _this3.sentRequst = false;

        _this3.$store.dispatch("removeFriend", window.App.user.id);
      });
    },
    blockFriend: function blockFriend() {
      var _this4 = this;

      axios.post("/profiles/block-friend", {
        friend: this.recipient.id
      }).then(function (res) {
        _this4.$store.dispatch("addBlockLists", _this4.recipient);

        flash(res.data.message);
        window.location = "/";
      });
    },
    cancelRequest: function cancelRequest() {
      var _this5 = this;

      axios.post("/profiles/cancel-friend-request", {
        friend: this.recipient.id
      }).then(function (res) {
        _this5.sentRequst = false;

        _this5.$store.dispatch("removeFriendRequest", _this5.recipient.id);

        flash(res.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "btn-group" },
    [
      _vm.isMyFriend
        ? [
            _vm._m(0),
            _vm._v(" "),
            _c("ul", { staticClass: "dropdown-menu" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.unFriend($event)
                      }
                    }
                  },
                  [_vm._v("Unfriend")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.blockFriend($event)
                      }
                    }
                  },
                  [_vm._v("Block")]
                )
              ])
            ])
          ]
        : [
            _vm.sentRequst
              ? [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("ul", { staticClass: "dropdown-menu" }, [
                    _c("li", [
                      _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.cancelRequest($event)
                            }
                          }
                        },
                        [_vm._v("Cancel Request")]
                      )
                    ])
                  ])
                ]
              : [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: {
                        type: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.addFriend($event)
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-user-plus",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ]
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-default btn-sm dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-user", attrs: { "aria-hidden": "true" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-success btn-sm dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-ellipsis-h",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" Request sent\n      ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/AddFriend.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/AddFriend.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& */ "./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&");
/* harmony import */ var _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ce1ea10",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/AddFriend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);