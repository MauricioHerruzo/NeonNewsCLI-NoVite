document.addEventListener("DOMContentLoaded", () => {
  
    const footer = document.querySelector("#footer");
    const profilePC = document.querySelector("#profilePC");
    const profileMobile = document.querySelector("#profileMobile");
    const profile = document.querySelector("#profile");
    
    //Array 
    const profiles = [profilePC, profileMobile, profile].filter(p => p !== null);
    
    //footer
    function openFooter() {
        if (footer) {
            footer.classList.remove("translate-x-full");
            footer.classList.add("translate-x-0");
        }
    }
    
    // Función para cerrar footer
    function closeFooter() {
        if (footer) {
            footer.classList.add("translate-x-full");
            footer.classList.remove("translate-x-0");
        }
    }
    

    profiles.forEach(profileElement => {
        if (profileElement) {
            profileElement.addEventListener("click", (e) => {
                //la propagacion de los cojones
                e.stopPropagation(); 
                openFooter();
            });
            

            profileElement.addEventListener("touchend", (e) => {
                e.preventDefault();
                e.stopPropagation();
                openFooter();
            });
        }
    });
      //CERRAR FOOTER
    document.addEventListener("click", (e) => {
        if (footer && !footer.classList.contains("translate-x-full")) {

            const isClickInFooter = footer.contains(e.target);
            const isClickInProfile = profiles.some(profile => profile && profile.contains(e.target));
            
            if (!isClickInFooter && !isClickInProfile) {
               
                e.preventDefault();
                e.stopPropagation();
                closeFooter();
            }
        }
    });
    
    window.testFooter = openFooter;
    window.closeFooter = closeFooter;
});

