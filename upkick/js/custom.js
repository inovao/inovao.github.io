$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){

	/* ---------------------------------------------- /*
	 * Fixed header
	/* ---------------------------------------------- */
	var homeHeight = $('.home').innerHeight();
	$(".header").removeClass("fixed");
	$(window).scroll(function(){
		if ($(this).scrollTop() > homeHeight) {
			$(".header").addClass("fixed").fadeIn('fast');;
		} else {
			 $(".header").removeClass("fixed").fadeIn('fast');
		};
	});

	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
    if($('.styler').length){
        $('.styler').styler();
    };


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
    * MultiSelect
    /* ---------------------------------------------- */
	$(".mutli-select-head").on('click', function() {
		$(this).parent().find(".mutli-select-list").slideToggle('fast');
	});

	function getSelectedValue(id) {
		return $("#" + id).find("dt a span.value").html();
	}

	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass("mutli-select")) $(".mutli-select-list").hide();
	});

	$('.mutli-select-list label').on('click', function() {

		var title = $(this).find('input[type="checkbox"]').closest('.mutli-select-list').find('input[type="checkbox"]').val(),
			title = $(this).find('input[type="checkbox"]').val() + ",";

		if ($(this).find('.jq-checkbox').hasClass('checked')) {
			var html = '<span title="' + title + '">' + title + '</span>';
			$('.mutli-select-head__text').append(html);
			
			$(this).parents('.mutli-select').addClass('open');
		} else {
			$('span[title="' + title + '"]').remove();
			

		}
		if ($('.mutli-select-head__text').text() == "") {
			$(this).parents('.mutli-select').removeClass('open');
		} 
	});
	/* ---------------------------------------------- /*
    * Focus input
    /* ---------------------------------------------- */


    $('.form-input').focus(function(){
        var label = $(this).next('label');
        var width = $(label).width();
        var adjust = width;
        var value = $(this).val();
 
        if(value == ''){
            label.stop().animate({ 'margin-left': '-'+adjust, 'left': '100%', }, '300');
            $(this).css({'padding-right': width + 20})
            $(this).parent().addClass('focus')
        } else {
            label.css({ 'left':'-'+adjust });
            
        }
    }).blur(function(){
        var label = $(this).next('label');
        var value = $(this).val();
        if(value == ''){
            label.stop().animate({ 'margin-left':'0', 'left': '0', }, '300');
            $(this).removeAttr('style')
            $(this).parent().removeClass('focus')

        } 
    });

	/* ---------------------------------------------- /*
	 * Toggle menu
	/* ---------------------------------------------- */

    $('.navbar-toggle').click(function(){
    	$(this).toggleClass('active');
    	$('html').toggleClass('html-lock html-margin');
    	$('.navbar-wrap').slideToggle(500);
    	return false
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

   


