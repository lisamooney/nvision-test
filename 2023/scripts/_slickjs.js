import $ from "jquery";
import "slick-carousel";
if (typeof $.fn.slick == "function") {
    // Example for Slick
    $(".js-slick").slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}
