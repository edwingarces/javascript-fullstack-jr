document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar todos los datos que tiene el formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar que los campos no estén vacíos
    if (name === '' || email === '' || password === '') {
      resultDiv.innerHTML = '<p style="color: red">Todos los campos deben estar llenos</p>';
      return;
    }

    // Validar el correo electrónico
    if(validateEmail(email)) {
      resultDiv.innerHTML = '<p style="color: red">Ingrese un correo válido</p>';
      return;
    }

    // Mostar todos los valores capturados
    // Revisar en clase
    resultDiv.innerHTML = `
      <h2>Datos ingresados:</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contraseña:</strong> ${password}</p>
    `;
  });

  function validateEmail(email) {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return emailValidation.test(String(email).toLowerCase())
  }
});