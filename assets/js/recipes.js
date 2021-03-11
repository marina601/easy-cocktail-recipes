/***const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";


function getData(type, cb){ //callback argument
    const xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type);
    xhr.send();


    xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
       // console.log(JSON.parse(this.responseText));
       cb(JSON.parse(this.responseText)); //calling the function
        }
    };
}
//we are calling the function on top and setting new parametars (data)
/****getData(function(data){
    console.log(data);
});***/

/**function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("margharita").innerHTML = data;

     console.log(cocktail.drinks[0]);   
    }   

}
***/

function getRandomCocktail(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
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
        displayRandomCocktail(data);
        //created a function with data as perimeter
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


getRandomCocktail();


function displayRandomCocktail(cocktail){

    let margarita = cocktail.drinks[0];
    console.log(margarita);
 //created a variable for margarita cocktail

    let margaritaTitle = document.querySelector("#margaritaHeading");
//console.log(margaritaTitle);
    margaritaTitle.innerHTML = margarita.strDrink;
// getting the title to display 

   let margaritaImg = document.getElementById("img-margharita");
   //console.log(margaritaImg);
   margaritaImg.src = margarita.strDrinkThumb;
   //getting an image to display in the recipe card 
 
    for(let i = 1; i < 16; i++) {
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
     for(let i = 1; i < allIngredients.length; i++) {
         //checking if anything is null or undefined and clearing the empty space
         if(allIngredients == null && allIngredients[i] == undefined || allIngredients[i] == "" ) {
             break;
         }
        
        allIngredients[i].textContent = `${margarita[`strMeasure${i}`]} : ${margarita[`strIngredient${i}`]}`;
        };
    
    // getting the method

    let margaritaMethod = document.querySelector("#margarita-method");
    console.log(margaritaMethod);
    margaritaMethod.innerHTML = margarita.strInstructions;
}


//adding event listener 

document.getElementsByTagName("img").click(function () {
    
})