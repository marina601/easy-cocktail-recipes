const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

/**const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".cocktail-list");
let searchQuery = "";


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value; 
  console.log(searchQuery);//check that the query is working
  getCocktail();
});*/


function getCocktail(){
  fetch(URL)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        displayCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
function displayCocktail(data){
  let cocktailElems = ''
  data.drinks.forEach(cocktail => {
    cocktailElems += `
          <div class="col-12 col-md-6 col-lg-4">
          <div class="card" id="margharita">
            <img src="${cocktail.strDrinkThumb}" class="card-img-top" id="img-margharita" alt="margarita cocktail">
            <div class="card-body">
            <h3 class="card-title" id="margaritaHeading">${cocktail.strDrink}</h3>
            <h4 class="card-title hidden">Ingredients</h4>
            <ul class="list-group list-group-flush ingredients" id="ing-margarita">
                ${cocktail.strIngredient1 ? `<li class="list-group-item">${cocktail.strIngredient1} ${cocktail.strMeasure1 ? ` : ${cocktail.strMeasure1}` : ""} </li>` : ""}
                ${cocktail.strIngredient2 ? `<li class="list-group-item">${cocktail.strIngredient2} ${cocktail.strMeasure2 ? ` : ${cocktail.strMeasure2}` : ""} </li>` : ""}
                ${cocktail.strIngredient3 ? `<li class="list-group-item">${cocktail.strIngredient3} ${cocktail.strMeasure3 ? ` : ${cocktail.strMeasure3}` : ""} </li>` : ""}
                ${cocktail.strIngredient4 ? `<li class="list-group-item">${cocktail.strIngredient4} ${cocktail.strMeasure4 ? ` : ${cocktail.strMeasure4}` : ""} </li>` : ""}
                ${cocktail.strIngredient5 ? `<li class="list-group-item">${cocktail.strIngredient5} ${cocktail.strMeasure5 ? ` : ${cocktail.strMeasure5}` : ""} </li>` : ""}
                ${cocktail.strIngredient6 ? `<li class="list-group-item">${cocktail.strIngredient6} ${cocktail.strMeasure6 ? ` : ${cocktail.strMeasure6}` : ""} </li>` : ""}
                ${cocktail.strIngredient7 ? `<li class="list-group-item">${cocktail.strIngredient7} ${cocktail.strMeasure7 ? ` : ${cocktail.strMeasure7}` : ""} </li>` : ""}
            </ul>
            <h4 class="card-title">Method</h4>
            <p class="card-text" id="margarita-method">${cocktail.strInstructions}</p>
            <p class="card-text"><strong>Category : </strong>${cocktail.strAlcoholic}</p>
            </div>
          </div>
      </div>
    `
  });
  $('#cocktail-list').empty().append(cocktailElems)
}
getCocktail()



