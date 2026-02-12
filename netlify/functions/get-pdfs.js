exports.handler = async function () {
  const repo = "0556783930/Daf-topics"; // שם המשתמש + ריפו שלך

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/contents/assets/pdf`
    );

    const data = await response.json();

    const files = data
      .filter(file => file.name.endsWith(".pdf"))
      .map(file => ({
        name: file.name,
        url: file.download_url
      }));

    return {
      statusCode: 200,
      body: JSON.stringify(files)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
