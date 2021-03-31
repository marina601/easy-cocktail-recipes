//jshint esversion: 6
/*globals $:false */
$(document).ready(function(){
  
// Declaring variables 
const img = document.querySelectorAll("img");
const fullName = document.querySelectorAll("h3");
const closeBtn = document.querySelectorAll(".close-btn");
const bioDivs = document.querySelectorAll(".bioDiv");


// function to display the hidden information on click 
function showBio(){
    for (let i = 0; i < 2; i++){
       let eachName = fullName[i];
       let singleImg = img[i];
     
      
        $(eachName).on("click", function(){
          $(this).nextAll().show(200);
           $(this).parent(bioDivs).css("height", "fit-content");
        });
        $(singleImg).on("click", function(){
          $(this).nextAll().show(200);
           $(this).parent(bioDivs).css("height", "fit-content");
        });
    }

}

showBio();


//function to hide the information on click of the button
function closeBio(){
    for(let j = 0; j < closeBtn.length; j++){
        $(closeBtn[j]).on("click", function(){
          $(this).prevUntil(fullName).hide();
          $(this).hide();
          $(this).delay(1000).parent(bioDivs).height(350);
        });
    }
}

closeBio();

//if else statement to check the height of the bioDivs and to ensure only one is opening at the time
if ($("#bio-1").height() > 1000) {
        $("#bio-2").height(354);
} else if ($("bio-2").height() > 100) {
    $("#bio-2").height(354);
} else {
    $(bioDivs).height(350);
}

});