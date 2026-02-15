const elements=document.querySelectorAll(".about");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
});
elements.forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(50px)";
  el.style.transition="0.8s";
  observer.observe(el);
});
