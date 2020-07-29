//
//
console.log(`Bozo`);

const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.setAttribute('title', 'Pause');
  playBtn.classList.replace('fa-play', 'fa-pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.setAttribute('title', 'Play');
  playBtn.classList.replace('fa-pause', 'fa-play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
