(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
      //1this.notifications.unshift(notification)
      _this.fetchNotifications();

      if (notification.type != "App\\Notifications\\NewMessageNotification") {
        _this.playNotification();
      }
    });
  },
  computed: {
    unreadNotifications: function unreadNotifications() {
      return this.notifications.filter(function (notification) {
        //return notification.read_at == null;
        return notification.type != "App\\Notifications\\NewMessageNotification" && notification.read_at == null;
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

      axios.get('/profiles/' + window.App.user.username + '/notifications').then(function (response) {
        return _this3.notifications = response.data;
      });
    },
    playNotification: function playNotification() {
      // let sound = new Audio('http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3');
      var sound = new Audio('https://notificationsounds.com/soundfiles/08b255a5d42b89b0585260b6f2360bdd/file-sounds-1137-eventually.mp3');
      sound.play();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
          attrs: { src: "/images/bell.png", alt: "" }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            staticStyle: {
              color: "red",
              "font-weight": "bold",
              "font-size": "16px"
            }
          },
          [_vm._v(_vm._s(_vm.unreadNotifications.length))]
        )
      ]
    ),
    _vm._v(" "),
    _vm.unreadNotifications.length
      ? _c(
          "ul",
          { staticClass: "dropdown-menu" },
          _vm._l(_vm.unreadNotifications, function(notification, index) {
            return _c("li", { key: index }, [
              _c("a", {
                attrs: { href: notification.data.link, target: "_blank" },
                domProps: { textContent: _vm._s(notification.data.message) },
                on: {
                  click: function($event) {
                    return _vm.markAsRead(notification)
                  }
                }
              })
            ])
          }),
          0
        )
      : _c("ul", { staticClass: "dropdown-menu" }, [_vm._m(0)])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#" } }, [_vm._v("No Notification")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/UserNotifications.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/UserNotifications.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserNotifications.vue?vue&type=template&id=c0045994& */ "./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&");
/* harmony import */ var _UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserNotifications.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/UserNotifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserNotifications.vue?vue&type=template&id=c0045994& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);