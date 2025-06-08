'use strict'

const postText = document.querySelector("#postText");
const bannerPost = document.querySelector("#bannerPost");
const title = document.querySelector("h1");
const gameTitle = document.querySelector("#gameTitle");
const gameIcon = document.querySelector("#gameIcon");
const userIcon = document.querySelector("#userIcon");
const userName = document.querySelector("#userName");
const imgPost = document.querySelector("#postImg");

// Función para procesar el contenido de la base de datos (no la he hecho yo, viene de internet)
function processContent(content) {
    if (!content) return '';
    
    let processed = content;
    
    // Convertir saltos de línea de la BD a HTML
    // Dobles saltos de línea = párrafos separados
    processed = processed.replace(/\r\n\r\n/g, '<br><br>');
    // Saltos simples = <br>
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
//FUncion pintar el post
async function post() {
    try {
        // POST 
        const response = await axios.get('/NeonNewsApi/api.php');
        const posts = response.data;
        const post = posts.find(post => post.id == 1);
        
        // USER 
        const response2 = await axios.get('/NeonNewsApi/users.php');
        const users = response2.data;
        const user = users.find(user => user.id == post.id_user);
        
        if (!post) {
            console.error('Post no encontrado');
            return;
        }
        
        if (!user) {
            console.error('Usuario no encontrado');
            return;
        }
        

        const processedContent = processContent(post.content);
        postText.innerHTML = processedContent;
        

        bannerPost.style.backgroundImage = `url('/NeonNewsDefinitivo/img/${post.img}')`;
        title.textContent = post.title;
        gameTitle.textContent = post.category;
        gameIcon.src = `/NeonNewsDefinitivo/img/${post.category}.svg`;
        userIcon.style.backgroundImage = `url('/NeonNewsDefinitivo/img/${user.img_profile}')`;
        userName.textContent = user.name;

        if (imgPost) {
            imgPost.style.backgroundImage = `url('/NeonNewsDefinitivo/img/${post.img}')`;
            imgPost.style.backgroundSize = 'cover';
            imgPost.style.backgroundPosition = 'center';
            imgPost.style.backgroundRepeat = 'no-repeat';
        }
        
    } catch (error) {
        console.error('Error cargando post:', error);
        postText.innerHTML = '<p>Error cargando el contenido del post.</p>';
    }
}

//Ejecutar
window.addEventListener('DOMContentLoaded', post);