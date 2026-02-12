const list = document.getElementById("articles");
const searchInput = document.getElementById("search");

let allFiles = [];

/* ===== Load PDFs from assets/pdf automatically ===== */
async function fetchPDFs() {
  try {
    // כאן נטען את כל ה-PDFים ישירות מהתיקייה המקומית
    // אם אתה רוצה להשתמש ב-Netlify Functions, תוכל לשנות את ה-URL למשהו כמו:
    // "/.netlify/functions/get-pdfs"
    const pdfFiles = [
      "257 - PESUCHOS AND SETUMOS.pdf",
      "258 - EXAMPLE.pdf",
      "259 - EXAMPLE.pdf",
      "260 - EXAMPLE.pdf"
      // הוסף כאן את כל שאר ה-PDFים
    ];

    allFiles = pdfFiles.map(name => ({
      name,
      url: `assets/pdf/${name}`
    }));

    render();
  } catch (error) {
    console.error("Error loading PDFs:", error);
  }
}

/* ===== Render Articles ===== */
function render(filter = "") {
  list.innerHTML = "";

  allFiles
    .filter(file => file.name.toLowerCase().includes(filter))
    .forEach(file => {
      const div = document.createElement("div");
      div.className = "article-card";

      div.innerHTML = `
        <h2>${file.name.replace(".pdf","")}</h2>
        <a href="${file.url}" target="_blank">📄 פתח PDF</a>
      `;

      list.appendChild(div);
    });
}

/* ===== Search ===== */
searchInput.addEventListener("input", e => {
  render(e.target.value.toLowerCase());
});

/* ===== Init ===== */
fetchPDFs();
