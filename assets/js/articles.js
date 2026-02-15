const list = document.getElementById("articles");
const searchInput = document.getElementById("search");

let allFiles = [];

async function fetchPDFs() {
  try {
    const res = await fetch("/.netlify/functions/get-pdfs");
    allFiles = await res.json();

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

function render(filter = "") {
  list.innerHTML = "";

  const lang = localStorage.getItem("siteLang") || "he";
  const btnText = lang === "he" ? "📖 קרא מאמר" : "📖 Read Article";

  allFiles
    .filter(file => file.name.toLowerCase().includes(filter))
    .forEach(file => {

      const div = document.createElement("div");
      div.className = "article-card";

      div.innerHTML = `
        <h2>${file.name.replace(".pdf","")}</h2>
        <a href="viewer.html?file=${encodeURIComponent(file.name)}">
          ${btnText}
        </a>
      `;

      list.appendChild(div);
    });
}

searchInput.addEventListener("input", e => {
  render(e.target.value.toLowerCase());
});

fetchPDFs();
