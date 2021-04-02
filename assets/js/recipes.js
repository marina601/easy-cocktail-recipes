//jshint esversion: 6
/*globals $:false */
// declaring variables 
let allCocktail = {};
const url = "https://thecocktaildb.com/api/json/v1/1/search.php?f=m";

$(document).ready(function () {

    getCocktail();

});

/**
 * call the API using Fetch @getCocktail function
 * checking for response and then return data 
 * line 28 examining the response and passing data through json 
 * line 30 assign data to @allCocktail
 * line 31 calling the function @displayCocktail
 * line 35 if an error is displayed console.log error status 
 */
function getCocktail() {
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    allCocktail = data;
                    displayCocktail(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

/**
 * byCategory function on click of the filter buttons 
 * if else statement to check the category 
 * display the cocktail data using filter method 
 * once the button is clicked. 
 * the function is called in html file.
 */

function byCategory(category) {
    if (category === "All") {
        displayCocktail(allCocktail);
    } else {
        const data = allCocktail.drinks.filter(drink => drink.strAlcoholic === category);
        displayCocktail({ drinks: data });
    }

}

byCategory();

/**
 * displayCocktail function on click of the filter buttons 
 * if else statement to check the category 
 * display the cocktail data using filter method 
 * once the button is clicked. 
 * the function is called in html file.
 */

//Code has been refactored with help of my mentor Medale Oluwfemi
function displayCocktail(data) {
    let cocktailElems = '';
    data.drinks.forEach(cocktail => {
        cocktailElems += `
          <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img src="${cocktail.strDrinkThumb}" class="card-img-top img-fluid" alt="${cocktail.strDrink}">
                <div class="card-body">
                <h3 class="card-title">${cocktail.strDrink}</h3>
                  <div class="recipe hidden">
                    <h4 class="card-title">Ingredients</h4>
                    <ul class="list-group list-group-flush ingredients">
                    ${cocktail.strIngredient1 ? `<li class="list-group-item">${cocktail.strIngredient1} ${cocktail.strMeasure1 ? ` : ${cocktail.strMeasure1}` : ""} </li>` : ""}
                    ${cocktail.strIngredient2 ? `<li class="list-group-item">${cocktail.strIngredient2} ${cocktail.strMeasure2 ? ` : ${cocktail.strMeasure2}` : ""} </li>` : ""}
                    ${cocktail.strIngredient3 ? `<li class="list-group-item">${cocktail.strIngredient3} ${cocktail.strMeasure3 ? ` : ${cocktail.strMeasure3}` : ""} </li>` : ""}
                    ${cocktail.strIngredient4 ? `<li class="list-group-item">${cocktail.strIngredient4} ${cocktail.strMeasure4 ? ` : ${cocktail.strMeasure4}` : ""} </li>` : ""}
                    ${cocktail.strIngredient5 ? `<li class="list-group-item">${cocktail.strIngredient5} ${cocktail.strMeasure5 ? ` : ${cocktail.strMeasure5}` : ""} </li>` : ""}
                    ${cocktail.strIngredient6 ? `<li class="list-group-item">${cocktail.strIngredient6} ${cocktail.strMeasure6 ? ` : ${cocktail.strMeasure6}` : ""} </li>` : ""}
                    ${cocktail.strIngredient7 ? `<li class="list-group-item">${cocktail.strIngredient7} ${cocktail.strMeasure7 ? ` : ${cocktail.strMeasure7}` : ""} </li>` : ""}
                    </ul>
                    <h4 class="card-title">Method</h4>
                    <p class="card-text">${cocktail.strInstructions}</p>
                    <p class="card-text"><strong>Glass Type : </strong>${cocktail.strGlass}</p>
                    <p class="card-text"><strong>Category : </strong>${cocktail.strAlcoholic}</p>
                    <h4>Rate this recipe:</h4>
                    <div class ="star-rating card-title">
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <span class="sr-only">Star</span>
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <span class="sr-only">Star</span>
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <span class="sr-only">Star</span>
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <span class="sr-only">Star</span>
                      <i class="fas fa-star" aria-hidden="true"></i>
                      <span class="sr-only">Star</span>
                    </div>
                    <button class="close-btn"><i class="fas fa-angle-double-up" aria-hidden="true"></i>
                         <span class="sr-only">Button to close current section</span>
                    </button>
                  </div>
                </div>
          </div>
      </div>
    `;
    });
    $('#cocktail-list').empty().append(cocktailElems);


    //Adding event listener on click to expand the card-body

    const card = document.querySelectorAll(".card-body");
    const closeDiv = document.querySelectorAll(".close-btn");
    const stars = document.querySelectorAll(".fa-star");

    //Adding event listener on click to expand the card-body
    for (let i = 0; i < card.length; i++) {
        $(card[i]).click(function () {
            if ($(this).children(".recipe").hasClass("hidden")) {
                $(this).children(".recipe").show();
            }
        });

        //Adding event listener on mouseleave to collapse the card-body
        $(card[i]).mouseleave(function () {
            $(this).children(".recipe").hide("slow");
        });
    }

    // function to clos the div on click of the button collapse the recipe card 
    function collapseRecipe() {
        for (let x = 0; x < closeDiv.length; x++) {
            console.log($(closeDiv[x]).parent());
            $(closeDiv[x]).click(function () {
                $(this).prevUntil(card).hide();
                $(this).hide();
            });
        }

    }

    collapseRecipe();
    // Adding event listener for star rating 

    for (let i = 0; i < stars.length; i++) { //loop through all the stars

        $(stars[i]).click(function () { // on click function change color 
            $(this).css("color", "#be6851");
            $(this).nextAll().css("color", "#0d0709");
            $(this).prevAll().css("color", "#be6851");
            setTimeout(() => { alert('Thank you for rating this recipe'); }, 1000); //timeout function to display the message 
        });
        //Event listener on mouseenter change the color of the stars 
        $(stars[i]).on("mouseenter", function () {
            $(this).css("color", "yellow");
        });


    }





}


