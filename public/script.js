$('.menuicon span').click(() => {
    $('.menu').fadeIn(100);
    $('.menu').css({
        display: 'flex'
    })
})
$('.menu span').click(() => {
    $('.menu').fadeOut(300);
    $('.menxu').css({
        display: 'none'
    })
})