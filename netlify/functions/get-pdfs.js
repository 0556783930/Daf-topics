const fs = require("fs");
const path = require("path");

exports.handler = async function () {
  const directoryPath = path.join(process.cwd(), "assets/pdf");

  try {
    const files = fs.readdirSync(directoryPath)
      .filter(file => file.endsWith(".pdf"))
      .map(file => ({
        name: file,
        date: fs.statSync(path.join(directoryPath, file)).mtime
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      statusCode: 200,
      body: JSON.stringify(files)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
