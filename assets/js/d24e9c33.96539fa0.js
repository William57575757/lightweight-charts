"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"PriceFormatCustom",title:"Interface: PriceFormatCustom",sidebar_label:"PriceFormatCustom",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,l={unversionedId:"api/interfaces/PriceFormatCustom",id:"version-3.8/api/interfaces/PriceFormatCustom",title:"Interface: PriceFormatCustom",description:"Represents series value formatting options.",source:"@site/versioned_docs/version-3.8/api/interfaces/PriceFormatCustom.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceFormatCustom",permalink:"/lightweight-charts/docs/3.8/api/interfaces/PriceFormatCustom",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"PriceFormatCustom",title:"Interface: PriceFormatCustom",sidebar_label:"PriceFormatCustom",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"formatter",id:"formatter",level:3},{value:"minMove",id:"minmove",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Represents series value formatting options."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"custom"')),(0,o.kt)("p",null,"The custom price format."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"formatter"},"formatter"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"formatter"),": ",(0,o.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#priceformatterfn"},(0,o.kt)("inlineCode",{parentName:"a"},"PriceFormatterFn"))),(0,o.kt)("p",null,"Override price formatting behaviour. Can be used for cases that can't be covered with built-in price formats."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"minmove"},"minMove"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"minMove"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"The minimum possible step size for price value movement."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"0.01")))}m.isMDXComponent=!0}}]);