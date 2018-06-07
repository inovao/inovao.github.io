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

    $('.accordion__head').on('click', function(){
        var el = $(this);
        el.next('.accordion__body').slideToggle();
        el.parent().toggleClass('open');
        return false;
    });

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

    if($('.fancybox').length) {
        $(".fancybox").fancybox({
           
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }

    $('.close-popup').on('click', function(){
         $.fancybox.close();
         return false;
    });

    if($('.comment-slider').length){
        $('.comment-slider').slick({
            adaptiveHeight: true,
        })
    };

    if($('.step-slider').length){
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

	

});

   
var hf = function(){
        var h_footer = $('footer').height();
        $('.content').css({
            'paddingBottom': h_footer
        });

    }

    $(window).bind('load resize', hf);


