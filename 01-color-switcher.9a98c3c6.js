!function(){var t,e=document.querySelector("body"),o=e.querySelector("button[data-start]"),r=e.querySelector("button[data-stop]");console.log(o),console.log(r),o.addEventListener("click",(function(){t=setInterval((function(){o.setAttribute("disabled","disabled"),r.removeAttribute("disabled"),e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),r.addEventListener("click",(function(){clearInterval(t),o.removeAttribute("disabled"),r.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.9a98c3c6.js.map