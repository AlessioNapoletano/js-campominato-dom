const mainElement = document.querySelector("main");


let bombList;
//RIEMPIO l'array delle bombe

let punteggio = 0;

const button = document.querySelector("button");
//STAMPO il valore del punteggio
const outputPoint = document.getElementById("points");
button.addEventListener("click", function () {

    //SVUOTO l'elemento main Element, resetto
    mainElement.innerHTML = "";
    //ARRAY che contiene le 16 bombe
    bombList = [];
    while (bombList.length < 16) {
        bombList.push(getRandomBomb(bombList, 1, 100));
    }
    console.log(bombList);

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

        if (bombList.includes(number)) {

            alert("HAI PERSO , hai totalizzato: " + punteggio + " punti");
            punteggio = 0;
            mainElement.innerHTML = "";
            outputPoint.innerHTML = "Il tuo punteggio: " + punteggio;

        } else {
            //CAMBIO colore al click sulla casella
            newElement.classList.add("bg-primary");

            //controllo che sia la prima volta che clicco sulla casella, nel caso aggiungo il punto
            if (number > 0) {
                punteggio++;
                outputPoint.innerHTML = "Il tuo punteggio: " + punteggio;

                if (punteggio === (100 - bombList.length)) {
                    alert("HAI VINTO");
                    punteggio = 0;
                    mainElement.innerHTML = "";
                    outputPoint.innerHTML = "Il tuo punteggio: " + punteggio;
                }
            }
            number = -1;
        }
    });
    return newElement;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBomb(bombList, min, max) {
    let isUnique = false;
    let randomBombPosition;

    while (isUnique === false) {
        randomBombPosition = randomNumber(min, max);
        if (!bombList.includes(randomBombPosition)) {
            isUnique = true;
        }
    }

    return randomBombPosition;
}

/*
//Funzione creaBombe(numeroDiBombeDaCreare, ArrayCheDeveNonIncludereLeBombe, minimo, massimo(tra cui creo le bombe))
function createBomb(numberOfBomb, bombList, min, max){
    let isUnique = false;
    let randomListBomb; //valore di ritorno

    while(isUnnique === false)
}*/