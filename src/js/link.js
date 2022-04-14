const links = document.querySelectorAll('a[href*="#"]');
const linkMenuRef = document.querySelector('[data-menu]');
const menuBtnRef = document.querySelector('[data-menu-button]');
for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    linkMenuRef.classList.toggle('is-open');
    const blockID = link.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
