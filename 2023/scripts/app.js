import $ from "jquery";
import Foundation from "./_foundation";
import "./_slickjs";

// Foundation
$(document).foundation();

// Slick Slider
$('.box-slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    adaptiveHeight: true,
});

// Open the search form on click 
$('.search-button').on('click', function(e) {
    e.preventDefault();
    $('.search-container').animate({
        top: '0'
    });
});

// Close the search form on click
$('.close').on('click', function() {
    $('.search-container').animate({
        top: '-100vh'
    });
});