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
   
	$('.menu-toggle').on('click', function(){
		$('.dropNav').slideToggle();
	});


    $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		adaptiveHeight: true
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="arrow-prev"></i></button>', 
		nextArrow: '<button type="button" class="slick-next"><i class="arrow-next"></i></button>',

	});

    // Play video
	var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        
        var image = new Image();
                image.src = source;
                image.addEventListener( "load", function() {
                    youtube[ i ].appendChild( image );
                }( i ) );
        
                youtube[i].addEventListener( "click", function() {

                    var iframe = document.createElement( "iframe" );

                            iframe.setAttribute( "frameborder", "0" );
                            iframe.setAttribute( "allowfullscreen", "" );
                            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                            this.innerHTML = "";
                            this.appendChild( iframe );
                } );    
    };
    

	var hf = function(){
		
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingBottom': h_footer
		});

	}

	$(window).bind('load resize', hf);

});

   


 if($('#myjwplayer').length){
	    
	jwplayer("myjwplayer").setup({
		 
		"file": "https://s3-us-west-2.amazonaws.com/shapiromd-video/Shapiro-MD-FB-v9.mp4",
		"image": "https://s3-us-west-2.amazonaws.com/video-preload/female-csl-preload-2.gif",
		    "startparam": '10000',
		    "mediaid": "ihhd8q0e",

		});
	$('#myjwplayer').click(function() {
	$('.jw-icon-rewind, .jw-icon-fullscreen, .jw-text-duration').remove();
	});
};
