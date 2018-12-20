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

     if($('.graduates-slider').length){
        $('.graduates-slider').slick({
        	slidesToShow: 3,
        	slidesToScroll: 1,
        	dots: true,
        	infinite: true,
        	appendArrows: '.graduates-slider__arrows',
        	appendDots: '.graduates-slider__arrows',
        	responsive: [
        		{
        			breakpoint: 1024,
        			settings: {
        				slidesToShow: 2,
        				
        			}
        		},
        		{
        			breakpoint: 767,
        			settings: {
        				slidesToShow: 1,
        				
        			}
        		}
        	]
        });
    };


    if($('.fancybox').length) {
    	$(".fancybox").fancybox({
    		autoSize : true,
    		width : 'auto',
    		maxWidth : '100%',
    		helpers: {
    			overlay: {
    				locked: true
    			},
    		}
    	});
    }
    


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




