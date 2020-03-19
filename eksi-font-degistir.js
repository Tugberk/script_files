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

//first function to change font
    function changeFont(element)
    {
    element.setAttribute("style",element.getAttribute("style")+";font-family: verdana");
    for(var i=0; i < element.children.length; i++){
        changeFont(element.children[i]);
    }
}

changeFont(document.getElementsByTagName("body")[0]);

   //changesize
   function changeSize(element)
    {
    element.setAttribute("style",element.getAttribute("style")+";font-size:12px");
    for(var i=0; i < element.children.length; i++){
        changeSize(element.children[i]);
    }
}

changeSize(document.getElementsByTagName("body")[0]);

    //change bg
       function changebg(element)
    {
    element.setAttribute("style",element.getAttribute("style")+";background-color:#D3D3D3");
    for(var i=0; i < element.children.length; i++){
        changebg(element.children[i]);
    }
}

changebg(document.getElementsByTagName("body")[0]);


 //end function




    //second function here to replace
var replaceArry = ["ş", "$"];
var numTerms = replaceArry.length;
var txtWalker = document.createTreeWalker (
    document.body,
    NodeFilter.SHOW_TEXT,
    {acceptNode: function (node) {
            //-- Skip whitespace-only nodes
        if (node.nodeValue.trim())
                return NodeFilter.FILTER_ACCEPT;

            return NodeFilter.FILTER_SKIP;
        }
    },
    false
);
var txtNode = null;

while (txtNode = txtWalker.nextNode ()) {
    var oldTxt = txtNode.nodeValue;

    for (var J = 0;  J < numTerms;  J++) {
        oldTxt = oldTxt.replace (replaceArry[0], replaceArry[1]);
    }
    txtNode.nodeValue = oldTxt;
}
//second function ends


})();

