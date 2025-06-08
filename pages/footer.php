<?php
// Incluir sesión para verificar estado de autenticación
include_once('sesion.php');
$isLoggedIn = isLoggedIn();
$currentUser = $isLoggedIn ? getCurrentUser() : null;
?>
<footer class="fixed top-0 right-0 z-999 h-[100vh] w-[60vw] lg:w-100 bg-black flex flex-col border-l-3 border-l-(--NeonGrey) text-end p-4 lg:p-6 md:p-8 transition-transform duration-300 transform translate-x-full" id="footer">
    
    <?php if ($isLoggedIn && $currentUser): ?>
        <!-- Usuario loggeado -->
        <p class="lg:text-lg">¡Hola, <?php echo htmlspecialchars($currentUser['name']); ?>!</p>
        <p class="lg:text-lg mt-2">Gestiona tu perfil y crea nuevo contenido en NeonNews</p>
        
        <!-- Div de acceso al perfil -->
        <div class="my-6 flex flex-col items-center gap-4">
            <div class="w-20 h-20 bg-cover bg-center rounded-full border-2 border-(--NeonGrey)" 
                 style="background-image: url('/NeonNewsDefinitivo/img/<?php echo htmlspecialchars($currentUser['img_profile']); ?>')"></div>
            <a href="/NeonNewsDefinitivo/pages/perfil.php" class="text-white hover:text-(--NeonGrey) transition">Ver Perfil</a>
        </div>
        
        <div class="botones mt-auto">
            <a href="/NeonNewsDefinitivo/pages/newPost.php" class="w-[40vw] lg:w-[15vw] my-3 border-2 border-green-400 text-green-400 rounded-lg py-1 hover:text-black hover:bg-green-400 hover:shadow-amber-50 flex items-center justify-center">Postear</a>
            <a href="/NeonNewsDefinitivo/logout.php" class="w-[40vw] lg:w-[15vw] bg-red-600 text-white rounded-lg py-1 my-3 hover:bg-red-800 transition flex items-center justify-center">Cerrar Sesión</a>
        </div>
    <?php else: ?>
        <!-- Usuario no loggeado -->
        <p class="lg:text-lg">Crea un perfil para postear, crear listas personalizadas y comentar en NeonNews </p>
        <div class="botones mt-auto">
            <button class="w-[40vw] lg:w-[15vw] my-6 border-2 border-(--NeonGrey) rounded-lg py-1 hover:text-black hover:bg-(--NeonGrey) hover:shadow-amber-50" id="footer-register" type="button">Registrarse</button>
            <button class="w-[40vw] lg:w-[15vw] bg-(--NeonGrey) sombraTarjetas rounded-lg py-1 text-black hover:bg-(--NeonBlanco) hover:shadow-amber-50" id="footer-login" type="button">Iniciar Sesion</button>
        </div>
    <?php endif; ?>
    
    <nav class="flex flex-col mt-auto gap-3 border-b-1 border-b-(--NeonBlanco) pb-4">
        <a href="#">Soporte</a>
        <a href="#">Términos y condiciones</a>
        <a href="#">Política de Privacidad</a>
        <a href="#">Sobre nosotros</a>
    </nav>
    <small class="self-center my-4">Copyright 2025 NeonNews</small>
</footer>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<!-- Asegura rutas absolutas para imágenes y SVGs en el footer si las usas -->
<script src="/NeonNewsDefinitivo/pages/footer.js"></script>
