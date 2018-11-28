$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){


	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
    if($('.styler').length){
        $('.styler').styler();
    };

    $('a.anchor').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top -80;
		$('body,html').animate({scrollTop: bl_top}, 900);
		return false;
	});

     if($('.slider').length){
        $('.slider').slick({
        	slidesToShow: 1,
        	dots: true,
        	prevArrow: '<button class="slick-prev slick-arrow">Prev</button>',
        	nextArrow: '<button class="slick-next slick-arrow">Next</button>',
        	appendArrows: '.slider-arrows',
        	adaptiveHeight: true,
        	responsive: [
        		{
        			breakpoint: 480,
        			settings: {
        				dots: false,
        			}
        		}
        	]
        });
    };

    $('.accordion__head').on('click', function(){
		var el = $(this);
		$('.accordion__head').removeClass('open')
		$('.accordion__body').slideUp(200)
		el.next('.accordion__body').slideDown(200);
		el.addClass('open');
		return false;
	});

    $('.navbar-toggle').on('click', function(){
		$('.navbar-fixed').addClass('open')
		$('.header').css({'overflow': 'visible'})
	})
	$('.navbar-close').on('click', function(){
		$('.navbar-fixed').removeClass('open')
		$('.header').css({'overflow': 'hidden'})
	})
	$('.navbar-fixed .anchor').on('click', function(){
		$('.navbar-fixed').removeClass('open')
		$('.header').css({'overflow': 'hidden'})
	})
	$(".header").removeClass("fixed");
	$(window).on('scroll load', function(){

		if ($(this).scrollTop() > 200) {
			$(".header").addClass("fixed");
		} else {
			 $(".header").removeClass("fixed");
		};

		
	});

	$('.fancybox').fancybox({
	});




	

});




