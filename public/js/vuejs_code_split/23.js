(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FavoriteThread.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FavoriteThread.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    thread: {
      type: Object
    }
  },
  data: function data() {
    return {
      active: this.thread.isFavorited,
      isFavoriteThread: false
    };
  },
  computed: {
    classes: function classes() {
      return [this.isFavoriteThread ? 'active-favorite' : 'inactive-favorite'];
    },
    endpoint: function endpoint() {
      return '/thread/' + this.thread.id + '/favorites';
    },
    signedIn: function signedIn() {
      return window.App.user ? true : false;
    }
  },
  created: function created() {
    this.checkIsFavoriteThread();
  },
  methods: {
    toggle: function toggle() {
      if (this.signedIn) {
        this.isFavoriteThread ? this.destroy() : this.create();
      }

      return;
    },
    create: function create() {
      axios.post(this.endpoint).then(function (res) {});
      this.isFavoriteThread = true;
      flash('You are successfully favorite this thread', 'success');
    },
    destroy: function destroy() {
      axios["delete"](this.endpoint);
      this.isFavoriteThread = false;
      flash('You are successfully un favorite this thread', 'success');
    },
    checkIsFavoriteThread: function checkIsFavoriteThread() {
      var _this = this;

      if (this.signedIn) {
        axios.post('/thread/check-thread-favorite', {
          thread: this.thread.id,
          user: window.App.user.id
        }).then(function (res) {
          if (res.data.favorited) {
            return _this.isFavoriteThread = true;
          }

          return _this.isFavoriteThread = false;
        });
      }

      return this.isFavoriteThread = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FavoriteThread.vue?vue&type=template&id=37df11bd&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/FavoriteThread.vue?vue&type=template&id=37df11bd& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        class: _vm.classes,
        on: { click: _vm.toggle }
      },
      [_c("i", { staticClass: "fa fa-heart" })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/FavoriteThread.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/FavoriteThread.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FavoriteThread_vue_vue_type_template_id_37df11bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavoriteThread.vue?vue&type=template&id=37df11bd& */ "./resources/assets/js/components/FavoriteThread.vue?vue&type=template&id=37df11bd&");
/* harmony import */ var _FavoriteThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavoriteThread.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/FavoriteThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FavoriteThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FavoriteThread_vue_vue_type_template_id_37df11bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FavoriteThread_vue_vue_type_template_id_37df11bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/FavoriteThread.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/FavoriteThread.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/FavoriteThread.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteThread.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FavoriteThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/FavoriteThread.vue?vue&type=template&id=37df11bd&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/FavoriteThread.vue?vue&type=template&id=37df11bd& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteThread_vue_vue_type_template_id_37df11bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FavoriteThread.vue?vue&type=template&id=37df11bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/FavoriteThread.vue?vue&type=template&id=37df11bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteThread_vue_vue_type_template_id_37df11bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FavoriteThread_vue_vue_type_template_id_37df11bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);