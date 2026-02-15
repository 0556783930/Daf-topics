const translations = {
  he: {
    heroTitle:"ספריית מאמרים תורנית",
    heroSubtitle:"אוסף מאמרים מעמיקים בלחיצת כפתור",
    enterBtn:"📚 כניסה למאמרים",
    aboutTitle:"אודות",
    aboutText:"מאגר דיגיטלי של מאמרים תורניים, נגישים מכל מקום ובכל זמן.",
    searchPlaceholder:"🔍 חיפוש מאמרים",
    readArticle:"📖 קרא מאמר",
    back:"⬅ חזרה"
  },
  en: {
    heroTitle:"Torah Articles Library",
    heroSubtitle:"A collection of in-depth articles at your fingertips",
    enterBtn:"📚 Enter Library",
    aboutTitle:"About",
    aboutText:"A digital archive of Torah articles, accessible anytime, anywhere.",
    searchPlaceholder:"🔍 Search Articles",
    readArticle:"📖 Read Article",
    back:"⬅ Back"
  }
};

function setLanguage(lang){
  localStorage.setItem("siteLang",lang);
  applyLanguage();
}

function applyLanguage(){
  const lang = localStorage.getItem("siteLang") || "he";
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.body.dir = lang==="he"?"rtl":"ltr";
  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.getAttribute("data-key");
    if(t[key]) el.innerText=t[key];
  });
  const search = document.getElementById("search");
  if(search) search.placeholder=t.searchPlaceholder;
}

document.addEventListener("DOMContentLoaded",applyLanguage);
