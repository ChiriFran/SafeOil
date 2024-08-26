function updateImageSource() {
    const econCircularImg = document.getElementById('econCircularImg');
    const smallScreenSrc = './assets/ilustraciones/econ-circular/econ-circular-editsvg.svg';
    const largeScreenSrc = './assets/ilustraciones/econ-circular/econ-circular-copia.svg';

    if (window.innerWidth < 1000) {
        econCircularImg.src = smallScreenSrc;
    } else {
        econCircularImg.src = largeScreenSrc;
    }
}

// Ejecuta la función al cargar la página y cuando se cambia el tamaño de la ventana
window.addEventListener('load', updateImageSource);
window.addEventListener('resize', updateImageSource);
