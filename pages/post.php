<?php include_once('header.php') ?>
    <main class="overflow-x-hidden">
        <!-- carousel noticias  -->
        <section id="bannerPost" class="bg-cover bg-center w-full h-150 md:h-200 content-end  border-b-3 border-(--NeonGrey) lg:h-[90vh]  aspect-video mb-10 "> 
            <div class="w-full fondoBanner lg:p-6">
            <h1 class="px-4 lg:text-6xl">Midseason patch de Overwatch 2</h1>   
            <!-- usuario/plataforma/date  -->
            <div class="info flex items-center gap-1 px-4 pb-2 lg:h-[10vh]" >
                <div class="videojuego flex items-center ">
                    <p class="lg:text-3xl hidden lg:block" id="gameTitle">Overwatch</p>
                    <img src="/NeonNewsDefinitivo/img/Vector.svg" alt="iconoVideojuego" class="size-10 lg:size-20" id="gameIcon">
                </div>
                <!-- icono usuario  -->
                <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden lg:size-15  bg-cover bg-center" id="userIcon">
                    <!-- <img src="/NeonNewsDefinitivo/img/usuario.webp" alt="usuarioIMG" class=" w-full h-full object-cover"> -->
                </div>
                <div class="date lg:flex lg:gap-3">
                    <p class="lg:hidden ">16h</p>
                    <p class="hidden lg:block lg:text-3xl" id="userName">Balatro Balatrez</p>
                    <p class="hidden lg:block lg:text-3xl lg:font-light">Hace 16 horas</p>
                </div>
            </div>  
        </div>       
        </section>
        <!-- barra busqueda  -->
         <div class="min-h-15 flex align-middle my-5 xl:my-15 mx-4 border-3 rounded-xl border-(--NeonGrey) justify-center bg-(--RellenoTarjetas)  lg:w-[90vw] self-center lg:m-auto xl:max-w-400" >
            <input type="text" placeholder="Buscar en NeonNews" class="w-full text-center placeholder:text-lg placeholder:font-medium placeholder:text-[var(--NeonGrey)] text-[var(--NeonGrey)] font-medium lg:text-start lg:px-4 lg:mx-10" >
         </div>
        <!-- SECCION DESTACADOS  -->
        <section id="destacados" class =" relative flex flex-col  w-full items-center ">
            <!-- bloque destacados y navegacion  -->
            <div class=" flex flex-col lg:flex-row lg:w-[90vw] gap-10 lg:my-10 justify-center">
            <!-- post noticia  -->
            <div class=" carruselDestacados flex-col bg-(--RellenoTarjetas) sombraTarjetas p-6 w-[95vw] lg:w-auto rounded-4xl border-b-2 border-r-2 border-b-[var(--NintendoRed)] border-r-[var(--NintendoRed)] z-10 lg:flex lg:flex.col lg:justify-center lg:p-10 xl:max-w-400">
                <div class="min-w-full min-h-1 aspect-video rounded-2xl" id="postImg" ></div>
                <!-- <img src="/NeonNewsDefinitivo/img/Ashe-Mythic-Lead-Rose-1024x364.png" alt="Switch 2" class="min-w-full  aspect-video object-cover rounded-2xl mb-2"> -->
                <div class="postBody flex flex-col  gap-y-8 mt-3" >
                    <!-- Insert 1  -->
                    <div class="flex flex-col gap-y-4">
                        <p class="text-xl font-light" id="postText">
                        </p>
                    </div>
                <!-- usuario/plataforma/date  --> 
            </div>
        </div>

    </main>
<?php include_once('footer.php') ?>
<script src="../script/post.js"></script>
    <script src="../script/main.js"></script>
</body>
</html>
