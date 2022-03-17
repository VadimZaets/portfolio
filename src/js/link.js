const links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = link.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
