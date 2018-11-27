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

     if($('.slider').length){
        $('.slider').slick({
        	slidesToShow: 1,
        	dots: true,
        	prevArrow: '<button class="slick-prev slick-arrow">Prev</button>',
        	nextArrow: '<button class="slick-next slick-arrow">Next</button>',
        	appendArrows: '.slider-arrows' 
        });
    };

    $('.accordion__head').on('click', function(){
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});

    $('.navbar-toggle').on('click', function(){
		$('.navbar-fixed').addClass('open')
	})
	$('.navbar-close').on('click', function(){
		$('.navbar-fixed').removeClass('open')
	})
	$(".header").removeClass("fixed");
	$(window).on('scroll load', function(){

		if ($(this).scrollTop() > 200) {
			$(".header").addClass("fixed");
		} else {
			 $(".header").removeClass("fixed");
		};

		
	});

 //    $('.video__play').on('click', function(){
	// 	var dataYoutubeLink = $(this).parents('.js-video').attr('data-youtube-link');
	// 	$(this).parents('.js-video').html('<iframe class="video-frame" src="https://www.youtube.com/embed/'+ dataYoutubeLink +'?autoplay=1" allowfullscreen></iframe>');
	// 	$('.js-video').addClass('active');
	// });


	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

});




