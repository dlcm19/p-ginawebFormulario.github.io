
const CONTAINER_MENUDESPLEGABLE = document.querySelector(".container-menuDesplegable")
const SUBCONTAINER_MENUDESPLEGABLE = document.querySelector(".subContainer-menuDesplegable")


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".boton-desplegable").addEventListener("click", boton)
    //document.querySelector(".marquee").addEventListener("mouseenter", initMarquee);
    maquee() 
    const menuContainer = document.querySelector('.menu-container');
    const menuImage = document.querySelector('.menu-image');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    //  funcionamiento para desplegar el menú hamburguesa
    function boton() {
    SUBCONTAINER_MENUDESPLEGABLE.classList.toggle("subContainer-menuDesplegable_visible") 
    }
// fin  funcionamiento para desplegar el menú hamburguesa
menuImage.addEventListener('mouseenter', function() {
    dropdownMenu.style.display = 'block';
});

menuContainer.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
});

dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
});

    //*************MARQUEE ***************/

    function maquee() {
        const marquee = document.querySelector('.marquee');

            // Detener el marquee cuando el mouse está encima
    marquee.addEventListener('mouseenter', function() {
        marquee.stop();
    });

    // Continuar el marquee cuando el mouse se quita
    marquee.addEventListener('mouseleave', function() {
        marquee.start();
    });

        
        
    }

    //*************FIN MARQUEE ***************/

    

});

