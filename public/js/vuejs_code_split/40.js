(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{TiIQ:function(t,e,n){var i,o,r;r=this,i=[n("EVdn")],void 0===(o=function(t){return r.returnExportsGlobal=function(t){"use strict";var e,n,i,o,r,s,a,l;e=function(){function e(t){this.$inputor=t,this.domInputor=this.$inputor[0]}return e.prototype.setPos=function(t){var e,n,i,o;return(o=a.getSelection())&&(i=0,n=!1,(e=function(t,r){var a,l,h,u,c,p;for(p=[],h=0,u=(c=r.childNodes).length;h<u&&(a=c[h],!n);h++)if(3===a.nodeType){if(i+a.length>=t){n=!0,(l=s.createRange()).setStart(a,t-i),o.removeAllRanges(),o.addRange(l);break}p.push(i+=a.length)}else p.push(e(t,a));return p})(t,this.domInputor)),this.domInputor},e.prototype.getIEPosition=function(){return this.getPosition()},e.prototype.getPosition=function(){var t,e;return e=this.getOffset(),t=this.$inputor.offset(),e.left-=t.left,e.top-=t.top,e},e.prototype.getOldIEPos=function(){var t,e;return e=s.selection.createRange(),(t=s.body.createTextRange()).moveToElementText(this.domInputor),t.setEndPoint("EndToEnd",e),t.text.length},e.prototype.getPos=function(){var t,e,n;return(n=this.range())?((t=n.cloneRange()).selectNodeContents(this.domInputor),t.setEnd(n.endContainer,n.endOffset),e=t.toString().length,t.detach(),e):s.selection?this.getOldIEPos():void 0},e.prototype.getOldIEOffset=function(){var t,e;return(t=s.selection.createRange().duplicate()).moveStart("character",-1),{height:(e=t.getBoundingClientRect()).bottom-e.top,left:e.left,top:e.top}},e.prototype.getOffset=function(e){var n,i,o,r,l;return a.getSelection&&(o=this.range())?(o.endOffset-1>0&&o.endContainer!==this.domInputor&&((n=o.cloneRange()).setStart(o.endContainer,o.endOffset-1),n.setEnd(o.endContainer,o.endOffset),i={height:(r=n.getBoundingClientRect()).height,left:r.left+r.width,top:r.top},n.detach()),i&&0!==(null!=i?i.height:void 0)||(n=o.cloneRange(),l=t(s.createTextNode("|")),n.insertNode(l[0]),n.selectNode(l[0]),i={height:(r=n.getBoundingClientRect()).height,left:r.left,top:r.top},l.remove(),n.detach())):s.selection&&(i=this.getOldIEOffset()),i&&(i.top+=t(a).scrollTop(),i.left+=t(a).scrollLeft()),i},e.prototype.range=function(){var t;if(a.getSelection)return(t=a.getSelection()).rangeCount>0?t.getRangeAt(0):null},e}(),n=function(){function e(t){this.$inputor=t,this.domInputor=this.$inputor[0]}return e.prototype.getIEPos=function(){var t,e,n,i,o,r;return e=this.domInputor,i=0,(o=s.selection.createRange())&&o.parentElement()===e&&(n=e.value.replace(/\r\n/g,"\n").length,(r=e.createTextRange()).moveToBookmark(o.getBookmark()),(t=e.createTextRange()).collapse(!1),i=r.compareEndPoints("StartToEnd",t)>-1?n:-r.moveStart("character",-n)),i},e.prototype.getPos=function(){return s.selection?this.getIEPos():this.domInputor.selectionStart},e.prototype.setPos=function(t){var e,n;return e=this.domInputor,s.selection?((n=e.createTextRange()).move("character",t),n.select()):e.setSelectionRange&&e.setSelectionRange(t,t),e},e.prototype.getIEOffset=function(t){var e;return e=this.domInputor.createTextRange(),t||(t=this.getPos()),e.move("character",t),{left:e.boundingLeft,top:e.boundingTop,height:e.boundingHeight}},e.prototype.getOffset=function(e){var n,i,o;return n=this.$inputor,s.selection?((i=this.getIEOffset(e)).top+=t(a).scrollTop()+n.scrollTop(),i.left+=t(a).scrollLeft()+n.scrollLeft(),i):(i=n.offset(),o=this.getPosition(e),{left:i.left+o.left-n.scrollLeft(),top:i.top+o.top-n.scrollTop(),height:o.height})},e.prototype.getPosition=function(t){var e,n,o,r,s;return e=this.$inputor,o=function(t){return t=t.replace(/<|>|`|"|&/g,"?").replace(/\r\n|\r|\n/g,"<br/>"),/firefox/i.test(navigator.userAgent)&&(t=t.replace(/\s/g,"&nbsp;")),t},void 0===t&&(t=this.getPos()),s=e.val().slice(0,t),n=e.val().slice(t),r="<span style='position: relative; display: inline;'>"+o(s)+"</span>",r+="<span id='caret' style='position: relative; display: inline;'>|</span>",r+="<span style='position: relative; display: inline;'>"+o(n)+"</span>",new i(e).create(r).rect()},e.prototype.getIEPosition=function(t){var e,n;return n=this.getIEOffset(t),e=this.$inputor.offset(),{left:n.left-e.left,top:n.top-e.top,height:n.height}},e}(),i=function(){function e(t){this.$inputor=t}return e.prototype.css_attr=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopWidth","boxSizing","fontFamily","fontSize","fontWeight","height","letterSpacing","lineHeight","marginBottom","marginLeft","marginRight","marginTop","outlineWidth","overflow","overflowX","overflowY","paddingBottom","paddingLeft","paddingRight","paddingTop","textAlign","textOverflow","textTransform","whiteSpace","wordBreak","wordWrap"],e.prototype.mirrorCss=function(){var e,n=this;return e={position:"absolute",left:-9999,top:0,zIndex:-2e4},"TEXTAREA"===this.$inputor.prop("tagName")&&this.css_attr.push("width"),t.each(this.css_attr,(function(t,i){return e[i]=n.$inputor.css(i)})),e},e.prototype.create=function(e){return this.$mirror=t("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(e),this.$inputor.after(this.$mirror),this},e.prototype.rect=function(){var t,e,n;return n={left:(e=(t=this.$mirror.find("#caret")).position()).left,top:e.top,height:t.height()},this.$mirror.remove(),n},e}(),o={contentEditable:function(t){return!(!t[0].contentEditable||"true"!==t[0].contentEditable)}},r={pos:function(t){return t||0===t?this.setPos(t):this.getPos()},position:function(t){return s.selection?this.getIEPosition(t):this.getPosition(t)},offset:function(t){return this.getOffset(t)}},s=null,a=null,l=function(t){var e;return(e=null!=t?t.iframe:void 0)?(a=e.contentWindow,s=e.contentDocument||a.document):(a=window,s=document)},t.fn.caret=function(i,s,a){var h;return r[i]?(t.isPlainObject(s)?(l(s),s=void 0):l(a),h=o.contentEditable(this)?new e(this):new n(this),r[i].apply(h,[s])):t.error("Method "+i+" does not exist on jQuery.caret")},t.fn.caret.EditableCaret=e,t.fn.caret.InputCaret=n,t.fn.caret.Utils=o,t.fn.caret.apis=r}(t)}.apply(e,i))||(t.exports=o)},bKju:function(t,e,n){var i,o;i=[n("EVdn")],void 0===(o=function(t){return function(t){var e,n,i;n={ESC:27,TAB:9,ENTER:13,CTRL:17,A:65,P:80,N:78,LEFT:37,UP:38,RIGHT:39,DOWN:40,BACKSPACE:8,SPACE:32},e={beforeSave:function(t){return o.arrayToDefaultHash(t)},matcher:function(t,e,n,i){var o,r,s;return t=t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),n&&(t="(?:^|\\s)"+t),o=decodeURI("%C3%80"),r=decodeURI("%C3%BF"),(s=new RegExp(t+"([A-Za-z"+o+"-"+r+"0-9_"+(i?" ":"")+"'.+-]*)$|"+t+"([^\\x00-\\xff]*)$","gi").exec(e))?s[2]||s[1]:null},filter:function(t,e,n){var i,o,r,s;for(i=[],o=0,s=e.length;o<s;o++)r=e[o],~new String(r[n]).toLowerCase().indexOf(t.toLowerCase())&&i.push(r);return i},remoteFilter:null,sorter:function(t,e,n){var i,o,r,s;if(!t)return e;for(i=[],o=0,s=e.length;o<s;o++)(r=e[o]).atwho_order=new String(r[n]).toLowerCase().indexOf(t.toLowerCase()),r.atwho_order>-1&&i.push(r);return i.sort((function(t,e){return t.atwho_order-e.atwho_order}))},tplEval:function(t,e){var n;n=t;try{return"string"!=typeof t&&(n=t(e)),n.replace(/\$\{([^\}]*)\}/g,(function(t,n,i){return e[n]}))}catch(t){return""}},highlighter:function(t,e){var n;return e?(n=new RegExp(">\\s*([^<]*?)("+e.replace("+","\\+")+")([^<]*)\\s*<","ig"),t.replace(n,(function(t,e,n,i){return"> "+e+"<strong>"+n+"</strong>"+i+" <"}))):t},beforeInsert:function(t,e,n){return t},beforeReposition:function(t){return t},afterMatchFailed:function(t,e){}},i=function(){function e(e){this.currentFlag=null,this.controllers={},this.aliasMaps={},this.$inputor=t(e),this.setupRootElement(),this.listen()}return e.prototype.createContainer=function(e){var n;return null!=(n=this.$el)&&n.remove(),t(e.body).append(this.$el=t("<div class='atwho-container'></div>"))},e.prototype.setupRootElement=function(e,n){var i,o;if(null==n&&(n=!1),e)this.window=e.contentWindow,this.document=e.contentDocument||this.window.document,this.iframe=e;else{this.document=this.$inputor[0].ownerDocument,this.window=this.document.defaultView||this.document.parentWindow;try{this.iframe=this.window.frameElement}catch(o){if(i=o,this.iframe=null,t.fn.atwho.debug)throw new Error("iframe auto-discovery is failed.\nPlease use `setIframe` to set the target iframe manually.\n"+i)}}return this.createContainer((this.iframeAsRoot=n)?this.document:document)},e.prototype.controller=function(t){var e,n,i,o;if(this.aliasMaps[t])n=this.controllers[this.aliasMaps[t]];else for(i in o=this.controllers)if(e=o[i],i===t){n=e;break}return n||this.controllers[this.currentFlag]},e.prototype.setContextFor=function(t){return this.currentFlag=t,this},e.prototype.reg=function(t,e){var n,i;return i=(n=this.controllers)[t]||(n[t]=this.$inputor.is("[contentEditable]")?new a(this,t):new s(this,t)),e.alias&&(this.aliasMaps[e.alias]=t),i.init(e),this},e.prototype.listen=function(){return this.$inputor.on("compositionstart",(t=this,function(e){var n;return null!=(n=t.controller())&&n.view.hide(),t.isComposing=!0,null})).on("compositionend",function(t){return function(e){return t.isComposing=!1,setTimeout((function(e){return t.dispatch(e)})),null}}(this)).on("keyup.atwhoInner",function(t){return function(e){return t.onKeyup(e)}}(this)).on("keydown.atwhoInner",function(t){return function(e){return t.onKeydown(e)}}(this)).on("blur.atwhoInner",function(t){return function(e){var n;if(n=t.controller())return n.expectedQueryCBId=null,n.view.hide(e,n.getOpt("displayTimeout"))}}(this)).on("click.atwhoInner",function(t){return function(e){return t.dispatch(e)}}(this)).on("scroll.atwhoInner",function(t){return function(){var e;return e=t.$inputor.scrollTop(),function(n){var i,o;return i=n.target.scrollTop,e!==i&&null!=(o=t.controller())&&o.view.hide(n),e=i,!0}}}(this)());var t},e.prototype.shutdown=function(){var t,e;for(t in e=this.controllers)e[t].destroy(),delete this.controllers[t];return this.$inputor.off(".atwhoInner"),this.$el.remove()},e.prototype.dispatch=function(t){var e,n,i,o;for(e in o=[],i=this.controllers)n=i[e],o.push(n.lookUp(t));return o},e.prototype.onKeyup=function(e){var i;switch(e.keyCode){case n.ESC:e.preventDefault(),null!=(i=this.controller())&&i.view.hide();break;case n.DOWN:case n.UP:case n.CTRL:case n.ENTER:t.noop();break;case n.P:case n.N:e.ctrlKey||this.dispatch(e);break;default:this.dispatch(e)}},e.prototype.onKeydown=function(e){var i,o;if((o=null!=(i=this.controller())?i.view:void 0)&&o.visible())switch(e.keyCode){case n.ESC:e.preventDefault(),o.hide(e);break;case n.UP:e.preventDefault(),o.prev();break;case n.DOWN:e.preventDefault(),o.next();break;case n.P:if(!e.ctrlKey)return;e.preventDefault(),o.prev();break;case n.N:if(!e.ctrlKey)return;e.preventDefault(),o.next();break;case n.TAB:case n.ENTER:case n.SPACE:if(!o.visible())return;if(!this.controller().getOpt("spaceSelectsMatch")&&e.keyCode===n.SPACE)return;if(!this.controller().getOpt("tabSelectsMatch")&&e.keyCode===n.TAB)return;o.highlighted()?(e.preventDefault(),o.choose(e)):o.hide(e);break;default:t.noop()}},e}();var o,r=[].slice;o=function(){function n(e,n){this.app=e,this.at=n,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||this.uid(),this.expectedQueryCBId=null,this.setting=null,this.query=null,this.pos=0,this.range=null,0===(this.$el=t("#atwho-ground-"+this.id,this.app.$el)).length&&this.app.$el.append(this.$el=t("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new l(this),this.view=new h(this)}return n.prototype.uid=function(){return(Math.random().toString(16)+"000000000").substr(2,8)+(new Date).getTime()},n.prototype.init=function(e){return this.setting=t.extend({},this.setting||t.fn.atwho.default,e),this.view.init(),this.model.reload(this.setting.data)},n.prototype.destroy=function(){return this.trigger("beforeDestroy"),this.model.destroy(),this.view.destroy(),this.$el.remove()},n.prototype.callDefault=function(){var n,i,o,s;s=arguments[0],n=2<=arguments.length?r.call(arguments,1):[];try{return e[s].apply(this,n)}catch(o){return i=o,t.error(i+" Or maybe At.js doesn't have function "+s)}},n.prototype.trigger=function(t,e){var n,i;return null==e&&(e=[]),e.push(this),i=(n=this.getOpt("alias"))?t+"-"+n+".atwho":t+".atwho",this.$inputor.trigger(i,e)},n.prototype.callbacks=function(t){return this.getOpt("callbacks")[t]||e[t]},n.prototype.getOpt=function(t,e){try{return this.setting[t]}catch(t){return null}},n.prototype.insertContentFor=function(e){var n,i;return i=this.getOpt("insertTpl"),n=t.extend({},e.data("item-data"),{"atwho-at":this.at}),this.callbacks("tplEval").call(this,i,n,"onInsert")},n.prototype.renderView=function(t){var e;return e=this.getOpt("searchKey"),t=this.callbacks("sorter").call(this,this.query.text,t.slice(0,1001),e),this.view.render(t.slice(0,this.getOpt("limit")))},n.arrayToDefaultHash=function(e){var n,i,o,r;if(!t.isArray(e))return e;for(r=[],n=0,o=e.length;n<o;n++)i=e[n],t.isPlainObject(i)?r.push(i):r.push({name:i});return r},n.prototype.lookUp=function(t){var e,n;if((!t||"click"!==t.type||this.getOpt("lookUpOnClick"))&&(!this.getOpt("suspendOnComposing")||!this.app.isComposing))return(e=this.catchQuery(t))?(this.app.setContextFor(this.at),(n=this.getOpt("delay"))?this._delayLookUp(e,n):this._lookUp(e),e):(this.expectedQueryCBId=null,e)},n.prototype._delayLookUp=function(t,e){var n,i,o;return n=Date.now?Date.now():(new Date).getTime(),this.previousCallTime||(this.previousCallTime=n),0<(i=e-(n-this.previousCallTime))&&i<e?(this.previousCallTime=n,this._stopDelayedCall(),this.delayedCallTimeout=setTimeout((o=this,function(){return o.previousCallTime=0,o.delayedCallTimeout=null,o._lookUp(t)}),e)):(this._stopDelayedCall(),this.previousCallTime!==n&&(this.previousCallTime=0),this._lookUp(t))},n.prototype._stopDelayedCall=function(){if(this.delayedCallTimeout)return clearTimeout(this.delayedCallTimeout),this.delayedCallTimeout=null},n.prototype._generateQueryCBId=function(){return{}},n.prototype._lookUp=function(e){var n;return n=function(t,e){if(t===this.expectedQueryCBId)return e&&e.length>0?this.renderView(this.constructor.arrayToDefaultHash(e)):this.view.hide()},this.expectedQueryCBId=this._generateQueryCBId(),this.model.query(e.text,t.proxy(n,this,this.expectedQueryCBId))},n}();var s,a,l,h,u,c=function(t,e){for(var n in e)p.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return c(n,e),n.prototype.catchQuery=function(){var t,e,n,i,o,r,s;if(e=this.$inputor.val(),t=this.$inputor.caret("pos",{iframe:this.app.iframe}),s=e.slice(0,t),!((i="string"==typeof(o=this.callbacks("matcher").call(this,this.at,s,this.getOpt("startWithSpace"),this.getOpt("acceptSpaceBar"))))&&o.length<this.getOpt("minLen",0)))return i&&o.length<=this.getOpt("maxLen",20)?(n=(r=t-o.length)+o.length,this.pos=r,o={text:o,headPos:r,endPos:n},this.trigger("matched",[this.at,o.text])):(o=null,this.view.hide()),this.query=o},n.prototype.rect=function(){var e,n,i;if(e=this.$inputor.caret("offset",this.pos-1,{iframe:this.app.iframe}))return this.app.iframe&&!this.app.iframeAsRoot&&(n=t(this.app.iframe).offset(),e.left+=n.left,e.top+=n.top),i=this.app.document.selection?0:2,{left:e.left,top:e.top,bottom:e.top+e.height+i}},n.prototype.insert=function(t,e){var n,i,o,r,s;return s=""+(o=(i=(n=this.$inputor).val()).slice(0,Math.max(this.query.headPos-this.at.length,0)))+(t+=r=""===(r=this.getOpt("suffix"))?r:r||" ")+i.slice(this.query.endPos||0),n.val(s),n.caret("pos",o.length+t.length,{iframe:this.app.iframe}),n.is(":focus")||n.focus(),n.change()},n}(o),c=function(t,e){for(var n in e)p.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},p={}.hasOwnProperty,a=function(e){function i(){return i.__super__.constructor.apply(this,arguments)}return c(i,e),i.prototype._getRange=function(){var t;if((t=this.app.window.getSelection()).rangeCount>0)return t.getRangeAt(0)},i.prototype._setRange=function(e,n,i){if(null==i&&(i=this._getRange()),i&&n)return n=t(n)[0],"after"===e?(i.setEndAfter(n),i.setStartAfter(n)):(i.setEndBefore(n),i.setStartBefore(n)),i.collapse(!1),this._clearRange(i)},i.prototype._clearRange=function(t){var e;if(null==t&&(t=this._getRange()),e=this.app.window.getSelection(),null==this.ctrl_a_pressed)return e.removeAllRanges(),e.addRange(t)},i.prototype._movingEvent=function(t){var e;return"click"===t.type||(e=t.which)===n.RIGHT||e===n.LEFT||e===n.UP||e===n.DOWN},i.prototype._unwrap=function(e){var n;return(n=(e=t(e).unwrap().get(0)).nextSibling)&&n.nodeValue&&(e.nodeValue+=n.nodeValue,t(n).remove()),e},i.prototype.catchQuery=function(e){var i,o,r,s,a,l,h,u,c,p,f,d;if((d=this._getRange())&&d.collapsed){if(e.which===n.ENTER)return(o=t(d.startContainer).closest(".atwho-query")).contents().unwrap(),o.is(":empty")&&o.remove(),(o=t(".atwho-query",this.app.document)).text(o.text()).contents().last().unwrap(),void this._clearRange();if(/firefox/i.test(navigator.userAgent)){if(t(d.startContainer).is(this.$inputor))return void this._clearRange();e.which===n.BACKSPACE&&d.startContainer.nodeType===document.ELEMENT_NODE&&(c=d.startOffset-1)>=0?((r=d.cloneRange()).setStart(d.startContainer,c),t(r.cloneContents()).contents().last().is(".atwho-inserted")&&(a=t(d.startContainer).contents().get(c),this._setRange("after",t(a).contents().last()))):e.which===n.LEFT&&d.startContainer.nodeType===document.TEXT_NODE&&(i=t(d.startContainer.previousSibling)).is(".atwho-inserted")&&0===d.startOffset&&this._setRange("after",i.contents().last())}if(t(d.startContainer).closest(".atwho-inserted").addClass("atwho-query").siblings().removeClass("atwho-query"),(o=t(".atwho-query",this.app.document)).length>0&&o.is(":empty")&&0===o.text().length&&o.remove(),this._movingEvent(e)||o.removeClass("atwho-inserted"),o.length>0)switch(e.which){case n.LEFT:return this._setRange("before",o.get(0),d),void o.removeClass("atwho-query");case n.RIGHT:return this._setRange("after",o.get(0).nextSibling,d),void o.removeClass("atwho-query")}if(o.length>0&&(f=o.attr("data-atwho-at-query"))&&(o.empty().html(f).attr("data-atwho-at-query",null),this._setRange("after",o.get(0),d)),(r=d.cloneRange()).setStart(d.startContainer,0),l="string"==typeof(u=this.callbacks("matcher").call(this,this.at,r.toString(),this.getOpt("startWithSpace"),this.getOpt("acceptSpaceBar"))),0===o.length&&l&&(s=d.startOffset-this.at.length-u.length)>=0&&(d.setStart(d.startContainer,s),o=t("<span/>",this.app.document).attr(this.getOpt("editableAtwhoQueryAttrs")).addClass("atwho-query"),d.surroundContents(o.get(0)),(h=o.contents().last().get(0))&&(/firefox/i.test(navigator.userAgent)?(d.setStart(h,h.length),d.setEnd(h,h.length),this._clearRange(d)):this._setRange("after",h,d))),!(l&&u.length<this.getOpt("minLen",0)))return l&&u.length<=this.getOpt("maxLen",20)?(p={text:u,el:o},this.trigger("matched",[this.at,p.text]),this.query=p):(this.view.hide(),this.query={el:o},o.text().indexOf(this.at)>=0&&(this._movingEvent(e)&&o.hasClass("atwho-inserted")?o.removeClass("atwho-query"):!1!==this.callbacks("afterMatchFailed").call(this,this.at,o)&&this._setRange("after",this._unwrap(o.text(o.text()).contents().first()))),null)}},i.prototype.rect=function(){var e,n;if(n=this.query.el.offset())return this.app.iframe&&!this.app.iframeAsRoot&&(e=t(this.app.iframe).offset(),n.left+=e.left-this.$inputor.scrollLeft(),n.top+=e.top-this.$inputor.scrollTop()),n.bottom=n.top+this.query.el.height(),n},i.prototype.insert=function(t,e){var n,i,o,r;return this.$inputor.is(":focus")||this.$inputor.focus(),o=""===(o=this.getOpt("suffix"))?o:o||" ",n=e.data("item-data"),this.query.el.removeClass("atwho-query").addClass("atwho-inserted").html(t).attr("data-atwho-at-query",""+n["atwho-at"]+this.query.text).attr("contenteditable","false"),(i=this._getRange())&&(this.query.el.length&&i.setEndAfter(this.query.el[0]),i.collapse(!1),i.insertNode(r=this.app.document.createTextNode(""+o)),this._setRange("after",r,i)),this.$inputor.is(":focus")||this.$inputor.focus(),this.$inputor.change()},i}(o),l=function(){function e(t){this.context=t,this.at=this.context.at,this.storage=this.context.$inputor}return e.prototype.destroy=function(){return this.storage.data(this.at,null)},e.prototype.saved=function(){return this.fetch()>0},e.prototype.query=function(t,e){var n,i,o;return i=this.fetch(),o=this.context.getOpt("searchKey"),i=this.context.callbacks("filter").call(this.context,t,i,o)||[],n=this.context.callbacks("remoteFilter"),i.length>0||!n&&0===i.length?e(i):n.call(this.context,t,e)},e.prototype.fetch=function(){return this.storage.data(this.at)||[]},e.prototype.save=function(t){return this.storage.data(this.at,this.context.callbacks("beforeSave").call(this.context,t||[]))},e.prototype.load=function(t){if(!this.saved()&&t)return this._load(t)},e.prototype.reload=function(t){return this._load(t)},e.prototype._load=function(e){return"string"==typeof e?t.ajax(e,{dataType:"json"}).done((n=this,function(t){return n.save(t)})):this.save(e);var n},e}(),h=function(){function e(e){this.context=e,this.$el=t("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),this.$elUl=this.$el.children(),this.timeoutID=null,this.context.$el.append(this.$el),this.bindEvent()}return e.prototype.init=function(){var t,e;return e=this.context.getOpt("alias")||this.context.at.charCodeAt(0),(t=this.context.getOpt("headerTpl"))&&1===this.$el.children().length&&this.$el.prepend(t),this.$el.attr({id:"at-view-"+e})},e.prototype.destroy=function(){return this.$el.remove()},e.prototype.bindEvent=function(){var e,n,i,o;return e=this.$el.find("ul"),n=0,i=0,e.on("mousemove.atwho-view","li",(function(o){var r;if((n!==o.clientX||i!==o.clientY)&&(n=o.clientX,i=o.clientY,!(r=t(o.currentTarget)).hasClass("cur")))return e.find(".cur").removeClass("cur"),r.addClass("cur")})).on("click.atwho-view","li",(o=this,function(n){return e.find(".cur").removeClass("cur"),t(n.currentTarget).addClass("cur"),o.choose(n),n.preventDefault()}))},e.prototype.visible=function(){return t.expr.filters.visible(this.$el[0])},e.prototype.highlighted=function(){return this.$el.find(".cur").length>0},e.prototype.choose=function(t){var e,n;if((e=this.$el.find(".cur")).length&&(n=this.context.insertContentFor(e),this.context._stopDelayedCall(),this.context.insert(this.context.callbacks("beforeInsert").call(this.context,n,e,t),e),this.context.trigger("inserted",[e,t]),this.hide(t)),this.context.getOpt("hideWithoutSuffix"))return this.stopShowing=!0},e.prototype.reposition=function(e){var n,i,o,r;return n=this.context.app.iframeAsRoot?this.context.app.window:window,e.bottom+this.$el.height()-t(n).scrollTop()>t(n).height()&&(e.bottom=e.top-this.$el.height()),e.left>(o=t(n).width()-this.$el.width()-5)&&(e.left=o),i={left:e.left,top:e.bottom},null!=(r=this.context.callbacks("beforeReposition"))&&r.call(this.context,i),this.$el.offset(i),this.context.trigger("reposition",[i])},e.prototype.next=function(){var t,e,n;return(t=this.$el.find(".cur").removeClass("cur").next()).length||(t=this.$el.find("li:first")),t.addClass("cur"),n=(e=t[0]).offsetTop+e.offsetHeight+(e.nextSibling?e.nextSibling.offsetHeight:0),this.scrollTop(Math.max(0,n-this.$el.height()))},e.prototype.prev=function(){var t,e,n;return(e=this.$el.find(".cur").removeClass("cur").prev()).length||(e=this.$el.find("li:last")),e.addClass("cur"),t=(n=e[0]).offsetTop+n.offsetHeight+(n.nextSibling?n.nextSibling.offsetHeight:0),this.scrollTop(Math.max(0,t-this.$el.height()))},e.prototype.scrollTop=function(t){var e;return(e=this.context.getOpt("scrollDuration"))?this.$elUl.animate({scrollTop:t},e):this.$elUl.scrollTop(t)},e.prototype.show=function(){var t;if(!this.stopShowing)return this.visible()||(this.$el.show(),this.$el.scrollTop(0),this.context.trigger("shown")),(t=this.context.rect())?this.reposition(t):void 0;this.stopShowing=!1},e.prototype.hide=function(t,e){var n,i;if(this.visible())return isNaN(e)?(this.$el.hide(),this.context.trigger("hidden",[t])):(i=this,n=function(){return i.hide()},clearTimeout(this.timeoutID),this.timeoutID=setTimeout(n,e))},e.prototype.render=function(e){var n,i,o,r,s,a,l;if(t.isArray(e)&&e.length>0){for(this.$el.find("ul").empty(),i=this.$el.find("ul"),l=this.context.getOpt("displayTpl"),o=0,s=e.length;o<s;o++)r=e[o],r=t.extend({},r,{"atwho-at":this.context.at}),a=this.context.callbacks("tplEval").call(this.context,l,r,"onDisplay"),(n=t(this.context.callbacks("highlighter").call(this.context,a,this.context.query.text))).data("item-data",r),i.append(n);return this.show(),this.context.getOpt("highlightFirst")?i.find("li:first").addClass("cur"):void 0}this.hide()},e}(),u={load:function(t,e){var n;if(n=this.controller(t))return n.model.load(e)},isSelecting:function(){var t;return!!(null!=(t=this.controller())?t.view.visible():void 0)},hide:function(){var t;return null!=(t=this.controller())?t.view.hide():void 0},reposition:function(){var t;if(t=this.controller())return t.view.reposition(t.rect())},setIframe:function(t,e){return this.setupRootElement(t,e),null},run:function(){return this.dispatch()},destroy:function(){return this.shutdown(),this.$inputor.data("atwho",null)}},t.fn.atwho=function(e){var n,o;return n=arguments,o=null,this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each((function(){var r,s;return(s=(r=t(this)).data("atwho"))||r.data("atwho",s=new i(this)),"object"!=typeof e&&e?u[e]&&s?o=u[e].apply(s,Array.prototype.slice.call(n,1)):t.error("Method "+e+" does not exist on jQuery.atwho"):s.reg(e.at,e)})),null!=o?o:this},t.fn.atwho.default={at:void 0,alias:void 0,data:null,displayTpl:"<li>${name}</li>",insertTpl:"${atwho-at}${name}",headerTpl:null,callbacks:e,searchKey:"name",suffix:void 0,hideWithoutSuffix:!1,startWithSpace:!0,acceptSpaceBar:!1,highlightFirst:!0,limit:5,maxLen:20,minLen:0,displayTimeout:300,delay:null,spaceSelectsMatch:!1,tabSelectsMatch:!0,editableAtwhoQueryAttrs:{},scrollDuration:150,suspendOnComposing:!0,lookUpOnClick:!0},t.fn.atwho.debug=!1}(t)}.apply(e,i))||(t.exports=o)}}]);