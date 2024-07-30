document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggleButton").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".serviciosItem");
      const text = item.querySelector(".serviciosItemsText");

      item.classList.toggle("open");
      button.classList.toggle("open");

      if (item.classList.contains("open")) {
        text.style.maxHeight = "200px"; // Altura de despliegue fija
        text.style.opacity = 1; // Asegura que el texto sea visible
      } else {
        text.style.maxHeight = 0; // Altura cuando está colapsado
        text.style.opacity = 0; // Oculta el texto
      }
    });
  });
});
