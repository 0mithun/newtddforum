<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    thread: {
      type: Object,
      require: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    signedIn: function signedIn() {
      return window.App.user ? true : false;
    }
  },
  methods: {
    confirmDelete: function confirmDelete() {
      if (confirm('Are you sure ?')) {
        this.deleteThread();
      }

      return false;
    },
    deleteThread: function deleteThread() {
      console.log(this.thread.slug);
      axios["delete"]('/threads/' + this.thread.slug).then(function (res) {
        console.log(res.data);
        window.location = '/';
      })["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=template&id=56fd6dba&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=template&id=56fd6dba& ***!
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-sm btn-danger",
        on: { click: _vm.confirmDelete }
      },
      [_vm._v("Delete")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/threads/DeleteThreadBtn.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/threads/DeleteThreadBtn.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteThreadBtn_vue_vue_type_template_id_56fd6dba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteThreadBtn.vue?vue&type=template&id=56fd6dba& */ "./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=template&id=56fd6dba&");
/* harmony import */ var _DeleteThreadBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteThreadBtn.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteThreadBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteThreadBtn_vue_vue_type_template_id_56fd6dba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteThreadBtn_vue_vue_type_template_id_56fd6dba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/threads/DeleteThreadBtn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteThreadBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteThreadBtn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteThreadBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=template&id=56fd6dba&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=template&id=56fd6dba& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteThreadBtn_vue_vue_type_template_id_56fd6dba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteThreadBtn.vue?vue&type=template&id=56fd6dba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/threads/DeleteThreadBtn.vue?vue&type=template&id=56fd6dba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteThreadBtn_vue_vue_type_template_id_56fd6dba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteThreadBtn_vue_vue_type_template_id_56fd6dba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{NpEr:function(t,i,n){"use strict";n.r(i);var o={data:function(){return{notifications:[]}},created:function(){var t=this;this.fetchNotifications(),Echo.private("App.User.".concat(window.App.user.id)).notification((function(i){t.fetchNotifications(),"App\\Notifications\\NewMessageNotification"!=i.type&&t.playNotification()}))},computed:{unreadNotifications:function(){return this.notifications.filter((function(t){return"App\\Notifications\\NewMessageNotification"!=t.type&&null==t.read_at}))}},methods:{markAsRead:function(t){var i=this;axios.delete("/profiles/"+window.App.user.username+"/notifications/"+t.id).then((function(n){var o=i.notifications.filter((function(i){return i.id!=t.id}));i.notifications=o}))},fetchNotifications:function(){var t=this;axios.get("/profiles/"+window.App.user.username+"/notifications").then((function(i){return t.notifications=i.data}))},playNotification:function(){new Audio("https://notificationsounds.com/soundfiles/08b255a5d42b89b0585260b6f2360bdd/file-sounds-1137-eventually.mp3").play()}}},a=n("KHd+"),e=Object(a.a)(o,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("li",{staticClass:"dropdown"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[n("img",{staticClass:"navbar-icon pen",attrs:{src:"/images/bell.png",alt:""}}),t._v(" "),n("span",{staticStyle:{color:"red","font-weight":"bold","font-size":"16px"}},[t._v(t._s(t.unreadNotifications.length))])]),t._v(" "),t.unreadNotifications.length?n("ul",{staticClass:"dropdown-menu"},t._l(t.unreadNotifications,(function(i,o){return n("li",{key:o},[n("a",{attrs:{href:i.data.link,target:"_blank"},domProps:{textContent:t._s(i.data.message)},on:{click:function(n){return t.markAsRead(i)}}})])})),0):n("ul",{staticClass:"dropdown-menu"},[t._m(0)])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("a",{attrs:{href:"#"}},[this._v("No Notification")])])}],!1,null,null,null);i.default=e.exports}}]);
>>>>>>> social
