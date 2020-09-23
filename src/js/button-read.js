(() => {
  const menuBtnRef = document.querySelector('[data-button-read]');
  const mobileMenuRef = document.querySelector('[data-open-block]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');

    mobileMenuRef.classList.toggle('is-open');
  });
})();
