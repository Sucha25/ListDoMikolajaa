// Efekt muzyki
const musicToggle = document.getElementById('music-toggle');
const music = document.getElementById('background-music');

musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = '🔇 Wyłącz muzykę';
  } else {
    music.pause();
    musicToggle.textContent = '🔊 Włącz muzykę';
  }
});
