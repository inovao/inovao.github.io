// heeader
$(document).ready(function () {

	// header
	(function () {
		var header = $('.js-header'),
		    trigger = header.find('.js-header-trigger'),
		    drop = header.find('.js-header-drop'),
		    burger = header.find('.js-header-burger'),
		    menu = $('.js-menu'),
		    close = menu.find('.js-menu-close'),
		    wrap = menu.find('.js-menu-wrap');

		trigger.on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			var _this = $(this);
			if (!_this.hasClass('active')) {
				trigger.removeClass('active');
				_this.addClass('active');
				drop.removeClass('open');
				_this.next().addClass('open');
			} else {
				_this.removeClass('active');
				_this.next().removeClass('open');
			}
		});

		$(document).on('click', function () {
			trigger.removeClass('active');
			drop.removeClass('open');
		});

		$(window).scroll(function () {
			if (header.hasClass('js-header-main')) {
				var posScroll = $(this).scrollTop(),
				    posTop1 = 300,
				    posTop2 = 600;

				posScroll > posTop1 ? header.addClass('fixed') : header.removeClass('fixed');
				posScroll > posTop2 ? header.addClass('visible') : header.removeClass('visible');
			}
		});

		burger.on('click', function (e) {
			e.preventDefault();
			menu.addClass('visible');
			setTimeout(function () {
				menu.addClass('open');
			}, 100);
		});

		close.on('click', hideMenu);

		menu.on('click', hideMenu);

		wrap.on('click', function (e) {
			e.stopPropagation();
		});

		function hideMenu() {
			menu.removeClass('open');
			setTimeout(function () {
				menu.removeClass('visible');
			}, 500);
		}

		// show/hide header on scroll
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var headerHeight = 65;

		$(window).scroll(function (event) {
			didScroll = true;
		});

		setInterval(function () {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);

		function hasScrolled() {
			var st = $(this).scrollTop();

			// Make sure they scroll more than delta
			if (Math.abs(lastScrollTop - st) <= delta) return;

			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > headerHeight) {
				// Scroll Down
				header.removeClass('down').addClass('up');
			} else {
				// Scroll Up
				if (st + $(window).height() < $(document).height()) {
					header.removeClass('up').addClass('down');
				}
			}

			lastScrollTop = st;
		}
	})();
});