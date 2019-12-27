// ==UserScript==
// @name         ek$i-font-changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eksisozluk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function changeFont(element){
    element.setAttribute("style",element.getAttribute("style")+";font-family: Arial");
    for(var i=0; i < element.children.length; i++){
        changeFont(element.children[i]);
    }
}
changeFont(document.getElementsByTagName("body")[0]);


    // Your code here...
})();
