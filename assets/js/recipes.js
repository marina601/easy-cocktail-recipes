
const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s="
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
            <ul class="list-group list-group-flush ingredients hidden" id="ing-margarita">
                ${cocktail.strIngredient1 ? `<li class="list-group-item">${cocktail.strIngredient1} ${cocktail.strMeasure1 ? ` : ${cocktail.strMeasure1}` : ""} </li>` : ""}
                ${cocktail.strIngredient2 ? `<li class="list-group-item">${cocktail.strIngredient2} ${cocktail.strMeasure2 ? ` : ${cocktail.strMeasure2}` : ""} </li>` : ""}
            </ul>
            <h4 class="card-title">Method</h4>
            <p class="card-text" id="margarita-method">${cocktail.strInstructions}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
      </div>
    `
  });
  $('#cocktail-list').empty().append(cocktailElems)
}
getCocktail()


