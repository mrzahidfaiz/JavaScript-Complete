(async function () {
  let response = await fetch("./recipes.json");
  let recipes = await response.json();
  //console.log(recipes);
  // console.log(response);

  const inputElem = document.getElementById("searchInput");
  const btnElem = document.getElementById("searchBtn");
  // console.log(searchElem);
  const listElem = document.getElementById("recipe-list");
  console.log(listElem);
  // display to Ui
  function displaySearchResult(results) {
    listElem.innerHTML = "";
    results.forEach(function (recipe) {
      // console.log(recipe);
      const li = document.createElement("li");
      const listItem = `
            <h4>${recipe.title}</h4>
            <div>${recipe.description}</div>
            `;
      li.innerHTML = listItem;
      listElem.appendChild(li);
    });
  }

  // Search in JAVASCRIPT
  function search() {
    //console.log("Event Listen are req");
    const query = inputElem.value;
    //console.log(query);
    const results = recipes.filter(function (recipe) {
      return (
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.join(" ").toLowerCase().includes(query)
      );
    });
    //console.log(results);
    displaySearchResult(results);
  }

  btnElem.addEventListener("click", search);
})();
