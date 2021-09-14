const tabNavButtons = document.querySelectorAll(".btn"),
    tabImages = document.querySelectorAll('.img'),
    tabTxts = document.querySelectorAll('.tab-txt');

tabNavButtons.forEach((item, index) => {

    item.addEventListener('click', () => {
        const showActiveButtonHandle = (arr) => {
            arr.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.toggle('active');

        };

        const showActiveContentHandle = (arr) => {
            arr.forEach((item) => {
                item.classList.remove('show');
            });
            arr[index].classList.toggle('show');
        };

        showActiveButtonHandle(tabNavButtons);
        showActiveContentHandle(tabTxts);
        showActiveContentHandle(tabImages);
    });

});