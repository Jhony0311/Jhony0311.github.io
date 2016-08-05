'use strict';

import jump from 'jump.js';
let mainLogo =  document.querySelector('#main-logo');
let headerBar = document.querySelector('#header');
let navLinks = document.querySelectorAll('.navigation__link');
document.addEventListener('scroll', function(e) {
    if(window.pageYOffset >= 100) {
        headerBar.setAttribute('class', 'header header--scrolled');
    } else {
        headerBar.setAttribute('class', 'header');
    }
    // console.log(mainLogo.offsetHeight);
}.bind(this), true);

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let target = e.srcElement.hash;
        let distance = document.querySelector(target).offsetTop - window.pageYOffset;
        let stopPos = stopPos = -(headerBar.clientHeight + 10);
        jump(target, {
            duration: 500,
            offset: stopPos
        });
        return false;
    })
}.bind(this));
