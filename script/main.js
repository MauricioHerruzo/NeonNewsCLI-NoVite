document.addEventListener("DOMContentLoaded", () => {
      // Función para intentar configurar los event listeners con reintentos
    function setupFooterListeners() {
        const profileMobile = document.querySelector("#profileMobile");
        const footer = document.querySelector("#footer");
        const profilePC = document.querySelector("#profilePC");
        
        console.log("Elements found:", { profileMobile, footer, profilePC });
        
        if (!footer) {
            console.error("Footer not found, retrying in 100ms...");
            setTimeout(setupFooterListeners, 100);
            return;
        }
        
        let profiles = [profilePC, profileMobile].filter(p => p); // Filtrar elementos que existen
        
        console.log("Profiles to add listeners:", profiles);

        profiles.forEach(profileElement => {
            if (profileElement) {
                profileElement.addEventListener("click", (e) => {
                    console.log("Profile clicked:", profileElement.id);
                    e.preventDefault();
                    e.stopPropagation();
                    footer.classList.remove("translate-x-full");
                    footer.classList.add("translate-x-0");
                    console.log("Footer opened");
                });
            }
        });

        // CERRAR FOOTER - Solo agregar el listener una vez
        let closeListenerAdded = false;
        
        if (!closeListenerAdded) {            document.addEventListener("click", (e) => {
                let isProfileClick = false;
                
                // Verificar si se hizo clic en algún icono de perfil
                if (e.target.id === 'profileMobile' || e.target.id === 'profilePC') {
                    isProfileClick = true;
                }
                
                // También verificar si se hizo clic dentro de un elemento con esos IDs
                if (e.target.closest('#profileMobile') || e.target.closest('#profilePC')) {
                    isProfileClick = true;
                }
                
                const isFooterOpen = !footer.classList.contains("translate-x-full");
                
                if(isFooterOpen && !footer.contains(e.target) && !isProfileClick){
                    // Si el footer está abierto y el click es fuera, cierra sin interferir con otra cosa
                    console.log("Closing footer");
                    e.preventDefault();
                    e.stopPropagation();
                    footer.classList.add("translate-x-full");
                    footer.classList.remove("translate-x-0");
                    return;
                }
            });
            closeListenerAdded = true;
        }
    }
    
    // Iniciar configuración inmediatamente
    setupFooterListeners();
    
    // También intentar después de un breve delay por si los elementos no están listos
    setTimeout(setupFooterListeners, 50);
});