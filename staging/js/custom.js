$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){


	/* ---------------------------------------------- /*
	 * Slider
	/* ---------------------------------------------- */
    if($('.slider').length){
        $('.slider').slick({
        	 responsive: [
				{
					breakpoint: 601,
					settings: {
						arrows: false,
						dots: true,
					}
				}
			]
        });
    };


	/* ---------------------------------------------- /*
	 * open menu mobile
	/* ---------------------------------------------- */
    $('.toggle-menu').click(function(){
    	$('.phone').removeClass('active')
    	$(this).toggleClass('active');
    	$('.nav').slideToggle(550);
    	return false;
    })

    $(document).click( function(event){
      if( $(event.target).closest(".nav").length ) 
        return;
      $(".nav").slideUp(550);
      $('.toggle-menu').removeClass('active')
      event.stopPropagation();
    });


	/* ---------------------------------------------- /*
	 * open phone mobile
	/* ---------------------------------------------- */
    $('.phone-icon').click(function(){
    	$(".nav").slideUp(550);
    	$('.toggle-menu').removeClass('active')
    	$(this).parent().toggleClass('active');
    	return false;
    })
    $(document).click( function(event){
      if( $(event.target).closest(".phone-list").length ) 
        return;
      $('.phone').removeClass('active')
      event.stopPropagation();
    });

    


});

   


