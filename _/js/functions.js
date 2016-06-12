$(document).ready(function(){
    $('.parallax').parallax();
});

// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 70) {
//         $("nav").addClass(".nav-down");
//         $("nav").removeClass("nav");
//     }
// });

 $(".button-collapse").sideNav();

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage','thirdPage','fourthPage','fifthPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: false,
        scrollingSpeed: 700,
        autoScrolling: false,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['', '#27c667',"#ccc","#27c667","#ccc"],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 900,
        responsiveHeight: 900,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});


$(document).ready(function(){

    $('#section1 img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flip',
        offset: 100
    });

    $('#section2 #me').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });

    $('#section2 #keyboards').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    $('#section3 .card').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 100
    });

    $('#section4 .determinate').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 100
    });

    $('#section5 h1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rotateInDownLeft',
        offset: 100
    });
});

$(function() {
    var header = $(".nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 600) {
            header.removeClass('nav').addClass("nav-down animated fadeIn");
        } else {
            header.removeClass("nav-down").addClass("nav animated fadeIn");
        }
    });
});


$(document).ready(function() {
   $('input#input_text, textarea#textarea1').characterCounter();
});
       

$('body').toggleClass('loaded');
