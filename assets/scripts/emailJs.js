// Inicializa EmailJS con tu User ID
emailjs.init("gBb_LAjfDmkyqiaHF");

// Función para manejar el envío del formulario
function handleFormSubmit(formId, serviceId, templateId, buttonId) {
  document.getElementById(formId).addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const submitButton = document.getElementById(buttonId);

    // Cambia el texto del botón a "Enviando..."
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    emailjs.sendForm(serviceId, templateId, this).then(
      function (response) {
        console.log("Éxito:", response);
        // Cambia el texto del botón a "Mensaje enviado" y desactiva el botón
        submitButton.textContent = "Mensaje enviado";
        setTimeout(() => {
          submitButton.textContent = "Enviar";
          // Limpia el formulario y reactiva el botón
          document.getElementById(formId).reset(); // Limpia el formulario
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
}

// Configura el envío para ambos formularios
handleFormSubmit("contactForm", "service_rfeh7zq", "template_rxkkikf", "submitButton");
handleFormSubmit("modalForm", "service_rfeh7zq", "template_42uuul6", "submitButtonModal");
