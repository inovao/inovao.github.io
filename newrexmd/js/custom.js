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

	$('.link-more-button .link-more').on('click', function(){
		$(this).toggleClass('active');
		$(this).parent().next().slideToggle(200)
	})

	$('.burger').on('click', function(){
		$('.main-menu').toggleClass('open')
	})
   
    function parallax() {
	   	$window = $(window);
		$('[data-type="background"]').each(function(){
		     var $bgobj = $(this);
			$(window).scroll(function() {
			    var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
			    var coords = '64% '+ yPos + 'px';
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


if($('.benefits-step-list').length){
	  $slick_slider = $('.benefits-step-list');
	  settings = {
	    slidesToShow: 2,
	    slidesToSroll: 1,
	    prevArrow: '<button class="slick-arrow slick-prev"></button>',
	    nextArrow: '<button class="slick-arrow slick-next"></button>',
	    responsive: [
	    	{
	    		breakpoint: 767,
	    		settings: {
	    			slidesToShow: 1,
	    			slidesToSroll: 1,
	    		}
	    	}
	    ]
	  }
	  $slick_slider.slick(settings);

	  // reslick only if it's not slick()
	  $(window).on('load resize', function() {
	    if ($(window).width() > 992) {
	      if ($slick_slider.hasClass('slick-initialized')) {
	        $slick_slider.slick('unslick');
	      }
	      return
	    }

	    if (!$slick_slider.hasClass('slick-initialized')) {
	      return $slick_slider.slick(settings);
	    }
	  });

	}

	if($('.process-row ').length){
	  $slick_slider2 = $('.process-row ');
	  settings2 = {
	    slidesToShow: 1,
	    slidesToSroll: 1,
	    arrows: false,
	    autoplay: true,
  		autoplaySpeed: 4000,
	    prevArrow: '<button class="slick-arrow slick-prev"></button>',
	    nextArrow: '<button class="slick-arrow slick-next"></button>',
	  }
	  $slick_slider2.slick(settings2);

	  // reslick only if it's not slick()
	  $(window).on('load resize', function() {
	    if ($(window).width() > 992) {
	      if ($slick_slider2.hasClass('slick-initialized')) {
	        $slick_slider2.slick('unslick');
	      }
	      return
	    }

	    if (!$slick_slider2.hasClass('slick-initialized')) {
	      return $slick_slider2.slick(settings2);
	    }
	  });

	}

	if($('.doctors-row').length){
	  $slick_slider3 = $('.doctors-row');
	  settings3 = {
	    slidesToShow: 2,
	    slidesToSroll: 1,
	    arrows: false,

	    prevArrow: '<button class="slick-arrow slick-prev"></button>',
	    nextArrow: '<button class="slick-arrow slick-next"></button>',
	    responsive: [
	    	{
	    		breakpoint: 767,
	    		settings: {
	    			slidesToShow: 1,
	    			slidesToSroll: 1,
	    			centerMode: true,
	    			variableWidth: true,
	    		}
	    	}
	    ]
	  }
	  $slick_slider3.slick(settings3);

	  // reslick only if it's not slick()
	  $(window).on('load resize', function() {
	    if ($(window).width() > 992) {
	      if ($slick_slider3.hasClass('slick-initialized')) {
	        $slick_slider3.slick('unslick');
	      }
	      return
	    }

	    if (!$slick_slider3.hasClass('slick-initialized')) {
	      return $slick_slider3.slick(settings3);
	    }
	  });

	}