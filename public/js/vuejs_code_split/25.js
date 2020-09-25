<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UpVotes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
      isLiked: this.thread.isLiked
    };
  },
  created: function created() {
    var _this = this;

    window.events.$on("isDesliked", function (id) {
      if (_this.thread.id == id) {
        _this.isLiked = false;
      }
    });
  },
  computed: {
    activeClass: function activeClass() {
      return [this.isLiked ? "active-icon" : "inactive-icon"];
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
    toggleLike: function toggleLike() {
      var _this2 = this;

      if (!this.signedIn) {
        this.redirectToLogin();
      }

      axios.post("/thread/" + this.thread.id + "/likes").then(function (res) {
        if (_this2.isLiked) {
          _this2.isLiked = false;
        } else {
          _this2.isLiked = true;
          window.events.$emit("isLiked", _this2.thread.id);
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thread-items-show-tools-btn[data-v-9a942bf2] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        on: { click: _vm.toggleLike }
      },
      [_c("i", { staticClass: "fa fa-arrow-up" })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/UpVotes.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/components/UpVotes.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpVotes_vue_vue_type_template_id_9a942bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true& */ "./resources/assets/js/components/UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true&");
/* harmony import */ var _UpVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpVotes.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/UpVotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpVotes_vue_vue_type_style_index_0_id_9a942bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true& */ "./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpVotes_vue_vue_type_template_id_9a942bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpVotes_vue_vue_type_template_id_9a942bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9a942bf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/UpVotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/UpVotes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/UpVotes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpVotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_style_index_0_id_9a942bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=style&index=0&id=9a942bf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_style_index_0_id_9a942bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_style_index_0_id_9a942bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_style_index_0_id_9a942bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_style_index_0_id_9a942bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_style_index_0_id_9a942bf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_template_id_9a942bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UpVotes.vue?vue&type=template&id=9a942bf2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_template_id_9a942bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpVotes_vue_vue_type_template_id_9a942bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{EIM1:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.single-reply[data-v-9e59d962] {\r\n  margin: 5px;\n}\n.comment-body[data-v-9e59d962] {\r\n  resize: vertical !important;\n}\n.reply_created_at[data-v-9e59d962] {\r\n  color: #92959e;\r\n  font-size: 12px;\r\n  font-style: italic;\r\n  margin-right: 10px;\n}\n.reply-body[data-v-9e59d962] {\r\n  padding: 0;\r\n  margin-left: 20px;\r\n  margin-top: -8px;\r\n  color: #92959e;\n}\n.nested-reply-btn[data-v-9e59d962] {\r\n  margin-left: 10px;\n}\n.more-reply[data-v-9e59d962] {\r\n  margin-left: 20px;\n}\n.add-nested-reply-btn[data-v-9e59d962] {\r\n  color: #92959e;\n}\n.add-nested-reply-btn[data-v-9e59d962]:hover {\r\n  color: #92959e;\r\n  text-decoration: none;\n}\n.add-nested-reply-btn[data-v-9e59d962]:focus {\r\n  outline: none;\r\n  text-decoration: none;\n}\n.reply-edit-delete-btn[data-v-9e59d962] {\r\n  display: flex;\r\n  justify-content: flex-end;\n}\n.show-nested-replies-btn[data-v-9e59d962] {\r\n  /* color: black; */\r\n  color: #92959e;\n}\n.show-nested-replies-btn[data-v-9e59d962]:focus {\r\n  outline: none;\r\n  text-decoration: none;\n}\n.show-nested-replies-btn[data-v-9e59d962]:hover {\r\n  color: #92959e;\r\n  text-decoration: none;\n}\n.glyphicon-triangle-top[data-v-9e59d962],\r\n.glyphicon-triangle-bottom[data-v-9e59d962] {\r\n  margin-right: 5px;\r\n  font-size: 10px;\n}\r\n",""])},Mtk0:function(e,t,n){"use strict";var s=n("bIHs");n.n(s).a},RKNe:function(e,t,n){"use strict";n.r(t);n("TiIQ"),n("bKju");var s={name:"NestedReplies",props:["reply"],components:{NestedReplies:function(){return Promise.resolve().then(n.bind(null,"RKNe"))}},data:function(){return{editing:!1,id:this.reply.id,body:this.reply.body,editBody:this.reply.body,replies:[],replies_count:this.reply.reply_count,showNested:!1,addNested:!1,nestedbody:"",showLoadMore:!0}},computed:{ago:function(){return moment(this.reply.created_at,"YYYY-MM-DD HH:mm:ss").fromNow()+"..."},signedIn:function(){return!!window.App.user},redirectToLogin:function(){return"/redirect-to?page="+location.pathname}},created:function(){var e=this;eventBus.$on("nested_delete-"+this.reply.id,(function(t){var n=e.replies.filter((function(e){return e.id!=t}));e.replies=n,e.replies_count=e.replies_count-1}))},methods:{toggleNestedReplies:function(){this.showNested?this.showNested=!1:(this.loadNestedReply(),this.showNested=!0)},addReplySuggest:function(){$("#bodyedit-"+this.reply.id).atwho({at:"@",delay:750,callbacks:{remoteFilter:function(e,t){$.getJSON("/api/users",{name:e},(function(e){t(e)}))}}}),$("#addNested-"+this.reply.id).atwho({at:"@",delay:750,callbacks:{remoteFilter:function(e,t){$.getJSON("/api/users",{name:e},(function(e){t(e)}))}}})},addNestedReplySuggest:function(){$("#addNested-"+this.reply.id).atwho({at:"@",delay:750,callbacks:{remoteFilter:function(e,t){$.getJSON("/api/users",{name:e},(function(e){t(e)}))}}})},loadNestedReply:function(){var e=this,t="/replies/".concat(this.reply.id,"/load-reply");axios.get(t).then((function(t){var n=t.data;e.replies=n}))},update:function(){axios.patch("/replies/"+this.id,{body:this.editBody}).catch((function(e){flash(e.response.data,"danger")})),this.body=this.editBody,this.editing=!1,flash("Updated!")},destroy:function(){this.replies_count>0?flash("Your reply has many replies.","danger"):confirm("Are you sure delete this reply")&&(axios.delete("/replies/"+this.id),eventBus.$emit("nested_delete-"+this.reply.parent_id,this.id),eventBus.$emit("deleteNestedReplies-"+this.reply.thread_id),flash("Your reply has been deleted."))},addNestedReply:function(){var e=this,t="/replies/".concat(this.reply.id,"/new-reply");axios.post(t,{body:this.nestedbody}).catch((function(e){flash(e.response.data,"danger")})).then((function(t){var n=t.data;e.nestedbody="",e.replies.push(n),e.replies_count=e.replies_count+1,e.addNested=!1,e.showLoadMore=!0,eventBus.$emit("addNestedReplies-"+e.reply.thread_id),flash("Your reply has been posted.")}))}}},i=(n("Mtk0"),n("KHd+")),a=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-reply",attrs:{id:"reply-"+e.id}},[n("div",{staticClass:"row reply-heading"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"thread_creator"},[n("a",{staticClass:"creator_name",attrs:{href:e.reply.ownerProfileUrl}},[n("img",{staticClass:"avatar-photo",attrs:{src:e.reply.owner.profileAvatarPath,alt:e.reply.owner.name,width:"25",height:"25"}}),e._v(" "),n("user-online",{attrs:{user:e.reply.owner}}),e._v("\n          "+e._s(e.reply.owner.name)+"\n        ")],1),e._v(" "),n("span",{staticClass:"reply_created_at",domProps:{textContent:e._s(e.ago)}})])]),e._v(" "),e.signedIn?n("div",{staticClass:"col-md-4 reply-edit-delete-btn"},[n("div",{staticClass:"form-g"},[!e.authorize("owns",e.reply)&&!e.authorize("isAdmin")||e.authorize("isBan")?e._e():n("button",{staticClass:"btn btn-xs btn-danger",on:{click:e.destroy}},[e._v("\n          Delete\n        ")]),e._v(" "),e.authorize("owns",e.reply)&&!e.authorize("isBan")?n("button",{staticClass:"btn btn-xs btn-primary",on:{click:function(t){e.editing=!0}}},[e._v("\n          Edit\n        ")]):e._e()])]):e._e()]),e._v(" "),n("div",{staticClass:"row reply-body"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"reply-body",domProps:{innerHTML:e._s(e.body)}}),e._v(" "),n("div",{staticClass:"nested-reply-btn"},[e.signedIn?n("button",{staticClass:"btn btn-link add-nested-reply-btn",on:{click:function(t){e.addNested=!0,e.showLoadMore=!1}}},[e._v("\n          Reply\n        ")]):n("a",{staticClass:"btn btn-link add-nested-reply-btn",attrs:{href:e.redirectToLogin}},[e._v("Reply")]),e._v(" "),e.editing?n("div",{staticClass:"edit-reply"},[n("div",[n("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.update(t)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editBody,expression:"editBody"}],staticClass:"form-control",attrs:{type:"text","aria-label":"...",id:"bodyedit-"+e.reply.id,placeholder:"Add a comment"},domProps:{value:e.editBody},on:{keyup:e.addReplySuggest,input:function(t){t.target.composing||(e.editBody=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary btn-xs",attrs:{type:"submit"}},[e._v("\n                  Save\n                ")]),e._v(" "),n("button",{staticClass:"btn btn-danger btn-xs",on:{click:function(t){e.editing=!1}}},[e._v("\n                  Cancel\n                ")])])])])]):e._e(),e._v(" "),e.addNested?n("div",{staticClass:"edit-reply"},[n("div",[n("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.addNestedReply(t)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.nestedbody,expression:"nestedbody"}],staticClass:"form-control",attrs:{type:"text","aria-label":"...",id:"addNested-"+e.reply.id,placeholder:"Add a comment"},domProps:{value:e.nestedbody},on:{keyup:e.addNestedReplySuggest,input:function(t){t.target.composing||(e.nestedbody=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary btn-xs",attrs:{type:"submit"}},[e._v("\n                  Add\n                ")]),e._v(" "),n("button",{staticClass:"btn btn-danger btn-xs",on:{click:function(t){e.addNested=!1,e.showLoadMore=!0}}},[e._v("\n                  Cancel\n                ")])])])])]):e._e()]),e._v(" "),e.showLoadMore&&e.replies_count>0?n("div",{staticClass:"more-reply"},[n("button",{staticClass:"btn btn-xs btn-link show-nested-replies-btn",on:{click:e.toggleNestedReplies}},[e.showNested?n("div",[n("span",{staticClass:"glyphicon glyphicon-triangle-top"}),e._v(" Hide Reply\n          ")]):n("div",[n("span",{staticClass:"glyphicon glyphicon-triangle-bottom"}),e._v("\n            "+e._s("View "+e.replies_count+" Reply")+"\n          ")])]),e._v(" "),e._l(e.replies,(function(t,s){return e.showNested?n("NestedReplies",{key:s,attrs:{reply:t}}):e._e()}))],2):e._e()])])])}),[],!1,null,"9e59d962",null);t.default=a.exports},bIHs:function(e,t,n){var s=n("EIM1");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,i);s.locals&&(e.exports=s.locals)}}]);
>>>>>>> social
