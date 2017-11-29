$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){

	//fixed header and footer
	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});

	}

	$(window).bind('load resize', hf);


	//Click event to scroll to top
	$('.up').click(function() {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 800);
	    return false;
	});


	//form styler
    if($('.styler').length){
        $('.styler').styler();
    };

    //click like
    $('.like').click(function(){
    	var like = $(this).find('span');
    	if(like.hasClass('icon-like') == true ) {
    		$(this).find('.icon-like').removeClass('icon-like').addClass('icon-like-actiive')
    	} else if (like.hasClass('icon-like-actiive') == true ) {
			$(this).find('.icon-like-actiive').removeClass('icon-like-actiive').addClass('icon-like')
    	}
    	
    });

    $('.js-sliding').click(function(){
    	$(this).parents('.channel-list').toggleClass('show');
    	return false;
    })

     $('.toggle-filter-search').click(function(){
    	$(this).parents('.filter-search').find('.filter-search-wrap').toggleClass('show');
    	$(this).toggleClass('active');
    	return false;
    })

    //scrollbar
	if($('.scrollbar-rail').length){

		jQuery('.scrollbar-rail').scrollbar();
	};
    
    
    //Slider top
    $('.kik-top-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
		variableWidth: true,
		responsive: [
		    {
				breakpoint: 1680,
				settings: {
					slidesToShow: 3,

				}
			}
			
		]
	});

	//Trend slider
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

    //Channel sldier
    $('.channel-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
    });

    //SearchBar
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

   
    //  Tabs
   	$('.replays-tabs a').click(function(){
		$(this).parents('.replays-tab-wrap').find('.replays-tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	//  Tabs
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

   


