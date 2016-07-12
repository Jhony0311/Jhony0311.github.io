(function() {
    'use strict';
    var headerBar = document.querySelector('#header');
    document.addEventListener('scroll', function(e) {
        // document.body.scrollTop
        console.log(document.querySelector('#header').getAttribute('height'));
    }, true);
}());
