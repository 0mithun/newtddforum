<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
      threads: []
    };
  },
  created: function created() {
    this.getTrending();
  },
  methods: {
    threadThumbStyle: function threadThumbStyle(thread) {
      return "background: rgba(".concat(thread.imageColor, ")");
    },
    getTrending: function getTrending() {
      var _this = this;

      axios.get("/trending").then(function (res) {
        _this.threads = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.thread_thumb[data-v-113089a8] {\r\n  display: block;\r\n  max-width: 100%;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  margin-bottom: 20px;\n}\n.thread_thumb_image[data-v-113089a8] {\r\n  max-width: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=template&id=113089a8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=template&id=113089a8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.threads, function(thread, index) {
      return _c("div", { key: index, staticClass: "panel" }, [
        _c(
          "div",
          {
            staticClass: "card-header thread_thumb",
            style: _vm.threadThumbStyle(thread)
          },
          [
            _c("a", { attrs: { href: thread.path } }, [
              _c("img", {
                staticClass: "thread_thumb_image",
                staticStyle: { "max-width": "100%" },
                attrs: { src: thread.threadImagePath, alt: thread.title }
              })
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _c("div", { staticClass: "trending_thread_title" }, [
            _c("a", { attrs: { href: thread.path } }, [
              _c("strong", [_vm._v(_vm._s(thread.title))])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "trending_footer" },
            [
              _c("comment-counts", {
                attrs: { color: "#ff4301", thread: thread }
              }),
              _vm._v(" "),
              _c("point-counts", { attrs: { thread: thread } })
            ],
            1
          )
        ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/threads/TrendingThread.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/threads/TrendingThread.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrendingThread_vue_vue_type_template_id_113089a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrendingThread.vue?vue&type=template&id=113089a8&scoped=true& */ "./resources/assets/js/components/threads/TrendingThread.vue?vue&type=template&id=113089a8&scoped=true&");
/* harmony import */ var _TrendingThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrendingThread.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/threads/TrendingThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TrendingThread_vue_vue_type_style_index_0_id_113089a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css& */ "./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TrendingThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrendingThread_vue_vue_type_template_id_113089a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrendingThread_vue_vue_type_template_id_113089a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "113089a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/threads/TrendingThread.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/threads/TrendingThread.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/TrendingThread.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingThread.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_style_index_0_id_113089a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=style&index=0&id=113089a8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_style_index_0_id_113089a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_style_index_0_id_113089a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_style_index_0_id_113089a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_style_index_0_id_113089a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_style_index_0_id_113089a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/threads/TrendingThread.vue?vue&type=template&id=113089a8&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/TrendingThread.vue?vue&type=template&id=113089a8&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_template_id_113089a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingThread.vue?vue&type=template&id=113089a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/TrendingThread.vue?vue&type=template&id=113089a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_template_id_113089a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingThread_vue_vue_type_template_id_113089a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Mxb1:function(t,a,n){"use strict";n.r(a);var e={data:function(){return{drawer:null,results:[],activeIndex:null}},methods:{isActive:function(t){return this.activeIndex==t?"panel-primary":""},focusMarker:function(t){this.activeIndex=t,eventBus.$emit("markers_result_clicked",t)},viewThread:function(t){this.getThreadDetails(t)},getThreadDetails:function(t){axios.post("/map/thread-details",{thread_id:t}).then((function(t){window.open(t.data.path,"_blank")}))}},created:function(){var t=this;eventBus.$on("markers_fetched",(function(a){t.results=a.results}))}},r=(n("Xnto"),n("KHd+")),i=Object(r.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"map_thraed_list"},t._l(t.results,(function(a,e){return n("div",{key:e,staticClass:"panel",class:t.isActive(e),on:{click:function(a){return t.focusMarker(e)},mouseenter:function(a){return t.focusMarker(e)}}},[n("div",{staticClass:"panel-header"},[n("h5",{staticClass:"thread-title"},[t._v(t._s(a.title))])]),t._v(" "),n("div",{staticClass:"panel-body thread-info"},[n("div",{staticClass:"thread-thumb-side"},[n("img",{staticClass:"thread-thumb",attrs:{src:a.threadImagePath,alt:""}})]),t._v(" "),n("div",{staticClass:"thread-counts"},[n("view-counts",{attrs:{thread:a}}),t._v(" "),n("point-counts",{attrs:{thread:a}}),t._v(" "),n("emoji-counts",{attrs:{thread:a}})],1)])])})),0)}),[],!1,null,"2dfad981",null);a.default=i.exports},Wmob:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.map_thraed_list[data-v-2dfad981] {\r\n  height: 100vh;\r\n  overflow-y: scroll;\n}\n.thread-info[data-v-2dfad981] {\r\n  display: flex;\n}\n.thread-thumb-side[data-v-2dfad981] {\r\n  width: 50%;\r\n  margin-right: 5%;\n}\n.thread-thumb[data-v-2dfad981] {\r\n  max-width: 100%;\r\n  height: auto;\r\n  display: inline-block;\n}\n.thread-counts[data-v-2dfad981] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  height: auto;\n}\n.thread-title[data-v-2dfad981] {\r\n  color: black;\n}\n.panel[data-v-2dfad981] {\r\n  margin-bottom: 5px;\r\n  cursor: pointer;\r\n  padding: 5px;\n}\n.panel-body[data-v-2dfad981] {\r\n  padding: 0px;\n}\r\n",""])},Xnto:function(t,a,n){"use strict";var e=n("zjBr");n.n(e).a},zjBr:function(t,a,n){var e=n("Wmob");"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,r);e.locals&&(t.exports=e.locals)}}]);
>>>>>>> social
