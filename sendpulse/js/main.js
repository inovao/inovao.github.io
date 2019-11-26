/* ---------------------------------------------------------- */
/* 01 - SELECT                                                */
/* ---------------------------------------------------------- */
function Select(elem) {
	var select = document.querySelectorAll(elem);
	

	for (var i = 0; i < select.length; i++) {

		var curSelect = select[i],
			curSelectLi = curSelect.querySelectorAll('li'),
			curSelectView = curSelect.querySelector('.view'),
			curSelectInput = curSelect.querySelector('input');

		for (var j = 0; j < curSelectLi.length; j++) {
			if (curSelectLi[j].classList.contains('selected')) {
				curSelectView.innerHTML = curSelectLi[j].innerHTML;
				curSelectInput.value = curSelectLi[j].innerHTML;
			}
		}

		curSelectView.onclick = function(e) {
			var select = this.closest('.select'),
				drop = select.querySelector('.drop'),
				li = drop.querySelectorAll('li'),
				curSelectInput = select.querySelector('input'),
				curSelectView = select.querySelector('.view');

			select.classList.toggle('active');

			for (var b = 0; b < li.length; b++) {
				li[b].onclick = function(e) {
					curSelectView.innerHTML = this.innerHTML;
					curSelectInput.value = this.innerHTML;

					select.classList.remove('active');

					return false;
				}
			}

			return false;
		}
	}
}

var select = new Select('.select');

/* ---------------------------------------------------------- */
/* 02 - TABS                                                  */
/* ---------------------------------------------------------- */

function Tabs(obj) {
	var tabControls = document.querySelectorAll(obj.elem);

	for (var i = 0; i < tabControls.length; i++) {
		var controlLi = tabControls[i].querySelectorAll('li'),
			parent = controlLi[0].closest('.tabs'),
			tabs = parent.querySelectorAll('.tabs-content .tab');

		for (var a = 0; a < controlLi.length; a++) {
			var link = controlLi[a].getElementsByTagName('a');

			link[0].onclick = function(e) {
				if (this.querySelector('input') != null) {
					this.querySelector('input').checked = true;
				}				

				for (var j = 0; j < controlLi.length; j++) {
					controlLi[j].classList.remove('active');
				}

				this.closest('li').classList.add('active');
				var hrf = this.getAttribute('href'),
					tab = document.querySelector(hrf);

				for (var d = 0; d < tabs.length; d++) {
					tabs[d].classList.remove('active');
				}

				tab.classList.add('active');

				return false;
			}
		}		
	}
}

var tabs = new Tabs({elem: '.tabs-control'});
var tabs = new Tabs({elem: '.tabs-control-cont'});

/* ---------------------------------------------------------- */
/* 03 - POPUP FUNCTIONAL                                      */
/* ---------------------------------------------------------- */

function popupFunctional() {
	var changeText = document.querySelectorAll('.text-change-input textarea'),
		changeTextHeading = document.querySelectorAll('.text-change-heading input'),
		colorInput = document.querySelectorAll('.color-input input'),
		place = document.querySelectorAll('.place input');

	for (var i = 0; i < changeText.length; i++) {
		changeText[i].onkeypress = function() {
			var popupH3 = this.closest('.pupup-functional').querySelector('.view-modal-popup h3');
			popupH3.innerHTML = this.value;
		}
	}

	for (var i = 0; i < changeTextHeading.length; i++) {
		changeTextHeading[i].onkeypress = function() {
			var popupH5 = this.closest('.pupup-functional').querySelector('.view-modal-popup h5');
			popupH5.innerHTML = this.value;
		}
	}

	for (var i = 0; i < colorInput.length; i++) {
		colorInput[i].onclick = function() {
			var _this = this;

			_this.closest('.color-input').querySelector('.box-color').classList.toggle('active');

			var span = _this.closest('.color-input').querySelectorAll('.box-color span');

			for (var i = 0; i < span.length; i++) {
				span[i].onclick = function() {
					_this.value = this.getAttribute('data-color');

					if (this.closest('.color-input').classList.contains('box-color-bg')) {
						var bg = this.closest('.pupup-functional').querySelector('.view-modal-popup');
						bg.style.background = this.getAttribute('data-color');
					} else if (this.closest('.color-input').classList.contains('box-color-text')) {
						var text = this.closest('.pupup-functional').querySelectorAll('.view-modal-popup .view-mobal__color--text');
						for (var i = 0; i < text.length; i++) {
							text[i].style.color = this.getAttribute('data-color');
						}
					} else if (this.closest('.color-input').classList.contains('box-color-button')) {
						var button = this.closest('.pupup-functional').querySelectorAll('.view-modal-popup .view-mobal__color--button');
						button[0].style.color = this.getAttribute('data-color');
						button[1].style.background = this.getAttribute('data-color');
					}
				}
			}			
		}
	}

	for (var i = 0; i < place.length; i++) {
		place[i].onchange = function() {
			var popup = this.closest('.pupup-functional').querySelector('.view-modal');
			popup.style.textAlign = this.value;
		}
	}
}

popupFunctional();

/* ---------------------------------------------------------- */
/* 04 - AVATAR                                                */
/* ---------------------------------------------------------- */
function avatar() {
	var avatar = document.querySelector('.avatar');
	avatar.onclick = function() {
		document.querySelector('.account-dropdown').classList.toggle('active');
		avatar.querySelector('div').classList.toggle('active');
	}
}
avatar();