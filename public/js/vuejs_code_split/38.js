<<<<<<< HEAD
<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
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
  props: ["recipient", "isFriend"],
  data: function data() {
    return {
      sentRequst: false,
      isMyFriend: this.isFriend
    };
  },
  created: function created() {
    if (!this.isMyFriend) {
      this.checkSentRequest();
    }
  },
  methods: {
    addFriend: function addFriend() {
      var _this = this;

      axios.post("/friend/sent-request", {
        recipient: this.recipient.id
      }).then(function (res) {
        _this.sentRequst = true;
      });
    },
    checkSentRequest: function checkSentRequest() {
      var _this2 = this;

      axios.post("/friend/check-request-sent", {
        recipient: this.recipient.id
      }).then(function (res) {
        if (res.data == true) {
          _this2.sentRequst = true;
        }
      });
    },
    unFriend: function unFriend() {
      var _this3 = this;

      axios.post("/friend/unfriend", {
        friend: this.recipient.id
      }).then(function (res) {
        _this3.isMyFriend = false;
        _this3.sentRequst = false;

        _this3.$store.dispatch("removeFriend", window.App.user.id);
      });
    },
    blockFriend: function blockFriend() {
      var _this4 = this;

      axios.post("/profiles/block-friend", {
        friend: this.recipient.id
      }).then(function (res) {
        _this4.$store.dispatch("addBlockLists", _this4.recipient);

        flash(res.data.message);
        window.location = "/";
      });
    },
    cancelRequest: function cancelRequest() {
      var _this5 = this;

      axios.post("/profiles/cancel-friend-request", {
        friend: this.recipient.id
      }).then(function (res) {
        _this5.sentRequst = false;

        _this5.$store.dispatch("removeFriendRequest", _this5.recipient.id);

        flash(res.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "btn-group" },
    [
      _vm.isMyFriend
        ? [
            _vm._m(0),
            _vm._v(" "),
            _c("ul", { staticClass: "dropdown-menu" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.unFriend($event)
                      }
                    }
                  },
                  [_vm._v("Unfriend")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.blockFriend($event)
                      }
                    }
                  },
                  [_vm._v("Block")]
                )
              ])
            ])
          ]
        : [
            _vm.sentRequst
              ? [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("ul", { staticClass: "dropdown-menu" }, [
                    _c("li", [
                      _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.cancelRequest($event)
                            }
                          }
                        },
                        [_vm._v("Cancel Request")]
                      )
                    ])
                  ])
                ]
              : [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: {
                        type: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.addFriend($event)
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-user-plus",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ]
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-default btn-sm dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-user", attrs: { "aria-hidden": "true" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-success btn-sm dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-ellipsis-h",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" Request sent\n      ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/AddFriend.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/AddFriend.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& */ "./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&");
/* harmony import */ var _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ce1ea10",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/AddFriend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/AddFriend.vue?vue&type=template&id=3ce1ea10&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_3ce1ea10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"6v1z":function(t,n,a){"use strict";var e=a("AlpH");a.n(e).a},"9Ldw":function(t,n,a){"use strict";a.r(n);function e(t){return function(t){if(Array.isArray(t)){for(var n=0,a=new Array(t.length);n<t.length;n++)a[n]=t[n];return a}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={props:{tag:{type:Object,required:!0}},components:{},data:function(){return{posts:this.tag.threads,followings:[],isFollow:!1,page:1,perPage:10,paginatedItems:[]}},computed:{postCounts:function(){return abbreviate(this.posts.length,1)},currentPage:function(){return this.page},totalPage:function(){return Math.ceil(this.posts.length/this.perPage)}},created:function(){this.checkIsFollow(),this.getAllFollowings(),this.setCurrentPage(),this.paginate(this.perPage,this.page)},methods:{toggleFollow:function(){var t=this;axios.post("/tag/".concat(this.tag.id,"/follow")).then((function(n){if(t.isFollow){var a=t.followings.filter((function(t){return t.id!=window.App.user.id}));t.followings=a,t.isFollow=!1}else{var o=[].concat(e(t.followings),[window.App.user]);t.followings=o,t.isFollow=!0}flash(n.data.message)}))},checkIsFollow:function(){var t=this;axios.get("/tag/".concat(this.tag.id,"/is-follow")).then((function(n){t.isFollow=n.data}))},getAllFollowings:function(){var t=this;axios.get("/tag/".concat(this.tag.id,"/followings")).then((function(n){t.followings=n.data.followings}))},setCurrentPage:function(){var t=new URLSearchParams(window.location.search).get("page");this.page=t&&""!=t?t:this.page},paginate:function(t,n){var a=(n-1)*t,e=n*t,o=this.tag.threads.slice(a,e);this.paginatedItems=o},onPageChange:function(t){this.page=t,history.pushState(null,null,"?page="+t),this.paginate(this.perPage,t)}}},i=(a("6v1z"),a("KHd+")),s=Object(i.a)(o,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"top-margin row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row profile-header"},[a("div",{staticClass:"profile-avatar"},[a("img",{staticClass:"profile-img",attrs:{src:t.tag.profileAvatarPath,alt:""}})]),t._v(" "),a("div",{staticClass:"profile-details"},[a("h2",{staticClass:"profile-name"},[a("span",[t._v("#"+t._s(t.tag.name.toLowerCase()))])]),t._v(" "),a("div",{staticClass:"profile-count"},[a("post-counts",{attrs:{post_count:t.posts.length}}),t._v(" "),a("following-counts",{attrs:{following_count:t.followings.length}})],1),t._v(" "),a("div",{staticClass:"profile-buttons"},[t.isFollow?a("button",{staticClass:"btn btn-sm unfollow-btn",on:{click:function(n){return n.preventDefault(),t.toggleFollow(n)}}},[t._v("Unfllow")]):a("button",{staticClass:"btn btn-sm follow-btn",on:{click:function(n){return n.preventDefault(),t.toggleFollow(n)}}},[t._v("Follow")])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"post-header"},[a("div",{staticClass:"post-counts"},[t._v(t._s(t.postCounts)+" posts")])]),t._v(" "),a("div",{staticClass:"post-body"},[t._l(t.paginatedItems,(function(t,n){return a("single-thread",{key:n,attrs:{thread:t}})})),t._v(" "),t.totalPage>1?a("nav",{attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},[1!=t.currentPage?a("li",[t._m(0)]):t._e(),t._v(" "),t._l(t.totalPage,(function(n){return a("li",{key:n,class:{active:t.currentPage==n},on:{click:function(a){return t.onPageChange(n)}}},[a("span",[t._v("\n                        "+t._s(n)+"\n                        "),a("span",{staticClass:"sr-only"},[t._v(t._s(n))])])])})),t._v(" "),t.currentPage!=t.totalPage?a("li",[t._m(1)]):t._e()],2)]):t._e()],2)])])])])]),t._v(" "),a("div",{staticClass:"col-md-4 sidebar"},[a("trending-thread")],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("span",{attrs:{"aria-hidden":"true"}},[this._v("«")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("span",{attrs:{"aria-hidden":"true"}},[this._v("»")])])}],!1,null,"18ef6b62",null);n.default=s.exports},AlpH:function(t,n,a){var e=a("Bqpo");"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,o);e.locals&&(t.exports=e.locals)},Bqpo:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.profile-header[data-v-18ef6b62] {\r\n  margin: 30px auto;\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-name[data-v-18ef6b62] {\r\n  padding: 0;\r\n  margin: 0;\n}\n.profile-name span[data-v-18ef6b62] {\r\n  color: rgb(255, 67, 1);\n}\n.profile-buttons[data-v-18ef6b62] {\r\n  padding: 10px 0px;\n}\n.profile-img[data-v-18ef6b62] {\r\n  width: 120px;\r\n  height: 120px;\r\n  padding: 3px;\r\n  border: 2px solid rgb(255, 67, 1);\r\n  border-radius: 50%;\n}\n.profile-avatar[data-v-18ef6b62] {\r\n  margin-right: 30px;\n}\n.profile-count[data-v-18ef6b62] {\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-count > *[data-v-18ef6b62] {\r\n  margin-left: 5px;\r\n  margin-right: 5px;\n}\n.follow-btn[data-v-18ef6b62] {\r\n  width: 100px;\r\n  background-color: rgb(255, 67, 1);\r\n  color: white;\n}\n.unfollow-btn[data-v-18ef6b62] {\r\n  width: 100px;\r\n  background-color: red;\r\n  color: white;\n}\n.single-tags-name[data-v-18ef6b62] {\r\n  color: black;\n}\n.single-tags-name span[data-v-18ef6b62] {\r\n  color: rgb(255, 67, 1);\n}\n.post-counts[data-v-18ef6b62] {\r\n  color: black;\r\n  padding: 15px 0;\r\n  font-weight: bold;\n}\n.sidebar[data-v-18ef6b62] {\r\n  margin: 30px auto;\n}\n.pagination li[data-v-18ef6b62] {\r\n  cursor: pointer;\n}\r\n",""])}}]);
>>>>>>> social
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"09H/":function(t,n,a){var i=a("2+ji");"string"==typeof i&&(i=[[t.i,i,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,e);i.locals&&(t.exports=i.locals)},"2+ji":function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.profile-header[data-v-2644bc51] {\r\n  margin: 30px auto;\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-name[data-v-2644bc51] {\r\n  padding: 0;\r\n  margin: 0;\n}\n.profile-name span[data-v-2644bc51] {\r\n  color: rgb(255, 67, 1);\n}\n.profile-buttons[data-v-2644bc51] {\r\n  padding: 10px 0px;\n}\n.profile-img[data-v-2644bc51] {\r\n  width: 120px;\r\n  height: 120px;\r\n  padding: 3px;\r\n  border: 2px solid rgb(255, 67, 1);\r\n  border-radius: 50%;\n}\n.profile-avatar[data-v-2644bc51] {\r\n  margin-right: 30px;\n}\n.profile-count[data-v-2644bc51] {\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-count > *[data-v-2644bc51] {\r\n  margin-left: 5px;\r\n  margin-right: 5px;\n}\n.follow-btn[data-v-2644bc51] {\r\n  width: 100px;\r\n  background-color: rgb(255, 67, 1);\r\n  color: white;\n}\n.unfollow-btn[data-v-2644bc51] {\r\n  width: 100px;\r\n  background-color: red;\r\n  color: white;\n}\n.single-tags-name[data-v-2644bc51] {\r\n  color: black;\n}\n.single-tags-name span[data-v-2644bc51] {\r\n  color: rgb(255, 67, 1);\n}\n.post-counts[data-v-2644bc51] {\r\n  color: black;\r\n  padding: 15px 0;\r\n  font-weight: bold;\n}\n.sidebar[data-v-2644bc51] {\r\n  margin: 30px auto;\n}\n.pagination li[data-v-2644bc51] {\r\n  cursor: pointer;\n}\r\n",""])},"9Ldw":function(t,n,a){"use strict";a.r(n);function i(t){return function(t){if(Array.isArray(t)){for(var n=0,a=new Array(t.length);n<t.length;n++)a[n]=t[n];return a}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var e={props:{tag:{type:Object,required:!0}},components:{},data:function(){return{posts:this.tag.threads,followings:[],isFollow:!1,page:1,perPage:10,paginatedItems:[],limitLinks:10,formPage:1,toPage:1}},computed:{postCounts:function(){return abbreviate(this.posts.length,1)},currentPage:function(){return this.page},totalPage:function(){return Math.ceil(this.posts.length/this.perPage)},signedIn:function(){return!!window.App.user},pageRange:function(){return _.range(this.formPage,this.toPage)}},created:function(){this.checkIsFollow(),this.getAllFollowings(),this.setCurrentPage(),this.paginate(this.perPage,this.page),this.paginateLimit()},methods:{toggleFollow:function(){var t=this;axios.post("/tag/".concat(this.tag.id,"/follow")).then((function(n){if(t.isFollow){var a=t.followings.filter((function(t){return t.id!=window.App.user.id}));t.followings=a,t.isFollow=!1}else{var e=[].concat(i(t.followings),[window.App.user]);t.followings=e,t.isFollow=!0}flash(n.data.message)}))},checkIsFollow:function(){var t=this;this.signedIn&&axios.get("/tag/".concat(this.tag.id,"/is-follow")).then((function(n){t.isFollow=n.data}))},getAllFollowings:function(){var t=this;axios.get("/tag/".concat(this.tag.id,"/followings")).then((function(n){t.followings=n.data.followings}))},setCurrentPage:function(){var t=new URLSearchParams(window.location.search).get("page");this.page=t&&""!=t?Number.parseInt(t):this.page},paginate:function(t,n){var a=(n-1)*t,i=n*t,e=this.tag.threads.slice(a,i);this.paginatedItems=e},onPageChange:function(t){this.page=t,history.pushState(null,null,"?page="+t),this.paginate(this.perPage,t),this.paginateLimit()},paginateLimit:function(){var t=Math.floor(this.limitLinks/2),n=this.page-t,a=Number.parseInt(this.page)+t;this.page<t&&(a+=t-this.page),this.totalPage-this.page<t&&(n-=t-(this.totalPage-this.page)-1),n<t&&(n=1),this.formPage=n,this.toPage=a}}},o=(a("ZLid"),a("KHd+")),s=Object(o.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"top-margin row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row profile-header"},[a("div",{staticClass:"profile-avatar"},[a("img",{staticClass:"profile-img",attrs:{src:t.tag.profileAvatarPath,alt:""}})]),t._v(" "),a("div",{staticClass:"profile-details"},[a("h2",{staticClass:"profile-name"},[a("span",[t._v("#"+t._s(t.tag.name.toLowerCase()))])]),t._v(" "),a("div",{staticClass:"profile-count"},[a("post-counts",{attrs:{post_count:t.posts.length}}),t._v(" "),a("following-counts",{attrs:{following_count:t.followings.length}})],1),t._v(" "),a("div",{staticClass:"profile-buttons"},[t.isFollow?a("button",{staticClass:"btn btn-sm unfollow-btn",on:{click:function(n){return n.preventDefault(),t.toggleFollow(n)}}},[t._v("\n                  Unfllow\n                ")]):a("button",{staticClass:"btn btn-sm follow-btn",on:{click:function(n){return n.preventDefault(),t.toggleFollow(n)}}},[t._v("\n                  Follow\n                ")])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"post-header"},[a("div",{staticClass:"post-counts"},[t._v(t._s(t.postCounts)+" posts")])]),t._v(" "),a("div",{staticClass:"post-body"},[t._l(t.paginatedItems,(function(t,n){return a("single-thread",{key:n,attrs:{thread:t}})})),t._v(" "),t.totalPage>1?a("nav",{attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},[1!=t.currentPage?a("li",{on:{click:function(n){return t.onPageChange(1)}}},[t._m(0)]):t._e(),t._v(" "),t._l(t.pageRange,(function(n){return a("li",{key:n,class:{active:t.currentPage==n},on:{click:function(a){return t.onPageChange(n)}}},[a("span",[t._v("\n                        "+t._s(n)+"\n                        "),a("span",{staticClass:"sr-only"},[t._v(t._s(n))])])])})),t._v(" "),t.currentPage!=t.totalPage?a("li",{on:{click:function(n){return t.onPageChange(t.totalPage)}}},[t._m(1)]):t._e()],2)]):t._e()],2)])])])])]),t._v(" "),a("div",{staticClass:"col-md-4 sidebar"},[a("trending-thread")],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("span",{attrs:{"aria-hidden":"true"}},[this._v("«")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("span",{attrs:{"aria-hidden":"true"}},[this._v("»")])])}],!1,null,"2644bc51",null);n.default=s.exports},ZLid:function(t,n,a){"use strict";var i=a("09H/");a.n(i).a}}]);
>>>>>>> social
