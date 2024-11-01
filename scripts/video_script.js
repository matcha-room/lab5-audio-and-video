const media = document.querySelector("#video");

const play = document.querySelector("#btnPlay");
const stop = document.querySelector("#btnStop");
const mute = document.querySelector("#btnMute");
const playbackSpeed = document.querySelector("#playback_speed");
const speed = document.querySelector("#playback_speed");
const rwd = document.querySelector("#btnRwd");
const fwd = document.querySelector("#btnFwd");
const restart = document.querySelector("#btnRestart");

function playVideo(media) {
	media.play();
}

play.addEventListener("click", playPauseMedia);

function playPauseMedia() {
	if (media.paused) {
		play.setAttribute("data-icon", "u");
		media.play();
	} else {
		play.setAttribute("data-icon", "P");
		media.pause();
	}
}

stop.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);

function stopMedia() {
	media.pause();
	media.currentTime = 0;
}

playbackSpeed.addEventListener("change", function () {
	media.playbackRate = this.value;
});

rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);

let intervalFwd;
let intervalRwd;

function mediaBackward() {
	clearInterval(intervalFwd);
	fwd.classList.remove("active");

	if (rwd.classList.contains("active")) {
		rwd.classList.remove("active");
		clearInterval(intervalRwd);
		media.play();
	} else {
		rwd.classList.add("active");
		media.pause();
		intervalRwd = setInterval(windBackward, 200);
	}
}

function mediaForward() {
	clearInterval(intervalRwd);
	rwd.classList.remove("active");

	if (fwd.classList.contains("active")) {
		fwd.classList.remove("active");
		clearInterval(intervalFwd);
		media.play();
	} else {
		fwd.classList.add("active");
		media.pause();
		intervalFwd = setInterval(windForward, 200);
	}
}

function windBackward() {
	if (media.currentTime <= 3) {
		rwd.classList.remove("active");
		clearInterval(intervalRwd);
		stopMedia();
	} else {
		media.currentTime -= 3;
	}
}

function windForward() {
	if (media.currentTime >= media.duration - 3) {
		fwd.classList.remove("active");
		clearInterval(intervalFwd);
		stopMedia();
	} else {
		media.currentTime += 3;
	}
}

restart.addEventListener("click", mediaRestart);

function mediaRestart() {
	media.currentTime = 0;
	media.play();
}
