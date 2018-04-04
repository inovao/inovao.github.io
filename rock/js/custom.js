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


	// carousels

    var offer = $('.js-offer');
    if (offer.length) {
        var autoPlay = function autoPlay() {
            interval = setInterval(function () {
                var next = $('.js-offer-dot.active').next();
                if (next.length) {
                    next.trigger('click');
                } else {
                    dot.first().trigger('click');
                }
            }, 5000);
        };

        // count height
        var countMaxHeight = function countMaxHeight() {
            var maxHeight = Math.max.apply(null, item.map(function () {
                return $(this).height();
            }).get());

            slider.height(maxHeight);
        };

        var slider = offer.find('.js-offer-slider'),
            item = offer.find('.js-offer-item'),
            dot = offer.find('.js-offer-dot'),
            activeIndex = 0;

        // click on dot
        dot.on('click', function (e) {
            var _this = $(this),
                index = _this.index();

            item.removeClass('active active-before');
            item.eq(activeIndex).addClass('active-before');
            item.eq(index).addClass('active');

            dot.removeClass('active');
            _this.addClass('active');

            activeIndex = index;

            // autoplay
            if (interval) {
                clearInterval(interval);
            }
            autoPlay();
        });

        var interval;

        autoPlay();
        countMaxHeight();

        $(window).resize(function () {
            countMaxHeight();
        });
    }


	

});

   


