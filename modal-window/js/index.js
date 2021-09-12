const showModalWindow = document.querySelector('#btn'),
    modalWindow = document.querySelector(".modal-window-container"),
    closeModalWindow = document.querySelector('.close-modal');
showModalWindow.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden');
});
closeModalWindow.addEventListener('click', (e) => {
    modalWindow.classList.toggle('hidden');
    if (e.target === modalWindow) {
        modalWindow.classList.remove('hidden');
    }

});