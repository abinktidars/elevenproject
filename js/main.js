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
                    slidesToShow: 1
                }
            },
        ]
    })

    // Stories Slider
    $(".stories").slick({
        centerMode: true,
        slidesToShow: 2,
        arrows: false,
        dots: true,
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
                    slidesToShow: 3,
                    centerMode: true
                }
            },
        ]
    })
})