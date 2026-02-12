const list = document.getElementById("articles");
const searchInput = document.getElementById("search");

let allFiles = [];

/* ===== Fetch PDFs Automatically ===== */
async function fetchPDFs() {
  try {
    const res = await fetch("/.netlify/functions/get-pdfs");
    allFiles = await res.json();
    render();
  } catch (error) {
    console.error("Error loading PDFs:", error);
  }
}

/* ===== Render Articles ===== */
function render(filter = "") {
  list.innerHTML = "";

  allFiles
    .filter(file =>
      file.name.toLowerCase().includes(filter)
    )
    .forEach(file => {
      const div = document.createElement("div");
      div.className = "article-card";

      div.innerHTML = `
        <h2>${file.name.replace(".pdf","")}</h2>
        <p>עודכן בתאריך: ${new Date(file.date).toLocaleDateString()}</p>
        <a href="assets/pdf/${file.name}" target="_blank">📄 פתח PDF</a>
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
