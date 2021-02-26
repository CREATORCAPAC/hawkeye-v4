function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{b2BU:function(t,e,n){"use strict";n.r(e),n.d(e,"BooksModule",(function(){return ke}));var o=n("ofXK"),r=n("tyNb"),i=n("l7P3"),a=n("9jGm"),s=n("Wp6s"),c=n("3Pt+"),l=n("qFsG"),d=n("fXoL"),f=n("FKr1"),u=n("8LU1"),p=n("nLfN"),m=n("R1ws");function h(t,e){if(1&t&&(d.ec(),d.Pb(0,"circle",3)),2&t){var n=d.fc();d.vc("animation-name","mat-progress-spinner-stroke-rotate-"+n._spinnerAnimationLabel)("stroke-dashoffset",n._getStrokeDashOffset(),"px")("stroke-dasharray",n._getStrokeCircumference(),"px")("stroke-width",n._getCircleStrokeWidth(),"%"),d.Db("r",n._getCircleRadius())}}function b(t,e){if(1&t&&(d.ec(),d.Pb(0,"circle",3)),2&t){var n=d.fc();d.vc("stroke-dashoffset",n._getStrokeDashOffset(),"px")("stroke-dasharray",n._getStrokeCircumference(),"px")("stroke-width",n._getCircleStrokeWidth(),"%"),d.Db("r",n._getCircleRadius())}}function g(t,e){if(1&t&&(d.ec(),d.Pb(0,"circle",3)),2&t){var n=d.fc();d.vc("animation-name","mat-progress-spinner-stroke-rotate-"+n._spinnerAnimationLabel)("stroke-dashoffset",n._getStrokeDashOffset(),"px")("stroke-dasharray",n._getStrokeCircumference(),"px")("stroke-width",n._getCircleStrokeWidth(),"%"),d.Db("r",n._getCircleRadius())}}function k(t,e){if(1&t&&(d.ec(),d.Pb(0,"circle",3)),2&t){var n=d.fc();d.vc("stroke-dashoffset",n._getStrokeDashOffset(),"px")("stroke-dasharray",n._getStrokeCircumference(),"px")("stroke-width",n._getCircleStrokeWidth(),"%"),d.Db("r",n._getCircleRadius())}}var y,_,v,C,w,O=Object(f.i)((function t(e){_classCallCheck(this,t),this._elementRef=e}),"primary"),x=new d.q("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}}),A=((w=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,r,i,a){var s;_classCallCheck(this,n),(s=e.call(this,t))._elementRef=t,s._document=r,s._diameter=100,s._value=0,s._fallbackAnimation=!1,s.mode="determinate";var c=n._diameters;return s._spinnerAnimationLabel=s._getSpinnerAnimationLabel(),c.has(r.head)||c.set(r.head,new Set([100])),s._fallbackAnimation=o.EDGE||o.TRIDENT,s._noopAnimations="NoopAnimations"===i&&!!a&&!a._forceAnimations,a&&(a.diameter&&(s.diameter=a.diameter),a.strokeWidth&&(s.strokeWidth=a.strokeWidth)),s}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this._elementRef.nativeElement;this._styleRoot=Object(p.c)(t)||this._document.head,this._attachStyleNode(),t.classList.add("mat-progress-spinner-indeterminate".concat(this._fallbackAnimation?"-fallback":"","-animation"))}},{key:"_getCircleRadius",value:function(){return(this.diameter-10)/2}},{key:"_getViewBox",value:function(){var t=2*this._getCircleRadius()+this.strokeWidth;return"0 0 ".concat(t," ").concat(t)}},{key:"_getStrokeCircumference",value:function(){return 2*Math.PI*this._getCircleRadius()}},{key:"_getStrokeDashOffset",value:function(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}},{key:"_getCircleStrokeWidth",value:function(){return this.strokeWidth/this.diameter*100}},{key:"_attachStyleNode",value:function(){var t=this._styleRoot,e=this._diameter,o=n._diameters,r=o.get(t);if(!r||!r.has(e)){var i=this._document.createElement("style");i.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),i.textContent=this._getAnimationText(),t.appendChild(i),r||(r=new Set,o.set(t,r)),r.add(e)}}},{key:"_getAnimationText",value:function(){var t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}},{key:"_getSpinnerAnimationLabel",value:function(){return this.diameter.toString().replace(".","_")}},{key:"diameter",get:function(){return this._diameter},set:function(t){this._diameter=Object(u.c)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}},{key:"strokeWidth",get:function(){return this._strokeWidth||this.diameter/10},set:function(t){this._strokeWidth=Object(u.c)(t)}},{key:"value",get:function(){return"determinate"===this.mode?this._value:0},set:function(t){this._value=Math.max(0,Math.min(100,Object(u.c)(t)))}}]),n}(O)).\u0275fac=function(t){return new(t||w)(d.Ob(d.l),d.Ob(p.a),d.Ob(o.e,8),d.Ob(m.a,8),d.Ob(x))},w.\u0275cmp=d.Ib({type:w,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&(d.Db("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),d.vc("width",e.diameter,"px")("height",e.diameter,"px"),d.Fb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[d.zb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(d.ec(),d.Ub(0,"svg",0),d.wc(1,h,1,9,"circle",1),d.wc(2,b,1,7,"circle",2),d.Tb()),2&t&&(d.vc("width",e.diameter,"px")("height",e.diameter,"px"),d.lc("ngSwitch","indeterminate"===e.mode),d.Db("viewBox",e._getViewBox()),d.Cb(1),d.lc("ngSwitchCase",!0),d.Cb(1),d.lc("ngSwitchCase",!1))},directives:[o.m,o.n],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),w._diameters=new WeakMap,w),j=((C=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,r,i,a){var s;return _classCallCheck(this,n),(s=e.call(this,t,o,r,i,a)).mode="indeterminate",s}return n}(A)).\u0275fac=function(t){return new(t||C)(d.Ob(d.l),d.Ob(p.a),d.Ob(o.e,8),d.Ob(m.a,8),d.Ob(x))},C.\u0275cmp=d.Ib({type:C,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&(d.vc("width",e.diameter,"px")("height",e.diameter,"px"),d.Fb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[d.zb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(d.ec(),d.Ub(0,"svg",0),d.wc(1,g,1,9,"circle",1),d.wc(2,k,1,7,"circle",2),d.Tb()),2&t&&(d.vc("width",e.diameter,"px")("height",e.diameter,"px"),d.lc("ngSwitch","indeterminate"===e.mode),d.Db("viewBox",e._getViewBox()),d.Cb(1),d.lc("ngSwitchCase",!0),d.Cb(1),d.lc("ngSwitchCase",!1))},directives:[o.m,o.n],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),C),S=((v=function t(){_classCallCheck(this,t)}).\u0275mod=d.Mb({type:v}),v.\u0275inj=d.Lb({factory:function(t){return new(t||v)},imports:[[f.b,o.c],f.b]}),v),T=((_=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){if(!t)return"Author Unknown";switch(t.length){case 0:return"Author Unknown";case 1:return t[0];case 2:return t.join(" and ");default:var e=t[t.length-1];return"".concat(t.slice(0,-1).join(", "),", and ").concat(e)}}}]),t}()).\u0275fac=function(t){return new(t||_)},_.\u0275pipe=d.Nb({name:"bcAddCommas",type:_,pure:!0}),_),P=((y=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"authors",get:function(){return this.book.volumeInfo.authors}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=d.Ib({type:y,selectors:[["bc-book-authors"]],inputs:{book:"book"},decls:5,vars:3,consts:[["md-subheader",""]],template:function(t,e){1&t&&(d.Ub(0,"h5",0),d.xc(1,"Written By:"),d.Tb(),d.Ub(2,"span"),d.xc(3),d.gc(4,"bcAddCommas"),d.Tb()),2&t&&(d.Cb(3),d.zc(" ",d.hc(4,1,e.authors)," "))},pipes:[T],styles:["h5[_ngcontent-%COMP%] {\n      margin-bottom: 5px;\n    }"]}),y);function I(t,e){if(1&t&&(d.Ub(0,"mat-card-subtitle"),d.xc(1),d.Tb()),2&t){var n=d.fc(2);d.Cb(1),d.yc(n.subtitle)}}function B(t,e){if(1&t&&d.Pb(0,"img",8),2&t){var n=d.fc(2);d.lc("src",n.thumbnail,d.rc)}}function U(t,e){if(1&t){var n=d.Vb();d.Ub(0,"button",9),d.cc("click",(function(){d.pc(n);var t=d.fc(2);return t.remove.emit(t.book)})),d.xc(1," Remove Book from Collection "),d.Tb()}}function L(t,e){if(1&t){var n=d.Vb();d.Ub(0,"button",10),d.cc("click",(function(){d.pc(n);var t=d.fc(2);return t.add.emit(t.book)})),d.xc(1," Add Book to Collection "),d.Tb()}}function M(t,e){if(1&t&&(d.Ub(0,"mat-card"),d.Ub(1,"mat-card-title-group"),d.Ub(2,"mat-card-title"),d.xc(3),d.Tb(),d.wc(4,I,2,1,"mat-card-subtitle",0),d.wc(5,B,1,1,"img",1),d.Tb(),d.Ub(6,"mat-card-content"),d.Pb(7,"p",2),d.Tb(),d.Ub(8,"mat-card-footer",3),d.Pb(9,"bc-book-authors",4),d.Tb(),d.Ub(10,"mat-card-actions",5),d.wc(11,U,2,0,"button",6),d.wc(12,L,2,0,"button",7),d.Tb(),d.Tb()),2&t){var n=d.fc();d.Cb(3),d.yc(n.title),d.Cb(1),d.lc("ngIf",n.subtitle),d.Cb(1),d.lc("ngIf",n.thumbnail),d.Cb(2),d.lc("innerHtml",n.description,d.qc),d.Cb(2),d.lc("book",n.book),d.Cb(2),d.lc("ngIf",n.inCollection),d.Cb(1),d.lc("ngIf",!n.inCollection)}}var E,R,D=((R=function(){function t(){_classCallCheck(this,t),this.add=new d.n,this.remove=new d.n}return _createClass(t,[{key:"id",get:function(){return this.book.id}},{key:"title",get:function(){return this.book.volumeInfo.title}},{key:"subtitle",get:function(){return this.book.volumeInfo.subtitle}},{key:"description",get:function(){return this.book.volumeInfo.description}},{key:"thumbnail",get:function(){return this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail}}]),t}()).\u0275fac=function(t){return new(t||R)},R.\u0275cmp=d.Ib({type:R,selectors:[["bc-book-detail"]],inputs:{book:"book",inCollection:"inCollection"},outputs:{add:"add",remove:"remove"},decls:1,vars:1,consts:[[4,"ngIf"],["md-card-sm-image","",3,"src",4,"ngIf"],[3,"innerHtml"],[1,"footer"],[3,"book"],["align","start"],["md-raised-button","","color","warn",3,"click",4,"ngIf"],["md-raised-button","","color","primary",3,"click",4,"ngIf"],["md-card-sm-image","",3,"src"],["md-raised-button","","color","warn",3,"click"],["md-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&d.wc(0,M,13,7,"mat-card",0),2&t&&d.lc("ngIf",e.book)},directives:[o.l,s.a,s.h,s.g,s.c,s.d,P,s.b,s.f],styles:["[_nghost-%COMP%] {\n      display: flex;\n      justify-content: center;\n      margin: 75px 0;\n    }\n    md-card[_ngcontent-%COMP%] {\n      max-width: 600px;\n    }\n    md-card-title-group[_ngcontent-%COMP%] {\n      margin-left: 0;\n    }\n    img[_ngcontent-%COMP%] {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content[_ngcontent-%COMP%] {\n      margin: 15px 0 50px;\n    }\n    md-card-actions[_ngcontent-%COMP%] {\n      margin: 25px 0 0 !important;\n    }\n    md-card-footer[_ngcontent-%COMP%] {\n      padding: 0 25px 25px;\n      position: relative;\n    }"]}),R),$=((E=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=t.replace(/(<([^>]+)>)/gi,"");return t.length>=e?n.slice(0,e)+"...":n}}]),t}()).\u0275fac=function(t){return new(t||E)},E.\u0275pipe=d.Nb({name:"bcEllipsis",type:E,pure:!0}),E);function X(t,e){if(1&t&&d.Pb(0,"img",4),2&t){var n=d.fc();d.lc("src",n.thumbnail,d.rc)}}function V(t,e){if(1&t&&(d.Ub(0,"mat-card-subtitle"),d.xc(1),d.gc(2,"bcEllipsis"),d.Tb()),2&t){var n=d.fc();d.Cb(1),d.yc(d.ic(2,1,n.subtitle,40))}}function F(t,e){if(1&t&&(d.Ub(0,"p"),d.xc(1),d.gc(2,"bcEllipsis"),d.Tb()),2&t){var n=d.fc();d.Cb(1),d.yc(d.hc(2,1,n.description))}}var W,N=function(t){return["/books",t]},q=((W=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"id",get:function(){return this.book.id}},{key:"title",get:function(){return this.book.volumeInfo.title}},{key:"subtitle",get:function(){return this.book.volumeInfo.subtitle}},{key:"description",get:function(){return this.book.volumeInfo.description}},{key:"thumbnail",get:function(){return!!this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail}}]),t}()).\u0275fac=function(t){return new(t||W)},W.\u0275cmp=d.Ib({type:W,selectors:[["bc-book-preview"]],inputs:{book:"book"},decls:12,vars:11,consts:[[3,"routerLink"],["md-card-sm-image","",3,"src",4,"ngIf"],[4,"ngIf"],[3,"book"],["md-card-sm-image","",3,"src"]],template:function(t,e){1&t&&(d.Ub(0,"a",0),d.Ub(1,"mat-card"),d.Ub(2,"mat-card-title-group"),d.wc(3,X,1,1,"img",1),d.Ub(4,"mat-card-title"),d.xc(5),d.gc(6,"bcEllipsis"),d.Tb(),d.wc(7,V,3,4,"mat-card-subtitle",2),d.Tb(),d.Ub(8,"mat-card-content"),d.wc(9,F,3,3,"p",2),d.Tb(),d.Ub(10,"mat-card-footer"),d.Pb(11,"bc-book-authors",3),d.Tb(),d.Tb(),d.Tb()),2&t&&(d.lc("routerLink",d.mc(9,N,e.id)),d.Cb(3),d.lc("ngIf",e.thumbnail),d.Cb(2),d.yc(d.ic(6,6,e.title,35)),d.Cb(2),d.lc("ngIf",e.subtitle),d.Cb(2),d.lc("ngIf",e.description),d.Cb(2),d.lc("book",e.book))},directives:[r.h,s.a,s.h,o.l,s.g,s.c,s.d,P,s.f],pipes:[$],styles:["md-card[_ngcontent-%COMP%] {\n      width: 400px;\n      height: 300px;\n      margin: 15px;\n    }\n    @media only screen and (max-width: 768px) {\n      md-card[_ngcontent-%COMP%] {\n        margin: 15px 0 !important;\n      }\n    }\n    md-card[_ngcontent-%COMP%]:hover {\n      box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, .5);\n    }\n    md-card-title[_ngcontent-%COMP%] {\n      margin-right: 10px;\n    }\n    md-card-title-group[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n    a[_ngcontent-%COMP%] {\n      color: inherit;\n      text-decoration: none;\n    }\n    img[_ngcontent-%COMP%] {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content[_ngcontent-%COMP%] {\n      margin-top: 15px;\n      margin: 15px 0 0;\n    }\n    span[_ngcontent-%COMP%] {\n      display: inline-block;\n      font-size: 13px;\n    }\n    md-card-footer[_ngcontent-%COMP%] {\n      padding: 0 25px 25px;\n    }"]}),W);function Y(t,e){1&t&&d.Pb(0,"bc-book-preview",1),2&t&&d.lc("book",e.$implicit)}var z,H=((z=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||z)},z.\u0275cmp=d.Ib({type:z,selectors:[["bc-book-preview-list"]],inputs:{books:"books"},decls:1,vars:1,consts:[[3,"book",4,"ngFor","ngForOf"],[3,"book"]],template:function(t,e){1&t&&d.wc(0,Y,1,1,"bc-book-preview",0),2&t&&d.lc("ngForOf",e.books)},directives:[o.k,q],styles:["[_nghost-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }"]}),z),K=n("HDdC"),G=n("D0XW"),J=n("Kj3r");K.a.prototype.debounceTime=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G.a;return Object(J.a)(t,e)(this)},n("AJX/");var Q=n("/uUt");K.a.prototype.distinctUntilChanged=function(t,e){return Object(Q.a)(t,e)(this)};var Z,tt,et,nt=n("kmnG"),ot=((et=function t(){_classCallCheck(this,t),this.query="",this.searching=!1,this.search=new d.n}).\u0275fac=function(t){return new(t||et)},et.\u0275cmp=d.Ib({type:et,selectors:[["bc-book-search"]],inputs:{query:"query",searching:"searching"},outputs:{search:"search"},decls:7,vars:3,consts:[["mdInput","","placeholder","Search for a book",3,"value","keyup"]],template:function(t,e){1&t&&(d.Ub(0,"mat-card"),d.Ub(1,"mat-card-title"),d.xc(2,"Find a Book"),d.Tb(),d.Ub(3,"mat-card-content"),d.Ub(4,"mat-form-field"),d.Ub(5,"input",0),d.cc("keyup",(function(t){return e.search.emit(t.target.value)})),d.Tb(),d.Tb(),d.Pb(6,"mat-spinner"),d.Tb(),d.Tb()),2&t&&(d.Cb(5),d.lc("value",e.query),d.Cb(1),d.Fb("show",e.searching))},directives:[s.a,s.g,s.c,nt.b,j],styles:["md-card-title[_ngcontent-%COMP%], md-card-content[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n    }\n\n    input[_ngcontent-%COMP%] {\n      width: 300px;\n    }\n\n    md-card-spinner[_ngcontent-%COMP%] {\n      padding-left: 60px; // Make room for the spinner\n    }\n\n    md-spinner[_ngcontent-%COMP%] {\n      width: 30px;\n      height: 30px;\n      position: relative;\n      top: 10px;\n      left: 10px;\n      opacity: 0.0;\n    }\n\n    md-spinner.show[_ngcontent-%COMP%] {\n      opacity: 1.0;\n    }"]}),et),rt=((tt=function t(){_classCallCheck(this,t)}).\u0275mod=d.Mb({type:tt}),tt.\u0275inj=d.Lb({factory:function(t){return new(t||tt)}}),tt),it=((Z=function t(){_classCallCheck(this,t)}).\u0275mod=d.Mb({type:Z}),Z.\u0275inj=d.Lb({factory:function(t){return new(t||Z)},imports:[[o.c,c.p,r.i,rt,s.e,l.b,S]]}),Z),at=n("mrSG"),st=(n("tomM"),n("w/7T"),n("zP0r"));K.a.prototype.skip=function(t){return Object(st.a)(t)(this)};var ct=n("1G5W");K.a.prototype.takeUntil=function(t){return Object(ct.a)(t)(this)};var lt,dt,ft=n("EY2u"),ut=n("Kxyj"),pt="[Book] Search",mt=function t(e){_classCallCheck(this,t),this.payload=e,this.type=pt},ht=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Book] Search Complete"},bt=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Book] Load"},gt=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Book] Select"},kt=n("tk/3"),yt=((lt=function(){function t(e){_classCallCheck(this,t),this.http=e,this.API_PATH="https://www.googleapis.com/books/v1/volumes"}return _createClass(t,[{key:"searchBooks",value:function(t){return this.http.get("".concat(this.API_PATH,"?q=").concat(t)).map((function(t){return t||[]}))}},{key:"retrieveBook",value:function(t){return this.http.get("".concat(this.API_PATH,"/").concat(t)).map((function(t){return t}))}}]),t}()).\u0275fac=function(t){return new(t||lt)(d.Yb(kt.a))},lt.\u0275prov=d.Kb({token:lt,factory:lt.\u0275fac}),lt),_t=new d.q("Search Debounce"),vt=new d.q("Search Scheduler"),Ct=((dt=function t(e,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,i=arguments.length>3?arguments[3]:void 0;_classCallCheck(this,t),this.actions$=e,this.googleBooks=n,this.debounce=r,this.scheduler=i,this.search$=this.actions$.pipe(Object(a.d)(pt)).debounceTime(this.debounce,this.scheduler||G.a).map((function(t){return t.payload})).switchMap((function(t){if(""===t)return Object(ft.b)();var e=o.actions$.pipe(Object(a.d)(pt)).skip(1);return o.googleBooks.searchBooks(t).takeUntil(e).map((function(t){return new ht(t)})).catch((function(){return Object(ut.a)(new ht([]))}))}))}).\u0275fac=function(t){return new(t||dt)(d.Yb(a.a),d.Yb(yt),d.Yb(_t,8),d.Yb(vt,8))},dt.\u0275prov=d.Kb({token:dt,factory:dt.\u0275fac}),Object(at.a)([Object(a.b)()],dt.prototype,"search$",void 0),dt);n("UEVY"),n("uxst");var wt,Ot=n("NXyV"),xt="[Collection] Load Success",At=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Collection] Add Book"},jt=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Collection] Add Book Success"},St=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Collection] Add Book Fail"},Tt=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Collection] Remove Book"},Pt=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Collection] Remove Book Success"},It=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Collection] Remove Book Fail"},Bt=function t(){_classCallCheck(this,t),this.type="[Collection] Load"},Ut=function t(e){_classCallCheck(this,t),this.payload=e,this.type=xt},Lt=function t(e){_classCallCheck(this,t),this.payload=e,this.type="[Collection] Load Fail"},Mt=((wt=function t(e){_classCallCheck(this,t),this.actions$=e,this.openDB$=Object(Ot.a)((function(){return[]})),this.loadCollection$=this.actions$.pipe(Object(a.d)("[Collection] Load")).switchMap((function(){return Object(ut.a)([]).map((function(t){return new Ut(t)})).catch((function(t){return Object(ut.a)(new Lt(t))}))})),this.addBookToCollection$=this.actions$.pipe(Object(a.d)("[Collection] Add Book")).map((function(t){return t.payload})).mergeMap((function(t){return Object(ut.a)({}).map((function(){return new jt(t)})).catch((function(){return Object(ut.a)(new St(t))}))})),this.removeBookFromCollection$=this.actions$.pipe(Object(a.d)("[Collection] Remove Book")).map((function(t){return t.payload})).mergeMap((function(t){return Object(ut.a)({}).map((function(){return new Pt(t)})).catch((function(){return Object(ut.a)(new It(t))}))}))}).\u0275fac=function(t){return new(t||wt)(d.Yb(a.a))},wt.\u0275prov=d.Kb({token:wt,factory:wt.\u0275fac}),Object(at.a)([Object(a.b)({dispatch:!1})],wt.prototype,"openDB$",void 0),Object(at.a)([Object(a.b)()],wt.prototype,"loadCollection$",void 0),Object(at.a)([Object(a.b)()],wt.prototype,"addBookToCollection$",void 0),Object(at.a)([Object(a.b)()],wt.prototype,"removeBookFromCollection$",void 0),wt);n("7rwD");var Et=n("pLZG");K.a.prototype.filter=function(t,e){return Object(Et.a)(t,e)(this)},n("H4X+"),n("mFlE");var Rt,Dt,$t={ids:[],loading:!1,query:""},Xt={ids:[],entities:{},selectedBookId:null},Vt=function(t){return t.entities},Ft=function(t){return t.ids},Wt=function(t){return t.selectedBookId},Nt=Object(i.p)(Vt,Wt,(function(t,e){return t[e]})),qt=(Object(i.p)(Vt,Ft,(function(t,e){return e.map((function(e){return t[e]}))})),{loaded:!1,loading:!1,ids:[]}),Yt={search:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case pt:var n=e.payload;return""===n?{ids:[],loading:!1,query:n}:Object.assign({},t,{query:n,loading:!0});case"[Book] Search Complete":return{ids:e.payload.map((function(t){return t.id})),loading:!1,query:t.query};default:return t}},books:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"[Book] Search Complete":case xt:var n=e.payload.filter((function(e){return!t.entities[e.id]})),o=n.map((function(t){return t.id})),r=n.reduce((function(t,e){return Object.assign(t,_defineProperty({},e.id,e))}),{});return{ids:[].concat(_toConsumableArray(t.ids),_toConsumableArray(o)),entities:Object.assign({},t.entities,r),selectedBookId:t.selectedBookId};case"[Book] Load":var i=e.payload;return t.ids.indexOf(i.id)>-1?t:{ids:[].concat(_toConsumableArray(t.ids),[i.id]),entities:Object.assign({},t.entities,_defineProperty({},i.id,i)),selectedBookId:t.selectedBookId};case"[Book] Select":return{ids:t.ids,entities:t.entities,selectedBookId:e.payload};default:return t}},collection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"[Collection] Load":return Object.assign({},t,{loading:!0});case xt:return{loaded:!0,loading:!1,ids:e.payload.map((function(t){return t.id}))};case"[Collection] Add Book Success":case"[Collection] Remove Book Fail":var n=e.payload;return t.ids.indexOf(n.id)>-1?t:Object.assign({},t,{ids:[].concat(_toConsumableArray(t.ids),[n.id])});case"[Collection] Remove Book Success":case"[Collection] Add Book Fail":var o=e.payload;return Object.assign({},t,{ids:t.ids.filter((function(t){return t!==o.id}))});default:return t}}},zt=Object(i.o)("books"),Ht=Object(i.p)(zt,(function(t){return t.books})),Kt=Object(i.p)(Ht,Vt),Gt=(Object(i.p)(Ht,Ft),Object(i.p)(Ht,Wt)),Jt=Object(i.p)(Ht,Nt),Qt=Object(i.p)(zt,(function(t){return t.search})),Zt=Object(i.p)(Qt,(function(t){return t.ids})),te=Object(i.p)(Qt,(function(t){return t.query})),ee=Object(i.p)(Qt,(function(t){return t.loading})),ne=Object(i.p)(Kt,Zt,(function(t,e){return e.map((function(e){return t[e]}))})),oe=Object(i.p)(zt,(function(t){return t.collection})),re=Object(i.p)(oe,(function(t){return t.loaded})),ie=(Object(i.p)(oe,(function(t){return t.loading})),Object(i.p)(oe,(function(t){return t.ids}))),ae=Object(i.p)(Kt,ie,(function(t,e){return e.map((function(e){return t[e]}))})),se=Object(i.p)(ie,Gt,(function(t,e){return t.indexOf(e)>-1})),ce=((Dt=function(){function t(e,n,o){_classCallCheck(this,t),this.store=e,this.googleBooks=n,this.router=o}return _createClass(t,[{key:"waitForCollectionToLoad",value:function(){return this.store.select(re).filter((function(t){return t})).take(1)}},{key:"hasBookInStore",value:function(t){return this.store.select(Kt).map((function(e){return!!e[t]})).take(1)}},{key:"hasBookInApi",value:function(t){var e=this;return this.googleBooks.retrieveBook(t).map((function(t){return new bt(t)})).do((function(t){return e.store.dispatch(t)})).map((function(t){return!!t})).catch((function(){return e.router.navigate(["/404"]),Object(ut.a)(!1)}))}},{key:"hasBook",value:function(t){var e=this;return this.hasBookInStore(t).switchMap((function(n){return n?Object(ut.a)(n):e.hasBookInApi(t)}))}},{key:"canActivate",value:function(t){var e=this;return this.waitForCollectionToLoad().switchMap((function(){return e.hasBook(t.params.id)}))}}]),t}()).\u0275fac=function(t){return new(t||Dt)(d.Yb(i.h),d.Yb(yt),d.Yb(r.f))},Dt.\u0275prov=d.Kb({token:Dt,factory:Dt.\u0275fac}),Dt),le=((Rt=function(){function t(e){_classCallCheck(this,t),this.store=e,this.searchQuery$=e.select(te).take(1),this.books$=e.select(ne),this.loading$=e.select(ee)}return _createClass(t,[{key:"search",value:function(t){this.store.dispatch(new mt(t))}}]),t}()).\u0275fac=function(t){return new(t||Rt)(d.Ob(i.h))},Rt.\u0275cmp=d.Ib({type:Rt,selectors:[["bc-find-book-page"]],decls:5,vars:9,consts:[[3,"query","searching","search"],[3,"books"]],template:function(t,e){1&t&&(d.Ub(0,"bc-book-search",0),d.cc("search",(function(t){return e.search(t)})),d.gc(1,"async"),d.gc(2,"async"),d.Tb(),d.Pb(3,"bc-book-preview-list",1),d.gc(4,"async")),2&t&&(d.lc("query",d.hc(1,3,e.searchQuery$))("searching",d.hc(2,5,e.loading$)),d.Cb(3),d.lc("books",d.hc(4,7,e.books$)))},directives:[ot,H],pipes:[o.b],encapsulation:2,changeDetection:0}),Rt),de=n("wO+i");K.a.prototype.pluck=function(){return Object(de.a).apply(void 0,arguments)(this)};var fe,ue,pe,me,he=((me=function(){function t(e){_classCallCheck(this,t),this.store=e,this.book$=e.select(Jt),this.isSelectedBookInCollection$=e.select(se)}return _createClass(t,[{key:"addToCollection",value:function(t){this.store.dispatch(new At(t))}},{key:"removeFromCollection",value:function(t){this.store.dispatch(new Tt(t))}}]),t}()).\u0275fac=function(t){return new(t||me)(d.Ob(i.h))},me.\u0275cmp=d.Ib({type:me,selectors:[["bc-selected-book-page"]],decls:3,vars:6,consts:[[3,"book","inCollection","add","remove"]],template:function(t,e){1&t&&(d.Ub(0,"bc-book-detail",0),d.cc("add",(function(t){return e.addToCollection(t)}))("remove",(function(t){return e.removeFromCollection(t)})),d.gc(1,"async"),d.gc(2,"async"),d.Tb()),2&t&&d.lc("book",d.hc(1,2,e.book$))("inCollection",d.hc(2,4,e.isSelectedBookInCollection$))},directives:[D],pipes:[o.b],encapsulation:2,changeDetection:0}),me),be=((pe=function(){function t(e,n){_classCallCheck(this,t),this.actionsSubscription=n.params.map((function(t){return new gt(t.id)})).subscribe(e)}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.actionsSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||pe)(d.Ob(i.h),d.Ob(r.a))},pe.\u0275cmp=d.Ib({type:pe,selectors:[["bc-view-book-page"]],decls:1,vars:0,template:function(t,e){1&t&&d.Pb(0,"bc-selected-book-page")},directives:[he],encapsulation:2,changeDetection:0}),pe),ge=((ue=function(){function t(e){_classCallCheck(this,t),this.store=e,this.books$=e.select(ae)}return _createClass(t,[{key:"ngOnInit",value:function(){this.store.dispatch(new Bt)}}]),t}()).\u0275fac=function(t){return new(t||ue)(d.Ob(i.h))},ue.\u0275cmp=d.Ib({type:ue,selectors:[["bc-collection-page"]],decls:5,vars:3,consts:[[3,"books"]],template:function(t,e){1&t&&(d.Ub(0,"mat-card"),d.Ub(1,"mat-card-title"),d.xc(2,"My Collection"),d.Tb(),d.Tb(),d.Pb(3,"bc-book-preview-list",0),d.gc(4,"async")),2&t&&(d.Cb(3),d.lc("books",d.hc(4,1,e.books$)))},directives:[s.a,s.g,H],pipes:[o.b],styles:["md-card-title[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n    }"],changeDetection:0}),ue),ke=((fe=function t(){_classCallCheck(this,t)}).\u0275mod=d.Mb({type:fe}),fe.\u0275inj=d.Lb({factory:function(t){return new(t||fe)},providers:[ce,yt],imports:[[o.c,s.e,it,r.i.forChild([{path:"find",component:le},{path:":id",component:be,canActivate:[ce]},{path:"",component:ge}]),i.j.forFeature("books",Yt),a.c.forFeature([Ct,Mt])]]}),fe)}}]);