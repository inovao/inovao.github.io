$(document).ready(function() {
	/* ----------------------------------------------------
	+ ANIMATIONS CLOUD 
	----------------------------------------------------- */
	var cloud1 = $('#index .clouds .cloud-top-left'),
		cloud2 = $('#index .clouds .cloud-top-right'),
		cloud3 = $('#index .clouds .cloud-bottom-left'),
		cloud4 = $('#index .clouds .cloud-bottom-right');

	function cloudAnim(cloud, speed) {
		function runInt() {
			cloud.animate({'left': '+=100'}, {
				easing: 'linear',
				duration: speed,
				complete: function() {
					if ($(this).offset().left > $(window).width()) {
						$(this).css('left', -20 + '%');
					}
					runInt();
				}
			});
		}
		runInt();
	}

	cloudAnim(cloud1, 7000);
	cloudAnim(cloud2, 10000);
	cloudAnim(cloud3, 13000);
	cloudAnim(cloud4, 8000);

	/* ----------------------------------------------------
	+ TABS 
	----------------------------------------------------- */
	$('.tabs-control-link').click(function(e) {
		e.preventDefault();
		var item = $(this),
			itemPosition = item.index(),
			tabItem = $('.tab-item');

		tabItem.eq(itemPosition).add(item).addClass('active').siblings().removeClass('active');	
	});
	/* ----------------------------------------------------
	+ SELECT 
	----------------------------------------------------- */
	$('.selected').each(function() {
		var _this = $(this),
			viewSelect = _this.find('.view-select'),
			inputHidden = _this.find('input[type="hidden"]'),
			drop = _this.find('.drop');

			drop.children().each(function(){
				if ($(this).hasClass('active')) {
					viewSelect.text($(this).text());
					inputHidden.val($(this).text());
				}	
			});

		viewSelect.parent().click(function(e) {
			e.preventDefault();

			drop.slideToggle(300);

			drop.children().click(function() {
				viewSelect.text($(this).text());
				inputHidden.val($(this).text());
				drop.slideUp(300);
			});
		});	
	});

	/* ----------------------------------------------------
	+ MENU 
	----------------------------------------------------- */
	var touchMenu = $('.touch-menu'),
		menu = $('#menu'),
		airfile = $('#airfile'),
		menuLi = menu.find('ul li');
		durAnimMenu = 150,
		flagMenu = true;

	touchMenu.click(function(e) {
		e.preventDefault();
		
		if (flagMenu) {
			flagMenu = false;
			if (!(menu.hasClass('active'))) {
				menu.addClass('active').animate({'width': '200px'}, 300, function() {
					animElemHorizontal(menuLi, durAnimMenu, 'top-down');					
				});
			} else {
				menu.removeClass('active');
				animElemHorizontal(menuLi, durAnimMenu, 'bottom-up');
			}
		}
			
	});

	airfile.find('.tabs-cont').click(function() {
		if (flagMenu) {
			if (menu.hasClass('active')) {
				menu.removeClass('active');
				animElemHorizontal(menuLi, durAnimMenu, 'bottom-up');
			}
		}			
	});

	function animElemHorizontal(elem, dur, direction) {
		if (direction == 'top-down') {
			elem.first().animate({'opacity': 1}, dur, function() {
				if ($(this).next().length) {
					animElemHorizontal($(this).next(), durAnimMenu, 'top-down');
				} else {
					flagMenu = true;
				}
			});
		} else if (direction == 'bottom-up') {
			elem.last().animate({'opacity': 0}, dur, function() {
				if ($(this).prev().length) {
					animElemHorizontal($(this).prev(), dur, 'bottom-up');
				} else {
					flagMenu = true;
					menu.animate({
						'width': 0,
					}, 300);
				}
			});
		}
	}
});



