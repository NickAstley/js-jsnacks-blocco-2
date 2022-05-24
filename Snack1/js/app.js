/* Snack1
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo. */

// Prendo il bottone di submit
const submitBtn = document.getElementById("submitBtn");

// Aggiungo un EventListener al bottone
submitBtn.addEventListener("click", function() {
    // Prendo il div dove stampare il risultato della funzione
    const divResult = document.getElementById("divResult");


    // Prendo il valore dell'input
    const numInput = parseInt(document.getElementById("numInput").value);

    // Controllo che sia un numero al click
    if (isNaN(numInput)) {
        // Se non è un numero, stampo un messaggio di errore
        divResult.innerHTML = "Devi inserire un numero!";
    } else {
        if (numInput % 2 === 0) {
            // Stampo il numero se è pari
            divResult.innerHTML = numInput.toString();
        } else {
            // Stampo il successivo se è dispari
            divResult.innerHTML = (numInput + 1).toString();
        }
    }
});
