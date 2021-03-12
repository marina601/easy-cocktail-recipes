//Navigation code to collapse the menu on mobile view

$(document).ready(function(){
   $("#call-out-1").toggle("slow");
//display the first element with class call-out 
 $(document).scroll(function(){
   $("#call-out-2").delay(500).fadeIn("slow");
   $("#call-out-3").delay(1000).fadeIn("slow");
    });
//display the other two elements on scroll with a little delay



// About Page code to expand the bio on click
$(".toggle-btn").click(function() {
    $(".navItem").addClass("active").toggle("slow");
});
//toggle button to display menu items at mobile screen view 

//About Page:

$(".img-bartender-1").on("click", function() {
    
//on click expand the div 
    $("#bio-1").height(1070);
// on click show the text content for Olivia
    $(".bio").delay(1000).show("medium");
    $("#closeO").delay(2000).slideDown("medium");
});

$("#closeO").on("click", function(){
    
// on click hide all the elements 
   $(".bio").slideUp("fast");
   $(this).slideUp("fast");
  
   $("#bio-1").delay(3000).height(330);
});


$(".img-bartender-2").on("click", function() {
    
//on click expand the div 
   $("#bio-2").height(1020);
// on click show the text content for martin and button
   $(".bio-2").delay(1000).show("medium");
   $("#closeM").delay(2000).slideDown("medium");

});

$("#closeM").on("click", function(){
    
// on click hide all the elements 
   $(".bio-2").slideUp("fast");
   $(this).slideUp("fast");
  
   $("#bio-2").delay(3000).height(330);
});

// Recipe Cards
$("#img-margaritta").on("click", function(){
     $(".hidden").toggle();
});



$("#img-negroni").on("click", function(){
     $(".hidden").toggle();
});

$("#img-aperol").on("click", function(){
     $(".hidden").toggle();
});

$("#img-mojito").on("click", function(){
     $(".hidden").toggle();
});

$("#img-snowday").on("click", function(){
     $(".hidden").toggle();
});

$("#img-gimlet").on("click", function(){
     $(".hidden").toggle();
});

$("#img-manhattan").on("click", function(){
     $(".hidden").toggle();
});

$("#img-pina").on("click", function(){
     $(".hidden").toggle();
});
$("#img-sangria").on("click", function(){
     $(".hidden").toggle();
});


});

