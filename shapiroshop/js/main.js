var dataToStore = new Array();


function numbersonly(e) {
	var unicode = e.charCode ? e.charCode : e.keyCode
	if (unicode != 8) { //if the key isn't the backspace key (which we should allow)
		if (unicode < 48 || unicode > 57) //if not a number
		return false //disable key press
	}
}


(function() {
	var data = {
			"step_0" : {
				"section_0" : "Male",
				"section_1" : "Female"
			},
			"step_1" : {
				"section_0" : "Slow the Loss",
				"section_1" : "Maintain my current Hair",
				"section_2" : "Regrow Hair",
				"section_3" : "",
				"section_4" : "",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : ""
			},
			"step_2" : {
				"section_0" : "Yes, Mom’s Family",
				"section_1" : "Yes, Dad’s Family",
				"section_2" : "Yes, Both",
				"section_3" : "No, Either Family",
				"section_4" : "Unsure",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : "",
				
			},
			"step_3" : {
				"section_0" : "None",
				"section_1" : "Anthralin",
				"section_2" : "Cyclosporine",
				"section_3" : "Finasteride",
				"section_4" : "Transplants",
				"section_5" : "Minoxidil",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : "",
			},
			"step_4" : {
				"section_0" : "Last 6 months",
				"section_1" : "Last 2 years",
				"section_2" : "Last 10 years",
				"section_3" : "Last 20 Years",
				"section_4" : "Last 30 Years",
				"section_5" : "Last 40 Years +",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : "",
			},
			"step_5" : {
				"section_0" : "YES",
				"section_1" : "No",
				"section_2" : "NOT SURE",
				"section_3" : "",
				"section_4" : "",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : "",
			},
			"step_6" : {
				"section_0" : "",
				"section_1" : "",
				"section_2" : "",
				"section_3" : "",
				"section_4" : "",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : "",
			},
			"step_7" : {
				"section_0" : "",
				"section_1" : "",
				"section_2" : "",
				"section_3" : "",
				"section_4" : "",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : ""
			},
			"step_8" : {
				"section_0" : "",
				"section_1" : "",
				"section_2" : "",
				"section_3" : "",
				"section_4" : "",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : ""
			},
			"step_9" : {
				"section_0" : "",
				"section_1" : "",
				"section_2" : "",
				"section_3" : "",
				"section_4" : "",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : ""
			},
			"step_10" : {
				"section_0" : "",
				"section_1" : "",
				"section_2" : "",
				"section_3" : "",
				"section_4" : "",
				"section_5" : "",
				"section_6" : "",
				"section_7" : "",
				"section_8" : "",
				"section_9" : "",
				"section_10" : ""
			},
		};

	//console.log($('#form1 fieldset:visible').index());
	//$('#form1 fieldset .step > div, .continue_button').click(function() { 
	$(document).on('click', '.next-step', function() {
		var closestFieldset = $(this).closest('.fieldset'); 
 		var fieldsetIndex = $('.fieldset').index(closestFieldset);
 		var step = 'step_'+fieldsetIndex;
 		var sectionIndex = '';
 		var section = '';
		console.clear();

		if (fieldsetIndex == '0') 
		{
			var aTag = $(this).closest('a'); 
 			//var sectionIndex = $('.cas a').index(aTag);
 			
 			//console.log($(this).closest('div.cas').hasClass( "female_sec" ));
 			if ($(this).closest('div.cas').hasClass("male_sec")) {
 				sectionIndex = 0;
 			}
 			if ($(this).closest('div.cas').hasClass("female_sec")) {
 				sectionIndex = 1;
 			}
 			
		}
		else if (fieldsetIndex == '5')		{
			//var divTag = $(this).closest('a'); 
 			var sectionIndex = $('.fieldset div.yes-btn').index(this);
		}
		else
		{
			var divTag = $(this).closest('fieldset');
			$('fieldset'). removeAttr("step");
			$(divTag). attr("step", "this_step"); 
 			var sectionIndex = $('fieldset[step=this_step] div.stepBtn').index(this);
		}

		section = 'section_'+sectionIndex;
		dataToStore[step] = data[step][section];
		$(this).closest('fieldset').hide( "slide", { direction: "left"  }, function() {
			$(this).closest('fieldset').next().show( "slide", { direction: "right"  }, 500 );
			var progress = $(this).closest('fieldset').find('.value').text();
			progress = progress.replace('%', '');
			progress = parseInt(progress)+parseInt('15');
			setTimeout(function(){
				$(".ui-progress").animate({width: progress+"%"}, 'slow'); 
				$(".ui-progress .value").text(progress+"%");
			}, 700)
			
		});

		setTimeout(function(){ 
			if ($('fieldset#results').css('display') != 'none') {
				completeStoreData(dataToStore);
				$('#processing').show();
				$('#complete').hide();


				setTimeout(function(){ 
					$('#complete').show();	
					$('#processing').hide();
				}, 5000);	

	    	}
			 
		}, 502);
		

		//console.log(dataToStore);
		
	});

	$('#back_button').click(function() {
		var currentElement = $('#form1 fieldset:visible');

		
		 

		currentElement.hide( "slide", { direction: "right"  }, function() {
			currentElement.prev().show( "slide", { direction: "left"  }, 500 );
			if (currentElement.index() <= 1) {
				$('#back_button_group').hide();
			}
			//console.log('prosenjit',currentElement.index());
			if (currentElement.index() <= 2) {
				$('#progressbar').hide();
			}
		});
		
		
	});


	$( ".EST_VAL_SLIDER" ).slider({
               range:'min',
               min: 75000,
               max: 2475000,
               value: 1900000,
               slide: function( event, ui ) {
               	//console.log(accounting.formatMoney(ui.value, "$", 0, ",", ","));
               	if (ui.value == "2475000") {
               		$( "#EST_VAL_DISPLAY, #EST_VAL_DISPLAY_SMALL" ).attr('data-val', "2500000");
               	} else {
               		$( "#EST_VAL_DISPLAY, #EST_VAL_DISPLAY_SMALL" ).attr('data-val', ui.value);
               	}
                
				$( "#EST_VAL_DISPLAY, #EST_VAL_DISPLAY_SMALL" ).html(accounting.formatMoney(ui.value, "$", 0, ",", ",") +" - "+accounting.formatMoney(ui.value+25000, "$", 0, ",", ","));
               }
            }).draggable();

	$( "#MTG_ONE_INT_SLIDER" ).slider({
               range:'min',
               min: 4,
               max: 10,
               value: 5.95,
               step: 0.01,
               slide: function( event, ui ) {
               	//console.log(ui.value);
                  //$( "#EST_VAL_SLIDER" ).val( "$" + ui.values);
                  $( "#MTG_ONE_INT_DISPLAY" ).html( ui.value+"%" );
               }
            }).draggable();


	

	$('#PRI_PHONE-p1, #PRI_PHONE-p2, #PRI_PHONE-p3').on('keyup', function() {
		// if ($('#PRI_PHONE-p1').val().length == $('#PRI_PHONE-p1').attr('size')) { 
		// 	$('#PRI_PHONE-p2').focus();	
		// }
		
		// console.log($('#PRI_PHONE-p1').val().length);
		//console.log($(this).val());
		$('#PRI_PHONE').val($('#PRI_PHONE-p1').val()+$('#PRI_PHONE-p2').val()+$('#PRI_PHONE-p3').val())
	});


})($);

function errorFocus(field) {
	console.log(field);
	$('body,html').animate({
    	scrollTop : field.offset().top
   	}, 1000, function () {
    	field.focus();
   	});
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function progressBar(fieldsetIndex) {
	//console.log($('#form1 fieldset:visible').index());
	if (fieldsetIndex >= 1) {
		$('#progressbar').show();
		//$('.progressbar_increase').css({"width": fieldsetIndex*10});
		$( "#progressbar" ).progressbar({
           value: fieldsetIndex*7
        });
	} else if (fieldsetIndex >= 0) {
		$('#back_button_group').show();
	}
}

function validate(value, context) {

	switch(context) {
		case 'zip':
			console.log(value);
			if (value.match(/^\d{5,5}$/)) {
				return {"success": value};
			} else {
				return {"error": "Zip Code is invalid."};
			}
			break;

		case 'phone':
			if ($('#PRI_PHONE-p1').val() && $('#PRI_PHONE-p2').val() && $('#PRI_PHONE-p3').val()) {
				return {"success": value};
			} else {
				return {"error": "Phone No is Invalid"};
			}

		case 'email':
			var reg = /\S+@\S+\.\S+/;
			if (reg.test(value)) {
				return {"success": value};
			} else {
				return {"error": "Email is Invalid"};
			}

		default :
			if (value != "") {
				return {"success": value};
			} else {
				return {"error": "This is a required field."};
			}
	}
}


function completeStoreData(dataToStore) {
	
	console.log(dataToStore);
	console.log(dataToStore.step_0);
	var source = $('[name="source"]').val();
	var d = new Date();

	$('.main-body-ar').hide();
	$('.than-n').show();
	$('.tha-qual').show();
	//var name = dataToStore.step_14.fname+" "+dataToStore.step_14.lname;
	var name = 'Test Test';
  	var ip_address = $('[name="ip_address"]').val();

	var rowdata = [[	dataToStore.step_0, dataToStore.step_1, dataToStore.step_2, dataToStore.step_3,
                    dataToStore.step_4, dataToStore.step_5,ip_address, navigator.userAgent, d.getMonth()+parseInt('1')+'-'+d.getDate()+'-'+d.getFullYear(), 
                    d.getHours()+':'+d.getMinutes(), source
                  ]];
                        console.log(rowdata);
	$.ajax({
		url: 'ajax.php',
		type: 'post',
		dataType: 'json',
		data: {action: "insert_to_sheet", rowdata: rowdata},
		success: function(response) {

			if (response.success) {
				 console.log('suceess');
				//  //appendFBPixel()
				// setTimeout(function(){
				//  // $('.tha-qual').hide();
				//  // $('.appro').show();
				//  // $('.than-con').show();
				//  window.location.href="thank-you.php" + window.location.search;
				// }, 3000);
				return false;

			} else {
				alert(response.error);
			}
		}
	});
	
	
}

function appendFBPixel(){
	//console.log('Fb Lead generated');
	// fbq('track', 'Lead');
	// var _html = "<iframe src='google_adwords_pixel.php'></iframe>";
	// $('head').append(_html);
}

(function($) {
	// $.ajax({
	// 	var endPoint = "contacts";
	// 	url: "https://api.getresponse.com/v3/"+endPoint
	// });
}(jQuery));