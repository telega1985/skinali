$(document).ready(function() {
    
    "use strict";
    
    // Before-After plugin
    
    $(".before--after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'С скинали'
    });
    
    // Slick slider
    
    $(".before--slider").slick({
        draggable: false,
        dots: true,
        prevArrow: '<button class="before--arrow-left"><img src="images/arrow-left.png" alt="Влево"></button>',
        nextArrow: '<button class="before--arrow-right"><img src="images/arrow-right.png" alt="Вправо"></button>',
        dotsClass: "slick-dots before--slider-dots"
    });
    
    // Menu .active
    
    $(".menu-button").on("click", function() {
        $(".menu").toggleClass("menu-active");
        $(this).toggleClass("menu-button-active");
    });
    
    // Select
    
    $(".form--select").on("click", function() {
        $(".form--select-dropdown").toggleClass("form--select-dropdown-open");
        $(this).toggleClass("form--select-open");
    });
    
    $(".form--select-dropdown li").on("click", function() {
        var valueData = $(this).attr("data-value");
        $("#select-type").val(valueData);
        $(".form--select-checked").text(valueData);
    });
    
    // Slick для reviews
    
    $(".reviews--slider").slick({
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
    
    // Плавная навигация по сайту
    
    $("a[href^='#']").on("click", function() {
        var elemHref = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(elemHref).offset().top
        }, 800);
    });
    
    // Маска для ввода телефона
    
    $("[type='tel']").mask("(999) 999-99-99");
    
    
    
});

























