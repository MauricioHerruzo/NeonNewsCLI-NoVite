<?php 
include_once('header.php');
//Requerir autenticación 
requireLogin();

//Obtener información 
$currentUser = getCurrentUser();

//Obtener ID 
$postId = $_GET['id'] ?? null;
if (!$postId) {
    header('Location: /NeonNewsDefinitivo/pages/perfil.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/output.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>Actualizar Post - NeonNews</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- WYWYWYG libreria  -->
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
</head>
<body class="bg-(--NeonFondo)">
    <main class="overflow-x-hidden bg-[url(/img/xA4gk3bz.png)] lg:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url(/img/xA4gk3bz.png)] bg-[position:75%_10%] bg-cover lg:bg-center bg-fixed h-screen w-screen ">
        <div class="pt-40 md:pt-50 flex flex-col items-center justify-center backdrop-blur-sm lg:backdrop-blur-lg min-h-screen min-w-screen gap-10">
            

            
            <!-- Main Form -->
            <div id="formContainer" class="hidden flex-col w-full gap-5 p-5 max-w-[1000px] mb-40">
                <h2 class="text-white text-3xl md:text-4xl font-bold text-center mb-5">Actualizar Post</h2>
                
                <input type="text" id="title" placeholder="Título" class="p-4 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-white bg-neutral-900 text-white text-xl w-full md:text-3xl shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)]">
                
                <div id="currentImageContainer" class="hidden">
                    <p class="text-white text-lg mb-2">Imagen actual:</p>
                    <div id="currentImagePreview" class="w-full h-48 bg-cover bg-center rounded-lg border-2 border-white mb-4"></div>
                </div>
                
                <input type="file" id="img" accept="image/*" class="p-4 border-2 border-white bg-neutral-900 text-white rounded-full me:text-xl shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)]">
                <p class="text-gray-300 text-sm -mt-3 ml-4">Deja vacío para mantener la imagen actual</p>
                
                <div class="bg-neutral-900 rounded-4xl p-4 border-2 border-white shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)]">
                    <!--  WYWYWYG editor opciones   -->
                    <div id="editor-toolbar" class="bg-neutral-900 rounded-full p-4 text-center text-white border-0 shadow-none ">
                      <span class="ql-formats">
                        <select class="ql-header">
                          <option selected></option>
                          <option value="1">H1</option>
                          <option value="2">H2</option>
                          <option value="3">H3</option>
                        </select>
                        <button class="ql-bold"></button>
                        <button class="ql-italic"></button>
                        <button class="ql-underline"></button>
                        <button class="ql-strike"></button>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-list" value="ordered"></button>
                        <button class="ql-list" value="bullet"></button>
                      </span>
                      <span class="ql-formats">
                        <button class="ql-link"></button>
                      </span>
                    </div>
                    <div id="editor" class="h-56 rounded-2xl p-2 min-h-80 bg-neutral-900 text-white border-0 shadow-none "></div>
                </div>
                
                <select id="category" class="rounded-full border-2 border-white text-white bg-neutral-900 text-xl p-4 pr-10 text-center appearance-none relative shadow-[40px_40px_70px_10px_rgba(0,0,0,0.9)] mb-0" style="margin-bottom:0;">
                    <option value="Overwatch" class="">Overwatch </option>
                    <option value="eSports">LoL</option>
                    <option value="eSports">CS2</option>
                    <option value="eSports">Valorant</option>
                    <option value="Nintendo">Nintendo</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="PlayStation">Xbox</option>
                    <option value="PlayStation">PC</option>                </select>
                
                <button id="btn-actualizar-post" class="bg-neutral-900 text-white text-xl py-4 px-4 rounded-full w-56 hover:bg-white hover:text-black transition cursor-pointer self-center mt-10">Actualizar Post</button>

            </div>
            
            <!-- Error State -->
            <div id="errorContainer" class="hidden flex-col items-center gap-4 max-w-[600px] text-center">
                <div class="text-red-500 text-6xl">⚠️</div>
                <h3 class="text-white text-2xl font-bold">Error al cargar el post</h3>
                <p id="errorMessage" class="text-gray-300 text-lg"></p>
                <button onclick="window.location.href='/NeonNewsDefinitivo/pages/perfil.php'" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition">
                    Volver al Perfil
                </button>
            </div>
            
   
            <div class="hidden md:block" style="height:200px;"></div>
        </div>
    </main>
    
<?php include_once('footer.php') ?>
    <script src="../script/main.js"></script>
    <script src="../script/updatePost.js"></script>
    
    <style>
        /* BOBARDEEN TAILWIND NO VALE PARA NADA  */
        /* Estilos para Quill WYSIWYG Editor  como en newPost copia pega*/
        #editor-toolbar, .ql-toolbar {
            border: none !important;
            box-shadow: none !important;
            background-color: #171717 !important;
            border-radius: 9999px !important;
            padding: 16px !important;
        }
        
        #editor, .ql-container {
            border: none !important;
            box-shadow: none !important;
            background-color: #171717 !important;
            border-radius: 16px !important;
            min-height: 320px !important;
        }
        
        .ql-editor {
            color: #ffffff !important;
            background-color: #171717 !important;
            padding: 16px !important;
            min-height: 200px !important;
            border-radius: 16px !important;
        }
        
        .ql-editor.ql-blank::before {
            color: #ffffff !important;
            opacity: 0.7 !important;
            font-style: italic !important;
        }
        

        .ql-toolbar .ql-formats button,
        .ql-toolbar .ql-formats select {
            border: none !important;
            border-radius: 8px !important;
            margin: 2px !important;
            background-color: #171717 !important; 
        
        .ql-toolbar .ql-formats button:hover,
        .ql-toolbar .ql-formats select:hover {
            background-color: #262626 !important; 
        }
        
        .ql-toolbar .ql-formats button.ql-active {
            background-color: #3B82F6 !important; 
        }
        
       
        .ql-toolbar .ql-formats button svg {
            fill: inherit !important;
            stroke: inherit !important;
        }
       
        .ql-toolbar .ql-header {
            background-color: #171717 !important;
            border: none !important;
        }
        
        .ql-toolbar .ql-header option {
            background-color: #ffffff !important;
        }
        
    
        .ql-toolbar .ql-formats .ql-picker {
        }
        
        .ql-toolbar .ql-formats .ql-picker-label {
            background-color: #171717 !important;
            border: none !important;
            border-radius: 8px !important;
        }
        
        .ql-toolbar .ql-formats .ql-picker-label:hover {
            background-color: #262626 !important;
        }
        
        
        .ql-toolbar .ql-formats .ql-picker-options {
            background-color: #171717 !important;
            border: none !important;
            border-radius: 8px !important;
        }
        
        .ql-toolbar .ql-formats .ql-picker-item {
        }
        
        .ql-toolbar .ql-formats .ql-picker-item:hover {
            background-color: #262626 !important;
        }
        
       
        select#category {
            appearance: none !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            background-color: #171717 !important;
            color: #fff !important;
            background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"/></svg>');
            background-repeat: no-repeat;
            background-position: right 1.5rem center;
            background-size: 1.5em;
            padding-right: 3.5rem !important;
        }
        
   
        #editor-toolbar .ql-formats button,
        #editor-toolbar .ql-formats .ql-header {
            font-size: 1.2rem !important;
            min-width: 2.5rem !important;
            min-height: 2.5rem !important;
        }
        
        #editor-toolbar .ql-formats button svg {
            width: 1.25em !important;
            height: 1.25em !important;
        }
        
        @media (min-width: 768px) {
            #editor, .ql-editor, .ql-editor * {
                font-size: 1.125rem !important; 
            }
            .ql-editor.ql-blank::before {
                font-size: 1.125rem !important;
            }
        }

        .ql-editor p, .ql-editor h1, .ql-editor h2, .ql-editor h3, 
        .ql-editor ul, .ql-editor ol, .ql-editor li {
            color: #ffffff !important;
        }
    </style>
    
    <script src="../script/updatePost.js"></script>
</body>
</html>
