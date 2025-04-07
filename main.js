(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var A=n[s],c=o.base?A[0]+o.base:A[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var p=t(d),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=a(u,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var A=o(n,a),c=0;c<r.length;c++){var l=t(r[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=A}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},288:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(354),a=t.n(o),r=t(314),i=t.n(r)()(a());i.push([n.id,"/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\ttab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct font weight in Chrome and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\nCorrect table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\tborder-color: currentcolor;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","",{version:3,sources:["webpack://./node_modules/modern-normalize/modern-normalize.css"],names:[],mappings:"AAAA,8FAA8F;;AAE9F;;;CAGC;;AAED;;CAEC;;AAED;;;CAGC,sBAAsB;AACvB;;AAEA;CACC,sHAAsH;CACtH;;;;;;;;kBAQiB;CACjB,iBAAiB,EAAE,gDAAgD;CACnE,8BAA8B,EAAE,0EAA0E;CAC1G,WAAW,EAAE,mDAAmD;AACjE;;AAEA;;;CAGC;;AAED;CACC,SAAS,EAAE,uCAAuC;AACnD;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;;CAEC,mBAAmB;AACpB;;AAEA;;;CAGC;;AAED;;;;CAIC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;;AAEA;;CAEC;;AAED;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,0BAA0B;AAC3B;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;CAEC;;AAED;;;;CAIC,0BAA0B;AAC3B;;AAEA;;CAEC;;AAED;CACC,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;CAEC;;AAED;;CAEC,YAAY;AACb;;AAEA;;;CAGC;;AAED;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;;CAGC;;AAED;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,kBAAkB;AACnB",sourcesContent:["/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\ttab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct font weight in Chrome and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\nCorrect table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\tborder-color: currentcolor;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},365:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(354),a=t.n(o),r=t(314),i=t.n(r),s=t(417),A=t.n(s),c=new URL(t(611),t.b),l=i()(a()),d=A()(c);l.push([n.id,`* {\n    --beige: #F6F1DE;\n    --navy: #3E3F5B;\n    --teal: #8AB2A6;\n    --sage: #ACD3A8;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: min-content 1fr;\n    background: var(--navy) url(${d}) repeat-y center/cover;\n}\n\nheader {\n    justify-self: center;\n    background-color: var(--sage);\n    padding: 0 10px;\n}\n\nnav {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#content {\n    background-color: var(--beige);\n    padding: 10px;\n    margin: 0 15%;\n    min-height: 400px;\n    display: grid;\n}\n\n#content>div {\n    width: 60%;\n    margin: auto;\n    background-color: var(--teal);\n    padding: 5px;\n    align-self: center;\n}\n\n@media screen and (min-width: 451px) and (max-width: 700px) {\n    #content>div {\n        width: 80%;\n    }\n}\n\n@media screen and (max-width: 450px) {\n    #content>div {\n        width: 100%;\n        margin: 0;\n    }\n}\n\nh2 {\n    text-align: center;\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 10px;\n}\n\n.menuItem {\n    border: 3px black solid;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,mCAAmC;IACnC,qFAAgF;AACpF;;AAEA;IACI,oBAAoB;IACpB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,WAAW;QACX,SAAS;IACb;AACJ;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB",sourcesContent:['* {\n    --beige: #F6F1DE;\n    --navy: #3E3F5B;\n    --teal: #8AB2A6;\n    --sage: #ACD3A8;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: min-content 1fr;\n    background: var(--navy) url("./assets/pictures/pizza.jpg") repeat-y center/cover;\n}\n\nheader {\n    justify-self: center;\n    background-color: var(--sage);\n    padding: 0 10px;\n}\n\nnav {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#content {\n    background-color: var(--beige);\n    padding: 10px;\n    margin: 0 15%;\n    min-height: 400px;\n    display: grid;\n}\n\n#content>div {\n    width: 60%;\n    margin: auto;\n    background-color: var(--teal);\n    padding: 5px;\n    align-self: center;\n}\n\n@media screen and (min-width: 451px) and (max-width: 700px) {\n    #content>div {\n        width: 80%;\n    }\n}\n\n@media screen and (max-width: 450px) {\n    #content>div {\n        width: 100%;\n        margin: 0;\n    }\n}\n\nh2 {\n    text-align: center;\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 10px;\n}\n\n.menuItem {\n    border: 3px black solid;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}'],sourceRoot:""}]);const p=l},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},611:(n,e,t)=>{n.exports=t.p+"cefb5b25f1c629398b9f.jpg"},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),a=t.n(o),r=t(825),i=t.n(r),s=t(659),A=t.n(s),c=t(56),l=t.n(c),d=t(540),p=t.n(d),u=t(113),m=t.n(u),C=t(288),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=A().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),a()(C.A,h),C.A&&C.A.locals&&C.A.locals;var f=t(365),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=A().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),a()(f.A,b),f.A&&f.A.locals&&f.A.locals;const g=function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="home";const t=document.createElement("h2");t.textContent="Grand Opening 20XX",e.appendChild(t);const o=document.createElement("p");o.textContent="Welcome, one and all, to the website of the brand-new kosher pizza restaurant we've all wanted in Oakland. In this incredible establishment, we are dedicated to bringing you delicious pizza, pizza that meets not only the standards of kashrut of our community, but also the standards of our taste buds! It's just good pizza! So good, that it can appeal to anyone and everyone! You don't need to keep kosher to come here! You don't need to be Jewish, even!",e.appendChild(o);const a=document.createElement("p");a.textContent="This has been the dream of a few members of our community for years. And now, it's finally here!",e.appendChild(a);const r=document.createElement("p");r.textContent="So please come down to our restaurant at [Insert Address Here] and have some incredible pizza.",e.appendChild(r);const i=document.createElement("h3");i.textContent="Hours",e.appendChild(i);const s=document.createElement("ul"),A=document.createElement("li");A.textContent="Sunday: 10:00 AM - 9:00 PM",s.appendChild(A);const c=document.createElement("li");c.textContent="Monday: 11:30 AM - 9:00 PM",s.appendChild(c);const l=document.createElement("li");l.textContent="Tuesday: 11:30 AM - 9:00 PM",s.appendChild(l);const d=document.createElement("li");d.textContent="Wednesday: 11:30 AM - 9:00 PM",s.appendChild(d);const p=document.createElement("li");p.textContent="Thursday: 11:30 AM - 8:00 PM",s.appendChild(p);const u=document.createElement("li");u.textContent="Friday: 10:00 AM - 2:00 PM",s.appendChild(u);const m=document.createElement("li");m.textContent="Saturday: Closed",s.appendChild(m);const C=document.createElement("p");C.textContent="Closed for Chagim",s.appendChild(C),e.appendChild(s),n.appendChild(e)},E=function(){const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.firstChild)};class v{constructor(n,e,t){this.name=n,this.description=e,this.price=t}buildElement(n){const e=document.createElement("div");e.classList.add("menuItem");const t=document.createElement("p");t.classList.add("menuItemName"),t.textContent=this.name,e.appendChild(t);const o=document.createElement("p");o.classList.add("menuItemDesc"),o.textContent=this.description,e.appendChild(o);const a=document.createElement("p");a.classList.add("menuItemPrice"),a.textContent=`$${this.price}`,e.appendChild(a),n.appendChild(e)}}document.querySelector("#homeButton").addEventListener("click",(()=>{E(),g()})),document.querySelector("#menuButton").addEventListener("click",(()=>{E(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="menu";let t=[];t.push(new v("Cheese","A classic: Tomato sauce, mozzarella, asiago, parmesan, and a little bit of ground pepper",9.99),new v("Margherita","Tomatoes, mozzarella, basil, olive oil",11.99),new v("Veggie","As cheese, with tomatoes, olives, bell peppers, and onions",12.99),new v("Special of the Day","Ask the staff",10.99));for(let n of t)n.buildElement(e);n.appendChild(e)}()})),document.querySelector("#aboutButton").addEventListener("click",(()=>{E(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.id="about";const t=document.createElement("h2");t.textContent="All About Us",e.appendChild(t);const o=document.createElement("p");o.textContent="Now, I know what you're thinking. A kosher pizza restaurant? In Oakland? Yes, it's something we've all wanted for ages, but it's just a pipe dream, we can't actually have it. It simply wouldn't make money. It would cost more to maintain than it would make. No profits. Would hemorrhage money. Couldn't stay afloat. Just can't be done.",e.appendChild(o);const a=document.createElement("p");a.textContent="Well, we rejected those assertions. Instead, we chose something different. We chose the impossible. We chose... Oakland Kosher Pizza. And now it's here. And you will love it.",e.appendChild(a),n.appendChild(e)}()})),g()})();
//# sourceMappingURL=main.js.map