/**
 * English Games Hub - Interactive Script
 * Lightweight, fast, fully compatible with static hosting (GitHub Pages)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Card 3D tilt & micro-interactions
  initCardInteractions();
});

function initCardInteractions() {
  const cards = document.querySelectorAll('.game-card');

  cards.forEach(card => {
    // Subtle 3D Tilt Effect on mousemove for desktop
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
