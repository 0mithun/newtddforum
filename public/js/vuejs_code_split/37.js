(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"5Kre":function(t,n,a){var o=a("u5Rf");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)},"9Ldw":function(t,n,a){"use strict";a.r(n);function o(t){return function(t){if(Array.isArray(t)){for(var n=0,a=new Array(t.length);n<t.length;n++)a[n]=t[n];return a}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i={props:{tag:{type:Object,required:!0}},components:{},data:function(){return{posts:this.tag.threads,followings:[],isFollow:!1,page:1,perPage:10,paginatedItems:[]}},computed:{postCounts:function(){return abbreviate(this.posts.length,1)},currentPage:function(){return this.page},totalPage:function(){return Math.ceil(this.posts.length/this.perPage)}},created:function(){this.checkIsFollow(),this.getAllFollowings(),this.setCurrentPage(),this.paginate(this.perPage,1)},methods:{toggleFollow:function(){var t=this;axios.post("/tag/".concat(this.tag.id,"/follow")).then((function(n){if(t.isFollow){var a=t.followings.filter((function(t){return t.id!=window.App.user.id}));t.followings=a,t.isFollow=!1}else{var i=[].concat(o(t.followings),[window.App.user]);t.followings=i,t.isFollow=!0}flash(n.data.message)}))},checkIsFollow:function(){var t=this;axios.get("/tag/".concat(this.tag.id,"/is-follow")).then((function(n){t.isFollow=n.data}))},getAllFollowings:function(){var t=this;axios.get("/tag/".concat(this.tag.id,"/followings")).then((function(n){t.followings=n.data.followings}))},setCurrentPage:function(){var t=new URLSearchParams(window.location.search).get("page");this.page=t&&""!=t?t:this.page},paginate:function(t,n){var a=(n-1)*t,o=n*t,i=this.tag.threads.slice(a,o);this.paginatedItems=i},onPageChange:function(t){this.page=t,history.pushState(null,null,"?page="+t),this.paginate(this.perPage,t)}}},s=(a("ceBt"),a("KHd+")),e=Object(s.a)(i,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"top-margin row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row profile-header"},[a("div",{staticClass:"profile-avatar"},[a("img",{staticClass:"profile-img",attrs:{src:t.tag.profileAvatarPath,alt:""}})]),t._v(" "),a("div",{staticClass:"profile-details"},[a("h2",{staticClass:"profile-name"},[a("span",[t._v("#"+t._s(t.tag.name.toLowerCase()))])]),t._v(" "),a("div",{staticClass:"profile-count"},[a("post-counts",{attrs:{post_count:t.posts.length}}),t._v(" "),a("following-counts",{attrs:{following_count:t.followings.length}})],1),t._v(" "),a("div",{staticClass:"profile-buttons"},[t.isFollow?a("button",{staticClass:"btn btn-sm unfollow-btn",on:{click:function(n){return n.preventDefault(),t.toggleFollow(n)}}},[t._v("Unfllow")]):a("button",{staticClass:"btn btn-sm follow-btn",on:{click:function(n){return n.preventDefault(),t.toggleFollow(n)}}},[t._v("Follow")])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"post-header"},[a("div",{staticClass:"post-counts"},[t._v(t._s(t.postCounts)+" posts")])]),t._v(" "),a("div",{staticClass:"post-body"},[t._l(t.paginatedItems,(function(t,n){return a("single-thread",{key:n,attrs:{thread:t}})})),t._v(" "),t.totalPage>1?a("nav",{attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},[1!=t.currentPage?a("li",[t._m(0)]):t._e(),t._v(" "),t._l(t.totalPage,(function(n){return a("li",{key:n,class:{active:t.currentPage==n},on:{click:function(a){return t.onPageChange(n)}}},[a("span",[t._v("\n                        "+t._s(n)+"\n                        "),a("span",{staticClass:"sr-only"},[t._v(t._s(n))])])])})),t._v(" "),t.currentPage!=t.totalPage?a("li",[t._m(1)]):t._e()],2)]):t._e()],2)])])])])]),t._v(" "),a("div",{staticClass:"col-md-4 sidebar"},[a("trending-thread")],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("span",{attrs:{"aria-hidden":"true"}},[this._v("«")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("span",{attrs:{"aria-hidden":"true"}},[this._v("»")])])}],!1,null,"5d22b89c",null);n.default=e.exports},ceBt:function(t,n,a){"use strict";var o=a("5Kre");a.n(o).a},u5Rf:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.profile-header[data-v-5d22b89c] {\r\n  margin: 30px auto;\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-name[data-v-5d22b89c] {\r\n  padding: 0;\r\n  margin: 0;\n}\n.profile-name span[data-v-5d22b89c] {\r\n  color: rgb(255, 67, 1);\n}\n.profile-buttons[data-v-5d22b89c] {\r\n  padding: 10px 0px;\n}\n.profile-img[data-v-5d22b89c] {\r\n  width: 120px;\r\n  height: 120px;\r\n  padding: 3px;\r\n  border: 2px solid rgb(255, 67, 1);\r\n  border-radius: 50%;\n}\n.profile-avatar[data-v-5d22b89c] {\r\n  margin-right: 30px;\n}\n.profile-count[data-v-5d22b89c] {\r\n  display: flex;\r\n  align-items: center;\n}\n.profile-count > *[data-v-5d22b89c] {\r\n  margin-left: 5px;\r\n  margin-right: 5px;\n}\n.follow-btn[data-v-5d22b89c] {\r\n  width: 100px;\r\n  background-color: rgb(255, 67, 1);\r\n  color: white;\n}\n.unfollow-btn[data-v-5d22b89c] {\r\n  width: 100px;\r\n  background-color: red;\r\n  color: white;\n}\n.single-tags-name[data-v-5d22b89c] {\r\n  color: black;\n}\n.single-tags-name span[data-v-5d22b89c] {\r\n  color: rgb(255, 67, 1);\n}\n.post-counts[data-v-5d22b89c] {\r\n  color: black;\r\n  padding: 15px 0;\r\n  font-weight: bold;\n}\n.sidebar[data-v-5d22b89c] {\r\n  margin: 30px auto;\n}\r\n",""])}}]);