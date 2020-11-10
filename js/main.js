$(function () {
    // promo gallery
    $('.slick').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: '.slick-dots',
    });

    $win = $(window);
    const isMobile = () => $win.width() < 640;
    $.scrollify({
        section: 'section.section',
        interstitialSection: 'footer',
    });

    $win.resize(() => {
        if (isMobile()) {
            $.scrollify.disable();
        } else {
            $.scrollify.enable();
        }
    }).trigger('resize');
});
