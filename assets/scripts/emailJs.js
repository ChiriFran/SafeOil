// Inicializa EmailJS con tu User ID
emailjs.init("gBb_LAjfDmkyqiaHF");

// Obtiene una referencia al formulario y al botón de envío
const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

// Función para manejar el envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío por defecto del formulario

  // Cambia el texto del botón a "Enviando..."
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  emailjs.sendForm("service_rfeh7zq", "template_rxkkikf", form).then(
    function (response) {
      console.log("Éxito:", response);
      // Cambia el texto del botón a "Mensaje enviado" y desactiva el botón
      submitButton.textContent = "Mensaje enviado";
      setTimeout(() => {
        submitButton.textContent = "Enviar";
        // Limpia el formulario y reactiva el botón
        form.reset(); // Limpia el formulario
        submitButton.disabled = false; // Reactiva el botón
      }, 2000); // Mantén el texto "Mensaje enviado" visible por 2 segundos
    },
    function (error) {
      console.log("Error:", error);
      // Restaura el texto del botón y habilítalo de nuevo
      submitButton.textContent = "Enviar";
      submitButton.disabled = false;
      alert("Hubo un error al enviar el mensaje");
    }
  );
});
