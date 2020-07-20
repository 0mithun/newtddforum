(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
  props: ['userlat', 'userlng', 'defaultradius', 'nearest'],
  data: function data() {
    return {
      radius: 0,
      //    center:{lat:42.363211, lng:-105.071875},
      center: {
        lat: parseFloat(this.userlat),
        lng: parseFloat(this.userlng)
      },
      radiusOptions: [0, 100, 200, 300, 400, 500, 1000, 2000, 5000]
    };
  },
  created: function created() {
    this.radius = this.defaultradius;
    this.fetchNearestLocations();
  },
  methods: {
    fetchNearestLocations: function fetchNearestLocations() {
      var _this = this;

      if (this.center.lat == NaN || this.center.lng == NaN) {
        alert('You must provide your location first');
      }

      var url = '';

      if (this.nearest == true) {
        url = '/map/nearest-threads';
      } else {
        url = '/map/all-threads';
      }

      axios.post(url, {
        center: this.center,
        radius: this.radius
      }).then(function (res) {
        var data = res.data;
        var center = _this.center;
        var zoom = 6;
        eventBus.$emit('markers_fetched', data);
        eventBus.$emit('change_center', center);

        if (_this.radius == 0) {
          zoom = 2;
        } else if (_this.radius == 500) {
          zoom = 6;
        } else if (_this.radius == 1000) {
          zoom = 5;
        } else if (_this.radius == 2000) {
          zoom = 4;
        } else if (_this.radius == 5000) {
          zoom = 3;
        }

        eventBus.$emit('zoom_decreased', zoom);
      });
    },
    setRelatedThread: function setRelatedThread(place) {
      console.log(place);
      this.radius = 500;
      var center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.center = center;
      this.fetchNearestLocations();
    },
    onRadiusChange: function onRadiusChange() {//console.log(this.radius);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=template&id=3251018c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=template&id=3251018c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-md-9" },
      [
        _c("gmap-autocomplete", {
          staticClass: "form-control",
          attrs: { placeholder: "Type location for search thread" },
          on: { place_changed: _vm.setRelatedThread }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-3" }, [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.radius,
              expression: "radius"
            }
          ],
          staticClass: "form-control",
          attrs: { name: "", id: "" },
          on: {
            change: [
              function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.radius = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
              _vm.fetchNearestLocations
            ]
          }
        },
        [
          _c("option", { attrs: { value: "" } }, [_vm._v("Select Radius")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "0" } }, [
            _vm._v(" " + _vm._s(_vm.nearest ? "0" : "Full"))
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "100" } }, [_vm._v("100")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "200" } }, [_vm._v("200")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "300" } }, [_vm._v("300")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "400" } }, [_vm._v("400")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "500" } }, [_vm._v("500")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1000" } }, [_vm._v("1000")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2000" } }, [_vm._v("2000")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "5000" } }, [_vm._v("5000")])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/gmap/PlaceSearch.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/gmap/PlaceSearch.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlaceSearch_vue_vue_type_template_id_3251018c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlaceSearch.vue?vue&type=template&id=3251018c& */ "./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=template&id=3251018c&");
/* harmony import */ var _PlaceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaceSearch.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlaceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlaceSearch_vue_vue_type_template_id_3251018c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlaceSearch_vue_vue_type_template_id_3251018c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/gmap/PlaceSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlaceSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=template&id=3251018c&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=template&id=3251018c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceSearch_vue_vue_type_template_id_3251018c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlaceSearch.vue?vue&type=template&id=3251018c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/gmap/PlaceSearch.vue?vue&type=template&id=3251018c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceSearch_vue_vue_type_template_id_3251018c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceSearch_vue_vue_type_template_id_3251018c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);