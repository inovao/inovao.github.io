    var infowindow = new google.maps.InfoWindow();
    var marker;
    var locations = [
      ['<div class="box-infobox active"><div class="infobox-header"><span class="infobox-name">IMMUDYNE.</span><span class="infobox-title">WEST COAST OFFICE.</span></div><p>Phone #<br> (877) 907-4047</p><p>15612 Graham St.<br>Huntington Beach, CA 92649</p></div>', 33.735332,  -118.032186],
      ['<div class="box-infobox"><div class="infobox-header"><span class="infobox-name">IMMUDYNE.</span><span class="infobox-title">PUERTO RICO</span></div><p>Phone #<br> (877) 907-4047</p><p>53 Calle Palmeras <br> Suite 802<br> San Juan, PR 00901</p></div>', 41.227085, -73.761913],
      ['<div class="box-infobox"><div class="infobox-header"><span class="infobox-name">IMMUDYNE.</span><span class="infobox-title">PUERTO RICO</span></div><p>Phone #<br> (877) 907-4047</p><p>53 Calle Palmeras <br> Suite 802<br> San Juan, PR 00901</p></div>', 18.278470, -66.580437],
      ['<div class="box-infobox"><div class="infobox-header"><span class="infobox-name">IMMUDYNE.</span><span class="infobox-title">PUERTO RICO</span></div><p>Phone #<br> (877) 907-4047</p><p>53 Calle Palmeras <br> Suite 802<br> San Juan, PR 00901</p></div>', 38.929371, -83.540247],
      
    ];

    function initGoogleMap(){

    var infowindow = new google.maps.InfoWindow(); /* SINGLE */

    var map = new google.maps.Map(document.getElementById('citymap'), {
        zoom: 5,
        zoomControl: false,
        scrollwheel: false,
        fullscreenControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        gestureHandling: 'cooperative',

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(33.221693, -94.529920), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            }
            
        ]
    });
    var widthWindow = $(window).width();
    if(widthWindow < 1200) {
        map.setZoom(4);
    } 
    if(widthWindow < 767) {
        map.setZoom(3);
    } 
    if(widthWindow > 1201) {
        map.setZoom(5);
    } 


    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
        var widthWindow = $(window).width();
        if(widthWindow < 1200) {
            map.setZoom(4);
        } 
        if(widthWindow < 767) {
            map.setZoom(3);
        } 
        if(widthWindow > 1201) {
            map.setZoom(5);
        } 

    });
    

    function placeMarker( loc ) {
        var latLng = new google.maps.LatLng( loc[1], loc[2]);
        var marker = new google.maps.Marker({
          position : latLng,
          map      : map,
          icon    : '../img/map-marker.png',
        });
        google.maps.event.addListener(marker, 'click', function(){
            
            infowindow.setContent( "<div id='infowindow'>"+ loc[0] +"</div>");
            infowindow.open(map, marker);
            var iwOuter = $('.gm-style-iw');
            var iwBackground = iwOuter.prev();
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});

            $('.gm-style-iw').parent().addClass('box-infowindow');
        });

        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
        });
        

      }
      
      
      for(var i=0; i<locations.length; i++) {
        placeMarker( locations[i] );
      } 
      
    }

    google.maps.event.addDomListener(window, 'load', initGoogleMap);

    