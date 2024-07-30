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

  function onScroll() {
    const containerTop =
      container.getBoundingClientRect().top + window.pageYOffset;
    const containerHeight = container.offsetHeight;
    const scrollTop = window.pageYOffset;
    const scrollBottom = scrollTop + window.innerHeight;

    if (
      scrollBottom > containerTop &&
      scrollTop < containerTop + containerHeight
    ) {
      if (!activated) {
        animateCounters();
        activated = true;
        // Remove the scroll event listener to ensure animation runs only once
        window.removeEventListener("scroll", onScroll);
      }
    }
  }

  window.addEventListener("scroll", onScroll);
});
