// Inicializa EmailJS con tu User ID
emailjs.init("CsBmwag2gHy1yjluk");

// Función para manejar el envío del formulario
function handleFormSubmit(formId, serviceId, templateId, buttonId) {
  const form = document.getElementById(formId);
  const submitButton = document.getElementById(buttonId);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Validación básica
    if (!validateForm(form)) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Cambia el texto del botón a "Enviando..."
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    emailjs.sendForm(serviceId, templateId, form).then(
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
}

// Función para validar el formulario
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
      input.classList.add("error"); // Añade una clase para destacar el error
    } else {
      input.classList.remove("error"); // Elimina la clase si ya no hay error
    }
  });

  return isValid;
}

// Configura el envío para ambos formularios
handleFormSubmit("contactForm", "service_glozr3p", "template_34vrw0g", "submitButton");
handleFormSubmit("modalForm", "service_glozr3p", "template_gy6bvm5", "submitButtonModal");
