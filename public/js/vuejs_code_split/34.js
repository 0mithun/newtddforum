(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{CqCo:function(t,n,e){"use strict";var r=e("snhl");e.n(r).a},TnR2:function(t,n,e){"use strict";e.r(n);var r={props:{thread:{type:Object}},computed:{threadUrl:function(){return"https://twitter.com/intent/tweet?url="+this.thread.path+"&text="+this.thread.title+"&via=anecdotage_com"},signedIn:function(){return!!window.App.user}},methods:{share:function(){this.signedIn||this.redirectToLogin(),window.open(this.threadUrl,"Share on Twitter","width=600, height=400")},redirectToLogin:function(){window.location="/redirect-to?page="+location.pathname}}},a=(e("CqCo"),e("KHd+")),i=Object(a.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"btn btn-xs twitter-share-btn",attrs:{href:t.threadUrl,target:"_blank"},on:{click:function(n){return n.preventDefault(),t.share(n)}}},[e("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"},on:{click:function(n){return n.preventDefault(),t.share(n)}}}),t._v(" Share\n")])}),[],!1,null,"924e417c",null);n.default=i.exports},snhl:function(t,n,e){var r=e("tajQ");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,a);r.locals&&(t.exports=r.locals)},tajQ:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.twitter-share-btn[data-v-924e417c]{\n    /* padding: 5px; */\n    color: white;\n    background-color: #12cad6;\n}\n",""])}}]);