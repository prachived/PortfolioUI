$(document).ready(function () {

    // On document ready:

    /*
     ----------------------------------------------------------------------
     Progress Bars
     ----------------------------------------------------------------------
     */


    $('.progress-bar').each(function () {
        $(this).on('inview', function (event, isInView) {
            if (isInView) {
                $(this).css('width',  function() {
                    return ($(this).attr('aria-valuenow')+'%');
                });
            }
        });
    });



    /*
     ----------------------------------------------------------------------
     Magnific Popup
     ----------------------------------------------------------------------
     */

    $('#container-portfolio').mixItUp();

    "use strict";

    /*
     ----------------------------------------------------------------------
     Portfolio
     ----------------------------------------------------------------------
     */
    $('.popup-gallery').magnificPopup({
        delegate: ".popup-content",
        type: 'inline',
        midClick: true,
        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }


    });


    $("#portfolio-grid .port-item-cont").on("click", function () {
        $("#portfolio-grid .port-item-cont").removeClass("touch");
        $(this).addClass("touch");
    });

    $(".mfp-close").on("click", function () {
        $("#portfolio-grid .port-item-cont").removeClass("touch");
    });

    $(".portfolio li").on("click", function () {
        $(".portfolio li").removeClass("active");
        $(this).addClass("active");
    });


    $(".portfolio-item").each(function (i) {
        $(this).find("a.view-work").attr("href", "#work-" + i);
        $(this).find(".podrt-desc").attr("id", "work-" + i);
    });


}); // End $(document).ready(function(){


/*
 ----------------------------------------------------------------------
 Scroll
 ----------------------------------------------------------------------
 */
//Check to see if the window is top if not then display button
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});
//Click event to scroll to top
$().click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});


/*
 ----------------------------------------------------------------------
 Fixed menu
 ----------------------------------------------------------------------
 */

$(document).ready(function () {

    var $menu = $("#menu");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 700 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll
});

/*
 ----------------------------------------------------------------------
 Menu scroll
 ----------------------------------------------------------------------
 */


var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 0.2; // скорость
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].onclick = function () {
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }

        return false;
    }
}


window.addEventListener('scroll', function (e) {
    var nav = document.querySelectorAll('section[id^="nav"]');
    for (var i = 0; i < nav.length; i++) {
        document.querySelector('a[href="#' + nav[i].id + '"]').className = ((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1 - nav[i].offsetHeight) ? 'red' : '');
    }
}, false);

/*
 ----------------------------------------------------------------------
 Menu item
 ----------------------------------------------------------------------
 */
$(document).ready(function () {

    var $about = $("#about");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 800 && $about.hasClass("line-none")) {
            $about.removeClass("line-none").addClass("line-add");
        } else if ($(this).scrollTop() <= 800 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }

    });//scroll
    $(window).scroll(function () {
    if ($(this).scrollTop() > 1500 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }
    });//scroll
});
$(document).ready(function () {

    var $about = $("#resume");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500 && $about.hasClass("line-none")) {
            $about.removeClass("line-none").addClass("line-add");
        } else if ($(this).scrollTop() <= 1500 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }

    });//scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2500 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }
    });//scroll
});
$(document).ready(function () {

    var $about = $("#portfolio");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 2500 && $about.hasClass("line-none")) {
            $about.removeClass("line-none").addClass("line-add");
        } else if ($(this).scrollTop() <= 2500 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }

    });//scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 3800 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }
    });//scroll
});
$(document).ready(function () {

    var $about = $("#blog");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 3800 && $about.hasClass("line-none")) {
            $about.removeClass("line-none").addClass("line-add");
        } else if ($(this).scrollTop() <= 3800 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }

    });//scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 4550 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }
    });//scroll
});
$(document).ready(function () {

    var $about = $("#contact");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 4550 && $about.hasClass("line-none")) {
            $about.removeClass("line-none").addClass("line-add");
        } else if ($(this).scrollTop() <= 4550 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }

    });//scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5550 && $about.hasClass("line-add")) {
            $about.removeClass("line-add").addClass("line-none");
        }
    });//scroll
});


/*
 ----------------------------------------------------------------------
Preloader
 ----------------------------------------------------------------------
 */

$(document).ready(function() {
    $('body').jpreLoader();
});