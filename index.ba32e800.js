const e=document.querySelectorAll("[data-scrollto]"),t=document.querySelector(".header");e.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();let o=document.querySelector("."+this.dataset.scrollto).offsetTop-t.getBoundingClientRect().height;window.scrollTo({top:o,left:0,behavior:"smooth"})}))}));
//# sourceMappingURL=index.ba32e800.js.map
