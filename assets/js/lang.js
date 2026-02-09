const l=localStorage.getItem("lang")||"he";
function setLang(x){localStorage.setItem("lang",x);location.reload()}
document.querySelectorAll("[data-he]").forEach(e=>e.textContent=e.dataset[l]);