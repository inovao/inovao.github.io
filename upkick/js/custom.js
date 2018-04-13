$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){


    /* ---------------------------------------------- /*
	 * Carousel
	/* ---------------------------------------------- */
    if($('.carousel-wrap').length){
        $('.carousel-wrap').slick({
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false,
						fade: true,
					}
				}
			]
        });
    };

    /* ---------------------------------------------- /*
	 * Recommandent slider
	/* ---------------------------------------------- */

    if($('.recommandent-wrap').length){
        $('.recommandent-wrap').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [

				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						fade: true,
					}
				}
			]

        });
    };

    /* ---------------------------------------------- /*
	 * Perfomance slider
	/* ---------------------------------------------- */
    $slick_slider = $('.perfomance-wrap');
	settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [

			{
				breakpoint: 880,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
				}
			}
		]
	}
	$slick_slider.slick(settings);

	// reslick only if it's not slick()
	$(window).on('resize load', function() {
	if ($(window).width() > 974) {
	  if ($slick_slider.hasClass('slick-initialized')) {
	    $slick_slider.slick('unslick');
	  }
	  return
	}

	if (!$slick_slider.hasClass('slick-initialized')) {
	  return $slick_slider.slick(settings);
	}
	});


	/* ---------------------------------------------- /*
	 * Toggle menu
	/* ---------------------------------------------- */

    $('.navbar-toggle').click(function(){
    	$(this).toggleClass('active');
    	$('html').toggleClass('html-lock html-margin');
    	$('.navbar-wrap').slideToggle(500);
    })
    

    /* ---------------------------------------------- /*
	 * Column Height
	/* ---------------------------------------------- */
    if($('[data-mh]').length){
	   	$(function() {
	        resetTestOptions();
	    });

	    var resetTestOptions = function() {
	        // update byRow option
	        var byRow = $('body').hasClass('test-rows');
	        $.each($.fn.matchHeight._groups, function() {
	            this.options.byRow = byRow;
	        });


	    };
    };






});

   


