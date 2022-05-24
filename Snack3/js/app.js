/* Snack3
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari */

// Creo un array vuoto dove generare i numeri
const randomNums = [];

// Creo una variabile che terrà conto della somma degli elementi con indice dispari
let oddSum = 0;

// Prendo il div dove stampare il risultato della funzione
const divRandomNums = document.getElementById("randomNums");

// Prendo il div dove stampare la somma
const divOddSum = document.getElementById("oddSum");

// Tramite un ciclo, genero 10 numeri casuali che inserisco nell'array
for (let i = 0; i < 10; i++) {
    randomNums[i] = Math.floor(Math.random() * 100 + 1);

    if (i % 2 !== 0) {
        // Se l'indice dell'array è dispari, aggiungo il numero alla somma e lo metto in grassetto
        oddSum += randomNums[i];
        divRandomNums.innerHTML += `<strong>${randomNums[i].toString()}</strong> `;
    } else {
        // Se l'indice dell'array è pari, lo stampo semplicemente
        divRandomNums.innerHTML += `${randomNums[i].toString()} `;
    }
}
// Stampo la somma risultante
divOddSum.innerHTML += oddSum.toString();