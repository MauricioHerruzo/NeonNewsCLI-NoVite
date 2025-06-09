<?php include_once('header.php') ?>
    <main class="overflow-x-hidden bg-[url(/img/xA4gk3bz.png)] lg:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url(/img/xA4gk3bz.png)] bg-[position:75%_10%] bg-cover lg:bg-center bg-fixed h-screen w-screen ">
        <div class="pt-120 lg:pt-50  flex items-center justify-center lg:backdrop-blur-lg min-h-screen min-w-screen">
            <div class="flex  w-[1000px] xl:w-[1200px] rounded-t-4xl lg:rounded-4xl overflow-hidden min-h-[600px] shadow-2xl  lg:mx-auto">
            <!-- div img  -->
            <div class="hidden lg:block lg:basis-1/3 bg-[url(/img/xA4gk3bz.png)] bg-[position:70%_10%] bg-cover"></div>
            <!-- div forms  -->
            <div class="w-full lg:basis-2/3 bg-black/80 backdrop-blur-md p-10 md:p-20">
                <h2 class="text-center mt-5 text-amber-50 text-2xl">Login</h2>
                <form id="loginForm" class="flex flex-col gap-5 mt-5">
                    <input type="email" name="email" id="loginEmail" placeholder="Email" required class="border-2 border-amber-50/50 p-2 rounded-2xl text-amber-50 text-xl">
                    <input type="password" name="password" id="loginPassword" placeholder="Contraseña" required class="border-2 border-amber-50/50 p-2 rounded-2xl text-amber-50 text-xl">
                    <div class="flex items-center gap-2 justify-center">
                        <input type="checkbox" name="remember" id="loginRemember"  class="h-6 w-6 rounded-lg cursor-pointer">
                        <label class="text-amber-50 text-xl" for="loginRemember">Recuerdame</label>
                    </div>
                    <button type="submit" class=" bg-amber-50 mx-auto py-2 px-6 rounded-2xl  cursor-pointer hover:scale-[1.05] transition-transform duration-150 shadow-2xl text-xl text-neutral-950">Entrar</button>
                </form>
                <div id="loginError" class="text-red-400 text-center mt-2"></div>
                <div class="h-[2px] bg-gradient-to-r from-transparent via-amber-50 to-transparent my-10"></div>                <h2 class="text-center text-amber-50 text-2xl">Registrarse</h2>
                <div id="registerError" class="text-red-400 text-center mt-2"></div>
                <form id="registerForm" class="flex flex-col gap-5 my-5 ">
                    <input type="text" name="name" placeholder="Usuario" required class="border-2 border-amber-50/50 p-2 rounded-2xl text-amber-50 text-xl">
                    <input type="email" name="email" placeholder="Email" required class="border-2 border-amber-50/50 p-2 rounded-2xl text-amber-50 text-xl">
                    <input type="password" name="password" placeholder="Contraseña" required class="border-2 border-amber-50/50 p-2 rounded-2xl text-amber-50 text-xl">
                    <button type="submit" class=" bg-amber-50 mx-auto py-2 px-6 rounded-2xl cursor-pointer hover:scale-[1.05] transition-transform duration-150 shadow-2xl text-xl text-neutral-950">Registrarse</button>
                </form>
            </div>
            </div>
        </div>
    </main>
<?php include_once('footer.php') ?>    <script src="../script/main.js?v=<?php echo time(); ?>"></script>
    <script src="../script/newUser.js?v=<?php echo time(); ?>"></script>
    <script src="../script/loginUser.js?v=<?php echo time(); ?>"></script>
</body>
</html>
