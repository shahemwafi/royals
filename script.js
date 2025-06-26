// No additional JavaScript needed for now since Vanilla Tilt handles animations
VanillaTilt.init(document.querySelectorAll("[data-tilt]"));

  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  // Toggle sidebar on hamburger click
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Close sidebar when a link is clicked
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnHamburger) {
      sidebar.classList.remove('active');
    }
  });