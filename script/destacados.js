'use strict';

let destacadosUsers = {};
let currentDestacadoPost = null;

// Función para obtener el ícono de categoría (reutilizada del banner.js)
function getDestacadoCategoryIcon(category) {
    const icons = {
        'PlayStation': 'Play.svg',
        'Xbox': 'Xbox.svg', 
        'Nintendo': 'Nintendo.svg',
        'PC': 'PC.svg',
        'Overwatch': 'Overwatch.svg',
        'LoL': 'LoL.svg',
        'Valorant': 'Valorant.svg',
        'eSports': 'PC.svg'
    };
    return icons[category] || 'Nintendo.svg';
}

// Función para obtener el color del borde según la categoría
function getCategoryBorderColor(category) {
    const colors = {
        'PlayStation': 'var(--PlayBlue)',
        'Xbox': 'green-500',
        'Nintendo': 'var(--NintendoRed)',
        'PC': 'var(--PCPurple)',
        'Overwatch': 'var(--OverwatchOrange)',
        'LoL': 'var(--LoLGold)',
        'Valorant': 'var(--ValorantRed)',
        'eSports': 'var(--PCPurple)'
    };
    return colors[category] || 'var(--NintendoRed)';
}

// Función para obtener imagen del post
function getDestacadoImagePath(imageName) {
    if (!imageName) return '/NeonNewsDefinitivo/img/default-post.png';
    
    if (imageName.startsWith('post_')) {
        return `/NeonNewsDefinitivo/img/posts/${imageName}`;
    }
    
    return `/NeonNewsDefinitivo/img/${imageName}`;
}

// Función para obtener imagen del usuario
function getDestacadoUserImagePath(imageName) {
    if (!imageName || imageName === 'default_profile.jpg') {
        return '/NeonNewsDefinitivo/img/usuario.webp';
    }
    
    // Mismo comportamiento que en banner.js
    return `/NeonNewsDefinitivo/img/${imageName}`;
}

// Función para formatear tiempo relativo
function formatDestacadoTimeAgo(dateString) {
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

// Función para cargar usuarios
async function loadDestacadosUsers() {
    try {
        console.log('Cargando usuarios desde API...');
        const response = await axios.get('/NeonNewsDefinitivo/users.php');
        
        if (response.data && Array.isArray(response.data)) {
            destacadosUsers = {};
            response.data.forEach(user => {
                destacadosUsers[user.id] = user;
            });
            console.log('Usuarios cargados exitosamente:', Object.keys(destacadosUsers).length, 'usuarios');
        } else {
            console.warn('La respuesta no contiene un array de usuarios:', response.data);
        }
    } catch (error) {
        console.error('Error cargando usuarios para destacados:', error);
        // Intentar cargar desde ruta alternativa si falla
        try {
            const alternativeResponse = await axios.get('./users.php');
            if (alternativeResponse.data && Array.isArray(alternativeResponse.data)) {
                destacadosUsers = {};
                alternativeResponse.data.forEach(user => {
                    destacadosUsers[user.id] = user;
                });
                console.log('Usuarios cargados desde ruta alternativa:', Object.keys(destacadosUsers).length, 'usuarios');
            }
        } catch (alternativeError) {
            console.error('Error también en ruta alternativa:', alternativeError);
        }
    }
}

// Función para obtener un post aleatorio de una categoría específica
async function getRandomPostByCategory(category = null) {
    try {
        let url = '/NeonNewsDefinitivo/api.php';
        if (category) {
            url += `?category=${encodeURIComponent(category)}`;
        }
        
        const response = await axios.get(url);
        const posts = response.data;
        
        if (posts && posts.length > 0) {
            // Seleccionar un post aleatorio
            const randomNumero = Math.floor(Math.random() * posts.length);
            return posts[randomNumero];
        }
        
        return null;
    } catch (error) {
        console.error('Error obteniendo post aleatorio:', error);
        return null;
    }
}

// Función para actualizar el contenido del destacado
function updateDestacadoContent(post) {
    if (!post) return;
    
    currentDestacadoPost = post;
    console.log('Actualizando destacado con post:', post);
    
    // Buscar usuario correspondiente
    const user = destacadosUsers[post.id_user] || {};
    console.log('Usuario encontrado para id_user', post.id_user, ':', user);
    
    // Actualizar elementos del DOM
    const destacadoImage = document.querySelector('#destacadoImage');
    const destacadoTitle = document.querySelector('#destacadoTitle');
    const destacadoCategory = document.querySelector('#destacadoCategory');
    const destacadoCategoryIcon = document.querySelector('#destacadoCategoryIcon');
    const destacadoUserImage = document.querySelector('#destacadoUserImage');
    const destacadoUserName = document.querySelector('#destacadoUserName');
    const destacadoTime = document.querySelector('#destacadoTime');
    const destacadoCard = document.querySelector('#destacadoCard');
    const destacadoLink = document.querySelector('#destacadoLink');    if (destacadoImage) {
        destacadoImage.src = getDestacadoImagePath(post.img);
        destacadoImage.alt = post.title || 'Imagen del post';
    }
    
    if (destacadoTitle) {
        destacadoTitle.textContent = post.title || 'Sin título';
    }
    
    if (destacadoCategory) {
        destacadoCategory.textContent = post.category || 'General';
    }
    
    if (destacadoCategoryIcon) {
        destacadoCategoryIcon.src = `/NeonNewsDefinitivo/img/${getDestacadoCategoryIcon(post.category)}`;
        destacadoCategoryIcon.alt = `Icono ${post.category}`;
    }
    
    if (destacadoUserImage) {
        const userImageSrc = getDestacadoUserImagePath(user.img_profile || user.img);
        destacadoUserImage.src = userImageSrc;
        destacadoUserImage.alt = user.name || user.username || 'Usuario';
        console.log('Imagen de usuario asignada:', userImageSrc);
    }
    
    if (destacadoUserName) {
        const userName = user.name || user.username || 'Usuario desconocido';
        destacadoUserName.textContent = userName;
        console.log('Nombre de usuario asignado:', userName);
    }
    
    if (destacadoTime) {
        destacadoTime.textContent = formatDestacadoTimeAgo(post.created_at || new Date());
    }
      // Actualizar color del borde según la categoría
    if (destacadoCard) {
        // Aplicar estilo inline para el color del borde según la categoría
        const borderColor = getCategoryBorderColor(post.category);
        destacadoCard.style.borderBottomColor = borderColor;
        destacadoCard.style.borderRightColor = borderColor;
    }
    
    // Actualizar el enlace del post
    if (destacadoLink) {
        destacadoLink.href = `pages/post.php?id=${post.id}`;
    }
}

// Función para mostrar estado de carga
function showLoadingState() {
    const destacadoCard = document.querySelector('#destacadoCard');
    if (destacadoCard) {
        destacadoCard.style.opacity = '0.7';
        destacadoCard.style.pointerEvents = 'none';
    }
}

// Función para ocultar estado de carga
function hideLoadingState() {
    const destacadoCard = document.querySelector('#destacadoCard');
    if (destacadoCard) {
        destacadoCard.style.opacity = '1';
        destacadoCard.style.pointerEvents = 'auto';
    }
}

// Función para agregar animación de transición al cambiar contenido
function addTransitionAnimation() {
    const destacadoCard = document.querySelector('#destacadoCard');
    if (destacadoCard) {
        destacadoCard.style.transition = 'all 0.3s ease-in-out';
    }
}

// Función para agregar efectos visuales al hacer clic en categorías
function addCategoryClickEffect(categoryElement) {
    // Remover efecto de otros elementos
    const allCategories = document.querySelectorAll('.categoriaVideojuego');
    allCategories.forEach(cat => {
        cat.style.transform = '';
        cat.style.transition = 'transform 0.2s ease-in-out';
    });
    
    // Agregar efecto al elemento seleccionado
    if (categoryElement) {
        categoryElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            categoryElement.style.transform = '';
        }, 200);
    }
}

// Función para configurar event listeners de categorías
function setupCategoryListeners() {
    const categoryElements = document.querySelectorAll('[data-category]');
    
    categoryElements.forEach(element => {
        element.addEventListener('click', async (e) => {
            e.preventDefault();
            const category = element.getAttribute('data-category');
            
            // Efecto visual
            addCategoryClickEffect(element);
            
            // Mostrar estado de carga
            showLoadingState();
            
            // Cargar nuevo post
            const randomPost = await getRandomPostByCategory(category);
            if (randomPost) {
                updateDestacadoContent(randomPost);
            }
            
            // Ocultar estado de carga
            hideLoadingState();
        });
          // Agregar efecto hover
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.2s ease-in-out';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
}

// Función para cargar el post inicial (aleatorio de todas las categorías)
async function loadInitialDestacado() {
    const randomPost = await getRandomPostByCategory();
    if (randomPost) {
        updateDestacadoContent(randomPost);
    }
}

// Función principal de inicialización
async function initDestacados() {
    try {
        console.log('Iniciando sistema de destacados...');
        
        // Agregar animación de transición
        addTransitionAnimation();
        
        // Cargar usuarios primero
        console.log('Cargando usuarios...');
        await loadDestacadosUsers();
        
        // Debug: mostrar usuarios cargados
        console.log('Usuarios disponibles:', destacadosUsers);
        
        // Cargar post inicial
        console.log('Cargando post inicial...');
        await loadInitialDestacado();
        
        // Configurar event listeners
        setupCategoryListeners();
        
        console.log('Sistema de destacados inicializado correctamente');
        
        // Debug adicional después de cargar el post inicial
        setTimeout(() => {
            console.log('Post actual:', currentDestacadoPost);
            if (currentDestacadoPost) {
                console.log('Usuario del post:', destacadosUsers[currentDestacadoPost.id_user]);
            }
        }, 1000);
        
    } catch (error) {
        console.error('Error inicializando sistema de destacados:', error);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initDestacados);
