$(document).ready(function () {
    $('.open').click(function () {
        $('.pop-outer').fadeIn('fast');
    });
    $('.landing-page, .container').click(function () {
        $('.pop-outer').fadeOut('fast');
    });
});