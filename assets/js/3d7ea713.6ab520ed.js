"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6574],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||g[m]||r;return a?i.createElement(d,o(o({ref:t},p),{},{components:a})):i.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(58168),n=(a(96540),a(15680));const r={sidebar_position:1},o="Series types",s={unversionedId:"series-types",id:"version-4.1/series-types",title:"Series types",description:"In this article you can read a brief overview of all supported series types.",source:"@site/versioned_docs/version-4.1/series-types.md",sourceDirName:".",slug:"/series-types",permalink:"/lightweight-charts/docs/series-types",draft:!1,tags:[],version:"4.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/lightweight-charts/docs/"},next:{title:"Price scale",permalink:"/lightweight-charts/docs/price-scale"}},l={},c=[{value:"Series Customisation",id:"series-customisation",level:2},{value:"Area",id:"area",level:2},{value:"Bar",id:"bar",level:2},{value:"Baseline",id:"baseline",level:2},{value:"Candlestick",id:"candlestick",level:2},{value:"Histogram",id:"histogram",level:2},{value:"Line",id:"line",level:2},{value:"Custom Series (Plugins)",id:"custom-series-plugins",level:2}],p={toc:c},h="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(h,(0,i.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"series-types"},"Series types"),(0,n.yg)("p",null,"In this article you can read a brief overview of all supported series types."),(0,n.yg)("h2",{id:"series-customisation"},"Series Customisation"),(0,n.yg)("p",null,"Customization options for series are dependent on their specific type. Each type of series has its own set of available options, which can be found in the documentation provided for that particular series type. This means that any type of series can be customized, but the options you can apply will vary depending on the type of series you are working with."),(0,n.yg)("p",null,"If you'd like to change any option of a series, you could do this in different ways:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can specify the default options while creating a series:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// change default top & bottom colors of an area series in creating time\nconst series = chart.addAreaSeries({\n    topColor: 'red',\n    bottomColor: 'green',\n});\n")),(0,n.yg)("p",{parentName:"li"},"Note that every method to create a series has an optional ",(0,n.yg)("inlineCode",{parentName:"p"},"options")," parameter.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#applyoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi.applyOptions"))," method to apply other options on the fly:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// updating candlestick series options on the fly\ncandlestickSeries.applyOptions({\n    upColor: 'red',\n    downColor: 'blue',\n});\n")))),(0,n.yg)("h2",{id:"area"},"Area"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addareaseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addAreaSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SingleValueData"},(0,n.yg)("inlineCode",{parentName:"a"},"SingleValueData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/AreaStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaStyleOptions")))),(0,n.yg)("p",null,"An area chart is basically a colored area between the line connecting all data points and ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/time-scale"},"the time scale"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst areaSeries = chart.addAreaSeries({ lineColor: LINE_LINE_COLOR, topColor: AREA_TOP_COLOR, bottomColor: AREA_BOTTOM_COLOR });\n\nconst data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];\n\nareaSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"bar"},"Bar"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addbarseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addBarSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/BarData"},(0,n.yg)("inlineCode",{parentName:"a"},"BarData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/BarStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BarStyleOptions")))),(0,n.yg)("p",null,"A bar chart shows price movements in the form of bars."),(0,n.yg)("p",null,"Vertical line length of a bar is limited by the highest and lowest price values.\nOpen & Close values are represented by tick marks, on the left & right hand side of the bar respectively:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst barSeries = chart.addBarSeries({ upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR });\n\nconst data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];\n\nbarSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"baseline"},"Baseline"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addbaselineseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addBaselineSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SingleValueData"},(0,n.yg)("inlineCode",{parentName:"a"},"SingleValueData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineStyleOptions")))),(0,n.yg)("p",null,"A baseline is basically two colored areas (top and bottom) between the line connecting all data points and ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions#basevalue"},"the base value line"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst baselineSeries = chart.addBaselineSeries({ baseValue: { type: 'price', price: 25 }, topLineColor: BASELINE_TOP_LINE_COLOR, topFillColor1: BASELINE_TOP_FILL_COLOR1, topFillColor2: BASELINE_TOP_FILL_COLOR2, bottomLineColor: BASELINE_BOTTOM_LINE_COLOR, bottomFillColor1: BASELINE_BOTTOM_FILL_COLOR1, bottomFillColor2: BASELINE_BOTTOM_FILL_COLOR2 });\n\nconst data = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];\n\nbaselineSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"candlestick"},"Candlestick"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addcandlestickseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addCandlestickSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/CandlestickData"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/CandlestickStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickStyleOptions")))),(0,n.yg)("p",null,"A candlestick chart shows price movements in the form of candlesticks.\nOn the candlestick chart, open & close values form a solid body of a candle while wicks show high & low values for a candlestick's time interval:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst candlestickSeries = chart.addCandlestickSeries({ upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false, wickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR });\n\nconst data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];\n\ncandlestickSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"histogram"},"Histogram"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addhistogramseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addHistogramSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/HistogramStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramStyleOptions")))),(0,n.yg)("p",null,"A histogram series is a graphical representation of the value distribution.\nHistogram creates intervals (columns) and counts how many values fall into each column:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst histogramSeries = chart.addHistogramSeries({ color: HISTOGRAM_COLOR });\n\nconst data = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922, color: 'red' }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722, color: 'red' }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922, color: 'red' }];\n\nhistogramSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"line"},"Line"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addlineseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addLineSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/LineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"LineStyleOptions")))),(0,n.yg)("p",null,"A line chart is a type of chart that displays information as series of the data points connected by straight line segments:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst lineSeries = chart.addLineSeries({ color: LINE_LINE_COLOR });\n\nconst data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];\n\nlineSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"custom-series-plugins"},"Custom Series (Plugins)"),(0,n.yg)("p",null,"Lightweight Charts offers the ability to add your own custom series types, also known as series plugins. This feature allows developers to extend the functionality of the library by adding new chart types, indicators, or other custom visualizations."),(0,n.yg)("p",null,"Custom series types can be defined by creating a class which implements the ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView"},"ICustomSeriesPaneView")," interface. This class defines the rendering code which Lightweight Charts will use to draw the series on the chart. Once a custom series type is defined, it can be added to any chart instance using the ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addcustomseries"},(0,n.yg)("inlineCode",{parentName:"a"},"addCustomSeries()"))," method, and be used just like any other series."),(0,n.yg)("p",null,"Please see the ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/plugins/intro"},"Plugins")," article for more details."))}g.isMDXComponent=!0}}]);