(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/VoteEmojiList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["thread", "size", "position"],
  data: function data() {
    return {
      emojis: null,
      show: false
    };
  },
  computed: {
    signedIn: function signedIn() {
      return window.App.user ? true : false;
    },
    btnClass: function btnClass() {
      return this.size == "small" ? "small-emoji" : "big-emoji";
    },
    emojiLiistBtnClass: function emojiLiistBtnClass() {
      return this.size == "small" ? "small-emoji-list-btn" : "big-emoji-list-btn";
    }
  },
  created: function created() {
    var _this = this;

    this.getAllEmojis();
    window.events.$on("showEmojiList", function (data) {
      if (_this.thread.id == data.thread && _this.position == data.position) {
        _this.show = true;
      }
    });
  },
  methods: {
    voteEmoji: function voteEmoji(emoji) {
      var _this2 = this;

      if (!this.signedIn) {
        this.redirectToLogin();
      }

      axios.post("/thread/".concat(this.thread.id, "/emojis"), {
        type: emoji.id
      }).then(function (res) {
        // window.events.$emit("VoteUserEmojis", emoji);
        eventBus.$emit("VoteUserEmojis-" + _this2.thread.id, emoji);
      });
    },
    getAllEmojis: function getAllEmojis() {
      var _this3 = this;

      axios.get("/thread/".concat(this.thread.id, "/emojis")).then(function (res) {
        _this3.emojis = res.data;
      });
    },
    redirectToLogin: function redirectToLogin() {
      window.location = "/redirect-to?page=" + location.pathname;
    },
    hideEmojiList: function hideEmojiList() {
      this.show = false; // setTimeout(() => {
      //   this.show = false;
      // }, 1500);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.emoji-list-buttons[data-v-1711deda] {\r\n  margin-top: 5px;\r\n  position: absolute;\r\n\r\n  background-color: #eeeeee;\r\n  border-radius: 50px;\n}\nbutton.emoji-btn[data-v-1711deda] {\r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  vertical-align: bottom;\r\n  text-align: center;\r\n\r\n  padding: 0;\r\n  transition: all 0.2s;\n}\nbutton.emoji-btn[data-v-1711deda]:focus {\r\n  outline: none;\n}\nbutton.emoji-btn[data-v-1711deda]:hover {\r\n  transform: scale(1.1);\n}\nbutton.small-emoji[data-v-1711deda] {\r\n  background-size: 20px;\r\n  margin: 0px 3px;\r\n  width: 20px;\r\n  height: 20px;\n}\nbutton.big-emoji[data-v-1711deda] {\r\n  background-size: 32px;\r\n  margin: 0px 3px;\r\n  width: 32px;\r\n  height: 32px;\n}\n.small-emoji-list-btn[data-v-1711deda] {\r\n  right: 90px;\r\n  bottom: 45px;\r\n  padding: 5px 0px;\r\n  padding-top: 2px;\n}\n.big-emoji-list-btn[data-v-1711deda] {\r\n  right: 55px;\r\n  bottom: 45px;\r\n  padding: 3px 0px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm.show
    ? _c(
        "div",
        {
          staticClass: "emoji-list-buttons",
          class: _vm.emojiLiistBtnClass,
          on: { mouseleave: _vm.hideEmojiList }
        },
        _vm._l(_vm.emojis, function(emoji, index) {
          return _c("button", {
            key: index,
            staticClass: "btn emoji-btn",
            class: _vm.btnClass,
            style: {
              "background-image": "url(/images/emojis/" + emoji.name + ".png)"
            },
            attrs: { "data-toggle": "tooltip", title: emoji.name },
            on: {
              click: function($event) {
                return _vm.voteEmoji(emoji)
              }
            }
          })
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/VoteEmojiList.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/VoteEmojiList.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VoteEmojiList_vue_vue_type_template_id_1711deda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true& */ "./resources/assets/js/components/VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true&");
/* harmony import */ var _VoteEmojiList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VoteEmojiList.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/VoteEmojiList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VoteEmojiList_vue_vue_type_style_index_0_id_1711deda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css& */ "./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VoteEmojiList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VoteEmojiList_vue_vue_type_template_id_1711deda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VoteEmojiList_vue_vue_type_template_id_1711deda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1711deda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/VoteEmojiList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/VoteEmojiList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/VoteEmojiList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VoteEmojiList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_style_index_0_id_1711deda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=style&index=0&id=1711deda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_style_index_0_id_1711deda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_style_index_0_id_1711deda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_style_index_0_id_1711deda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_style_index_0_id_1711deda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_style_index_0_id_1711deda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_template_id_1711deda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/VoteEmojiList.vue?vue&type=template&id=1711deda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_template_id_1711deda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VoteEmojiList_vue_vue_type_template_id_1711deda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);