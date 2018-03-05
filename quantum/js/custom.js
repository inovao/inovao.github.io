$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){


	/* ---------------------------------------------- /*
	 * open menu mobile
	/* ---------------------------------------------- */
	$('.toggle-menu').click(function(){
		$(this).toggleClass('active');
		$(".q-navbar-menu").slideToggle(400)
	})

	/* ---------------------------------------------- /*
	 * fixed header
	/* ---------------------------------------------- */
	var hf = function(){
		var h_header = $('header').height();
		$('.content').css({
			'paddingTop': h_header,
		});

	}

	$(window).bind('load resize', hf);

});

   


