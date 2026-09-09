const menu = document.querySelector('#site-nav');
const toggle = document.querySelector('.menu-toggle');

if (menu && toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
