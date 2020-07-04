(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NewTag.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NewTag.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: '',
      tags: null,
      edit: false,
      editId: null
    };
  },
  created: function created() {
    this.fetchTags();
  },
  mounted: function mounted() {},
  methods: {
    cancelEdit: function cancelEdit() {
      this.name = '';
      this.edit = false;
    },
    updateTag: function updateTag() {
      var _this = this;

      axios.post('/admin/tags/update', {
        name: this.name,
        id: this.editId
      }).then(function (_ref) {
        var data = _ref.data;
        _this.name = '';

        _this.fetchTags();

        flash('Tag Update Successfully');
        _this.edit = false;
      });
    },
    editTag: function editTag(id, name) {
      this.edit = true;
      this.name = name;
      this.editId = id;
    },
    fetchTags: function fetchTags() {
      var _this2 = this;

      axios.get('/tags').then(function (_ref2) {
        var data = _ref2.data;
        _this2.tags = data;
      });
    },
    addTag: function addTag() {
      var _this3 = this;

      axios.post('/admin/tags/add', {
        name: this.name
      }).then(function (_ref3) {
        var data = _ref3.data;
        _this3.name = '';

        _this3.fetchTags();

        flash('Tag Added Successfully');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NewTag.vue?vue&type=template&id=6e52d1d1&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/NewTag.vue?vue&type=template&id=6e52d1d1& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "panel-body", staticStyle: { "padding-top": "0px" } },
    [
      _c(
        "table",
        {
          staticClass:
            "table table-bordered table-hover table-responsive table-bordered"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.tags, function(tag, index) {
              return _c("tr", { key: index }, [
                _c("td", [
                  _vm._v(
                    "\n                " + _vm._s(tag.name) + "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "center" } }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.editTag(tag.id, tag.name)
                        }
                      }
                    },
                    [_vm._v("Edit")]
                  )
                ])
              ])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _vm.edit
        ? _c("div", [
            _c("h3", [_vm._v("Update Tag")]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "control-label", attrs: { for: "name" } },
                [_vm._v("Tag Name: ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.name,
                    expression: "name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", name: "name", id: "name" },
                domProps: { value: _vm.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.name = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "submit" },
                on: { click: _vm.updateTag }
              },
              [_vm._v("Update")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                attrs: { type: "submit" },
                on: { click: _vm.cancelEdit }
              },
              [_vm._v("Cancel")]
            )
          ])
        : _c("div", [
            _c("h3", [_vm._v("Add New Tag")]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "control-label", attrs: { for: "name" } },
                [_vm._v("Tag Name: ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.name,
                    expression: "name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", name: "name", id: "name" },
                domProps: { value: _vm.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.name = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "submit" },
                on: { click: _vm.addTag }
              },
              [_vm._v("Add New")]
            )
          ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "80%" } }, [_vm._v("Tag Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/NewTag.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/components/NewTag.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewTag_vue_vue_type_template_id_6e52d1d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewTag.vue?vue&type=template&id=6e52d1d1& */ "./resources/assets/js/components/NewTag.vue?vue&type=template&id=6e52d1d1&");
/* harmony import */ var _NewTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewTag.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/NewTag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewTag_vue_vue_type_template_id_6e52d1d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewTag_vue_vue_type_template_id_6e52d1d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/NewTag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/NewTag.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/NewTag.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewTag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NewTag.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/NewTag.vue?vue&type=template&id=6e52d1d1&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/NewTag.vue?vue&type=template&id=6e52d1d1& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTag_vue_vue_type_template_id_6e52d1d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewTag.vue?vue&type=template&id=6e52d1d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/NewTag.vue?vue&type=template&id=6e52d1d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTag_vue_vue_type_template_id_6e52d1d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewTag_vue_vue_type_template_id_6e52d1d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);