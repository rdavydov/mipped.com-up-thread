// ==UserScript==
// @name        Up thread button - mipped.com
// @namespace   Violentmonkey Scripts
// @match       https://mipped.com/f/threads/*
// @grant       none
// @version     1.3
// @license MIT
// @icon        https://www.google.com/s2/favicons?sz=64&domain=mipped.com
// @author      rdavydov
// @description https://greasyfork.org/en/scripts/455241-up-thread-button-mipped-com
// ==/UserScript==
 
var btnGroup = document.getElementsByClassName('buttonGroup');
 
var upBtn = document.createElement('a');
upBtn.href      = document.URL + '/up';
upBtn.innerHTML = 'Поднять';
upBtn.className = 'button--link button rippleButton';
upBtn.style = 'background: green; color: white;';
btnGroup[0].parentNode.insertBefore(upBtn, btnGroup[0].previousSibling);
