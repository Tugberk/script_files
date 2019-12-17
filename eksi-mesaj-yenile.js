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

// ses calmayi hazirliyor
var player = document.createElement('audio');
player.src = 'https://notificationsounds.com/soundfiles/a86c450b76fb8c371afead6410d55534/file-sounds-1108-slow-spring-board.mp3';
player.preload = 'auto';


function makeAlert(){
    
    window.location.reload();

    //bu bolumde eger okunmamis mesaj varsa o zaman alert yapiyor
    if(document.getElementsByClassName("unread")[0]) {
    player.play();
    }


};
setInterval(makeAlert, 9000);
