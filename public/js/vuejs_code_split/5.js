(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5vUz":function(t,e,a){var o=a("yKND");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)},a2Yq:function(t,e,a){"use strict";a.r(e);var o=a("ynI1"),r=a("pE95"),s={props:{alltags:{type:Array,require:!0},allchannels:{type:Array,require:!0}},components:{Editor:o.a,Typeahead:r.a},computed:{thumb:function(){return""==this.threadThumb?"/images/default-thread-thumb.jpg":this.threadThumb}},data:function(){return{thread:null,errors:[],show_more_fields:!1,threadThumb:"",selectFile:null,formData:new FormData,form:{channel:"",tags:"",title:"",body:"",source:"",location:"",cno:{famous:!1,celebrity:!1},main_subject:"",image_path:null,age_restriction:0,wiki_info_page_url:"",wiki_image_copyright_free:!1,wiki_image_description:"",anonymous:0},share_on_facebook:!1,share_on_twitter:!1,image_path_error:!1,image_path_error_message:""}},methods:{OpenImgUpload:function(){$("#image_path").trigger("click")},tagChange:function(){var t=this.form.tags.length;if(t>0){var e=this.form.tags[t-1].split(/[\s,]+/);if(e.length>0){this.form.tags.pop();for(var a=0;a<e.length;a++)e[a].length>0&&this.form.tags.push(e[a])}}},onFileSelected:function(t){var e=this;if(t.target.files.length){this.image_path_error=!1,this.image_path_error_message="";var a=t.target.files[0];if(a.size>2097152)return t.preventDefault(),this.image_path_error=!0,void(this.image_path_error_message="Thread image may not be greater than 2048 kilobytes");this.selectFile=t.target.files[0],this.formData.append("image_path",this.selectFile);var o=new FileReader;o.readAsDataURL(a),o.onload=function(t){var a=t.target.result;e.threadThumb=a}}},appendData:function(){""!=this.form.channel?this.formData.append("channel",JSON.stringify(this.form.channel)):this.formData.append("channel",""),this.formData.append("title",this.form.title),this.formData.append("tags",this.form.tags),this.formData.append("body",this.form.body),this.formData.append("source",this.form.source),this.formData.append("location",this.form.location),this.formData.append("main_subject",this.form.main_subject),this.formData.append("age_restriction",this.form.age_restriction),this.formData.append("wiki_info_page_url",this.form.wiki_info_page_url),this.formData.append("wiki_image_description",this.form.wiki_image_description),this.formData.append("anonymous",this.form.anonymous?1:0),0==this.form.cno.famous?this.formData.append("cno","O"):1==this.form.famous&&1==this.form.cno.celebrity?this.formData.append("cno","C"):this.formData.append("cno","N")},addNewThread:function(){var t=this;this.errors=[],this.appendData(),axios.post("/threads",this.formData).then((function(e){t.thread=e.data.thread,$("#shareThreadModal").modal("show"),flash("Thread Created Successfully")})).catch((function(e){t.errors=e.response.data.errors}))},shareThread:function(){var t=this;axios.post("/thread/share",{thread:this.thread.id,share_on_facebook:this.share_on_facebook,share_on_twitter:this.share_on_twitter}).then((function(e){$("#shareThreadModal").modal("hide"),window.location=t.thread.path})).catch((function(t){}))},closeShareModal:function(){$("#shareThreadModal").modal("hide"),window.location=this.thread.path}}},i=(a("apwc"),a("KHd+")),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("\n        Post an Anecdote\n    ")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addNewThread(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group",class:{"has-error":t.errors.title}},[a("label",{staticClass:"control-label",attrs:{for:"title"}},[t._v("Title (required)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),t.errors.title?a("span",{staticClass:"help-block"},[t._v(t._s(t.errors.title[0]))]):t._e()])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group "},[a("label",{attrs:{for:"input"}},[t._v("Category")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{id:"input",type:"text",placeholder:"Enter channel name"}}),t._v(" "),a("typeahead",{attrs:{target:"#input",data:t.allchannels,"item-key":"name","force-select":""},model:{value:t.form.channel,callback:function(e){t.$set(t.form,"channel",e)},expression:"form.channel"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:"tags"}},[t._v("\n                        Tags\n                        ")]),t._v(" "),a("v-select",{attrs:{taggable:"","push-tags":"",options:t.alltags,multiple:""},on:{input:t.tagChange},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group",class:{"has-error":t.errors.body}},[a("label",{staticClass:"control-label",attrs:{for:"body"}},[t._v("Your Story (required)")]),t._v(" "),a("editor",{attrs:{height:"500","api-key":"TINY_EDITOR_API_KEY",init:{selector:"#tinyeditor",plugins:"code | autoresize",toolbar:"formatselect fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | code | numlist bullist outdent indent  ",toolbar_drawer:"floating",tinycomments_mode:"embedded",tinycomments_author:"Author name"}},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),t.errors.body?a("span",{staticClass:"help-block"},[t._v(t._s(t.errors.body[0]))]):t._e()],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group ",class:{"has-error":t.errors.image_path,"has-error":t.image_path_error}},[a("label",{staticClass:"control-label",attrs:{for:"image_path"}},[t._v("Add an image")]),t._v(" "),a("div",{staticClass:"thread-thumb-placeholder",on:{click:t.OpenImgUpload}},[a("img",{attrs:{src:t.thumb,width:"100%",height:"100%"}})]),t._v(" "),a("input",{staticClass:"form-control",staticStyle:{display:"none"},attrs:{type:"file",name:"image_path",accept:"image/*",id:"image_path"},on:{change:t.onFileSelected}}),t._v(" "),t.image_path_error?a("span",{staticClass:"help-block "},[a("strong",{domProps:{textContent:t._s(t.image_path_error_message)}})]):t._e(),t._v(" "),t.errors.body?a("span",{staticClass:"help-block"},[t._v(t._s(t.errors.body[0]))]):t._e()])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-default btn-sm",attrs:{tton:"",type:"button"},on:{click:function(e){t.show_more_fields=!t.show_more_fields}}},[t._v(t._s(t.show_more_fields?"Hide More Fields":"Show More Fields"))])])])]),t._v(" "),t.show_more_fields?a("div",{staticClass:"more-fields"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group "},[a("label",{staticClass:"control-label",attrs:{for:"wiki_info_page_url"}},[t._v(" Or Enter Image link ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.wiki_info_page_url,expression:"form.wiki_info_page_url"}],staticClass:"form-control",attrs:{type:"text",id:"wiki_info_page_url"},domProps:{value:t.form.wiki_info_page_url},on:{input:function(e){e.target.composing||t.$set(t.form,"wiki_info_page_url",e.target.value)}}})]),t._v(" "),""!=t.form.wiki_info_page_url?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.wiki_image_copyright_free,expression:"form.wiki_image_copyright_free"}],attrs:{type:"checkbox",required:""},domProps:{checked:Array.isArray(t.form.wiki_image_copyright_free)?t._i(t.form.wiki_image_copyright_free,null)>-1:t.form.wiki_image_copyright_free},on:{change:function(e){var a=t.form.wiki_image_copyright_free,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=t._i(a,null);o.checked?s<0&&t.$set(t.form,"wiki_image_copyright_free",a.concat([null])):s>-1&&t.$set(t.form,"wiki_image_copyright_free",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.form,"wiki_image_copyright_free",r)}}}),t._v(" \n                                This image is copyright-free (or the description includes license information)\n                            ")])]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group "},[a("label",{staticClass:"control-label",attrs:{for:"wiki_image_description"}},[t._v(" Image description")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.wiki_image_description,expression:"form.wiki_image_description"}],staticClass:"form-control",attrs:{type:"text",id:"wiki_image_description"},domProps:{value:t.form.wiki_image_description},on:{input:function(e){e.target.composing||t.$set(t.form,"wiki_image_description",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:"main_subject"}},[t._v("Main Subject:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.main_subject,expression:"form.main_subject"}],staticClass:"form-control",attrs:{type:"text",name:"main_subject",id:"main_subject"},domProps:{value:t.form.main_subject},on:{input:function(e){e.target.composing||t.$set(t.form,"main_subject",e.target.value)}}}),t._v(" "),a("span",{staticClass:"help-block"},[t._v("Who or what is this story about? This will be added as a tag. ")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:"source"}},[t._v("Source")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.source,expression:"form.source"}],staticClass:"form-control",attrs:{type:"text",name:"source",id:"source"},domProps:{value:t.form.source},on:{input:function(e){e.target.composing||t.$set(t.form,"source",e.target.value)}}}),t._v(" "),a("span",{staticClass:"help-block"},[t._v(" Where did you hear this story? If this story was reported on a website or other publication please list it here (<i> <a> tags are allowed).")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:"location"}},[t._v("Location")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.location,expression:"form.location"}],staticClass:"form-control",attrs:{type:"text",name:"location",id:"location"},domProps:{value:t.form.location},on:{input:function(e){e.target.composing||t.$set(t.form,"location",e.target.value)}}}),t._v(" "),a("span",{staticClass:"help-block"},[t._v('Where did your story take place? If google can find it, we\'ll add maps & markers for this story. Example locations are: "111 5th ave, NYC" and "Louvre."')])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"age_restriction"}},[t._v("Age Restriction")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.age_restriction,expression:"form.age_restriction"}],staticClass:"form-control ",attrs:{name:"age_restriction",id:"age_restriction"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"age_restriction",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""},domProps:{value:0}},[t._v("Ok for everyone")]),t._v(" "),a("option",{domProps:{value:13}},[t._v("PG-13")]),t._v(" "),a("option",{domProps:{value:18}},[t._v("R-rated (18+)")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:"category"}}),t._v(" "),a("div",{staticClass:"checkbox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cno.famous,expression:"form.cno.famous"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.cno.famous)?t._i(t.form.cno.famous,"1")>-1:t.form.cno.famous},on:{change:function(e){var a=t.form.cno.famous,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=t._i(a,"1");o.checked?s<0&&t.$set(t.form.cno,"famous",a.concat(["1"])):s>-1&&t.$set(t.form.cno,"famous",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.form.cno,"famous",r)}}}),t._v("This story involves a famous person or thing")])]),t._v(" "),t.form.cno.famous?a("div",{staticClass:"checkbox",staticStyle:{"margin-left":"30px"}},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cno.celebrity,expression:"form.cno.celebrity"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.form.cno.celebrity)?t._i(t.form.cno.celebrity,"1")>-1:t.form.cno.celebrity},on:{change:function(e){var a=t.form.cno.celebrity,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=t._i(a,"1");o.checked?s<0&&t.$set(t.form.cno,"celebrity",a.concat(["1"])):s>-1&&t.$set(t.form.cno,"celebrity",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.form.cno,"celebrity",r)}}}),t._v("Is it a celebrity?")])]):t._e()])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"checkbox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.anonymous,expression:"form.anonymous"}],attrs:{type:"checkbox",name:"anonymous"},domProps:{value:1,checked:Array.isArray(t.form.anonymous)?t._i(t.form.anonymous,1)>-1:t.form.anonymous},on:{change:function(e){var a=t.form.anonymous,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=t._i(a,1);o.checked?s<0&&t.$set(t.form,"anonymous",a.concat([1])):s>-1&&t.$set(t.form,"anonymous",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.form,"anonymous",r)}}}),t._v("Post Anonymously")])])])])])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:""!=t.form.wiki_info_page_url&&1!=t.form.wiki_image_copyright_free}},[t._v("Add Thread")])])])])]),t._v(" "),a("div",{staticClass:"modal fade ",attrs:{id:"shareThreadModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[a("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"checkbox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.share_on_facebook,expression:"share_on_facebook"}],attrs:{type:"checkbox",value:"1",name:"share_on_facebook"},domProps:{checked:Array.isArray(t.share_on_facebook)?t._i(t.share_on_facebook,"1")>-1:t.share_on_facebook},on:{change:function(e){var a=t.share_on_facebook,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=t._i(a,"1");o.checked?s<0&&(t.share_on_facebook=a.concat(["1"])):s>-1&&(t.share_on_facebook=a.slice(0,s).concat(a.slice(s+1)))}else t.share_on_facebook=r}}}),t._v("Share on Facebook")])]),t._v(" "),a("div",{staticClass:"checkbox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.share_on_twitter,expression:"share_on_twitter"}],attrs:{type:"checkbox",value:"1",name:"share_on_twitter"},domProps:{checked:Array.isArray(t.share_on_twitter)?t._i(t.share_on_twitter,"1")>-1:t.share_on_twitter},on:{change:function(e){var a=t.share_on_twitter,o=e.target,r=!!o.checked;if(Array.isArray(a)){var s=t._i(a,"1");o.checked?s<0&&(t.share_on_twitter=a.concat(["1"])):s>-1&&(t.share_on_twitter=a.slice(0,s).concat(a.slice(s+1)))}else t.share_on_twitter=r}}}),t._v("Share on Twitter")])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.closeShareModal(e)}}},[t._v("close")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.shareThread(e)}}},[t._v("Share")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("Modal title")])])}],!1,null,"65ac6ad7",null);e.default=n.exports},apwc:function(t,e,a){"use strict";var o=a("5vUz");a.n(o).a},yKND:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".thread-thumb-placeholder[data-v-65ac6ad7] {\n  width: 150px;\n  height: 150px;\n  background-color: #eeeeee;\n}\n#tinymce iframe[data-v-65ac6ad7] {\n  width: 100% !important;\n  height: 350px !important;\n}\n.tox-tinymce[data-v-65ac6ad7] {\n  min-height: 500px !important;\n}",""])}}]);