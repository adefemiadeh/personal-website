// Load BibTeX file and render publications
fetch("publications.bib")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    var entries = text.split("@").slice(1);
    var container = document.getElementById("pubs");

    if (!container) return;

    entries.forEach(function (entry) {
      var titleMatch = entry.match(/title\s*=\s*{([^}]*)}/i);
      var yearMatch = entry.match(/year\s*=\s*{([^}]*)}/i);

      if (titleMatch) {
        var div = document.createElement("div");
        div.className = "pub-item";

        var title = titleMatch[1];
        var year = yearMatch ? yearMatch[1] : "";

        div.innerHTML =
          "<strong>" + title + "</strong><br><span>" + year + "</span>";

        container.appendChild(div);
      }
    });
  })
  .catch(function (error) {
    console.error("Error loading publications:", error);
  });