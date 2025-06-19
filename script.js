document.addEventListener("DOMContentLoaded", function(){
    inicio();  
    funcionBotonReset(); 
    funcionNuevoBoton();
    nuevoBoton.addEventListener("click", function(){
        nuevoh1.textContent = nuevoInput.value;
        nuevoh1.style.fontSize = tamaño.value;
        nuevoh1.style.color = color.value;
    })

    // botonReset.addEventListener("click", function() {
    //     nuevoh1.style.fontSize = "28px";
    //     nuevoh1.textContent = "Bienvenido!";
    // })
});
