(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{CIs8:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{name:"",tags:null,edit:!1,editId:null}},created:function(){this.fetchTags()},mounted:function(){},methods:{cancelEdit:function(){this.name="",this.edit=!1},updateTag:function(){var t=this;axios.post("/admin/tags/update",{name:this.name,id:this.editId}).then((function(a){a.data;t.name="",t.fetchTags(),flash("Tag Update Successfully"),t.edit=!1}))},editTag:function(t,a){this.edit=!0,this.name=a,this.editId=t},fetchTags:function(){var t=this;axios.get("/tags").then((function(a){var e=a.data;t.tags=e}))},addTag:function(){var t=this;axios.post("/admin/tags/add",{name:this.name}).then((function(a){a.data;t.name="",t.fetchTags(),flash("Tag Added Successfully")}))}}},s=e("KHd+"),i=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-body",staticStyle:{"padding-top":"0px"}},[e("table",{staticClass:"table table-bordered table-hover table-responsive table-bordered"},[t._m(0),t._v(" "),e("tbody",t._l(t.tags,(function(a,n){return e("tr",{key:n},[e("td",[t._v("\n                "+t._s(a.name)+"\n            ")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("button",{staticClass:"btn btn-default btn-sm",on:{click:function(e){return t.editTag(a.id,a.name)}}},[t._v("Edit")])])])})),0)]),t._v(" "),t.edit?e("div",[e("h3",[t._v("Update Tag")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"name"}},[t._v("Tag Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.updateTag}},[t._v("Update")]),t._v(" "),e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:t.cancelEdit}},[t._v("Cancel")])]):e("div",[e("h3",[t._v("Add New Tag")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label",attrs:{for:"name"}},[t._v("Tag Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.addTag}},[t._v("Add New")])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{width:"80%"}},[this._v("Tag Name")]),this._v(" "),a("th",[this._v("Action")])])])}],!1,null,null,null);a.default=i.exports}}]);