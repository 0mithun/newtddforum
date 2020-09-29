(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ReportThread.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
      reason: "",
      restrictions: ""
    };
  },
  created: function created() {},
  computed: {
    signedIn: function signedIn() {
      return window.App.user ? true : false;
    },
    isDiabled: function isDiabled() {
      if (this.reason == "" && this.restrictions == "") {
        return true;
      }
    }
  },
  methods: {
    report: function report() {
      if (!this.signedIn) {
        this.redirectToLogin();
      }

      axios.post("/report/thread", {
        id: this.thread.id,
        reason: this.reason,
        restrictions: this.restrictions
      }).then(function (res) {});
    },
    redirectToLogin: function redirectToLogin() {
      window.location = "/redirect-to?page=" + location.pathname;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tools-single-item-align-bottoms[data-v-3d3d4b15] {\r\n  align-self: flex-end;\n}\n.report-btn[data-v-3d3d4b15] {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 14px;\r\n  padding: 0;\r\n  height: auto;\r\n  width: auto;\n}\n#reason[data-v-3d3d4b15] {\r\n  resize: vertical;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "tools-single-item tools-single-item-align-bottoms" },
    [
      _c(
        "button",
        {
          staticClass: "btn thread-items-show-tools-btn report-btn",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#showReportModal"
          },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.signedIn ? true : _vm.redirectToLogin()
            }
          }
        },
        [_vm._v("\n    Report\n  ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { tabindex: "-1", role: "dialog", id: "showReportModal" }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-sm",
              attrs: { role: "document" }
            },
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
                          value: _vm.reason,
                          expression: "reason"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "reason", id: "reason", rows: "2" },
                      domProps: { value: _vm.reason },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.reason = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.restrictions,
                            expression: "restrictions"
                          }
                        ],
                        staticClass: "form-control",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.restrictions = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { selected: "" } }, [
                          _vm._v("Select age restrictions")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Under 13")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "13" } }, [
                          _vm._v("Should be Pg-13")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "18" } }, [
                          _vm._v("Should be rated R")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { disabled: _vm.isDiabled },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.report($event)
                          }
                        }
                      },
                      [_vm._v("\n              Report\n            ")]
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
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
        { staticClass: "modal-title", attrs: { id: "gridSystemModalLabel" } },
        [_vm._v("\n            Report Thread\n          ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/ReportThread.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/ReportThread.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportThread_vue_vue_type_template_id_3d3d4b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true& */ "./resources/assets/js/components/ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true&");
/* harmony import */ var _ReportThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportThread.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ReportThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportThread_vue_vue_type_style_index_0_id_3d3d4b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css& */ "./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportThread_vue_vue_type_template_id_3d3d4b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportThread_vue_vue_type_template_id_3d3d4b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d3d4b15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ReportThread.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ReportThread.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/ReportThread.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportThread.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_style_index_0_id_3d3d4b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=style&index=0&id=3d3d4b15&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_style_index_0_id_3d3d4b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_style_index_0_id_3d3d4b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_style_index_0_id_3d3d4b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_style_index_0_id_3d3d4b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_style_index_0_id_3d3d4b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_template_id_3d3d4b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ReportThread.vue?vue&type=template&id=3d3d4b15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_template_id_3d3d4b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportThread_vue_vue_type_template_id_3d3d4b15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);