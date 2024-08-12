document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggleButton").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".serviciosItem");
      const text = item.querySelector(".serviciosItemsText");

      // Toggle the class to trigger the transition
      item.classList.toggle("open");
      button.classList.toggle("open"); // Agrega o quita la clase para rotar el botón

      if (item.classList.contains("open")) {
        text.style.maxHeight = "400px"; // Altura fija
        text.style.opacity = 1;
      } else {
        text.style.maxHeight = 0; // Oculta el contenido
        text.style.opacity = 0;
      }
    });
  });
});
