const e=document.querySelector(".slide-first");new Swiper(".hero-slider",{speed:600,loop:!0,autoplay:{enabled:!0,delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-next",prevEl:".swiper-back"}}).on("slideChange",(function(){let n=this.realIndex+1;e.innerHTML="0"+n}));
//# sourceMappingURL=index.b845c57c.js.map
