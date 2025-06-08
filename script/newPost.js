// newPost.js - Manejo de la creación de nuevos posts
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newPostForm');
    const statusMessage = document.getElementById('statusMessage');
    
    // Si no existe el formulario nuevo, usar el botón antiguo
    if (!form) {
        const publishBtn = document.getElementById('publish');
        if (publishBtn) {
            publishBtn.addEventListener('click', handleLegacyPublish);
        }
        return;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const title = document.getElementById('title').value.trim();
        const category = document.getElementById('category').value;
        const image = document.getElementById('image').value.trim();
        const content = document.getElementById('content').value.trim();
        
        // Validación básica
        if (!title || !category || !content) {
            showMessage('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }
        
        // Preparar datos para enviar
        const postData = {
            title: title,
            category: category,
            img: image || 'default-post.jpg', // imagen por defecto si no se especifica
            content: content
        };
        
        try {
            showMessage('Publicando post...', 'info');
            
            // Enviar datos a la API
            const response = await fetch('/NeonNewsDefinitivo/api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                showMessage('¡Post publicado exitosamente!', 'success');
                // Redireccionar después de 2 segundos
                setTimeout(() => {
                    window.location.href = '/NeonNewsDefinitivo/index.php';
                }, 2000);
            } else {
                showMessage('Error al publicar el post: ' + (result.message || 'Error desconocido'), 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Error de conexión al publicar el post.', 'error');
        }
    });
    
    function showMessage(message, type) {
        statusMessage.className = `mt-6 p-4 rounded-lg ${getMessageClasses(type)}`;
        statusMessage.textContent = message;
        statusMessage.classList.remove('hidden');
        
        // Ocultar después de 5 segundos si no es mensaje de info
        if (type !== 'info') {
            setTimeout(() => {
                statusMessage.classList.add('hidden');
            }, 5000);
        }
    }
    
    function getMessageClasses(type) {
        switch (type) {
            case 'success':
                return 'bg-green-700 text-white border border-green-600';
            case 'error':
                return 'bg-red-700 text-white border border-red-600';
            case 'info':
                return 'bg-blue-700 text-white border border-blue-600';
            default:
                return 'bg-gray-700 text-white border border-gray-600';
        }
    }
});

// Función para manejar el botón de publicar del sistema anterior (Quill.js)
async function handleLegacyPublish() {
    // Verificar si Quill está disponible
    if (typeof quill === 'undefined') {
        alert('Error: Editor no inicializado');
        return;
    }
    
    const title = document.getElementById('title').value.trim();
    const category = document.getElementById('category').value;
    const content = quill.root.innerHTML; // Obtener HTML del editor Quill
    const imageFile = document.getElementById('img')?.files[0];
    
    if (!title || !category || !content || content === '<p><br></p>') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Si hay archivo de imagen, necesitaríamos subirlo primero
    let imageName = 'default-post.jpg';
    if (imageFile) {
        // Aquí podrías implementar la subida de archivo
        console.log('Archivo de imagen seleccionado:', imageFile.name);
        imageName = imageFile.name;
    }
    
    const postData = {
        title: title,
        category: category,
        img: imageName,
        content: content
    };
    
    try {
        const response = await fetch('/NeonNewsDefinitivo/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            alert('¡Post publicado exitosamente!');
            window.location.href = '/NeonNewsDefinitivo/index.php';
        } else {
            alert('Error al publicar el post: ' + (result.message || 'Error desconocido'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión al publicar el post.');
    }
}
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
