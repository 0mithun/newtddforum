(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{TnR2:function(t,e,n){"use strict";n.r(e);var r={props:{thread:{type:Object}},computed:{threadUrl:function(){return"https://twitter.com/intent/tweet?url="+this.thread.path+"&text="+this.thread.title+"&via=0mithun_mithun"},signedIn:function(){return!!window.App.user}},methods:{share:function(){return this.signedIn&&window.open(this.threadUrl,"Share on Twitter","width=600, height=400"),!1}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-xs btn-default",staticStyle:{padding:"0px"},attrs:{href:t.threadUrl,target:"_blank"}},[n("i",{staticClass:"fa fa-twitter-square",staticStyle:{"font-size":"18px"},attrs:{"aria-hidden":"true"},on:{click:function(e){return e.preventDefault(),t.share(e)}}})])}),[],!1,null,null,null);e.default=a.exports}}]);