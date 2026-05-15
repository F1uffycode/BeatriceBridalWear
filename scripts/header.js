function initHeader() {

  /* =========================
     BURGER MENU
  ========================= */

  const burgerButton = document.querySelector('.nav__toggle');
  const menuOverlay = document.querySelector('.menu__overlay');
  const mobileMenu = document.querySelector('.mobile__menu');

  /* =========================
     COLLECTIONS (DRESSES)
  ========================= */

  const toggleItem = document.querySelector('.toggle__collections');
  const toggleLink = document.querySelector('.toggle__collections > a');
  const wrapper = document.querySelector('.collections__wrapper');

  let menuOpen = false;
  let collectionsOpen = false;

  /* =========================
     BURGER FUNCTIONS
  ========================= */

  function openMenu() {
    menuOpen = true;
    burgerButton.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuOpen = false;
    burgerButton.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    menuOpen ? closeMenu() : openMenu();
  }

  if (burgerButton && menuOverlay && mobileMenu) {

    burgerButton.addEventListener('click', toggleMenu);

    menuOverlay.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* =========================
     COLLECTIONS FUNCTIONS
  ========================= */

  if (toggleItem && toggleLink && wrapper) {

    wrapper.style.maxHeight = '0px';
    wrapper.style.overflow = 'hidden';

    function openCollections() {
      collectionsOpen = true;
      toggleItem.classList.add('active');
      wrapper.classList.add('open');
      wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
    }

    function closeCollections() {
      collectionsOpen = false;
      toggleItem.classList.remove('active');
      wrapper.classList.remove('open');
      wrapper.style.maxHeight = '0px';
    }

    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      collectionsOpen ? closeCollections() : openCollections();
    });
  }

  /* =========================
     GLOBAL OUTSIDE CLICK (MAIN FIX)
  ========================= */

  document.addEventListener('click', (e) => {

    const clickedInsideMenu =
      mobileMenu && mobileMenu.contains(e.target);

    const clickedBurger =
      burgerButton && burgerButton.contains(e.target);

    const clickedCollections =
      toggleItem && toggleItem.contains(e.target);

    const clickedOverlay =
      menuOverlay && menuOverlay.contains(e.target);

    // если клик вне ВСЕГО меню — закрываем всё
    if (!clickedInsideMenu && !clickedBurger && !clickedOverlay) {
      closeMenu();

      if (collectionsOpen) {
        closeCollections();
      }
    }
  });

}

initHeader();