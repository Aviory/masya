var header_scroll = $('.header_scroll'),
    scrollPrev = 0;

header_scroll.addClass('out');

$(window).scroll(function() {

    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev || scrolled<700) {
        header_scroll.addClass('out');
    } else {
        if (scrolled > 700 )
            header_scroll.removeClass('out');
    }


    scrollPrev = scrolled;
});