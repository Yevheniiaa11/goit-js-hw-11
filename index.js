import{a as p,i as c,S as m}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",y="49565039-11a2922cd8e7ceae59523da99";function g(s){return console.log("Searching for:",s),p.get(f,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{console.log("Response received:",r.data);const o=r.data.hits;return o.length===0?(c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):o}).catch(r=>(console.error("Axios error:",r),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]))}function h(s){const r=document.querySelector(".gallery");r.innerHTML="";const o=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:l,comments:u,downloads:d})=>`<li class="gallery-item">
        <a href="${e}" class="gallery-link">
            <img src="${n}" alt="${t}"/>
        </a>
        <div class="description">
            <p><b>Likes:</b> ${a}</p>
            <p><b>Views:</b> ${l}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${d}</p>
        </div>
    </li>
    `).join("");r.insertAdjacentHTML("beforeend",o)}const b=document.querySelector(".form"),S=document.querySelector('input[name="search-text"]'),i=document.querySelector(".loader");i.style.display="none";b.addEventListener("submit",s=>{s.preventDefault();const r=S.value.trim();r&&(i.style.display="block",g(r).then(o=>{h(o);const n=new m(".gallery a",{captionsData:"alt",captionsDelay:250});i.style.display="none",n.refresh()}))});
//# sourceMappingURL=index.js.map
