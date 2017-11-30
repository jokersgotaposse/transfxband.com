$(document).ready(function() {
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 50);

        $('.blurred-image').css('opacity', opacityVal);
    });
});