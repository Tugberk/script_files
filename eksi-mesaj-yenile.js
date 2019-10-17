// ==UserScript==
// @name         mesaj-reload
// @namespace    http://tampermonkey.net/
// @version      1
// @description  rastgele entry
// @author       tugberk
// @match        https://eksisozluk.com/mesaj
// @grant        none
// ==/UserScript==

'use strict';

// Your code here...


//30 saniyede bir reload yapsin bu sayfayi


function makeAlert(){
    //alert("Popup window!");
    window.location.reload();

};
setInterval(makeAlert, 5000);
