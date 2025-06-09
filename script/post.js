'use strict'

const postText = document.querySelector("#postText");
const bannerPost = document.querySelector("#bannerPost");
const title = document.querySelector("h1");
const gameTitle = document.querySelector("#gameTitle");
const gameIcon = document.querySelector("#gameIcon");
const userIcon = document.querySelector("#userIcon");
const userName = document.querySelector("#userName");
const imgPost = document.querySelector("#postImg");

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getImagePath(imageName) {
    if (!imageName) return '/NeonNewsDefinitivo/img/default-post.png';
    
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

function processContent(content) {
    if (!content) return '';
    
    let processed = content;
    
    processed = processed.replace(/\r\n\r\n/g, '<br><br>');
    processed = processed.replace(/\r\n/g, '<br>');
    processed = processed.replace(/\n/g, '<br>');
    if (processed.includes('&lt;') || processed.includes('&gt;') || processed.includes('&amp;')) {
        processed = processed.replace(/&lt;/g, '<');
        processed = processed.replace(/&gt;/g, '>');
        processed = processed.replace(/&amp;/g, '&');
        processed = processed.replace(/&quot;/g, '"');
        processed = processed.replace(/&#39;/g, "'");
    }
    
    return processed;
}

async function loadPost() {
    try {
        const postId = getUrlParameter('id');
        
        if (!postId) {
            console.error('❌ No se proporcionó ID del post');
            showError('No se especificó el post a mostrar.');
            return;
        }
        
        const response = await axios.get('/NeonNewsDefinitivo/api.php');
        const posts = response.data;
        const post = posts.find(p => p.id == postId);
        
        if (!post) {
            console.error('❌ Post no encontrado');
            showError('El post solicitado no existe.');
            return;
        }        
        const userResponse = await axios.get(`/NeonNewsDefinitivo/users.php?id=${post.id_user}`);
        const user = userResponse.data;
        
        if (!user) {
            console.error('❌ Usuario no encontrado');
            showError('Error cargando datos del usuario.');    
                    return;
        }
        
        renderPost(post, user);
        
    } catch (error) {
        console.error('❌ Error cargando post:', error);
        showError('Error cargando el contenido del post.');
    }
}

function renderPost(post, user) {
    const processedContent = processContent(post.content);
    
    const postImagePath = getImagePath(post.img);
    const categoryIconName = getCategoryIcon(post.category);
    const userImagePath = user.img_profile ? `/NeonNewsDefinitivo/img/${user.img_profile}` : '/NeonNewsDefinitivo/img/usuario.webp';
    

    if (postText) {
        postText.innerHTML = processedContent;
    }
    
    if (bannerPost) {
        bannerPost.style.backgroundImage = `url('${postImagePath}')`;
    }
    
    if (title) {
        title.textContent = post.title;
    }
    
    if (gameTitle) {
        gameTitle.textContent = post.category;
    }    if (gameIcon) {
        gameIcon.src = `/NeonNewsDefinitivo/img/${categoryIconName}`;
        gameIcon.style.backgroundImage = 'none';
    }
    
    if (userIcon) {
        userIcon.style.backgroundImage = `url('${userImagePath}')`;
    }
    
    if (userName) {
        userName.textContent = user.name;
    }
    
    if (imgPost) {
        imgPost.style.backgroundImage = `url('${postImagePath}')`;
        imgPost.style.backgroundSize = 'cover';
        imgPost.style.backgroundPosition = 'center';
        imgPost.style.backgroundRepeat = 'no-repeat';    }
    
    document.title = `${post.title} - NeonNews`;
}

function showError(message) {
    if (postText) {
        postText.innerHTML = `<p class="text-red-500 text-center">${message}</p>`;
    }
    
    if (title) {
        title.textContent = 'Error';
    }
}

window.addEventListener('DOMContentLoaded', loadPost);