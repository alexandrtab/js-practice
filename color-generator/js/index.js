const burgerBtn = document.querySelector('#burger'),
    mobileMenu = document.querySelector('.menu-container'),
    btnGenerateRandomColor = document.querySelector('#btn'),
    colorsArr = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'],
    mainTag = document.querySelector('main'),
    colorName = document.querySelector('.name');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-active');
    mobileMenu.classList.toggle('show-menu');
});
btnGenerateRandomColor.addEventListener('click', () => {
    const getRandomColor = (arr) => {
        const randomNumber = Math.floor(Math.random() * arr.length);
        mainTag.style.background = colorsArr[randomNumber];
        colorName.textContent = colorsArr[randomNumber];
    };
    getRandomColor(colorsArr);
});