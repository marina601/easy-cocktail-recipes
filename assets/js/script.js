$(document).ready(function(){
   $("#call-out-1").toggle("slow");
//display the first element with class call-out 
 $(document).scroll(function(){
   $("#call-out-2").delay(500).fadeIn("slow");
   $("#call-out-3").delay(1000).fadeIn("slow");
    });

//display the other two elements on scroll with a little delay


$(".toggle-btn").click(function() {
    $(".navItem").addClass("active").toggle("slow");
});
//toggle button to display menu items at mobile screen view 


$(".img-bartender-1").click(function() {
    
//on click expand the div 
    $("#bio-1").height(1100);
// on click show the text content for Olivia
    $(".bio").delay(1000).toggle("medium");
});

$(".img-bartender-2").click(function() {
    
//on click expand the div 
    $("#bio-2").height(1000);
// on click show the text content for martin
    $(".bio-2").delay(1000).toggle("medium");
});


});