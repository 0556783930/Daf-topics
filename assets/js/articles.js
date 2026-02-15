const list = document.getElementById("articles");
const searchInput = document.getElementById("search");

let allFiles = [];

/* ===== Load PDFs Automatically ===== */
async function fetchPDFs() {
  try {
    const res = await fetch("/.netlify/functions/get-pdfs");
    allFiles = await res.json();

    // Optional: sort by name
    allFiles.sort((a,b) => a.name.localeCompare(b.name));

    localStorage.setItem(
      "pdfList",
      JSON.stringify(allFiles.map(f => f.name))
    );

    render();
  } catch (error) {
    console.error("Error loading PDFs:", error);
  }
}

/* ===== Render PDF Cards ===== */
function render(filter = "") {
  list.innerHTML = "";

  allFiles
    .filter(file => file.name.toLowerCase().includes(filter))
    .forEach(file => {
      const div = document.createElement("div");
      div.className = "article-card";

      div.innerHTML = `
        <h2>${file.name.replace(".pdf","")}</h2>
        <a href="viewer.html?file=${encodeURIComponent(file.name)}">
          📖 קרא מאמר
        </a>
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
