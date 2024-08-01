document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counters span");
  const container = document.getElementById("estadisticasContainer");

  let activated = false;

  // Función de easing para una animación más suave
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateCounters() {
    const duration = 2000; // Duración de la animación en milisegundos
    const startTime = Date.now();

    function updateCounts() {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Progreso de la animación

      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.count);
        const easedProgress = easeOutQuad(progress);
        const count = Math.floor(easedProgress * target);
        counter.innerText = count;
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        counters.forEach((counter) => {
          counter.innerText = counter.dataset.count; // Asegurarse de que el valor final sea exacto
        });
      }
    }

    updateCounts();
  }

  function onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !activated) {
        animateCounters();
        activated = true;
        // Detener la observación una vez que la animación se haya activado
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.5, // Ajusta el umbral según la cantidad de visibilidad necesaria para activar la animación
  });

  // Comenzar a observar el contenedor
  observer.observe(container);
});
