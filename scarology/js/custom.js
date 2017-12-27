$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){

	$('.so-navbar-toggle').click(function(){
		$(this).toggleClass('active')
		$('body').toggleClass('no-scroll')
		$('.so-navbar').slideToggle(400)
	})
   	$('.carousel').carousel();
   	$('.carousel').on('slide.bs.carousel', function () {
	  var carouselIndex = $(this).find('.active').index();
	  if(carouselIndex  == 0) {
	  	$('.logo').addClass('active')
	  } else {
	  	$('.logo').removeClass('active')
	  }
	})
   	$('.clients-slider').slick({
   		slidesToShow: 6, 
   		slidesToScroll: 1,
   		responsive: [
   			{
   				breakpoint: 991,
   				settings: {
   					slidesToShow: 4,
   				}
   			},
   			{
   				breakpoint: 767,
   				settings: {
   					slidesToShow: 2,
   					arrows: false,
   				}
   			}
   		]
   	})
   	$('.slider').slick({
   		slidesToShow: 1, 
   		slidesToScroll: 1,
   		arrows: false,
   		infinite: false,
   		fade: true,
  		cssEase: 'linear',
  		autoplay: true,
   	})

});

   


