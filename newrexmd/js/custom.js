$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){


	/* ---------------------------------------------- /*
	 * Slick
	/* ---------------------------------------------- */
    if($('.reviews-slider').length){
        $('.reviews-slider').slick({
        	arrows: false,
        	dots: true,
        	adaptiveHeight: true,
        });
    };

    $('.accordion__head').on('click', function(){
		var el = $(this);
		var elNext = $(this).next();
		$('.accordion__head').not(el).removeClass('open')
		$('.accordion__body').not(elNext).slideUp(200)
		el.next('.accordion__body').slideToggle(200);
		el.toggleClass('open');
		return false;
	});
   
    function parallax() {
	   	$window = $(window);
		$('[data-type="background"]').each(function(){
		     var $bgobj = $(this);
			$(window).scroll(function() {
			    var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
			    var coords = '50% '+ yPos + 'px';
			    $bgobj.css({ backgroundPosition: coords });
			}); 
		});    
	}
	parallax();

	function slideLeft() {
		$(window).on('load scroll', function() { 
		    if ($(window).scrollTop() >= $('.standart-bg').offset().top  - window.innerHeight) { 
		        $('.standart-bg').addClass('open');
		    }
		    else {
		      $('.standart-bg').removeClass('open');
		    }
		});
	}
	slideLeft();

});