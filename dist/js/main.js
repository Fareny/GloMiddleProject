(()=>{"use strict";const e=()=>{const t=document.querySelector(".smooth-scroll");window.pageYOffset>1300?(t.style.transition="all 1s ease-in-out",t.style.opacity="1",t.addEventListener("click",(e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"})}))):t.style.opacity="0",window.onscroll=e};e(),(()=>{const e=document.querySelector(".header-modal"),t=document.querySelector(".overlay"),o=document.querySelector("body"),n=document.querySelector(".services-modal");o.addEventListener("click",(o=>{"btn btn-warning btn-block fancyboxModal"===o.target.className&&(e.style.display="block",t.style.display="block"),"btn btn-success btn-sm fancyboxModal"===o.target.className&&(n.style.display="block",t.style.display="block"),"header-modal__close"!==o.target.className&&"overlay"!==o.target.className&&"services-modal__close"!==o.target.className||(e.style.display="none",n.style.display="none",t.style.display="none")}))})(),(e=>{const t=document.querySelectorAll(".count_1 > span"),o=document.querySelectorAll(".count_2 > span"),n=document.querySelectorAll(".count_3 > span"),s=document.querySelectorAll(".count_4 > span"),r=(a,i,c,d)=>{let u=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();u.timeRemaining<=0?(a.textContent="00",i.textContent="00",c.textContent="00",d.textContent="00"):(a.textContent=l(u.days),i.textContent=l(u.hours),c.textContent=l(u.minutes),d.textContent=l(u.seconds)),setInterval((()=>{u.timeRemaining>0&&(r(t[0],o[0],n[0],s[0]),r(t[1],o[1],n[1],s[1]))}),1e3)};function l(e){return e<=9?"0"+e:e}r(t[0],o[0],n[0],s[0]),r(t[1],o[1],n[1],s[1])})("25 march 2022"),document.querySelector("#benefits > div").style.width="585px",new Swiper("#services .swiper",{direction:"horizontal",loop:!0,slidesPerView:2,navigation:{nextEl:".services__arrow.services__arrow--right",prevEl:".services__arrow.services__arrow--left"}}),new Swiper("#benefits > div > div.benefits-inner.swiper",{direction:"horizontal",slidesPerGroup:3,loop:!0,slidesPerView:"auto",navigation:{nextEl:".benefits__arrow.benefits__arrow--right",prevEl:".benefits__arrow.benefits__arrow--left"}})})();