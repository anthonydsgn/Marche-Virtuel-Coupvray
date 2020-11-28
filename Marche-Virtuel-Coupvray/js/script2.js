$(document).ready(function () {


    $('img').hover(function () {

        var URLsrc = $(this).attr('src');

        $(this).attr('src', URLsrc.replace('a.png', 'b.png'));
    }, function () {
        var URLsrc = $(this).attr('src');

        $(this).attr('src', URLsrc.replace('b.png', 'a.png'));

    })


    $('a.restaurant').click(function () {
        $('.article').fadeOut(0);
        $('div.restaurant').fadeIn(1000);
    });

    $('a.food').click(function () {
        $('.article').fadeOut(0);
        $('div.food').fadeIn(1000);
    });

    $('a.bienbeauté').click(function () {
        $('.article').fadeOut(0);
        $('div.bienbeauté').fadeIn(1000);
    });

    $('a.artisanat').click(function () {
        $('.article').fadeOut(0);
        $('div.artisanat').fadeIn(1000);
    });

    $('.all-articles').click(function () {
        $('.article').fadeIn(1000);
    });


    $('#menu-hamb, #menu a').click(function () {
        $('#menu').fadeToggle(300);
        $('#navbar').toggleClass('activate-nav');
        $('body').toggleClass('overflowHidden');
    });


});
