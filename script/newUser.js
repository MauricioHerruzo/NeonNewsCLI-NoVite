document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const registerError = document.getElementById('registerError');
  
  if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      registerError.textContent = '';
      const formData = new FormData(registerForm);
        try {
          //lo que me voy a arrepentir de las rutas absolutas
        const apiUrl = '/NeonNewsDefinitivo/users.php';
        const res = await axios.post(apiUrl, Object.fromEntries(formData));
        
        if (res.data.success) {
          window.location.href = '/NeonNewsDefinitivo/pages/perfil.php';
        } else {
          registerError.textContent = res.data.error || 'Error desconocido.';
        }
      } catch (err) {
        registerError.textContent = err.response?.data?.error || 'Error de conexión.';
      }
    });
  }
});
