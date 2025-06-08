'use strict'

const perfilbg = document.querySelector('#perfilbg');
const perfilimg = document.querySelector('#perfilimg');
const perfilname = document.querySelector('#perfilname');
const perfiltext = document.querySelector('#perfiltext');

async function perfil() {
    const response = await axios.get('/NeonNewsApi/users.php');
    const users = response.data;
    const user = users.find(post => post.id == 1);
 


        perfilbg.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('../img/${user.img_bg}')`;
        perfilbg.style.backgroundSize = 'cover';
        perfilbg.style.backgroundPosition = 'center';
        perfilbg.style.backgroundAttachment = 'fixed';
        perfilimg.style.backgroundImage = `url('../img/${user.img_profile}')`;
        perfilname.textContent = user.name;
        perfiltext.textContent = user.bio;

}

window.onload = perfil;

// --- VERIFICACIÓN DE SESIÓN DESDE JS ---
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await axios.get('/NeonNewsApi/users.php?action=session');
    if (!res.data.logged) {
      window.location.href = '/pages/login.html';
      return;
    }
  } catch (e) {
    window.location.href = '/pages/login.html';
  }
});
