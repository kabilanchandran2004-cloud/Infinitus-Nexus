document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchBox").value.trim();
  const resultsDiv = document.getElementById("results");

  if (!query) {
    resultsDiv.innerHTML = "<p>Please type something to search!</p>";
    return;
  }

  resultsDiv.innerHTML = `<p>Searching for: <b>${query}</b>...</p>
                          <p>(This is the free MVP version. The full Infinitus Nexus will gather info from multiple sources soon!)</p>`;
});
