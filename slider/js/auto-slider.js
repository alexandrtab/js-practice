window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'),
        rightArrow = document.querySelector('.right-arrow'),
        leftArrow = document.querySelector('.left-arrow'),
        removeActiveClass = () => slides.forEach((item) => item.classList.remove('active'));
    let arrowIsClicked = false;
    let slideCounter = 0;

    rightArrow.addEventListener('click', () => {
        arrowIsClicked = true;
        slideCounter++;
        removeActiveClass();
        if (slideCounter < slides.length) {
            slides[slideCounter].classList.add('active');
            return slideCounter;
        } else {
            slides[0].classList.add('active');
            slideCounter = 0;
            return slideCounter;
        }
    });


    leftArrow.addEventListener('click', () => {
        arrowIsClicked = true;
        slideCounter--;
        removeActiveClass();
        if (slideCounter < 0) {
            slides[slides.length - 1].classList.add('active');
            slideCounter = slides.length;
            return slideCounter;
        }
        const showPreviousSlide = () => {
            slides[slideCounter].classList.add('active');
            return slideCounter;
        };
        showPreviousSlide();
    });


    setInterval(() => {
        if (arrowIsClicked === true) {
            arrowIsClicked = false;
            return arrowIsClicked;
        }
        slideCounter++;
        removeActiveClass();
        if (slideCounter < slides.length) {
            slides[slideCounter].classList.add('active');
            return slideCounter;
        } else {
            slides[0].classList.add('active');
            slideCounter = 0;
            return slideCounter;
        }
    }, 3000);

});