$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){
    
    $('.toggle-link').click(function(){
        $(this).toggleClass('active');
        $('.box-report').slideToggle(400)
        return false
    })

    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    window.randomize = function() {
        $('.ko-progress-circle').attr('data-progress', 90);
    }
    setTimeout(window.randomize, 200);
    if($('.accordion__head').length){
        
        $('.accordion__head').on('click', function(){
            var el = $(this);
            el.next('.accordion__body').slideToggle();
            el.parent('.accordion__item').toggleClass('open');
            return false;
        });
     };
    if($('.box-fieldset').length){
        
   
        var slider = $('.box-fieldset').slick({
        	arrows: false,
        	adaptiveHeight: true,  
        	swipe: false,
            infinite: false
        });

        $('.next-step').on('click', function () {
            slider.slick("slickNext");
            
            
            var progress = $(".ui-progress").find('.value').text();
    		progress = parseInt(progress);
    		setTimeout(function(){
    			
    			$(".ui-progress").animate({width: progress+15+"%"}); 
    			$(".ui-progress .value").text(progress+15+"%");
    		}, 700)

            setTimeout(function(){ 
                if ($('.fieldset#results').hasClass('slick-active') != false) {
                    setTimeout(function(){ 
                         window.location.href = "/shapiro-questions/shop.html"
                    }, 3000);   

                }
                 
            }, 502);

    		return false;
            
        });
    };
    
    $(window).load(function() {
        $(".ui-progress").animate({width: "15%"});
        $(".ui-progress .value").text('15%');
    });
    

    if($('.tabs').length){
        
    
        $('.tabs a').click(function(){
        	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        	$(this).parent().siblings().removeClass('active');
        	var id = $(this).attr('href');
        	$(id).removeClass('hide');
        	$(this).parent().addClass('active');
            $('.box-fieldset').slick('setPosition')
        	return false
        });

    };


});

   


