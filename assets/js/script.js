

//hide the elements with class "call-out"

$(document).ready(function(){
   $("#call-out-1").toggle("slow");
});

$(document).scroll(function(){
   $("#call-out-2").show("slow");
   $("#call-out-3").fadeIn("slow");
})


