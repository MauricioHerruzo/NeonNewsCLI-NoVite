<?php include_once('pages/header.php')?>
    <!-- main  -->
    <main class="overflow-x-hidden">
        <!-- carousel noticias  -->
        <a href="pages/post.php" id="bannerA">
        <section id="banner" class="bg-[url(./img/xA4gk3bz.png)] bg-cover bg-center w-full h-150 md:h-200 content-end  border-b-3 border-(--NeonGrey) lg:h-screen "> 

            <div class="w-full fondoBanner lg:p-6 px-4 lg:px-20">
            <h1 class=" lg:text-6xl">Midseason patch de Overwatch 2</h1>   
            <!-- usuario/plataforma/date  -->
            <div class="info flex items-center gap-1  pb-2 lg:h-[10vh]" >
                <div class="videojuego flex items-center ">
                    <p class="lg:text-3xl hidden lg:block">Overwatch</p>
                    <img src="img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-20">
                </div>
                <!-- icono usuario  -->
                <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15 bg-[url(/img/xA4gk3bz.png)] bg-cover bg-center">
                    <!-- <img src="img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover"> -->
                </div>
                <div class="date lg:flex lg:gap-3">
                    <p class="lg:hidden ">16h</p>
                    <p class="hidden lg:block lg:text-3xl">Balatro Balatrez</p>
                    <p class="hidden lg:block lg:text-3xl lg:font-light">Hace 16 horas</p>
                </div>
            </div>  
        </div>       
        </section>
    </a>
        <!-- barra busqueda  -->
         <!-- <div class="h-20 flex align-middle my-4 mx-4 border-3 rounded-xl border-(--NeonGrey) justify-center bg-neutral-950 lg:my-8 lg:w-[90vw] self-center lg:m-auto" >
            <input type="text" placeholder="Buscar en NeonNews" class="w-full text-center placeholder:text-lg placeholder:font-medium placeholder:text-[var(--NeonGrey)] text-[var(--NeonGrey)] font-medium lg:text-start lg:px-4 lg:mx-10" >
         </div>       -->
           <!-- SECCION DESTACADOS  -->
        <section id="destacados" class =" relative flex flex-col  w-full items-center mt-15">
            <h3 class=" self-start border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonNeonGrey) block  ps-4 pe-8 py-2 rounded-r-full sombraTarjetas bg-(--RellenoTarjetas) mb-10 lg:text-5xl lg:p-6">Más destacado</h3>  
            <!-- bloque destacados y navegacion  -->
            <div class="flex flex-col lg:flex-row lg:w-[90vw] gap-10 lg:my-20 justify-center">
            <!-- Carrousel destacados  -->         
                 <a href="pages/post.html" id="destacadoLink">         
                       <div id="destacadoCard" class=" carruselDestacados flex-col bg-(--RellenoTarjetas) sombraTarjetas p-6 w-[95vw] lg:w-auto rounded-4xl border-b-2 border-r-2 border-b-[var(--NintendoRed)] border-r-[var(--NintendoRed)] z-10 lg:flex lg:flex.col lg:justify-center lg:p-10 ">
                <img id="destacadoImage" src="img/Nintendo.jpg" alt="Switch 2" class="w-full aspect-video object-cover rounded-2xl mb-2">
                <h4 id="destacadoTitle" class="lg:text-2xl lg:my-3">No llego vivo al Nintendo Direct de Abril</h4>
                
                <!-- usuario/plataforma/date  -->
                <div class="info flex items-center gap-1  self-start">
                    <div class="videojuego flex items-center ">
                        <p id="destacadoCategory" class="lg:text-2xl">Overwatch</p>
                        <img id="destacadoCategoryIcon" src="img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-15">
                    </div>
                    <!-- icono usuario  -->
                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15">
                        <img id="destacadoUserImage" src="img/usuario.webp" alt="usuarioIMG" class="w-full h-full object-cover ">
                    </div>
                    <div class="date flex gap-3">
                        <p id="destacadoUserName" class="hidden lg:block lg:text-2xl">Balatro Balatrez</p>
                        <p id="destacadoTime" class="lg:text-2xl">16h</p>
                    </div>
                </div>  
            </div>
        </a>      
          <!-- Navegacion carrouseles categorias destacadas -->
        <div class=" flex bg-(--RellenoTarjetas) rounded-full px-3 py-3 justify-around w-[95vw] sombraTarjetas  lg:w-auto lg:flex-col ">
            <div class="categoriaVideojuego flex justify-center cursor-pointer" data-category="Nintendo" id="categoryNintendo"><img src="img/Nintendo.svg" alt="Nintendo" class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center cursor-pointer" data-category="Overwatch" id="categoryOverwatch"><img src="img/Overwatch.svg" alt="Overwatch"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center cursor-pointer" data-category="PC" id="categoryPC"><img src="img/PC.svg" alt="La compu"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center cursor-pointer" data-category="PlayStation" id="categoryPlayStation"><img src="img/Play.svg" alt="Plastation"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center cursor-pointer" data-category="LoL" id="categoryLoL"><img src="img/LoL.svg" alt="LoLxd" class="h-10 lg:h-20"></div>
         </div>
        </div>
        </section>        
        <!-- SECCION PERFILES DE LA SEMANA  -->
        <section id="perfilesSemanales" class="flex flex-col items-center w-full gap-y-15 py-10">
            <h3 class="block text-right ml-auto border-l-4 border-b-3 border-l-(--NeonGrey) border-b-(--NeonGrey) py-2 pr-4 ps-8 rounded-l-full sombraTarjetas bg-neutral-950 mt-10 lg:text-5xl lg:p-6">
                Perfiles de la semana
            </h3>
            
            <!-- Contenedor de perfiles -->
            <div class="w-full flex flex-col gap-8 lg:gap-12  mx-0">
                  <!-- PERFIL 1 -->
                <div id="perfil1" class="profile-week-container bg-neutral-950  w-[90w] lg:w-[60vw] self-end rounded-l-3xl p-6 sombraTarjetas lg:p-8 mb-15">
                    <!-- Info del usuario -->
                    <div class="flex items-center gap-4 mb-10">
                        <div id="perfil1img" class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15 bg-[url(/img/xA4gk3bz.png)] bg-cover bg-center ">

                        </div>
                        <div class="mx-5">
                            <h4 id="perfil1name" class="text-xl lg:text-2xl font-bold text-(--NeonBlanco)">Balatro Balatrez</h4>
                        </div>
                    </div>
                    
                    <!-- Posts del usuario con scroll horizontal -->
                    <div id="perfil1posts" class="posts-container overflow-x-auto  gap-3 flex  pb-2"><!-- Mini Post 1 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4  sombraTarjetas cursor-pointer justify-around">
                            <img src="img/posts/post_overwatch.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">Midseason patch de Overwatch 2 con cambios importantes para todos los héroes</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/Overwatch.svg" alt="Overwatch" class="w-8 h-8">
                                <span class="text-xs text-white">16h</span>
                            </div>
                        </div>
                        
                        <!-- Mini Post 2 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4  sombraTarjetas cursor-pointer justify-around">
                            <img src="img/posts/post_overwatch.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">Nuevo evento de temporada con recompensas exclusivas y skins limitadas</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/Overwatch.svg" alt="Overwatch" class="w-8 h-8">
                                <span class="text-xs text-white">16h</span>
                            </div>
                        </div>
                        
                        <!-- Mini Post 3 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4  sombraTarjetas cursor-pointer justify-around">
                            <img src="img/posts/post_overwatch.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">Análisis de meta y estrategias para la nueva temporada competitiva 2025</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/Overwatch.svg" alt="Overwatch" class="w-8 h-8">
                                <span class="text-xs text-white">16h</span>
                            </div>
                        </div>

                    </div>
                </div>           
                       <!-- PERFIL 2 -->
                <div id="perfil2" class="profile-week-container bg-neutral-950 w-[90w] lg:w-[60vw] self-start rounded-r-3xl p-6 sombraTarjetas lg:p-8 mb-15">
                    <!-- Info del usuario -->
                    <div class="flex items-center gap-4 mb-10">
                        <div id="perfil2img" class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15 bg-[url('/img/usuario2.webp')] bg-cover bg-center">

                        </div>
                        <div class="mx-5">
                            <h4 id="perfil2name" class="text-xl lg:text-2xl font-bold text-(--NeonBlanco)">Gamer_Master</h4>
                        </div>
                    </div>
                      <!-- Posts del usuario con scroll horizontal -->
                    <div id="perfil2posts" class="posts-container overflow-x-auto gap-3 flex pb-2"><!-- Mini Post 1 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4 sombraTarjetas cursor-pointer justify-around">
                            <img src="img/Nintendo.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">Nintendo Direct: Todo lo anunciado y las sorpresas más esperadas del año</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/Switch.svg" alt="Nintendo" class="w-8 h-8">
                                <span class="text-xs text-white">5h</span>
                            </div>
                        </div>
                        
                        <!-- Mini Post 2 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4 sombraTarjetas cursor-pointer justify-around">
                            <img src="img/marvels-spiderman-2.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">Spider-Man 2: Todos los trajes y cómo desbloquearlos paso a paso</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/Play.svg" alt="PlayStation" class="w-8 h-8">
                                <span class="text-xs text-white">1d</span>
                            </div>
                        </div>
                        
                        <!-- Mini Post 3 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4 sombraTarjetas cursor-pointer justify-around">
                            <img src="img/posts/post_pc.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">Las mejores configuraciones PC gaming 2025 para todos los presupuestos disponibles</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/PC.svg" alt="PC" class="w-8 h-8">
                                <span class="text-xs text-white">4d</span>
                            </div>
                        </div>
                    </div>
                </div>               
                   <!-- PERFIL 3 -->
                <div id="perfil3" class="profile-week-container bg-neutral-950 w-[90w] lg:w-[60vw] self-end rounded-l-3xl p-6 sombraTarjetas lg:p-8 mb-15">
                    <!-- Info del usuario -->
                    <div class="flex items-center gap-4 mb-10">
                        <div id="perfil3img" class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15 bg-[url('/img/usuario3.webp')] bg-cover bg-center">

                        </div>
                        <div class="mx-5">
                            <h4 id="perfil3name" class="text-xl lg:text-2xl font-bold text-(--NeonBlanco)">TechReviewer</h4>
                        </div>
                    </div>
                      <!-- Posts del usuario con scroll horizontal -->
                    <div id="perfil3posts" class="posts-container overflow-x-auto gap-3 flex pb-2"><!-- Mini Post 1 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4 sombraTarjetas cursor-pointer justify-around">
                            <img src="img/posts/post_lol.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">League of Legends: Nueva temporada con cambios masivos al meta y nuevos campeones</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/LoL.svg" alt="LoL" class="w-8 h-8">
                                <span class="text-xs text-white">8h</span>
                            </div>
                        </div>
                        
                        <!-- Mini Post 2 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4 sombraTarjetas cursor-pointer justify-around">
                            <img src="img/posts/post_hardware.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">RTX 5080: Análisis completo de rendimiento y comparativas con generaciones anteriores</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/PC.svg" alt="PC" class="w-8 h-8">
                                <span class="text-xs text-white">12h</span>
                            </div>
                        </div>
                        
                        <!-- Mini Post 3 -->
                        <div class="mini-post-card inline-block w-[60vw] min-w-[60vw] md:w-[40vw] md:min-w-[40vw] lg:w-[25vw] lg:min-w-[25vw] bg-neutral-900 rounded-2xl p-4 sombraTarjetas cursor-pointer justify-around">
                            <img src="img/posts/post_valorant2.jpg" alt="Post" class="w-full aspect-video object-cover rounded-lg mb-3">
                            <h5 class="text-sm lg:text-xl text-(--NeonBlanco) mb-2 truncate">Valorant Champions 2025: Predicciones y equipos favoritos para ganar el torneo</h5>
                            <div class="flex items-center gap-2">
                                <img src="img/Valorant.svg" alt="Valorant" class="w-8 h-8">
                                <span class="text-xs text-white">1d</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>                   
         <!-- SECCION NOTICIAS (DESPLAZAMIENTO INFINITO HASTA AGOTAR NOTICIAS)  -->
                    <section id="postRecientes" class="flex flex-col w-full items-center">
                        <h3 class=" self-start border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonGrey) block  ps-4 pe-8 py-2 rounded-r-full sombraTarjetas bg-neutral-950 mb-10 mt-10 lg:text-5xl lg:p-6">Post recientes</h3>
                        <!-- Contenedor dinámico para noticias -->
                        <div id="noticiasContainer" class="w-full">
                            <!-- Las noticias se generarán dinámicamente aquí -->
                        </div>
                    </section>
                      <!-- finMain  -->    </main>    <?php include_once('pages/footer.php')?>    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>    <script src="script/main.js"></script>
    <script src="script/banner.js"></script>
    <script src="script/destacados.js"></script>
    <script src="script/perfilesSemanales.js"></script>
    <script src="script/postRecientes.js"></script>
      <!-- Estilos personalizados para Perfiles de la semana, los meto como css porque tailwind cli interfiere con js dinámico cuando se usa sin un framework pensado para ello como react -->
    <style>
        /* Scroll horizontal para que no se vea barra blanca fea */
        .posts-container {
            scrollbar-width: thin;
            scrollbar-color: var(--NeonGrey) transparent;
        }
        
        .posts-container::-webkit-scrollbar {
            height: 6px;
        }
        
        .posts-container::-webkit-scrollbar-track {
            background: transparent;
        }
        
        .posts-container::-webkit-scrollbar-thumb {
            background-color: var(--NeonGrey);
            border-radius: 3px;
        }
        
        .posts-container::-webkit-scrollbar-thumb:hover {
            background-color: var(--NeonBlanco);
        }              

        .mini-post-card h5 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
        }
        

        .profile-week-container {
            max-width: 90vw;
        }
        
        @media (min-width: 1024px) {
            .profile-week-container {
                max-width: 80vw;
            }
            
            .mini-post-card {
                min-width: 280px;
                width: 280px;
            }
        }
        
        @media (min-width: 1280px) {
            .profile-week-container {
                max-width: 75vw;
            }
            
            .mini-post-card {
                min-width: 300px;
                width: 300px;
            }
        }
        

        .profile-week-container:nth-child(even) {
            align-self: flex-start !important;
            border-radius: 0 1.5rem 1.5rem 0;
        }
        
        .profile-week-container:nth-child(odd) {
            align-self: flex-end !important;
            border-radius: 1.5rem 0 0 1.5rem;
        }
    </style>
    
</body>
</html>