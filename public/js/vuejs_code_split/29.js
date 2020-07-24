(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  components: {},
  data: function data() {
    return {
      posts: this.tag.threads,
      followings: [],
      isFollow: false
    };
  },
  computed: {
    postCounts: function postCounts() {
      return abbreviate(this.posts.length, 1);
    }
  },
  created: function created() {
    this.checkIsFollow();
  },
  methods: {
    toggleFollow: function toggleFollow() {
      var _this = this;

      axios.post("/tag/".concat(this.tag.id, "/follow")).then(function (res) {
        _this.isFollow = !_this.isFollow;
        flash(res.data.message);
      });
    },
    checkIsFollow: function checkIsFollow() {
      var _this2 = this;

      axios.get("/tag/".concat(this.tag.id, "/is-follow")).then(function (res) {
        _this2.isFollow = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.profile-header[data-v-83915526] {\r\n  margin: 30px auto;\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-name[data-v-83915526] {\r\n  padding: 0;\r\n  margin: 0;\n}\n.profile-name span[data-v-83915526] {\r\n  color: rgb(255, 67, 1);\n}\n.profile-buttons[data-v-83915526] {\r\n  padding: 10px 0px;\n}\n.profile-img[data-v-83915526] {\r\n  width: 120px;\r\n  height: 120px;\r\n  padding: 3px;\r\n  border: 2px solid rgb(255, 67, 1);\r\n  border-radius: 50%;\n}\n.profile-avatar[data-v-83915526] {\r\n  margin-right: 30px;\n}\n.profile-count[data-v-83915526] {\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-count > *[data-v-83915526] {\r\n  margin-left: 5px;\r\n  margin-right: 5px;\n}\n.follow-btn[data-v-83915526] {\r\n  width: 100px;\r\n  background-color: rgb(255, 67, 1);\r\n  color: white;\n}\n.unfollow-btn[data-v-83915526] {\r\n  width: 100px;\r\n  background-color: red;\r\n  color: white;\n}\n.single-tags-name[data-v-83915526] {\r\n  color: black;\n}\n.single-tags-name span[data-v-83915526] {\r\n  color: rgb(255, 67, 1);\n}\n.post-counts[data-v-83915526] {\r\n  color: black;\r\n  padding: 15px 0;\r\n  font-weight: bold;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "top-margin row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "row profile-header" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "profile-details" }, [
            _c("h2", { staticClass: "profile-name" }, [
              _vm._v("\n            #\n            "),
              _c("span", [_vm._v(_vm._s(_vm.tag.name.toLowerCase()))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "profile-count" },
              [_c("post-counts", { attrs: { post_count: _vm.posts.length } })],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "profile-buttons" }, [
              _vm.isFollow
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-sm unfollow-btn",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.toggleFollow($event)
                        }
                      }
                    },
                    [_vm._v("Unfllow")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-sm follow-btn",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.toggleFollow($event)
                        }
                      }
                    },
                    [_vm._v("Follow")]
                  )
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "post-header" }, [
            _c("div", { staticClass: "post-counts" }, [
              _vm._v(_vm._s(_vm.postCounts) + " posts")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "post-body" },
            _vm._l(_vm.posts, function(thread, index) {
              return _c("single-thread", {
                key: index,
                attrs: { thread: thread }
              })
            }),
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [_vm._v("sidebar")])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-avatar" }, [
      _c("img", {
        staticClass: "profile-img",
        attrs: { src: "/images/default.png", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-tags" }, [
      _c("strong", [_vm._v("Following:")]),
      _vm._v(" "),
      _c("a", { staticClass: "single-tags-name", attrs: { href: "#" } }, [
        _vm._v("\n              #\n              "),
        _c("span", [_vm._v("Home")])
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "single-tags-name", attrs: { href: "#" } }, [
        _vm._v("\n              #\n              "),
        _c("span", [_vm._v("Entertainment")])
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "single-tags-name", attrs: { href: "#" } }, [
        _vm._v("\n              #\n              "),
        _c("span", [_vm._v("Television")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagPage.vue?vue&type=template&id=83915526&scoped=true& */ "./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&");
/* harmony import */ var _TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagPage.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& */ "./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "83915526",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/tag/TagPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=style&index=0&id=83915526&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_style_index_0_id_83915526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TagPage.vue?vue&type=template&id=83915526&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/tag/TagPage.vue?vue&type=template&id=83915526&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPage_vue_vue_type_template_id_83915526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);