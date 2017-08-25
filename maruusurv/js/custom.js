$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
$(function(){

	 

    if($('.styler').length){
        $('.styler').styler();
    };
    
    if ($(".covered-slider").length) {
        $('.covered-slider').slick({
        	slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			infinite: false,
			appendArrows: '.slick-pagination',
			prevArrow: '<button class="slick-arrow slick-prev">PREV</button>',
			nextArrow: '<button class="slick-arrow slick-next">NEXT</button>',
        	 responsive: [
	        	{
		            breakpoint: 9999,
		            settings: "unslick"
		        },
		        {
		            breakpoint: 768,
		            settings: "slick",

		        },
	        ]
        });
    };

    if ($(".studies-list-slider").length) {
        $('.studies-list-slider').slick({
        	slidesToShow: 1,
			slidesToScroll: 1,

			adaptiveHeight: true,
			dots: false,
			infinite: false,
			appendArrows: '.slick-pagination',
			prevArrow: '<button class="slick-arrow slick-prev">PREV</button>',
			nextArrow: '<button class="slick-arrow slick-next">NEXT</button>',
        	 responsive: [
	        	{
		            breakpoint: 9999,
		            settings: "unslick"
		        },
		        {
		            breakpoint: 768,
		            settings: "slick",

		        },
	        ]
        });
    };

    

    if($('.home-slider').length){
        $('.home-slider').slick({
        	// arrows: false, 
        	fade: true,
        	dots: true,
        	prevArrow: '<button class="slick-arrow slick-prev">prev</button>',
        	nextArrow: '<button class="slick-arrow slick-next">next</button>',
        	responsive: [
			{
				breakpoint: 1024,
				settings: {
					
					arrows: false,

				}
			},
			]
        });
    };
    if($('.latest-post-slider').length){
        $('.latest-post-slider').slick({
        	slidesToShow: 3,
        	slidesToScroll: 1,
        	prevArrow: '<button class="slick-arrow slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
       		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,

				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
					appendArrows: '.slick-pagination',
					prevArrow: '<button class="slick-arrow slick-prev">PREV</button>',
        			nextArrow: '<button class="slick-arrow slick-next">NEXT</button>',
				}
			},
			]
        });
    };

    $('.js-open-message').click(function(){
    	$('.contact-wrap__message').show(400)
    	$('body').addClass('overflow')
    	return false;
    })
    $('.js-close-message').click(function(){
    	$('.contact-wrap__message').hide(400)
    	$('body').removeClass('overflow')
    	return false;
    })
     $('.button-search-open').click(function(){
    	$('.search').slideToggle(400)
    	$(this).toggleClass('active')
    	namebl = $(this).html();
        if(namebl == '<i class="material-icons">close</i> '){
            $(this).html('<i class="material-icons">search</i> ');
        }else{
           $(this).html('<i class="material-icons">close</i> ');
        }
    	return false;
    })

    // <i class="material-icons">close</i> 
    $('.nav-toggle').click(function(){
    	$('.nav').toggleClass('open')
    	$('body').toggleClass('overflow')
    })
    $(".header").removeClass("fixed");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".header").addClass("fixed").fadeIn('fast');;
		} else {
			 $(".header").removeClass("fixed").fadeIn('fast');
		};
	});

	if($("#bgvid").length){
        var vid = $("#bgvid");
		var pauseButton = $(".stop-play");

		vid.get(0).play();
		pauseButton.on("click", function() {
			if ($("#bgvid").length) {
				// $(this).toggleClass('');
				if (!(vid.get(0).paused)) {
					vid.get(0).pause();
					$(this).html('<i class="material-icons">play_arrow</i> PLAY')
				} else {
					vid.get(0).play();
					$(this).html('<i class="material-icons">pause</i> PAUSE')

				}
			}
		});
    };
    

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingBottom': h_footer
		});
		if (viewport_wid <= 767) {
			var viewportHeight = $('body').outerHeight();
			$('.home-content, .home-slider__item').css({ height: viewportHeight });
			
		}
		
	}

	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 767) {
		$('.accordion__head').on('click', function(){
			var el = $(this);
			el.next('.accordion__body').slideToggle();
			el.toggleClass('open');
			return false;
		});		
	}

	
	$(window).bind('load resize', hf);
	
});



if($('#map').length){
	function initMap() {
	    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	    var centerLatLng = new google.maps.LatLng(51.382754, -2.364503);
	 
	    // Обязательные опции с которыми будет проинициализированна карта
	    var mapOptions = {
	        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
	        zoom: 17               // Зум по умолчанию. Возможные значения от 0 до 21
	    };

	 
	    // Создаем карту внутри элемента #map
	    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	    var marker = new google.maps.Marker({
		    position: centerLatLng,
		    map: map,
		    title: ''
		  });
	}
	 
	// Ждем полной загрузки страницы, после этого запускаем initMap()
	google.maps.event.addDomListener(window, "load", initMap);
}