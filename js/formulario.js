document.addEventListener('DOMContentLoaded', function() {

// FUNCIÓN DE LA FECHA
function time() { 
    let  f = new Date();
    let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    let fecha= ( diasSemana[f.getDay()]  + "," + "  " + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    document.getElementById("time").innerHTML = fecha    
}
time()
//FIN FUNCIÓN DE LA FECHA



// FUNCIONES DEL FORMULARIO

    const tarjeta = document.querySelector('#tarjeta'); // Selecciona tu input
    const mensaje = document.querySelector('#mensaje'); 
    const documento = document.querySelector('#documento'); // Selecciona tu input
    const mensaje1 = document.querySelector('#mensaje1');
    const msj = document.querySelector('#msj');
    
 
   
    
    
    
    tarjeta.addEventListener('input', function() {
        // Elimina todos los caracteres que no sean números
        tarjeta.value = tarjeta.value.replace(/[^0-9]/g, '');
    });
    documento.addEventListener('input', function() {
        // Elimina todos los caracteres que no sean números
        documento.value = documento.value.replace(/[^0-9]/g, '');
    });
    
    tarjeta.addEventListener("focus", function() {
        if (!tarjeta.value) { // Solo muestra el mensaje si el campo está vacío
            mensaje.textContent = "Ingrese su número de tarjeta"; 
        }
        
        tarjeta.addEventListener("blur", function(){
            mensaje.textContent = "";
        });   
    });
    
    tarjeta.addEventListener("input", function() {
        if (tarjeta.value) {
            mensaje.textContent = ""; // Borra el mensaje si hay algún valor en el campo
        } else {
            mensaje.textContent = "Ingrese su número de tarjeta"; // Muestra el mensaje si el campo está vacío
        }
    });
    
    documento.addEventListener("focus", function() {
        if (!documento.value) { // Solo muestra el mensaje si el campo está vacío
            mensaje1.textContent = "Ingrese su número de documento";
        }
        
        documento.addEventListener("blur", function(){
            mensaje1.textContent = "";
        })   
    });
    
    documento.addEventListener("input", function() {
        if (documento.value) {
            mensaje1.textContent = ""; // Borra el mensaje si hay algún valor en el campo
        } else {
            mensaje1.textContent = "Ingrese su número de documento"; // Muestra el mensaje si el campo está vacío
            
            
        }
    });
    

    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene la acción predeterminada de recargar la página
    
      if (!tarjeta.value) {
            mensaje.textContent = "Complete dicho campo para acceder"; 
        } 
        if (!documento.value) {
            mensaje1.textContent = "Complete dicho campo para acceder"; 
        } 
      /*****************/
    
         if (tarjeta.value && documento.value) {
            msj.textContent = "enviado";  
        }   else if (!tarjeta.value || !documento.value) {
            msj.textContent = "";
        }
   

    }); // FIN DE LA FUNCIÓN formulario submit
    
}); // FIN DE LA FUNCIÓN DOMContentLoaded

