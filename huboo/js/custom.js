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
		autoplay: true,
		autoplaySpeed: 2000,
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

	$(window).on('scroll load', function(){
        var $sections = $('.pricing-accordion__head');
		$sections.each(function(i,el){
	        var top  = $(el).offset().top-120;
	        var bottom = top +$(el).height();
	        var scroll = $(window).scrollTop();
	        var id = $(el).attr('id');
	    	if( scroll > top && scroll < bottom){
	            $('.pricing-nav-menu li.active').removeClass('active');
				$('a[href="#'+id+'"]').parent().addClass('active');

	        }
	    })
	 });

	$('a.pricing-anchor').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 110;
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

	$('.pricing-accordion__head').on('click', function(){
		var el = $(this);
		el.next('.pricing-accordion__body').toggleClass('show');
		el.toggleClass('open');
		return false;
	});
	  
	 $('.navbar-toggle').on('click', function(){
	 	$(this).toggleClass('open')
	 	$('body').toggleClass('menu-open')
		$('.navbar-mobile').slideToggle(0);
		return false;
	});

	 (function(){
	var a = document.querySelector('.pricing-nav-menu'), b = null, P = 150;
	window.addEventListener('scroll', Ascroll, false);
	document.body.addEventListener('scroll', Ascroll, false);
	function Ascroll() {
	  if (b == null) {
	    var Sa = getComputedStyle(a, ''), s = '';
	    for (var i = 0; i < Sa.length; i++) {
	      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
	        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
	      }
	    }
	    b = document.createElement('div');
	    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
	    a.insertBefore(b, a.firstChild);
	    var l = a.childNodes.length;
	    for (var i = 1; i < l; i++) {
	      b.appendChild(a.childNodes[1]);
	    }
	    a.style.height = b.getBoundingClientRect().height + 'px';
	    a.style.padding = '0';
	    a.style.border = '0';
	  }
	  var Ra = a.getBoundingClientRect(),
	      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.pricing-content').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
	  if ((Ra.top - P) <= 0) {
	    if ((Ra.top - P) <= R) {
	      b.className = 'stop';
	      b.style.top = - R +'px';
	    } else {
	      b.className = 'sticky';
	      b.style.top = P + 'px';
	    }
	  } else {
	    b.className = '';
	    b.style.top = '';
	  }
	  window.addEventListener('resize', function() {
	    a.children[0].style.width = getComputedStyle(a, '').width
	  }, false);
	}
})()
	  

});

   


