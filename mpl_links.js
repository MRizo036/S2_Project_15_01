"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Maria De Jesus Rizo
   Date:   4.18.19
   
   Filename: mpl_links.js

*/
//The code block below states that when the page is loaded within the browser window, the anonymous function will be run. 
window.addEventListener("load", function () {
    //The line below creates a variable with the name of allSelect. The variable is then given the value of the form selection list with the name of govLinks.
    var allSelect = document.forms.govLinks;
    //The code block below creates a variable that will loop the code block within as long as the value of i is less then the length of the allSelect array.
    for (var i = 0; i < allSelect.length; i++) {
        //The line below states that when the allSelect is changed, the anonymous function will be run.
        allSelect.onchange = function (e) {
            //The line below states that the href of the will be set to the value of the target e. This changes the page in the browser window.
            document.location.href = e.target.value;
        }
    }
})