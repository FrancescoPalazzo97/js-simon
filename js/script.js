// Functions
const randomNumber = () => Math.floor(Math.random() * 50 + 1) // Genera un numero casuale compreso tra 1 e 50

//Dichiarazione delle varaibili e recupero elementi necessari
let counter = document.getElementById(`countdown`); // Recupero il countdown e lo assegno alla variabile counter
let numbersList = document.getElementById(`numbers-list`); // Recupero l'elemento numbers-list e lo assegno a numbersList

let count = 30; // Creo una variabile contatore che parte da 30
counter.innerHTML = count // Inserisco il valore di count all'interno dell'elemento

const time = setInterval(function(){ // Creo un intervallo di 1 secondo
    count--; // Effettuo il decremento di count
    counter.innerHTML = count; // Inserisco il nuovo valore di count all'interno dell'elemento
}, 1000)

// creo un timeout per il setInerval che parte dopo 30s
setTimeout (function(){ 
    clearInterval(time);
}, 30 * 1000)

// Genero i numeri casuali
for (let i = 0; i < 5; i++){
    let n = randomNumber();
    numbersList.innerHTML += `<li>${n}</li>`;
}