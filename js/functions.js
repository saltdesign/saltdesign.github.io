$(".to-home").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});

$(".to-about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-anchor").offset().top
    }, 2000);
});

$(".to-portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
});

$(".to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});
