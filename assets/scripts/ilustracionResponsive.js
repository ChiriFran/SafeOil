function updateImageSources() {
    const econCircularImg = document.getElementById('econCircularImg');
    const reRefinacionImg = document.getElementById('reRefinacionImg');
    
    const smallScreenSrcEcon = './assets/ilustraciones/econ-circular/econ-circular-mobile.svg';  // Verifica esta ruta
    const largeScreenSrcEcon = './assets/ilustraciones/econ-circular/econ-circular-desktop.svg'; // Verifica esta ruta
    
    const smallScreenSrcReRef = './assets/ilustraciones/re-refinacion-mobile.jpg';
    const largeScreenSrcReRef = './assets/ilustraciones/re-refinacion.jpg';

    if (window.innerWidth < 1000) {
        econCircularImg.src = smallScreenSrcEcon;
        reRefinacionImg.src = smallScreenSrcReRef;
    } else {
        econCircularImg.src = largeScreenSrcEcon;
        reRefinacionImg.src = largeScreenSrcReRef;
    }
}

// Ejecuta la función al cargar la página y cuando se cambia el tamaño de la ventana
window.addEventListener('load', updateImageSources);
window.addEventListener('resize', updateImageSources);
