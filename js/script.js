const mainElement = document.querySelector("main");

const button = document.querySelector("button");
button.addEventListener("click", function () {

    //SVUOTO l'elemento main Element, resetto
    mainElement.innerHTML = "";

    //CREO il divParent che conterra le piccole caselle, AGGIUNGO le classi, lo INSERISCO all'interno del mainElement
    const newParentDivElement = document.createElement("div");
    newParentDivElement.classList.add("m-auto", "flex-wrap", "d-flex");
    mainElement.append(newParentDivElement);
    
    //CICLO e creo i vari div che comporranno il divParent
    for (let i = 1; i <= 100; i++) {
        let newSquare = createSquare(i);
        newParentDivElement.append(newSquare);
    }
});

function createSquare(number) {

    const newElement = document.createElement("div");
    newElement.innerHTML = "<span>" + number + "</span>";
    newElement.classList.add("box", "d-flex", "justify-content-center", "align-items-center", "fs-3");

    newElement.addEventListener("click", function () {
        newElement.classList.toggle("bg-danger");
    });
    return newElement;
}

