(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0iAC":function(t,n,o){"use strict";var e=o("r9Y5");o.n(e).a},Drgr:function(t,n,o){(t.exports=o("I1BE")(!1)).push([t.i,"\n.counts-item[data-v-1d8e83b4] {\n}\n",""])},LG1j:function(t,n,o){"use strict";o.r(n);var e={props:["thread","color"],data:function(){return{count:this.thread.replies_count}},computed:{commentCounts:function(){return this.count},commentStyle:function(){return{color:this.color?this.color:"#636b6f"}}},created:function(){var t=this;eventBus.$on("commentAdded-"+this.thread.id,(function(){console.log("New Reply added"),t.count=t.count+1})),eventBus.$on("commentDeleted-"+this.thread.id,(function(){console.log("Reply Deleted"),t.count=t.count-1}))}},s=(o("0iAC"),o("KHd+")),i=Object(s.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"counts-item",style:this.commentStyle},[n("i",{staticClass:"fa fa-comment"}),this._v(" "),n("strong",[this._v(this._s(this._f("formatCount")(this.commentCounts)))]),this._v(" comments\n")])}),[],!1,null,"1d8e83b4",null);n.default=i.exports},r9Y5:function(t,n,o){var e=o("Drgr");"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(e,s);e.locals&&(t.exports=e.locals)}}]);