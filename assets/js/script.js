//Navigation code to collapse the menu on mobile view

$(document).ready(function(){
  
$(".toggle-btn").click(function() {
    $(".navItem").addClass("active").toggle("slow");
});
//toggle button to display menu items at mobile screen view 

//About Page:

$(".img-bartender-1").on("click", function() {
    
//on click expand the div 
    $("#bio-1").height(1070);
// on click show the text content for Olivia
    $(".bio").show("medium");
    $("#closeO").slideDown("medium");
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
   $(".bio-2").show("medium");
   $("#closeM").slideDown("medium");

});

$("#closeM").on("click", function(){
    
// on click hide all the elements 
   $(".bio-2").slideUp("fast");
   $(this).slideUp("fast");
  
   $("#bio-2").delay(3000).height(330);
});



});