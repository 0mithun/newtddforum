(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"/N2k":function(t,e,a){var o=a("sORT");"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,n);o.locals&&(t.exports=o.locals)},SHuO:function(t,e,a){"use strict";var o=a("/N2k");a.n(o).a},Tq5M:function(t,e,a){"use strict";a.r(e);var o={props:{thread:{type:Object}},data:function(){return{reason:"",restrictions:""}},created:function(){},computed:{signedIn:function(){return!!window.App.user},isDiabled:function(){if(""==this.reason&&""==this.restrictions)return!0}},methods:{report:function(){this.signedIn||this.redirectToLogin(),axios.post("/report/thread",{id:this.thread.id,reason:this.reason,restrictions:this.restrictions}).then((function(t){}))},redirectToLogin:function(){window.location="/redirect-to?page="+location.pathname}}},n=(a("SHuO"),a("KHd+")),s=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tools-single-item tools-single-item-align-bottoms"},[a("button",{staticClass:"btn thread-items-show-tools-btn report-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#showReportModal"},on:{click:function(e){e.preventDefault(),t.signedIn||t.redirectToLogin()}}},[t._v("\n    Report\n  ")]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"showReportModal"}},[a("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"form-control",attrs:{name:"reason",id:"reason",rows:"2"},domProps:{value:t.reason},on:{input:function(e){e.target.composing||(t.reason=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.restrictions,expression:"restrictions"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.restrictions=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:""}},[t._v("Select age restrictions")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("Under 13")]),t._v(" "),a("option",{attrs:{value:"13"}},[t._v("Should be Pg-13")]),t._v(" "),a("option",{attrs:{value:"18"}},[t._v("Should be rated R")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isDiabled},on:{click:function(e){return e.preventDefault(),t.report(e)}}},[t._v("\n              Report\n            ")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h4",{staticClass:"modal-title",attrs:{id:"gridSystemModalLabel"}},[this._v("\n            Report Thread\n          ")])])}],!1,null,"056444a1",null);e.default=s.exports},sORT:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.tools-single-item-align-bottoms[data-v-056444a1] {\r\n  align-self: flex-end;\n}\n.report-btn[data-v-056444a1] {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 14px;\r\n  padding: 0;\r\n  height: auto;\r\n  width: auto;\n}\n#reason[data-v-056444a1] {\r\n  resize: vertical;\n}\r\n",""])}}]);