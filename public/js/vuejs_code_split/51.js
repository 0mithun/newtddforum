(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{tQyR:function(e,t,r){"use strict";r.r(t);var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function a(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e,t){return{value:t,done:!!e}},c={},u={}.toString,f=function(e){return u.call(e).slice(8,-1)},h=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==f(e)?e.split(""):Object(e)},l=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},d=function(e){return h(l(e))},p=s((function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)})),v=s((function(e){var t=e.exports={version:"2.6.2"};"number"==typeof __e&&(__e=t)})),b=(v.version,function(e,t,r){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}),y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=function(e){if(!y(e))throw TypeError(e+" is not an object!");return e},m=function(e){try{return!!e()}catch(e){return!0}},_=!m((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),S=p.document,x=y(S)&&y(S.createElement),O=function(e){return x?S.createElement(e):{}},w=!_&&!m((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),A=Object.defineProperty,j={f:_?Object.defineProperty:function(e,t,r){if(g(e),t=function(e,t){if(!y(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!y(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!y(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!y(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}(t,!0),g(r),w)try{return A(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},T=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},L=_?function(e,t,r){return j.f(e,t,T(1,r))}:function(e,t,r){return e[t]=r,e},E={}.hasOwnProperty,M=function(e,t){return E.call(e,t)},C=function(e,t,r){var n,a,i,s=e&C.F,o=e&C.G,c=e&C.S,u=e&C.P,f=e&C.B,h=e&C.W,l=o?v:v[t]||(v[t]={}),d=l.prototype,y=o?p:c?p[t]:(p[t]||{}).prototype;for(n in o&&(r=t),r)(a=!s&&y&&void 0!==y[n])&&M(l,n)||(i=a?y[n]:r[n],l[n]=o&&"function"!=typeof y[n]?r[n]:f&&a?b(i,p):h&&y[n]==i?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(i):u&&"function"==typeof i?b(Function.call,i):i,u&&((l.virtual||(l.virtual={}))[n]=i,e&C.R&&d&&!d[n]&&L(d,n,i)))};C.F=1,C.G=2,C.S=4,C.P=8,C.B=16,C.W=32,C.U=64,C.R=128;var k,R=C,P=L,I=Math.ceil,F=Math.floor,N=function(e){return isNaN(e=+e)?0:(e>0?F:I)(e)},V=Math.min,U=function(e){return e>0?V(N(e),9007199254740991):0},D=Math.max,$=Math.min,B=s((function(e){var t=p["__core-js_shared__"]||(p["__core-js_shared__"]={});(e.exports=function(e,r){return t[e]||(t[e]=void 0!==r?r:{})})("versions",[]).push({version:v.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),G=0,H=Math.random(),z=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++G+H).toString(36))},J=B("keys"),q=function(e){return J[e]||(J[e]=z(e))},W=(k=!1,function(e,t,r){var n,a=d(e),i=U(a.length),s=function(e,t){return(e=N(e))<0?D(e+t,0):$(e,t)}(r,i);if(k&&t!=t){for(;i>s;)if((n=a[s++])!=n)return!0}else for(;i>s;s++)if((k||s in a)&&a[s]===t)return k||s||0;return!k&&-1}),X=q("IE_PROTO"),Y="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Z=Object.keys||function(e){return function(e,t){var r,n=d(e),a=0,i=[];for(r in n)r!=X&&M(n,r)&&i.push(r);for(;t.length>a;)M(n,r=t[a++])&&(~W(i,r)||i.push(r));return i}(e,Y)},Q=_?Object.defineProperties:function(e,t){g(e);for(var r,n=Z(t),a=n.length,i=0;a>i;)j.f(e,r=n[i++],t[r]);return e},K=p.document,ee=K&&K.documentElement,te=q("IE_PROTO"),re=function(){},ne=function(){var e,t=O("iframe"),r=Y.length;for(t.style.display="none",ee.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ne=e.F;r--;)delete ne.prototype[Y[r]];return ne()},ae=Object.create||function(e,t){var r;return null!==e?(re.prototype=g(e),r=new re,re.prototype=null,r[te]=e):r=ne(),void 0===t?r:Q(r,t)},ie=s((function(e){var t=B("wks"),r=p.Symbol,n="function"==typeof r;(e.exports=function(e){return t[e]||(t[e]=n&&r[e]||(n?r:z)("Symbol."+e))}).store=t})),se=j.f,oe=ie("toStringTag"),ce=function(e,t,r){e&&!M(e=r?e:e.prototype,oe)&&se(e,oe,{configurable:!0,value:t})},ue={};L(ue,ie("iterator"),(function(){return this}));var fe=function(e,t,r){e.prototype=ae(ue,{next:T(1,r)}),ce(e,t+" Iterator")},he=function(e){return Object(l(e))},le=q("IE_PROTO"),de=Object.prototype,pe=Object.getPrototypeOf||function(e){return e=he(e),M(e,le)?e[le]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?de:null},ve=ie("iterator"),be=!([].keys&&"next"in[].keys()),ye=function(){return this},ge=function(e,t,r,n,a,i,s){fe(r,t,n);var o,u,f,h=function(e){if(!be&&e in v)return v[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},l=t+" Iterator",d="values"==a,p=!1,v=e.prototype,b=v[ve]||v["@@iterator"]||a&&v[a],y=b||h(a),g=a?d?h("entries"):y:void 0,m="Array"==t&&v.entries||b;if(m&&(f=pe(m.call(new e)))!==Object.prototype&&f.next&&ce(f,l,!0),d&&b&&"values"!==b.name&&(p=!0,y=function(){return b.call(this)}),s&&(be||p||!v[ve])&&L(v,ve,y),c[t]=y,c[l]=ye,a)if(o={values:d?y:h("values"),keys:i?y:h("keys"),entries:g},s)for(u in o)u in v||P(v,u,o[u]);else R(R.P+R.F*(be||p),t,o);return o};ge(Array,"Array",(function(e,t){this._t=d(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):o(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])}),"values");c.Arguments=c.Array;for(var me=ie("toStringTag"),_e="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),Se=0;Se<_e.length;Se++){var xe=_e[Se],Oe=p[xe],we=Oe&&Oe.prototype;we&&!we[me]&&L(we,me,xe),c[xe]=c.Array}var Ae,je=(Ae=!0,function(e,t){var r,n,a=String(l(e)),i=N(t),s=a.length;return i<0||i>=s?Ae?"":void 0:(r=a.charCodeAt(i))<55296||r>56319||i+1===s||(n=a.charCodeAt(i+1))<56320||n>57343?Ae?a.charAt(i):r:Ae?a.slice(i,i+2):n-56320+(r-55296<<10)+65536});ge(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=je(t,r),this._i+=e.length,{value:e,done:!1})}));var Te=ie("toStringTag"),Le="Arguments"==f(function(){return arguments}()),Ee=function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Te))?r:Le?f(t):"Object"==(n=f(t))&&"function"==typeof t.callee?"Arguments":n},Me=ie("iterator"),Ce=v.isIterable=function(e){var t=Object(e);return void 0!==t[Me]||"@@iterator"in t||c.hasOwnProperty(Ee(t))},ke=s((function(e){e.exports={default:Ce,__esModule:!0}}));i(ke);var Re=ie("iterator"),Pe=v.getIteratorMethod=function(e){if(null!=e)return e[Re]||e["@@iterator"]||c[Ee(e)]},Ie=v.getIterator=function(e){var t=Pe(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return g(t.call(e))},Fe=s((function(e){e.exports={default:Ie,__esModule:!0}}));i(Fe);var Ne=i(s((function(e,t){t.__esModule=!0;var r=a(ke),n=a(Fe);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(Array.isArray(e))return e;if((0,r.default)(Object(e)))return function(e,t){var r=[],a=!0,i=!1,s=void 0;try{for(var o,c=(0,n.default)(e);!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,s=e}finally{try{!a&&c.return&&c.return()}finally{if(i)throw s}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}))),Ve=function(e,t,r,n){try{return n?t(g(r)[0],r[1]):t(r)}catch(t){var a=e.return;throw void 0!==a&&g(a.call(e)),t}},Ue=ie("iterator"),De=Array.prototype,$e=function(e){return void 0!==e&&(c.Array===e||De[Ue]===e)},Be=function(e,t,r){t in e?j.f(e,t,T(0,r)):e[t]=r},Ge=ie("iterator"),He=!1;try{var ze=[7][Ge]();ze.return=function(){He=!0},Array.from(ze,(function(){throw 2}))}catch(e){}R(R.S+R.F*!function(e,t){if(!t&&!He)return!1;var r=!1;try{var n=[7],a=n[Ge]();a.next=function(){return{done:r=!0}},n[Ge]=function(){return a},e(n)}catch(e){}return r}((function(e){Array.from(e)})),"Array",{from:function(e){var t,r,n,a,i=he(e),s="function"==typeof this?this:Array,o=arguments.length,c=o>1?arguments[1]:void 0,u=void 0!==c,f=0,h=Pe(i);if(u&&(c=b(c,o>2?arguments[2]:void 0,2)),null==h||s==Array&&$e(h))for(r=new s(t=U(i.length));t>f;f++)Be(r,f,u?c(i[f],f):i[f]);else for(a=h.call(i),r=new s;!(n=a.next()).done;f++)Be(r,f,u?Ve(a,c,[n.value,f],!0):n.value);return r.length=f,r}});var Je=v.Array.from,qe=s((function(e){e.exports={default:Je,__esModule:!0}}));i(qe);var We,Xe,Ye,Ze,Qe=i(s((function(e,t){t.__esModule=!0;var r,n=(r=qe)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,n.default)(e)}})));We="keys",Xe=function(){return function(e){return Z(he(e))}},Ye=(v.Object||{})[We]||Object[We],(Ze={})[We]=Xe(Ye),R(R.S+R.F*m((function(){Ye(1)})),"Object",Ze);for(var Ke=v.Object.keys,et=i(s((function(e){e.exports={default:Ke,__esModule:!0}}))),tt=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},rt={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"},nt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!tt(e))throw new TypeError("Expected a RegExp instance");var r=et(rt).map((function(r){return("boolean"==typeof t[r]?t[r]:e[r])?rt[r]:""})).join(""),n=new RegExp(t.source||e.source,r);return n.lastIndex="number"==typeof t.lastIndex?t.lastIndex:e.lastIndex,n},at=function(e){return e.replace(/[^\u0000-\u007e]/g,(function(e){return st[e]||e}))},it=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],st={},ot=0;ot<it.length;ot+=1)for(var ct=it[ot].chars,ut=0;ut<ct.length;ut+=1)st[ct[ut]]=it[ot].base;var ft={remove:at,replacementList:it,diacriticsMap:st};function ht(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.caseSensitive,a=void 0!==n&&n,i=r.diacriticsSensitive,s=void 0!==i&&i;if(t instanceof RegExp){for(var o=nt(t,{global:!0}),c=[],u=o.exec(e);u;){var f=u.index+u[0].length;c.push([u.index,f]),u=o.exec(e)}return c}var h=t.length;if(0===h)return[];var l=[],d=e,p=t;a||(d=e.toLocaleLowerCase(),p=t.toLocaleLowerCase()),s||(d=ft.remove(d),p=ft.remove(p));for(var v=0,b=d.indexOf(p,v);b>-1;)v=b+h,l.push([b,v]),b=d.indexOf(p,b+1);return l}var lt=i(s((function(e,t){t.__esModule=!0;var r,n=(r=qe)&&r.__esModule?r:{default:r};t.default=function(e){return Array.isArray(e)?e:(0,n.default)(e)}})));function dt(e){var t=lt(e).slice(0);if(!t.length)return[];t.sort((function(e,t){return e[0]!==t[0]?e[0]-t[0]:e[1]-t[1]}));var r=[],n=t[0][0],a=t[0][1];return t.shift(),t.forEach((function(e){var t=Ne(e,2),i=t[0],s=t[1];i>=a?(r.push([n,a]),n=i,a=s):s>a&&(a=s)})),r.push([n,a]),r}var pt=[Object,Array,String],vt={name:"text-highlight",props:{queries:[Array,String,RegExp],caseSensitive:Boolean,diacriticsSensitive:Boolean,highlightStyle:pt,highlightClass:pt,highlightComponent:{type:[String,Object],default:"mark"}},data:function(){return{text:""}},render:function(e){var t=this;return e("span",[this.highlights.map((function(r){var i=r.text,s=r.isHighlighted,o=r.highlightIndex;return s?e(t.highlightComponent,[{class:["text__highlight",t.highlightClass],style:t.highlightStyle,key:o,attrs:{index:o,text:i}},t.attributes].reduce((function(e,t){var r,i,s,o,c;for(s in t)if(r=e[s],i=t[s],r&&n.test(s))if("class"===s&&("string"==typeof r&&(c=r,e[s]=r={},r[c]=!0),"string"==typeof i&&(c=i,t[s]=i={},i[c]=!0)),"on"===s||"nativeOn"===s||"hook"===s)for(o in i)r[o]=a(r[o],i[o]);else if(Array.isArray(r))e[s]=r.concat(i);else if(Array.isArray(i))e[s]=[r].concat(i);else for(o in i)r[o]=i[o];else e[s]=t[s];return e}),{}),[i]):i}))])},beforeMount:function(){this.setTextFromSlot()},beforeUpdate:function(){this.setTextFromSlot()},methods:{setTextFromSlot:function(){var e=this.$slots.default;e?(e[0].tag,this.text=e[0].text):this.text=""}},computed:{attributes:function(){return{props:this.$attrs,on:this.$listeners}},highlights:function(){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.caseSensitive,a=void 0!==n&&n,i=r.diacriticsSensitive,s=void 0!==i&&i,o=t;if("string"==typeof t||t instanceof RegExp)o=[t];else if(!Array.isArray(t))return[];var c=[];o.forEach((function(t){c.push.apply(c,Qe(ht(e,t,{caseSensitive:a,diacriticsSensitive:s})))}));var u=dt(c),f=[],h=0;return u.forEach((function(t,r){var n=Ne(t,2),a=n[0],i=n[1];h!==a&&f.push({isHighlighted:!1,text:e.slice(h,a)}),f.push({isHighlighted:!0,text:e.slice(a,i),highlightIndex:r}),h=i})),h!==e.length&&f.push({isHighlighted:!1,text:e.slice(h)}),f}(this.text,this.queries,{caseSensitive:this.caseSensitive,diacriticsSensitive:this.diacriticsSensitive})}}};var bt=function(e,t,r,n,a,i,s,o,c,u){"boolean"!=typeof s&&(c=o,o=s,s=!1);var f,h="function"==typeof r?r.options:r;if(e&&e.render&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0,a&&(h.functional=!0)),n&&(h._scopeId=n),i?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},h._ssrRegister=f):t&&(f=s?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),f)if(h.functional){var l=h.render;h.render=function(e,t){return f.call(t),l(e,t)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,f):[f]}return r},yt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var gt=document.head||document.getElementsByTagName("head")[0],mt={};var _t=bt({},(function(e){e&&e("data-v-f670ad86_0",{source:".text__highlight{background:#fc0;border-radius:3px}",map:void 0,media:void 0})}),vt,void 0,void 0,void 0,(function(e){return function(e,t){return function(e,t){var r=yt?t.media||"default":e,n=mt[r]||(mt[r]={ids:new Set,styles:[]});if(!n.ids.has(e)){n.ids.add(e);var a=t.source;if(t.map&&(a+="\n/*# sourceURL="+t.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",t.media&&n.element.setAttribute("media",t.media),gt.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(a),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var i=n.ids.size-1,s=document.createTextNode(a),o=n.element.childNodes;o[i]&&n.element.removeChild(o[i]),o.length?n.element.insertBefore(s,o[i]):n.element.appendChild(s)}}}(e,t)}}),void 0);t.default=_t}}]);