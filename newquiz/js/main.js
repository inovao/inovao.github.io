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

document.querySelector('.question-svv .svg-icon').onclick = function(e) {
	document.querySelector('.info-card-svv').classList.add('active');	
}
document.querySelector('.info-card-svv .close').onclick = function(e) {
	document.querySelector('.info-card-svv').classList.remove('active');	
	return false;
}