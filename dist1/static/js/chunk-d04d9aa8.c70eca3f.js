(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d04d9aa8"],{"1acf":function(e,t,r){"use strict";var n=r("6168"),o=r.n(n);o.a},"2fd8":function(e,t,r){},4127:function(e,t,r){"use strict";var n=r("d233"),o=r("b313"),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,u=function(e,t){l.apply(e,c(t)?t:[t])},s=Date.prototype.toISOString,f=o["default"],d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e},y=function e(t,r,o,i,a,l,s,f,y,h,b,m,g){var v=t;if("function"===typeof s?v=s(r,v):v instanceof Date?v=h(v):"comma"===o&&c(v)&&(v=n.maybeMap(v,(function(e){return e instanceof Date?h(e):e})).join(",")),null===v){if(i)return l&&!m?l(r,d.encoder,g,"key"):r;v=""}if(p(v)||n.isBuffer(v)){if(l){var j=m?r:l(r,d.encoder,g,"key");return[b(j)+"="+b(l(v,d.encoder,g,"value"))]}return[b(r)+"="+b(String(v))]}var O,w=[];if("undefined"===typeof v)return w;if(c(s))O=s;else{var S=Object.keys(v);O=f?S.sort(f):S}for(var x=0;x<O.length;++x){var D=O[x],N=v[D];if(!a||null!==N){var k=c(v)?"function"===typeof o?o(r,D):r:r+(y?"."+D:"["+D+"]");u(w,e(N,k,o,i,a,l,s,f,y,h,b,m,g))}}return w},h=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o["default"];if("undefined"!==typeof e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=d.filter;return("function"===typeof e.filter||c(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}};e.exports=function(e,t){var r,n,o=e,i=h(t);"function"===typeof i.filter?(n=i.filter,o=n("",o)):c(i.filter)&&(n=i.filter,r=n);var l,s=[];if("object"!==typeof o||null===o)return"";l=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var f=a[l];r||(r=Object.keys(o)),i.sort&&r.sort(i.sort);for(var d=0;d<r.length;++d){var p=r[d];i.skipNulls&&null===o[p]||u(s,y(o[p],p,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var b=s.join(i.delimiter),m=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),b.length>0?m+b:""}},4328:function(e,t,r){"use strict";var n=r("4127"),o=r("9e6a"),i=r("b313");e.exports={formats:i,parse:o,stringify:n}},6168:function(e,t,r){},"9e6a":function(e,t,r){"use strict";var n=r("d233"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},u="utf8=%26%2310003%3B",s="utf8=%E2%9C%93",f=function(e,t){var r,f={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,p=t.parameterLimit===1/0?void 0:t.parameterLimit,y=d.split(t.delimiter,p),h=-1,b=t.charset;if(t.charsetSentinel)for(r=0;r<y.length;++r)0===y[r].indexOf("utf8=")&&(y[r]===s?b="utf-8":y[r]===u&&(b="iso-8859-1"),h=r,r=y.length);for(r=0;r<y.length;++r)if(r!==h){var m,g,v=y[r],j=v.indexOf("]="),O=-1===j?v.indexOf("="):j+1;-1===O?(m=t.decoder(v,a.decoder,b,"key"),g=t.strictNullHandling?null:""):(m=t.decoder(v.slice(0,O),a.decoder,b,"key"),g=n.maybeMap(l(v.slice(O+1),t),(function(e){return t.decoder(e,a.decoder,b,"value")}))),g&&t.interpretNumericEntities&&"iso-8859-1"===b&&(g=c(g)),v.indexOf("[]=")>-1&&(g=i(g)?[g]:g),o.call(f,m)?f[m]=n.combine(f[m],g):f[m]=g}return f},d=function(e,t,r,n){for(var o=n?t:l(t,r),i=e.length-1;i>=0;--i){var a,c=e[i];if("[]"===c&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var u="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,s=parseInt(u,10);r.parseArrays||""!==u?!isNaN(s)&&c!==u&&String(s)===u&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(a=[],a[s]=o):a[u]=o:a={0:o}}o=a}return o},p=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,c=/(\[[^[\]]*])/g,l=r.depth>0&&a.exec(i),u=l?i.slice(0,l.index):i,s=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;s.push(u)}var f=0;while(r.depth>0&&null!==(l=c.exec(i))&&f<r.depth){if(f+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(l[1])}return l&&s.push("["+i.slice(l.index)+"]"),d(s,t,r,n)}},y=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?a.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:a.comma,decoder:"function"===typeof e.decoder?e.decoder:a.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}};e.exports=function(e,t){var r=y(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof e?f(e,r):e,i=r.plainObjects?Object.create(null):{},a=Object.keys(o),c=0;c<a.length;++c){var l=a[c],u=p(l,o[l],r,"string"===typeof e);i=n.merge(i,u,r)}return n.compact(i)}},b313:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i=r("d233"),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i]);t.obj[t.prop]=n}}},c=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},l=function e(t,r,i){if(!r)return t;if("object"!==typeof r){if(o(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var a=t;return o(t)&&!o(r)&&(a=c(t,i)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var a=t[o];a&&"object"===typeof a&&r&&"object"===typeof r?t[o]=e(a,r,i):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),a)},u=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},s=function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(o){return n}},f=function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<n.length;++a){var c=n.charCodeAt(a);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=n.charAt(a):c<128?o+=i[c]:c<2048?o+=i[192|c>>6]+i[128|63&c]:c<55296||c>=57344?o+=i[224|c>>12]+i[128|c>>6&63]+i[128|63&c]:(a+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(a)),o+=i[240|c>>18]+i[128|c>>12&63]+i[128|c>>6&63]+i[128|63&c])}return o},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],c=Object.keys(i),l=0;l<c.length;++l){var u=c[l],s=i[u];"object"===typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:i,prop:u}),r.push(s))}return a(t),e},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},y=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},h=function(e,t){return[].concat(e,t)},b=function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)};e.exports={arrayToObject:c,assign:u,combine:h,compact:d,decode:s,encode:f,isBuffer:y,isRegExp:p,maybeMap:b,merge:l}},db9b:function(e,t,r){"use strict";var n=r("2fd8"),o=r.n(n);o.a},dd47:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:""}},[r("el-container",{staticClass:"cont-conar cont-jjfa",staticStyle:{"margin-top":"0",border:"0"}},[r("el-header",{staticStyle:{height:"auto",padding:"0 5px"}},[r("h2",{staticStyle:{"line-height":"1.8"}},[e._v("配置清单列表 "),r("span",{staticStyle:{float:"right"}},[r("el-button",{staticStyle:{"background-color":"#ddd",border:"0",color:"#6bc966"},attrs:{type:"primary"},on:{click:e.show}},[e._v("返回上一页")])],1)])]),r("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData1}},[r("el-table-column",{staticStyle:{"text-align":"center"},attrs:{prop:"",label:"产品类型",width:"120"}},[e._v("UPS")]),r("el-table-column",{staticStyle:{"text-align":"center"},attrs:{prop:"type",label:"产品系列",width:"120"}}),r("el-table-column",{attrs:{prop:"sku",label:"产品型号",width:"220"}}),r("el-table-column",{attrs:{prop:"description",label:"描述"}}),r("el-table-column",{attrs:{prop:"productNum",label:"数量",width:"120"}})],1)],1)],1)},o=[],i=r("fc91"),a={name:"solution-list",data:function(){return{sendData:{solutionId:"4",productModel:"A01T1B2",sku:""},tableData1:[],size:"",total:1,totalNumber:""}},mounted:function(){},created:function(){this.sendData.solutionId=this.$route.query.solutionId,this.getProductList()},methods:{getProductList:function(){var e=this;e.sendData.productModel=sessionStorage.getItem("productModel"),Object(i["d"])(e.sendData).then((function(t){var r=t.data;e.tableData1=r.haschosen}))},show:function(){this.$router.go(-1)}}},c=a,l=(r("db9b"),r("1acf"),r("2877")),u=Object(l["a"])(c,n,o,!1,null,null,null);t["default"]=u.exports},fc91:function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"a",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"d",(function(){return u})),r.d(t,"i",(function(){return s})),r.d(t,"c",(function(){return f})),r.d(t,"g",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r("b775"),o=r("4328"),i=r.n(o);function a(e){return Object(n["a"])({url:"/c4c/snd-solution/querySndSolution",method:"post",data:i.a.stringify(e)})}function c(e){return Object(n["a"])({url:"/c4c/snd-solution/addSndSolution",method:"post",data:i.a.stringify(e)})}function l(e){return Object(n["a"])({url:"/c4c/memberlist/quaryMemberlist",method:"post",data:i.a.stringify(e)})}function u(e){return Object(n["a"])({url:"/c4c/snd-product/getProductList",method:"post",data:i.a.stringify(e)})}function s(e){return Object(n["a"])({url:"/c4c/snd-design/addDesign",method:"post",data:i.a.stringify(e)})}function f(e){return Object(n["a"])({url:"/c4c/snd-solution/filterSndSolution",method:"post",data:i.a.stringify(e)})}function d(e){return Object(n["a"])({url:"/c4c/snd-statuscode/quaryStatuscode?"+e,method:"get",data:e})}function p(e){return Object(n["a"])({url:"/c4c/snd-solution/deleteSndSolution",method:"post",data:i.a.stringify(e)})}}}]);