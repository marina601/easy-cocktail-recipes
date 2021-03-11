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
 console.log(cocktail.drinks[0]);
 //getting the cocktail we want
}