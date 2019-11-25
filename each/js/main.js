/* --------------- MENU ----------------- */
var togle = document.querySelector('.toggle-menu'),
	nav = document.querySelector('.nav'),
	close = document.querySelector('.nav .close');

togle.addEventListener('click', function() {
	nav.classList.add('fade');
	return false;
}, false);

close.addEventListener('click', function(e) {
	nav.classList.remove('fade');
	return false;
}, false);
/* --------------- // MENU ----------------- */

/* --------------- SLICK ----------------- */
$('.home').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
  	autoplaySpeed: 1500,
  	arrows: false,
  	fade: true,
  	cssEase: 'linear'
});

// $('.home-icons .visible-iphone').slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 3,
// 	autoplay: true,
//   	autoplaySpeed: 1500,
//   	arrows: false,
//   	fade: true,
//   	cssEase: 'linear',
//   	responsive: [
//   		{
// 		    breakpoint: 500,
// 		    settings: {
// 		        slidesToShow: 2,
// 		        slidesToScroll: 2
// 		    }
// 	    },
//   	]
// });
/* --------------- // SLICK ----------------- */