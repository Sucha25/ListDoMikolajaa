// Funkcja dodająca efekt animowanych serduszek
document.addEventListener('DOMContentLoaded', () => {
  const heartsContainer = document.querySelector('.hearts');

  // Tworzenie animowanych serduszek
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.animationDuration = 3 + Math.random() * 5 + 's';
    heartsContainer.appendChild(heart);
  }
});
