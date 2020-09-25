<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['profile_user'],
  data: function data() {
    return {
      center: {
        lat: parseFloat(this.profile_user.lat),
        lng: parseFloat(this.profile_user.lng)
      },
      markers: [{
        position: {
          //lat: 42.363211, lng:-105.071875
          lat: parseFloat(this.profile_user.lat),
          lng: parseFloat(this.profile_user.lng)
        }
      }],
      zoom: 4
    };
  },
  computed: {
    location: function location() {
      if (this.profile_user.lat != null || this.profile_user.lng != null) {
        return "".concat(this.profile_user.city, ", ").concat(this.profile_user.country);
      }

      return null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=template&id=6d718286&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=template&id=6d718286& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticStyle: { padding: "15px 0" } },
      [_c("map-location", { attrs: { location: _vm.location } })],
      1
    ),
    _vm._v(" "),
    _vm.profile_user.lat != null || _vm.profile_user.lng != null
      ? _c(
          "div",
          [
            _c(
              "GmapMap",
              {
                staticStyle: { width: "100%", height: "40vh" },
                attrs: {
                  center: _vm.center,
                  zoom: _vm.zoom,
                  "map-type-id": "terrain"
                }
              },
              _vm._l(_vm.markers, function(m, index) {
                return _c("GmapMarker", {
                  key: index,
                  attrs: {
                    position: m.position,
                    clickable: true,
                    draggable: false
                  }
                })
              }),
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/gmap/ProfileMap.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/gmap/ProfileMap.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileMap_vue_vue_type_template_id_6d718286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileMap.vue?vue&type=template&id=6d718286& */ "./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=template&id=6d718286&");
/* harmony import */ var _ProfileMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileMap.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileMap_vue_vue_type_template_id_6d718286___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileMap_vue_vue_type_template_id_6d718286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/gmap/ProfileMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=template&id=6d718286&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=template&id=6d718286& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileMap_vue_vue_type_template_id_6d718286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileMap.vue?vue&type=template&id=6d718286& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/ProfileMap.vue?vue&type=template&id=6d718286&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileMap_vue_vue_type_template_id_6d718286___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileMap_vue_vue_type_template_id_6d718286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{CIs8:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{name:"",tags:null,edit:!1,editId:null}},created:function(){this.fetchTags()},mounted:function(){},methods:{cancelEdit:function(){this.name="",this.edit=!1},updateTag:function(){var t=this;axios.post("/admin/tags/update",{name:this.name,id:this.editId}).then((function(a){a.data;t.name="",t.fetchTags(),flash("Tag Update Successfully"),t.edit=!1}))},editTag:function(t,a){this.edit=!0,this.name=a,this.editId=t},fetchTags:function(){var t=this;axios.get("/tags").then((function(a){var e=a.data;t.tags=e}))},addTag:function(){var t=this;axios.post("/admin/tags/add",{name:this.name}).then((function(a){a.data;t.name="",t.fetchTags(),flash("Tag Added Successfully")}))}}},s=e("KHd+"),i=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-body",staticStyle:{"padding-top":"0px"}},[e("table",{staticClass:"table table-bordered table-hover table-responsive table-bordered"},[t._m(0),t._v(" "),e("tbody",t._l(t.tags,(function(a,n){return e("tr",{key:n},[e("td",[t._v("\n                "+t._s(a.name)+"\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("button",{staticClass:"btn btn-default btn-sm",on:{click:function(e){return t.editTag(a.id,a.name)}}},[t._v("Edit")])])])})),0)]),t._v(" "),t.edit?e("div",[e("h3",[t._v("Update Tag")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"name"}},[t._v("Tag Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.updateTag}},[t._v("Update")]),t._v(" "),e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:t.cancelEdit}},[t._v("Cancel")])]):e("div",[e("h3",[t._v("Add New Tag")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"name"}},[t._v("Tag Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.addTag}},[t._v("Add New")])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{width:"80%"}},[this._v("Tag Name")]),this._v(" "),a("th",[this._v("Action")])])])}],!1,null,null,null);a.default=i.exports}}]);
>>>>>>> social
