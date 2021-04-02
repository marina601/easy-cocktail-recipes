//jshint esversion: 6
/*globals $:false */
$(document).ready(function () {
 // Declaring variables 
    const img = document.querySelectorAll("img");
    const fullName = document.querySelectorAll("h3");
    const closeBtn = document.querySelectorAll(".close-btn");
    const bioDivs = document.querySelectorAll(".bioDiv");

    /**
     * function which which shows bio information 
     * created a general loop to be used for different variables 
     * declared new variables for fullName and image
     * on click function when each name or image is clicked all the next elements show 
     * the parent div heigh needs to fit content 
     */
    function showBio() {
        for (let i = 0; i < 2; i++) {
            let eachName = fullName[i];
            let singleImg = img[i];

            $(eachName, singleImg).on("click", function () {
                $(this).nextAll().show(200);
                $(this).parent(bioDivs).css("height", "fit-content");
            });
        }

    }
    showBio();

    /**
     * function which which hides the information on click of the button 
     * loop through each button 
     * on click of each button, all the parent elements hide until <h3> element 
     * hide the button as well
     * delay parent <div> element hight to collapse to allow all the elements to hide first 
     */
    function closeBio() {
        for (let j = 0; j < closeBtn.length; j++) {
            $(closeBtn[j]).on("click", function () {
                $(this).prevUntil(fullName).hide();
                $(this).hide();
                $(this).delay(1000).parent(bioDivs).height(350);
            });
        }
    }
    closeBio();

    /**
     * if else statement added to check the bio div hight 
     * if one bio div height is more than 1000px then the other bio div height should be 354px
     * else both bio div height is 354px
     */
    if ($("#bio-1").height() > 1000) {
        $("#bio-2").height(354);
    } else if ($("bio-2").height() > 100) {
        $("#bio-2").height(354);
    } else {
        $(bioDivs).height(350);
    }

});