/* -----------------------------------------------------------
	01. PLAYER
----------------------------------------------------------- */

var Player = function() {
	var _this = this,
		audioPlayer = document.querySelectorAll('.audio-player'),
		fixedPlayer = document.getElementById('fixed-player'),
		intervalTime = null,
		countVisual = 0,
		countTimeInterval = 0,
		fixedPlayerFlag = true;

	this.playOrPause = function(player) {
		var parent = player.closest('.audio-player'),
			track = parent.querySelector('audio'),
			btnPlay = parent.querySelector('.play-audio'),
			btnFixedPlay = 	fixedPlayer.querySelector('.play-audio');		

		if (track.paused) {
			_this.pausedAllTracks(audioPlayer);
			track.play();
			btnPlay.classList.add('active');
			btnFixedPlay.classList.add('active');
			parent.classList.add('playing');

			_this.initTimePlayer(player);			
		} else {
			track.pause();
			btnPlay.classList.remove('active');
			btnFixedPlay.classList.remove('active');
			parent.classList.remove('playing');

			clearInterval(intervalTime);
		}

		if (fixedPlayerFlag) {
			fixedPlayer.classList.add('active');
			_this.visualAudio(btnPlay);
			fixedPlayerFlag = false;
		}	

		_this.fixedPlayerShow(track);
	}

	this.initTimePlayer = function(player) {
		clearInterval(intervalTime);

		var parent = player.closest('.audio-player'),
			track = parent.querySelector('audio'),
			durationTime = fixedPlayer.querySelector('.durtime-audio'),
			currentTime = fixedPlayer.querySelector('.curtime-audio'),
			visualAudio = fixedPlayer.querySelector('.visual-audio');

		intervalTime = setInterval(function() {
			var curMin = Math.floor(track.currentTime / 60),
				curSec = Math.floor(track.currentTime - curMin * 60),
				durMin = Math.floor(track.duration / 60),
				durSec = Math.floor(track.duration - durMin * 60),
				sec = curSec;

			if (curMin < 10) curMin = '0' + curMin; 
			if (curSec < 10) curSec = '0' + curSec; 
			if (durMin < 10) durMin = '0' + durMin; 
			if (durSec < 10) durSec = '0' + durSec; 

			durationTime.innerHTML = durMin + ':' + durSec;
			currentTime.innerHTML = curMin + ':' + curSec;

			var span = visualAudio.querySelectorAll('span'),
				setToggle = track.duration / span.length;

			if (sec % Math.floor(setToggle + 0.6) == 0) {
				span[countVisual].classList.add('active');
				span[countVisual].setAttribute('data-current-time', track.currentTime);
				countVisual++;
			}			

			countTimeInterval++
		}, 1000);		
	}

	this.pausedAllTracks = function(audioPlayer) {
		for (var i = 0; i < audioPlayer.length; i++) {
			var track = audioPlayer[i].querySelector('audio');
			track.pause();
			audioPlayer[i].classList.remove('playing');
			audioPlayer[i].querySelector('.play-audio').classList.remove('active');
		}
	}

	this.mutedPlayer = function(player) {
		var parent = player.closest('.audio-player'),
			track = parent.querySelector('audio'),
			muted = fixedPlayer.querySelector('.muted-audio');

		if (track.muted) {
			track.muted = false;
			muted.classList.remove('active');
		} else {
			track.muted = true;
			muted.classList.add('active');
		}
	}

	this.volumePlayer = function(player, volume) {
		var parent = player.closest('.audio-player'),
			track = parent.querySelector('audio');

		track.volume = volume / 100;
	} 

	this.visualAudio = function(player) {
		var parent = player.closest('.audio-player'),
			track = parent.querySelector('audio'),
			visualAudio = fixedPlayer.querySelector('.visual-audio'),
			spanWidth = visualAudio.offsetWidth,
			countSpan = 0,
			posSpan = 0;

		countVisual = 0;
		countTimeInterval = 0;

		var sp = visualAudio.querySelectorAll('span');

		if (sp.length) {
			for (var i = 0; i < sp.length; i++) {
				sp[i].remove();
			}
		}

		for (var i = 0; i < spanWidth; i += 5.9) {
			if (countSpan >= spanWidth) break;
			countSpan++;
		}

		for (var i = 0; i < countSpan; i++) {
			var span = document.createElement('span');
			span.style.left = posSpan + 'px';
			span.style.top = getRandomInt(8, 5) + 'px';
			visualAudio.appendChild(span);
			posSpan += 5;
		}
	}

	this.fixedPlayerShow = function(track) {
		var parent = track.closest('.audio-player'),
			btnPlay = fixedPlayer.querySelector('.play-audio'),
			btnNext = fixedPlayer.querySelector('.next-audio'),
			btnPrev = fixedPlayer.querySelector('.prev-audio'),
			currentPlay = parent.querySelector('.play-audio'),
			btnMuted = fixedPlayer.querySelector('.muted-audio'),
			btnVolume = fixedPlayer.querySelector('.volume-audio'),
			visualAudio = fixedPlayer.querySelector('.visual-audio');

		fixedPlayer.querySelector('.thumb-audio img').setAttribute('src', parent.querySelector('.thumb-audio img').getAttribute('src'));
		fixedPlayer.querySelector('.title-date').innerHTML = parent.getAttribute('data-date');
		fixedPlayer.querySelector('.title-audio').innerHTML = parent.querySelector('.title-audio').innerHTML;

		btnPlay.onclick = function() {
			_this.playOrPause(currentPlay);
		}

		btnNext.onclick = function() {
			if (parent.nextElementSibling != 'undefined') {
				var next = parent.nextElementSibling,
					btnPlay = next.querySelector('.play-audio');

				_this.playOrPause(btnPlay);
				_this.initTimePlayer(btnPlay);
				_this.visualAudio(btnPlay);
			} else {
				_this.playOrPause(currentPlay);
				_this.initTimePlayer(currentPlay);
				_this.visualAudio(currentPlay);
			}			
		}

		btnPrev.onclick = function() {
			if (parent.previousElementSibling != 'undefined') {
				var prev = parent.previousElementSibling,
					btnPlay = prev.querySelector('.play-audio');

				_this.playOrPause(btnPlay);
				_this.initTimePlayer(btnPlay);
				_this.visualAudio(btnPlay);
			} else {
				_this.playOrPause(currentPlay);
				_this.initTimePlayer(currentPlay);
				_this.visualAudio(currentPlay);
			}			
		}

		btnMuted.onclick = function(e) {
			_this.mutedPlayer(currentPlay);
		}

		btnVolume.onchange = function() {
			_this.volumePlayer(currentPlay, this.value);
		}
	}

	for (var i = 0; i < audioPlayer.length; i++) {
		var play = audioPlayer[i].querySelector('.play-audio');
		play.onclick = function() {
			_this.playOrPause(this);
		}
	}
}

var player = new Player();

function getRandomInt(max, min) {
  return Math.floor(Math.random() * Math.floor(max) + min);
}

/* -----------------------------------------------------------
	02. SLIDER HOME
----------------------------------------------------------- */

$('#slider-home ul').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
	nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
	responsive: [
	    {
		    breakpoint: 1000,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		    }
	    },
	    {
		    breakpoint: 600,
		    settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		    }
	    }
  ]
});