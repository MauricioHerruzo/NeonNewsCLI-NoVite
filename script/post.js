'use strict'

const postText = document.querySelector("#postText");
const bannerPost = document.querySelector("#bannerPost");
const title = document.querySelector("h1");
const gameTitle = document.querySelector("#gameTitle");
const gameIcon = document.querySelector("#gameIcon");
const userIcon = document.querySelector("#userIcon");
const userName = document.querySelector("#userName");
const imgPost = document.querySelector("#postImg");


async function post() {
    // POST 
    const response = await axios.get('/NeonNewsApi/api.php');
    const posts = response.data;
    const post = posts.find(post => post.id == 1);
    // USER 
    const response2 = await axios.get('/NeonNewsApi/users.php');
    const users = response2.data;
    const user = users.find(user => user.id == post.id_user);
    
    
    postText.textContent = post.content
    bannerPost.style.backgroundImage = `url('../img/${post.img}')`;
    title.textContent = post.title
    gameTitle.textContent = post.category
    gameIcon.src = `../img/${post.category}.svg`
    userIcon.style.backgroundImage = `url('../img/${user.img_profile}')`;
    userName.textContent = user.name;


    if (imgPost) {
        imgPost.style = `background: url('/NeonNewsDefinitivo/img/${post.img}') center center / cover no-repeat`;
    }

    
    
}
// console.log("HOla")
window.onload = post();