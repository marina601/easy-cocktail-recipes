//jshint esversion: 6

//Navigation code to collapse the menu on mobile view

$(document).ready(function(){
  
$(".toggle-btn").click(function() {
    $(".navItem").addClass("active").toggle("slow");
});
//toggle button to display menu items at mobile screen view 

//About Page:

$(".img-bartender-1, #headingOlivia").on("click", function() {
    
//on click expand the div 
    $("#bio-1").height(1000);
// on click show the text content for Olivia
    $(".bio").show(450);
    $("#solialLinks1").show(470);
    $("#closeO").slideDown(500);
});


    
// on click hide all the elements
 

$("#closeO").on("click", function(){
    
// on click hide all the elements 
   $(".bio, #solialLinks1").slideUp(100);
   $(this).slideUp(100);
   $("#bio-1").delay(2000).height(330);
});


$(".img-bartender-2, #headingMartin").on("click", function() {
    
//on click expand the div 
   $("#bio-2").height(1000);
// on click show the text content for martin and button
   $(".bio-2").show(450);
   $("#socialLinks2").show(470);
   $("#closeM").slideDown(500);

});

$("#closeM").on("click", function(){
    
// on click hide all the elements 
   $(".bio-2, #socialLinks2").slideUp(100);
   $(this).slideUp(100);
  
   $("#bio-2").delay(2000).height(330);
});



});