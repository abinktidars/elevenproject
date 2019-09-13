$(document).ready(function(){

    // Latest Work Slider
    $(".project").slick({
        centerMode: true,
        slidesToShow: 3,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        focusOnSelect: true,
        // infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    
                }
            },
        ]
    })

    // Stories Slider
    $(".stories").slick({
        centerMode: false,
        slidesToShow: 2.3,
        arrows: true,
        dots: false,
        infinite : false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            },
        ]
    })

    // Testimonial Slider
    $(".sliderTestimonial").slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true
    }) 

    // Wow Js
    new WOW().init();
})