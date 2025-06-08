// Asegura que el código se ejecute cuando el DOM esté listo y el footer esté presente
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('footer');
  if (!footer) return;

  // Redirección de botones a login.html
  const registerBtn = footer.querySelector('#footer-register');
  const loginBtn = footer.querySelector('#footer-login');

  // --- Lógica de sesión y botones ---
  axios.get('/NeonNewsApi/users.php?action=session').then(res => {
    const logged = res.data.logged;
    if (logged) {
      // Oculta login/registro
      if (registerBtn) registerBtn.style.display = 'none';
      if (loginBtn) loginBtn.style.display = 'none';
      // Muestra botón logout
      let logoutBtn = footer.querySelector('#footer-logout');
      if (!logoutBtn) {
        logoutBtn = document.createElement('button');
        logoutBtn.id = 'footer-logout';
        logoutBtn.type = 'button';
        logoutBtn.textContent = 'Cerrar Sesión';
        logoutBtn.className = 'w-[40vw] lg:w-[15vw] bg-red-600 text-white rounded-lg py-1 my-6 hover:bg-red-800 transition';
        logoutBtn.onclick = async (e) => {
          e.preventDefault();
          await axios.get('/NeonNewsApi/logout.php');
          window.location.href = '/pages/login.html';
        };
        const btnContainer = footer.querySelector('.botones');
        if (btnContainer) btnContainer.appendChild(logoutBtn);
      }
    } else {
      // Muestra login/registro, oculta logout
      if (registerBtn) registerBtn.style.display = '';
      if (loginBtn) loginBtn.style.display = '';
      const logoutBtn = footer.querySelector('#footer-logout');
      if (logoutBtn) logoutBtn.remove();
    }
  });

  if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/pages/login.html';
    });
  }
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/pages/login.html';
    });
  }
});


