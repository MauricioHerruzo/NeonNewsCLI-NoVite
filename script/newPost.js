//EL wysywig
let quill;

document.addEventListener('DOMContentLoaded', function() {
    initializeQuillEditor();
    
    const form = document.getElementById('newPostForm');
    const statusMessage = document.getElementById('statusMessage');
    
    if (!form) {
        const publishBtn = document.getElementById('publish');
        if (publishBtn) {
            publishBtn.addEventListener('click', handleLegacyPublish);
        }
        setupCreatePostButton();
        return;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const title = document.getElementById('title').value.trim();
        const category = document.getElementById('category').value;
        const image = document.getElementById('image').value.trim();
        const content = document.getElementById('content').value.trim();
        
        if (!title || !category || !content) {
            showMessage('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }
        
        const postData = {
            title: title,
            category: category,
            img: image || 'default-post.jpg',
            content: content
        };
        
        try {
            showMessage('Publicando post...', 'info');
            
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

function initializeQuillEditor() {
    
    const editorContainer = document.getElementById('editor');
    const toolbarContainer = document.getElementById('editor-toolbar');
    
    if (!editorContainer && !toolbarContainer) {
        return;
    }

    //HACER EL QUILL
    try {
        quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: '#editor-toolbar'
            },
            placeholder: 'Escribe el contenido de tu post aquí...',
            formats: ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link']
        });

        
        setTimeout(() => {
            const qlEditor = document.querySelector('.ql-editor');
            if (qlEditor) {
                qlEditor.style.color = '#ffffff';
                qlEditor.style.backgroundColor = '#171717';
                qlEditor.style.minHeight = '200px';
            }
        }, 100);
        
    } catch (error) {
        console.error(error);
    }
}

function setupCreatePostButton() {
    const btn = document.getElementById('btn-crear-post');
    //NO se como de buena práctica es esto pero va increible para quitarse de errores
    if (!btn) {
        return;
    }
    
    btn.addEventListener('click', async () => {
        await handleCreatePost();
    });
}

async function handleCreatePost() {
    if (typeof quill === 'undefined' || !quill) {
        return;
    }
    
    const title = document.getElementById('title').value.trim();
    const imgInput = document.getElementById('img');
    const imgFile = imgInput?.files[0];
    const content = quill.root.innerHTML.trim();
    const category = document.getElementById('category').value;
    
    if (!title || !content || !category) {
        alert('Por favor, rellena todos los campos');
        return;
    }    

    const formData = new FormData();
    formData.append('title', title);
    if (imgFile) {
        formData.append('img', imgFile);
    }
    formData.append('content', content);
    formData.append('category', category);

    try {
        
        const response = await axios.post('/NeonNewsDefinitivo/api.php', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        if (response.data.success) {
            alert('¡Post creado correctamente!');
            //Mover fuera del post
            window.location.href = '/NeonNewsDefinitivo/index.php';
        } else {
            alert(response.data.error);
        }
    } catch (err) {
        console.error(err);
    }
}

//COñazo el wywisyg he sacado esta funcion de por ahí que lo maneja porque es horroso
async function handleLegacyPublish() {
    if (typeof quill === 'undefined' || !quill) {
        return;
    }
    
    const title = document.getElementById('title').value.trim();
    const category = document.getElementById('category').value;
    const content = quill.root.innerHTML;
    const imageFile = document.getElementById('img')?.files[0];
    
    if (!title || !category || !content || content === '<p><br></p>') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    let imageName = 'default-post.jpg';
    if (imageFile) {
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
        console.error( error);

    }
}
