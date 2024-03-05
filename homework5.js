const video = document.querySelector(".video");
const toggleButton = document.querySelector(".toggleButton");
const videoProgress = document.querySelector(".videoprogress");
const videoProgressBar = document.querySelector(".videoprogressbar");
const sliders = document.querySelectorAll(".controls__slider");
const playback = document.querySelectorAll(".playback");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
function updateToggleButton() {
  toggleButton.innerHTML = video.paused ? "►" : "❚❚";
}

function handlevideoProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  videoProgressBar.style.flexBasis = `${progressPercentage}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / videoProgress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleSliderUpdate() {
  video[this.name] = this.value;
}

toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);

video.addEventListener("timeupdate", handlevideoProgress);
videoProgress.addEventListener("click", scrub);
let mousedown = false;
videoProgress.addEventListener("mousedown", () => (mousedown = true));
videoProgress.addEventListener("mousemove", (e) => mousedown && scrub(e));
videoProgress.addEventListener("mouseup", () => (mousedown = false));

sliders.forEach((slider) => {
  slider.addEventListener("change", handleSliderUpdate);
});

playback.forEach((button) => {
  button.addEventListener("click", (e) => {
    const newPlaybackRate = e.target.dataset.playbackRate;
    video.playbackRate = newPlaybackRate;
  });
});

const audio = document.querySelector("audio");
const audiobutton = document.getElementById("audiobutton");
const audiovolume = document.getElementById("audiovolume");
const audioprogressbar = document.getElementById("audioprogressbar");
const audiocurrent = document.getElementById("audiocurrent");
const audiototal = document.getElementById("audiototal");

let audioplay = false;

audiobutton.addEventListener("click", () => {
  if (audioplay) {
    audio.pause();
    audiobutton.textContent = "►";
  } else {
    audio.play();
    audiobutton.textContent = "❚❚";
  }
  audioplay = !audioplay;
});

audiovolume.addEventListener("input", () => {
  audio.volume = audiovolume.value;
});


audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  audiocurrent.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
  audiototal.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

  const progress = (currentTime / duration) * 100;
  audioprogressbar.style.width = `${progress}% `;
});
