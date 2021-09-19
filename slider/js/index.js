window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'),
        rightArrow = document.querySelector('.right-arrow'),
        leftArrow = document.querySelector('.left-arrow'),
        circles = document.querySelectorAll('.circle'),
        removeActiveClass = () => {
            slides.forEach((item) => item.classList.remove('active'));
            circles.forEach((item) => item.classList.remove('circle-active'));
        };
    let counter = 0;


    rightArrow.addEventListener('click', () => {
        counter++;
        removeActiveClass();
        if (counter < slides.length) {
            slides[counter].classList.add('active');
            circles[counter].classList.add('circle-active');
            return counter;
        } else {
            slides[0].classList.add('active');
            circles[0].classList.add('circle-active');
            counter = 0;
            return counter;
        }
    });

    leftArrow.addEventListener('click', () => {
        counter--;
        removeActiveClass();
        if (counter < 0) {
            slides[slides.length - 1].classList.add('active');
            circles[slides.length - 1].classList.add('circle-active');
            counter = slides.length;
            return counter;

        }
        (function() {
            slides[counter].classList.add('active');
            circles[counter].classList.add('circle-active');
        })();
    });

});