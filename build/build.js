!function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=n[s]={exports:{}};t[s][0].call(p.exports,function(e){var n=t[s][1][e];return i(n?n:e)},p,p.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(e){return function(t){var n,o,i=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return c(1)?(a(n,o+1),!1):void(i[e]&&a(e,0))},s=function(){var e=n-1;return c(-1)?(a(n,o-1),!1):void(i[e]&&a(e,i[e].length-1))},a=function(e,t){n=e,o=t,i.forEach(function(n,o){n.forEach(function(n,i){n.classList.add("bespoke-bullet"),e>o||o===e&&t>=i?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),o===e&&i===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},c=function(e){return void 0!==i[n][o+e]};t.on("next",r),t.on("prev",s),t.on("slide",function(e){a(e.index,0)}),a(0,0)}}},{}],2:[function(e,t,n){t.exports=function(){return function(e){e.slides.forEach(function(e){e.addEventListener("keydown",function(e){(/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName)||"true"===e.target.contentEditable)&&e.stopPropagation()})})}}},{}],3:[function(e,t,n){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),o=parseInt(t,10);t&&(o?n(o-1):e.slides.forEach(function(e,o){e.getAttribute("data-bespoke-hash")===t&&n(o)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],4:[function(e,t,n){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],5:[function(e,t,n){t.exports=function(e){return function(t){var n=document.createElement("div"),o=document.createElement("div"),i="vertical"===e?"height":"width";n.className="bespoke-progress-parent",o.className="bespoke-progress-bar",n.appendChild(o),t.parent.appendChild(n),t.on("activate",function(e){o.style[i]=100*e.index/(t.slides.length-1)+"%"})}}},{}],6:[function(e,t,n){t.exports=function(){return function(e){var t=function(t,n){var o=n.slide.getAttribute("data-bespoke-state");o&&o.split(" ").forEach(function(n){e.parent.classList[t](n)})};e.on("activate",t.bind(null,"add")),e.on("deactivate",t.bind(null,"remove"))}}},{}],7:[function(e,t,n){(function(o){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof o?i=o:"undefined"!=typeof self&&(i=self);var r=i;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.greeny=e()}}(function(){return function t(n,o,i){function r(a,c){if(!o[a]){if(!n[a]){var p="function"==typeof e&&e;if(!c&&p)return p(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=o[a]={exports:{}};n[a][0].call(l.exports,function(e){var t=n[a][1][e];return r(t?t:e)},l,l.exports,t,n,o,i)}return o[a].exports}for(var s="function"==typeof e&&e,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){var o=e("bespoke-classes"),i=e("insert-css");t.exports={theme:function(){var e="*{box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .62s ease-in-out;transition:background .62s ease-in-out;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-slide{-webkit-transition:-webkit-transform .62s ease-in-out,opacity .62s ease-in-out,background .62s ease-in-out;transition:transform .62s ease-in-out,opacity .62s ease-in-out,background .62s ease-in-out;-webkit-transform-origin:50% 50% 0;-ms-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background-color:#2ecc71;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(130px)translateX(-320px)rotateY(-120deg)translateX(-320px);transform:translateX(130px)translateX(-320px)rotateY(-120deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;-ms-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-130px)translateX(320px)rotateY(120deg)translateX(320px);transform:translateX(-130px)translateX(320px)rotateY(120deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;-ms-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;-ms-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;-ms-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:16px}@media only screen and (max-width:400px){.bespoke-progress-parent{height:8px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#16a085}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .62s ease-in-out;transition:opacity .62s ease-in-out;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#ecf0f1;background:#2ecc71}h1{line-height:82px;letter-spacing:-2px;margin-bottom:16px;font-size:50px;white-space:nowarp}h2{letter-spacing:-1px;margin-bottom:8px;font-size:40px}h3{margin-bottom:24px;color:#ecf0f1;font-size:30px;font-weight:700}h4{margin-bottom:5px}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px;display:block}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}::-moz-selection{color:#2ecc71;background-color:#ecf0f1}::selection{color:#2ecc71;background-color:#ecf0f1}.inverse{background-color:#2ecc71;color:#2c3e50}.stick{border-width:3px 0;border-style:solid;border-color:#ddd}.single-words{word-spacing:9999px;line-height:2.9em;overflow:hidden}.src{font-size:8px;margin-bottom:5px}.src::before{content:'Source: '}";return i(e,{prepend:!0}),function(e){o()(e)}},scale:function(){return function(e){var t=e.parent,n=e.slides[0],o=n.offsetHeight,i=n.offsetWidth,r="WebkitAppearance"in document.documentElement.style,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},a=r?e.slides:e.slides.map(s),c=function(e){var n="Moz Webkit O ms".split(" ");return n.reduce(function(n,o){return o+e in t.style?o+e:n},e.toLowerCase())}("Transform"),p=r?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},l=function(){var e=t.offsetWidth/i,n=t.offsetHeight/o;a.forEach(p.bind(null,Math.min(e,n)))};window.addEventListener("resize",l),l()}}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},o=function(o,i){var r=e.slides[e.slide()],s=i-e.slide(),a=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,o)),o!==r&&["inactive",a,a+"-"+Math.abs(s)].map(t.bind(null,o))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(o),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],3:[function(e,t,n){var o={};t.exports=function(e,t){if(!o[e]){o[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(n,i.childNodes[0]):i.appendChild(n)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,t,n){t.exports=function(e){return function(t){var n,o,i="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+i],o=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),o=e.touches[0]["page"+i]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(o)>50&&t[o>0?"prev":"next"]()})}}},{}],9:[function(e,t,n){var o=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),o=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),i=o[0],r={},s=function(e,t){o[e]&&(l("deactivate",f(i,t)),i=o[e],l("activate",f(i,t)))},a=function(e,t){return arguments.length?void(l("slide",f(o[e],t))&&s(e,t)):o.indexOf(i)},c=function(e,t){var n=o.indexOf(i)+e;l(e>0?"next":"prev",f(i,t))&&s(n,t)},p=function(e,t){return(r[e]||(r[e]=[])).push(t),function(){r[e]=r[e].filter(function(e){return e!==t})}},l=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},f=function(e,t){return t=t||{},t.index=o.indexOf(e),t.slide=e,t},u={on:p,fire:l,slide:a,next:c.bind(null,1),prev:c.bind(null,-1),parent:n,slides:o};return(t||[]).forEach(function(e){e(u)}),s(0),u};t.exports={from:o}},{}],10:[function(e,t,n){var o=e("bespoke"),i=e("bespoke-theme-greeny"),r=e("bespoke-keys"),s=e("bespoke-touch"),a=e("bespoke-bullets"),c=e("bespoke-hash"),p=e("bespoke-progress"),l=e("bespoke-state"),f=e("bespoke-forms");o.from("article",[i.theme(),i.scale(),r(),s(),a("li, .bullet"),c(),p(),l(),f()])},{bespoke:9,"bespoke-bullets":1,"bespoke-forms":2,"bespoke-hash":3,"bespoke-keys":4,"bespoke-progress":5,"bespoke-state":6,"bespoke-theme-greeny":7,"bespoke-touch":8}]},{},[10]);