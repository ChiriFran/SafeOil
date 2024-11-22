const sliderTrack = document.querySelector('.slider-track');
const dotsContainer = document.getElementById('dotsContainer');
const images = document.querySelectorAll('.repImg');

let currentIndex = 0;

// Crear dots
images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsContainer.appendChild(dot);
});

// Cambiar slide
function moveToSlide(index) {
    currentIndex = index;
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

// Actualizar dots activos
function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
