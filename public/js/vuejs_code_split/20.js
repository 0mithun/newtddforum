(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"8bhI":function(t,i,n){var s=n("9rhT");"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,e);s.locals&&(t.exports=s.locals)},"9rhT":function(t,i,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.counts-item[data-v-b327021c] {\n}\r\n",""])},JjaF:function(t,i,n){"use strict";n.r(i);var s={props:["thread"],data:function(){return{likeCount:this.thread.like_count,dislikeCount:this.thread.dislike_count}},computed:{pointCounts:function(){return this.likeCount-this.dislikeCount}},created:function(){var t=this;eventBus.$on("threadVoted-"+this.thread.id,(function(i){t.getThreads()}))},methods:{getThreads:function(){var t=this;axios.get("/thread/get-single-thread/"+this.thread.slug).then((function(i){t.likeCount=i.data.like_count,t.dislikeCount=i.data.dislike_count}))}}},e=(n("rtuy"),n("KHd+")),o=Object(e.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"counts-item"},[i("i",{staticClass:"fa fa-arrow-up"}),this._v(" "),i("strong",[this._v(this._s(this._f("formatCount")(this.pointCounts)))]),this._v(" points\n")])}),[],!1,null,"b327021c",null);i.default=o.exports},rtuy:function(t,i,n){"use strict";var s=n("8bhI");n.n(s).a}}]);