$(window).load(function(){
	if($(".anim-step").length){
		$(".fieldset").animate({"margin-left":"0px"},200);
	}
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(document).ready(function(e) {
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
   /* window.randomize = function() {
        $('.ko-progress-circle').attr('data-progress', 90);
    }*/
    setTimeout(window.randomize, 200);
    if($('.accordion__head').length){
        
        $('.accordion__head').on('click', function(){
            var el = $(this);
            el.next('.accordion__body').slideToggle();
            el.parent('.accordion__item').toggleClass('open');
            return false;
        });
     };

	$('.next-step').on('click', function () {
		$("input[name='step']").val($(this).attr("data-step"));
		$("input[name='puncte']").val($(this).attr("data-puncte"));
		$("input[name='value']").val($(this).attr("data-value"));
		
		/*
		slider.slick("slickNext");
		$(".value"+$(this).attr("data-step")).html($(this).attr("data-value"));*/
		if(parseInt($(this).attr("data-step"))){
			$.ajax({
			  type: "POST",
			  url: "./module/shapiro.php",
			  data: "puncte="+parseInt($(this).attr("data-puncte"))+"&step="+parseInt($(this).attr("data-step"))+"&value="+$(this).attr("data-value"),
			  success: function(responce){
				//console.log(responce);
				$(".box-quiz").animate({"margin-left": "-100%"}, 500);
				setTimeout(function(){$(".content form").submit()},600);
			  }
			});
		}

		return false;
		
	});
    
    $(window).load(function() {
/*        $(".ui-progress").animate({width: "15%"});
        $(".ui-progress .value").text('15%');*/
		var progress = $(".ui-progress").find('.value').text();
		progress = parseInt(progress);
		setTimeout(function(){
			$(".ui-progress").animate({width: progress+15+"%"}); 
			$(".ui-progress .value").text(progress+15+"%");
		}, 250)
    });
    

    if($('.tabs').length){
        
    
        $('.tabs a').click(function(){
        	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        	$(this).parent().siblings().removeClass('active');
        	var id = $(this).attr('href');
        	$(id).removeClass('hide');
        	$(this).parent().addClass('active');
            //$('.box-fieldset').slick('setPosition')
        	return false
        });

    };


});

