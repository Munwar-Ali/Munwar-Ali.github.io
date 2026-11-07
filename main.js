/* main.js: builds every section from config.js, plus theme switch, menu and scroll effects. Needs config.js loaded first. */
const $=s=>document.querySelector(s),C=CONFIG,S=C.social;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const I={
 github:'<svg viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.200 1.800 1.200 1 1.800 2.800 1.300 3.500 1 0-.8.4-1.300.7-1.600-2.700-.3-5.500-1.300-5.500-5.900 0-1.300.5-2.400 1.200-3.200 0-.4-.5-1.600.2-3.200 0 0 1-.3 3.300 1.200a11.500 11.500 0 0 1 6 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.600.2 2.800.1 3.200.8.8 1.300 1.900 1.300 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>',
 linkedin:'<svg viewBox="0 0 24 24"><path d="M20.400 20.500h-3.600v-5.600c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.400V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.100 2.100 2.100 0 0 1 0 4.100zM7.100 20.500H3.600V9h3.500v11.500z"/></svg>',
 facebook:'<svg viewBox="0 0 24 24"><path d="M24 12a12 12 0 1 0-13.900 11.900v-8.400H7.100V12h3V9.400c0-3 1.800-4.700 4.500-4.700 1.300 0 2.700.2 2.700.2v3h-1.500c-1.500 0-2 .9-2 1.900V12h3.400l-.5 3.500h-2.900v8.400A12 12 0 0 0 24 12z"/></svg>',
 whatsapp:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.600 15L2 22l5.100-1.300A10 10 0 1 0 12 2zm5.200 14.100c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.100-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 1.900c.1.200.1.300 0 .5l-.3.400-.4.400c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.400.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.800.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z"/></svg>',
 email:'<svg class="s" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
 instagram:'<svg class="s" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',
 x:'<svg viewBox="0 0 24 24"><path d="M18.200 2.300h3.300l-7.200 8.300 8.500 11.200h-6.700l-5.200-6.800-6 6.800H1.600l7.700-8.800L1.200 2.300h6.800l4.700 6.200zm-1.200 17.500h1.800L7.100 4.200H5.100z"/></svg>',
 youtube:'<svg class="s" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></svg>'
};
const nav=[["about","About"],["research","AI & Research"],["skills","Skills"],["services","Services"],["projects","Projects"],["journey","Journey"],["pricing","Pricing"],["contact","Contact"]];
const parts=C.name.split(" ");
$("#logo").innerHTML=esc(parts[0])+"<span>.</span>"+esc(parts.slice(1).join(" "));
$("#links").innerHTML=nav.map(n=>`<li><a href="#${n[0]}">${esc(n[1])}</a></li>`).join("");
$("#hn").textContent=C.name;$("#ht").textContent=C.title;
$("#about-body").innerHTML=C.about.map(p=>`<p>${esc(p)}</p>`).join("");
$("#rs-intro").textContent=C.researchIntro;
const card=(h,p,x="")=>`<article class="card rv ${x}">${h}${p}</article>`;
$("#rs-grid").innerHTML=C.research.map(r=>card(`<h3>${esc(r.t)}</h3>`,`<p>${esc(r.d)}</p>`)).join("");
$("#rs-pub").innerHTML=C.publications.length?C.publications.map(p=>`<p><strong>${esc(p.title)}</strong><br>${esc(p.summary)} ${p.link?`<a href="${esc(p.link)}" target="_blank" rel="noopener">Read</a>`:""}</p>`).join(""):esc(C.publicationsNote);
$("#sv-grid").innerHTML=C.services.map((s,i)=>card(`<span class="eyebrow">0${i+1}</span><h3>${esc(s.t)}</h3>`,`<p>${esc(s.d)}</p>`)).join("");
$("#pj-grid").innerHTML=C.projects.map(p=>card(
 `${p.image?`<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy" class="proj-img">`:""}<span class="badge">${esc(p.status||"Project")}</span><h3>${esc(p.title)}</h3>`,
 `<p>${esc(p.desc)}</p><div>${(p.tech||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
 <div>${p.live?`<a class="btn" target="_blank" rel="noopener" href="${esc(p.live)}">Live</a> `:""}${p.github?`<a class="btn" target="_blank" rel="noopener" href="${esc(p.github)}">GitHub</a>`:""}</div>`)).join("");
$("#pr-grid").innerHTML=C.pricing.map(p=>card(`<h3>${esc(p.t)}</h3><div class="price">${esc(p.price)}</div>`,`<ul>${p.f.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><a class="btn ${p.featured?"p":""}" href="#contact">Enquire</a>`,p.featured?"feat":"")).join("");
$("#ts-grid").innerHTML=C.testimonials.length?C.testimonials.map(t=>card(`<p>“${esc(t.quote)}”</p>`,`<p><strong>${esc(t.author)}</strong> ${esc(t.role||"")}</p>`)).join(""):`<div class="note span-all">No testimonials yet. Genuine client feedback will appear here after real projects are completed.</div>`;
const links=[["email","Email","mailto:"+C.email],["whatsapp","WhatsApp","https://wa.me/"+C.whatsapp],["github","GitHub",S.github],["linkedin","LinkedIn",S.linkedin],["facebook","Facebook",S.facebook],["instagram","Instagram",S.instagram],["x","X",S.x],["youtube","YouTube",S.youtube]].filter(l=>l[2]);
$("#soc").innerHTML=links.map(l=>`<a href="${esc(l[2])}" ${l[0]=="email"?"":'target="_blank" rel="noopener noreferrer"'} aria-label="${l[1]}">${I[l[0]]}${l[1]}</a>`).join("");
$("#cinfo").innerHTML=`Email: <a href="mailto:${esc(C.email)}">${esc(C.email)}</a><br>WhatsApp: <a href="https://wa.me/${esc(C.whatsapp)}" target="_blank" rel="noopener">${esc(C.whatsappDisplay)}</a>`;
$("#foot").textContent="© "+new Date().getFullYear()+" "+C.name+" · "+C.title+" · "+C.location;

$("#sk-intro").textContent=C.skillsIntro;
$("#fc-grid").innerHTML=C.focus.map(f=>card(`<h3>${esc(f.t)}</h3>`,`<p>${esc(f.d)}</p>`)).join("");
$("#sk-list").innerHTML=C.skills.map(s=>`<li>${esc(s)}</li>`).join("");
$("#tl-grid").innerHTML=C.tools.map(t=>card(`<h3>${esc(t.t)}</h3>`,`<p>${esc(t.d)}</p>`)).join("");
$("#bh-grid").innerHTML=C.businessHelp.map(b=>card(`<h3>${esc(b.t)}</h3>`,`<p>${esc(b.d)}</p>`)).join("");
const sec=(t,items,empty)=>card(`<h3>${t}</h3>`,items.length?`<ul>${items.map(i=>`<li><strong>${esc(i.title)}</strong>${i.detail?" · "+esc(i.detail):""}</li>`).join("")}</ul>`:`<p>${esc(empty)}</p>`);
$("#jr-grid").innerHTML=sec("Achievements",C.achievements,"None to list yet. Real milestones will be added here as they happen.")+sec("Professional Experience",C.experience,"No professional experience to list yet. It will be added as it is gained.")+sec("Certifications",C.certifications,"No certifications to list yet. Any earned will appear here.")+sec("Learning & Future Research",C.learning,"Learning activities will appear here.");

/* neural-net visual */
(()=>{const L=[3,5,5,3],X=[60,160,260,340],pts=L.map((n,i)=>Array.from({length:n},(_,j)=>[X[i],(400/(n+1))*(j+1)]));let h="";
for(let i=0;i<3;i++)pts[i].forEach(a=>pts[i+1].forEach(b=>h+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`));
let k=0;pts.flat().forEach(p=>{h+=`<circle class="n ${k%3==0?"b":""} d${k%7}" cx="${p[0]}" cy="${p[1]}" r="7" data-i="${k++}"/>`});$("#net").innerHTML=h})();

/* theme + menu + reveal */
const root=document.documentElement;
$("#theme").onclick=()=>{const d=getComputedStyle(root).colorScheme==="dark";root.dataset.theme=d?"light":"dark"};
$("#menu").onclick=()=>$("#nav").classList.toggle("open");
$("#nav").onclick=e=>{if(e.target.tagName==="A")$("#nav").classList.remove("open")};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
