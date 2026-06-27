// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('nav a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// Shrink header on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20
    ? '0 2px 20px rgba(0,0,0,0.4)'
    : 'none';
});
