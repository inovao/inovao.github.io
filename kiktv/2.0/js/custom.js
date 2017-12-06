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
    $('.kik-top-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
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
			}
			
		]
	});

	//Trend slider
    $('.trend-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
		responsive: [

			{
				breakpoint: 1360,
				settings: {
					
					slidesToShow: 2,
					variableWidth: true,

				}
			}
			
		]
    });

    //Trend slider
    $('.trend-slider2').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
		responsive: [

			{
				breakpoint: 1360,
				settings: {
					
					slidesToShow: 2,
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
    	prevArrow: '<button class="slick-arrow slick-prev"><span class="icon-left-arrow"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="icon-right-arrow"></span></button>',
    	responsive: [

    	]
    });


    $(".js-channel-list ul li").click(function(){
        
        slideIndex = $(this).index();

        $('.slideshow').slick('slickGoTo', slideIndex);
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
});

   


