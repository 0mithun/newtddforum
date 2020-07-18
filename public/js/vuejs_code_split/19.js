(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//

moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.tz.setDefault("America/New_York");
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['authuser'],
  data: function data() {
    return {
      message: '',
      selectFriend: null,
      typing: '',
      last_seen: '',
      typingClock: null,
      replyId: '',
      replyMessage: '',
      showReplyBox: false
    };
  },
  computed: {
    friendLists: function friendLists() {
      return this.$store.getters.friendLists;
    },
    friendMessages: function friendMessages() {
      return this.$store.getters.friendMessage;
    },
    lastSeen: function lastSeen() {
      if (this.$store.getters.friendMessage.last_seen != null) {
        if (this.$store.getters.friendMessage.last_seen.seen_at != null) {
          var last_seen = this.$store.getters.friendMessage.last_seen.seen_at;
          return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(last_seen, 'YYYY-MM-DD HH:mm:ss').fromNow();
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('friendList', this.authuser.id); //this.$store.dispatch('otherMessageUserList');

    Echo["private"]("chat.".concat(this.authuser.id)).listen('MessegeSentEvent', function (e) {
      if (e.message.friend_message == 0) {
        _this.$store.dispatch('friendList', _this.authuser.id); //this.$store.dispatch('otherMessageUserList', this.authuser.id);

      }

      if (_this.selectFriend == e.message.from) {
        _this.selectUser(e.message.from, true);
      } else {
        _this.selectUser(e.message.from, false);
      } //this.messageSound();

    });
  },
  created: function created() {
    var _this2 = this;

    Echo["private"]('typingevent').listenForWhisper('typing', function (e) {
      if (_this2.selectFriend) {
        if (e.user.id == _this2.friendMessages.friend.id && e.userId == _this2.authuser.id) {
          _this2.typing = e;

          if (_this2.typingClock) {
            clearTimeout(_this2.typingClock);
          }

          _this2.typingClock = setTimeout(function () {
            _this2.typing = '';
          }, 2000);
        }
      }
    });
  },
  methods: {
    cancelReplyMessage: function cancelReplyMessage() {
      this.replyMessage = '';
      this.replyId = '';
      this.showReplyBox = false;
    },
    replyToMessage: function replyToMessage(messageId, replyMessage) {
      this.replyMessage = replyMessage;
      this.replyId = messageId;
      this.showReplyBox = true;
      var messageBox = document.getElementById('message-to-send');
      messageBox.focus();
    },
    messageSound: function messageSound() {
      var sound = new Audio('https://notificationsounds.com/soundfiles/acc3e0404646c57502b480dc052c4fe1/file-sounds-1140-just-saying.mp3');
      sound.play();
    },
    seenMessage: function seenMessage(message) {
      var _this3 = this;

      this.last_seen = '';

      if (message.seen_at == null) {
        axios.post('/chat-seen-message', {
          message: message.id
        }).then(function (res) {
          _this3.last_seen = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(res.data.seen_at, 'YYYY-MM-DD HH:mm:ss').fromNow();
        });
      }
    },
    typingMessage: function typingMessage(userId) {
      Echo["private"]('typingevent').whisper('typing', {
        'user': this.authuser,
        'typing': this.message,
        'userId': userId
      });
    },
    selectUser: function selectUser(friend) {
      var change = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (change) {
        this.selectFriend = friend;
        this.$store.dispatch('userMessage', {
          friend: friend
        });
        this.messageStatus(friend, false);
      } else {
        this.messageStatus(friend, true);
      }

      this.message = '';
    },
    messageStatus: function messageStatus(friend) {
      var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var element = "messageStatus" + friend;
      var container = this.$el.querySelector("#" + element);

      if (show) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    },
    scrollToBottom: function scrollToBottom() {
      var container = this.$el.querySelector("#chat-history");
      var height = container.scrollHeight;
      container.scrollTop = height;
    },
    formateMessageTime: function formateMessageTime(timestamp) {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).format('MMM Do YYYY, h:mm:ss A'); //    return moment(timestamp).fromNow();
      //return moment(timestamp).calendar();
    },
    sendMessage: function sendMessage(e) {
      var _this4 = this;

      e.preventDefault();

      if (this.message != '') {
        axios.post('/chat-send-message', {
          message: this.message,
          friend: this.selectFriend,
          replyMessage: this.replyMessage,
          replyId: this.replyId
        }).then(function (res) {
          console.log(res.data);
          _this4.showReplyBox = false;

          _this4.selectUser(_this4.selectFriend);
        });
      }
    },
    selected: function selected(index) {
      if (this.selectFriend == index) {
        return 'active-friend';
      }
    },
    onlineUser: function onlineUser(userId) {
      return _.find(this.onlineUsers, {
        'id': userId
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .people-list {\n        width: 260px;\n        float: left;\n    } */\n.people-list .search[data-v-61f93f4f] {\n        padding: 20px;\n}\n.people-list input[data-v-61f93f4f] {\n        border-radius: 3px;\n        border: none;\n        padding: 14px;\n        color: white;\n        background: #6a6c75;\n        width: 90%;\n        font-size: 14px;\n}\n.people-list .fa-search[data-v-61f93f4f] {\n        position: relative;\n        left: -25px;\n}\n.people-list ul[data-v-61f93f4f] {\n        padding: 20px;\n        height: 770px;\n        background: #6a6c75\n}\n.people-list ul li[data-v-61f93f4f] {\n        padding-bottom: 20px;\n        cursor: pointer;\n}\n.people-list img[data-v-61f93f4f] {\n        float: left;\n}\n.people-list .about[data-v-61f93f4f] {\n        float: left;\n        margin-top: 8px;\n}\n.people-list .about[data-v-61f93f4f] {\n        padding-left: 8px;\n}\n.people-list .status[data-v-61f93f4f] {\n        color: #92959e;\n}\n.chat[data-v-61f93f4f] {\n        float: left;\n        background: #f2f5f8;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n        color: #434651;\n}\n.chat .chat-header[data-v-61f93f4f] {\n        padding: 20px;\n        border-bottom: 2px solid white;\n}\n.chat .chat-header img[data-v-61f93f4f] {\n        float: left;\n}\n.chat .chat-header .chat-about[data-v-61f93f4f] {\n        float: left;\n        padding-left: 10px;\n        margin-top: 6px;\n}\n.chat .chat-header .chat-with[data-v-61f93f4f] {\n        font-weight: bold;\n        font-size: 16px;\n}\n.chat .chat-header .chat-num-messages[data-v-61f93f4f] {\n        color: #92959e;\n}\n.chat .chat-header .fa-star[data-v-61f93f4f] {\n        float: right;\n        color: #d8dadf;\n        font-size: 20px;\n        margin-top: 12px;\n}\n.chat .chat-history[data-v-61f93f4f] {\n        padding: 30px 30px 20px;\n        border-bottom: 2px solid white;\n        overflow-y: scroll;\n        height: 575px;\n}\n.chat .chat-history .message-data[data-v-61f93f4f] {\n        margin-bottom: 15px;\n}\n.chat .chat-history .message-data-time[data-v-61f93f4f] {\n        color: #a8aab1;\n        padding-left: 6px;\n}\n.chat .chat-history .message[data-v-61f93f4f] {\n        color: white;\n        padding: 18px 20px;\n        line-height: 26px;\n        font-size: 16px;\n        border-radius: 7px;\n        margin-bottom: 30px;\n        width: 80%;\n        position: relative;\n}\n.chat .chat-history .message[data-v-61f93f4f]:after {\n        bottom: 100%;\n        left: 7%;\n        border: solid transparent;\n        content: \" \";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #86bb71;\n        border-width: 10px;\n        margin-left: -10px;\n}\n.chat .chat-history .my-message[data-v-61f93f4f] {\n        background: #86bb71;\n}\n.chat .chat-history .other-message[data-v-61f93f4f] {\n        background: #94c2ed;\n}\n.chat .chat-history .other-message[data-v-61f93f4f]:after {\n        border-bottom-color: #94c2ed;\n        left: 93%;\n}\n.chat .chat-message[data-v-61f93f4f] {\n        padding: 30px;\n}\n.chat .chat-message textarea[data-v-61f93f4f] {\n        /* width: 100%; */\n        /* border: none;\n        padding: 10px 20px;\n        font: 14px/22px \"Lato\", Arial, sans-serif;\n        margin-bottom: 10px;\n        border-radius: 5px; */\n        resize: none;\n}\n.chat .chat-message .fa-file-o[data-v-61f93f4f], .chat .chat-message .fa-file-image-o[data-v-61f93f4f] {\n        font-size: 16px;\n        color: gray;\n        cursor: pointer;\n}\n.chat .chat-message button[data-v-61f93f4f] {\n        float: right;\n        color: #94c2ed;\n        font-size: 16px;\n        text-transform: uppercase;\n        border: none;\n        cursor: pointer;\n        font-weight: bold;\n        background: #f2f5f8;\n}\n.chat .chat-message button[data-v-61f93f4f]:hover {\n        color: #75b1e8;\n}\n.online[data-v-61f93f4f], .offline[data-v-61f93f4f], .me[data-v-61f93f4f] {\n        margin-right: 3px;\n        font-size: 10px;\n}\n.online[data-v-61f93f4f] {\n        color: #86bb71;\n}\n.offline[data-v-61f93f4f] {\n        color: #e38968;\n}\n.me[data-v-61f93f4f] {\n        color: #94c2ed;\n}\n.align-left[data-v-61f93f4f] {\n        text-align: left;\n}\n.align-right[data-v-61f93f4f] {\n        text-align: right;\n}\n.float-right[data-v-61f93f4f] {\n        float: right;\n}\n.clearfix[data-v-61f93f4f]:after {\n        visibility: hidden;\n        display: block;\n        font-size: 0;\n        content: \" \";\n        clear: both;\n        height: 0;\n}\n.people-list ul li[data-v-61f93f4f] {\n        padding-bottom: 20px;\n        list-style: none;\n}\n.chat-history li[data-v-61f93f4f]{\n        list-style: none;\n}\n.chat[data-v-61f93f4f] {\n        width: 100%;\n}\n\n    /**\n        Change Chat Color\n     */\n.chat .chat-history .other-message[data-v-61f93f4f][data-v-61f93f4f] {\n        background: #34a4ef;\n}\n.chat .chat-history .other-message[data-v-61f93f4f] {\n        background: #34a4ef;\n}\n.chat .chat-history .other-message[data-v-61f93f4f]:after {\n        border-bottom-color:  #34a4ef;;\n        left: 93%;\n}\n.chat .chat-message button[data-v-61f93f4f]:hover {\n        color:#34a4ef;\n}\n.me[data-v-61f93f4f] {\n        color:#34a4ef;\n}\n#people-list ul[data-v-61f93f4f]{\n        overflow-x: scroll\n}\n.active-friend[data-v-61f93f4f]{\n        background: white;\n}\n.people-list ul[data-v-61f93f4f][data-v-61f93f4f] {\n        padding: 0;\n}\n.people-list ul li[data-v-61f93f4f][data-v-61f93f4f] {\n        cursor: pointer;\n        padding: 10px 20px;\n}\n.chat .chat-history[data-v-61f93f4f][data-v-61f93f4f] {\n        padding: 10px 15px;\n}\n.people-list ul[data-v-61f93f4f][data-v-61f93f4f] {\n        height: 670px;\n}\n.chat .chat-message[data-v-61f93f4f][data-v-61f93f4f] {\n        padding: 15px;\n}\n.badge-danger[data-v-61f93f4f]{\n        background: red\n}\n.messageStatus[data-v-61f93f4f]{\n        color: #d84660;\n        float: right;\n        margin-top: 10px;\n        font-size: 20px;\n}\n.chat-page[data-v-61f93f4f]{\n        margin-top: 55px;\n}\n.chat .chat-history .message[data-v-61f93f4f]{\n        color: white;\n        padding: 18px 20px;\n        line-height: 26px;\n        font-size: 16px;\n        border-radius: 7px;\n        margin-bottom: 30px;\n        width: 75%;\n        position: relative;\n        display: inline-block;\n}\n.reply-btn[data-v-61f93f4f]{\n        background:none;\n        border: none;\n}\n.dropdown-toggle.reply-btn[data-v-61f93f4f]:active{\n        background:none;\n}\n.reply-to[data-v-61f93f4f]{\n        border:1px solid #ccd0d2;            \n        min-height:50px;\n        padding:8px;\n        border: 1px solid #ccd0d2;\n        border-radius: 4px;\n        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n        border-color: #98cbe8;\n        outline: 0;\n        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(152, 203, 232, 0.6);\n        border-radius: 4px 4px 0px 0px;  \n        border-bottom: none;\n}\n.reply-message[data-v-61f93f4f]{\n        padding:0px;\n        margin:0px;\n}\n.remove-top-border[data-v-61f93f4f]{\n        border-top: none;\n        box-shadow: none;\n        border-radius: 0px 0px 4px 4px;\n}\nspan.close-reply[data-v-61f93f4f] {\n        float: right;\n        padding: 0px 5px;\n        cursor: pointer;\n}\n.chat-message-reply.clearfix[data-v-61f93f4f] {\n        position: absolute;\n        width: 98%;\n        bottom: 0;\n        left: 0;\n        background: white;\n        padding: 0px!important;\n}\n    /* .chat .chat-message-reply {\n        padding: 0px!important;\n    } */\n.message-list[data-v-61f93f4f]:last-child{\n        margin-bottom: 50px;\n}\n.chat .chat-history .message[data-v-61f93f4f]{\n        \n        margin-bottom: 20px;\n}\n.reply-to-message[data-v-61f93f4f]{\n        border-left: 2px solid grey;\n        /* margin-right: 5px; */\n        padding: 0px;\n        margin: 0px;\n        padding-right: 0;\n        padding-left: 10px;\n        margin-bottom: 5px;\n        font-size:13px;\n}\n.reply-message-user[data-v-61f93f4f]{\n        color:#777777;\n}\n.reply-to-me[data-v-61f93f4f]{\n        margin-left: 20%;\n        margin-top: 20px;\n}\n.chat .chat-history .message[data-v-61f93f4f]{\n        padding: 15px 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row chat-page" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "div",
          { staticClass: "people-list", attrs: { id: "people-list" } },
          [
            _c(
              "ul",
              { staticClass: "list" },
              _vm._l(_vm.friendLists, function(friend, index) {
                return _c(
                  "li",
                  {
                    key: index,
                    staticClass: "clearfix",
                    class: friend.id == _vm.selectFriend ? "active-friend" : "",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.selectUser(friend.id)
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticStyle: {
                        width: "50px",
                        "border-radius": "50%",
                        height: "50px"
                      },
                      attrs: { src: friend.profileAvatarPath, alt: "avatar" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "about" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "name",
                            staticStyle: { color: "black" }
                          },
                          [_vm._v(_vm._s(friend.name))]
                        ),
                        _vm._v(" "),
                        _c("user-online", {
                          attrs: { user: friend, type: "status" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("span", {
                        staticClass:
                          "glyphicon glyphicon-comment messageStatus",
                        staticStyle: { color: "red", display: "none" },
                        attrs: { id: "messageStatus" + friend.id }
                      })
                    ])
                  ]
                )
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "chat" }, [
          _c("div", { staticClass: "chat-header clearfix" }, [
            _vm.friendMessages.friend
              ? _c("img", {
                  staticStyle: {
                    width: "50px",
                    "border-radius": "50%",
                    height: "50px"
                  },
                  attrs: {
                    src: _vm.friendMessages.friend.profileAvatarPath,
                    alt: "avatar"
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.friendMessages.friend
              ? _c("div", { staticClass: "chat-about" }, [
                  _c("div", { staticClass: "chat-with" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          href:
                            "/profiles/" + _vm.friendMessages.friend.username
                        }
                      },
                      [_vm._v(_vm._s(_vm.friendMessages.friend.name))]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.friendMessages.messages.length == 0
                    ? _c("div", { staticClass: "chat-num-messages" }, [
                        _vm._v("No Message")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.last_seen
                    ? _c("div", { staticClass: "chat-num-messages" }, [
                        _vm._v(
                          "\n                                        Last seen  "
                        ),
                        _c("span", [_vm._v(_vm._s(_vm.last_seen))])
                      ])
                    : _c("div", { staticClass: "chat-num-messages" }, [
                        _vm.lastSeen
                          ? _c("div", {}, [
                              _vm._v(
                                "\n                                            Last seen "
                              ),
                              _c("span", [_vm._v(_vm._s(_vm.lastSeen))])
                            ])
                          : _vm._e()
                      ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [{ name: "chat-scroll", rawName: "v-chat-scroll" }],
              staticClass: "chat-history ",
              attrs: { id: "chat-history" }
            },
            [
              _c(
                "ul",
                { staticStyle: { margin: "0px", padding: "0px" } },
                _vm._l(_vm.friendMessages.messages, function(
                  friendMessage,
                  index
                ) {
                  return _c(
                    "li",
                    { key: index, staticClass: "clearfix message-list" },
                    [
                      _vm.friendMessages.friend.id ==
                      (friendMessage.to || _vm.friendMessages.from)
                        ? _c("div", [
                            _c(
                              "div",
                              { staticClass: "message-data align-right" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "message-data-time" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.formateMessageTime(
                                          friendMessage.created_at
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(
                                  "    \n                                                "
                                ),
                                _c(
                                  "span",
                                  { staticClass: "message-data-name" },
                                  [_vm._v(_vm._s(_vm.authuser.name))]
                                ),
                                _vm._v(" "),
                                _c("img", {
                                  staticStyle: {
                                    width: "40px",
                                    "border-radius": "50%",
                                    height: "40px"
                                  },
                                  attrs: {
                                    src: _vm.authuser.profileAvatarPath,
                                    alt: ""
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "btn-group reply-to-me" },
                              [
                                _vm._m(0, true),
                                _vm._v(" "),
                                _c("ul", { staticClass: "dropdown-menu" }, [
                                  _c("li", [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.replyToMessage(
                                              friendMessage.id,
                                              friendMessage.message
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Reply")]
                                    )
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "message other-message float-right"
                              },
                              [
                                friendMessage.reply_message != null
                                  ? _c(
                                      "blockquote",
                                      { staticClass: "reply-to-message" },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "reply-message-user" },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-share"
                                            }),
                                            _vm._v(
                                              "\n                                                        You replied to "
                                            ),
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.friendMessages.friend.name
                                                )
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("br")
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-muted" },
                                          [
                                            _vm._v(
                                              "\n                                                        " +
                                                _vm._s(
                                                  friendMessage.reply_message
                                                ) +
                                                "\n                                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(friendMessage.message) +
                                    "\n                                            "
                                )
                              ]
                            )
                          ])
                        : _c("div", [
                            _c("li", [
                              _c("div", { staticClass: "message-data" }, [
                                _c("img", {
                                  staticStyle: {
                                    width: "40px",
                                    "border-radius": "50%",
                                    height: "40px"
                                  },
                                  attrs: {
                                    src:
                                      _vm.friendMessages.friend
                                        .profileAvatarPath,
                                    alt: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "message-data-name" },
                                  [
                                    _c("user-online", {
                                      attrs: {
                                        user: _vm.friendMessages.friend,
                                        type: "message"
                                      }
                                    }),
                                    _vm._v(
                                      "\n\n\n                                                    " +
                                        _vm._s(_vm.friendMessages.friend.name)
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "message-data-time" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.formateMessageTime(
                                          friendMessage.created_at
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "message my-message",
                                  on: {
                                    click: function($event) {
                                      return _vm.seenMessage(friendMessage)
                                    }
                                  }
                                },
                                [
                                  friendMessage.reply_message != null
                                    ? _c(
                                        "blockquote",
                                        { staticClass: "reply-to-message" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "reply-message-user"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-share"
                                              }),
                                              _vm._v(" "),
                                              _c("strong", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.friendMessages.friend
                                                      .name
                                                  )
                                                )
                                              ]),
                                              _vm._v(" replied to you   "),
                                              _c("br")
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v(
                                                "\n                                                            " +
                                                  _vm._s(
                                                    friendMessage.reply_message
                                                  ) +
                                                  "\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(
                                    "\n                                                    " +
                                      _vm._s(friendMessage.message) +
                                      "\n                                                                                                       \n                                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "btn-group" }, [
                                _vm._m(1, true),
                                _vm._v(" "),
                                _c("ul", { staticClass: "dropdown-menu" }, [
                                  _c("li", [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.replyToMessage(
                                              friendMessage.id,
                                              friendMessage.message
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Reply")]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ])
                    ]
                  )
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "chat-message clearfix chat-message-reply" },
            [
              _vm.typing
                ? _c("div", [
                    _vm._v("   " + _vm._s(_vm.typing.user.name) + " "),
                    _c("img", {
                      attrs: { src: "/images/png/pen.png", alt: "" }
                    }),
                    _vm._v(" .........")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.selectFriend && _vm.showReplyBox
                ? _c("div", { staticClass: "reply-to" }, [
                    _vm._v("\n                                    Reply to "),
                    _vm.friendMessages.friend
                      ? _c("strong", [
                          _vm._v(_vm._s(_vm.friendMessages.friend.name))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "close-reply",
                        on: { click: _vm.cancelReplyMessage }
                      },
                      [_vm._v("X")]
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted reply-message" }, [
                      _c("small", [_vm._v(_vm._s(_vm.replyMessage))])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.message,
                    expression: "message"
                  }
                ],
                staticClass: "form-control",
                class: _vm.showReplyBox ? "remove-top-border" : "",
                attrs: {
                  name: "message-to-send",
                  id: "message-to-send",
                  placeholder: "Type your message",
                  rows: "2",
                  disabled: !_vm.selectFriend
                },
                domProps: { value: _vm.message },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.sendMessage($event)
                  },
                  keyup: function($event) {
                    return _vm.typingMessage(_vm.friendMessages.friend.id)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.message = $event.target.value
                  }
                }
              })
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-default btn-sm dropdown-toggle reply-btn",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("span", { staticClass: "caret" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-default btn-sm dropdown-toggle reply-btn",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("span", { staticClass: "caret" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/chat/ChatMessage.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/chat/ChatMessage.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatMessage_vue_vue_type_template_id_61f93f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true& */ "./resources/assets/js/components/chat/ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true&");
/* harmony import */ var _ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatMessage.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/chat/ChatMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatMessage_vue_vue_type_style_index_0_id_61f93f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css& */ "./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatMessage_vue_vue_type_template_id_61f93f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatMessage_vue_vue_type_template_id_61f93f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61f93f4f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/chat/ChatMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/chat/ChatMessage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/chat/ChatMessage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_61f93f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=style&index=0&id=61f93f4f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_61f93f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_61f93f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_61f93f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_61f93f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_style_index_0_id_61f93f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/chat/ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/chat/ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_template_id_61f93f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/chat/ChatMessage.vue?vue&type=template&id=61f93f4f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_template_id_61f93f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessage_vue_vue_type_template_id_61f93f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);