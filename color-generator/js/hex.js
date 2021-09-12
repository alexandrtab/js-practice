const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
    mixColorsBtn = document.querySelector('#btn'),
    main = document.querySelector('main'),
    colorName = document.querySelector('.name');


mixColorsBtn.addEventListener('click', () => {
    let hex = '';
    const getRandomColorHex = (arr) => {
        for (let i = 0; i < 6; i++) {
            const randomNumber = Math.floor(Math.random() * arr.length);
            hex += hexArr[randomNumber];
        }
        main.style.background = `#${hex}`;
        colorName.textContent = `#${hex}`;
    };
    getRandomColorHex(hexArr);

});