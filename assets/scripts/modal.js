const openModalButton = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');

// Mostrar el modal
openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    setTimeout(() => {
        modalOverlay.classList.add('show');
    }, 10);
});

// Cerrar el modal al hacer clic afuera
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 300);
    }
});
