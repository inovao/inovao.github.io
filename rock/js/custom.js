$(window).on('load', function(){

	$('body').removeClass('loaded'); 
});

$(function(){

	/* ---------------------------------------------- /*
	 * Fixed header 
	/* ---------------------------------------------- */
	$("header").removeClass("fixed");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 15) {
			$("header").addClass("fixed").fadeIn('fast');;
		} else {
			$("header").removeClass("fixed").fadeIn('fast');
		};
	});

    /* ---------------------------------------------- /*
	 * Slider
	/* ---------------------------------------------- */
    if($('.slider-wrap').length){
	    $('.slider-wrap').slick({
	    	fade: true,
	    	adaptiveHeight: true,
	    	responsive: [
	    		{
	    			breakpoint: 481,
	    			settings: {
	    				arrows: false,
	    				dots: true,
	    			}
	    		}
	    	]
	    });
	};

	

});

   


