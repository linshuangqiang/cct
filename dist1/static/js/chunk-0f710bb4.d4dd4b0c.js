(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f710bb4"],{2017:function(e,t,r){"use strict";var n=r("cafe"),o=r.n(n);o.a},"3af4":function(e,t,r){"use strict";var n=r("5f66"),o=r.n(n);o.a},4127:function(e,t,r){"use strict";var n=r("d233"),o=r("b313"),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,f=o["default"],p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},d=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e},y=function e(t,r,o,i,a,c,u,f,y,m,h,g,b){var v=t;if("function"===typeof u?v=u(r,v):v instanceof Date?v=m(v):"comma"===o&&s(v)&&(v=n.maybeMap(v,(function(e){return e instanceof Date?m(e):e})).join(",")),null===v){if(i)return c&&!g?c(r,p.encoder,b,"key"):r;v=""}if(d(v)||n.isBuffer(v)){if(c){var w=g?r:c(r,p.encoder,b,"key");return[h(w)+"="+h(c(v,p.encoder,b,"value"))]}return[h(r)+"="+h(String(v))]}var O,j=[];if("undefined"===typeof v)return j;if(s(u))O=u;else{var S=Object.keys(v);O=f?S.sort(f):S}for(var x=0;x<O.length;++x){var k=O[x],N=v[k];if(!a||null!==N){var D=s(v)?"function"===typeof o?o(r,k):r:r+(y?"."+k:"["+k+"]");l(j,e(N,D,o,i,a,c,u,f,y,m,h,g,b))}}return j},m=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o["default"];if("undefined"!==typeof e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=p.filter;return("function"===typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?p.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:p.encode,encoder:"function"===typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}};e.exports=function(e,t){var r,n,o=e,i=m(t);"function"===typeof i.filter?(n=i.filter,o=n("",o)):s(i.filter)&&(n=i.filter,r=n);var c,u=[];if("object"!==typeof o||null===o)return"";c=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var f=a[c];r||(r=Object.keys(o)),i.sort&&r.sort(i.sort);for(var p=0;p<r.length;++p){var d=r[p];i.skipNulls&&null===o[d]||l(u,y(o[d],d,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var h=u.join(i.delimiter),g=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),h.length>0?g+h:""}},4328:function(e,t,r){"use strict";var n=r("4127"),o=r("9e6a"),i=r("b313");e.exports={formats:i,parse:o,stringify:n}},"5f66":function(e,t,r){},"9e6a":function(e,t,r){"use strict";var n=r("d233"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l="utf8=%26%2310003%3B",u="utf8=%E2%9C%93",f=function(e,t){var r,f={},p=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,y=p.split(t.delimiter,d),m=-1,h=t.charset;if(t.charsetSentinel)for(r=0;r<y.length;++r)0===y[r].indexOf("utf8=")&&(y[r]===u?h="utf-8":y[r]===l&&(h="iso-8859-1"),m=r,r=y.length);for(r=0;r<y.length;++r)if(r!==m){var g,b,v=y[r],w=v.indexOf("]="),O=-1===w?v.indexOf("="):w+1;-1===O?(g=t.decoder(v,a.decoder,h,"key"),b=t.strictNullHandling?null:""):(g=t.decoder(v.slice(0,O),a.decoder,h,"key"),b=n.maybeMap(c(v.slice(O+1),t),(function(e){return t.decoder(e,a.decoder,h,"value")}))),b&&t.interpretNumericEntities&&"iso-8859-1"===h&&(b=s(b)),v.indexOf("[]=")>-1&&(b=i(b)?[b]:b),o.call(f,g)?f[g]=n.combine(f[g],b):f[g]=b}return f},p=function(e,t,r,n){for(var o=n?t:c(t,r),i=e.length-1;i>=0;--i){var a,s=e[i];if("[]"===s&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&s!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[],a[u]=o):a[l]=o:a={0:o}}o=a}return o},d=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,c=r.depth>0&&a.exec(i),l=c?i.slice(0,c.index):i,u=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}var f=0;while(r.depth>0&&null!==(c=s.exec(i))&&f<r.depth){if(f+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+i.slice(c.index)+"]"),p(u,t,r,n)}},y=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?a.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:a.comma,decoder:"function"===typeof e.decoder?e.decoder:a.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}};e.exports=function(e,t){var r=y(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof e?f(e,r):e,i=r.plainObjects?Object.create(null):{},a=Object.keys(o),s=0;s<a.length;++s){var c=a[s],l=d(c,o[c],r,"string"===typeof e);i=n.merge(i,l,r)}return n.compact(i)}},"9ed6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("h3",{staticClass:"title"},[e._v("选型工具")])]),r("el-form-item",{attrs:{prop:"username"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"user"}})],1),r("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"password"}})],1),r("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),r("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]),r("div",{staticClass:"tips",staticStyle:{display:"none"}},[r("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),r("span",[e._v(" password: any")])])],1)],1)},o=[],i=r("61f7"),a=r("fc91"),s=(r("a78e"),{name:"Login",data:function(){var e=function(e,t,r){Object(i["b"])(t),r()},t=function(e,t,r){t.length,r()};return{loginForm:{username:"pengwtaa@novagin.com",password:"a123456789"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){console.log(1111)},methods:{GetListImg:function(){console.log(1);var e={pdpNumber:"L20200726000002-1",ProjectName:"上海仙岛大机房",ChannelName:"上海仙岛",SalesUserID:1,Remarks:"我想要豪华大机房",Flag:1,CreateUserID:1,isxNumber:"ISX202007240002",OppID:"O111111",CheckStatus:0,SolutionID:1};Object(a["logining"])(e).then((function(e){console.log(e)}))},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(t){console.log(1,e.redirect,t),e.$router.push({path:e.redirect||"/"}),console.log("login"),e.loading=!1})).catch((function(t){console.log("err:",t),e.loading=!1}))}))}}}),c=s,l=(r("2017"),r("3af4"),r("2877")),u=Object(l["a"])(c,n,o,!1,null,"44c42c7e",null);t["default"]=u.exports},b313:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i=r("d233"),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)},cafe:function(e,t,r){},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i]);t.obj[t.prop]=n}}},s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},c=function e(t,r,i){if(!r)return t;if("object"!==typeof r){if(o(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var a=t;return o(t)&&!o(r)&&(a=s(t,i)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var a=t[o];a&&"object"===typeof a&&r&&"object"===typeof r?t[o]=e(a,r,i):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),a)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},u=function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(o){return n}},f=function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<n.length;++a){var s=n.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?o+=n.charAt(a):s<128?o+=i[s]:s<2048?o+=i[192|s>>6]+i[128|63&s]:s<55296||s>=57344?o+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(a)),o+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s])}return o},p=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],s=Object.keys(i),c=0;c<s.length;++c){var l=s[c],u=i[l];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:l}),r.push(u))}return a(t),e},d=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},y=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},m=function(e,t){return[].concat(e,t)},h=function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)};e.exports={arrayToObject:s,assign:l,combine:m,compact:p,decode:u,encode:f,isBuffer:y,isRegExp:d,maybeMap:h,merge:c}},fc91:function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"f",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"i",(function(){return u})),r.d(t,"c",(function(){return f})),r.d(t,"g",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r("b775"),o=r("4328"),i=r.n(o);function a(e){return Object(n["a"])({url:"/c4c/snd-solution/querySndSolution",method:"post",data:i.a.stringify(e)})}function s(e){return Object(n["a"])({url:"/c4c/snd-solution/addSndSolution",method:"post",data:i.a.stringify(e)})}function c(e){return Object(n["a"])({url:"/c4c/memberlist/quaryMemberlist",method:"post",data:i.a.stringify(e)})}function l(e){return Object(n["a"])({url:"/c4c/snd-product/getProductList",method:"post",data:i.a.stringify(e)})}function u(e){return Object(n["a"])({url:"/c4c/snd-design/addDesign",method:"post",data:i.a.stringify(e)})}function f(e){return Object(n["a"])({url:"/c4c/snd-solution/filterSndSolution",method:"post",data:i.a.stringify(e)})}function p(e){return Object(n["a"])({url:"/c4c/snd-statuscode/quaryStatuscode?"+e,method:"get",data:e})}function d(e){return Object(n["a"])({url:"/c4c/snd-solution/deleteSndSolution",method:"post",data:i.a.stringify(e)})}}}]);