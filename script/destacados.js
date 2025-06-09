'use strict';

let destacadosUsers = {};
let currentDestacadoPost = null;

//Icono de categoría 
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

//COlor del borde
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

function getDestacadoImagePath(imageName) {
    if (!imageName) return '/NeonNewsDefinitivo/img/default-post.png';
    
    if (imageName.startsWith('post_')) {
        return `/NeonNewsDefinitivo/img/posts/${imageName}`;
    }
    
    return `/NeonNewsDefinitivo/img/${imageName}`;
}


function getDestacadoUserImagePath(imageName) {
    if (!imageName || imageName === 'default_profile.jpg') {
        return '/NeonNewsDefinitivo/img/usuario.webp';
    }
    
    return `/NeonNewsDefinitivo/img/${imageName}`;
}


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

//Porque no me da tiempo pero deberia hacer un archivo functions con Exports porque estoy repitiendolas por la cara
async function loadDestacadosUsers() {
    try {
        console.log('Cargando usuarios desde API...');
        const response = await axios.get('/NeonNewsDefinitivo/users.php');
        
        if (response.data && Array.isArray(response.data)) {
            destacadosUsers = {};
            response.data.forEach(user => {
                destacadosUsers[user.id] = user;
            });
        } else {
            console.log(response.data);
        }
    } catch (error) {

        try {
            const alternativeResponse = await axios.get('./users.php');
            //SI no compruebo array se me lia no se de donde sale el error
            if (alternativeResponse.data && Array.isArray(alternativeResponse.data)) {
                destacadosUsers = {};
                alternativeResponse.data.forEach(user => {
                    destacadosUsers[user.id] = user;
                });
            }
        } catch (alternativeError) {
            console.error('Error también en ruta alternativa:', alternativeError);
        }
    }
}

//Aleatorio Post
async function getRandomPostByCategory(category = null) {
    try {
        let url = '/NeonNewsDefinitivo/api.php';
        if (category) {
            url += `?category=${encodeURIComponent(category)}`;
        }
        
        const response = await axios.get(url);
        const posts = response.data;
        
        if (posts && posts.length > 0) {
            const randomNumero = Math.floor(Math.random() * posts.length);
            return posts[randomNumero];
        }
        //Si null me voy al default
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}


function updateDestacadoContent(post) {
    if (!post) return;
    
    currentDestacadoPost = post;
    console.log('Actualizando destacado con post:', post);
    
 
    const user = destacadosUsers[post.id_user] || {};
    console.log('Usuario encontrado para id_user', post.id_user, ':', user);
    

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
    
    //PECHa de iffs para cubrirme que se me corte el js
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

    if (destacadoCard) {
        const borderColor = getCategoryBorderColor(post.category);
        destacadoCard.style.borderBottomColor = borderColor;
        destacadoCard.style.borderRightColor = borderColor;
    }
    

    if (destacadoLink) {
        destacadoLink.href = `pages/post.php?id=${post.id}`;
    }
}




//Cambio
function addTransitionAnimation() {
    const destacadoCard = document.querySelector('#destacadoCard');
    if (destacadoCard) {
        destacadoCard.style.transition = 'all 0.3s ease-in-out';
    }
}

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


function setupCategoryListeners() {
    const categoryElements = document.querySelectorAll('[data-category]');
    
    categoryElements.forEach(element => {
        element.addEventListener('click', async (e) => {
            e.preventDefault();
            const category = element.getAttribute('data-category');
            addCategoryClickEffect(element);
            const randomPost = await getRandomPostByCategory(category);
            if (randomPost) {
                updateDestacadoContent(randomPost);
            }
        });
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.2s ease-in-out';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
}

async function loadInitialDestacado() {
    const randomPost = await getRandomPostByCategory();
    if (randomPost) {
        updateDestacadoContent(randomPost);
    }
}


async function initDestacados() {
    try {
        addTransitionAnimation();       
        await loadDestacadosUsers();
        await loadInitialDestacado();       
        setupCategoryListeners();
        
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', initDestacados);
