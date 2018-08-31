$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){

	$(".header").removeClass("fixed");
	$(window).on('scroll load', function(){

		if ($(this).scrollTop() > 30) {
			$(".header").addClass("fixed");
		} else {
			 $(".header").removeClass("fixed");
		};

		
	});


	$.fn.autoClear = function () {
       
        $(this).each(function() {
            $(this).data("autoclear", $(this).attr("placeholder"));
        });
        $(this)
            .bind('focus', function() {   
                if ($(this).attr("placeholder") == $(this).data("autoclear")) {
                    $(this).attr("placeholder", "").addClass('autoclear-normalcolor');
                }
            })
            .bind('blur', function() {   
                if ($(this).attr("placeholder") == "") {
                    $(this).attr("placeholder", $(this).data("autoclear")).removeClass('autoclear-normalcolor');
                }
            });
        return $(this);
    }
    $('input').autoClear();

	$('.comments-slider').slick({
		slidesToShow: 2, 
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-slick-left"><use xlink:href="#icon-slick-left"></use></svg></button>',
		nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-slick-right"><use xlink:href="#icon-slick-right"></use></svg></button>',
		responsive: [
			{
			  breakpoint: 980,
			  settings: {
				arrows: false,
			    dots: true
			  }
			},
			{
			  breakpoint: 736,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    arrows: false,
			    dots: true
			  }
			},
			
		]
	})

	$('a.anchor').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
		$('body,html').animate({scrollTop: bl_top}, 900);
		return false;
	});


	$('.btn')
	.on('mouseenter', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('.circle').css({top:relY, left:relX})
	})
	.on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('.circle').css({top:relY, left:relX})
	});

	$('.accordion__head').on('click', function(){
		var el = $(this);
		el.next('.accordion__body').toggleClass('show');
		el.toggleClass('open');
		return false;
	});

	$('.advantages__title').on('click', function(){
		var el = $(this);
		el.next('.advantages__body').toggleClass('show');
		el.toggleClass('open');
		return false;
	});
	  
	 $('.navbar-toggle').on('click', function(){
	 	$(this).toggleClass('open')
	 	$('body').toggleClass('menu-open')
		$('.navbar-mobile').slideToggle(0);
		return false;
	});
	  

});

   


