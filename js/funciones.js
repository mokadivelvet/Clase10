    const nuevoh1 = document.createElement("h1");
    const nuevoInput = document.createElement("input");
    const nuevoBoton = document.createElement("button");
    const botonReset = document.createElement("button");

    const color = document.getElementById("colores");
    const tamaño = document.getElementById("tamañoFuente");

function inicio() {
    nuevoh1.style.fontSize = "28px";
    nuevoh1.style.color = "black"
    nuevoh1.textContent = "Bienvenido!";
      
    console.log("si funca inicio")

    botonReset.textContent = "Resetear texto";

    document.body.appendChild(nuevoInput);
    document.body.appendChild(nuevoBoton);
    document.body.appendChild(nuevoh1);
    document.body.appendChild(botonReset);
};

function funcionNuevoBoton() {
    nuevoInput.placeholder = "Ingrese un texto";
    nuevoBoton.textContent = "Clickeame";
}

function funcionBotonReset(){
    botonReset.addEventListener("click", ()=> {
    nuevoh1.style.fontSize = "28px";
    nuevoh1.style.color = "black"
    nuevoh1.textContent = "Bienvenido!";
    })
}




