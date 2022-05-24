/* Snack2
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome. */

// Creo due array con nomi e cognomi casuali
const namesList = ["Andrea", "Florian", "Mattia", "Domenico", "Biagio", "Constantin", "Anna", "Silvia", "Anxhela", "Erica"];
const surnamesList = ["Nicastro", "Leica", "Folcarelli", "Monaco", "Ferro", "Todirascu", "Tassone", "Canepa", "Meta", "Mancini"];

// Prendo l'ul dove stampare il risultato della funzione
const ulResult = document.getElementById("ulResult");

// Tramite un ciclo, associo ciascun nome del primo array ad un cognome casuale del secondo
for (let i = 0; i < namesList.length; i++) {
    let k = Math.floor(Math.random() * surnamesList.length);
    // Stampo la combinazione ottenuta
    ulResult.innerHTML += `<li>${namesList[i]} ${surnamesList[k]}</li>`;
}