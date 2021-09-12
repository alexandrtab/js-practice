const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
    mixColorsBtn = document.querySelector('#btn'),
    mainTag = document.querySelector('main'),
    colorName = document.querySelector('.name'),
    burgerBtn = document.querySelector('#burger'),
    mobileMenu = document.querySelector('.menu-container');


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-active');
    mobileMenu.classList.toggle('show-menu');
});
mixColorsBtn.addEventListener('click', () => {
    let hex = '';

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * hexArr.length);
        hex += hexArr[randomNumber];
    }
    mainTag.style.background = `#${hex}`;
    colorName.textContent = `#${hex}`;


});