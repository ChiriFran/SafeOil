document.addEventListener("DOMContentLoaded", function () {
  // Espera 2 segundos antes de iniciar la animación
  setTimeout(function () {
    // Añade la clase para animar la apertura del loader
    document.getElementById("loaderContainer").classList.add("open");

    // Muestra el contenido después de que la animación ha comenzado
    setTimeout(function () {
      document.getElementById("content").classList.add("show");

      // Oculta el loader una vez la animación ha terminado
      setTimeout(function () {
        document.getElementById("loaderContainer").style.display = "none";
      }, 500); // Tiempo de la animación (1 segundo en este caso)
    }, 500); // Tiempo para mostrar el contenido después de iniciar la animación (1 segundo en este caso)
  }, 1000); // 1000 milisegundos = 1 segundos
});
