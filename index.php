<?php include_once('pages/header.php')?>
    <!-- main  -->
    <main class="overflow-x-hidden">
        <!-- carousel noticias  -->
        <a href="pages/post.php">
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
         <div class="h-20 flex align-middle my-4 mx-4 border-3 rounded-xl border-(--NeonGrey) justify-center bg-neutral-950 lg:my-8 lg:w-[90vw] self-center lg:m-auto" >
            <input type="text" placeholder="Buscar en NeonNews" class="w-full text-center placeholder:text-lg placeholder:font-medium placeholder:text-[var(--NeonGrey)] text-[var(--NeonGrey)] font-medium lg:text-start lg:px-4 lg:mx-10" >
         </div>

        <!-- SECCION DESTACADOS  -->
        <section id="destacados" class =" relative flex flex-col  w-full items-center ">
            <h3 class=" self-start border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonGrey) block  ps-4 pe-8 py-2 rounded-r-full sombraTarjetas bg-neutral-950 mb-10 lg:text-5xl lg:p-6">Más destacado</h3>  
            <!-- bloque destacados y navegacion  -->
            <div class="flex flex-col lg:flex-row lg:w-[90vw] gap-10 lg:my-20 justify-center">
            <!-- Carrousel destacados  -->
             <a href="pages/post.html">
            <div class=" carruselDestacados flex-col bg-neutral-950 sombraTarjetas p-6 w-[95vw] lg:w-auto rounded-4xl border-b-2 border-r-2 border-b-[var(--NintendoRed)] border-r-[var(--NintendoRed)] z-10 lg:flex lg:flex.col lg:justify-center lg:p-10 ">
                <img src="img/Nintendo.jpg" alt="Switch 2" class="max-w-full rounded-2xl mb-2">
                <h4 class="lg:text-2xl lg:my-3">No llego vivo al Nintendo Direct de Abril</h4>
                <!-- usuario/plataforma/date  -->
                <div class="info flex items-center gap-1  self-start">
                    <div class="videojuego flex items-center ">
                        <p class="lg:text-2xl">Overwatch</p>
                        <img src="img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-15">
                    </div>
                    <!-- icono usuario  -->
                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15">
                        <img src="img/usuario.webp" alt="usuarioIMG" class="w-full h-full object-cover ">
                    </div>
                    <div class="date flex gap-3">
                        <p class="hidden lg:block lg:text-2xl">Balatro Balatrez</p>
                        <p class="lg:text-2xl">16h</p>
                    </div>
                </div>  
            </div>
        </a>
        <!-- Navegacion carrouseles categorias destacadas -->
        <div class=" flex bg-neutral-950 rounded-full px-3 py-3 justify-around w-[95vw] sombraTarjetas  lg:w-auto lg:flex-col ">
            <div class="categoriaVideojuego flex justify-center"><img src="img/Switch.svg" alt="Switch" class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="img/Vector.svg" alt="Overwatch"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="img/Capa 14.svg" alt="La compu"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="img/Play.svg" alt="Plastation"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="img/LoL.svg" alt="LoLxd" class="h-10 lg:h-20"></div>
         </div>
        </div>
        </section>
        <!-- SECCION PERFILES DE LA SEMANA  -->
         <section id="perfilesSemanales" class="flex flex-col items-center w-full gap-y-15">
            <h3 class="block text-right ml-auto border-l-4 border-b-3 border-l-(--NeonGrey) border-b-(--NeonGrey) py-2 pr-4 ps-8 rounded-l-full sombraTarjetas bg-neutral-950 mt-10  lg:text-5xl lg:p-6">
                Perfiles en portada
              </h3>
            <!-- PERFIL 1  -->
            <div class="flex flex-col bg-neutral-950 w-[90vw] self-end rounded-l-3xl p-6 sombraTarjetas lg:p-10 lg:gap-6 lg:my-20">
            <!-- info perfil -->
             <div class="info flex items-center self-start gap-3 ">
                <div class="videojuego flex items-center ">
                    <p class="lg:text-2xl">Toniki RAW</p>
                    <img src="img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-20">
                </div>
                <!-- icono usuario  -->
                <div class="order-first relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-20">
                    <img src="img/channels4_profile.jpg" alt="usuarioIMG" class=" w-full h-full object-cover">
                </div>
             </div> 
             <!-- posts del perfil laterales  -->
             <div class="flex overflow-x-auto whitespace-nowrap gap-3 min-w-[90vw] quitarScrollbar scrollbarNeonNews">
                <!-- post1 -->
                <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                    <div class="rounded-2xl bg-[url(/img/balatro-devs-tease-jimbo-plushie_feature.jpg)] bg-cover bg-center ">
                        <!-- <img src="img/balatro-devs-tease-jimbo-plushie_feature.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video"> -->
                         <p>asasdasdd</p>
                    </div>
                    <p class=" whitespace-normal lg:text-2xl pt-2">Trailer de The Witcher 4 analidado al detalle</p>
                </div>
                <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                    <div class="  rounded-2xl overflow-hidden ">
                        <img src="img/1600_Genji.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video">
                    </div>
                    <p class=" whitespace-normal lg:text-2xl pt-2">Trailer de The Witcher 4 analidado al detalle</p>
                </div>
                <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                    <div class="  rounded-2xl overflow-hidden">
                        <img src="img/2x1_NSwitch_DonkeyKongCountryReturnsHD_image1600w (1).jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video">
                    </div>
                    <p class=" whitespace-normal lg:text-2xl pt-2">Trailer de The Witcher 4 analidado al detalle</p>
                </div>
             </div>
            </div> 
            <!-- PERFIL 2    -->
            <div class="flex flex-col bg-neutral-950 w-[90vw] self-end rounded-l-3xl p-6 sombraTarjetas lg:p-10 lg:gap-6 lg:mb-20">
                <!-- info perfil -->
                 <div class="info flex items-center self-start gap-3 ">
                    <div class="videojuego flex items-center ">
                        <p class="lg:text-2xl">Balatro Balatrez</p>
                        <img src="img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-20">
                    </div>
                    <!-- icono usuario  -->
                    <div class="order-first relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-20">
                        <img src="img/usuario.webp" alt="usuarioIMG" class="w-full h-full object-cover">
                    </div>
                 </div> 
                 <!-- posts del perfil laterales  -->
                 <div class="flex overflow-x-auto whitespace-nowrap gap-3 min-w-[90vw] quitarScrollbar scrollbarNeonNews">
                    <!-- post1 -->
                    <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                        <div class="  rounded-2xl overflow-hidden">
                            <img src="img/1LBlAihd7GU-HD.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video">
                        </div>
                        <p class=" whitespace-normal lg:text-2xl pt-2">Mid season, buffos, nerfeos, cambios y la muerte de Tracer</p>
                    </div>
                    <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                        <div class="  rounded-2xl overflow-hidden">
                            <img src="img/1LBlAihd7GU-HD.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-coveraspect-video">
                        </div>
                        <p class=" whitespace-normal lg:text-2xl pt-2">Mid season, buffos, nerfeos, cambios y la muerte de Tracer</p>
                    </div>
                    <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                        <div class="  rounded-2xl overflow-hidden">
                            <img src="img/1LBlAihd7GU-HD.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video">
                        </div>
                        <p class=" whitespace-normal lg:text-2xl pt-2">Mid season, buffos, nerfeos, cambios y la muerte de Tracer</p>
                    </div>
                 </div>
                </div>  
            <!-- PERFIL 3  -->
            <div class="flex flex-col bg-neutral-950 w-[90vw] self-end rounded-l-3xl p-6 sombraTarjetas lg:p-10 lg:gap-6 lg:mb-20">
                <!-- info perfil -->
                 <div class="info flex items-center self-start gap-3 ">
                    <div class="videojuego flex items-center ">
                        <p class="lg:text-2xl">Balatro Balatrez</p>
                        <img src="img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-20">
                    </div>
                    <!-- icono usuario  -->
                    <div class="order-first relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-20">
                        <img src="img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover">
                    </div>
                 </div> 
                 <!-- posts del perfil laterales  -->
                 <div class="flex overflow-x-auto whitespace-nowrap gap-3 min-w-[90vw] quitarScrollbar scrollbarNeonNews">
                    <!-- post1 -->
                    <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                        <div class="  rounded-2xl overflow-hidden">
                            <img src="img/gnad3G9QA04-HD.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video">
                        </div>
                        <p class=" whitespace-normal lg:text-2xl pt-2">Mid season, buffos, nerfeos, cambios y la muerte de Tracer</p>
                    </div>
                    <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                        <div class="  rounded-2xl overflow-hidden">
                            <img src="img/gnad3G9QA04-HD.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video">
                        </div>
                        <p class=" whitespace-normal lg:text-2xl pt-2">Mid season, buffos, nerfeos, cambios y la muerte de Tracer</p>
                    </div>
                    <div class="flex flex-col my-3 w-[60vw] min-w-[60vw] ">
                    <div class="  rounded-2xl overflow-hidden">
                        <img src="img/gnad3G9QA04-HD.jpg" alt="Nitendo 2" class="max-w-full max-h-full object-cover aspect-video">
                    </div>
                    <p class=" whitespace-normal lg:text-2xl pt-2">Mid season, buffos, nerfeos, cambios y la muerte de Tracer</p>
                </div>
                 </div>
                </div> 
         </section>
         <!-- SECCION TOP VIDEOS VIDEOJUEGOS  -->
          <!-- Esta seccion contiene dos sliders que tengo que hacer con Js para obtener el efecto de escalar el div seleccionado en cada momento-->
          <section id="topVideosVideojuegos" class="mt-10 flex flex-col  w-full items-center lg:mb-20">
            <h3 class=" self-start border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonGrey) block  ps-4 pe-8 py-2 rounded-r-full sombraTarjetas bg-neutral-950 mb-10 lg:text-5xl lg:p-6">Top Videojuegos</h3>
            <!-- carrusel de videos de youtube  -->
             <div class="videosCarrusel bg-neutral-950 w-full flex overflow-x-auto py-15 border-y-3 border-y-(--NeonGrey) sombraTarjetas gap-6 text-center ps-10 quitarScrollbar scrollbarNeonNews lg:p-25">
                <!-- video1 -->
                <figure class="min-w-[80vw]">
                    <img src="img/Pokemon.jpg" alt="VideoYoutube" class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">El juego más predatorio de Pokemon</figcaption>
                </figure>
                <!-- video2 -->
                <figure class="min-w-[70vw]">
                    <img src="img/Doom.webp" alt="VideoYoutube"class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">Titulo del video de youtube</figcaption>
                </figure>
                <!-- video3 -->
                <figure class="min-w-[60vw]">
                    <img src="img/Siksong.jpg" alt="VideoYoutube"class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">Titulo del video de youtube</figcaption>
                </figure>
                <!-- video4 -->
                <figure class="min-w-[50vw]">
                    <img src="img/overwatchvideo.jpg" alt="VideoYoutube"class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">Titulo del video de youtube</figcaption>
                </figure>
                
             </div>
          </section>

          <!-- SECCION TOP VIDEOS eSports  -->
          <section id="topVideosVideojuegos" class="mt-10 flex flex-col  w-full items-center lg:mb-20">
            <h3 class="block text-right ml-auto border-l-4 border-b-3 border-l-(--NeonGrey) border-b-(--NeonGrey) py-2 pr-4 ps-8 rounded-l-full sombraTarjetas bg-neutral-950 mb-10 lg:text-5xl lg:p-6 ">Top e-Sports</h3>
            <!-- carrusel de videos de youtube  -->
             <div class="videosCarrusel bg-neutral-950 w-full flex overflow-x-auto py-15 border-y-3 border-y-(--NeonGrey) sombraTarjetas gap-6 text-center ps-10 quitarScrollbar scrollbarNeonNews lg:p-25 ">
                <!-- video1 -->
                <figure class="min-w-[80vw]">
                    <img src="img/Pokemon.jpg" alt="VideoYoutube" class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">El juego más predatorio de Pokemon</figcaption>
                </figure>
                <!-- video2 -->
                <figure class="min-w-[70vw]">
                    <img src="img/Doom.webp" alt="VideoYoutube"class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">Titulo del video de youtube</figcaption>
                </figure>
                <!-- video3 -->
                <figure class="min-w-[60vw]">
                    <img src="img/Siksong.jpg" alt="VideoYoutube"class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">Titulo del video de youtube</figcaption>
                </figure>
                <!-- video4 -->
                <figure class="min-w-[50vw]">
                    <img src="img/overwatchvideo.jpg" alt="VideoYoutube"class="max-w-full">
                    <figcaption class="lg:text-2xl mt-2 lg:mt-4">Titulo del video de youtube</figcaption>
                </figure>
                
             </div>
          </section>

                    <!-- SECCION NOTICIAS (DESPLAZAMIENTO INFINITO HASTA AGOTAR NOTICIAS)  -->
                    <section id="postRecientes" class="flex flex-col w-full items-center">
                        <h3 class=" self-start border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonGrey) block  ps-4 pe-8 py-2 rounded-r-full sombraTarjetas bg-neutral-950 mb-10 mt-10 lg:text-5xl lg:p-6">Post recientes</h3>
                        <!-- NOTICIA 1  -->
                         <a href="pages/post.html" class="w-full">
                         <div class="noticiaReciente flex flex-col w-full  px-5 border-b-3 border-b-(--PlayBlue) py-6 lg:px-[5vw] lg:flex-row lg:gap-10 items-start lg:justify-center">
                            <!-- Imagen Noticia  -->
                            <div class="aspect-video overflow-hidden rounded-lg lg:w-[30vw]">
                            <img src="img/marvels-spiderman-2.jpg" alt="Noticia Spiderman" class=" w-full h-full object-cover">
                            </div>
                            <div class="contextoPost lg:flex lg:flex-col lg:items-start lg:justify-start">
                                <h5 class=" pt-2 lg:text-2xl">Guia de localizaciones de los trajes de Peter y Miles en Spiderman 2</h5>
                                <!-- info post  -->
                                <div class="info flex items-center self-start gap-2">
                                    <div class="videojuego flex items-center ">
                                        <p class="textInfo lg:text-xl">PlayStation</p>
                                        <img src="img/Play.svg" alt="iconoVideojuego" class="size-10">
                                    </div>
                                    <!-- icono usuario  -->
                                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden ">
                                        <img src="img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover">
                                    </div>
                                    <div class="date">
                                        <p class="textInfo lg:text-xl">16h</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                        </a>
                        <!-- NOTICIA 2 -->
                         <a href="pages/post.html" class="w-full">
                        <div class="noticiaReciente flex flex-col w-full  px-5 border-b-3 border-b-(--PlayBlue) py-6 lg:px-[5vw] lg:flex-row lg:gap-10 lg:items-start justify-center bg-neutral-950">
                            <!-- Imagen Noticia  -->
                            <div class="aspect-video overflow-hidden rounded-lg lg:w-[30vw]">
                            <img src="img/marvels-spiderman-2.jpg" alt="Noticia Spiderman" class=" w-full h-full object-cover">
                            </div>
                            <div class="contextoPost lg:flex lg:flex-col lg:items-start lg:justify-start">
                                <h5 class=" pt-2 lg:text-2xl">Guia de localizaciones de los trajes de Peter y Miles en Spiderman 2</h5>
                                <!-- info post  -->
                                <div class="info flex items-center self-start gap-2">
                                    <div class="videojuego flex items-center ">
                                        <p class="textInfo lg:text-xl">PlayStation</p>
                                        <img src="img/Play.svg" alt="iconoVideojuego" class="size-10">
                                    </div>
                                    <!-- icono usuario  -->
                                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden ">
                                        <img src="img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover">
                                    </div>
                                    <div class="date">
                                        <p class="textInfo lg:text-xl">16h</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                        </a>
                        <!-- NOTICIA 3  -->
                        <a href="pages/post.html" class="w-full">
                        <div class="noticiaReciente flex flex-col w-full  px-5 border-b-3 border-b-(--PlayBlue) py-6 lg:px-[5vw] lg:flex-row lg:gap-10 items-start lg:justify-center">
                            <!-- Imagen Noticia  -->
                            <div class="aspect-video overflow-hidden rounded-lg lg:w-[30vw]">
                            <img src="img/marvels-spiderman-2.jpg" alt="Noticia Spiderman" class=" w-full h-full object-cover">
                            </div>
                            <div class="contextoPost lg:flex lg:flex-col lg:items-start lg:justify-start">
                                <h5 class=" pt-2 lg:text-2xl">Guia de localizaciones de los trajes de Peter y Miles en Spiderman 2</h5>
                                <!-- info post  -->
                                <div class="info flex items-center self-start gap-2">
                                    <div class="videojuego flex items-center ">
                                        <p class="textInfo lg:text-xl">PlayStation</p>
                                        <img src="img/Play.svg" alt="iconoVideojuego" class="size-10">
                                    </div>
                                    <!-- icono usuario  -->
                                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden ">
                                        <img src="img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover">
                                    </div>
                                    <div class="date">
                                        <p class="textInfo lg:text-xl">16h</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                        </a>
                        <!-- NOTICIA 4  -->
                         <a href="pages/post.html" class="w-full ">
                        <div class="noticiaReciente flex flex-col w-full  px-5 border-b-3 border-b-(--PlayBlue) py-6 lg:px-[5vw] lg:flex-row lg:gap-10 items-start lg:justify-center bg-neutral-950">
                            <!-- Imagen Noticia  -->
                            <div class="aspect-video overflow-hidden rounded-lg lg:w-[30vw]">
                            <img src="img/marvels-spiderman-2.jpg" alt="Noticia Spiderman" class=" w-full h-full object-cover">
                            </div>
                            <div class="contextoPost lg:flex lg:flex-col lg:items-start lg:justify-start">
                                <h5 class=" pt-2 lg:text-2xl">Guia de localizaciones de los trajes de Peter y Miles en Spiderman 2</h5>
                                <!-- info post  -->
                                <div class="info flex items-center self-start gap-2">
                                    <div class="videojuego flex items-center ">
                                        <p class="textInfo lg:text-xl">PlayStation</p>
                                        <img src="img/Play.svg" alt="iconoVideojuego" class="size-10">
                                    </div>
                                    <!-- icono usuario  -->
                                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden ">
                                        <img src="img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover">
                                    </div>
                                    <div class="date">
                                        <p class="textInfo lg:text-xl">16h</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                        </a>
                      </section>
                      <!-- finMain  -->
    </main>
    <?php include_once('pages/footer.php')?>
    <script src="script/main.js"></script>
    
</body>
</html>