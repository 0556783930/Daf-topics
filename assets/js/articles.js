const articles=[{lang:"he",title:"מאמר ראשון",summary:"תקציר",pdf:"assets/pdf/example.pdf"}];
const l=localStorage.getItem("lang")||"he";
const list=document.getElementById("articles");
const s=document.getElementById("search");
function render(f=""){list.innerHTML="";
articles.filter(a=>a.lang===l).filter(a=>a.title.includes(f)).forEach(a=>{
const d=document.createElement("div");
d.innerHTML=`<h2>${a.title}</h2><p>${a.summary}</p><a href="${a.pdf}" target="_blank">PDF</a>`;
list.appendChild(d);
})}
s.oninput=e=>render(e.target.value);render();