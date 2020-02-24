$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--section-services').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-contact-us').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact-us').offset().top}, 5);
    });
    
    $('.js--scroll-to-services').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 5);
    });
    
    /* Mobile navigation */
    $('.js--nav-icon, .js--main-nav a').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        
        if ($(window).width() < 768) {
            nav.slideToggle(200);
        }
        
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    
});