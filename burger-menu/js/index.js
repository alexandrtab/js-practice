  const burgerBtn = document.querySelector('#burger'),
      mobileMenu = document.querySelector('.menu-container');
  burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('burger-active');
      mobileMenu.classList.toggle('show-menu');
  });