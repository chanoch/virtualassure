////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function($) {
    "use strict";

    // mobile navigation
    $(".nav-toggle").on('click',function (e) {
        $(".main-nav nav").toggleClass("show-nav");
    });

//  Smooth Scroll

    $('.main-nav a[href^="#"], a[href^="#"].scroll').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing', function () {
            window.location.hash = target;
        });
    });
});
