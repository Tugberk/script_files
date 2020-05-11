// ==UserScript==
// @name         eksi-ilk-entry
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  herhangi bir basliga tikladiginda sadece ilk entry gosterir
// @author       You
// @match        https://eksisozluk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var tumEntryler = document.getElementsByClassName('content');
    var a = document.getElementsByClassName('content')[0];

    var i= 1;
    for(i=1;i<tumEntryler.length;i++){
        tumEntryler[i].innerHTML = "";
    }


})();
