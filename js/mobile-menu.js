(() => {
  const openMenuButton = document.querySelector('[data-mobile-menu-open]');
  const closeMenuButton = document.querySelector('[data-mobile-menu-close]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  const tabletMedia = window.matchMedia('(min-width: 768px)');
  let previousBodyOverflow = '';

  const openMenu = () => {
    previousBodyOverflow = document.body.style.overflow;
    mobileMenu.classList.add('is-open');
    openMenuButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = previousBodyOverflow;
  };

  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);
  mobileMenuLinks.forEach(link => link.addEventListener('click', closeMenu));
  tabletMedia.addEventListener('change', event => {
    if (event.matches) {
      closeMenu();
    }
  });
})();
