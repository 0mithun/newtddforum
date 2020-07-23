(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/DownVotes.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    thread: {
      type: Object
    }
  },
  data: function data() {
    return {
      isDesliked: this.thread.isDesliked
    };
  },
  created: function created() {
    var _this = this;

    window.events.$on('isLiked', function (id) {
      if (_this.thread.id == id) {
        _this.isDesliked = false;
      }
    });
  },
  computed: {
    activeClass: function activeClass() {
      return [this.isDesliked ? "active-icon" : "inactive-icon"];
    },
    signedIn: function signedIn() {
      return window.App.user ? true : false;
    }
  },
  methods: {
    toggleDislike: function toggleDislike() {
      var _this2 = this;

      if (!this.signedIn) {
        this.redirectToLogin();
      }

      axios.post("/thread/" + this.thread.id + "/dislikes").then(function (res) {
        if (_this2.isDesliked) {
          _this2.isDesliked = false;
        } else {
          _this2.isDesliked = true;
          window.events.$emit('isDesliked', _this2.thread.id);
        }
      });
    },
    redirectToLogin: function redirectToLogin() {
      window.location = '/redirect-to?page=' + location.pathname;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "tools-single-item" }, [
    _c(
      "button",
      {
        staticClass: "btn  thread-items-show-tools-btn",
        class: _vm.activeClass,
        on: { click: _vm.toggleDislike }
      },
      [_c("i", { staticClass: "fa fa-arrow-down" })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/DownVotes.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/DownVotes.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownVotes_vue_vue_type_template_id_7ced4fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownVotes.vue?vue&type=template&id=7ced4fa0& */ "./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&");
/* harmony import */ var _DownVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownVotes.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/DownVotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DownVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DownVotes_vue_vue_type_template_id_7ced4fa0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DownVotes_vue_vue_type_template_id_7ced4fa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/DownVotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/DownVotes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/DownVotes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DownVotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_template_id_7ced4fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DownVotes.vue?vue&type=template&id=7ced4fa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_template_id_7ced4fa0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_template_id_7ced4fa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);