$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
//fixed header and footer
var hf = function(){
	var h_header = $('header').height();
	var h_footer = $('footer').height();
	$('.content').css({
		'paddingTop': h_header,
		'paddingBottom': h_footer
	});

}

$(window).on('load resize', hf);

    $('.kik-top-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-right-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
		variableWidth: true,
		responsive: [
		    {
				breakpoint: 1680,
				settings: {
					slidesToShow: 3,

				}
			},
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 2,

				}
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 1,

				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 460,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					arrows: false,
					adaptiveHeight: true,
				}
			}
			
		]
	});
$(function(){
	if($('.channel-wrap-list__item, .timeblock').length){
		$('.channel-wrap-list__item, .timeblock').tooltipster({
		    contentCloning: true,
		    delay: [1400, 100],
		    interactive: true,
		    side: ['right', 'left', 'bottom', 'top']
		});
	}
    $('.open-menu').click(function(){
    	
    	$('.main-wrapper').toggleClass('menu-sidebar-open');
    	$('.box-menu-sidebar').toggleClass('open');
    	$('body').toggleClass('no-scroll');
    	return false
    });

    $('.close-menu-sidebar').click(function(){
    	
    	$('.main-wrapper').removeClass('menu-sidebar-open');
    	$('.box-menu-sidebar').removeClass('open');
    	$('body').removeClass('no-scroll');
    	return false
    });

	$(document).click( function(event){
		if( $(event.target).closest(".box-menu-sidebar").length ) 
		return;
		$('.main-wrapper').removeClass('menu-sidebar-open')
    	$('.box-menu-sidebar').removeClass('open')
		$('body').removeClass('no-scroll');
		event.stopPropagation();
    });


   
    

	$('.js-sliding').click(function(){
    	$(this).toggleClass('active');
    	$(this).parents('.channel-content').find('.js-channel-list-hide').slideToggle(400)
    	return false;
    });

	$('.js-remove-ms-list').click(function(){
		$(this).parents('.my-shows-list__item').fadeOut(1000, function(){$(this).remove()});
		return false;
	});

	$('.js-remove-f-list').click(function(){
		$(this).parents('.favoris-list__item').fadeOut(1000, function(){$(this).remove()});
		return false;
	});

	$('.js-open-search').toggle(function(){
    	$(this).addClass('active');
    	$('.search').slideDown(400)
    	$('.content').animate({'margin-top': '56px'}, 400)
    	return false;
    }, function(){
    	$(this).removeClass('active');
    	$('.search').slideUp(400)
    	$('.content').animate({'margin-top': '0px'}, 400)
    	return false;
    });
	

	//Click event to scroll to top
	$('.up').click(function() {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 800);
	    return false;
	});


	//form styler
    if($('.styler').length){
    	var _dropdown;
		var settings = {autoReinitialise: true};

        $('.styler').styler({
			onSelectOpened: function() { 
			 $(this).find(".jq-selectbox__dropdown ul").jScrollPane();
			 }
        });
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

    $('.kik-page__link').click(function(){
    	$('.kik-page__text').show();
    	$(this).parent().hide();

    })

    //click like
    $('.mark').click(function(){
    	$(this).toggleClass('active')
    	
    });

    

     $('.toggle-filter-search').click(function(){
    	$(this).parents('.filter-search').find('.filter-search-wrap').toggleClass('show');
    	$(this).toggleClass('active');
    	$(this).parents('.filter-nav').find('.filter-nav__item:not(.filter-search)').toggleClass('f-tabs-hidden')
    	return false;
    })

    //scrollbar
	$('.jScrollPane').each(function(){
		$(this).jScrollPane(
			{
				horizontalDragMaxWidth: '47',

			}
		);
		var api = $(this).data('jsp');
		var throttleTimeout;
		$(window).bind('resize',function(){
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
		});
	});

    
    //Slider top


	//Trend slider
    $('.trend-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-right-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',

    });

    //Trend slider
    $('.trend-slider2').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-right-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
		responsive: [

			{
				breakpoint: 1279,
				settings: {
					
					slidesToShow: 3,
					variableWidth: true,
				}
			},
			{
				breakpoint: 720,
				settings: {
					
					slidesToShow: 1,
					variableWidth: true,


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

		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-right-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
    });

    $('.channel-list-slider').slick({
		slidesToShow: 12,
		slidesToScroll: 12,
		infinite: false,
		variableWidth: true,
		arrows: false,
		responsive: [

			{
				breakpoint: 720,
				settings: {
					
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			}
			
		]
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


    $('.direct-list a').hover(function(){
		$(this).parents('.direct-tab-wrap').find('.direct-tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

    $('.tabs-g a').click(function(){
		$(this).parents('.tab-wrap-g').find('.tab-wrap-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		$('.channel-list-slider').slick('setPosition');
		if(id == '#kik-tabs_3') {
			$('#v-replays').show();
			$('#h-replays').hide();
		} else {
			$('#h-replays').show();
			$('#v-replays').hide();
		}
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
    $( '.slideshow' ).slick({
    	slidesToShow: 1,
    	centerMode: true,
    	centerPadding: '287px',
    	prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-right-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
    	asNavFor: '.slideshow-info',
    	responsive: [
    		{
    			breakpoint: 1280,
    			settings: {
    				centerPadding: '60px',
    			}
    		},
    		{
    			breakpoint: 720,
    			settings: {
    				centerPadding: '0px',
    			}
    		}
    	]
    });

    $('.slideshow-info').slick({
    	slidesToShow: 1,
    	centerMode: true,
    	centerPadding: '287px',
    	arrows: false,
    	asNavFor: '.slideshow',
    	adaptiveHeight: true,
    	responsive: [
    		{
    			breakpoint: 1280,
    			settings: {
    				centerPadding: '60px',
    			}
    		},
    		{
    			breakpoint: 720,
    			settings: {
    				centerPadding: '0px',
    			}
    		}
    	]
    });



    var nhlTeams = ['Anaheim Ducks', 'Atlanta Thrashers', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago Blackhawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton OIlers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New Rork Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Phoenix Coyotes', 'Pittsburgh Penguins', 'Saint Louis Blues', 'San Jose Sharks', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Washington Capitals'];
    var nbaTeams = ['Atlanta Hawks', 'Boston Celtics', 'Charlotte Bobcats', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 'LA Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Jersey Nets', 'New Orleans Hornets', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia Sixers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
    var nhl = $.map(nhlTeams, function (team) { return { value: team, data: { category: 'Les chaines' }}; });
    var nba = $.map(nbaTeams, function (team) { return { value: team, data: { category: 'Les programmes' } }; });
    var teams = nhl.concat(nba);

    // Initialize autocomplete with local lookup:
    $('#autocomplete').devbridgeAutocomplete({
        lookup: teams,
        // appendTo: ''
        minChars: 1,
        onSelect: function (suggestion) {
            $('#selection').html('You selected: ' + suggestion.value + ', ' + suggestion.data.category);
        },
        showNoSuggestionNotice: true,
        noSuggestionNotice: 'Sorry, no matching results',
        groupBy: 'category'
    });


    $('.js-replays-tab li').on('click', function(){
    	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    	replaysLi = $(this).index();

    	$(this).parents('.tab-wrap').find('.tv-programme').find('.tab-cont').eq(parseInt(replaysLi)).removeClass('hide')
    	$(this).parents('.tab-wrap').find('.box-actu').find('.tab-cont').eq(parseInt(replaysLi)).removeClass('hide')
		
    })

});


   
$slick_slider = $('.kik-tabs-list');
settings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	prevArrow: '<button class="slick-arrow slick-prev"></button>',
	nextArrow: '<button class="slick-arrow slick-next"></button>',
}
$slick_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).parents('.tab-wrap-g').find('.tab-wrap-cont').addClass('hide');
	$(this).find('.slick-current').siblings().removeClass('active');
	var id = $(this).find('.slick-current a').attr('href');
	$(id).removeClass('hide');
	$(this).find('.slick-current').addClass('active');
	if(id == '#kik-tabs_3') {
		$('#v-replays').show();
		$('#h-replays').hide();
	} else {
		$('#h-replays').show();
		$('#v-replays').hide();
	}
	
});
$slick_slider.slick(settings);

$plays_slider = $('.kik-plays');
playsSettings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	arrows: false,
	infinite: false,
}

$plays_slider.slick(playsSettings);


$(window).on('load resize', function() {
	if ($(window).width() < 960) {
	  $('.navbar-user').toggle(function(){
	  	$('.user-list').fadeIn(400);
	  	$('body').addClass('no-scroll');
	  	return false
	  }, function(){
	  	$('.user-list').fadeOut(400);
	  	$('body').removeClass('no-scroll');
	  })
	  return false
	} else {
		$('.navbar-user').unbind( "click" )
		$('.user-list').removeAttr('style');
		$('body').removeClass('no-scroll');
	}
});

	// reslick only if it's not slick()
$(window).on('load resize', function() {
	if ($(window).width() > 719) {
	  if ($slick_slider.hasClass('slick-initialized')) {
	    $slick_slider.slick('unslick');
	  }
	  return

	}

	if (!$slick_slider.hasClass('slick-initialized')) {
	  return $slick_slider.slick(settings);
	}

});

	// reslick only if it's not slick()
$(window).on('load resize', function() {
	if ($(window).width() > 719) {
	  if ($plays_slider.hasClass('slick-initialized')) {
	    $plays_slider.slick('unslick');
	  }
	  return
	}

	if (!$plays_slider.hasClass('slick-initialized')) {
	  return $plays_slider.slick(playsSettings);
	}
});

 if($('#myjwplayer').length){
	    
	jwplayer("myjwplayer").setup({
		 
		"file": "https://s3-us-west-2.amazonaws.com/shapiromd-video/Shapiro-MD-FB-v9.mp4",
		"image": 'img/actu-img.png',
		    "startparam": '10000',
		    "mediaid": "ihhd8q0e",

		});
	$('#myjwplayer').click(function() {
	$('.jw-icon-rewind, .jw-icon-fullscreen, .jw-text-duration').remove();
	});
};