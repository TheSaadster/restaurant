(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,"body{\n    background-color: brown;\n    margin: 0px;\n    padding: 0px;\n}\n\n#content{\n    /*display: flex;*/\n    min-height: 100vh;\n    \n    /*justify-content: center;*/\n    text-align: center;\n}\n.image{\n    margin:25px;\n}\n.top-image{\n    margin:25px;\n}\n\n.landing-page-copy, .menu-copy{\n    color:whitesmoke;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 900;\n    font-style: italic;\n}\nheader{\n    background-color: rgb(136,120,226);\n    height:50px;\n}\n\nul{\n    display:flex;\n    justify-content: space-around;\n    list-style-type: none;\n    margin:0px;\n    padding:0px;\n    align-items:center;\n    height:50px;\n}\n\nli{\n    display:flex;\n    height:40px;\n    align-items:center;\n    border-radius: 5px 5px 0px 0px;\n    border-top: 1px solid black;\n    border-right: 1px solid black;\n    border-left: 1px solid black;\n    cursor:pointer;\n\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"fc4589823ba3fe78c4d2.jpeg";function t(){const t=document.querySelector("#content");t.replaceChildren();const n=document.createElement("h1");n.textContent="Welcome to Saad's Restaurant!",n.classList.add("landing-title"),t.appendChild(n);const r=document.createElement("img");r.classList.add("top-image"),r.src=e,r.alt="Image of Restaurant",t.appendChild(r);const a=document.createElement("p");a.classList.add("landing-page-copy"),a.textContent="This is a very upscale restaurant that is well known around the world",t.appendChild(a);const o=document.createElement("p");o.classList.add("landing-page-copy"),o.textContent="Please wear business casual attire in this restaurant!",t.appendChild(o);const c=document.createElement("p");c.classList.add("landing-page-copy"),c.textContent="Thanks!",t.appendChild(c)}const r=n.p+"d2c2357d11a16c7f451d.jpg",a=n.p+"e5aba3773aedfd1ad270.jpeg";function o(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Saad's Restaurant!",t.classList.add("landing-title"),e.appendChild(t);const n=document.createElement("img");n.classList.add("image"),n.src=r,n.alt="Image of Green Bean Casserole",e.appendChild(n);const o=document.createElement("p");o.classList.add("menu-copy"),o.textContent="An amazing Green Bean Casserole that's a favorite for many people!",e.appendChild(o);const c=document.createElement("img");c.classList.add("image"),c.src=a,c.alt="Image of Mac N Cheese",e.appendChild(c);const i=document.createElement("p");i.classList.add("menu-copy"),i.textContent="This simple Mac N Cheese will leave you satisfied!",e.appendChild(i)}var c=n(379),i=n.n(c),s=n(795),l=n.n(s),d=n(569),p=n.n(d),u=n(565),m=n.n(u),f=n(216),h=n.n(f),g=n(589),v=n.n(g),y=n(28),x={};x.styleTagTransform=v(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=h(),i()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,t(),document.querySelector(".home").addEventListener("click",t),document.querySelector(".menu").addEventListener("click",o)})()})();