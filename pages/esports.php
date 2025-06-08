<?php include_once('header.php') ?>
    <main class="overflow-x-hidden">
        <!-- carousel noticias  -->
         <a href="post.php">
        <section id="bannerEsports" class="bg-cover bg-center w-full h-150 md:h-200 content-end  border-b-3 border-(--NeonGrey) lg:h-[90vh] ">
            <div class="w-full fondoBanner lg:p-6">
            <h1 class="px-4 lg:text-6xl">Movistar KOI 2-0 jugando en casa</h1>   
            <!-- usuario/plataforma/date  -->
            <div class="info flex items-center gap-1 px-4 pb-2 lg:h-[10vh]" >
                <div class="videojuego flex items-center ">
                    <p class="lg:text-3xl hidden lg:block">Overwatch</p>
                    <img src="/NeonNewsDefinitivo/img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-20">
                </div>
                <!-- icono usuario  -->
                <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15">
                    <img src="/NeonNewsDefinitivo/img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover">
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
         <div class="h-15 flex align-middle my-4 mx-4 border-3 rounded-xl border-(--NeonGrey) justify-center bg-(--RellenoTarjetas) lg:my-8 lg:w-[90vw] self-center lg:m-auto" >
            <input type="text" placeholder="Buscar en NeonNews" class="w-full text-center placeholder:text-lg placeholder:font-medium placeholder:text-[var(--NeonGrey)] text-[var(--NeonGrey)] font-medium lg:text-start lg:px-4 lg:mx-10" >
         </div>
        <!-- SECCION DESTACADOS  -->
        <section id="destacados" class =" relative flex flex-col  w-full items-center ">
            <h3 class=" self-start border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonNeonGrey) block  ps-4 pe-8 py-2 rounded-r-full sombraTarjetas bg-(--RellenoTarjetas) mb-10 lg:text-5xl lg:p-6">Más destacado</h3>  
            <!-- bloque destacados y navegacion  -->
            <div class="flex flex-col lg:flex-row lg:w-[90vw] gap-10 lg:my-20 justify-center">
            <!-- Carrousel destacados  -->
             <a href="post.php">
            <div class=" carruselDestacados flex-col bg-(--RellenoTarjetas) sombraTarjetas p-6 w-[95vw] lg:w-auto rounded-4xl border-b-2 border-r-2 border-b-[var(--NintendoRed)] border-r-[var(--NintendoRed)] z-10 lg:flex lg:flex.col lg:justify-center lg:p-10 ">
                <img src="/NeonNewsDefinitivo/img/Mel_0.jpg" alt="Switch 2" class="max-w-full rounded-2xl mb-2">
                <h4 class="lg:text-2xl lg:my-3">La season 2 de 2025 de LoL: Spirit Blossom</h4>
                <!-- usuario/plataforma/date  -->
                <div class="info flex items-center gap-1  self-start">
                    <div class="videojuego flex items-center ">
                        <p class="lg:text-2xl">Overwatch</p>
                        <img src="/NeonNewsDefinitivo/img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-15">
                    </div>
                    <!-- icono usuario  -->
                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15">
                        <img src="/NeonNewsDefinitivo/img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover">
                    </div>
                    <div class="date flex gap-3">
                        <p class="hidden lg:block lg:text-2xl">Balatro Balatrez</p>
                        <p class="lg:text-2xl">16h</p>
                    </div>
                </div>  
            </div>
        </a>
        <!-- Navegacion carrouseles categorias destacadas -->
        <div class=" flex bg-(--RellenoTarjetas) rounded-full px-3 py-3 justify-around w-[95vw] sombraTarjetas  lg:w-auto lg:flex-col ">
            <div class="categoriaVideojuego flex justify-center"><img src="/NeonNewsDefinitivo/img/Switch.svg" alt="Switch" class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="/NeonNewsDefinitivo/img/Vector.svg" alt="Overwatch"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="/NeonNewsDefinitivo/img/Capa 14.svg" alt="La compu"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="/NeonNewsDefinitivo/img/Play.svg" alt="Plastation"class="h-10 lg:h-20"></div>
            <div class="categoriaVideojuego flex justify-center"><img src="/NeonNewsDefinitivo/img/LoL.svg" alt="LoLxd" class="h-10 lg:h-20"></div>
         </div>
        </div>
        </section>
        <!-- ...resto del contenido... -->
    </main>
<?php include_once('footer.php') ?>
    <script src="../script/main.js"></script>
</body>
</html>