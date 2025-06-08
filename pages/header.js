// Asegura que el código se ejecute cuando el DOM esté listo y el header esté presente
window.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('headerHome');
  if (header) {
    // Lógica de sesión y UI usuario
    axios.get('/NeonNewsApi/users.php?action=session').then(async res => {
      const logged = res.data.logged;
      const id_user = res.data.id_user;
      // Oculta/enseña enlaces según sesión
      const loginLinks = header.querySelectorAll('a[href="/pages/login.html"]');
      const profilePCs = header.querySelectorAll('#profilePC');
      if (logged) {
        // Oculta login/registro
        loginLinks.forEach(link => link.style.display = 'none');
        // Muestra botón logout
        let logoutBtn = header.querySelector('#logoutBtn');
        if (!logoutBtn) {
          logoutBtn = document.createElement('a');
          logoutBtn.id = 'logoutBtn';
          logoutBtn.textContent = 'Cerrar Sesión';
          logoutBtn.className = 'w-[40vw] xl:w-[10vw] bg-red-600 text-white rounded-xl xl:py-3 text-lg flex items-center justify-center cursor-pointer hover:bg-red-800 transition';
          logoutBtn.style.marginLeft = '8px';
          logoutBtn.onclick = async (e) => {
            e.preventDefault();
            await axios.get('/NeonNewsApi/logout.php');
            window.location.href = '/pages/login.html';
          };
          // Inserta el botón después de los enlaces
          const userUi = header.querySelector('.basis-3/8.items-center');
          if (userUi) userUi.insertBefore(logoutBtn, userUi.lastElementChild);
        }
        // Cambia imagen perfil si hay usuario
        if (id_user) {
          try {
            const userRes = await axios.get(`/NeonNewsApi/users.php?id=${id_user}`);
            const user = userRes.data;
            profilePCs.forEach(div => {
              div.style.backgroundImage = `url('/img/posts/${user.img_profile}')`;
            });
          } catch {}
        }
      } else {
        // Muestra login/registro, oculta logout
        loginLinks.forEach(link => link.style.display = '');
        const logoutBtn = header.querySelector('#logoutBtn');
        if (logoutBtn) logoutBtn.remove();
        // Imagen por defecto
        profilePCs.forEach(div => {
          div.style.backgroundImage = "url('/NeonNewsDefinitivo/img/perfil.svg')";
        });
      }
    });

    // Listener para el footer (si existe)
    function addFooterListeners() {
      const footer = document.getElementById('footer');
      if (footer) {
        // Elimina listeners previos correctamente
        const newProfilePCs = header.querySelectorAll('#profilePC');
        newProfilePCs.forEach(profile => {
          // Elimina todos los listeners previos (reemplazando el nodo)
          const clean = profile.cloneNode(true);
          profile.parentNode.replaceChild(clean, profile);
        });
        // Selecciona de nuevo tras limpiar
        const finalProfilePCs = header.querySelectorAll('#profilePC');
        finalProfilePCs.forEach(profile => {
          profile.addEventListener('click', (e) => {
            footer.classList.remove('translate-x-full');
            footer.classList.add('translate-x-0');
            e.stopPropagation();
          });
        });
      } else {
        setTimeout(addFooterListeners, 100);
      }
    }
    addFooterListeners();
  }
});

