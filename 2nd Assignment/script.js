/* script.js */
const header = document.querySelector('header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setOpen(open) {
  header.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => {
  const open = header.classList.contains('is-open');
  setOpen(!open);
});

document.addEventListener('click', (e) => {
  if (!header.contains(e.target) && header.classList.contains('is-open')) setOpen(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('is-open')) setOpen(false);
});
