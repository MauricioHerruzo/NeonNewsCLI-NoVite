<?php include_once('header.php') ?>
    <main class="overflow-x-hidden min-h-screen min-w-screen" id="perfilbg" >
        <div class="pt-50 lg:pt-80 flex flex-col items-center backdrop-blur-sm min-h-screen min-w-screen">
            <div class="bg-neutral-900 rounded-full h-50 w-50 md:h-70 md:w-70 border-2 md:border-4 border-(--NeonGrey) shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] p-5">
                <div class="rounded-full  bg-cover bg-center w-full h-full " id="perfilimg"></div>
            </div>
            <h3 class="border-r-3 border-b-3 border-l-0 border-b-(--NeonGrey) border-r-(--NeonGrey) p-2 rounded-full shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] bg-neutral-900  lg:text-5xl lg:py-6 lg:px-15 flex justify-center text-center mt-10 mx-5" id="perfilname">Balatro Balatrez Balanin Balalo</h3>  
            <p class="w-auto p-5 rounded-full shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] bg-neutral-900 mb-10 lg:text-xl lg:py-6 lg:px-15 flex justify-center text-center mt-10 font-normal md:w-[800px] mx-5" id="perfiltext">Como dijo un sabio: “Si no Juegas Balatro no ganas”.Así que hazme caso y juega Balatro.Muy guapo NeonNews por cierto</p> 
            <!-- POSTS -->
            <div class="mt-15 flex flex-col items-center">
                <!-- POST 1 -->
                <div class="xl:ms-60 flex flex-col xl:flex-row mb-15 gap-5 md:gap-10 mx-10 ">
                    <a href="post.php" class="inline-block w-fit">
                        <div class=" noticiaReciente flex flex-col border-b-3 border-b-(--PlayBlue) p-7 md:p-10  items-start  bg-neutral-900 rounded-4xl shadow-[10px_10px_30px_10px_rgba(0,0,0,0.5)] ">
                            <!-- Imagen Noticia  -->
                            <div class=" self-center aspect-video w-full overflow-hidden rounded-lg  bg-[url(/img/usuario.webp)] bg-center bg-cover">
                            <!-- <img src="/NeonNewsDefinitivo/img/marvels-spiderman-2.jpg" alt="Noticia Spiderman" class=" w-full h-full object-cover"> -->
                            </div>
                            <div class="contextoPost lg:flex lg:flex-col lg:items-start lg:justify-start mt-3">
                                <h5 class=" pt-2 lg:text-2xl">Guia de localizaciones de los trajes de Peter y Miles en Spiderman 2</h5>
                                <!-- info post  -->
                                <div class="info flex items-center self-start gap-2">
                                    <div class="videojuego flex items-center ">
                                        <p class="textInfo lg:text-xl">PlayStation</p>
                                        <img src="/NeonNewsDefinitivo/img/Play.svg" alt="iconoVideojuego" class="size-10">
                                    </div>
                                    <!-- icono usuario  -->
                                    <div class="relative rounded-full border-1 border-(--NeonBlanco) w-8 h-8 overflow-hidden bg-[url(/img/usuario.webp)] bg-center bg-cover"></div>
                                    <div class="date">
                                        <p class="textInfo lg:text-xl">16h</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- ACCIONES CRUD  -->
                    <div class="flex flex-row xl:flex-col justify-end md:justify-center gap-5 md:gap-10 ">
                        <!-- BORRAR  -->
                        <div class="bg-neutral-900 rounded-full h-20 w-20 md:h-40 md:w-40 border-1 md:border-2 border-(--NeonGrey) shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] p-2 md:p-5">
                        <div class="rounded-full bg-[url(/img/usuario.webp)] bg-cover bg-center w-full h-full "></div>
                        </div>
                        <!-- UPDATE  -->
                        <div class="bg-neutral-900 rounded-full h-20 w-20 md:h-40 md:w-40 border-1 md:border-2 border-(--NeonGrey) shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] p-2 md:p-5">
                        <div class="rounded-full bg-[url(/img/usuario.webp)] bg-cover bg-center w-full h-full "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php include_once('footer.php') ?>
    <script src="../script/main.js"></script>
</body>
</html>