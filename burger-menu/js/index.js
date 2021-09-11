window.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('#burger'),
        asideMenu = document.querySelector('.menu-container');
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger-active');
        asideMenu.classList.toggle('show-menu');
    });

});