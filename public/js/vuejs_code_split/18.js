(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{LG1j:function(t,n,o){"use strict";o.r(n);var e={props:["thread","color"],data:function(){return{count:this.thread.replies_count}},computed:{commentCounts:function(){return this.count},commentStyle:function(){return{color:this.color?this.color:"#636b6f"}}},created:function(){var t=this;eventBus.$on("commentAdded-"+this.thread.id,(function(){console.log("New Reply added"),t.count=t.count+1})),eventBus.$on("commentDeleted-"+this.thread.id,(function(){console.log("Reply Deleted"),t.count=t.count-1}))}},c=(o("WBm2"),o("KHd+")),s=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"counts-item",style:t.commentStyle},[o("i",{staticClass:"fa fa-comment"}),t._v(" "),o("strong",[t._v(t._s(t._f("formatCount")(t.commentCounts)))]),t._v("  "+t._s(t._f("strPlural")(t.commentCounts,"comment"))+"\n")])}),[],!1,null,"ccb9ea6c",null);n.default=s.exports},V6Zh:function(t,n,o){(t.exports=o("I1BE")(!1)).push([t.i,"\n.counts-item[data-v-ccb9ea6c] {\n}\n",""])},WBm2:function(t,n,o){"use strict";var e=o("hPvK");o.n(e).a},hPvK:function(t,n,o){var e=o("V6Zh");"string"==typeof e&&(e=[[t.i,e,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(e,c);e.locals&&(t.exports=e.locals)}}]);