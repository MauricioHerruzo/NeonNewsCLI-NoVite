// Asegura que el código se ejecute cuando el DOM esté listo y el footer esté presente
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('footer');
  if (!footer) return;

  // Redirección de botones a login.html para usuarios no loggeados
  const registerBtn = footer.querySelector('#footer-register');
  const loginBtn = footer.querySelector('#footer-login');

  if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/NeonNewsDefinitivo/pages/login.php';
    });
  }
  
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/NeonNewsDefinitivo/pages/login.php';
    });
  }
});


