(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.tz.setDefault("America/New_York");
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notifications: []
    };
  },
  created: function created() {
    var _this = this;

    this.fetchNotifications();
    Echo["private"]("App.User.".concat(window.App.user.id)).notification(function (notification) {
      _this.fetchNotifications();

      if (notification.type == "App\\Notifications\\NewMessageNotification") {
        _this.playNotification();
      }
    });
  },
  computed: {
    unreadNotifications: function unreadNotifications() {
      return this.notifications.filter(function (notification) {
        return notification.type == "App\\Notifications\\NewMessageNotification" && notification.read_at == null;
      });
    },
    messageNotifications: function messageNotifications() {
      return this.notifications.filter(function (notification) {
        return notification.type == "App\\Notifications\\NewMessageNotification";
      });
    }
  },
  methods: {
    markAsRead: function markAsRead(notification) {
      var _this2 = this;

      axios["delete"]('/profiles/' + window.App.user.username + '/notifications/' + notification.id).then(function (res) {
        var notifications = _this2.notifications.filter(function (item) {
          return item.id != notification.id;
        });

        _this2.notifications = notifications;
      });
    },
    fetchNotifications: function fetchNotifications() {
      var _this3 = this;

      axios.get('/profiles/' + window.App.user.username + '/message-notifications').then(function (response) {
        var newArray = _.uniqBy(response.data, "data.friend.id");

        _this3.notifications = newArray;
      });
    },
    playNotification: function playNotification() {
      var sound = new Audio('http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3'); //let sound = new Audio('https://notificationsounds.com/soundfiles/08b255a5d42b89b0585260b6f2360bdd/file-sounds-1137-eventually.mp3');

      sound.play();
    },
    formateMessageTime: function formateMessageTime(timestamp) {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format('MM-D-YYYY, h:mm:ss A'); //    return moment(timestamp).fromNow();
      //return moment(timestamp).calendar();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli.list-group-item[data-v-1b52d6d2] {\n    width: 500px;\n    height: 55px;\n    vertical-align: center;\n}\nli.list-group-item[data-v-1b52d6d2]:last-child{\n    border-bottom: none;\n}\nli.list-group-item[data-v-1b52d6d2]:first-child{\n    border-top: none;\n}\nli.list-group-item a[data-v-1b52d6d2]:hover{\n    background: none;\n}\nli.list-group-item[data-v-1b52d6d2]:hover{\n    background:#dddfe2;\n}\n.profile-image[data-v-1b52d6d2]{\n    width:40px;\n    height:40px;\n    border-radius: 50%;\n}\n.profile[data-v-1b52d6d2]{\n        padding: 0;\n}\n.message[data-v-1b52d6d2]{\n}\n.dropdown-menu > li > a[data-v-1b52d6d2] {\n    padding: 0px;\n}\nli.list-group-item[data-v-1b52d6d2]{\n    padding:5px ;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("li", { staticClass: "dropdown" }, [
    _c(
      "a",
      {
        staticClass: "dropdown-toggle",
        attrs: { href: "#", "data-toggle": "dropdown" }
      },
      [
        _c("img", {
          staticClass: "navbar-icon pen",
          attrs: { src: "/images/mail.png", alt: "" }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            staticStyle: {
              color: "red",
              "font-weight": "bold",
              "font-size": "14px"
            }
          },
          [_vm._v(_vm._s(_vm.unreadNotifications.length))]
        )
      ]
    ),
    _vm._v(" "),
    _vm.messageNotifications.length
      ? _c(
          "ul",
          { staticClass: "dropdown-menu dropdown-menu-left list-group" },
          _vm._l(_vm.messageNotifications, function(notification, index) {
            return _c("li", { key: index, staticClass: "list-group-item" }, [
              _c(
                "a",
                {
                  attrs: { href: "/chat" },
                  on: {
                    click: function($event) {
                      return _vm.markAsRead(notification)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "col-md-1 profile" }, [
                    _c("img", {
                      staticClass: "profile-image",
                      attrs: {
                        src: notification.data.friend.profileAvatarPath,
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-11 message" }, [
                    _c("b", {
                      staticClass: "pull-left",
                      domProps: {
                        textContent: _vm._s(notification.data.friend.name)
                      }
                    }),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "pull-right",
                      domProps: {
                        textContent: _vm._s(
                          _vm.formateMessageTime(
                            notification.data.message.created_at
                          )
                        )
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "text-muted",
                      domProps: {
                        textContent: _vm._s(notification.data.message.message)
                      }
                    })
                  ])
                ]
              )
            ])
          }),
          0
        )
      : _c("ul", { staticClass: "dropdown-menu dropdown-menu-left" }, [
          _vm._m(0)
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      {
        staticClass: "list-group-item",
        staticStyle: { height: "30px", width: "175px" }
      },
      [_c("span", { staticClass: "text-center" }, [_vm._v("No Message")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/chat/MessageNotification.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/chat/MessageNotification.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageNotification_vue_vue_type_template_id_1b52d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true& */ "./resources/assets/js/components/chat/MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true&");
/* harmony import */ var _MessageNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageNotification.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/chat/MessageNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MessageNotification_vue_vue_type_style_index_0_id_1b52d6d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css& */ "./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MessageNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageNotification_vue_vue_type_template_id_1b52d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessageNotification_vue_vue_type_template_id_1b52d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b52d6d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/chat/MessageNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/chat/MessageNotification.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/chat/MessageNotification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_style_index_0_id_1b52d6d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=style&index=0&id=1b52d6d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_style_index_0_id_1b52d6d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_style_index_0_id_1b52d6d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_style_index_0_id_1b52d6d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_style_index_0_id_1b52d6d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_style_index_0_id_1b52d6d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/chat/MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/chat/MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_template_id_1b52d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/MessageNotification.vue?vue&type=template&id=1b52d6d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_template_id_1b52d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageNotification_vue_vue_type_template_id_1b52d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);