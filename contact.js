/* contact.js: contact form validation and sending. */
/* contact form */
$("#cf").onsubmit=async e=>{e.preventDefault();
 const n=$("#fn").value.trim(),m=$("#fe").value.trim(),g=$("#fm").value.trim();
 $("#en").textContent=n.length<2?"Please enter your name.":"";
 $("#ee").textContent=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)?"":"Please enter a valid email.";
 $("#em").textContent=g.length<10?"Message should be at least 10 characters.":"";
 if(n.length<2||$("#ee").textContent||g.length<10)return;
 if(C.formEndpoint){try{const r=await fetch(C.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:n,email:m,message:g})});if(r.ok){$("#fs").textContent="Thank you! Your message was sent.";e.target.reset();return}}catch(_){}}
 location.href=`mailto:${C.email}?subject=${encodeURIComponent("Website enquiry from "+n)}&body=${encodeURIComponent(g+"\n\nFrom: "+n+" ("+m+")")}`;
 $("#fs").textContent="Opening your email app with the message ready to send…"};
