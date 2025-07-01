// ─ assets/js/main.js ─

const navMenu   = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const icon      = navToggle.querySelector('i');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');

  // ensure dropdown always opens scrolled to top
  if (navMenu.classList.contains('active')) {
    navMenu.scrollTop = 0;
  }
});
