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

    if($('.styler').length){
	    $('.step-slider').slick({
	    	adaptiveHeight: true,
	    	dots: true,
	    	appendArrows: '.step-slider__arrows',
	    })
	};

	$('.toggle-menu').on('click', function(){
		$(this).toggleClass('active')
		$('.navbar').slideToggle();
		return false;
	})

	var hf = function(){
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingBottom': h_footer
		});

	}

	$(window).bind('load resize', hf);


});

   


