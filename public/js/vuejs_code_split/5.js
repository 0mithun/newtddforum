(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4dN8":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.loading{\n    position: absolute;\n    left: 0;\n    /* right: 0; */\n    z-index: 99999;\n    top: 0;\n    background: rgba(0,0,0,0.4);\n    height: 100%;\n    width: 100%;\n}\n.loading .image{\n  position: absolute;\n    left: 48%;\n    /* right: 0; */\n    top: 48%;\n}\n",""])},G7Qv:function(t,n,e){var i=e("4dN8");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},VrPh:function(t,n,e){"use strict";var i=e("G7Qv");e.n(i).a},WOeA:function(t,n,e){"use strict";e.r(n);var i={props:["thread"],data:function(){return{drawer:null,results:[]}},methods:{focusMarker:function(t){eventBus.$emit("markers_result_clicked",t)},openThread:function(){window.open(this.thread.path,"_blank")}},created:function(){var t=this;eventBus.$on("markers_fetched",(function(n){t.results=n.results}))}},o=(e("bJH/"),e("KHd+")),a={props:["userlat","userlng","nearest"],components:{InfoContent:Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"info-content",on:{click:t.openThread}},[e("h5",{staticClass:"thread-title"},[t._v(t._s(t.thread.title))]),t._v(" "),e("div",{staticClass:"info-content-body"},[e("div",{staticClass:"info-content-thread-thumb"},[e("img",{staticClass:"thread-thumb",attrs:{src:t.thread.threadImagePath,alt:""}})]),t._v(" "),e("div",{staticClass:"thread-counts"},[e("view-counts",{attrs:{thread:t.thread}}),t._v(" "),e("point-counts",{attrs:{thread:t.thread}}),t._v(" "),e("emoji-counts",{attrs:{thread:t.thread}})],1)])])}),[],!1,null,"0e0c8863",null).exports},data:function(){return{loading:!1,query:"",center:{lat:parseFloat(this.userlat),lng:parseFloat(this.userlng)},mapCenter:{lat:parseFloat(this.userlat),lng:parseFloat(this.userlng)},fetchRunningCenter:null,markers:[],results:[],zoom:5,infoContent:null,infoWindowPos:{lat:0,lng:0},infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},methods:{centerChanged:function(t){var n={lat:t.lat(),lng:t.lng()};this.fetchRunningCenter=n,this.fetchLocations()},clicked:function(t){this.mapCenter.lat=t.latLng.lat(),this.mapCenter.lng=t.latLng.lng(),this.loading=!0,this.fetchLocations()},fetchLocations:function(){var t=this;if(""==this.query&&(NaN==this.center.lat||NaN==this.center.lng)){if(!navigator.geolocation)return void alert("You must provide your location first");navigator.geolocation.getCurrentPosition((function(n){var e=n.coords.latitude,i=n.coords.longitude;t.center.lat=e,t.center.lng=i,t.mapCenter.lat=e,t.mapCenter.lng=i}))}axios.post("/map/all-threads",{center:null!=this.fetchRunningCenter?this.fetchRunningCenter:this.center,query:this.query}).then((function(n){var e=n.data;"failed"==n.data.status?alert("You must provide your location first"):(eventBus.$emit("markers_fetched",e),t.fetchRunningCenter)}))},toggleInfoWindow:function(t,n){var e={lat:this.results[n].lat,lng:this.results[n].lng};this.mapCenter=e,this.zoom<10&&(this.zoom=this.zoom+1),this.infoWindowPos=t.position,this.infoContent=this.results[n],this.currentMidx==n?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=n),this.fetchLocations()}},created:function(){var t=this;this.query=location.search,this.fetchLocations(),eventBus.$on("markers_fetched",(function(n){if(t.markers=n.markers,t.results=n.results,t.markers.length>0){Math.floor(Math.random()*Math.floor(t.markers.length));t.loading=!1}})),eventBus.$on("markers_result_clicked",(function(n){var e=t.markers[n];t.mapCenter=e.position,t.toggleInfoWindow(e,n)})),eventBus.$on("zoom_decreased",(function(n){t.zoom=n})),eventBus.$on("change_center",(function(n){t.mapCenter=n})),eventBus.$on("query_removed",(function(){t.query="";var n=window.location.toString();if(n.indexOf("?")>0){var e=n.substring(0,n.indexOf("?"));window.history.replaceState({},document.title,e)}}))}},r=(e("VrPh"),Object(o.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.loading?e("div",{staticClass:"loading"},[t._m(0)]):t._e(),t._v(" "),e("div",[e("GmapMap",{staticStyle:{width:"100%",height:"85vh"},attrs:{center:t.mapCenter,zoom:t.zoom,"map-type-id":"terrain",options:{zoomControl:!0}},on:{center_changed:t.centerChanged,click:t.clicked}},[t._l(t.markers,(function(n,i){return e("GmapMarker",{key:i,attrs:{position:n.position,clickable:!0,draggable:!1},on:{click:function(e){return t.toggleInfoWindow(n,i)}}})})),t._v(" "),e("GmapMarker",{attrs:{position:t.center,clickable:!0,draggable:!1},on:{click:function(n){return t.toggleInfoWindow(t.m,t.index)}}}),t._v(" "),e("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(n){t.infoWinOpen=!1}}},[null!=this.infoContent?e("info-content",{attrs:{thread:t.infoContent}}):t._e()],1)],2)],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"image"},[n("img",{attrs:{src:"/images/loading.gif",alt:""}}),this._v(" "),n("h4",{staticStyle:{color:"white","font-weignt":"bold"}},[this._v("Loading....")])])}],!1,null,null,null));n.default=r.exports},"bJH/":function(t,n,e){"use strict";var i=e("w80i");e.n(i).a},rhgS:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.info-content[data-v-0e0c8863] {\n  cursor: pointer;\n  max-width: 10vw;\n}\n.info-content-body[data-v-0e0c8863] {\n  display: flex;\n  justify-content: space-between;\n}\n.info-content-thread-thumb[data-v-0e0c8863] {\n  margin-right: 5%;\n  width: 50%;\n}\n.thread-thumb[data-v-0e0c8863] {\n  max-width: 100%;\n  height: auto;\n  display: inline-block;\n  height: 60px;\n}\n.thread-counts[data-v-0e0c8863] {\n  width: 45%;\n  width: 45%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n.thread-title[data-v-0e0c8863] {\n  color: black;\n}\n",""])},w80i:function(t,n,e){var i=e("rhgS");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)}}]);