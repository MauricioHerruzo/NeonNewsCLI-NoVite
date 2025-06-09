let quill;
let currentPostData = null;
let postId = null;

document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    postId = urlParams.get('id');
    
    if (!postId) {
        console.error('❌ No se encontró ID del post en la URL');
        showError('Error: No se especificó qué post actualizar.');
        return;    }
    
    
    initializeQuillEditor();
    setupEventListeners();
    loadPostData();
});

function initializeQuillEditor() {
    
    const editorContainer = document.getElementById('editor');
    const toolbarContainer = document.getElementById('editor-toolbar');
    
    if (!editorContainer) {
        console.error("❌ Contenedor del editor #editor no encontrado!");
        return;
    }
    
    if (!toolbarContainer) {
        console.error("❌ Contenedor de toolbar #editor-toolbar no encontrado!");
        return;
    }    try {
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
        console.error("❌ Error inicializando Quill:", error);
    }
}

function setupEventListeners() {
    const updateBtn = document.getElementById('btn-actualizar-post');
    if (updateBtn) {
        updateBtn.addEventListener('click', handleUpdatePost);
    }
    
    const form = document.getElementById('updatePostForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleUpdatePost();
        });
    }
}

async function loadPostData() {
    showLoading(true);
    
    try {
        const response = await axios.get(`/NeonNewsDefinitivo/api.php?id=${postId}`);
        
        if (response.data && response.data.success !== false) {
            currentPostData = response.data;
            populateForm();
        } else {
            console.error('❌ Error al cargar post:', response.data);
            showError('Error al cargar los datos del post.');
        }
    } catch (error) {
        console.error('❌ Error de conexión al cargar post:', error);
        showError('Error de conexión al cargar los datos del post.');
    } finally {
        showLoading(false);
    }
}

function populateForm() {
    
    if (!currentPostData) {
        console.error('❌ No hay datos del post para llenar el formulario');
        return;
    }
    
    const titleInput = document.getElementById('title');
    if (titleInput) {
        titleInput.value = currentPostData.title || '';    }
    
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        categorySelect.value = currentPostData.category || '';
    }
    
    if (quill && currentPostData.content) {
        setTimeout(() => {
            quill.root.innerHTML = currentPostData.content;
        }, 200);
    }
    
    showCurrentImage();
    
}

function showCurrentImage() {
    const currentImageContainer = document.getElementById('currentImageContainer');
    const currentImagePreview = document.getElementById('currentImagePreview');
    
    if (currentPostData && currentPostData.img && currentImagePreview) {
        let imagePath;
        if (currentPostData.img.startsWith('post_')) {
            imagePath = `/NeonNewsDefinitivo/img/posts/${currentPostData.img}`;
        } else {
            imagePath = `/NeonNewsDefinitivo/img/${currentPostData.img}`;
        }
        
        currentImagePreview.style.backgroundImage = `url('${imagePath}')`;
        
        if (currentImageContainer) {
            currentImageContainer.classList.remove('hidden');
        }
        
    }
}

async function handleUpdatePost() {
    
    if (!quill) {
        showError('Error: Editor no inicializado');
        return;
    }
    
    const title = document.getElementById('title').value.trim();
    const category = document.getElementById('category').value;
    const content = quill.root.innerHTML.trim();
    const imgInput = document.getElementById('img');
    const imgFile = imgInput?.files[0];
    
    if (!title || !category || !content) {
        showError('Por favor, completa todos los campos obligatorios (título, categoría y contenido).');
        return;
    }
    
    if (content === '<p><br></p>' || content === '') {
        showError('Por favor, escribe el contenido del post.');        return;
    }
      
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);
    formData.append('_method', 'PUT');
    
    if (imgFile) {
        formData.append('img', imgFile);
    }
      try {
        showLoading(true);
        
        const response = await axios.post(`/NeonNewsDefinitivo/api.php?id=${postId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        
        if (response.data && response.data.success) {
            alert('¡Post actualizado correctamente!');
            window.location.href = '/NeonNewsDefinitivo/pages/perfil.php';
        } else {
            const errorMsg = response.data?.error || response.data?.message || 'Error desconocido al actualizar el post';
            console.error('❌ Error de la API:', errorMsg);
            alert('Error al actualizar el post: ' + errorMsg);
        }    } catch (error) {
        console.error("❌ Error de conexión:", error);
        let errorMessage = 'Error de conexión al actualizar el post.';
        
        if (error.response) {
            errorMessage = error.response.data?.error || error.response.data?.message || errorMessage;
        }
        
        alert(errorMessage);
    } finally {
        showLoading(false);
    }
}

function showLoading(show) {
    const loadingContainer = document.getElementById('loadingContainer');
    const formContainer = document.getElementById('formContainer');
    
    if (loadingContainer) {
        if (show) {
            loadingContainer.classList.remove('hidden');
            loadingContainer.classList.add('flex');
        } else {
            loadingContainer.classList.add('hidden');
            loadingContainer.classList.remove('flex');
        }
    }
    
    if (formContainer) {
        if (show) {
            formContainer.classList.add('hidden');
            formContainer.classList.remove('flex');
        } else {
            formContainer.classList.remove('hidden');
            formContainer.classList.add('flex');
        }
    }
}

function showError(message) {
    console.error('❌ Error:', message);
    
    const errorContainer = document.getElementById('errorContainer');
    const errorMessage = document.getElementById('errorMessage');
    
    if (errorContainer && errorMessage) {
        errorMessage.textContent = message;
        errorContainer.classList.remove('hidden');
        errorContainer.classList.add('flex');
        
        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        setTimeout(() => {
            errorContainer.classList.add('hidden');
            errorContainer.classList.remove('flex');
        }, 10000);
    } else {
        alert(message);
    }
}
