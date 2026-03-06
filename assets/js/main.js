(function($) {
    "use strict"
    $(document).ready(function() {

        // Preloader fallback: hide after 1s if window load hasn't fired (e.g. broken resources)
        setTimeout(function() {
            $("#preloader").fadeOut(400);
        }, 1000);

        // Video Play Button (only if Magnific Popup loaded)
        if ($.fn.magnificPopup) {
            $('.video-play-button a').magnificPopup({
                type: 'iframe'
            });
        }

        // MouseHover Animation
        var hoverLayer = $(".hero-area");
        var heroImgOne = $(".hero-shape.shape-01");
        var heroImgTwo = $(".hero-shape.shape-02");
        var heroImgThree = $(".hero-shape.shape-03");
        if (hoverLayer.length) {
            hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 100;
            var valueY = (e.pageY * -1) / 120;
            heroImgOne.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 80;
            var valueY = (e.pageY * -1) / 100;
            heroImgTwo.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 60;
            var valueY = (e.pageY * -1) / 80;
            heroImgThree.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        }

        // CounterUp (only if plugin loaded and elements exist)
        if ($.fn.counterUp && $('.counter').length) {
            $('.counter').counterUp({
                delay: 10,
                time: 1500
            });
        }

        // Feedback Slider
        if ($.fn.slick && $('.feedback-slider').length) {
            $('.feedback-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            });
        }

        // Blog Slider
        if ($.fn.slick && $('.blog-slider').length) {
            $('.blog-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ] });
        }

        // Category Slider
        if ($.fn.slick && $('.category-slider').length) {
            $('.category-slider').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<i class="prev-arrow fa fa-long-arrow-left"></i>',
            nextArrow: '<i class="next-arrow fa fa-long-arrow-right"></i>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ]
        });
        }

        // Course Details Tab
        $(".tab-accordion ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });


    });

    $(window).on('scroll', function() {

        // Back Top
        var ScrollTop = $('.back-to-top');

        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function() {

        // WOW JS (only if loaded) – scroll-triggered animations
        if (typeof WOW !== 'undefined') {
            new WOW({
                offset: 80,
                mobile: true,
                live: true
            }).init();
        }

        // Preloader - hide as soon as page is fully loaded
        $("#preloader").fadeOut(400);

        // Back Top
        $(".back-to-top").on('click', function() {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });
})(jQuery);