// Functions
const randomNumber = () => Math.floor(Math.random() * 50 + 1) // Genera un numero casuale compreso tra 1 e 50

//Dichiarazione delle varaibili e recupero elementi necessari
let counter = document.getElementById(`countdown`); // Recupero il countdown e lo assegno alla variabile counter
let numbersList = document.getElementById(`numbers-list`); // Recupero l'elemento numbers-list e lo assegno a numbersList
let instruction = document.getElementById(`instructions`); // Recupero l'elemento instructions
let answersForm = document.getElementById(`answers-form`); // Recupero l'elemento answers-form

const msPerSecond = 1000;

let count = 30; // Creo una variabile contatore che parte da 30
counter.innerHTML = count // Inserisco il valore di count all'interno dell'elemento

const time = setInterval(function(){ // Creo un intervallo di 1 secondo
    count--; // Effettuo il decremento di count
    counter.innerHTML = count; // Inserisco il nuovo valore di count all'interno dell'elemento
}, 1000)

// creo un timeout per il setInerval che parte dopo 30s
setTimeout (function(){ 
    clearInterval(time);
}, 30 * msPerSecond)

// Genero i numeri casuali
for (let i = 0; i < 5; i++){
    let n = randomNumber();
    numbersList.innerHTML += `<li>${n}</li>`;
}

// Creo un'altro timeout per nascondere il contatorre, i numeri e nel mentre modifica il testo dell'elemento instructions e mostra il form dove inserire i numeri
setTimeout(() => { 
    counter.classList.add(`d-none`);
    numbersList.classList.add(`d-none`);
    answersForm.classList.remove(`d-none`);
    instruction.classList.add(`text-center`, `mb-4`, `fs-3`);
    instruction.innerHTML = `<strong>Inserisci i numeri <br> L'ordine non è importante<strong>`;
    answersForm.classList.add(`d-block`);
}, 31 * msPerSecond);