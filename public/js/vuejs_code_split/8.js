(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BfAI:function(t,i,n){"use strict";n.r(i);var e=n("f0Wu"),a=n.n(e);a.a.tz.setDefault("America/New_York");var s={data:function(){return{notifications:[]}},created:function(){var t=this;this.fetchNotifications(),Echo.private("App.User.".concat(window.App.user.id)).notification((function(i){t.fetchNotifications(),"App\\Notifications\\NewMessageNotification"==i.type&&t.playNotification()}))},computed:{unreadNotifications:function(){return this.notifications.filter((function(t){return"App\\Notifications\\NewMessageNotification"==t.type&&null==t.read_at}))},messageNotifications:function(){return this.notifications.filter((function(t){return"App\\Notifications\\NewMessageNotification"==t.type}))}},methods:{markAsRead:function(t){var i=this;axios.delete("/profiles/"+window.App.user.username+"/notifications/"+t.id).then((function(n){var e=i.notifications.filter((function(i){return i.id!=t.id}));i.notifications=e}))},fetchNotifications:function(){var t=this;axios.get("/profiles/"+window.App.user.username+"/message-notifications").then((function(i){var n=_.uniqBy(i.data,"data.friend.id");t.notifications=n}))},playNotification:function(){new Audio("http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3").play()},formateMessageTime:function(t){return a()(t).format("MM-D-YYYY, h:mm:ss A")}}},o=(n("MRwp"),n("KHd+")),r=Object(o.a)(s,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("li",{staticClass:"dropdown"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[n("i",{staticClass:"fa fa-envelope text-default"}),t._v(" "),n("span",{staticStyle:{color:"red","font-weight":"bold","font-size":"14px"}},[t._v(t._s(t.unreadNotifications.length))])]),t._v(" "),t.messageNotifications.length?n("ul",{staticClass:"dropdown-menu list-group"},t._l(t.messageNotifications,(function(i,e){return n("li",{key:e,staticClass:"list-group-item"},[n("a",{attrs:{href:"/chat"},on:{click:function(n){return t.markAsRead(i)}}},[n("div",{staticClass:"col-md-1 profile"},[n("img",{staticClass:"profile-image",attrs:{src:i.data.friend.profileAvatarPath,alt:""}})]),t._v(" "),n("div",{staticClass:"col-md-11 message"},[n("b",{staticClass:"pull-left",domProps:{textContent:t._s(i.data.friend.name)}}),t._v(" "),n("span",{staticClass:"pull-right",domProps:{textContent:t._s(t.formateMessageTime(i.data.message.created_at))}}),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"text-muted",domProps:{textContent:t._s(i.data.message.message)}})])])])})),0):n("ul",{staticClass:"dropdown-menu"},[t._m(0)])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("li",{staticClass:"list-group-item"},[i("span",{staticClass:"text-center"},[this._v("No Message")])])}],!1,null,"3159c83e",null);i.default=r.exports},HsRH:function(t,i,n){(t.exports=n("I1BE")(!1)).push([t.i,"\nli.list-group-item[data-v-3159c83e] {\n    width: 500px;\n    height: 55px;\n    vertical-align: center;\n}\nli.list-group-item[data-v-3159c83e]:last-child{\n    border-bottom: none;\n}\nli.list-group-item[data-v-3159c83e]:first-child{\n    border-top: none;\n}\nli.list-group-item a[data-v-3159c83e]:hover{\n    background: none;\n}\nli.list-group-item[data-v-3159c83e]:hover{\n    background:#dddfe2;\n}\n.profile-image[data-v-3159c83e]{\n    width:40px;\n    height:40px;\n    border-radius: 50%;\n}\n.profile[data-v-3159c83e]{\n        padding: 0;\n}\n.message[data-v-3159c83e]{\n}\n.dropdown-menu > li > a[data-v-3159c83e] {\n    padding: 0px;\n}\nli.list-group-item[data-v-3159c83e]{\n    padding:5px ;\n}\n",""])},MRwp:function(t,i,n){"use strict";var e=n("O925");n.n(e).a},O925:function(t,i,n){var e=n("HsRH");"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,a);e.locals&&(t.exports=e.locals)}}]);