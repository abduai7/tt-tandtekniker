document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-navigation');
  const dropdowns = mainNav.querySelectorAll('.dropdown');

  if (!menuBtn || !mainNav) return;

  // Toggle mobile menu
  menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('mobile-menu-open');
    const open = document.body.classList.contains('mobile-menu-open');
    menuBtn.classList.toggle('is-active');
    menuBtn.setAttribute('aria-expanded', open);
    if (!open) closeAllDropdowns();
  });

  // Handle dropdown click (mobile & desktop)
  dropdowns.forEach(dd => {
    const link = dd.querySelector('a');
    link.addEventListener('click', e => {
      e.preventDefault();
      closeOther(dd);
      dd.classList.toggle('open');
    });
  });

  // Close menu if click outside header
  document.addEventListener('click', e => {
    if (document.body.classList.contains('mobile-menu-open') &&
        !e.target.closest('.main-header')) {
      document.body.classList.remove('mobile-menu-open');
      menuBtn.classList.remove('is-active');
      menuBtn.setAttribute('aria-expanded', 'false');
      closeAllDropdowns();
    }
  });

  function closeOther(current) {
    dropdowns.forEach(d => {
      if (d !== current) d.classList.remove('open');
    });
  }
  function closeAllDropdowns() {
    dropdowns.forEach(d => d.classList.remove('open'));
  }
});