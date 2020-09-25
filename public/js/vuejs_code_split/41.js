<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notifications: []
    };
  },
  created: function created() {
    var _this = this;

    this.fetchNotifications();
    Echo["private"]("App.User.".concat(window.App.user.id)).notification(function (notification) {
      //1this.notifications.unshift(notification)
      _this.fetchNotifications();

      if (notification.type != "App\\Notifications\\NewMessageNotification") {
        _this.playNotification();
      }
    });
  },
  computed: {
    unreadNotifications: function unreadNotifications() {
      return this.notifications.filter(function (notification) {
        //return notification.read_at == null;
        return notification.type != "App\\Notifications\\NewMessageNotification" && notification.read_at == null;
      });
    }
  },
  methods: {
    markAsRead: function markAsRead(notification) {
      var _this2 = this;

      axios["delete"]('/profiles/' + window.App.user.username + '/notifications/' + notification.id).then(function (res) {
        var notifications = _this2.notifications.filter(function (item) {
          return item.id != notification.id;
        });

        _this2.notifications = notifications;
      });
    },
    fetchNotifications: function fetchNotifications() {
      var _this3 = this;

      axios.get('/profiles/' + window.App.user.username + '/notifications').then(function (response) {
        return _this3.notifications = response.data;
      });
    },
    playNotification: function playNotification() {
      // let sound = new Audio('http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3');
      var sound = new Audio('https://notificationsounds.com/soundfiles/08b255a5d42b89b0585260b6f2360bdd/file-sounds-1137-eventually.mp3');
      sound.play();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "dropdown" }, [
    _c(
      "a",
      {
        staticClass: "dropdown-toggle",
        attrs: { href: "#", "data-toggle": "dropdown" }
      },
      [
        _c("img", {
          staticClass: "navbar-icon pen",
          attrs: { src: "/images/bell.png", alt: "" }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            staticStyle: {
              color: "red",
              "font-weight": "bold",
              "font-size": "16px"
            }
          },
          [_vm._v(_vm._s(_vm.unreadNotifications.length))]
        )
      ]
    ),
    _vm._v(" "),
    _vm.unreadNotifications.length
      ? _c(
          "ul",
          { staticClass: "dropdown-menu" },
          _vm._l(_vm.unreadNotifications, function(notification, index) {
            return _c("li", { key: index }, [
              _c("a", {
                attrs: { href: notification.data.link, target: "_blank" },
                domProps: { textContent: _vm._s(notification.data.message) },
                on: {
                  click: function($event) {
                    return _vm.markAsRead(notification)
                  }
                }
              })
            ])
          }),
          0
        )
      : _c("ul", { staticClass: "dropdown-menu" }, [_vm._m(0)])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#" } }, [_vm._v("No Notification")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/UserNotifications.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/UserNotifications.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserNotifications.vue?vue&type=template&id=c0045994& */ "./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&");
/* harmony import */ var _UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserNotifications.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/UserNotifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserNotifications.vue?vue&type=template&id=c0045994& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/UserNotifications.vue?vue&type=template&id=c0045994&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNotifications_vue_vue_type_template_id_c0045994___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"1lN3":function(t,e){function i(t,e){t.getMarkerClusterer().extend(i,google.maps.OverlayView),this.cluster_=t,this.className_=t.getMarkerClusterer().getClusterClass(),this.styles_=e,this.center_=null,this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(t.getMap())}function s(t){this.markerClusterer_=t,this.map_=t.getMap(),this.gridSize_=t.getGridSize(),this.minClusterSize_=t.getMinimumClusterSize(),this.averageCenter_=t.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new i(this,t.getStyles())}function r(t,e,i){this.extend(r,google.maps.OverlayView),e=e||[],i=i||{},this.markers_=[],this.clusters_=[],this.listeners_=[],this.activeMap_=null,this.ready_=!1,this.gridSize_=i.gridSize||60,this.minClusterSize_=i.minimumClusterSize||2,this.maxZoom_=i.maxZoom||null,this.styles_=i.styles||[],this.title_=i.title||"",this.zoomOnClick_=!0,void 0!==i.zoomOnClick&&(this.zoomOnClick_=i.zoomOnClick),this.averageCenter_=!1,void 0!==i.averageCenter&&(this.averageCenter_=i.averageCenter),this.ignoreHidden_=!1,void 0!==i.ignoreHidden&&(this.ignoreHidden_=i.ignoreHidden),this.enableRetinaIcons_=!1,void 0!==i.enableRetinaIcons&&(this.enableRetinaIcons_=i.enableRetinaIcons),this.imagePath_=i.imagePath||r.IMAGE_PATH,this.imageExtension_=i.imageExtension||r.IMAGE_EXTENSION,this.imageSizes_=i.imageSizes||r.IMAGE_SIZES,this.calculator_=i.calculator||r.CALCULATOR,this.batchSize_=i.batchSize||r.BATCH_SIZE,this.batchSizeIE_=i.batchSizeIE||r.BATCH_SIZE_IE,this.clusterClass_=i.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize_=this.batchSizeIE_),this.setupStyles_(),this.addMarkers(e,!0),this.setMap(t)}i.prototype.onAdd=function(){var t,e,i=this;this.div_=document.createElement("div"),this.div_.className=this.className_,this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",(function(){e=t})),google.maps.event.addDomListener(this.div_,"mousedown",(function(){t=!0,e=!1})),google.maps.event.addDomListener(this.div_,"click",(function(s){if(t=!1,!e){var r,o,n=i.cluster_.getMarkerClusterer();google.maps.event.trigger(n,"click",i.cluster_),google.maps.event.trigger(n,"clusterclick",i.cluster_),n.getZoomOnClick()&&(o=n.getMaxZoom(),r=i.cluster_.getBounds(),n.getMap().fitBounds(r),setTimeout((function(){n.getMap().fitBounds(r),null!==o&&n.getMap().getZoom()>o&&n.getMap().setZoom(o+1)}),100)),s.cancelBubble=!0,s.stopPropagation&&s.stopPropagation()}})),google.maps.event.addDomListener(this.div_,"mouseover",(function(){var t=i.cluster_.getMarkerClusterer();google.maps.event.trigger(t,"mouseover",i.cluster_)})),google.maps.event.addDomListener(this.div_,"mouseout",(function(){var t=i.cluster_.getMarkerClusterer();google.maps.event.trigger(t,"mouseout",i.cluster_)}))},i.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},i.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},i.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},i.prototype.show=function(){if(this.div_){var t="",e=this.backgroundPosition_.split(" "),i=parseInt(e[0].replace(/^\s+|\s+$/g,""),10),s=parseInt(e[1].replace(/^\s+|\s+$/g,""),10),r=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(r),t="<img src='"+this.url_+"' style='position: absolute; top: "+s+"px; left: "+i+"px; ",this.cluster_.getMarkerClusterer().enableRetinaIcons_||(t+="clip: rect("+-1*s+"px, "+(-1*i+this.width_)+"px, "+(-1*s+this.height_)+"px, "+-1*i+"px);"),t+="'>",this.div_.innerHTML=t+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>",void 0===this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""}this.visible_=!0},i.prototype.useStyle=function(t){this.sums_=t;var e=Math.max(0,t.index-1);e=Math.min(this.styles_.length-1,e);var i=this.styles_[e];this.url_=i.url,this.height_=i.height,this.width_=i.width,this.anchorText_=i.anchorText||[0,0],this.anchorIcon_=i.anchorIcon||[parseInt(this.height_/2,10),parseInt(this.width_/2,10)],this.textColor_=i.textColor||"black",this.textSize_=i.textSize||11,this.textDecoration_=i.textDecoration||"none",this.fontWeight_=i.fontWeight||"bold",this.fontStyle_=i.fontStyle||"normal",this.fontFamily_=i.fontFamily||"Arial,sans-serif",this.backgroundPosition_=i.backgroundPosition||"0 0"},i.prototype.setCenter=function(t){this.center_=t},i.prototype.createCss=function(t){var e=[];return e.push("cursor: pointer;"),e.push("position: absolute; top: "+t.y+"px; left: "+t.x+"px;"),e.push("width: "+this.width_+"px; height: "+this.height_+"px;"),e.join("")},i.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x-=this.anchorIcon_[1],e.y-=this.anchorIcon_[0],e.x=parseInt(e.x,10),e.y=parseInt(e.y,10),e},s.prototype.getSize=function(){return this.markers_.length},s.prototype.getMarkers=function(){return this.markers_},s.prototype.getCenter=function(){return this.center_},s.prototype.getMap=function(){return this.map_},s.prototype.getMarkerClusterer=function(){return this.markerClusterer_},s.prototype.getBounds=function(){var t,e=new google.maps.LatLngBounds(this.center_,this.center_),i=this.getMarkers();for(t=0;t<i.length;t++)e.extend(i[t].getPosition());return e},s.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},s.prototype.addMarker=function(t){var e,i,s;if(this.isMarkerAlreadyAdded_(t))return!1;if(this.center_){if(this.averageCenter_){var r=this.markers_.length+1,o=(this.center_.lat()*(r-1)+t.getPosition().lat())/r,n=(this.center_.lng()*(r-1)+t.getPosition().lng())/r;this.center_=new google.maps.LatLng(o,n),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();if(t.isAdded=!0,this.markers_.push(t),i=this.markers_.length,null!==(s=this.markerClusterer_.getMaxZoom())&&this.map_.getZoom()>s)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i<this.minClusterSize_)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i===this.minClusterSize_)for(e=0;e<i;e++)this.markers_[e].setMap(null);else t.setMap(null);return this.updateIcon_(),!0},s.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},s.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},s.prototype.updateIcon_=function(){var t=this.markers_.length,e=this.markerClusterer_.getMaxZoom();if(null!==e&&this.map_.getZoom()>e)this.clusterIcon_.hide();else if(t<this.minClusterSize_)this.clusterIcon_.hide();else{var i=this.markerClusterer_.getStyles().length,s=this.markerClusterer_.getCalculator()(this.markers_,i);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(s),this.clusterIcon_.show()}},s.prototype.isMarkerAlreadyAdded_=function(t){var e;if(this.markers_.indexOf)return-1!==this.markers_.indexOf(t);for(e=0;e<this.markers_.length;e++)if(t===this.markers_[e])return!0;return!1},r.prototype.onAdd=function(){var t=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",(function(){t.resetViewport_(!1),this.getZoom()!==(this.get("minZoom")||0)&&this.getZoom()!==this.get("maxZoom")||google.maps.event.trigger(this,"idle")})),google.maps.event.addListener(this.getMap(),"idle",(function(){t.redraw_()}))]},r.prototype.onRemove=function(){var t;for(t=0;t<this.markers_.length;t++)this.markers_[t].getMap()!==this.activeMap_&&this.markers_[t].setMap(this.activeMap_);for(t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();for(this.clusters_=[],t=0;t<this.listeners_.length;t++)google.maps.event.removeListener(this.listeners_[t]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},r.prototype.draw=function(){},r.prototype.setupStyles_=function(){var t,e;if(!(this.styles_.length>0))for(t=0;t<this.imageSizes_.length;t++)e=this.imageSizes_[t],this.styles_.push({url:this.imagePath_+(t+1)+"."+this.imageExtension_,height:e,width:e})},r.prototype.fitMapToMarkers=function(){var t,e=this.getMarkers(),i=new google.maps.LatLngBounds;for(t=0;t<e.length;t++)i.extend(e[t].getPosition());this.getMap().fitBounds(i)},r.prototype.getGridSize=function(){return this.gridSize_},r.prototype.setGridSize=function(t){this.gridSize_=t},r.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},r.prototype.setMinimumClusterSize=function(t){this.minClusterSize_=t},r.prototype.getMaxZoom=function(){return this.maxZoom_},r.prototype.setMaxZoom=function(t){this.maxZoom_=t},r.prototype.getStyles=function(){return this.styles_},r.prototype.setStyles=function(t){this.styles_=t},r.prototype.getTitle=function(){return this.title_},r.prototype.setTitle=function(t){this.title_=t},r.prototype.getZoomOnClick=function(){return this.zoomOnClick_},r.prototype.setZoomOnClick=function(t){this.zoomOnClick_=t},r.prototype.getAverageCenter=function(){return this.averageCenter_},r.prototype.setAverageCenter=function(t){this.averageCenter_=t},r.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},r.prototype.setIgnoreHidden=function(t){this.ignoreHidden_=t},r.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},r.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons_=t},r.prototype.getImageExtension=function(){return this.imageExtension_},r.prototype.setImageExtension=function(t){this.imageExtension_=t},r.prototype.getImagePath=function(){return this.imagePath_},r.prototype.setImagePath=function(t){this.imagePath_=t},r.prototype.getImageSizes=function(){return this.imageSizes_},r.prototype.setImageSizes=function(t){this.imageSizes_=t},r.prototype.getCalculator=function(){return this.calculator_},r.prototype.setCalculator=function(t){this.calculator_=t},r.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},r.prototype.setBatchSizeIE=function(t){this.batchSizeIE_=t},r.prototype.getClusterClass=function(){return this.clusterClass_},r.prototype.setClusterClass=function(t){this.clusterClass_=t},r.prototype.getMarkers=function(){return this.markers_},r.prototype.getTotalMarkers=function(){return this.markers_.length},r.prototype.getClusters=function(){return this.clusters_},r.prototype.getTotalClusters=function(){return this.clusters_.length},r.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw_()},r.prototype.addMarkers=function(t,e){var i;for(i in t)t.hasOwnProperty(i)&&this.pushMarkerTo_(t[i]);e||this.redraw_()},r.prototype.pushMarkerTo_=function(t){if(t.getDraggable()){var e=this;google.maps.event.addListener(t,"dragend",(function(){e.ready_&&(this.isAdded=!1,e.repaint())}))}t.isAdded=!1,this.markers_.push(t)},r.prototype.removeMarker=function(t,e){var i=this.removeMarker_(t);return!e&&i&&this.repaint(),i},r.prototype.removeMarkers=function(t,e){var i,s,r=!1;for(i=0;i<t.length;i++)s=this.removeMarker_(t[i]),r=r||s;return!e&&r&&this.repaint(),r},r.prototype.removeMarker_=function(t){var e,i=-1;if(this.markers_.indexOf)i=this.markers_.indexOf(t);else for(e=0;e<this.markers_.length;e++)if(t===this.markers_[e]){i=e;break}return-1!==i&&(t.setMap(null),this.markers_.splice(i,1),!0)},r.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},r.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout((function(){var e;for(e=0;e<t.length;e++)t[e].remove()}),0)},r.prototype.getExtendedBounds=function(t){var e=this.getProjection(),i=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),s=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),r=e.fromLatLngToDivPixel(i);r.x+=this.gridSize_,r.y-=this.gridSize_;var o=e.fromLatLngToDivPixel(s);o.x-=this.gridSize_,o.y+=this.gridSize_;var n=e.fromDivPixelToLatLng(r),a=e.fromDivPixelToLatLng(o);return t.extend(n),t.extend(a),t},r.prototype.redraw_=function(){this.createClusters_(0)},r.prototype.resetViewport_=function(t){var e,i;for(e=0;e<this.clusters_.length;e++)this.clusters_[e].remove();for(this.clusters_=[],e=0;e<this.markers_.length;e++)(i=this.markers_[e]).isAdded=!1,t&&i.setMap(null)},r.prototype.distanceBetweenPoints_=function(t,e){var i=(e.lat()-t.lat())*Math.PI/180,s=(e.lng()-t.lng())*Math.PI/180,r=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2);return 6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))},r.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},r.prototype.addToClosestCluster_=function(t){var e,i,r,o,n=4e4,a=null;for(e=0;e<this.clusters_.length;e++)(o=(r=this.clusters_[e]).getCenter())&&(i=this.distanceBetweenPoints_(o,t.getPosition()))<n&&(n=i,a=r);a&&a.isMarkerInClusterBounds(t)?a.addMarker(t):((r=new s(this)).addMarker(t),this.clusters_.push(r))},r.prototype.createClusters_=function(t){var e,i,s,r=this;if(this.ready_){0===t&&(google.maps.event.trigger(this,"clusteringbegin",this),void 0!==this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),s=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var o=this.getExtendedBounds(s),n=Math.min(t+this.batchSize_,this.markers_.length);for(e=t;e<n;e++)!(i=this.markers_[e]).isAdded&&this.isMarkerInBounds_(i,o)&&(!this.ignoreHidden_||this.ignoreHidden_&&i.getVisible())&&this.addToClosestCluster_(i);n<this.markers_.length?this.timerRefStatic=setTimeout((function(){r.createClusters_(n)}),0):(delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this))}},r.prototype.extend=function(t,e){return function(t){var e;for(e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},r.CALCULATOR=function(t,e){for(var i=0,s=t.length.toString(),r=s;0!==r;)r=parseInt(r/10,10),i++;return{text:s,index:i=Math.min(i,e),title:""}},r.BATCH_SIZE=2e3,r.BATCH_SIZE_IE=500,r.IMAGE_PATH="https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m",r.IMAGE_EXTENSION="png",r.IMAGE_SIZES=[53,56,66,78,90],t.exports=r},rmaT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(i("1lN3")),r=o(i("t9nt"));function o(t){return t&&t.__esModule?t:{default:t}}var n={maxZoom:{type:Number,twoWay:!1},batchSizeIE:{type:Number,twoWay:!1},calculator:{type:Function,twoWay:!1},enableRetinaIcons:{type:Boolean,twoWay:!1},gridSize:{type:Number,twoWay:!1},ignoreHidden:{type:Boolean,twoWay:!1},imageExtension:{type:String,twoWay:!1},imagePath:{type:String,twoWay:!1},imageSizes:{type:Array,twoWay:!1},minimumClusterSize:{type:Number,twoWay:!1},styles:{type:Array,twoWay:!1},zoomOnClick:{type:Boolean,twoWay:!1}};e.default=(0,r.default)({mappedProps:n,events:["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"],name:"cluster",ctr:function(){if(void 0===s.default)throw console.error("MarkerClusterer is not installed! require() it or include it from https://cdnjs.cloudflare.com/ajax/libs/js-marker-clusterer/1.0.0/markerclusterer.js"),new Error("MarkerClusterer is not installed! require() it or include it from https://cdnjs.cloudflare.com/ajax/libs/js-marker-clusterer/1.0.0/markerclusterer.js");return s.default},ctrArgs:function(t){return[t.map,[],function(t,e){var i={};for(var s in t)e.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s]);return i}(t,["map"])]},render:function(t){return t("div",this.$slots.default)},afterCreate:function(t){var e=function(){var e=t.getMarkers();t.clearMarkers(),t.addMarkers(e)};for(var i in n)n[i].twoWay&&this.$on(i.toLowerCase()+"_changed",e)},updated:function(){this.$clusterObject&&this.$clusterObject.repaint()},beforeDestroy:function(){var t=this;this.$children.forEach((function(e){e.$clusterObject===t.$clusterObject&&(e.$clusterObject=null)})),this.$clusterObject&&this.$clusterObject.clearMarkers()}})}}]);
>>>>>>> social
