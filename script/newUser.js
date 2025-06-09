document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 [DEFINITIVO] newUser.js loaded - Version 2024-DEFINITIVO - API: /NeonNewsDefinitivo/users.php');
  const registerForm = document.getElementById('registerForm');
  const registerError = document.getElementById('registerError');
  
  if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      registerError.textContent = '';
      const formData = new FormData(registerForm);
        try {
        const apiUrl = '/NeonNewsDefinitivo/users.php';
        console.log('🌐 Making API call to:', apiUrl);
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
