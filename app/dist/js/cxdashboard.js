(function(t){function n(n){for(var e,o,r=n[0],l=n[1],c=n[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(n);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,n=0;n<s.length;n++){for(var a=s[n],e=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(e=!1)}e&&(s.splice(n--,1),t=o(o.s=a[0]))}return t}var e={},i={dashboard:0},s=[];function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,n,a){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(a,e,function(n){return t[n]}.bind(null,e));return a},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var u=l;s.push([0,"cxdashboard.libs"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"14ee":function(t,n,a){"use strict";var e=a("c3bd"),i=a.n(e);i.a},2395:function(t,n,a){},"28ac":function(t,n,a){},"32bc":function(t,n,a){"use strict";var e=a("28ac"),i=a.n(e);i.a},"46f8":function(t,n,a){"use strict";var e=a("e243"),i=a.n(e);i.a},"56d7":function(t,n,a){"use strict";a.r(n);a("d3b7"),a("ddb0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container",attrs:{id:"cxdashboard"}},[a("cx-header"),a("section",{staticClass:"row cx-translation-header"},[a("mw-button",{staticClass:"col-md-4 col-xs-12 col-lg-3 col-offset-lg-1 mb-4 mt-4",attrs:{progressive:"",large:"",icon:t.mwIconAdd,label:t.$i18n("cx-create-new-translation")}})],1),a("section",{staticClass:"row cx-translation-container"},[a("cx-translation-list",{staticClass:"col-xs-12 col-md-8 col-lg-7 col-offset-lg-1 mb-4"})],1)],1)},s=[],o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a(t.component,{tag:"component",class:t.classes,attrs:{id:t.id,href:t.href,disabled:t.disabled},on:{click:t.handleClick}},[t.icon?a("mw-icon",{staticClass:"mw-ui-button__icon",attrs:{icon:t.icon,size:t.large?28:t.iconSize}}):t._e(),t.type!==t.icon&&t.label?a("span",{staticClass:"mw-ui-button__label",domProps:{textContent:t._s(t.label)}}):t._e(),t.indicator?a("mw-icon",{staticClass:"mw-ui-button__indicator",attrs:{icon:t.indicator,size:t.large?28:t.indicatorSize||t.iconSize}}):t._e()],1)},r=[],l=(a("c975"),a("a9e3"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"mw-ui-icon notranslate"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width||t.size,height:t.height||t.size,viewBox:"0 0 24 24","aria-labelledby":t.iconName,"aria-hidden":"true",role:"presentation"},on:{click:t.handleClick}},[a("title",{attrs:{id:t.iconName}},[t._v(t._s(t.iconName))]),a("g",{attrs:{fill:t.iconColor}},[a("path",{attrs:{d:t.icon}})])])])}),c=[],u={name:"MWIcon",props:{icon:{type:String,default:null},iconName:{type:String,default:null},iconColor:{type:String,default:"currentColor"},width:{type:[Number,String],default:0},height:{type:[Number,String],default:0},size:{type:[Number,String],default:20}},computed:{},methods:{handleClick:function(t){this.$emit("click",t)}}},d=u,m=(a("8f92"),a("2877")),g=Object(m["a"])(d,l,c,!1,null,null,null),f=g.exports,p={name:"mw-button",components:{MwIcon:f},props:{id:String,label:String,disabled:Boolean,depressed:Boolean,block:Boolean,large:Boolean,icon:String,iconSize:{type:[Number,String]},indicatorSize:{type:[Number,String]},indicator:String,href:String,accessKey:String,outlined:Boolean,progressive:Boolean,destructive:Boolean,type:{type:String,default:"button",validator:function(t){return-1!==["button","toggle","icon","text"].indexOf(t)}}},computed:{component:function(){return this.href?"a":"button"},classes:function(){return{"mw-ui-button":!0,"mw-ui-button--block":this.block,"mw-ui-button--depressed":this.depressed||this.outlined,"mw-ui-button--disabled":this.disabled,"mw-ui-button--fab":this.fab,"mw-ui-button--large":this.large,"mw-ui-button--progressive":this.progressive,"mw-ui-button--destructive":this.destructive,"mw-ui-button--icon":"icon"===this.type,"mw-ui-button--outlined":this.outlined,"mw-ui-button--text":"text"===this.type}}},methods:{handleClick:function(t){this.$emit("click",t)}}},h=p,w=(a("96d6"),Object(m["a"])(h,o,r,!1,null,null,null)),b=w.exports,v=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("header",{staticClass:"row cx-header"},[a("div",{staticClass:"col-6 col-xs-8 items-center justify-start"},[a("h1",{staticClass:"header ma-0 pa-0"},[a("mw-button",{attrs:{type:"text",href:t.currentPageURL,icon:t.mwIconWikipediaLogo,"icon-size":32,label:t.$i18n("cx-dashboard-header")}})],1)]),a("div",{staticClass:"col-6 col-xs-4 items-center justify-end"},[a("mw-button",{staticClass:"d-xs-only-none d-sm-only-none",attrs:{type:"icon",large:"",icon:t.mwIconBell}}),a("mw-button",{staticClass:"d-xs-only-none d-sm-only-none",attrs:{type:"icon",large:"",icon:t.mwIconTray}}),a("mw-button",{staticClass:"d-xs-only-none d-sm-only-none",attrs:{type:"text",large:"",outlined:"",icon:t.mwIconUserAvatar,label:t.username,indicatorSize:18,indicator:t.mwIconExpand}}),a("mw-button",{staticClass:"d-xs-only-flex d-sm-only-flex d-none me-5",attrs:{type:"icon","icon-size":32,icon:t.mwIconUserAvatar}})],1)])},y=[],x="M11 9V4H9v5H4v2h5v5h2v-5h5V9z",_="M11.14 4H14a.69.69 0 0 1 0 .65c-1 .16-1.36.91-1.81 1.83l-1.4 2.75 2.35 5.21h.07l3.52-8.1c.44-1.07.4-1.59-.79-1.7a.68.68 0 0 1 0-.65h3.45a.68.68 0 0 1 0 .65c-1.21.16-1.42.91-1.81 1.83l-4.37 10.08c-.13.3-.24.45-.44.45s-.33-.16-.42-.45l-2.48-5.73-2.72 5.73c-.11.3-.24.45-.44.45s-.31-.16-.42-.45l-4-10.09c-.57-1.4-.6-1.7-1.65-1.8A.68.68 0 0 1 .62 4h3.91a.68.68 0 0 1 0 .65c-1.16.13-1.21.45-.74 1.58l3.41 8.19h.05L9.3 10 7.78 6.45C7.17 5.05 7 4.77 6.24 4.66a.69.69 0 0 1 0-.65h3.32a.68.68 0 0 1 0 .65c-.74.12-.7.45-.19 1.58l.87 2 .08.09 1-2c.57-1.14.64-1.58-.15-1.7a.69.69 0 0 1-.03-.63z",C="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",S="M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z",T="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z",k="M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",L="M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z",I="M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z",M="M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z",j="M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z",O="M3 1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm14 12h-4l-1 2H8l-1-2H3V3h14z",z="M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z",$="M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z",A={name:"cx-header",components:{MwButton:b},data:function(){return{mwIconWikipediaLogo:_,mwIconBell:S,mwIconTray:O,mwIconExpand:z,mwIconUserAvatar:C}},computed:{username:function(){return mw.user.getName()},currentPageURL:function(){return"./"+mw.config.get("wgPageName")}}},P=A,E=(a("7275"),Object(m["a"])(P,v,y,!1,null,null,null)),N=E.exports,B=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("main",{staticClass:"cx-translation-list-container"},[a("nav",{staticClass:"d-xs-only-none d-sm-only-none"},[a("mw-button-group",{attrs:{items:t.listSelector,active:t.active},on:{select:function(n){t.active=n}}})],1),a("mw-card",{directives:[{name:"show",rawName:"v-show",value:"published"===t.active,expression:"active === 'published'"}],staticClass:"cx-translation-list--published",attrs:{title:t.$i18n("cx-translation-label-published")}},[t.publishedTranslationsLoaded?t._e():a("mw-spinner"),t._l(t.publishedTranslations,(function(t,n){return a("div",{key:"published-"+n,staticClass:"row pa-0 ma-0"},[a("cx-translation-work",{staticClass:"col-12 pa-0 ma-0",attrs:{translation:t.translation}})],1)}))],2),a("mw-card",{directives:[{name:"show",rawName:"v-show",value:"draft"===t.active,expression:"active === 'draft'"}],staticClass:"cx-translation-list--draft",attrs:{title:t.$i18n("cx-translation-label-draft")}},[t.draftTranslationsLoaded?t._e():a("mw-spinner"),t._l(t.draftTranslations,(function(t,n){return a("div",{key:"published-"+n,staticClass:"row pa-0 ma-0"},[a("cx-translation-work",{staticClass:"col-12 pa-0 ma-0",attrs:{translation:t.translation}})],1)}))],2),a("mw-card",{directives:[{name:"show",rawName:"v-show",value:"suggestions"===t.active,expression:"active === 'suggestions'"}],staticClass:"cx-translation-list--suggestions",attrs:{title:t.$i18n("cx-suggestionlist-title")}},[t.suggestionsLoaded?t._e():a("mw-spinner"),t._l(t.suggestionsForPair,(function(n,e){return a("div",{key:"published-"+e,staticClass:"row pa-0 ma-0"},[a("cx-translation-suggestion",{staticClass:"col-12 pa-0 ma-0",attrs:{suggestion:n,from:t.sourceLanguage,to:t.targetLanguage}})],1)}))],2),a("mw-bottom-navigation",{staticClass:"d-xs-only-flex d-sm-only-flex d-none"},[a("mw-button-group",{attrs:{items:t.listSelector,active:t.active},on:{select:function(n){t.active=n}}})],1)],1)},H=[],F=(a("99af"),a("f3f3")),V=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"mw-ui-card",attrs:{id:t.id}},[a("div",{staticClass:"mw-ui-card__title title",domProps:{textContent:t._s(t.title)}}),a("div",{staticClass:"mw-ui-card__content"},[t._t("default")],2)])},U=[],q={name:"mw-card",props:{id:{type:String,default:null},title:String}},D=q,R=(a("32bc"),Object(m["a"])(D,V,U,!1,null,null,null)),W=R.exports,J=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.translation?a("div",{directives:[{name:"show",rawName:"v-show",value:t.translation,expression:"translation"}],staticClass:"row cx-translation pa-4",on:{click:t.handleClick}},[a("div",{staticClass:"col-2 pa-2"},[a("mw-thumbnail",{attrs:{thumbnail:t.getImage(t.translation.sourceLanguage,t.translation.sourceTitle)}})],1),a("div",{staticClass:"col-9 pa-2"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12 cx-translation__source-title",attrs:{lang:t.translation.sourceLanguage}},[t._v(t._s(t.translation.sourceTitle))]),a("span",{staticClass:"col-12 cx-translation__target-title",attrs:{lang:t.translation.targetLanguage}},[t._v(t._s(t.translation.targetTitle))]),a("span",{staticClass:"col-12 mt-2 cx-translation__languages text-small"},[a("mw-autonym",{attrs:{lang:t.translation.sourceLanguage}}),a("mw-icon",{attrs:{icon:t.mwIconArrowForward}}),a("mw-autonym",{attrs:{lang:t.translation.targetLanguage}})],1)])]),a("div",{staticClass:"col-1 pa-2"},[a("mw-icon",{attrs:{size:24,icon:"published"===t.translation.status?t.mwIconEdit:t.mwIconTrash}})],1)]):t._e()},G=[],K=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.thumbnail?a("img",{staticClass:"mw-ui-thumbnail",attrs:{loading:"lazy",width:"100px",height:"100px",src:t.thumbnail.source}}):a("mw-ui-icon",{staticClass:"mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",attrs:{icon:t.mwIconImageLayoutFrameless,size:48}})},X=[],Z={name:"mw-ui-thumbnail",data:function(){return{mwIconImageLayoutFrameless:I}},props:{thumbnail:{type:Object,default:null}},components:{MwUiIcon:f},methods:{handleClick:function(t){this.$emit("click",t)}}},Q=Z,Y=(a("a0eb"),Object(m["a"])(Q,K,X,!1,null,null,null)),tt=Y.exports,nt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a(t.component,{tag:"component",class:t.classes,attrs:{lang:t.lang,dir:t.getDir(t.lang),href:t.href},domProps:{textContent:t._s(t.autonym(t.lang))},on:{click:t.handleClick}})},at=[],et=a("2f62"),it={name:"mw-autonym",props:{id:String,lang:String,href:String},computed:Object(F["a"])({},Object(et["b"])({languageInfo:function(t){return t.wikipedia.languageInfo}}),{component:function(){return this.href?"a":"span"},classes:function(){return{"mw-ui-autonym":!0}}}),methods:{autonym:function(t){var n;return(null===(n=this.languageInfo[t])||void 0===n?void 0:n.autonym)||t},getDir:function(t){var n;return(null===(n=this.languageInfo[t])||void 0===n?void 0:n.dir)||"auto"},handleClick:function(t){this.$emit("click",t)}}},st=it,ot=Object(m["a"])(st,nt,at,!1,null,null,null),rt=ot.exports,lt={name:"cx-translation-work",data:function(){return{mwIconEdit:T,mwIconTrash:j,mwIconArrowForward:$}},props:{translation:{type:Object,required:!0}},components:{MwThumbnail:tt,MwAutonym:rt,MwIcon:f},computed:Object(F["a"])({},Object(et["b"])({articles:function(t){return t.wikipedia.articles}})),methods:{handleClick:function(t){this.$emit("click",t)},getMetadata:function(t,n){return this.$store.getters["wikipedia/getMetadata"](t,n)},getImage:function(t,n){var a=this.getMetadata(t,n);return a&&a.thumbnail}}},ct=lt,ut=(a("69ee"),Object(m["a"])(ct,J,G,!1,null,null,null)),dt=ut.exports,mt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"row cx-suggestion pa-4",attrs:{if:t.suggestion},on:{click:t.handleClick}},[a("div",{staticClass:"col-2 pa-2"},[a("mw-thumbnail",{attrs:{thumbnail:t.thumbnail}})],1),a("div",{staticClass:"col-9 pa-2"},[a("div",{staticClass:"row ma-0",attrs:{if:t.suggestion}},[a("span",{staticClass:"col-12 cx-suggestion__source-title",attrs:{lang:t.from}},[t._v(t._s(t.displayTitle))]),a("span",{staticClass:"col-12 cx-suggestion__source-description",attrs:{lang:t.from}},[t._v(t._s(t.description))]),a("span",{staticClass:"col-12 mt-2 cx-suggestion__languages text-small"},[a("mw-autonym",{attrs:{lang:t.from}}),t._v(" "),a("mw-icon",{attrs:{icon:t.mwIconArrowForward}}),a("mw-autonym",{attrs:{lang:t.to}})],1)])]),a("div",{staticClass:"col-1 pa-2"},[a("mw-icon",{attrs:{icon:t.mwIconStar,size:24}})],1)])},gt=[],ft=(a("a4d3"),a("e01a"),a("ac1f"),a("5319"),{name:"TranslationSuggestion",data:function(){return{mwIconStar:M,mwIconArrowForward:$}},props:{suggestion:{type:Object,default:null},from:{type:String,default:null},to:{type:String,default:null}},components:{MwThumbnail:tt,MwAutonym:rt,MwIcon:f},computed:{description:function(){return this.metadata&&this.metadata.description},thumbnail:function(){return this.metadata&&this.metadata.thumbnail},metadata:function(){return this.$store.getters["wikipedia/getMetadata"](this.from,this.displayTitle)},displayTitle:function(){return this.suggestion.title.replace(/_/g," ")}},methods:{handleClick:function(t){this.$emit("click",t)},autonym:function(t){return languagedata.getAutonym(t)}}}),pt=ft,ht=(a("46f8"),Object(m["a"])(pt,mt,gt,!1,null,null,null)),wt=ht.exports,bt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"row mw-ui-button-group ma-0 pa-0",class:t.classes,attrs:{id:t.id}},t._l(t.items,(function(n){return a("mw-button",t._b({key:n.value,class:"ma-0 col-"+12/t.items.length,attrs:{value:n.value,"aria-selected":t.active===n.value,depressed:t.active===n.value},on:{click:function(a){return t.$emit("select",n.value)}}},"mw-button",n.props,!1))})),1)},vt=[],yt={name:"mw-button-group",components:{MwButton:b},props:{items:Array,id:String,active:String},computed:{classes:function(){return{"mw-ui-button-group":!0}}}},xt=yt,_t=(a("c550"),Object(m["a"])(xt,bt,vt,!1,null,null,null)),Ct=_t.exports,St=function(t,n){n._c;return n._m(0)},Tt=[function(t,n){var a=n._c;return a("div",{staticClass:"mw-ui-spinner"},[a("div",{staticClass:"mw-ui-spinner__bounce"})])}],kt=(a("14ee"),{}),Lt=Object(m["a"])(kt,St,Tt,!0,null,null,null),It=Lt.exports,Mt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("footer",{staticClass:"mw-ui-bottom-navigation row ma-0 justify-center"},[a("div",{staticClass:"col-12 ma-0 pa-0"},[t._t("default")],2)])},jt=[],Ot={name:"mw-ui-bottom-navigation"},zt=Ot,$t=(a("9d44"),Object(m["a"])(zt,Mt,jt,!1,null,null,null)),At=$t.exports,Pt={name:"cx-translation-list",components:{CxTranslationWork:dt,CxTranslationSuggestion:wt,MwCard:W,MwSpinner:It,MwButtonGroup:Ct,MwBottomNavigation:At},data:function(){return{mwIconArticleCheck:k,mwIconLightBulb:L,mwIconEdit:T,suggestionsLoaded:!1,publishedTranslationsLoaded:!1,draftTranslationsLoaded:!1,active:"suggestions",sourceLanguage:"en",targetLanguage:"ml"}},computed:Object(F["a"])({listSelector:function(){return[{value:"suggestions",props:{label:this.$i18n("cx-translation-filter-suggested-translations"),icon:L,type:"text"}},{value:"draft",props:{label:this.$i18n("cx-translation-filter-draft-translations"),icon:T,type:"text"}},{value:"published",props:{label:this.$i18n("cx-translation-filter-published-translations"),icon:k,type:"text"}}]}},Object(et["b"])({draftTranslations:function(t){return t.translator.draftTranslations},publishedTranslations:function(t){return t.translator.publishedTranslations},suggestions:function(t){return t.suggestions.suggestions}}),{suggestionsForPair:function(){var t,n="".concat(this.sourceLanguage,"/").concat(this.targetLanguage),a=null===(t=this.suggestions[n])||void 0===t?void 0:t.suggestions;return a||[]}}),watch:{active:function(){window.scrollTo(0,0)},suggestions:function(){this.suggestionsLoaded=!0},publishedTranslations:function(){this.publishedTranslationsLoaded=!0},draftTranslations:function(){this.draftTranslationsLoaded=!0}},created:function(){this.$store.dispatch("translator/init"),this.$store.dispatch("wikipedia/fetchLanguageInfo"),this.$store.dispatch("suggestions/getSuggestions",{from:this.sourceLanguage,to:this.targetLanguage})}},Et=Pt,Nt=Object(m["a"])(Et,B,H,!1,null,null,null),Bt=Nt.exports,Ht=(a("5c26"),{name:"cx-dashboard",components:{MwButton:b,CxHeader:N,CxTranslationList:Bt},data:function(){return{mwIconAdd:x}}}),Ft=Ht,Vt=(a("7c55"),Object(m["a"])(Ft,i,s,!1,null,null,null)),Ut=Vt.exports,qt=a("bc3a"),Dt=a.n(qt);function Rt(t){var n={action:"query",format:"json",assert:"user",formatversion:2,list:"contenttranslation",type:t},a=mw.util.wikiScript("api");return Dt()({method:"get",url:a,api:a,params:n,withCredentials:!0}).then((function(t){return t.data.query.contenttranslation.translations}))}function Wt(){return Rt("published")}function Jt(){return Rt("draft")}var Gt={fetchDraftTranslations:Jt,fetchPublishedTranslations:Wt},Kt={username:mw.config.get("wgUserName"),publishedTranslations:[],draftTranslations:[],savedForLaterTranslations:[]},Xt={setPublishedTranslations:function(t,n){t.publishedTranslations=n},setDraftTranslations:function(t,n){t.draftTranslations=n}},Zt={},Qt={init:function(t){var n=t.dispatch;n("publishedTranslations"),n("draftTranslations")},publishedTranslations:function(t){var n=t.commit,a=t.dispatch;Gt.fetchPublishedTranslations().then((function(t){n("setPublishedTranslations",t);for(var e=0;e<t.length;e++)a("wikipedia/fetchMetadata",{language:t[e].translation.sourceLanguage,titles:[t[e].translation.sourceTitle]},{root:!0})}))},draftTranslations:function(t){var n=t.commit,a=t.dispatch;Gt.fetchDraftTranslations().then((function(t){n("setDraftTranslations",t);for(var e=0;e<t.length;e++)a("wikipedia/fetchMetadata",{language:t[e].translation.sourceLanguage,titles:[t[e].translation.sourceTitle]},{root:!0})}))}},Yt={namespaced:!0,state:Kt,getters:Zt,actions:Qt,mutations:Xt},tn=a("fc11");function nn(t,n,a){var e={source:t,target:n,seed:a,application:"CX"},i=mw.config.get("wgRecommendToolAPIURL");return Dt.a.get(i,{params:e}).then((function(t){return t.data}))}var an={fetchSuggestions:nn},en={suggestions:{},favorites:{}},sn={setSuggestions:function(t,n){var a="".concat(n.from,"/").concat(n.to);t.suggestions=Object(F["a"])({},t.suggestions,Object(tn["a"])({},a,n))}},on={},rn={getSuggestions:function(t,n){var a=t.commit,e=t.dispatch;an.fetchSuggestions(n.from,n.to,n.seeds).then((function(t){var i=[];a("setSuggestions",{from:n.from,to:n.to,suggestions:t});for(var s=0;s<t.length;s++)i.push(t[s].title);e("wikipedia/fetchMetadata",{language:n.from,titles:i},{root:!0})}))}},ln={namespaced:!0,state:en,getters:on,actions:rn,mutations:sn};a("a15b");function cn(t,n){var a={action:"query",format:"json",formatversion:2,prop:"info|pageprops|pageimages|description|pageviews",pvipdays:7,piprop:"thumbnail|name|original",pithumbsize:100,titles:n.join("|"),origin:"*"},e="https://".concat(t,".wikipedia.org/w/api.php");return Dt.a.get(e,{params:a}).then((function(t){return t.data.query.pages}))}var un={fetchMetadata:cn};function dn(t){var n={action:"query",format:"json",formatversion:2,meta:"languageinfo",liprop:"autonym|dir",origin:"*"};return t&&(n["licontinue"]=t),Dt.a.get(mw.util.wikiScript("api"),{params:n}).then((function(t){var n,a=null===(n=t.data.continue)||void 0===n?void 0:n.licontinue,e=t.data.query.languageinfo;return a&&(e=Object.assign({},e,dn(a))),e}))}var mn={fetchLanguageInfo:dn},gn={articles:{},languageInfo:{}},fn={addArticleMetadata:function(t,n){var a="".concat(n.pagelanguage,"/").concat(n.title);t.articles=Object(F["a"])({},t.articles,Object(tn["a"])({},a,n))},setLanguageInfo:function(t,n){t.languageInfo=n}},pn={getMetadata:function(t){return function(n,a){var e="".concat(n,"/").concat(a);return t.articles[e]}}},hn={fetchMetadata:function(t,n){var a=t.commit;un.fetchMetadata(n.language,n.titles).then((function(t){for(var n=0;n<t.length;n++)a("addArticleMetadata",t[n])}))},fetchLanguageInfo:function(t,n){var a=t.commit;mn.fetchLanguageInfo().then((function(t){a("setLanguageInfo",t)}))}},wn={namespaced:!0,state:gn,getters:pn,actions:hn,mutations:fn};e["a"].use(et["a"]);var bn=new et["a"].Store({modules:{translator:Yt,suggestions:ln,wikipedia:wn}}),vn=a("5093"),yn=a.n(vn),xn=mw.config.get("wgUserLanguage"),_n="en",Cn=mw.messages.values||{};e["a"].use(yn.a,{locale:xn,finalFallback:_n,messages:Cn}),new e["a"]({store:bn,render:function(t){return t(Ut)},el:"#cxdashboard"})},"5c26":function(t,n,a){},"69ee":function(t,n,a){"use strict";var e=a("7b46"),i=a.n(e);i.a},7275:function(t,n,a){"use strict";var e=a("a2f6"),i=a.n(e);i.a},7648:function(t,n,a){},"7b46":function(t,n,a){},"7c55":function(t,n,a){"use strict";var e=a("2395"),i=a.n(e);i.a},"8a15":function(t,n,a){},"8f92":function(t,n,a){"use strict";var e=a("8a15"),i=a.n(e);i.a},"96d6":function(t,n,a){"use strict";var e=a("e8c8"),i=a.n(e);i.a},"9d44":function(t,n,a){"use strict";var e=a("7648"),i=a.n(e);i.a},a0eb:function(t,n,a){"use strict";var e=a("c191"),i=a.n(e);i.a},a2f6:function(t,n,a){},b76b:function(t,n,a){},c191:function(t,n,a){},c3bd:function(t,n,a){},c550:function(t,n,a){"use strict";var e=a("b76b"),i=a.n(e);i.a},e243:function(t,n,a){},e8c8:function(t,n,a){}});
//# sourceMappingURL=cxdashboard.js.map