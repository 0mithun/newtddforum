(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{SYcB:function(t,s,e){"use strict";e.r(s);var n={props:["thread","channel"],data:function(){return{active:!0}},computed:{classes:function(){return["btn",this.active?"btn-danger":"btn-default"]}},methods:{subscribe:function(){var t="/threads/".concat(this.channel,"/").concat(this.thread,"/subscriptions");console.log(t),axios[this.active?"delete":"post"](t),this.active=!this.active}}},c=e("KHd+"),i=Object(c.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:this.classes,on:{click:this.subscribe}},[this._v("Subscribe")])}),[],!1,null,null,null);s.default=i.exports}}]);