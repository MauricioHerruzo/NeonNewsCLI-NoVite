// newUser.js - Manejo del registro de usuario por JS y API interna

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const registerError = document.getElementById('registerError');
  if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      registerError.textContent = '';
      const formData = new FormData(registerForm);
      try {
        // Usar la API interna con ruta absoluta
        const res = await axios.post('/NeonNewsWeb/users.php', Object.fromEntries(formData));
        if (res.data.success) {
          window.location.href = '/NeonNewsWeb/pages/login.html';
        } else {
          registerError.textContent = res.data.error || 'Error desconocido.';
        }
      } catch (err) {
        registerError.textContent = err.response?.data?.error || 'Error de conexión.';
      }
    });
  }
});
