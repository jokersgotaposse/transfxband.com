$(document).ready(function() {
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 100);

        $('.blurred-image').css('opacity', opacityVal);
    });
});