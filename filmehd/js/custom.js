$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){
	
	// var fn_fix_block = function(){
	//    	$(".fixblock").removeClass("fixed");
	//    	var h_header = $('header').height();
	//    	var fix_block = $(".fixblock").offset().top + 30;
	   	
	// 	$(window).scroll(function(){
	// 		if ($(this).scrollTop() > fix_block) {
	// 			$(".fixblock").addClass("fixed").fadeIn('fast').css('top', h_header + 30);
	// 		} else {
	// 			 $(".fixblock").removeClass("fixed").fadeIn('fast').css('top', '0');;
	// 		};
	// 	});
	// }
	// $(window).bind('load resize', fn_fix_block);


    $('.js-catagory-toggle').click(function(){
    	$('.category-list').slideToggle(400);
    })
	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});

	}

	$(window).bind('load resize', hf);


	// get canvas
	var el = document.getElementById('graph'); 

	var options = {
	    percent:  el.getAttribute('data-percent') || 25,
	    size: el.getAttribute('data-size') || 220,
	    lineWidth: el.getAttribute('data-line') || 7,
	    rotate: el.getAttribute('data-rotate') || 0
	}

	var canvas = document.createElement('canvas');
	var span = document.createElement('span');
	span.textContent = options.percent;
	    
	if (typeof(G_vmlCanvasManager) !== 'undefined') {
	    G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');
	canvas.width = canvas.height = options.size;

	el.appendChild(span);
	el.appendChild(canvas);

	ctx.translate(options.size / 2, options.size / 2); // change center
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

	//imd = ctx.getImageData(0, 0, 240, 240);
	var radius = (options.size - options.lineWidth) / 2;

	var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
	        ctx.lineCap = 'round'; // butt, round or square
			ctx.lineWidth = lineWidth
			ctx.stroke();
	};

	drawCircle('#fff', options.lineWidth, 100 / 100);  
	drawCircle('#d5d331', options.lineWidth, options.percent / 100);

});

   


