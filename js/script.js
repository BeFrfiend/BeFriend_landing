window.addEventListener('scroll', function() {
    if (pageYOffset != 0){
        document.getElementById('menu').classList.add('dynamic');
    } else {
        document.getElementById('menu').classList.remove('dynamic');
    }
});

$('.single-item').slick({
    dots:true,
    speed: 1000,
    easing:'ease',
    autoplay: true,
    autoplaySpeed: 5000
});