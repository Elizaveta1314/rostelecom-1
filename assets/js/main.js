$(document).ready(function(){
    $('.slider').slick({
        appendArrows: $('.slide-arrow')
    });

    $('.slider-mobile').slick({
        appendArrows: $('.shop-arrow')
    });

    $('.integrations').slick({
        appendArrows: $('.integrations-arrow'),
        autoplay:true,
        autoplaySpeed:2000
    });

    $('.applications').slick({
        appendArrows: $('.applications-arrow'),
        autoplay:true,
        autoplaySpeed:2000
    });

    $('.office').slick({
        appendArrows: $('.office-arrow'),
        autoplay:true,
        autoplaySpeed:2000
    });
});