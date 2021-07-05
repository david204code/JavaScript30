// Get the elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Built the function
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();

  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
}

function updateButton() {
  //   console.log("Update the play button");

  const icon = this.paused ? "►" : "❚ ❚";
  //   console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

// Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
