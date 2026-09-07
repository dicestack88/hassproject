const menu = document.querySelector('#site-nav');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
