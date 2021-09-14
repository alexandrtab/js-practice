const showModalBtn = document.querySelector('#btn'),
    modalWindow = document.querySelector(".modal-window-container"),
    closeModalBtn = document.querySelector('.close-modal'),
    modalBack = document.querySelector('.modal-back');
showModalBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden');
});
closeModalBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden');
});
modalBack.addEventListener('click', () => {
    modalWindow.classList.toggle("hidden");
});