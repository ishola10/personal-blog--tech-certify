const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

body.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
