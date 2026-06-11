const faqData=[
["Can foreigners invest in property in Indonesia?","Yes, foreign buyers can invest in Indonesian property through compliant legal structures. The correct structure depends on the buyer profile, intended use and legal due diligence. Full legal guidance is provided before reservation."],
["Is this project freehold?","A secure ownership structure is available, subject to legal due diligence and local regulations. Final ownership structure will be reviewed with legal advisors before any reservation is completed."],
["Where is the project located?","The project is located in the Mandalika area of South Lombok, close to the international MotoGP circuit, beaches, restaurants and tourism infrastructure."],
["How many villas are available?","Only 11 private villas are planned."],
["What is included in each villa?","Each villa includes approximately 70 m² of built area, one bedroom, indoor-outdoor living, a private pool, terrace and tropical landscaping."],
["What is the starting price?","Villas start from €120,000. Final pricing may vary depending on release phase, specifications and availability."],
["Can I rent out the villa?","The villas are designed for personal use and rental potential. Optional property management support will be available."],
["What is the payment plan?","The preliminary payment plan is 25% reservation deposit, 30% pre-construction, 35% during build progress and 10% at final handover."],
["Can I buy without travelling to Lombok?","Remote purchase support may be available through legal representatives and digital documentation, subject to legal process and buyer verification."],
["Can I visit the land?","Yes. Site visits can be arranged for interested buyers and investors."]
];
const accordions=document.querySelector("#accordions");
accordions.innerHTML=faqData.map((item,i)=>`<article class="accordion"><button aria-expanded="false"><b>${String(i+1).padStart(2,"0")}</b><span>${item[0]}</span><i>↘</i></button><p>${item[1]}</p></article>`).join("");
accordions.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{const item=button.parentElement;item.classList.toggle("open");button.setAttribute("aria-expanded",item.classList.contains("open"))}));
document.querySelector("#units").innerHTML=Array.from({length:11},(_,i)=>`<div class="unit"><b>${String(i+1).padStart(2,"0")}</b><span>Available soon</span></div>`).join("");
const header=document.querySelector("#header"),menu=document.querySelector(".menu");
addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>30));
menu.addEventListener("click",()=>{header.classList.toggle("open");menu.setAttribute("aria-expanded",header.classList.contains("open"))});
document.querySelectorAll(".header nav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add("visible")),{threshold:.1});
document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));
document.querySelector("#lead-form").addEventListener("submit",event=>{event.preventDefault();const button=event.currentTarget.querySelector("button");button.textContent="Thank you — enquiry received";button.disabled=true});
