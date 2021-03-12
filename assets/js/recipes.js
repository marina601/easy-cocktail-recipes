const negroniURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni';
const pinaURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=pina"
const mURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m';
const gimletURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gimlet"
const sURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s"
const aperolURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=aperol';


// Negroni Recipe
function getCocktailNegroni(){
  fetch(negroniURL)
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
        displayNegroniCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktailNegroni();


function displayNegroniCocktail(cocktail){
    // getting all the elements from the recipe card 
    let negroni = cocktail.drinks[2];
    let negroniTitle = document.querySelector("#negroniHeading");
    let negroniImg = document.getElementById("img-negroni");
    let ulNegroni = document.getElementById("ing-negroni");
    let allIngredientsN = ulNegroni.children;
    let negroniMethod = document.querySelector("#negroni-method");
    console.log(negroni);
 
   // getting the title of the recipe
    negroniTitle.innerHTML = negroni.strDrink;
 
   //getting an image to display in the recipe card 
   negroniImg.src = negroni.strDrinkThumb;

   // getting the method
    negroniMethod.innerHTML = negroni.strInstructions;
 
    for(let i = 0; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(negroni[`strIngredient${i}`] == null || negroni[`strIngredient${i}`] == "" ) {
      break;
        }
     if (negroni[`strMeasure${i}`] == null || negroni[`strMeasure${i}`] == "" ) {
         break;
         }
    }

      // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsN.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsN == null && allIngredientsN[i] == undefined || allIngredientsN[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsN[i].textContent = `${negroni[`strMeasure${i}`]} : ${negroni[`strIngredient${i}`]}`;
        };
    
}

// Aperol Recipe
function getCocktailAperol(){
  fetch(aperolURL)
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
        displayAperolCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktailAperol();


function displayAperolCocktail(cocktail){
    // getting all the elements from the recipe card 
    let aperol = cocktail.drinks[0];
    let aperolTitle = document.querySelector("#aperolHeading");
    let aperolImg = document.getElementById("img-aperol");
    let ulAperol = document.getElementById("ing-aperol");
    let allIngredientsA = ulAperol.children;
    let aperolMethod = document.querySelector("#aperol-method");
    console.log(aperol);
 
   // getting the title of the recipe
    aperolTitle.innerHTML = aperol.strDrink;
 
   //getting an image to display in the recipe card 
   aperolImg.src = aperol.strDrinkThumb;

   // getting the method
    aperolMethod.innerHTML = aperol.strInstructions;
 
    for(let i = 1; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(aperol[`strIngredient${i}`] == null || aperol[`strIngredient${i}`] == "" ) {
      break;
        }
     if (aperol[`strMeasure${i}`] == null || aperol[`strMeasure${i}`] == "" ) {
         break;
         }
    }

      // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsA.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsA == null && allIngredientsA[i] == undefined || allIngredientsA[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsA[i].textContent = `${aperol[`strMeasure${i}`]} : ${aperol[`strIngredient${i}`]}`;
        };
        ulAperol.removeChild(ulAperol.childNodes[0]);
}

// Cocktail Recipe starting with letter M
function getCocktailM(){
  fetch(mURL)
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
        displayCocktailM(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktailM();



function displayCocktailM(cocktail){
    // getting all the elements from the recipe card for Mojito Cocktail
    let mojito = cocktail.drinks[1];
    let mojitoTitle = document.querySelector("#mojitoHeading");
    let mojitoImg = document.getElementById("img-mojito");
    let ulMojito = document.getElementById("ing-mojito");
    let allIngredientsM = ulMojito.children;
    let mojitoMethod = document.querySelector("#mojito-method");
    console.log(mojito);
 
//getting all the elements from the recipe card for Manhattan Cocktail

   let manhattan = cocktail.drinks[6];
   let manhattanTitle = document.querySelector("#manhattanHeading");
   let manhattanImg = document.getElementById("img-manhattan");
   let ulManhattan = document.getElementById("ing-manhattan");
   let allIngredientsManhattan = ulManhattan.children;
   let manhattanMethod = document.querySelector("#manhattan-method");
   console.log(manhattan);

//getting all the elements from the recipe card for Margarita Cocktail
  
    let margarita = cocktail.drinks[5];
    let margaritaTitle = document.querySelector("#margaritaHeading");
    let margaritaImg = document.getElementById("img-margharita");
    let ul = document.getElementById("ing-margarita");
    let allIngredients = ul.children;
    let margaritaMethod = document.querySelector("#margarita-method");


   // getting the title of the recipe
    mojitoTitle.innerHTML = mojito.strDrink;
    manhattanTitle.innerHTML = manhattan.strDrink;
    margaritaTitle.innerHTML = margarita.strDrink;
 
   //getting an image to display in the recipe card 
   mojitoImg.src = mojito.strDrinkThumb;
   manhattanImg.src = manhattan.strDrinkThumb;
   margaritaImg.src = margarita.strDrinkThumb;

   // getting the method
    mojitoMethod.innerHTML = mojito.strInstructions;
    manhattanMethod.innerHTML = manhattan.strInstructions;
    margaritaMethod.innerHTML = margarita.strInstructions;
 
    for(let i = 1; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(mojito[`strIngredient${i}`] == null || mojito[`strIngredient${i}`] == "" ) {
      break;
        } else if (mojito[`strMeasure${i}`] === null && mojito[`strMeasure${i}`] === "" && mojito[`strMeasure${i}`] === undefined) {
       break;
        }
    }

     // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsM.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsM == null && allIngredientsM[i] == undefined || allIngredientsM[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsM[i].textContent = `${mojito[`strMeasure${i}`]} : ${mojito[`strIngredient${i}`]}`;
        };
       

     for(let i = 1; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(manhattan[`strIngredient${i}`] == null || manhattan[`strIngredient${i}`] == "" ) {
      break;
        } else if (manhattan[`strMeasure${i}`] === null && manhattan[`strMeasure${i}`] === "" && manhattan[`strMeasure${i}`] === undefined) {
       break;
        }
    }

      // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsManhattan.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsManhattan[i] == null && allIngredientsManhattan[i] == undefined || allIngredientsManhattan[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsManhattan[i].textContent = `${manhattan[`strMeasure${i}`]} : ${manhattan[`strIngredient${i}`]}`;
        };
       
        for(let i = 0; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(margarita[`strIngredient${i}`] == null || margarita[`strIngredient${i}`] == "" ) {
      break;
        }
     if (margarita[`strMeasure${i}`] == null || margarita[`strMeasure${i}`] == "" ) {
         break;
         }
    }
        for(let i = 0; i < allIngredients.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredients == null && allIngredients[i] == undefined || allIngredients[i] == "" ) {
             break;
         }
        
        allIngredients[i].textContent = `${margarita[`strMeasure${i}`]} : ${margarita[`strIngredient${i}`]}`;
        };
}

function getCocktailS(){
  fetch(sURL)
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
        displayCocktailByS(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktailS();


function displayCocktailByS(cocktail){
    // getting all the elements from the recipe card for Sidecar Cocktail
    let snowday = cocktail.drinks[7];
    let snowdayTitle = document.querySelector("#snowdayHeading");
    let snowdayImg = document.getElementById("img-snowday");
    let ulSnowday = document.getElementById("ing-snowday");
    let allIngredientsSnowday = ulSnowday.children;
    let snowdayMethod = document.querySelector("#snowday-method");
    console.log(snowday);

     // getting all the elements from the recipe card for Sidecar Cocktail
    let sangria = cocktail.drinks[5];
    let sangriaTitle = document.querySelector("#sangriaHeading");
    let sangriaImg = document.getElementById("img-sangria");
    let ulSangria = document.getElementById("ing-sangria");
    let allIngredientsSangria = ulSangria.children;
    let sangriaMethod = document.querySelector("#sangria-method");
    console.log(sangria);
 
 
   // getting the title of the recipe
    snowdayTitle.innerHTML = snowday.strDrink;
    sangriaTitle.innerHTML = sangria.strDrink;
 
   //getting an image to display in the recipe card 
   snowdayImg.src = snowday.strDrinkThumb;
   sangriaImg.src = sangria.strDrinkThumb;

   // getting the method
    snowdayMethod.innerHTML = snowday.strInstructions;
    sangriaMethod.innerHTML = sangria.strInstructions;
 
    for(let i = 0; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(snowday[`strIngredient${i}`] == null || snowday[`strIngredient${i}`] == "" ) {
      break;
        }
     if (snowday[`strMeasure${i}`] == null || snowday[`strMeasure${i}`] == "" ) {
         break;
         }
    }

      // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsSnowday.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsSnowday[i] == null && allIngredientsSnowday[i] == undefined || allIngredientsSnowday[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsSnowday[i].textContent = `${snowday[`strMeasure${i}`]} : ${snowday[`strIngredient${i}`]}`;
        };

        for(let i = 0; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(sangria[`strIngredient${i}`] == null || sangria[`strIngredient${i}`] == "" ) {
      break;
        }
     if (sangria[`strMeasure${i}`] == null || sangria[`strMeasure${i}`] == "" ) {
         break;
         }
    }

      // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsSangria.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsSangria[i] == null && allIngredientsSangria[i] == undefined || allIngredientsSangria[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsSangria[i].textContent = `${sangria[`strMeasure${i}`]} : ${sangria[`strIngredient${i}`]}`;
        };
    
}

// Gimlet Recipe
function getCocktailGimlet(){
  fetch(gimletURL)
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
        displayGimletCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktailGimlet();


function displayGimletCocktail(cocktail){
    // getting all the elements from the recipe card 
    let gimlet = cocktail.drinks[0];
    let gimletTitle = document.querySelector("#gimletHeading");
    let gimletImg = document.getElementById("img-gimlet");
    let ulGimlet = document.getElementById("ing-gimlet");
    let allIngredientsG = ulGimlet.children;
    let gimletMethod = document.querySelector("#gimlet-method");
    console.log(gimlet);
 
   // getting the title of the recipe
 
    gimletTitle.innerHTML = gimlet.strDrink;
 
   //getting an image to display in the recipe card 
   gimletImg.src = gimlet.strDrinkThumb;

   // getting the method
    gimletMethod.innerHTML = gimlet.strInstructions;
 
    for(let i = 0; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(gimlet[`strIngredient${i}`] == null || gimlet[`strIngredient${i}`] == "" ) {
      break;
        }
     if (gimlet[`strMeasure${i}`] == null || gimlet[`strMeasure${i}`] == "" ) {
         break;
         }
    }

      // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsG.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsG == null && allIngredientsG[i] == undefined || allIngredientsG[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsG[i].textContent = `${gimlet[`strMeasure${i}`]} : ${gimlet[`strIngredient${i}`]}`;
        };
    
}

// Pina Colada Recipe
function getCocktailPina(){
  fetch(pinaURL)
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
        displayPinaCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktailPina();


function displayPinaCocktail(cocktail){
    // getting all the elements from the recipe card 
    let pina = cocktail.drinks[0];
    let pinaTitle = document.querySelector("#pinaHeading");
    let pinaImg = document.getElementById("img-pina");
    let ulPina = document.getElementById("ing-pina");
    let allIngredientsP = ulPina.children;
    let pinaMethod = document.querySelector("#pina-method");
    console.log(pina);
 
   // getting the title of the recipe
    pinaTitle.innerHTML = pina.strDrink;
 
   //getting an image to display in the recipe card 
   pinaImg.src = pina.strDrinkThumb;

   // getting the method
    pinaMethod.innerHTML = pina.strInstructions;
 
    for(let i = 0; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(pina[`strIngredient${i}`] == null || pina[`strIngredient${i}`] == "" ) {
      break;
        }
     if (pina[`strMeasure${i}`] == null || pina[`strMeasure${i}`] == "" ) {
         break;
         }
    }

      // loop through the li elements and display text content 
     for(let i = 1; i < allIngredientsP.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredientsP == null && allIngredientsP[i] == undefined || allIngredientsP[i] == "" ) {
             break;
         }
        // display ingredients 
        allIngredientsP[i].textContent = `${pina[`strMeasure${i}`]} : ${pina[`strIngredient${i}`]}`;
        };
    
}



