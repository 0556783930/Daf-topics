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

articles.push({
  lang: "he",                   // שפה עברית
  title: "שם המאמר",           // כותרת בעברית
  summary: "תקציר קצר של המאמר", // תקציר בעברית
  pdf: "assets/pdf/257 - PESUCHOS AND SETUMOS.pdf" // הנתיב ל-PDF
});

// אם יש גרסת אנגלית
articles.push({
  lang: "en",
  title: "Article Name",
  summary: "Short summary of the article",
  pdf: "assets/pdf/257 - PESUCHOS AND SETUMOS.pdf"
});
