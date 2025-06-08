// loginUser.js - Manejo del login de usuario por JS y API interna

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      loginError.textContent = '';
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      try {
        // Usar la API interna con ruta absoluta
        const res = await axios.post('/NeonNewsWeb/login.php', { email, password });
        if (res.data.success) {
          window.location.href = '/NeonNewsWeb/pages/perfil.html';
        } else {
          loginError.textContent = res.data.error || 'Error desconocido.';
        }
      } catch (err) {
        loginError.textContent = err.response?.data?.error || 'Error de conexión.';
      }
    });
  }
});
