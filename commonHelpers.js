import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(i){const t="https://pixabay.com",o="/api/",n="44116350-6386c211d371838e745950ec7",e=new URLSearchParams({key:n,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${t}${o}?${e}`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function m({webformatURL:i,largeImageURL:t,tags:o,likes:n,views:e,comments:r,downloads:s}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${i}" alt="${o}"/>
      </a>
      <ul class="info">
        <li class="info-item"> <b>Likes</b> ${n} </li>
        <li class="info-item"> <b>Views</b> ${e} </li>
        <li class="info-item"> <b>Comments</b> ${r} </li>
        <li class="info-item"> <b>Downloads</b> ${s} </li>
      </ul>
    </li>
  `}function d(i){return i.map(m).join("")}const y=document.querySelector(".search-form"),h=document.querySelector(".input"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",i=>{i.preventDefault();const t=h.value.trim();if(t===""){a.error({title:"Error",message:"Please enter a search query"});return}return p(),f(t).then(o=>{if(o.hits.length===0)return l.innerHTML="",a.error({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",maxWidth:350,timeout:5e3,progressBar:!1});const n=d(o.hits);l.innerHTML=n,b.refresh()}).catch(o=>console.log(o)).finally(()=>{g()}),i.target.reset()});function p(){c.style.display="inline-block"}function g(){c.style.display="none"}let b=new u(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
