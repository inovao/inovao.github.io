$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){

    $('#callback-form').submit(function(e) {
         
         var form = $(this),
             data = form.serialize(),
             sub = form.find('input[type="submit"]');

         $.ajax({
             url: 'send-ajax.php',
             type: 'POST',
             data: data,
             beforeSend: function() {
               sub.val('...');
             },
             success: function(data) {
                 sub.val('SEND');
             }
         });

         return false;
     });


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
    * Focus input
    /* ---------------------------------------------- */


    $('.form-input').focus(function(){
        var label = $(this).next('label');
        var width = $(label).width();
        var adjust = width;
        var value = $(this).val();
 
        if(value == ''){
            label.stop().animate({ 'margin-left': '-'+adjust, 'left': '100%', }, '300');
            $(this).parent().addClass('focus')
        } else {
            label.css({ 'left':'-'+adjust });
            
        }
    }).blur(function(){
        var label = $(this).next('label');
        var value = $(this).val();
        if(value == ''){
            label.stop().animate({ 'margin-left':'0', 'left': '0', }, '300');
            $(this).parent().removeClass('focus')

        } 
    });



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

   


