(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{FV2D:function(t,e,i){"use strict";i.r(e);i("rX62");var r={props:["name","value","placeholder","shouldClear"],mounted:function(){var t=this;this.$refs.trix.addEventListener("trix-change",(function(e){t.$emit("input",e.target.innerHTML)})),this.$watch("shouldClear",(function(){t.$refs.trix.value=""}))}},n=i("KHd+"),a=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{id:"trix",type:"hidden",name:this.name},domProps:{value:this.value}}),this._v(" "),e("trix-editor",{ref:"trix",attrs:{input:"trix",placeholder:this.placeholder}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);