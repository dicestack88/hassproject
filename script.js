const routes = [...document.querySelectorAll('[data-route]')];
const pages = [...document.querySelectorAll('[data-page]')];
const menu = document.querySelector('#site-nav');
const toggle = document.querySelector('.menu-toggle');

function showPage() {
  const route = location.hash.slice(1) || 'home';
  const exists = pages.some((page) => page.dataset.page === route);
  const activeRoute = exists ? route : 'home';
  pages.forEach((page) => page.classList.toggle('active', page.dataset.page === activeRoute));
  routes.forEach((link) => link.classList.toggle('active', link.dataset.route === activeRoute));
  document.title = activeRoute === 'home' ? 'Desert Locusts | Inquiry Project' : `${document.querySelector(`[data-page="${activeRoute}"] h1`).innerText.replace(/\n/g, ' ')} | Desert Locusts`;
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
}

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

window.addEventListener('hashchange', showPage);
showPage();
