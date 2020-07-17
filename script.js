$(function () {

    $(".home").click(function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
        $('#sidebar-menu').hide('slow')
    });

    $(".about").click(function(){
        $('body').animate({
            scrollTop: ($(".section-header:contains('About')").offset().top) - 80
        }, 800)
        $('#sidebar-menu').hide('slow')
    });

    $(".showreel").click(function(){
        $('body').animate({
            scrollTop: ($(".section-header:contains('Showreel')").offset().top) - 80
        }, 800)
        $('#sidebar-menu').hide('slow')
    });

    $(".contact").click(function(){
        $('body').animate({
            scrollTop: ($(".section-header:contains('Contact')").offset().top) - 80
        }, 800)
        $('#sidebar-menu').hide('slow')
    });

    $(window).scroll(function(){
        $('#menubar').toggleClass('secondary', $('body').scrollTop() < 100)
    })


    $(window).scroll(function(){
        if(isOnScreen($('.about-container'))){
            $('.about').addClass('active red')
            $('.home').removeClass('active red')
        } else {
            $('.home').addClass('active red')
            $('.about').removeClass('active red')
        }
    })

    $(window).scroll(function(){
        if(isOnScreen($('.showreel-container'))){
            $('.showreel').addClass('active red')
            $('.about').removeClass('active red')
            $('.contact').removeClass('active red')
            $('.home').removeClass('active red')
        } else {
            $('.showreel').removeClass('active red')
        }
    })

    $(window).scroll(function(){
        if(isOnScreen($('.contact-container'))){
            $('.contact').addClass('active red')
            $('.showreel').removeClass('active red')
            $('.home').removeClass('active red')
        } else {
            $('.contact').removeClass('active red')
        }
    })

    $('.menu-button').click(function(){
        $('#sidebar-menu').toggle('slow')
    })

    // =======================================================
    // Code below thatnks to EvanHerman on Github
    // https://gist.github.com/EvanHerman/a1045c19e115edc18b12
    // =======================================================

    function isOnScreen(elem) {
        // if the element doesn't exist, abort
        if( elem.length == 0 ) {
            return;
        }
        var $window = jQuery(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = jQuery(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height
    
        return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }

});
