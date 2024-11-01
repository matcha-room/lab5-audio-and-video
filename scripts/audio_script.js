document.addEventListener("DOMContentLoaded", (e) => {
	const audio = document.querySelector("#audio");
	const audioSelect = document.querySelector("#audio_select");

	audioSelect.addEventListener("change", (e) => {
		audio.src = e.target.value;
		audio.play();
	});
});
