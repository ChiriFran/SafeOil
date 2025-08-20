const sliderTrack = document.querySelector('.slider-track');
const dotsContainer = document.getElementById('dotsContainer');
const images = document.querySelectorAll('.repImg');

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

// Estilo para animar el movimiento
sliderTrack.style.transition = 'transform 0.3s ease';

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

// ----- Scroll horizontal táctil -----
sliderTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    sliderTrack.style.transition = 'none'; // quitar animación mientras arrastra
});

sliderTrack.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const moveX = currentX - startX;
    sliderTrack.style.transform = `translateX(${moveX - currentIndex * window.innerWidth}px)`;
});

sliderTrack.addEventListener('touchend', () => {
    isDragging = false;
    const diff = currentX - startX;

    // Desplazamiento mínimo para cambiar de slide
    if (diff > 50 && currentIndex > 0) {
        currentIndex--;
    } else if (diff < -50 && currentIndex < images.length - 1) {
        currentIndex++;
    }

    sliderTrack.style.transition = 'transform 0.3s ease';
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
});
