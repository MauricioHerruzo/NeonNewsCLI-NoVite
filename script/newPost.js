document.addEventListener('DOMContentLoaded', () => {
  //Verificación de sesion (la parte del Js)
  //
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

  //Quill para el wysywig
  const quill = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Escribe el contenido del post...',
    modules: {
      toolbar: '#editor-toolbar'
    }
  });

  const btn = document.getElementById('btn-crear-post');
  btn.addEventListener('click', async () => {
    const title = document.getElementById('title').value.trim();
    const imgInput = document.getElementById('img');
    const imgFile = imgInput.files[0];
    const content = quill.root.innerHTML.trim();
    const category = document.getElementById('category').value;
    //La idea la crea la base de datos
    //Validación
    if (!title || !imgFile || !content || !category) {
      alert('Por favor, rellena todos los campos y selecciona una imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('img', imgFile);
    formData.append('content', content);
    formData.append('category', category);


    try {
      const response = await axios.post('/NeonNewsApi/api.php', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (response.data.success) {
        alert('¡Post creado correctamente!');
        window.location.href = '/pages/post.html?id=' + response.data.id;
      } else {
        alert('Error al crear el post: ' + (response.data.error || 'Error desconocido.'));
      }
    } catch (err) {
      alert('Error al conectar con la API.');
      console.error(err);
    }
  });
});
