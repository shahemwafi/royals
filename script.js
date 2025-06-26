// No additional JavaScript needed for now since Vanilla Tilt handles animations
VanillaTilt.init(document.querySelectorAll("[data-tilt]"));

  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });