$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){


	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
    if($('.styler').length){
        $('.styler').styler();
    };


	var hf = function(){
		var h_footer = $('footer').height();
		$('.main').css({
			'paddingBottom': h_footer
		});

	}

	$(window).bind('load resize', hf);


	$('.navbar-toggle').on('click', function(){
		$(this).parents('.header').toggleClass('active');
		$(this).parents('.navbar').find('.navbar-menu').toggleClass('open');
	})
	$(document).click( function(event){
      if( $(event.target).closest(".navbar").length ) 
        return;
      $(".header").removeClass("active");
      $(".navbar-menu").removeClass("open");
      
      event.stopPropagation();
    });
	$('.nav-tabs__item').on('click', function(){
		$('.nav-tabs__item').removeClass('active');
		$(this).addClass('active');
	})

	$(document).click( function(event){
      if( $(event.target).closest(".nav-tabs__item").length ) 
        return;
      $(".nav-tabs__item").removeClass("active");
      
      event.stopPropagation();
    });
	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

});


 if($('#map').length){
    function initGoogleMap(){

        var coordinates = {lat: 47.212325, lng: 38.933663},
            markerImage = 'images/marker.png',
            zoom = 17,
            

            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true,
                scrollwheel: false,
                styles: [
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "stylers": [
            {
                "hue": "#000"
            },
            {
                "saturation": -100
            },
            {
                "gamma": 1.15
            },
            {
                "lightness": 12
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 24
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 57
            }
        ]
    }
]
            }),

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });


        marker.addListener('click', function () {
            marker.setAnimation(null);
        });

    }
google.maps.event.addDomListener(window, 'load', initGoogleMap);

}


const btn = document.querySelector('.js-button')
const btnText = btn.textContent
const width = btn.clientWidth
const height = btn.clientHeight
const svg = Snap(width, height)
const color1 = '#FFFFFF'
const gradient = 'L(0, 0, 300, 300)#0575E6-#021B79'
const maskOffset = btn.clientHeight

const border = svg
  .rect(0, 0, width, height)
  .attr({ 'fill': 'none', 'stroke': color1, 'stroke-width': 6, 'class': 'border' })

const mask = svg
  .path(`M0,0 L${width + maskOffset},0 L${width},${height} L-${maskOffset}, ${height} Z`)
  .attr({ 'fill': 'white', 'stroke': 'white', 'class': 'mask', 'stroke-width': 0 })
  .transform(`t-${width + maskOffset},0`)

const maskInvert = mask
  .clone()
  .transform('t0,0')

const text = svg
  .text(width / 2, height / 2, btnText)
  .attr({ 'text-anchor': 'middle', 'dominant-baseline': 'central', 'fill': color1 })

const button = svg
  .group(text, border)
  .attr({ mask: maskInvert })


const textMasked = text
  .clone()
  .attr({ 'fill': gradient })

const borderMasked = border
  .clone()
  .attr({ 'stroke': gradient })

const masked = svg
  .group(textMasked, borderMasked)
  .attr({ mask })
svg.addClass('svgbtn-default')
svg.hover(
  () => {
    mask.attr('stroke-width', 4)
    mask.stop().animate({ transform: 't0,0' }, 500, mina.easein )
    maskInvert.stop().animate({ transform: `t${width + maskOffset},0` }, 500, mina.easein )
  },
  () => {
    mask.stop().animate({ transform: `t-${width + maskOffset},0` }, 350, mina.easeout, () => mask.attr('stroke-width', 0))
    maskInvert.stop().animate({ transform: 't0,0' }, 350, mina.easeout)
  }
)

svg.click(() => btn.click())
btn.replaceWith(svg.node)
