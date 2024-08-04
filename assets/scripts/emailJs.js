emailjs.init("gBb_LAjfDmkyqiaHF"); // Reemplaza con tu User ID

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    var loadingIndicator = document.getElementById("loading");
    loadingIndicator.style.display = "block"; // Muestra el indicador de carga

    emailjs
      .sendForm("service_rfeh7zq", "template_rxkkikf", this)
      .then(
        function (response) {
          console.log("Éxito:", response);
          document.getElementById("contactForm").reset(); // Limpia los campos del formulario
        },
        function (error) {
          console.log("Error:", error);
          alert("Hubo un error al enviar el mensaje");
        }
      )
      .finally(function () {
        loadingIndicator.style.display = "none"; // Oculta el indicador de carga
      });
  });
