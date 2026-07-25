(() => {
  const openModalButton = document.querySelector('[data-modal-open]');
  const closeModalButton = document.querySelector('[data-modal-close]');
  const backdrop = document.querySelector('[data-modal]');

  const toggleModal = () => {
    backdrop.classList.toggle('is-open');
  };

  openModalButton.addEventListener('click', toggleModal);
  closeModalButton.addEventListener('click', toggleModal);
})();
