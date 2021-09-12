const showModalWindow = document.querySelector('#btn'),
    modalWindow = document.querySelector(".modal-window-container"),
    closeModalWindow = document.querySelector('.close-modal'),
    modalBack = document.querySelector('.modal-back');
showModalWindow.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden');
});
closeModalWindow.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden');


});
modalBack.addEventListener('click', () => {
    modalWindow.classList.toggle("hidden");
})