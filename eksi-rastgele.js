// ==UserScript==
// @name         eksi-rastgele
// @namespace    http://tampermonkey.net/
// @version      1
// @description  rastgele entry
// @author       tugberk
// @match        https://eksisozluk.com/?q=
// @grant        none
// ==/UserScript==

'use strict';

// Your code here...


var i = 0;
var sinir = 9124411;

//iki deger arasında integer deger almak icin random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function kontrol(){
	var myRand = getRandomInt(1, sinir);
	console.log(myRand);
	var link = "https://eksisozluk.com/entry/" + myRand;
	//window.open(link,'_blank');
    window.open(link, '_self');
}

kontrol();

