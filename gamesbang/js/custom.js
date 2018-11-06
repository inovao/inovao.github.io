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

    if($('.new-slider').length){
        $('.new-slider').slick({
        	appendArrows: '.new-slider-arrows',
        	prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-left-chevron"><use xlink:href="#icon-left-chevron"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-right-chevron"><use xlink:href="#icon-right-chevron"></use></svg></button>',
        	
        });
    };

    if($('.popular-slider').length){
        $('.popular-slider').slick({
        	appendArrows: '.popular-slider-arrows',
        	prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-left-chevron"><use xlink:href="#icon-left-chevron"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-right-chevron"><use xlink:href="#icon-right-chevron"></use></svg></button>',
        	slidesToShow: 4, 
        	slidersToScroll: 1,
        	
        	responsive: [
        		{
        			breakpoint: 1301,
        			settings: {
        				slidesToShow: 3
        			}
        		},
        		{
        			breakpoint: 1025,
        			settings: {
        				slidesToShow: 4
        			}
        		},
        		{
        			breakpoint: 901,
        			settings: {
        				slidesToShow: 3
        			}
        		},
        		{
        			breakpoint: 581,
        			settings: {
        				slidesToShow: 2
        			}
        		},
        		{
        			breakpoint: 451,
        			settings: {
        				slidesToShow: 1
        			}
        		},
        	]
        });
    };

    if($('.navbar-menu').length){
		$('.navbar-menu').each(
			function()
			{
				$(this).jScrollPane(
					{
						showArrows: $(this).is('.arrow')
					}
				);
				var api = $(this).data('jsp');
				var throttleTimeout;
				$(window).bind(
					'resize',
					function()
					{
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					}
				);
			}
		)
	}


    if($('.carset-list').length){
        $('.carset-list').slick({
        	
        	
        	appendArrows: '.carset-slider-arrows',
        	prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-left-chevron"><use xlink:href="#icon-left-chevron"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-right-chevron"><use xlink:href="#icon-right-chevron"></use></svg></button>',
        	responsive: [
        		{
        			breakpoint: 10000,
			      	settings: "unslick"
        		},
        		{
        			breakpoint: 1061,
        			settings: {
        				slidesToShow: 8
        				
        			}
        		},
        		{
        			breakpoint: 901,
        			settings: {
        				slidesToShow: 7
        				
        			}
        		},
        		{
        			breakpoint: 768,
        			settings: {
        				slidesToShow: 4
        				
        			}
        		},
        		{
        			breakpoint: 480,
        			settings: {
        				slidesToShow: 3
        				
        			}
        		}
        	]
        });
    };


    
    
    $('.navbar-button').on('click', function(){
    	$(this).toggleClass('active');
    	$('.navbar-dropdown').toggleClass('open')
    })


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




