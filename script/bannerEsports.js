'use strict';

let allPosts = [];
let currentPostIndex = 0;
let bannerInterval = null;
let users = {};
let isFirstLoad = true;

function getBannerImagePath(imageName) {
    if (!imageName) return '/NeonNewsDefinitivo/img/default-post.png';
    
    if (imageName.startsWith('post_')) {
        return `/NeonNewsDefinitivo/img/posts/${imageName}`;
    }
    
    return `/NeonNewsDefinitivo/img/${imageName}`;
}

function getBannerCategoryIcon(category) {
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

function formatTimeAgo(dateString) {
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

async function loadAllPosts() {
    try {
        console.log('🔄 Cargando posts de eSports para el banner...');
        const response = await axios.get('/NeonNewsDefinitivo/api.php');
        const allPostsFromAPI = response.data;
        
        const esportsCategories = ['Lol', 'CS2', 'Valorant', 'Overwatch'];
        allPosts = allPostsFromAPI.filter(post => 
            esportsCategories.includes(post.category)
        );
        
        if (!allPosts || allPosts.length === 0) {
            console.warn('⚠️ No se encontraron posts de eSports para el banner');
            showDefaultBanner();
            return false;
        }
        
        console.log(`✅ ${allPosts.length} posts de eSports cargados para el banner`);
        return true;
    } catch (error) {
        console.error('❌ Error cargando posts de eSports para banner:', error);
        showDefaultBanner();
        return false;
    }
}

async function loadUsers() {
    try {
        console.log('🔄 Cargando usuarios para el banner...');
        const response = await axios.get('/NeonNewsDefinitivo/users.php');
        const usersArray = response.data;
        
        users = {};
        usersArray.forEach(user => {
            users[user.id] = user;
        });
        
        console.log(`✅ ${usersArray.length} usuarios cargados para el banner`);
    } catch (error) {
        console.error('❌ Error cargando usuarios para banner:', error);
        users = {};
    }
}

function getUserName(userId) {
    return users[userId]?.name || 'Usuario Desconocido';
}

function getUserImage(userId) {
    const userImg = users[userId]?.img_profile;
    if (userImg) {
        return `/NeonNewsDefinitivo/img/${userImg}`;
    }
    return '/NeonNewsDefinitivo/img/usuario.webp';
}

function showDefaultBanner() {
    const bannerSection = document.getElementById('bannerEsports');
    const bannerLink = document.getElementById('bannerA');
    
    if (bannerSection && bannerLink) {
        if (!bannerSection.style.transition) {
            bannerSection.style.transition = 'opacity 0.6s ease-in-out';
        }
        
        bannerSection.style.opacity = '0';
        
        setTimeout(() => {
            bannerLink.href = '#';
            bannerSection.className = "bg-[url(./img/valorant-banner.jpg)] bg-cover bg-center w-full h-150 md:h-200 content-end border-b-3 border-(--NeonGrey) lg:h-[90vh]";
            
            bannerSection.innerHTML = `
                <div class="w-full fondoBanner lg:p-6 px-4 lg:px-20">
                    <h1 class="lg:text-6xl">Últimas noticias de eSports</h1>   
                    <div class="info flex items-center gap-1 pb-2 lg:h-[10vh]">
                        <div class="videojuego flex items-center">
                            <p class="lg:text-3xl hidden lg:block">eSports</p>
                            <img src="/NeonNewsDefinitivo/img/Play.svg" alt="iconoEsports" class="size-10 lg:size-20">
                        </div>
                        <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15 bg-[url(/NeonNewsDefinitivo/img/usuario.webp)] bg-cover bg-center"></div>
                        <div class="date lg:flex lg:gap-3">
                            <p class="lg:hidden">Ahora</p>
                            <p class="hidden lg:block lg:text-3xl">NeonNews</p>
                            <p class="hidden lg:block lg:text-3xl lg:font-light">eSports</p>
                        </div>
                    </div>  
                </div>
            `;
            
            setTimeout(() => {
                bannerSection.style.opacity = '1';
            }, 50);
            
        }, 300);
    }
}

function updateBanner(post, skipTransition = false) {
    const bannerSection = document.getElementById('bannerEsports');
    const bannerLink = document.getElementById('bannerA');
    
    if (!bannerSection || !bannerLink || !post) {
        console.error('❌ No se encontraron elementos del banner o post inválido');
        return;
    }
    
    const imagePath = getBannerImagePath(post.img);
    const categoryIcon = getBannerCategoryIcon(post.category);
    const timeAgo = formatTimeAgo(post.created_at);
    const userName = getUserName(post.id_user);
    const userImage = getUserImage(post.id_user);
    
    if (skipTransition || isFirstLoad) {
        bannerLink.href = `/NeonNewsDefinitivo/pages/post.php?id=${post.id}`;
        
        bannerSection.className = "bg-cover bg-center w-full h-150 md:h-200 content-end border-b-3 border-(--NeonGrey) lg:h-[90vh]";
        bannerSection.style.backgroundImage = `url('${imagePath}')`;
        bannerSection.style.opacity = '1';
        bannerSection.style.transition = 'opacity 0.6s ease-in-out';
        
        bannerSection.innerHTML = `
            <div class="w-full fondoBanner lg:p-6 px-4 lg:px-20">
                <h1 class="lg:text-6xl">${post.title}</h1>   
                <div class="info flex items-center gap-1 pb-2 lg:h-[10vh]">
                    <div class="videojuego flex items-center">                        <p class="lg:text-3xl hidden lg:block">${post.category}</p>
                        <img src="/NeonNewsDefinitivo/img/${categoryIcon}" alt="icono${post.category}" class="size-10 lg:size-20">
                    </div>
                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15 bg-cover bg-center" 
                         style="background-image: url('${userImage}')"></div>
                    <div class="date lg:flex lg:gap-3">
                        <p class="lg:hidden">${timeAgo}</p>
                        <p class="hidden lg:block lg:text-3xl">${userName}</p>
                        <p class="hidden lg:block lg:text-3xl lg:font-light">Hace ${timeAgo}</p>
                    </div>
                </div>  
            </div>
        `;
        
        isFirstLoad = false;
        console.log(`🎨 Banner de eSports actualizado (primera carga) con post: "${post.title}"`);
        return;
    }
    
    if (!bannerSection.style.transition) {
        bannerSection.style.transition = 'opacity 0.6s ease-in-out';
    }
    
    bannerSection.style.opacity = '0';
    
    setTimeout(() => {
        bannerLink.href = `/NeonNewsDefinitivo/pages/post.php?id=${post.id}`;
        
        bannerSection.className = "bg-cover bg-center w-full h-150 md:h-200 content-end border-b-3 border-(--NeonGrey) lg:h-[90vh]";
        bannerSection.style.backgroundImage = `url('${imagePath}')`;
        
        bannerSection.innerHTML = `
            <div class="w-full fondoBanner lg:p-6 px-4 lg:px-20">
                <h1 class="lg:text-6xl">${post.title}</h1>   
                <div class="info flex items-center gap-1 pb-2 lg:h-[10vh]">
                    <div class="videojuego flex items-center">                        <p class="lg:text-3xl hidden lg:block">${post.category}</p>
                        <img src="/NeonNewsDefinitivo/img/${categoryIcon}" alt="icono${post.category}" class="size-10 lg:size-20">
                    </div>
                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15 bg-cover bg-center" 
                         style="background-image: url('${userImage}')"></div>
                    <div class="date lg:flex lg:gap-3">
                        <p class="lg:hidden">${timeAgo}</p>
                        <p class="hidden lg:block lg:text-3xl">${userName}</p>
                        <p class="hidden lg:block lg:text-3xl lg:font-light">Hace ${timeAgo}</p>
                    </div>
                </div>  
            </div>
        `;
        
        setTimeout(() => {
            bannerSection.style.opacity = '1';
        }, 50);
        
    }, 300);
    
    console.log(`🎨 Banner de eSports actualizado con post: "${post.title}"`);
}

function nextPost() {
    if (!allPosts || allPosts.length === 0) {
        console.warn('⚠️ No hay posts de eSports disponibles para el banner');
        return;
    }
    
    currentPostIndex = (currentPostIndex + 1) % allPosts.length;
    const currentPost = allPosts[currentPostIndex];
    updateBanner(currentPost);
    
    console.log(`📍 Banner de eSports mostrando post ${currentPostIndex + 1}/${allPosts.length}`);
}

function startBannerCarousel() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
    }
    
    if (!allPosts || allPosts.length === 0) {
        console.warn('⚠️ No se puede iniciar carrusel: no hay posts de eSports');
        return;
    }
    
    updateBanner(allPosts[currentPostIndex]);
    
    if (allPosts.length > 1) {
        bannerInterval = setInterval(nextPost, 10000);
        console.log('🔄 Carrusel de banner de eSports iniciado (10s por post)');
    } else {
        console.log('📌 Solo hay un post de eSports, banner estático');
    }
}

function stopBannerCarousel() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
        console.log('⏹️ Carrusel de banner de eSports detenido');
    }
}

async function initBanner() {
    try {
        console.log('🚀 Inicializando banner dinámico de eSports...');
        
        await loadUsers();
        
        const postsLoaded = await loadAllPosts();
        
        if (postsLoaded) {
            startBannerCarousel();
        }
        
        console.log('✅ Banner dinámico de eSports inicializado');
        
    } catch (error) {
        console.error('❌ Error inicializando banner de eSports:', error);
        showDefaultBanner();
    }
}

async function reloadBannerPosts() {
    console.log('🔄 Recargando posts de eSports del banner...');
    stopBannerCarousel();
    const postsLoaded = await loadAllPosts();
    
    if (postsLoaded) {
        currentPostIndex = 0;
        isFirstLoad = true;
        startBannerCarousel();
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('👁️ Página oculta, pausando banner de eSports');
        stopBannerCarousel();
    } else {
        console.log('👁️ Página visible, reanudando banner de eSports');
        if (allPosts && allPosts.length > 1) {
            startBannerCarousel();
        }
    }
});

window.bannerEsportsDebug = {
    reloadPosts: reloadBannerPosts,
    nextPost: nextPost,
    stopCarousel: stopBannerCarousel,
    startCarousel: startBannerCarousel,
    getCurrentPost: () => allPosts[currentPostIndex],
    getAllPosts: () => allPosts
};

document.addEventListener('DOMContentLoaded', initBanner);
