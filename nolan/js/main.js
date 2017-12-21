$('#fullpage').fullpage({
    anchors: ['introduction', 'services', 'testmonials', 'contacts'],
    menu: '#nav-fullpage',
    scrollingSpeed: 1000
}); 

$('.slider-testimonials ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});