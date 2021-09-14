const tabNavButtons = document.querySelectorAll(".btn"),
    tabImages = document.querySelectorAll('.img'),
    tabTxts = document.querySelectorAll('.tab-txt');

const showActiveBtnHandler = (arr, item) => {
    arr.forEach((item) => {
        item.classList.remove('active');
    });
    item.classList.toggle('active');

};

const showActiveContentHandler = (arr, index) => {
    arr.forEach((item) => {
        item.classList.remove('show');
    });
    arr[index].classList.toggle('show');
};


tabNavButtons.forEach((item, index) => {

    item.addEventListener('click', () => {

        showActiveBtnHandler(tabNavButtons, item);
        showActiveContentHandler(tabTxts, index);
        showActiveContentHandler(tabImages, index);
    });

});