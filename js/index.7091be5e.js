(function(e){function t(t){for(var a,s,o=t[0],i=t[1],c=t[2],l=0,p=[];l<o.length;l++)s=o[l],n[s]&&p.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),_()}function _(){for(var e,t=0;t<r.length;t++){for(var _=r[t],a=!0,o=1;o<_.length;o++){var i=_[o];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=_[0]))}return e}var a={},n={index:0},r=[];function s(t){if(a[t])return a[t].exports;var _=a[t]={i:t,l:!1,exports:{}};return e[t].call(_.exports,_,_.exports,s),_.l=!0,_.exports}s.m=e,s.c=a,s.d=function(e,t,_){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(s.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(_,a,function(t){return e[t]}.bind(null,a));return _},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-form-components/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;r.push([0,"chunk-vendors"]),_()})({0:function(e,t,_){e.exports=_("e35a")},"0601":function(e,t,_){},1386:function(e,t,_){"use strict";var a=_("f0b6"),n=_.n(a);n.a},"1b50":function(e,t,_){"use strict";var a=_("4246"),n=_.n(a);n.a},"21e4":function(e,t,_){},"2af9":function(e,t,_){"use strict";_("7f7f"),_("ac6a"),_("cadf"),_("551c"),_("097d");var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{class:{"vue-input":"textarea"!==this.type,"vue-textarea":"textarea"===this.type,"vue-input--prefix":this.$slots.prefix,"vue-input--suffix":this.$slots.suffix,"vue-input--prepend":this.$slots.prepend,"vue-input--append":this.$slots.append}},[this.$slots.prefix&&"textarea"!==e.type?_("div",{staticClass:"vue-input__prefix"},[e._t("prefix")],2):e._e(),this.$slots.suffix&&"textarea"!==e.type?_("div",{staticClass:"vue-input__suffix"},[e._t("suffix")],2):e._e(),this.$slots.prepend&&"textarea"!==e.type?_("div",{staticClass:"vue-input__prepend"},[e._t("prepend")],2):e._e(),"textarea"!==e.type?_("input",{staticClass:"vue-input__inner",attrs:{type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,max:e.max,min:e.min,autocomplete:[e.autocomplete?"off":"on"]},domProps:{value:e.value},on:{input:e.onInput}}):_("textarea",{staticClass:"vue-textarea__inner",attrs:{placeholder:e.placeholder,rows:e.rows}}),this.$slots.append&&"textarea"!==e.type?_("div",{staticClass:"vue-input__append"},[e._t("append")],2):e._e()])},n=[],r=(_("c5f6"),{name:"VueInput",props:{type:{type:String,default:"text"},value:[String,Number],name:String,readonly:{type:Boolean,default:!1},autocomplete:{type:Boolean,default:!1},min:Number,max:Number,placeholder:String,disabled:{type:Boolean,default:!1},rows:{type:Number,default:3}},model:{prop:"value",event:"input"},methods:{onInput:function(e){this.$emit("input",e.target.value)}}}),s=r,o=(_("5445"),_("2877")),i=Object(o["a"])(s,a,n,!1,null,null,null);i.options.__file="Input.vue";var c=i.exports,u=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("button",{staticClass:"vue-button",class:{"vue-button--primary":"primary"===e.type,"vue-button--success":"success"===e.type,"vue-button--warning":"warning"===e.type,"vue-button--danger":"danger"===e.type},attrs:{disabled:e.disabled},on:{click:function(t){e.$emit("click")}}},[e._t("default")],2)},l=[],p={name:"VueButton",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1}}},d=p,m=(_("999d"),Object(o["a"])(d,u,l,!1,null,null,null));m.options.__file="Button.vue";var f=m.exports,v=[c,f];t["a"]={install:function(e,t){v.forEach(function(t){e.component(t.name,t)})}}},"3b8d":function(e,t,_){},4246:function(e,t,_){},5445:function(e,t,_){"use strict";var a=_("f8a5"),n=_.n(a);n.a},"61c0":function(e,t,_){"use strict";var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"app-tabs"},[_("div",{staticClass:"app-tabs__labels"},e._l(e.tabsLabels,function(t){return _("div",{key:t,staticClass:"app-tabs__labels-item",class:{active:e.isActive(t)},on:{click:function(_){e.onChangeTab(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])})),_("div",{staticClass:"app-tabs__body"},[e._t("default")],2)])},n=[],r=(_("7f7f"),{name:"AppTabs",props:{active:String},model:{event:"change",prop:"active"},data:function(){return{value:"",tabsLabels:[]}},created:function(){this.value=this.active},mounted:function(){this.getTabsLabels()},watch:{active:function(){this.value=this.active},value:function(){this.$emit("change",this.value)}},methods:{onChangeTab:function(e){this.$emit("change",e)},getTabsLabels:function(){this.tabsLabels=this.$children.map(function(e){return e.name})},isActive:function(e){return e===this.value}}}),s=r,o=(_("1386"),_("2877")),i=Object(o["a"])(s,a,n,!1,null,null,null);i.options.__file="Tabs.vue";t["a"]=i.exports},"7ba3":function(e,t,_){"use strict";var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"app-tabs__item",class:{"app-tabs__item--active":e.isActive}},[_("div",{staticClass:"app-tabs__item-body"},[e._t("default")],2)])},n=[],r=(_("7f7f"),{name:"AppTabsItem",props:{name:String},computed:{isActive:function(){return this.name===this.$parent.value}}}),s=r,o=(_("cb0f"),_("2877")),i=Object(o["a"])(s,a,n,!1,null,null,null);i.options.__file="TabsItem.vue";t["a"]=i.exports},"8d65":function(e,t,_){},"98f2":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return parse});var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b54a"),core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("f751"),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("cadf"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("551c"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("097d"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_6__),vue_dist_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("ba4c"),vue_dist_vue__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(vue_dist_vue__WEBPACK_IMPORTED_MODULE_7__),_src_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2af9"),_components_Tabs_Tabs_vue__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("61c0"),_components_Tabs_TabsItem_vue__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("7ba3"),he__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("92d7"),he__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_11__),marked__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("0e54"),marked__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_12__);function sluggify(e){return e.toLowerCase().trim().replace(/:.*:/g,"").replace(/ +$/g,"").replace(/(&amp;| & )/g,"-and-").replace(/&(.+?);/g,"").replace(/[\s\W-]+/g,"-")}function parse(markdown,cb){var renderer=new marked__WEBPACK_IMPORTED_MODULE_12___default.a.Renderer({langPrefix:"lang-"}),base=new marked__WEBPACK_IMPORTED_MODULE_12___default.a.Renderer({langPrefix:"lang-"}),vms=[],vm,example=function example(code){var template=code.match(/<template>(.|\n)*<\/template>/g),params=code.match(/export default\s+((.|\s)+(?=<\/script>))/);params=eval("params = ".concat(params[1]));var exampleOptions=Object.assign({},params,{template:"<div>".concat(template,"</div>")}),exampleVm=new vue_dist_vue__WEBPACK_IMPORTED_MODULE_7___default.a(exampleOptions).$mount();return vm=new vue_dist_vue__WEBPACK_IMPORTED_MODULE_7___default.a({template:'\n      <app-tabs v-model="activeTab">\n        <app-tabs-item name="preview"></app-tabs-item>\n        <app-tabs-item name="code">\n          <pre>\n            <code id="code">'.concat(Object(he__WEBPACK_IMPORTED_MODULE_11__["escape"])(code),"</code>\n          </pre>\n        </app-tabs-item>\n      </app-tabs>\n      "),data:function(){return{activeTab:"preview"}}}).$mount(),vm.$el.querySelector(".app-tabs__item").appendChild(exampleVm.$el),vms.push(vm),'<div id="demo-'.concat(vms.length-1,'"></div>')};return renderer.strong=function(e){return"Note"===e?'<span class="app-label">'.concat(e,"</span>"):"<strong>".concat(e,"</strong>")},renderer.list=function(e){return'<ul class="app-list">'.concat(e,"</ul>")},renderer.link=function(e,t,_){return e.match(/\.md/)?base.link(e.replace(/.md(.*)/,"$1"),t,_):base.link(e,t,_)},renderer.code=function(e,t,_){return"example"===t?example(e):"<div>".concat(base.code(e,t,_),"</div>")},renderer.hr=function(){return'<hr class="app-hr">'},renderer.table=function(e,t){return'<table class="app-table">\n        <thead>'.concat(e,"</thead>\n        <tbody>").concat(t,"</tbody>\n      </table>")},renderer.heading=function(e,t){return"<h".concat(t,' id="').concat(sluggify(e),'"><span class="anchor">').concat(e,"</span></h").concat(t,">")},[marked__WEBPACK_IMPORTED_MODULE_12___default()(markdown,{renderer:renderer}),vms]}vue_dist_vue__WEBPACK_IMPORTED_MODULE_7___default.a.use(_src_components__WEBPACK_IMPORTED_MODULE_8__["a"]),vue_dist_vue__WEBPACK_IMPORTED_MODULE_7___default.a.component("app-tabs",_components_Tabs_Tabs_vue__WEBPACK_IMPORTED_MODULE_9__["a"]),vue_dist_vue__WEBPACK_IMPORTED_MODULE_7___default.a.component("app-tabs-item",_components_Tabs_TabsItem_vue__WEBPACK_IMPORTED_MODULE_10__["a"])},"999d":function(e,t,_){"use strict";var a=_("0601"),n=_.n(a);n.a},b501:function(e,t,_){"use strict";var a=_("21e4"),n=_.n(a);n.a},cb0f:function(e,t,_){"use strict";var a=_("8d65"),n=_.n(a);n.a},d678:function(e,t,_){"use strict";var a=_("3b8d"),n=_.n(a);n.a},e35a:function(e,t,_){"use strict";_.r(t);_("cadf"),_("551c"),_("097d");var a=_("2b0e"),n=_("8c4f"),r=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"home"},[_("div",{staticClass:"home__hero"},[_("div",{staticClass:"logo"},[e._v("VFC")]),_("div",{staticClass:"logo__text"},[e._v("Vue Form Components")]),_("div",{staticClass:"description"},[e._v("Clean & minimal vue form elements with validation")]),_("router-link",{attrs:{to:"/components/install"}},[_("vue-button",[e._v("Get started")])],1)],1)])},s=[],o={name:"Home"},i=o,c=(_("b501"),_("2877")),u=Object(c["a"])(i,r,s,!1,null,null,null);u.options.__file="Home.vue";var l=u.exports,p=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"page"},[_("div",{staticClass:"header"},[_("div",{staticClass:"header__logo"},[_("router-link",{attrs:{to:"/"}},[e._v("Vue Form Components")])],1),_("div",{staticClass:"header__link"},[_("router-link",{attrs:{to:"/changelog"}},[e._v("Changelog")]),_("a",{attrs:{href:"https://github.com/antonreshetov/vue-form-components",target:"_blank"}},[e._v("Github")])],1)]),_("div",{staticClass:"sidebar"},[_("nav",{staticClass:"nav"},[_("div",{staticClass:"nav__category"},[e._v("Development")]),e._l(e.nav.development,function(t){return _("div",{key:t.title,staticClass:"nav__item"},[_("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))])],1)}),_("div",{staticClass:"nav__category"},[e._v("Component")]),e._l(e.nav.components,function(t){return _("div",{key:t.title,staticClass:"nav__item"},[_("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))])],1)})],2)]),_("div",{staticClass:"content"},[_("div",{attrs:{id:"html"},domProps:{innerHTML:e._s(e.html)}})])])},d=[],m=(_("4917"),_("a481"),_("ac6a"),_("9393")),f=_("98f2"),v=_("bc3a"),b=_.n(v),h=_("1487"),E=_.n(h),O=(_("581d"),{development:[{title:"Install",path:"/components/install"}],components:[{title:"Input",path:"/components/input"},{title:"Select",path:"/components/select"},{title:"Checkbox",path:"/components/checkbox"},{title:"Radio",path:"/components/radio"},{title:"Button",path:"/components/button"},{title:"Form",path:"/components/form"}]}),P={name:"Page",data:function(){return{html:"",nav:O}},mounted:function(){this.buildPage()},watch:{"$route.path":function(){this.buildPage()}},methods:{buildPage:function(){var e=this,t="/vue-form-components/docs/";"docs"===this.$route.meta?b.a.get("".concat(t).concat(this.$route.params.component,".md")).then(function(t){var _,a=Object(f["a"])(t.data),n=Object(m["a"])(a,2);e.html=n[0],_=n[1],e.$nextTick(function(){for(var t=0;t<_.length;t++)document.getElementById("demo-".concat(t)).appendChild(_[t].$el);document.querySelectorAll("pre code").forEach(function(e){E.a.highlightBlock(e)}),e.addScrollToHeading(),e.setScrollByUrlHash()})}):b.a.get("".concat(t,"CHANGELOG.md")).then(function(t){e.html=Object(f["a"])(t.data)[0]})},addScrollToHeading:function(){var e=document.querySelectorAll("h2"),t=document.querySelector(".content");e.forEach(function(e){e.addEventListener("click",function(){var _=window.location.hash,a=/#[^\/].+/;a.test(_)?window.location.hash=_.replace(a,"#".concat(e.id)):window.location.hash="".concat(window.location.hash,"#").concat(e.id),t.scrollTo(0,e.offsetTop-100)})})},setScrollByUrlHash:function(){var e=window.location.hash,t=/#[^\/].+/,_=document.querySelector(".content");if(t.test(e)){var a=e.match(t),n=document.querySelector(a);_.scrollTo(0,n.offsetTop-100)}}}},M=P,D=(_("1b50"),Object(c["a"])(M,p,d,!1,null,null,null));D.options.__file="Page.vue";var g=D.exports;a["a"].use(n["a"]);var C=new n["a"]({linkActiveClass:"active",routes:[{path:"/",name:"home",component:l},{path:"/components/:component",component:g,meta:"docs"},{path:"/changelog",component:g}]}),T=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"app"},[_("router-view")],1)},w=[],y={name:"App",data:function(){return{nav:O}}},k=y,x=(_("d678"),Object(c["a"])(k,T,w,!1,null,null,null));x.options.__file="App.vue";var A=x.exports,B=_("2af9");a["a"].use(B["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(A)},router:C}).$mount("#app")},f0b6:function(e,t,_){},f8a5:function(e,t,_){}});
//# sourceMappingURL=index.7091be5e.js.map