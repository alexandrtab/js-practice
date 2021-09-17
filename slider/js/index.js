window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'),
        rightArrow = document.querySelector('.right-arrow'),
        leftArrow = document.querySelector('.left-arrow');
    let counter = 0;
    rightArrow.addEventListener('click', () => {
        counter++;
        slides.forEach((item) => {
            item.classList.remove('active');
        });
        if (counter < slides.length) {
            slides[counter].classList.add('active');
            return counter;
        } else {
            slides[0].classList.add('active');
            counter = 0;
            return counter;
        }
    });
    leftArrow.addEventListener('click', () => {
        counter--;
        slides.forEach((item) => {
            item.classList.remove('active');
        });
        if (counter < 0) {
            slides[slides.length - 1].classList.add('active');
            counter = slides.length;
            return counter;
        }
        const showPreviousSlide = () => {
            slides[counter].classList.add('active');
            return counter;
        };
        showPreviousSlide();
    });

});