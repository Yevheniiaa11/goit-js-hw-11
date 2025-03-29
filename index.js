import{a as p,i,S as m}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",f="49565039-11a2922cd8e7ceae59523da99";function g(n){return console.log("Searching for:",n),p.get(y,{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{console.log("Response received:",r.data);const o=r.data.hits;return o.length===0?(i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):o}).catch(r=>(console.error("Axios error:",r),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]))}function h(n){const r=document.querySelector(".gallery");r.innerHTML="";const o=n.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:l,comments:u,downloads:d})=>`<li class="gallery-item">
        <a href="${e}" class="gallery-link">
            <img src="${a}" alt="${t}"/>
        </a>
        <div class="description">
            <p><b>Likes:</b> ${s}</p>
            <p><b>Views:</b> ${l}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${d}</p>
        </div>
    </li>
    `).join("");r.insertAdjacentHTML("beforeend",o)}const b=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]'),c=document.querySelector(".loader"),L=document.querySelector(".gallery"),q=new m(".gallery a",{captionsData:"alt",captionsDelay:250});b.addEventListener("submit",n=>{n.preventDefault();const r=S.value.trim();r&&(c.style.display="block",L.innerHTML="",g(r).then(o=>{h(o),q.refresh()}).catch(o=>{console.error("Downloadd error:",o)}).finally(()=>{c.style.display="none"}))});
//# sourceMappingURL=index.js.map
