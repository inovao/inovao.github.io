$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){
	if($('.channel-bar').length){
		$('.channel-bar').slick({
			variableWidth: true,
			centerPadding: '37px',
			infinite: true,
			nextArrow: '<button class="slick-arrow slick-next"><i class="fa fa-arrow-right"></i></button>',
			prevArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-arrow-left"></i></button>',
		});
	};
    if($('.styler').length){
        $('.styler').styler();
    };

    $('a[href*="#"]:not([href="#"])').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
		$('body,html').animate({scrollTop: bl_top}, 900);
		return false;
	});

	var hf = function(){
		var h_footer = $('footer').height();
		$('.main').css({
			'paddingBottom': h_footer
		});

	}

	$(window).bind('load resize', hf);

});

(function(e) {
    skel.init({
        reset: "full",
        breakpoints: {
            normal: {
                range: "-1280",
                href: "css/style-normal.css?v11",
                containers: 960,
                grid: {
                    gutters: 40
                }
            },
            
            narrower: {
                range: "-820",
                href: "css/style-narrower.css?v11",
                grid: {
                    gutters: 30,
                    collapse: 1
                }
            },
            mobile: {
                range: "-640",
                href: "css/style-mobile.css?v11",
                grid: {
                    collapse: 2
                },
                viewport: {
                    scalable: false
                }
            },
            mobilep: {
                range: "-480",
                href: "css/style-mobilep.css?v11",
                grid: {
                    gutters: 15
                }
            }
        }
    }, {
        layers: {
            layers: {
                navPanel: {
                    hidden: true,
                    breakpoints: "mobile",
                    position: "top-left",
                    side: "top",
                    animation: "pushY",
                    width: "100%",
                    height: {
                        mobilep: 300,
                        mobile: 180
                    },
                    clickToClose: true,
                    swipeToClose: false,
                    html: '<a href="/" class="link depth-0">Home</a><div data-action="navList" data-args="nav"></div>',
                    orientation: "vertical"
                },
                navButton: {
                    breakpoints: "mobile",
                    position: "top-center",
                    side: "top",
                    height: 50,
                    width: 100,
                    html: '<div class="toggle" data-action="toggleLayer" data-args="navPanel"></div>'
                }
            }
        }
    });
    e(function() {


       
       

        if (skel.vars.IEVersion < 9) e(":last-child").addClass("last-child");
        e(".nav-bar-list").dropotron({
            mode: "fade",
            speed: 300,
            alignment: "center",
            noOpenerFade: true
        })
    })

})(jQuery)
   


