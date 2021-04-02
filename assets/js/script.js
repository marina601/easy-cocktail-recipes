//jshint esversion: 6
/*globals $:false */
//declaring variable
const navBtn = document.querySelector(".toggle-btn");

$(document).ready(function () {
    /**
    * function on click of the navBtn add class "active"
    * toggle method used expand and collapse the menu  
    */
    $(navBtn).click(function () {
        $(".navItem").addClass("active").toggle("slow");
    });
});