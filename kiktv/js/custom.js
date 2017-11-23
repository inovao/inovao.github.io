$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){

    if($('.styler').length){
        $('.styler').styler();
    };

    $('.trend-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,

				}
			}
			
		]
    });


    $("#search-input-js").on("change keyup", function() {
		$('.search-bar').addClass('open');
		if($(this).val() == '') {
			$('.search-bar').removeClass('open');
		}
	});

    $(document).click( function(event){
      if( $(event.target).closest(".search-bar").length ) 
        return;
      $(".search-bar").removeClass('open');
      
      event.stopPropagation();
    });

    

    $('.channel-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
    });

   	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		$('.trend-slider').slick('setPosition');
		$('.channel-slider').slick('setPosition')
		return false
	});


});

   


