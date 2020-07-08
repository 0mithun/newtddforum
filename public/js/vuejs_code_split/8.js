(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['recipient'],
  data: function data() {
    return {
      sentRequst: false,
      isFriend: false,
      newMessage: '',
      showModal: false,
      showMessageButton: false
    };
  },
  created: function created() {
    this.checkFriend();
    this.checkSentRequest();
    this.checkPrivacy();
  },
  methods: {
    checkPrivacy: function checkPrivacy() {
      if (this.isFriend) {
        this.showMessageButton = true;
      } else if (this.recipient.userprivacy.send_me_message === 2) {
        this.showMessageButton = true;
      } else if (this.recipient.userprivacy.send_me_message === 1) {
        this.showMessageButton = false;
      }
    },
    sendMessage: function sendMessage() {
      var _this = this;

      axios.post('/chat-send-message', {
        message: this.newMessage,
        friend: this.recipient.id,
        friend_message: this.isFriend
      }).then(function (res) {
        _this.newMessage = '';
        _this.showModal = false;
        $('#exampleModal').modal('hide');
      });
    },
    addFriend: function addFriend() {
      var _this2 = this;

      axios.post('/friend/sent-request', {
        recipient: this.recipient.id
      }).then(function (res) {
        _this2.sentRequst = true;
      });
    },
    checkFriend: function checkFriend() {
      var _this3 = this;

      axios.post('/friend/check-friend', {
        recipient: this.recipient.id
      }).then(function (res) {
        if (res.data == true) {
          _this3.isFriend = true;
        }
      });
    },
    checkSentRequest: function checkSentRequest() {
      var _this4 = this;

      axios.post('/friend/check-request-sent', {
        recipient: this.recipient.id
      }).then(function (res) {
        if (res.data == true) {
          _this4.sentRequst = true;
        }
      });
    },
    unFriend: function unFriend() {
      var _this5 = this;

      axios.post('/friend/unfriend', {
        friend: this.recipient.id
      }).then(function (res) {
        _this5.isFriend = false;
        _this5.sentRequst = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[v-cloak][data-v-3ce1ea10]{\n        display: none;\n}\n.modal-backdrop.in[data-v-3ce1ea10] {\n        display: none!important;\n}\n.modal-backdrop.in[data-v-3ce1ea10] {\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css&");

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
  return _c("div", [
    _vm.showModal
      ? _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "exampleModal",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "exampleModalLabel"
            }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newMessage,
                            expression: "newMessage"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "message-text" },
                        domProps: { value: _vm.newMessage },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newMessage = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          type: "button",
                          disabled: _vm.newMessage == ""
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.sendMessage($event)
                          }
                        }
                      },
                      [_vm._v("Send message")]
                    )
                  ])
                ])
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticStyle: { display: "inline", "margin-right": "20px" } }, [
      _vm.isFriend
        ? _c("div", [
            _c(
              "button",
              {
                staticClass: "btn btn-danger btn-sm pull-right",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.unFriend($event)
                  }
                }
              },
              [_vm._v("Urfiend")]
            )
          ])
        : _c("div", {}, [
            _vm.sentRequst
              ? _c(
                  "button",
                  { staticClass: "btn btn-success btn-sm pull-right" },
                  [_vm._v("Request Sent")]
                )
              : _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm pull-right",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addFriend($event)
                      }
                    }
                  },
                  [_vm._v("Add Friend")]
                )
          ])
    ]),
    _vm._v(" "),
    _vm.showMessageButton
      ? _c("div", { staticStyle: { display: "inline" } }, [
          _c(
            "button",
            {
              staticClass: "btn btn-default btn-sm pull-right",
              staticStyle: { "margin-right": "20px" },
              attrs: {
                type: "button",
                "data-toggle": "modal",
                "data-target": "#exampleModal"
              },
              on: {
                click: function($event) {
                  _vm.showModal = true
                }
              }
            },
            [_vm._v("Message")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("New message")]
      )
    ])
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
/* empty/unused harmony star reexport *//* harmony import */ var _AddFriend_vue_vue_type_style_index_0_id_3ce1ea10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css& */ "./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_style_index_0_id_3ce1ea10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=style&index=0&id=3ce1ea10&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_style_index_0_id_3ce1ea10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_style_index_0_id_3ce1ea10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_style_index_0_id_3ce1ea10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_style_index_0_id_3ce1ea10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_style_index_0_id_3ce1ea10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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