$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbaar').addClass("sticky");
        } else {
            $('.navbaar').removeClass("sticky");
        }
        // ------------------------------------------------
        //    scroll up button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //  ------------
    // slid up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });


    // -------------------------------------------
    // toggle menubaar/navbaar script
    $('.menu-btn').click(function () {
        $('.navbaar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //------------------------------------------------
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "You-Tuber", "Softw. E."],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["B.Tech-Student", "Developer", "You-Tuber", "Software E."],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    // ---------------------------------------------------
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});