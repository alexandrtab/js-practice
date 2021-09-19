window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'),
        rightArrow = document.querySelector('.right-arrow'),
        leftArrow = document.querySelector('.left-arrow'),
        circles = document.querySelectorAll('.circle'),
        removeActiveClass = () => {
            slides.forEach((item) => item.classList.remove('active'));
            circles.forEach((item) => item.classList.remove('circle-active'));
        };
    let arrowIsClicked = false;
    let slideCounter = 0;


    rightArrow.addEventListener('click', () => {
        slideCounter++;
        removeActiveClass();
        if (slideCounter < slides.length) {
            slides[slideCounter].classList.add('active');
            circles[slideCounter].classList.add('circle-active');
            return slideCounter;
        } else {
            slides[0].classList.add('active');
            circles[0].classList.add('circle-active');
            slideCounter = 0;
            return slideCounter;
        }
    });

    leftArrow.addEventListener('click', () => {
        slideCounter--;
        removeActiveClass();
        if (slideCounter < 0) {
            slides[slides.length - 1].classList.add('active');
            circles[slides.length - 1].classList.add('circle-active');
            slideCounter = slides.length;
            return slideCounter;

        }
        (function() {
            slides[slideCounter].classList.add('active');
            circles[slideCounter].classList.add('circle-active');
        })();
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
            circles[slideCounter].classList.add('circle-active');
            return slideCounter;
        } else {
            slides[0].classList.add('active');
            circles[0].classList.add('circle-active');
            slideCounter = 0;
            return slideCounter;
        }
    }, 3000);

});