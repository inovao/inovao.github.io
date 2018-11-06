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


	var hf = function(){
		var h_footer = $('footer').height();
		$('.main').css({
			'paddingBottom': h_footer
		});

	}

	$(window).bind('load resize', hf);


	$('.navbar-toggle').on('click', function(){
		$(this).parents('.header').toggleClass('active');
		$(this).parents('.navbar').find('.navbar-menu').toggleClass('open');
	})
	$(document).click( function(event){
      if( $(event.target).closest(".navbar").length ) 
        return;
      $(".header").removeClass("active");
      $(".navbar-menu").removeClass("open");
      
      event.stopPropagation();
    });
	$('.nav-tabs__item').on('click', function(){
		$('.nav-tabs__item').removeClass('active');
		$(this).addClass('active');
	})

	$(document).click( function(event){
      if( $(event.target).closest(".nav-tabs__item").length ) 
        return;
      $(".nav-tabs__item").removeClass("active");
      
      event.stopPropagation();
    });
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




