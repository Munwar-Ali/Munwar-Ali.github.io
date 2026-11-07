/* chatbot.js: scripted chatbot DEMONSTRATION (no AI connected). */
/* chatbot demo (scripted) */
const KB=[
 [/service|offer|do you do|help/,"I offer four services: AI-integrated website development, business website development, website redesign and AI chatbot integration."],
 [/chatbot|bot/,"I can integrate chatbots into websites. This chat itself is a scripted demonstration, not a live AI."],
 [/price|cost|package|quote/,"There are three packages: Starter, Professional Business and AI-Integrated. Prices are being finalised, so please contact me for a quote."],
 [/project|portfolio|work/,"My first demo website is currently in development. I only list real work, so more will appear as it is completed."],
 [/research|interest|ai\b|artificial/,"I’m exploring artificial intelligence and emerging AI technologies. I have no published research yet, and future work will be shown on this site."],
 [/who|about|munwar/,"Munwar Ali is a beginner-level AI enthusiast from Pakistan, building a career around AI research and AI-powered websites."],
 [/contact|email|whatsapp|hire|reach/,"You can email "+C.email+" or message on WhatsApp at "+C.whatsappDisplay+". The contact form is further down the page."]
];
const log=$("#log");
const say=(t,c)=>{const d=document.createElement("div");d.className="m "+c;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight};
const ask=q=>{if(!q.trim())return;say(q,"u");const h=KB.find(k=>k[0].test(q.toLowerCase()));setTimeout(()=>say(h?h[1]:"I’m only a demo with a few scripted answers. Try asking about services, projects, research, pricing or contact.","b"),350)};
say("Hi! I’m a demo assistant with scripted answers about Munwar’s services and interests.","b");
$("#chips").innerHTML=["What services do you offer?","Tell me about your research","How can I contact you?"].map(q=>`<button type="button">${q}</button>`).join("");
$("#chips").onclick=e=>{if(e.target.tagName==="BUTTON")ask(e.target.textContent)};
const send=()=>{ask($("#cin").value);$("#cin").value=""};
$("#csend").onclick=send;$("#cin").onkeydown=e=>{if(e.key==="Enter")send()};
