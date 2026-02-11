// ==========================
// Auto PDF Article Loader
// ==========================

// השפה הנבחרת
const lang = localStorage.getItem("lang") || "he";
const list = document.getElementById("articles");
const searchInput = document.getElementById("search");

// רשימת מאמרים – אפשר להוסיף כותרות/תקצירים לפי שם PDF
// המפתח: שם הקובץ בלי סיומת
const titles = {
  "257 - PESUCHOS AND SETUMOS": {
    he: "257 - פסוכים וסתומים",
    en: "257 - PESUCHOS AND SETUMOS",
    summary_he: "תקציר קצר של המאמר בעברית",
    summary_en: "Short summary of the article in English"
  }
};

// רשימת קבצי PDF באופן ידני (בפעם הראשונה)
const pdfFiles = [
  "257 - PESUCHOS AND SETUMOS.pdf"
];

// פונקציית בניית רשימת מאמרים
function render(filter = "") {
  list.innerHTML = "";

  pdfFiles.forEach(file => {
    const name = file.replace(".pdf", "");
    const title = titles[name] ? titles[name][lang] : name;
    const summary = titles[name] ? titles[name]["summary_" + lang] : "";

    if (title.toLowerCase().includes(filter) || summary.toLowerCase().includes(filter)) {
      const div = document.createElement("div");
      div.className = "article-card";
      div.innerHTML = `
        <h2>${title}</h2>
        <p>${summary}</p>
        <a href="assets/pdf/${file}" target="_blank">📄 PDF</a>
      `;
      list.appendChild(div);
    }
  });
}

// חיפוש בזמן אמת
searchInput.addEventListener("input", e => {
  render(e.target.value.toLowerCase());
});

// רינדור ראשוני
render();
