<?php 
include_once('header.php');
//Requerir autenticación 
requireLogin();
?>
    <main class="overflow-x-hidden min-h-screen min-w-screen bg-cover bg-center " id="perfilbg">
        <div class="pt-50 lg:pt-80 flex flex-col items-center justify-center backdrop-blur-sm min-h-screen min-w-screen">
           
            <div id="profileContainer" class="flex flex-col items-center w-full max-w-[1000px] p-15 md:p-5 lg:mb-40 ">
                <!--avaScript -->
            </div>
            <!-- POSTS -->
            <div class=" flex flex-col items-center" id="postsContainer">
                <!--JavaScript -->
            </div>   
        </div>
    </main>
<?php include_once('footer.php') ?>
    

    
    <script src="../script/main.js"></script>
    <script src="../script/perfil.js"></script>
</body>
</html>