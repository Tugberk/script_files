// ==UserScript==
// @name         mesaj icerisi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eksisozluk.com/mesaj/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    document.getElementsByClassName('topic-list partial')[0].remove();
    document.getElementsByClassName('loggedin')[0].remove();

    var item = document.getElementById("message-send-form");
    item.innerHTML += "<h1 style='color:#FF0000'><a href='https://www.eksisozluk.com/mesaj'>tüm mesajları göster</a></h1>";






})();
