// ==UserScript==
// @name         mesaj-reload
// @namespace    http://tampermonkey.net/
// @version      1
// @description  mesaj-kontrol
// @author       tugberk
// @match        https://eksisozluk.com/mesaj
// @grant        none
// ==/UserScript==

'use strict';

// Your code here...

//ortaligi temizle
document.getElementsByClassName('topic-list partial')[0].remove();
document.getElementsByClassName('loggedin')[0].remove();


//nickleri alalim ancak bir tane aliyor
var item = document.querySelectorAll("li > article > a > h2");
console.log(item[0].innerText);


//mesajlari gondereni sakliyor
/*
var i = 0;
for(i=0;i<item.length;i++){
    item[i].innerText = "hello";
}
*/

var i = 0;
for(i=0;i<item.length;i++){
    item[i].innerHTML += " -_- ";
}




function makeAlert(){

    window.location.reload();

    //bu bolumde eger okunmamis mesaj varsa o zaman alert yapiyor
    if(document.getElementsByClassName("unread")[0]) {
    var item = document.querySelector("li > article > a > h2");
    item = item.setAttribute("style",item.getAttribute("style")+";font-size:24px;color:#FF0000");
    var itemtext = item.textContent;
    itemtext += " mesaj var";
    console.log(itemtext , " den mesaj var");
    var mytitle = document.querySelector("title");
    var mytitletext = mytitle.textContent;
    mytitle.innerHTML = itemtext + " den yeni mesaj var";
    }


};
setInterval(makeAlert, 6000);


    function changebg(element)
    {
    element.setAttribute("style",element.getAttribute("style")+";background-color:white");
    for(var i=0; i < element.children.length; i++){
        changebg(element.children[i]);
    }
}


changebg(document.getElementsByTagName("body")[0]);


