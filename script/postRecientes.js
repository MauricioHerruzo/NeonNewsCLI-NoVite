'use strict';

console.log('🚀 postRecientes.js cargado');


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
        'Valorant': 'Valorant.svg',
        'eSports': 'PC.svg' 
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


function createNoticiaCard(post, user, index) {
    const postImagePath = getImagePath(post.img);
    const categoryIcon = getCategoryIcon(post.category);
    const userImagePath = user.img_profile ? `/NeonNewsDefinitivo/img/${user.img_profile}` : '/NeonNewsDefinitivo/img/usuario.webp';
    const formattedDate = formatDate(post.created_at);
    

    const bgClass = index % 2 === 1 ? 'bg-neutral-950' : '';
    
    return `
        <a href="pages/post.php?id=${post.id}" class="w-full">
            <div class="noticiaReciente flex flex-col w-full px-5 border-b-3 border-b-(--NeonBlanco) py-6 lg:px-[5vw] lg:flex-row lg:gap-10 items-start justify-start ${bgClass}">
                <!-- Imagen Noticia -->
                <div class="aspect-video overflow-hidden rounded-lg lg:w-[30vw]">
                    <img src="${postImagePath}" alt="${post.title}" class="w-full h-full object-cover">
                </div>
                <div class="contextoPost lg:flex lg:flex-col lg:items-start lg:justify-start">
                    <h5 class="pt-2 lg:text-2xl">${post.title}</h5>
                    <!-- info post -->
                    <div class="info flex items-center self-start gap-2">
                        <div class="videojuego flex items-center">
                            <p class="textInfo lg:text-xl">${post.category}</p>
                            <img src="/NeonNewsDefinitivo/img/${categoryIcon}" alt="icono${post.category}" class="size-10">
                        </div>
                        <!-- icono usuario -->
                        <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden">
                            <img src="${userImagePath}" alt="usuario${user.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="date">
                            <p class="textInfo lg:text-xl">${formattedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `;
}


async function loadPostRecientes() {
    try {
        console.log('📰 Cargando posts recientes...');
        
      
        const postsResponse = await axios.get('/NeonNewsDefinitivo/api.php');
        const posts = postsResponse.data;
        
        if (!posts || posts.length === 0) {
            console.warn('⚠️ No hay posts disponibles');
            return;
        }
        
        console.log(`📊 ${posts.length} posts encontrados`);
        
        const noticiasContainer = document.getElementById('noticiasContainer');
        if (!noticiasContainer) {
            console.error('❌ Container #noticiasContainer no encontrado');
            return;
        }
        
      
        noticiasContainer.innerHTML = '';
        
   
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            
            try {
                
                const userResponse = await axios.get(`/NeonNewsDefinitivo/users.php?id=${post.id_user}`);
                const user = userResponse.data;
                
                if (!user) {
                    console.warn(`⚠️ Usuario no encontrado para post ${post.id}`);
                    continue;
                }
                
      
                const noticiaHTML = createNoticiaCard(post, user, i);
                noticiasContainer.innerHTML += noticiaHTML;
                
                console.log(`✅ Post ${post.id} añadido (${i + 1}/${posts.length})`);
                
            } catch (userError) {
                console.error(`❌ Error cargando usuario para post ${post.id}:`, userError);
                // 
                continue;
            }
        }
        
        console.log('🎉 Posts recientes cargados exitosamente');
        
    } catch (error) {
        console.error('❌ Error cargando posts recientes:', error);
        
   
        const noticiasContainer = document.getElementById('noticiasContainer');
        if (noticiasContainer) {
            noticiasContainer.innerHTML = `
                <div class="w-full text-center py-10">
                    <p class="text-red-500 text-lg">Error cargando las noticias recientes</p>
                    <p class="text-gray-400 text-sm">Por favor, intenta recargar la página</p>
                </div>
            `;
        }
    }
}


async function reloadPostRecientes() {
    await loadPostRecientes();
}


window.addEventListener('DOMContentLoaded', () => {
    console.log('🏠 DOMContentLoaded - Inicializando posts recientes...');
    loadPostRecientes();
});

window.PostRecientes = {
    load: loadPostRecientes,
    reload: reloadPostRecientes
};
