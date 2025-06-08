'use strict'

// Ya no necesitamos los elementos porque ahora se renderizan desde PHP
// pero mantenemos la funcionalidad para cargar posts del usuario

async function loadUserPosts() {
    try {
        // Obtener posts del usuario actual
        const response = await axios.get('/NeonNewsDefinitivo/api.php');
        const posts = response.data;
        
        // Obtener datos del usuario desde la sesión
        const userResponse = await axios.get('/NeonNewsDefinitivo/users.php?action=session');
        if (!userResponse.data.logged) {
            window.location.href = '/NeonNewsDefinitivo/pages/login.php';
            return;
        }
        
        const currentUserId = userResponse.data.id_user;
        
        // Filtrar posts del usuario actual
        const userPosts = posts.filter(post => post.id_user == currentUserId);
        
        // Si no hay posts, mostrar mensaje
        if (userPosts.length === 0) {
            const postsContainer = document.querySelector('.mt-15');
            if (postsContainer) {
                postsContainer.innerHTML = `
                    <div class="text-center text-(--NeonGrey) text-xl">
                        <p>Aún no has publicado ningún post.</p>
                        <a href="/NeonNewsDefinitivo/pages/create-post.php" class="text-(--NeonBlanco) hover:text-(--NeonGrey) underline">
                            ¡Crear tu primer post!
                        </a>
                    </div>
                `;
            }
            return;
        }
        
        // Renderizar posts del usuario
        const postsContainer = document.querySelector('.mt-15');
        if (postsContainer) {
            postsContainer.innerHTML = userPosts.map(post => `
                <div class="xl:ms-60 flex flex-col xl:flex-row mb-15 gap-5 md:gap-10 mx-10">
                    <a href="/NeonNewsDefinitivo/pages/post.php?id=${post.id}" class="inline-block w-fit">
                        <div class="noticiaReciente flex flex-col border-b-3 border-b-(--PlayBlue) p-7 md:p-10 items-start bg-neutral-900 rounded-4xl shadow-[10px_10px_30px_10px_rgba(0,0,0,0.5)]">
                            <!-- Imagen Noticia -->
                            <div class="self-center aspect-video w-full overflow-hidden rounded-lg bg-cover bg-center" 
                                 style="background-image: url('/NeonNewsDefinitivo/img/${post.img}')"></div>
                            <div class="contextoPost lg:flex lg:flex-col lg:items-start lg:justify-start mt-3">
                                <h5 class="pt-2 lg:text-2xl">${post.title}</h5>
                                <!-- info post -->
                                <div class="info flex items-center self-start gap-2">
                                    <div class="videojuego flex items-center">
                                        <p class="textInfo lg:text-xl">${post.category}</p>
                                        <img src="/NeonNewsDefinitivo/img/${post.category}.svg" alt="iconoVideojuego" class="size-10">
                                    </div>
                                    <div class="date">
                                        <p class="textInfo lg:text-xl">${formatDate(post.created_at)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- ACCIONES CRUD -->
                    <div class="flex flex-row xl:flex-col justify-end md:justify-center gap-5 md:gap-10">
                        <!-- EDITAR -->
                        <button onclick="editPost(${post.id})" class="bg-neutral-900 rounded-full h-20 w-20 md:h-40 md:w-40 border-1 md:border-2 border-(--NeonGrey) shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] p-2 md:p-5 hover:bg-(--NeonGrey) cursor-pointer">
                            <svg class="w-full h-full text-(--NeonBlanco)" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                            </svg>
                        </button>
                        <!-- BORRAR -->
                        <button onclick="deletePost(${post.id})" class="bg-neutral-900 rounded-full h-20 w-20 md:h-40 md:w-40 border-1 md:border-2 border-(--NeonGrey) shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] p-2 md:p-5 hover:bg-red-600 cursor-pointer">
                            <svg class="w-full h-full text-(--NeonBlanco)" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('');
        }
        
    } catch (error) {
        console.error('Error cargando posts del usuario:', error);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    
    if (diffHours < 24) {
        return `${diffHours}h`;
    } else {
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays}d`;
    }
}

function editPost(postId) {
    window.location.href = `/NeonNewsDefinitivo/pages/edit-post.php?id=${postId}`;
}

async function deletePost(postId) {
    if (confirm('¿Estás seguro de que quieres eliminar este post?')) {
        try {
            const response = await axios.delete(`/NeonNewsDefinitivo/api.php?id=${postId}`);
            if (response.status === 200) {
                alert('Post eliminado correctamente');
                loadUserPosts(); // Recargar posts
            }
        } catch (error) {
            alert('Error al eliminar el post');
            console.error('Error:', error);
        }
    }
}

// Cargar posts cuando se carga la página
window.addEventListener('DOMContentLoaded', loadUserPosts);
