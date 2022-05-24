/* Snack4 (Bonus)
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

// Creo due array vuoti dove generare i numeri
const randomNums1 = [];
const randomNums2 = [];

// Genero due variabili casuali che determineranno quanti elementi conterrà ciascun array (tra 0 e 10)
const array1Length = Math.floor(Math.random() * 10 + 1);
const array2Length = Math.floor(Math.random() * 10 + 1);

// Tramite un ciclo, genero numeri casuali che inserisco nel primo array
for (let i = 0; i < array1Length; i++) {
    randomNums1[i] = Math.floor(Math.random() * 100 + 1);
}

// Ripeto per il secondo array
for (let i = 0; i < array2Length; i++) {
    randomNums2[i] = Math.floor(Math.random() * 100 + 1);
}

// Stampo i due array
const divInitialArray1 = document.getElementById("initialArray1");
const divInitialArray2 = document.getElementById("initialArray2");
divInitialArray1.innerHTML = "Primo array: " + randomNums1.toString();
divInitialArray2.innerHTML = "Secondo array: " + randomNums2.toString();

// Prendo il div dove mostrare l'array aggiornato
const updatedArray = document.getElementById("updatedArray");

// Determino quale array ha meno elementi
if (array1Length < array2Length) {
    // Se il primo ha meno elementi, li aggiungo a questo calcolando la differenza
    let lengthDifference = array2Length - array1Length;
    for (let i = 0; i < lengthDifference; i++) {
        randomNums1.push(Math.floor(Math.random() * 100 + 1));
    }
    // Stampo l'array aggiornato
    updatedArray.innerHTML = "Array 1 aggiornato: " + randomNums1.toString();
} else if (array2Length < array1Length) {
    // Se il secondo ha meno elementi, li aggiungo a questo calcolando la differenza
    let lengthDifference = array1Length - array2Length;
    for (let i = 0; i < lengthDifference; i++) {
        randomNums2.push(Math.floor(Math.random() * 100 + 1));
    }
    // Stampo l'array aggiornato
    updatedArray.innerHTML = "Array 2 aggiornato: " + randomNums2.toString();
} else {
    // Se hanno lo stesso numero di elementi, lo specifico
    updatedArray.innerHTML = "Gli array hanno lo stesso numero di elementi!";
}