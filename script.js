// Toggle mobile nav
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');

function closeTheMenu() {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('overlay');
}

menuToggle.addEventListener('click', () => {
  nav.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('overlay');
});

closeMenu.addEventListener('click', closeTheMenu);

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', closeTheMenu);
});

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, {threshold: 0.15});
document.querySelectorAll('.feature').forEach(el => observer.observe(el));
