(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"8iqb":function(t,e,a){"use strict";a.r(e);var r=a("wd/R"),n=a.n(r),i={props:["threads","query","all_tags"],data:function(){return{allThreads:[],q:this.query,sort_by:"topRated",filter_emojis:[],filter_rated:[],search:!1,category:[],filter_tags:[],filter_length:[],emojis:"",tags:Object.values(this.all_tags),paginatedItems:this.allThreads,page:1,perPage:10,limitLinks:10,formPage:1,toPage:1}},watch:{filter_length:function(t){this.filterThreads()},filter_emojis:function(t){this.filterThreads()},filter_rated:function(t){this.filterThreads()},category:function(t){this.filterThreads()},filter_tags:function(t){this.filterThreads()}},created:function(){this.allThreads=Object.values(this.threads),this.getAllEmojis(),this.setCurrentPage(),this.paginateLimit(),this.paginate(this.perPage,this.page),this.sortBy(this.sort_by)},computed:{showPaginatedItems:function(){return this.paginatedItems},currentPage:function(){return this.page},totalPage:function(){return Math.ceil(this.postsCount/this.perPage)},filterOpen:function(){return this.filter_length.length>0||this.filter_emojis.length>0||this.filter_rated.length>0||this.category.length>0||this.filter_tags.length>0},postsCount:function(){return this.filterOpen,this.allThreads.length},pageRange:function(){return _.range(this.formPage,this.toPage)},mapUrl:function(){return"/map/show?query=".concat(this.q)}},methods:{setCurrentPage:function(){var t=new URLSearchParams(window.location.search).get("page");this.page=t&&""!=t?t:this.page},paginate:function(t,e){var a=(e-1)*t,r=e*t,n=this.allThreads.slice(a,r);this.paginatedItems=n},onPageChange:function(t){this.page=t,history.pushState(null,null,"?query="+this.q+"&page="+t),this.paginateLimit(),this.paginate(this.perPage,t)},paginateLimit:function(){var t=Math.floor(this.limitLinks/2),e=this.page-t,a=Number.parseInt(this.page)+t;this.page<t&&(a+=t-this.page),this.totalPage-this.page<t&&(e-=t-(this.totalPage-this.page)-1),e<t&&(e=1),a>this.totalPage&&(a=this.totalPage),this.formPage=e,this.toPage=a+1},filterThreads:function(){this.paginatedItems=[],this.page=1;var t=Object.values(this.threads);this.filter_rated.length>0&&(t=this.filterByRated(this.filter_rated,t)),this.category.length>0&&(t=this.filterByCategory(this.category,t)),this.filter_tags.length>0&&(t=this.filterByTags(this.filter_tags,t)),this.filter_emojis.length>0&&(t=this.filterByEmojis(this.filter_emojis,t)),this.filter_length.length>0&&(t=this.filterByLength(this.filter_length,t)),this.allThreads=t,this.paginatedItems=this.allThreads,this.paginate(this.perPage,this.currentPage)},filterByLength:function(t,e){return _.filter(e,(function(e){for(var a=!1,r=0;r<t.length;r++){var n=0,i=301;if("sort"==t[r]?(n=0,i=100):"medium"==t[r]?(n=100,i=300):"long"==t[r]&&(n=300,i=301),301===i){if(e.word_count>=300){a=!0;break}}else if(e.word_count>=n&e.word_count<=i){a=!0;break}}return a}))},filterByEmojis:function(t,e){var a=_.filter(e,(function(t){return t.emojis.length>0}));return _.filter(a,(function(e){for(var a=0;a<e.emojis.length;a++)if(_.includes(t,e.emojis[a].name))return!0}))},filterByRated:function(t,e){return _.filter(e,(function(e){if(_.includes(t,e.age_restriction))return!0}))},filterByCategory:function(t,e){return _.filter(e,(function(e){if(_.includes(t,e.cno))return!0}))},filterByTags:function(t,e){var a=_.filter(e,(function(t){return t.tagNameList.length>0}));return _.filter(a,(function(e){for(var a=!1,r=0;r<e.tagNameList.length;r++)if(_.includes(t,e.tagNameList[r].trim().toLowerCase())){a=!0;break}if(a)return!0}))},getAllEmojis:function(){var t=this;axios.get("/all-emojis").then((function(e){t.emojis=e.data}))},getAllTags:function(){var t=this;axios.get("/all-tags").then((function(e){t.tags=e.data}))},searchThread:function(){var t="/anecdotes/search?query="+this.q;window.location.href=t},sortBy:function(t){this.sort_by=t;var e=_.orderBy(this.allThreads,[this.sort_by],"desc");this.allThreads=e,this.paginate(this.perPage,this.page)},ago:function(t){return n()(t,"YYYY-MM-DD HH:mm:ss").fromNow()+"..."},searchThreads:function(){var t=this;""!=this.q&&(this.search=!0,axios.get("/anecdotes/search?query="+this.q+"&sort_by="+this.sort_by).then((function(e){t.allThreads=e.data,t.threads=e.data})))}}},s=(a("nfhl"),a("KHd+")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 filter-search"},[a("div",{staticClass:"count-column"},[t._v("\n              "+t._s(t._f("formatCount")(t.postsCount))+"   "+t._s(t._f("strPlural")(t.postsCount,"Result"))+" \n            ")]),t._v(" "),a("div",{staticClass:"sort-column"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-link btn-xs dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},["topRated"==t.sort_by?[a("strong",{staticClass:"dark"},[t._v("Top Rated")])]:t._e(),t._v(" "),"created_at"==t.sort_by?[a("strong",{staticClass:"dark"},[t._v("Most Recent")])]:t._e(),t._v(" "),"like_count"==t.sort_by?[a("strong",{staticClass:"dark"},[t._v("Most Liked")])]:t._e(),t._v(" "),"favorite_count"==t.sort_by?[a("strong",{staticClass:"dark"},[t._v("Most Favorited")])]:t._e(),t._v(" "),"visits"==t.sort_by?[a("strong",{staticClass:"dark"},[t._v("Most Visits")])]:t._e(),t._v(" "),a("span",{staticClass:"caret"})],2),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sortBy("topRated")}}},[t._v("Top Rated")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sortBy("created_at")}}},[t._v("Most Recent")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sortBy("like_count")}}},[t._v("Most Liked")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sortBy("favorite_count")}}},[t._v("Most Favorited")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sortBy("visits")}}},[t._v("Most Visits")])])])])]),t._v(" "),a("div",{staticClass:"btn-group"},[t._m(0),t._v(" "),a("ul",{staticClass:"dropdown-menu search-dropdown"},t._l(t.tags,(function(e,r){return a("li",{key:r},[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_tags,expression:"filter_tags"}],attrs:{type:"checkbox",name:"rated",id:""},domProps:{value:e.toLowerCase(),checked:Array.isArray(t.filter_tags)?t._i(t.filter_tags,e.toLowerCase())>-1:t.filter_tags},on:{change:function(a){var r=t.filter_tags,n=a.target,i=!!n.checked;if(Array.isArray(r)){var s=e.toLowerCase(),o=t._i(r,s);n.checked?o<0&&(t.filter_tags=r.concat([s])):o>-1&&(t.filter_tags=r.slice(0,o).concat(r.slice(o+1)))}else t.filter_tags=i}}}),t._v("\n                      "+t._s(e.toLowerCase())+"\n                    ")])])])})),0)]),t._v(" "),a("div",{staticClass:"btn-group"},[t._m(1),t._v(" "),a("ul",{staticClass:"dropdown-menu search-dropdown"},[a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{type:"checkbox",name:"rated",id:"",value:"C"},domProps:{checked:Array.isArray(t.category)?t._i(t.category,"C")>-1:t.category},on:{change:function(e){var a=t.category,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,"C");r.checked?i<0&&(t.category=a.concat(["C"])):i>-1&&(t.category=a.slice(0,i).concat(a.slice(i+1)))}else t.category=n}}}),t._v("\n                      Celebrities\n                    ")])])]),t._v(" "),a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{type:"checkbox",name:"rated",id:"",value:"N"},domProps:{checked:Array.isArray(t.category)?t._i(t.category,"N")>-1:t.category},on:{change:function(e){var a=t.category,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,"N");r.checked?i<0&&(t.category=a.concat(["N"])):i>-1&&(t.category=a.slice(0,i).concat(a.slice(i+1)))}else t.category=n}}}),t._v("\n                      Other notables\n                    ")])])]),t._v(" "),a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{type:"checkbox",name:"rated",id:"",value:"O"},domProps:{checked:Array.isArray(t.category)?t._i(t.category,"O")>-1:t.category},on:{change:function(e){var a=t.category,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,"O");r.checked?i<0&&(t.category=a.concat(["O"])):i>-1&&(t.category=a.slice(0,i).concat(a.slice(i+1)))}else t.category=n}}}),t._v("\n                      Other People\n                    ")])])])])]),t._v(" "),a("div",{staticClass:"btn-group"},[t._m(2),t._v(" "),a("ul",{staticClass:"dropdown-menu search-dropdown"},t._l(t.emojis,(function(e,r){return a("li",{key:r},[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_emojis,expression:"filter_emojis"}],staticClass:"filter-emoji-checkbox",attrs:{type:"checkbox",name:"like",id:""},domProps:{value:e.name,checked:Array.isArray(t.filter_emojis)?t._i(t.filter_emojis,e.name)>-1:t.filter_emojis},on:{change:function(a){var r=t.filter_emojis,n=a.target,i=!!n.checked;if(Array.isArray(r)){var s=e.name,o=t._i(r,s);n.checked?o<0&&(t.filter_emojis=r.concat([s])):o>-1&&(t.filter_emojis=r.slice(0,o).concat(r.slice(o+1)))}else t.filter_emojis=i}}}),t._v(" "),a("span",{key:r,staticClass:"filter-emoji",class:e.name,style:{"background-image":"url(/images/emojis/"+e.name+".png)"}},[t._v(t._s(e.name))])])])])})),0)]),t._v(" "),a("div",{staticClass:"btn-group"},[t._m(3),t._v(" "),a("ul",{staticClass:"dropdown-menu search-dropdown"},[a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_length,expression:"filter_length"}],attrs:{type:"checkbox",name:"length",id:"",value:"sort"},domProps:{checked:Array.isArray(t.filter_length)?t._i(t.filter_length,"sort")>-1:t.filter_length},on:{change:function(e){var a=t.filter_length,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,"sort");r.checked?i<0&&(t.filter_length=a.concat(["sort"])):i>-1&&(t.filter_length=a.slice(0,i).concat(a.slice(i+1)))}else t.filter_length=n}}}),t._v("\n                      Sort\n                    ")])])]),t._v(" "),a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_length,expression:"filter_length"}],attrs:{type:"checkbox",name:"length",id:"",value:"medium"},domProps:{checked:Array.isArray(t.filter_length)?t._i(t.filter_length,"medium")>-1:t.filter_length},on:{change:function(e){var a=t.filter_length,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,"medium");r.checked?i<0&&(t.filter_length=a.concat(["medium"])):i>-1&&(t.filter_length=a.slice(0,i).concat(a.slice(i+1)))}else t.filter_length=n}}}),t._v("\n                      Medium\n                    ")])])]),t._v(" "),a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_length,expression:"filter_length"}],attrs:{type:"checkbox",name:"length",id:"",value:"long"},domProps:{checked:Array.isArray(t.filter_length)?t._i(t.filter_length,"long")>-1:t.filter_length},on:{change:function(e){var a=t.filter_length,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,"long");r.checked?i<0&&(t.filter_length=a.concat(["long"])):i>-1&&(t.filter_length=a.slice(0,i).concat(a.slice(i+1)))}else t.filter_length=n}}}),t._v("\n                      Long\n                    ")])])])])]),t._v(" "),a("div",{staticClass:"btn-group"},[t._m(4),t._v(" "),a("ul",{staticClass:"dropdown-menu search-dropdown"},[a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_rated,expression:"filter_rated"}],attrs:{type:"checkbox",name:"rated",id:""},domProps:{value:0,checked:Array.isArray(t.filter_rated)?t._i(t.filter_rated,0)>-1:t.filter_rated},on:{change:function(e){var a=t.filter_rated,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,0);r.checked?i<0&&(t.filter_rated=a.concat([0])):i>-1&&(t.filter_rated=a.slice(0,i).concat(a.slice(i+1)))}else t.filter_rated=n}}}),t._v("\n                      G-rated\n                    ")])])]),t._v(" "),a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_rated,expression:"filter_rated"}],attrs:{type:"checkbox",name:"rated",id:""},domProps:{value:13,checked:Array.isArray(t.filter_rated)?t._i(t.filter_rated,13)>-1:t.filter_rated},on:{change:function(e){var a=t.filter_rated,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,13);r.checked?i<0&&(t.filter_rated=a.concat([13])):i>-1&&(t.filter_rated=a.slice(0,i).concat(a.slice(i+1)))}else t.filter_rated=n}}}),t._v("\n                      PG-rated\n                    ")])])]),t._v(" "),a("li",[a("div",{staticClass:"checkbox filter-item"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter_rated,expression:"filter_rated"}],attrs:{type:"checkbox",name:"rated",id:""},domProps:{value:18,checked:Array.isArray(t.filter_rated)?t._i(t.filter_rated,18)>-1:t.filter_rated},on:{change:function(e){var a=t.filter_rated,r=e.target,n=!!r.checked;if(Array.isArray(a)){var i=t._i(a,18);r.checked?i<0&&(t.filter_rated=a.concat([18])):i>-1&&(t.filter_rated=a.slice(0,i).concat(a.slice(i+1)))}else t.filter_rated=n}}}),t._v("\n                      R-rated\n                    ")])])])])]),t._v(" "),a("div",{staticClass:"map-column"},[a("a",{attrs:{href:t.mapUrl}},[a("img",{attrs:{src:"/images/png/map-icon-red.png",alt:""}}),t._v("\n                Map\n              ")])])])])])]),t._v(" "),0==t.search&&0==t.allThreads.length?a("div",{staticClass:"panel panel-default"},[t._m(5)]):t._e(),t._v(" "),t.search?a("div",{staticClass:"panel panel-default"},[t._m(6)]):t._e(),t._v(" "),t._l(t.showPaginatedItems,(function(t,e){return a("single-thread",{key:t.id,attrs:{thread:t}})})),t._v(" "),t.totalPage>1?a("nav",{attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},[1!=t.currentPage?a("li",{on:{click:function(e){return t.onPageChange(1)}}},[t._m(7)]):t._e(),t._v(" "),t._l(t.pageRange,(function(e){return a("li",{key:e,class:{active:t.currentPage==e},on:{click:function(a){return t.onPageChange(e)}}},[a("span",[t._v("\n            "+t._s(e)+"\n            "),a("span",{staticClass:"sr-only"},[t._v(t._s(e))])])])})),t._v(" "),t.currentPage!=t.totalPage?a("li",{on:{click:function(e){return t.onPageChange(t.totalPage)}}},[t._m(8)]):t._e()],2)]):t._e()],2),t._v(" "),a("div",{staticClass:"col-md-4"},[a("trending-thread")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link btn-xs dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                All Tags\n                "),e("span",{staticClass:"caret"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link btn-xs dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                All People\n                "),e("span",{staticClass:"caret"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link btn-xs dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                All Moods\n                "),e("span",{staticClass:"caret"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link btn-xs dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                All Lengths\n                "),e("span",{staticClass:"caret"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link btn-xs dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n                G/PG\n                "),e("span",{staticClass:"caret"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-body"},[e("h3",{staticClass:"text-center"},[this._v("No Results Found")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-body"},[e("h3",{staticClass:"text-center"},[this._v("Search.....")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("span",{attrs:{"aria-hidden":"true"}},[this._v("«")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("span",{attrs:{"aria-hidden":"true"}},[this._v("»")])])}],!1,null,"fc1420e2",null);e.default=o.exports},"D/99":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.row.filter-row[data-v-fc1420e2] {\n  /* margin-top: 10px; */\n}\n.filter-title[data-v-fc1420e2] {\n  margin-top: 10px;\n}\n.filter-emoji[data-v-fc1420e2] {\n  height: 24px;\n  background-color: transparent;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  display: flex;\n  margin-right: 20px;\n  padding-left: 30px;\n  align-items: center;\n}\n.filter-rated[data-v-fc1420e2] {\n  display: inline-flex;\n  margin-right: 20px;\n  padding-top: 3px;\n  margin-top: 10px;\n}\n.btn-link[data-v-fc1420e2] {\n  color: #636b6f;\n  text-decoration: none;\n}\n.btn-link[data-v-fc1420e2]:hover {\n  color: #636b6f;\n  text-decoration: none;\n}\n.btn-link[data-v-fc1420e2]:focus {\n  outline: none;\n  text-decoration: none;\n}\n.dropdown-menu.search-dropdown[data-v-fc1420e2] {\n  font-size: 12px;\n}\n.dropdown-menu.search-dropdown li a[data-v-fc1420e2]:hover {\n  background-color: #eeeeee;\n}\n.filter-item[data-v-fc1420e2] {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.6;\n  color: #333333;\n  white-space: nowrap;\n}\n.filter-item[data-v-fc1420e2]:hover {\n  background-color: #eeeeee;\n}\n.search-results-sorting[data-v-fc1420e2] {\n  display: flex;\n  align-items: center;\n  color: black;\n  font-size: 13px;\n}\n.search-results-sorting > *[data-v-fc1420e2] {\n  margin-right: 25px;\n}\n.sortBy[data-v-fc1420e2] {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: auto;\n  /* color: rgb(255, 67, 1); */\n  color: black;\n  font-weight: bold;\n  box-shadow: none;\n  font-size: 12px;\n}\n.sortBy[data-v-fc1420e2]:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\nhr[data-v-fc1420e2] {\n  margin: 5px 0;\n}\n.map-column a[data-v-fc1420e2] {\n  color: black;\n  font-size: 13px;\n  text-decoration: none;\n}\n.pagination li[data-v-fc1420e2] {\n  cursor: pointer;\n}\n.filter-search[data-v-fc1420e2] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.count-column[data-v-fc1420e2] {\n  font-size: 13px;\n}\n.dark[data-v-fc1420e2]{\n  color:black;\n}\n",""])},nfhl:function(t,e,a){"use strict";var r=a("o7kl");a.n(r).a},o7kl:function(t,e,a){var r=a("D/99");"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,n);r.locals&&(t.exports=r.locals)}}]);