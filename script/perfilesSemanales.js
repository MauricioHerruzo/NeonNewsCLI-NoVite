'use strict';

let perfilesUsers = {};
let perfilesPosts = {};

function getPerfilCategoryIcon(category) {
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
    return icons[category] || 'PC.svg';
}

function getPerfilImagePath(imageName) {
    if (!imageName) return '/NeonNewsDefinitivo/img/default-post.png';
    
    if (imageName.startsWith('post_')) {
        return `/NeonNewsDefinitivo/img/posts/${imageName}`;
    }
    
    return `/NeonNewsDefinitivo/img/${imageName}`;
}

function getPerfilUserImagePath(imageName) {
    if (!imageName || imageName === 'default_profile.jpg') {
        return '/NeonNewsDefinitivo/img/usuario.webp';
    }
    
    return `/NeonNewsDefinitivo/img/${imageName}`;
}

function formatPerfilTimeAgo(dateString) {
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

async function loadPerfilesUsers() {
    try {
        console.log('Cargando usuarios para perfiles semanales...');
        const response = await axios.get('/NeonNewsDefinitivo/users.php');
        
        if (response.data && Array.isArray(response.data)) {
            perfilesUsers = {};
            response.data.forEach(user => {
                perfilesUsers[user.id] = user;
            });
        }
    } catch (error) {
        console.error(error);
        try {
            const alternativeResponse = await axios.get('./users.php');
            if (alternativeResponse.data && Array.isArray(alternativeResponse.data)) {
                perfilesUsers = {};
                alternativeResponse.data.forEach(user => {
                    perfilesUsers[user.id] = user;
                });
            }
        } catch (error) {

        }
    }
}

async function loadPerfilesPosts() {
    try {

        const response = await axios.get('/NeonNewsDefinitivo/api.php');
        
        if (response.data && Array.isArray(response.data)) {
            perfilesPosts = response.data;

        } else {
            console.log(response.data);
        }
    } catch (error) {
        console.error(error);
    }
}

function getRandomUsers(count = 3) {    const userIds = Object.keys(perfilesUsers);
    const selectedUsers = [];
    
    const availableIds = [...userIds];
    
    for (let i = 0; i < count && availableIds.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableIds.length);
        const userId = availableIds.splice(randomIndex, 1)[0];
        selectedUsers.push(perfilesUsers[userId]);
    }
    
    return selectedUsers;
}

//definitivamente habria que hacer un functions
function getPostsByUser(userId, count = 3) {    const userPosts = perfilesPosts.filter(post => post.id_user == userId);
    
    const shuffled = userPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function createMiniPostCard(post, user) {
    const categoryIcon = getPerfilCategoryIcon(post.category);    const timeAgo = formatPerfilTimeAgo(post.created_at);
    const imagePath = getPerfilImagePath(post.img);
      
    return `
        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4 sombraTarjetas cursor-pointer justify-around" onclick="navigateToPost(${post.id})">
            <img src="${imagePath}" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">${post.title}</h5>
            <div class="flex items-center gap-2">
                <img src="/NeonNewsDefinitivo/img/${categoryIcon}" alt="${post.category}" class="w-8 h-8">
                <span class="text-xs text-white">${timeAgo}</span>
            </div>
        </div>
    `;
}

function updatePerfil(perfilNumber, user, posts) {
    const perfilImg = document.querySelector(`#perfil${perfilNumber}img`);
    const perfilName = document.querySelector(`#perfil${perfilNumber}name`);
    const perfilPosts = document.querySelector(`#perfil${perfilNumber}posts`);
    
    if (perfilImg) {
        const userImagePath = getPerfilUserImagePath(user.img_profile);
        perfilImg.style.backgroundImage = `url('${userImagePath}')`;
    }
    
    if (perfilName) {
        perfilName.textContent = user.name || 'Usuario';
    }
      if (perfilPosts) {
        perfilPosts.innerHTML = '';
        
        posts.forEach(post => {
            perfilPosts.innerHTML += createMiniPostCard(post, user);
        });
    }
}

async function loadPerfilesSemanales() {
    try {       
        
        await loadPerfilesUsers();
        await loadPerfilesPosts();
        
        console.log('Datos cargados:', {
            usuarios: Object.keys(perfilesUsers).length,            posts: perfilesPosts.length
        });
        
        if (Object.keys(perfilesUsers).length === 0 || perfilesPosts.length === 0) {
            return;
        }
        
        const randomUsers = getRandomUsers(3);

        
        for (let i = 0; i < randomUsers.length && i < 3; i++) {
            const user = randomUsers[i];
            const userPosts = getPostsByUser(user.id, 3);

            
            const postsToShow = userPosts.length > 0 ? userPosts : perfilesPosts.slice(0, 3);
            
            updatePerfil(i + 1, user, postsToShow);
        }
        
       
        
    } catch (error) {

    }
}

function navigateToPost(postId) {
    if (postId) {
        window.location.href = `pages/post.php?id=${postId}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {    console.log('🚀 Perfiles Semanales: DOM cargado, iniciando...');
    console.log('Verificando elementos en el DOM...');
    
    for (let i = 1; i <= 3; i++) {
        const perfilImg = document.querySelector(`#perfil${i}img`);
        const perfilName = document.querySelector(`#perfil${i}name`);
        const perfilPosts = document.querySelector(`#perfil${i}posts`);
        
        console.log(`Perfil ${i}:`, {
            img: !!perfilImg,
            name: !!perfilName,
            posts: !!perfilPosts
        });
    }
    
    loadPerfilesSemanales();
});