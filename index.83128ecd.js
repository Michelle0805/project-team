!function(){var e=document.querySelectorAll("[data-scrollto]"),t=document.querySelector(".header");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=document.querySelector("."+this.dataset.scrollto).offsetTop-t.getBoundingClientRect().height;window.scrollTo({top:o,left:0,behavior:"smooth"})}))}))}();
//# sourceMappingURL=index.83128ecd.js.map
