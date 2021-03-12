const margaritaURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const negroniURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni';
//const daiquiriURL
const mojitoURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m';
//const gimletURL
//const martiniURL
//const manhattanURL
//const sidecarURL
const aperolURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=aperol';

// Margarita Recipe
function getCocktail(){
  fetch(margaritaURL)
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
        displayMargaritaCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktail();


function displayMargaritaCocktail(cocktail){

    let margarita = cocktail.drinks[0];
   // console.log(margarita);
 //created a variable for margarita cocktail

    let margaritaTitle = document.querySelector("#margaritaHeading");
//console.log(margaritaTitle);
    margaritaTitle.innerHTML = margarita.strDrink;
// getting the title to display 

   let margaritaImg = document.getElementById("img-margharita");
   //console.log(margaritaImg);
   margaritaImg.src = margarita.strDrinkThumb;
   //getting an image to display in the recipe card 
 
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
 
 //get ul element 
     let ul = document.getElementById("ing-margarita");
 //console.log(ul);
 // get il element 
     let allIngredients = ul.children;
     //console.log(allIngredients);
// loop through the li elements and display text content 
     for(let i = 0; i < allIngredients.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredients == null && allIngredients[i] == undefined || allIngredients[i] == "" ) {
             break;
         }
        
        allIngredients[i].textContent = `${margarita[`strMeasure${i}`]} : ${margarita[`strIngredient${i}`]}`;
        };
    
    // getting the method

    let margaritaMethod = document.querySelector("#margarita-method");
    //console.log(margaritaMethod);
    margaritaMethod.innerHTML = margarita.strInstructions;
}

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

// Aperol Recipe
function getCocktailMojito(){
  fetch(mojitoURL)
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
        displayMojitoCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getCocktailMojito();


function displayMojitoCocktail(cocktail){
    // getting all the elements from the recipe card 
    let mojito = cocktail.drinks[1];
    let mojitoTitle = document.querySelector("#mojitoHeading");
    let mojitoImg = document.getElementById("img-mojito");
    let ulMojito = document.getElementById("ing-mojito");
    let allIngredientsM = ulMojito.children;
    let mojitoMethod = document.querySelector("#mojito-method");
    console.log(mojito);
 
   // getting the title of the recipe
    mojitoTitle.innerHTML = mojito.strDrink;
 
   //getting an image to display in the recipe card 
   mojitoImg.src = mojito.strDrinkThumb;

   // getting the method
    mojitoMethod.innerHTML = mojito.strInstructions;
 
    for(let i = 1; i < 16; i++) {
    //console.log(i);

     //if statement to check for null and empty strings, then not to display empty spaces
     if(mojito[`strIngredient${i}`] == null || mojito[`strIngredient${i}`] == "" ) {
      break;
        }
     if (mojito[`strMeasure${i}`] === null && mojito[`strMeasure${i}`] === "" && mojito[`strMeasure${i}`] === undefined) {
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
       
}



