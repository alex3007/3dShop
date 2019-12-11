$(document).ready(function () {
    
    //wow animation
    new WOW().init();
    
    //flexSlider
    $('#main-slider').flexslider({
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: false,
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 3000,
        animationSpeed: 1000,
        initDelay: 0,
        randomize: false,

        // Usability features
        pauseOnAction: true,
        pauseOnHover: false,
        useCSS: true,
        touch: true,
        video: false,

        // Primary Controls
        controlNav: false,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",

        // Secondary Navigation
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: 'Pause',
        playText: 'Play',

        // Special properties
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
    });

    //OwlCarousel

    var owl = $('.owl-carousel');
    var winWidth = $(window).width();
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,

    });

    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [5000])
    });
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });
    

});
