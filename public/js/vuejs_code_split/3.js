(window.webpackJsonp=window.webpackJsonp||[]).push([[3,32],{AUwv:function(t,e,n){"use strict";var a=n("gNc9");n.n(a).a},EHFx:function(t,e,n){"use strict";n.r(e);var a={props:["dataSet"],data:function(){return{page:1,prevUrl:!1,nextUrl:!1}},watch:{dataSet:function(){this.page=this.dataSet.current_page,this.prevUrl=this.dataSet.prev_page_url,this.nextUrl=this.dataSet.next_page_url},page:function(){this.broadcast().updateUrl()}},computed:{shouldPaginate:function(){return!!this.prevUrl||!!this.nextUrl}},methods:{broadcast:function(){return this.$emit("changed",this.page)},updateUrl:function(){history.pushState(null,null,"?page="+this.page)}}},s=n("KHd+"),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.shouldPaginate?n("ul",{staticClass:"pagination"},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.prevUrl,expression:"prevUrl"}]},[n("a",{attrs:{href:"#","aria-label":"Previous",rel:"prev"},on:{click:function(e){e.preventDefault(),t.page--}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("« Previous")])])]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.nextUrl,expression:"nextUrl"}]},[n("a",{attrs:{href:"#","aria-label":"Next",rel:"next"},on:{click:function(e){e.preventDefault(),t.page++}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("Next »")])])])]):t._e()}),[],!1,null,null,null);e.default=i.exports},"S/gD":function(t,e,n){"use strict";n.r(e);n("TiIQ"),n("bKju");var a={props:["reply"],components:{NestedReplies:function(){return n.e(11).then(n.bind(null,"RKNe"))}},data:function(){return{editing:!1,id:this.reply.id,body:this.reply.body,editBody:this.reply.body,replies:[],replies_count:this.reply.reply_count,showNested:!1,addNested:!1,nestedbody:"",showLoadMore:!0}},created:function(){var t=this;eventBus.$on("nested_delete-"+this.reply.id,(function(e){var n=t.replies.filter((function(t){return t.id!=e}));t.replies=n,t.replies_count=t.replies_count-1}))},computed:{ago:function(){return moment(this.reply.created_at,"YYYY-MM-DD HH:mm:ss").fromNow()+"..."},signedIn:function(){return!!window.App.user},redirectToLogin:function(){return"/redirect-to?page="+location.pathname}},methods:{toggleNestedReplies:function(){this.showNested?this.showNested=!1:(this.loadNestedReply(),this.showNested=!0)},addReplySuggest:function(){$("#bodyedit-"+this.reply.id).atwho({at:"@",delay:750,callbacks:{remoteFilter:function(t,e){$.getJSON("/api/users",{name:t},(function(t){e(t)}))}}}),$("#addNested-"+this.reply.id).atwho({at:"@",delay:750,callbacks:{remoteFilter:function(t,e){$.getJSON("/api/users",{name:t},(function(t){e(t)}))}}})},addNestedReplySuggest:function(){$("#addNested-"+this.reply.id).atwho({at:"@",delay:750,callbacks:{remoteFilter:function(t,e){$.getJSON("/api/users",{name:t},(function(t){e(t)}))}}})},loadNestedReply:function(){var t=this,e="/replies/".concat(this.reply.id,"/load-reply");axios.get(e).then((function(e){var n=e.data;t.replies=n}))},update:function(){axios.patch("/replies/"+this.id,{body:this.editBody}).catch((function(t){flash(t.response.data,"danger")})),this.body=this.editBody,this.editing=!1,flash("Updated!")},destroy:function(){this.replies_count>0?flash("Your reply has many replies.","danger"):confirm("Are you sure delete this reply")&&(axios.delete("/replies/"+this.id),this.$emit("deleted",this.id),flash("Your reply has been deleted."))},addNestedReply:function(){var t=this,e="/replies/".concat(this.reply.id,"/new-reply");axios.post(e,{body:this.nestedbody}).catch((function(t){flash(t.response.data,"danger")})).then((function(e){var n=e.data;t.nestedbody="",t.replies.push(n),t.replies_count=t.replies_count+1,t.addNested=!1,t.showLoadMore=!0,flash("Your reply has been posted.")}))}}},s=(n("AUwv"),n("KHd+")),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"single-reply",attrs:{id:"reply-"+t.id}},[n("div",{staticClass:"row reply-heading"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"thread_creator"},[n("a",{staticClass:"creator_name",attrs:{href:t.reply.ownerProfileUrl}},[n("img",{staticClass:"avatar-photo",attrs:{src:t.reply.owner.profileAvatarPath,alt:t.reply.owner.name,width:"25",height:"25"}}),t._v(" "),n("user-online",{attrs:{user:t.reply.owner}}),t._v("\n                    "+t._s(t.reply.owner.name)+"\n                ")],1),t._v(" "),n("span",{staticClass:"reply_created_at",domProps:{textContent:t._s(t.ago)}})])]),t._v(" "),t.signedIn?n("div",{staticClass:"col-md-8 reply-edit-delete-btn"},[n("div",{staticClass:"form-g"},[!t.authorize("owns",t.reply)&&!t.authorize("isAdmin")||t.authorize("isBan")?t._e():n("button",{staticClass:"btn btn-xs btn-danger",on:{click:t.destroy}},[t._v("Delete")]),t._v(" "),t.authorize("owns",t.reply)&&!t.authorize("isBan")?n("button",{staticClass:"btn btn-xs btn-primary",on:{click:function(e){t.editing=!0}}},[t._v("Edit")]):t._e()])]):t._e()]),t._v(" "),n("div",{staticClass:"row reply-body"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"reply-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),n("div",{staticClass:"nested-reply-btn"},[t.signedIn?n("button",{staticClass:"btn btn-link add-nested-reply-btn",on:{click:function(e){t.addNested=!0,t.showLoadMore=!1}}},[t._v("Reply")]):n("a",{staticClass:"btn btn-link add-nested-reply-btn",attrs:{href:t.redirectToLogin}},[t._v("Reply")]),t._v(" "),t.editing?n("div",{staticClass:"edit-reply"},[n("div",[n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editBody,expression:"editBody"}],staticClass:"form-control",attrs:{type:"text","aria-label":"...",id:"bodyedit-"+t.reply.id,placeholder:"Add a comment"},domProps:{value:t.editBody},on:{keyup:t.addReplySuggest,input:function(e){e.target.composing||(t.editBody=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary btn-xs",attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("button",{staticClass:"btn btn-danger btn-xs",on:{click:function(e){t.editing=!1}}},[t._v("Cancel")])])])])]):t._e(),t._v(" "),t.addNested?n("div",{staticClass:"edit-reply"},[n("div",[n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.addNestedReply(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nestedbody,expression:"nestedbody"}],staticClass:"form-control",attrs:{type:"text","aria-label":"...",id:"addNested-"+t.reply.id,placeholder:"Add a comment"},domProps:{value:t.nestedbody},on:{keyup:t.addNestedReplySuggest,input:function(e){e.target.composing||(t.nestedbody=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary btn-xs",attrs:{type:"submit"}},[t._v("Add")]),t._v(" "),n("button",{staticClass:"btn btn-danger btn-xs",on:{click:function(e){t.addNested=!1,t.showLoadMore=!0}}},[t._v("Cancel")])])])])]):t._e()]),t._v(" "),t.showLoadMore&&t.replies_count>0?n("div",{staticClass:"more-reply"},[n("button",{staticClass:"btn btn-xs btn-link show-nested-replies-btn",on:{click:t.toggleNestedReplies}},[t.showNested?n("div",[n("span",{staticClass:"glyphicon glyphicon-triangle-top"}),t._v(" Hide Reply\n                    ")]):n("div",[n("span",{staticClass:"glyphicon glyphicon-triangle-bottom"}),t._v(" "+t._s("View "+t.replies_count+" Reply")+"\n                    ")])]),t._v(" "),t._l(t.replies,(function(e,a){return t.showNested?n("NestedReplies",{key:a,attrs:{reply:e}}):t._e()}))],2):t._e()])])])}),[],!1,null,"533adcaf",null).exports,r={data:function(){return{body:"",completed:!1}},computed:{redirectToLogin:function(){return"/redirect-to?page="+location.pathname}},mounted:function(){$("#body").atwho({at:"@",delay:750,callbacks:{remoteFilter:function(t,e){$.getJSON("/api/users",{name:t},(function(t){e(t)}))}}})},methods:{addReply:function(){var t=this;axios.post(location.pathname+"/replies",{body:this.body}).catch((function(t){flash(t.response.data,"danger")})).then((function(e){var n=e.data;t.body="",t.completed=!0,flash("Your reply has been posted."),t.$emit("created",n)}))}}},o=(n("vMP/"),{components:{Reply:i,NewReply:Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-new-reply"},[t.signedIn?n("div",[n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.addReply(e)}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"form-control",attrs:{type:"text","aria-label":"...",name:"body",id:"body",placeholder:"Add a comment"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),t._v(" "),t._m(0)])])]):n("p",{staticClass:"text-center"},[t._v("\n        Please "),n("a",{attrs:{href:t.redirectToLogin}},[t._v("sign in")]),t._v(" to participate in this\n        discussion.\n    ")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[this._v("Post")])])}],!1,null,"50fded94",null).exports,Paginator:n("EHFx").default},mixins:[{data:function(){return{items:[]}},methods:{add:function(t){this.items.push(t),this.$emit("added")},remove:function(t){this.items.splice(t,1),this.$emit("removed")}}}],data:function(){return{dataSet:!1}},created:function(){this.fetch()},methods:{fetch:function(t){axios.get(this.url(t)).then(this.refresh)},url:function(t){if(!t){var e=location.search.match(/page=(\d+)/);t=e?e[1]:1}return"".concat(location.pathname,"/replies?page=").concat(t)},refresh:function(t){var e=t.data;this.dataSet=e,this.items=e.data,window.scrollTo(0,0)}}}),d=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"panel panel-default"},[t.authorize("isBan")?t._e():n("new-reply",{on:{created:t.add}}),t._v(" "),n("div",{staticClass:"panel-"},[t._l(t.items,(function(e,a){return n("div",{key:e.id},[n("reply",{attrs:{reply:e},on:{deleted:function(e){return t.remove(a)}}})],1)})),t._v(" "),n("paginator",{attrs:{dataSet:t.dataSet},on:{changed:t.fetch}})],2)],1)])}),[],!1,null,null,null);e.default=d.exports},YJty:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.comment-body[data-v-50fded94]{\n    resize: vertical !important;\n}\n.add-new-reply[data-v-50fded94]{\n    padding: 30px 15px;\n}\n",""])},gNc9:function(t,e,n){var a=n("rbZw");"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(t.exports=a.locals)},rbZw:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.single-reply[data-v-533adcaf]{\n    margin: 5px;\n}\n.comment-body[data-v-533adcaf]{\n    resize: vertical !important;\n}\n.reply_created_at[data-v-533adcaf]{\n    color: #92959e;\n    font-size: 12px;\n    font-style: italic;\n    margin-right: 10px;\n}\n.reply-body[data-v-533adcaf]{\n    padding: 0;\n    margin-left: 20px;\n    margin-top: -8px;\n    color: #92959e;\n}\n.nested-reply-btn[data-v-533adcaf]{\n    margin-left: 10px;\n}\n.more-reply[data-v-533adcaf]{\n    margin-left: 20px;\n}\n.add-nested-reply-btn[data-v-533adcaf]{\n    color: #92959e;\n}\n.add-nested-reply-btn[data-v-533adcaf]:hover{\n    color: #92959e;\n    text-decoration: none;\n}\n.add-nested-reply-btn[data-v-533adcaf]:focus{\n    outline: none;\n    text-decoration: none;\n}\n.reply-edit-delete-btn[data-v-533adcaf]{\n    display: flex;\n    justify-content: flex-end;\n}\n.show-nested-replies-btn[data-v-533adcaf]{\n    /* color: black; */\n     color: #92959e;\n}\n.show-nested-replies-btn[data-v-533adcaf]:focus{\n    outline: none;\n    text-decoration: none;\n}\n.show-nested-replies-btn[data-v-533adcaf]:hover{\n    color: #92959e;\n    text-decoration: none;\n}\n.glyphicon-triangle-top[data-v-533adcaf],\n.glyphicon-triangle-bottom[data-v-533adcaf]{\n    margin-right: 5px;\n    font-size: 10px;\n}\n",""])},sUFe:function(t,e,n){var a=n("YJty");"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(t.exports=a.locals)},"vMP/":function(t,e,n){"use strict";var a=n("sUFe");n.n(a).a}}]);