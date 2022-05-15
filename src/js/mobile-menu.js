(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuSecBtn: document.querySelector('[data-menu-close1]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuSecBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();