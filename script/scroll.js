var header_scroll = $('.header_scroll'),
    scrollPrev = 0;

$(window).scroll(function() {

    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header_scroll.addClass('out');
    } else {
        header_scroll.removeClass('out');
    }
    scrollPrev = scrolled;
});