"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2188],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,d=m["".concat(s,".").concat(u)]||m[u]||h[u]||i;return a?n.createElement(d,p(p({ref:t},c),{},{components:a})):n.createElement(d,p({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9879:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),p=["components"],o={id:"SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",sidebar_label:"SeriesPartialOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},s=void 0,l={unversionedId:"api/interfaces/SeriesPartialOptionsMap",id:"api/interfaces/SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",description:"Represents the type of partial options for each series type.",source:"@site/docs/api/interfaces/SeriesPartialOptionsMap.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesPartialOptionsMap",permalink:"/lightweight-charts/docs/next/api/interfaces/SeriesPartialOptionsMap",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SeriesPartialOptionsMap",title:"Interface: SeriesPartialOptionsMap",sidebar_label:"SeriesPartialOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c={},h=[{value:"Properties",id:"properties",level:2},{value:"Bar",id:"bar",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Area",id:"area",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Line",id:"line",level:3},{value:"Histogram",id:"histogram",level:3}],m={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents the type of partial options for each series type."),(0,i.kt)("p",null,"For example a bar series has options represented by ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#barseriespartialoptions"},"BarSeriesPartialOptions"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bar"},"Bar"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Bar"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BarStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"BarStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of bar series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"candlestick"},"Candlestick"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Candlestick"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CandlestickStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CandlestickStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of candlestick series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"area"},"Area"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Area"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/AreaStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"AreaStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of area series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"baseline"},"Baseline"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Baseline"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BaselineStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"BaselineStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of baseline series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"line"},"Line"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Line"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LineStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"LineStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of line series partial options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"histogram"},"Histogram"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Histogram"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HistogramStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"HistogramStyleOptions"))," & ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("p",null,"The type of histogram series partial options."))}u.isMDXComponent=!0}}]);