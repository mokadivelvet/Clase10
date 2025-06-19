const nuevoh1 = document.createElement("h1");
const nuevoInput = document.createElement("input");
const botonReset = document.createElement("button");

const color = document.getElementById("colores");
const tamaño = document.getElementById("tamañoFuente");

function crearElementos() {
    nuevoh1.textContent = "Bienvenido!";
    nuevoh1.dataset.color = "black";
    nuevoh1.dataset.size = "28px";

    nuevoInput.placeholder = "Ingrese un texto";
    botonReset.textContent = "Resetear texto";

    document.body.appendChild(nuevoInput);
    document.body.appendChild(nuevoh1);
    document.body.appendChild(botonReset);
}

function aplicarEstilosDesdeDataset() {
    nuevoh1.style.color = nuevoh1.dataset.color;
    nuevoh1.style.fontSize = nuevoh1.dataset.size;
}

function configurarEventos() {
    nuevoInput.addEventListener("input", () => {
        nuevoh1.textContent = nuevoInput.value;
    });

    color.addEventListener("change", () => {
        nuevoh1.dataset.color = color.value;
        aplicarEstilosDesdeDataset();
    });

    tamaño.addEventListener("change", () => {
        nuevoh1.dataset.size = tamaño.value;
        aplicarEstilosDesdeDataset();
    });

    botonReset.addEventListener("click", () => {
        nuevoInput.value = "";
        nuevoh1.textContent = "Bienvenido!";
        nuevoh1.dataset.color = "black";
        nuevoh1.dataset.size = "28px";
        aplicarEstilosDesdeDataset();
    });
}

export function main() {
    crearElementos();
    aplicarEstilosDesdeDataset();
    configurarEventos();
}
