var Player = function() {
	var _this = this,
		audioPlayer = document.querySelectorAll('.audio-player'),
		fixedPlayer = document.getElementById('fixed-player');	

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
		} else {
			track.pause();
			btnPlay.classList.remove('active');
			btnFixedPlay.classList.remove('active');
			parent.classList.remove('playing');
		}

		fixedPlayer.classList.add('active');
		_this.fixedPlayerShow(track);
	}

	this.pausedAllTracks = function(audioPlayer) {
		for (var i = 0; i < audioPlayer.length; i++) {
			var track = audioPlayer[i].querySelector('audio');
			track.pause();
			audioPlayer[i].classList.remove('playing');
			audioPlayer[i].querySelector('.play-audio').classList.remove('active');
		}
	}

	this.fixedPlayerShow = function(track) {
		var parent = track.closest('.audio-player'),
			btnPlay = fixedPlayer.querySelector('.play-audio'),
			btnNext = fixedPlayer.querySelector('.next-audio'),
			btnPrev = fixedPlayer.querySelector('.prev-audio'),
			currentPlay = parent.querySelector('.play-audio');

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
			} else {
				_this.playOrPause(currentPlay);
			}			
		}

		btnPrev.onclick = function() {
			if (parent.previousElementSibling != 'undefined') {
				var prev = parent.previousElementSibling,
					btnPlay = prev.querySelector('.play-audio');
				_this.playOrPause(btnPlay);
			} else {
				_this.playOrPause(currentPlay);
			}			
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