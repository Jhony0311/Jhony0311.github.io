(function() {
    'use strict';
    var headerBar = document.querySelector('#header');
    var mainLogo =  document.querySelector('#main-logo');
    var navLinks = document.querySelectorAll('.navigation__link');
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
            console.log(e);
            e.preventDefault();
            return false;
        })
    })
}());
