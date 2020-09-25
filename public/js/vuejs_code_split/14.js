<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    thread: {
      type: Object
    },
    size: {
      type: String,
      "default": "big"
    }
  },
  data: function data() {
    return {
      isDesliked: this.thread.isDesliked
    };
  },
  created: function created() {
    var _this = this;

    window.events.$on("isLiked", function (id) {
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
    },
    style: function style() {
      return {
        borderWidth: this.size == "small" ? "1px" : "2px",
        height: this.size == "small" ? "24px" : "40px",
        width: this.size == "small" ? "24px" : "40px",
        fontSize: this.size == "small" ? "20px" : "25px"
      };
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
          window.events.$emit("isDesliked", _this2.thread.id);
        }

        eventBus.$emit("threadVoted-" + _this2.thread.id, _this2.thread.id);
      });
    },
    redirectToLogin: function redirectToLogin() {
      window.location = "/redirect-to?page=" + location.pathname;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thread-items-show-tools-btn[data-v-7ced4fa0] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true& ***!
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
  return _c("div", { staticClass: "tools-single-item" }, [
    _c(
      "button",
      {
        staticClass: "btn  thread-items-show-tools-btn",
        class: _vm.activeClass,
        style: _vm.style,
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
/* harmony import */ var _DownVotes_vue_vue_type_template_id_7ced4fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true& */ "./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true&");
/* harmony import */ var _DownVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownVotes.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/DownVotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DownVotes_vue_vue_type_style_index_0_id_7ced4fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true& */ "./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DownVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DownVotes_vue_vue_type_template_id_7ced4fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DownVotes_vue_vue_type_template_id_7ced4fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ced4fa0",
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

/***/ "./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_style_index_0_id_7ced4fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=style&index=0&id=7ced4fa0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_style_index_0_id_7ced4fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_style_index_0_id_7ced4fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_style_index_0_id_7ced4fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_style_index_0_id_7ced4fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_style_index_0_id_7ced4fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_template_id_7ced4fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DownVotes.vue?vue&type=template&id=7ced4fa0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_template_id_7ced4fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DownVotes_vue_vue_type_template_id_7ced4fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"71aQ":function(t,a,e){var r=e("Xozy");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,s);r.locals&&(t.exports=r.locals)},Xozy:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".social-share-btn[data-v-2d96c522] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.threads-counts[data-v-2d96c522] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n}\n.thread_thumb[data-v-2d96c522] {\n  display: block;\n  max-width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.thread_thumb_image[data-v-2d96c522] {\n  max-width: 100%;\n}\n.panel[data-v-2d96c522] {\n  position: relative;\n}\n.tools-row[data-v-2d96c522] {\n  margin-top: 20px;\n}",""])},k3Wm:function(t,a,e){"use strict";var r=e("71aQ");e.n(r).a},mzOS:function(t,a,e){"use strict";e.r(a);var r={props:["thread"],computed:{threadThumbStyle:function(){return"background: rgba(".concat(this.thread.imageColor,")")}}},s=(e("k3Wm"),e("KHd+")),d=Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"thread-tags"},t._l(t.thread.tagNameList,(function(a,r){return e("a",{key:r,staticClass:"tag-name",attrs:{href:"/threads/"+a.toLowerCase().trim()}},[t._v("#"+t._s(a.toLowerCase().trim()))])})),0),t._v(" "),e("div",{staticClass:"thread_title"},[e("a",{attrs:{href:t.thread.path}},[e("strong",[t._v(t._s(t.thread.title))])])]),t._v(" "),e("div",{staticClass:"card-header threads-counts"},[e("view-counts",{attrs:{thread:t.thread}}),t._v(" "),e("comment-counts",{attrs:{thread:t.thread}}),t._v(" "),e("point-counts",{attrs:{thread:t.thread}}),t._v(" "),e("favorite-counts",{attrs:{thread:t.thread}}),t._v(" "),e("emoji-counts",{attrs:{thread:t.thread}}),t._v(" "),e("div",{staticClass:"thread-map-icon"},[e("map-location",{attrs:{location:t.thread.location}})],1)],1),t._v(" "),e("div",{staticClass:"card-header thread_thumb",style:t.threadThumbStyle},[e("a",{attrs:{href:t.thread.path}},[e("img",{staticClass:"thread-image thread_thumb_image",attrs:{src:t.thread.threadImagePath,alt:t.thread.title}})])]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.thread.excerpt)}}),t._v(" "),e("div",{staticClass:"tools-row"},[e("vote-emoji-list",{attrs:{thread:t.thread,size:"small",position:"top"}}),t._v(" "),e("div",{staticClass:"col-md-3 social-share-btn"},[e("fb-share",{attrs:{thread:t.thread}}),t._v(" "),e("twitter-share",{attrs:{thread:t.thread}})],1),t._v(" "),e("div",{staticClass:"col-md-9 thread-show-tools"},[e("vote-emojis",{attrs:{thread:t.thread,size:"small",position:"top"}}),t._v(" "),e("favorite-thread",{attrs:{thread:t.thread,size:"small"}}),t._v(" "),e("up-votes",{attrs:{thread:t.thread,size:"small"}}),t._v(" "),e("down-votes",{attrs:{thread:t.thread,size:"small"}}),t._v(" "),e("report-thread",{attrs:{thread:t.thread,size:"small"}}),t._v(" "),e("show-source",{attrs:{thread:t.thread,size:"small"}})],1)],1)])])}),[],!1,null,"2d96c522",null);a.default=d.exports}}]);
>>>>>>> social
