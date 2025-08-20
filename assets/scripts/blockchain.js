const steps = document.querySelectorAll(".timeline-step");
const content = document.querySelector(".timeline-content");
const titleEl = document.getElementById("timeline-title");
const descEl = document.getElementById("timeline-desc");

steps.forEach(step => {
    step.addEventListener("click", () => {
        // Si ya está activo, no hacer nada
        if (step.classList.contains("active")) return;

        // Cambiar activo
        document.querySelector(".timeline-step.active").classList.remove("active");
        step.classList.add("active");

        // Iniciar animación salida
        content.classList.add("fade-out");

        // Después de animación de salida (400ms)
        setTimeout(() => {
            // Cambiar contenido
            titleEl.textContent = step.dataset.title;
            descEl.textContent = step.dataset.desc;

            // Quitar fade-out, añadir fade-in para animar entrada
            content.classList.remove("fade-out");
            content.classList.add("fade-in");

            // Al terminar animación de entrada (400ms) quitar clase fade-in
            setTimeout(() => {
                content.classList.remove("fade-in");
            }, 400);
        }, 400);
    });
});
