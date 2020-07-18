(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["recipient", "isFriend"],
  data: function data() {
    return {
      sentRequst: false
    };
  },
  created: function created() {
    if (!this.isFriend) {
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
        _this3.isFriend = false;
        _this3.sentRequst = false;
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
    "fragement",
    [
      _vm.isFriend
        ? [
            _c(
              "button",
              {
                staticClass: "btn btn-danger btn-sm",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.unFriend($event)
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-times" })]
            )
          ]
        : [
            _vm.sentRequst
              ? _c("button", { staticClass: "btn btn-success btn-sm" }, [
                  _vm._v("Request Sent")
                ])
              : _c(
                  "button",
                  {
                    staticClass: "btn btn-default btn-sm",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addFriend($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-user-plus" })]
                )
          ]
    ],
    2
  )
}
var staticRenderFns = []
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