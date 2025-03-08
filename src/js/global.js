$('.icon,.wooden').hover(function() {
    var a = Math.random() * 15 - 5;
    $(this).css('transform', 'rotate(' + a + 'deg) scale(1.07)');
}, function() {
    $(this).css('transform', 'none');
});