(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalLnk1: document.querySelector('[link1-modal-close]'),
    closeModalLnk2: document.querySelector('[link2-modal-close]'),
    closeModalLnk3: document.querySelector('[link3-modal-close]'),
    closeModalLnk4: document.querySelector('[link4-modal-close]'),
    closeModalLnk5: document.querySelector('[link5-modal-close]'),
    
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalLnk1.addEventListener('click', toggleModal);
  refs.closeModalLnk2.addEventListener('click', toggleModal);
  refs.closeModalLnk3.addEventListener('click', toggleModal);
  refs.closeModalLnk4.addEventListener('click', toggleModal);
  refs.closeModalLnk5.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();