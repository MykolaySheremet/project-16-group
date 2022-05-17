(() => {
  const refs = {
    openTrdModalBtn: document.querySelector('[data-modal-open2]'),
    closeTrdModalBtn: document.querySelector('[data-modal-close2]'),
    modal: document.querySelector('[data-modal2]'),
  };
  refs.openTrdModalBtn.addEventListener('click', toggleModal);
  refs.closeTrdModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden2');
  }
})();
