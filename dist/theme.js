!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Slee=t():e.Slee=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports="\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E\""},,function(e,t,n){"use strict";n(3)},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]);var o={};o.transform=void 0,n(7)(i,o),i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,".slee-element{position:fixed;display:flex;flex-flow:column-reverse;width:360px;height:auto;z-index:9999999}.slee-element.top{top:18px}.slee-element.left{left:18px}.slee-element.bottom{bottom:18px}.slee-element.right{right:18px}.slee-element.center{left:50%;transform:translateX(-50%)}.slee-element .slee-notification{position:relative;display:inline-block;width:100%;margin-top:-64px;left:-64px;visibility:hidden;opacity:0;height:0;padding:64px 0 0 64px}.slee-element .slee-notification.ease,.slee-element .slee-notification.fly,.slee-element .slee-notification.push,.slee-element .slee-notification.shrink{transition:all .3s ease-in-out}.slee-element .slee-notification.ease.shrink,.slee-element .slee-notification.fly.shrink,.slee-element .slee-notification.push.shrink,.slee-element .slee-notification.shrink.shrink{transform:scale(.7)}.slee-element .slee-notification.ease.animate,.slee-element .slee-notification.fly.animate,.slee-element .slee-notification.push.animate,.slee-element .slee-notification.shrink.animate{height:72px;visibility:visible;opacity:1}.slee-element .slee-notification.ease.animate.shrink,.slee-element .slee-notification.fly.animate.shrink,.slee-element .slee-notification.push.animate.shrink,.slee-element .slee-notification.shrink.animate.shrink{transform:scale(1)}.slee-element .slee-notification.hide{height:0;opacity:0!important;visibility:hidden!important;margin-bottom:0!important}.slee-element .slee-notification.hide.ease{margin-top:-136px}.slee-element .slee-notification.hide.shrink{margin-top:-136px;transform:scale(.7)!important}.slee-element .slee-notification.pointer-events:hover{opacity:.3;filter:blur(3px)}.slee-element .slee-notification .slee-notification-content{width:100%;height:72px;position:relative;display:inline-block;box-sizing:border-box;padding:12px 16px;border-radius:10px;box-shadow:0 0 64px rgba(0,0,0,.08);opacity:.9;font-family:sans-serif}.slee-element .slee-notification .slee-notification-content .slee-title{display:inline-block;position:relative;width:100%;line-height:22px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.slee-element .slee-notification .slee-notification-content .slee-description{display:inline-block;position:relative;width:100%;line-height:16px;font-size:.92em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.slee-element .slee-notification .slee-notification-content.slee-picture .slee-description,.slee-element .slee-notification .slee-notification-content.slee-picture .slee-title{width:calc(100% - 36px);margin-left:36px}.slee-element .slee-notification .slee-notification-content.slee-picture .slee-picture-wrapper{display:flex;position:absolute;top:0;left:8px;height:100%;width:36px;align-items:center;justify-content:center}.slee-element .slee-notification .slee-notification-content.slee-picture .slee-picture-wrapper img{display:block;width:30px}.slee-element .slee-notification .slee-close-button{position:absolute;display:block;right:4px;top:68px;height:18px;width:18px;cursor:pointer;opacity:.8;z-index:1;border-radius:50%;background:hsla(0,0%,100%,.1) url("+n(6)+") 50% no-repeat;background-size:14px;transition:.15s ease-in-out}.slee-element .slee-notification .slee-close-button:hover{opacity:1;background-color:hsla(0,0%,100%,.2)}.slee-element .slee-notification.neutral div{background:#f0f0f0;box-shadow:0 0 64px rgba(0,0,0,.05)}.slee-element .slee-notification.success div{background:#17b941;color:#fff}.slee-element .slee-notification.success .slee-close-button{background-image:url("+n(0)+")}.slee-element .slee-notification.info div{background:#1e85f0;color:#fff}.slee-element .slee-notification.info .slee-close-button{background-image:url("+n(0)+")}.slee-element .slee-notification.warning div{background:#f1d500;color:#000}.slee-element .slee-notification.error div{background:#ec202e;color:#fff}.slee-element .slee-notification.error .slee-close-button{background-image:url("+n(0)+")}.slee-element .slee-notification.redirect{cursor:pointer}.slee-element .slee-notification .slee-progress{position:absolute;bottom:0;left:12px;height:4px;background:hsla(0,0%,100%,.5)!important;width:0;animation-name:progress;animation-timing-function:ease-in-out;border-top-left-radius:3px;border-top-right-radius:3px}@keyframes progress{0%{width:calc(100% - 24px)}to{width:0}}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t){e.exports="\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E\""},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=h[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(f(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(f(i.parts[r],t));h[i.id]={id:i.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],l=r[1],a=r[2],c=r[3],f={css:l,media:a,sourceMap:c};i[s]?i[s].parts.push(f):n.push(i[s]={id:s,parts:[f]})}return n}function r(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=x[x.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function l(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),r(e,t),t}function a(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),r(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(e,t){var n,i,o,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var c=g++;n=b||(b=l(t)),i=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),i=d.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),i=u.bind(null,n),o=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function p(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var i=n.css,o=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(i=y(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(s),l&&URL.revokeObjectURL(l)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,g=0,x=[],y=n(8);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var l=n[s],a=h[l.id];a.refs--,r.push(a)}e&&i(o(e,t),t);for(var s=0;s<r.length;s++){var a=r[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete h[a.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}}])});