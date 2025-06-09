'use strict'

let currentUser = null;

function getImagePath(imageName) {    if (!imageName) return '/NeonNewsDefinitivo/img/default-post.png';
    
    if (imageName.startsWith('post_')) {
        return `/NeonNewsDefinitivo/img/posts/${imageName}`;
    }
    
    return `/NeonNewsDefinitivo/img/${imageName}`;
}

function getCategoryIcon(category) {
    const icons = {
        'PlayStation': 'Play.svg',
        'Xbox': 'Xbox.svg', 
        'Nintendo': 'Nintendo.svg',
        'PC': 'PC.svg',
        'Overwatch': 'Overwatch.svg',
        'LoL': 'LoL.svg',
        'Valorant': 'Valorant.svg',        'eSports': 'PC.svg'
    };
    return icons[category] || 'PC.svg';
}

async function loadCurrentUser() {
    try {
        const response = await axios.get('/NeonNewsDefinitivo/users.php?action=session');
        
        if (!response.data.logged) {
            window.location.href = '/NeonNewsDefinitivo/pages/login.php';            return null;
        }
        
        const userResponse = await axios.get(`/NeonNewsDefinitivo/users.php?id=${response.data.id_user}`);
        currentUser = userResponse.data;
        
        return currentUser;
        
    } catch (error) {
        console.error('❌ Error cargando usuario:', error);
        return null;
    }
}

function renderUserProfile(user) {
    
    const profileContainer = document.getElementById('profileContainer');
    const perfilbg = document.getElementById('perfilbg');
    
    if (!profileContainer) {
        console.error('❌ No se encontró el contenedor del perfil');        return;
    }
    
    if (user.img_bg) {
        perfilbg.style.backgroundImage = `url('/NeonNewsDefinitivo/img/${user.img_bg}')`;
    }
    
    profileContainer.innerHTML = `
        <div class="bg-neutral-900 rounded-full h-50 w-50 md:h-70 md:w-70 border-2 md:border-4 border-(--NeonGrey) shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] p-5">
            <div class="rounded-full bg-cover bg-center w-full h-full cursor-pointer hover:opacity-80 transition-opacity" id="perfilimg" 
                 style="background-image: url('/NeonNewsDefinitivo/img/${user.img_profile || 'usuario.webp'}')"></div>
        </div>
        <h3 class="border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonGrey) p-2 rounded-full shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] bg-neutral-900 lg:text-5xl lg:py-6 lg:px-15 flex justify-center text-center mt-10 mx-5 cursor-pointer hover:bg-neutral-800 transition-colors" id="perfilname">${user.name || 'Usuario'}</h3>        <p class="w-auto p-5 rounded-full shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] bg-neutral-900 mb-10 lg:text-xl lg:py-6 lg:px-15 flex justify-center text-center mt-10 font-normal md:w-[800px] mx-5 cursor-pointer hover:bg-neutral-800 transition-colors" id="perfiltext">${user.bio || 'No hay biografía disponible.'}</p>
    `;
    
    setupProfileEditEvents();
}

function setupProfileEditEvents() {
    const profileImg = document.getElementById('perfilimg');
    const profileName = document.getElementById('perfilname');    const profileText = document.getElementById('perfiltext');
    
    if (profileImg) {
        profileImg.addEventListener('click', () => {
        });
    }
    
    if (profileName) {
        profileName.addEventListener('click', () => {
        });
    }
    
    if (profileText) {
        profileText.addEventListener('click', () => {
        });
    }
}

async function loadUserPosts() {    try {
        const response = await axios.get('/NeonNewsDefinitivo/api.php');
        const posts = response.data;
        
        if (!currentUser) {
            console.error('❌ No hay usuario actual cargado');
            return;
        }
        
        const userPosts = posts.filter(post => post.id_user == currentUser.id);
        
        renderUserPosts(userPosts);
        
    } catch (error) {
        console.error('❌ Error cargando posts:', error);
        showError('Error cargando posts. Por favor, recarga la página.');
    }
}

function renderUserPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    
    if (!postsContainer) {
        console.error('❌ No se encontró el contenedor de posts');        return;
    }
    
    if (posts.length === 0) {
        postsContainer.innerHTML = `
            <div class="text-center text-(--NeonGrey) text-xl">
                <p>Aún no has publicado ningún post.</p>
                <a href="/NeonNewsDefinitivo/pages/newPost.php" class="text-(--NeonBlanco) hover:text-(--NeonGrey) ">
                    ¡Crear tu primer post!
                </a>
            </div>        `;
        return;
    }
      
    if (!document.getElementById('profilePostStyles')) {
        const style = document.createElement('style');
        style.id = 'profilePostStyles';
        style.textContent = `
            #postsContainer {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 100vw;
                padding: 0 10px;
            }
            
            .post-container {
                display: flex;
                flex-direction: column;
                margin-bottom: 40px;
                gap: 20px;
                margin: 0 10px 40px 10px;
                align-items: center;
            }              .post-card {
                display: flex;
                flex-direction: column;
                border-bottom: 3px solid var(--PlayBlue);
                padding: 20px;
                align-items: flex-start;
                background-color: #171717;
                border-radius: 24px;
                box-shadow: 10px 10px 30px 10px rgba(0,0,0,0.5);
                transition: transform 0.3s ease;
                width: 320px;
                max-width: 320px;
                cursor: pointer;
                min-height: 280px;
                height: 280px;
            }
            
            .post-card:hover {
                transform: scale(1.02);
            }
            
            .post-image {
                align-self: center;
                aspect-ratio: 16/9;
                width: 100%;
                height: 140px;
                overflow: hidden;
                border-radius: 8px;
                background-position: center;
                background-size: cover;
                background-color: #262626;
            }              .post-content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-top: 12px;
                width: 100%;
            }              .post-title {
                padding-top: 0;
                font-size: 1rem;
                word-wrap: break-word;
                overflow-wrap: break-word;
                width: 100%;
                color: white;
                margin: 0 0 8px 0;
                line-height: 1.3;
            }
              .post-info {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 8px;
                width: 100%;
                padding-top: 0;
            }
            
            .info-item {
                display: flex;
                align-items: center;
                gap: 6px;
                min-width: fit-content;
            }
            
            .info-text {
                font-size: 0.75rem;
                white-space: nowrap;
                color: #d1d5db;
                margin: 0;
            }
            
            .info-icon {
                width: 20px;
                height: 20px;
                flex-shrink: 0;
            }
            
            .user-avatar {
                position: relative;
                border-radius: 50%;
                border: 1px solid var(--NeonBlanco);
                width: 20px;
                height: 20px;
                overflow: hidden;
                background-size: cover;
                background-position: center;
                flex-shrink: 0;
            }
            
            .user-name {
                font-size: 0.75rem;
                white-space: nowrap;
                color: #d1d5db;
                margin: 0;
                text-overflow: ellipsis;
                overflow: hidden;
                max-width: 80px;
            }
              .actions-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 15px;
                align-self: center;
            }
            
            .action-button {
                background-color: #171717;
                border-radius: 50%;
                height: 60px;
                width: 60px;
                border: 2px solid var(--NeonGrey);
                box-shadow: 20px 20px 40px 5px rgba(0,0,0,0.7);
                padding: 12px;
                transition: border-color 0.3s ease;
                cursor: pointer;
            }
            
            .action-button:hover.edit-btn {
                border-color: #3b82f6;
            }
            
            .action-button:hover.delete-btn {
                border-color: #ef4444;
            }
            
            .action-icon {
                width: 100%;
                height: 100%;
                color: var(--NeonBlanco);
            }              /* Tablet styles */
            @media (min-width: 768px) {
                .post-container {
                    margin: 0 20px 50px 20px;
                    gap: 30px;
                }                  .post-card {
                    padding: 35px;
                    border-radius: 32px;
                    width: 550px;
                    max-width: 550px;
                    min-height: 340px;
                    height: 340px;
                }
                
                .post-image {
                    height: 220px;
                }
                
                .post-title {
                    font-size: 1.375rem;
                    line-height: 1.4;
                }
                
                .info-text, .user-name {
                    font-size: 0.9375rem;
                }
                
                .info-icon, .user-avatar {
                    width: 26px;
                    height: 26px;
                }
                
                .user-name {
                    max-width: none;
                }
                
                .action-button {
                    height: 90px;
                    width: 90px;
                    padding: 18px;
                }
                
                .actions-container {
                    gap: 25px;
                }
            }            /* Desktop styles */
            @media (min-width: 1024px) {
                .post-container {
                    margin: 0 30px 60px 30px;
                    gap: 35px;
                }                  .post-card {
                    width: 650px;
                    max-width: 650px;
                    padding: 40px;
                    min-height: 480px;
                    height: 480px;
                }
                
                .post-image {
                    height: 260px;
                }
                
                .post-title {
                    font-size: 1.625rem;
                    line-height: 1.5;
                }
                
                .info-text, .user-name {
                    font-size: 1.0625rem;
                }
                
                .info-icon, .user-avatar {
                    width: 30px;
                    height: 30px;
                }
                
                .action-button {
                    height: 110px;
                    width: 110px;
                    padding: 22px;
                }
                
                .actions-container {
                    gap: 30px;
                }
            }            /* XL Desktop styles */
            @media (min-width: 1280px) {
                #postsContainer {
                    padding: 0 20px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                
                .post-container {
                    flex-direction: row;
                    margin: 0 auto 10px auto;
                    gap: 45px;
                    align-items: stretch;
                    justify-content: center;
                    max-width: 1200px;
                    width: 100%;
                }.post-card {
                    width: 700px;
                    max-width: 700px;
                    padding: 45px;
                    min-height: 480px;
                    height: 480px;
                    flex: 1;
                }
                
                .post-image {
                    height: 300px;
                }
                
                .post-title {
                    font-size: 1.75rem;
                    line-height: 1.6;
                }
                
                .info-text, .user-name {
                    font-size: 1.125rem;
                }
                
                .info-icon, .user-avatar {
                    width: 32px;
                    height: 32px;
                }
                
                .action-button {
                    height: 120px;
                    width: 120px;
                    padding: 24px;
                }
                
                .actions-container {
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 35px;
                    align-self: stretch;
                    min-width: 120px;
                }
            }            /* XXL Desktop styles */
            @media (min-width: 1536px) {
                #postsContainer {
                    padding: 0 40px;
                    max-width: 1600px;
                    margin: 0 auto;
                }
                
                .post-container {
                    margin: 0 auto 80px auto;
                    gap: 50px;
                    max-width: 1400px;
                    width: 100%;
                }.post-card {
                    width: 800px;
                    max-width: 800px;
                    padding: 50px;
                    min-height: 520px;
                    height: 520px;
                }
                
                .post-image {
                    height: 340px;
                }
                
                .post-title {
                    font-size: 2rem;
                    line-height: 1.7;
                }
                
                .info-text, .user-name {
                    font-size: 1.25rem;
                }
                
                .info-icon, .user-avatar {
                    width: 36px;
                    height: 36px;
                }
                
                .action-button {
                    height: 140px;
                    width: 140px;
                    padding: 28px;
                }
                
                .actions-container {
                    gap: 40px;
                    min-width: 140px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    let postsHTML = '';
    posts.forEach(post => {
        const imagePath = getImagePath(post.img);
        const categoryIcon = getCategoryIcon(post.category);
        
        postsHTML += `
            <div class="post-container">
                <a href="/NeonNewsDefinitivo/pages/post.php?id=${post.id}" style="display: inline-block;">
                    <div class="post-card">
                        <!-- Imagen Noticia -->
                        <div class="post-image" style="background-image: url('${imagePath}');" 
                             onerror="this.style.backgroundImage='url(/NeonNewsDefinitivo/img/default-post.png)'"></div>                        <div class="post-content">
                            <h5 class="post-title">${post.title}</h5>
                            <div class="post-info">
                                <div class="info-item">
                                    <p class="info-text">${post.category}</p>
                                    <img src="/NeonNewsDefinitivo/img/${categoryIcon}" alt="icono${post.category}" class="info-icon">
                                </div>
                                <div class="info-item">
                                    <div class="user-avatar" style="background-image: url('/NeonNewsDefinitivo/img/${currentUser.img_profile || 'usuario.webp'}')"></div>
                                    <p class="user-name">${currentUser.name}</p>
                                </div>
                                <div class="info-item">
                                    <p class="info-text">${formatDate(post.created_at)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="actions-container">
                    <button onclick="editPost(${post.id})" class="action-button edit-btn">
                        <svg class="action-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>                        </svg>
                    </button>
                    <button onclick="deletePost(${post.id})" class="action-button delete-btn">
                        <svg class="action-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    });
      postsContainer.innerHTML = postsHTML;
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
    window.location.href = `/NeonNewsDefinitivo/pages/updatePost.php?id=${postId}`;
}

async function deletePost(postId) {
    if (!confirm('¿Estás seguro de que quieres eliminar este post?')) {
        return;
    }
    
    try {
        const response = await axios.delete(`/NeonNewsDefinitivo/api.php?id=${postId}`);        
        if (response.status === 200) {
            await loadUserPosts();
        }
    } catch (error) {
        console.error('❌ Error eliminando post:', error);
        alert('Error al eliminar el post');
    }
}

function showError(message) {
    const postsContainer = document.getElementById('postsContainer');
    if (postsContainer) {
        postsContainer.innerHTML = `
            <div class="text-center text-red-500 text-xl">
                <p>${message}</p>
            </div>
        `;
    }
}

async function initProfile() {
    
    const user = await loadCurrentUser();
    if (!user) {
        console.error('❌ No se pudo cargar el usuario');
        return;
    }
    
    renderUserProfile(user);
    
    await loadUserPosts();
    
}

document.addEventListener('DOMContentLoaded', initProfile);
