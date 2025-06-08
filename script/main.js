document.addEventListener("DOMContentLoaded", () =>{

    // CERRAR FOOTER
    document.addEventListener("click", (e) =>{
        const footer = document.querySelector("#footer");
        const header = document.querySelector('header-component');
        let isProfileClick = false;
        if (header) {
            const profilePCs = header.querySelectorAll('#profilePC');
            profilePCs.forEach(profile => {
                if (e.target === profile) isProfileClick = true;
            });
        }
        const isFooterOpen = !footer.classList.contains("translate-x-full");
        if(isFooterOpen && !footer.contains(e.target) && !isProfileClick){
            // Si el footer está abierto y el click es fuera, cierra cin joder la inteccion con otra cosa
            e.preventDefault();
            e.stopPropagation();
            footer.classList.add("translate-x-full");
            footer.classList.remove("translate-x-0");
            //return cortar la acción
            return;
        }
    })




 
})