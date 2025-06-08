<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/NeonNewsDefinitivo/src/output.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>NeonNews</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/NeonNewsDefinitivo/pages/header.js"></script>
</head>
<body class="bg-(--NeonFondo)">
    <header id="headerHome" class="">
    <!-- HEADER MOVIL  -->
    <div class="fixed w-full xl:hidden bg-neutral-950 z-90 ">
        <!-- logo y profile-botonfooter -->
        <div class="topweb w-full flex py-2 h-[15vw] sm:h-[70px]">
            <div class="basis-1/3">

            </div>
            <div class=" flex logo  basis-1/3 justify-center">
                <img src="/NeonNewsDefinitivo/img/LogoNeonNews.png" alt="" class=" max-w-full max-h-full object-contain">
            </div>
            <div class="flex profile basis-1/3  justify-center items-center" >
                    <!-- <img src="img/perfil.svg" alt="" class="max-w-full max-h-full" id="profile" > -->
                    <div class=" w-10 h-10 p-2 bg-[url(/NeonNewsDefinitivo/img/perfil.svg)] bg-cover bg-center rounded-full cursor-pointer " id="profilePC"></div>
            </div>

        </div>
        <nav class="flex justify-around h-15 items-center border-y-3 border-y-[var(--NeonGrey)]">
            <a href="/NeonNewsDefinitivo/index.php" class="hover:text-[var(--NeonBlanco)] ">Inicio</a>
            <a href="/NeonNewsDefinitivo/pages/videojuegos.php" class="hover:text-[var(--NeonBlanco)] ">Videojuegos</a>
            <a href="/NeonNewsDefinitivo/pages/esports.php" class="hover:text-[var(--NeonBlanco)] ">e-Sports</a>
        </nav>

        <!-- display en PC  -->
        <!-- <div>
            <a href="# ">Registrarse</a>
            <a href="#">Iniciar sesión</a>
            <img src="" alt="">
        </div> -->
    </div>
    <!-- HEADER PC -->
     <div class="fixed hidden xl:flex h-30 w-[115vw] mt-4 z-90 bg-black self-center left-1/2 transform -translate-x-1/2 shadow-xl border-4 border-(--NeonGrey) rounded-2xl justify-center align-middle scale-80" >
        <!-- navegacion  -->
        <nav class=" flex items-center basis-3/8 ms-10 gap-10">
            <a href="/NeonNewsDefinitivo/index.php" class="hover:text-[var(--NeonBlanco)] text-lg hover:border-t-3 hover:border-t-(--NeonBlanco) hover:border-b-3 hover:border-b-(--NeonBlanco) py-9 xl:text-xl 2xl:text-2xl">Inicio</a>
            <a href="/NeonNewsDefinitivo/pages/videojuegos.php" class="hover:text-[var(--NeonBlanco)] text-lg hover:border-t-3 hover:border-t-(--NeonBlanco) hover:border-b-3 hover:border-b-(--NeonBlanco) py-9 xl:text-xl 2xl:text-2xl">Videojuegos</a>
            <a href="/NeonNewsDefinitivo/pages/esports.php" class="hover:text-[var(--NeonBlanco)] text-lg hover:border-t-3 hover:border-t-(--NeonBlanco) hover:border-b-3 hover:border-b-(--NeonBlanco) py-9 min-w-25 xl:text-xl 2xl:text-2xl">e-Sports</a>
        </nav>
        <!-- logo  -->
        <div class="flex flex-col items-center justify-center basis-2/8 p-4">
            <img src="/NeonNewsDefinitivo/img/LogoNeonNews.png" alt="" class="max-w-full max-h-full object-contain" >
        </div>
        <!-- ui usuario  -->
        <div class="flex justify-end me-10 gap-3 basis-3/8 items-center" >
            <a href="/NeonNewsDefinitivo/pages/login.php" class=" w-[40vw]  xl:w-[10vw]  border-2 border-(--NeonGrey) rounded-xl xl:py-3 hover:text-black hover:bg-(--NeonGrey) hover:shadow-amber-50 text-lg flex items-center justify-center ">Registrarse</a>
            <a href="/NeonNewsDefinitivo/pages/login.php" class=" w-[40vw] xl:w-[10vw] bg-(--NeonGrey) sombraTarjetas rounded-xl xl:py-3 text-black hover:bg-(--NeonBlanco) hover:shadow-amber-50  text-lg  flex items-center justify-center text-center">Iniciar Sesion</a>
            <div class="w-20 h-20 p-2 bg-[url(/NeonNewsDefinitivo/img/perfil.svg)] bg-cover bg-center rounded-full cursor-pointer ms-8" id="profilePC"></div>
            <!-- <img src="/NeonNewsDefinitivo/img/perfil.svg" alt="" class="max-w-full max-h-full p-2 " id="profilePC" > -->
        </div>
     </div>
    </header>

