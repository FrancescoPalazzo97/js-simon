// Functions
const randomNumber = () => parseInt(Math.floor(Math.random() * 50 + 1)) // Genera un numero casuale compreso tra 1 e 50

const findDuplicate = (arr, n) => n === arr; // Funzione che mi restituisce un valore booelano

const checkValue = (bool, element, n) =>{ // Funzione che mi stampa il risultato
    if (bool){ // Se un qualche valore non è valido
        alert(`Valore inserito non valido!`); // Compare il seguente messaggio
    } else { // Altrimenti
        showMessage(element, n); // Richiamo la funzione showMessage
    }
}

const showMessage = (element, n) =>{ // Funzione che mi stampa il messaggio di vittoria o sconfitta
    if (n >= 3){
        element.classList.remove(`text-danger`);
        element.classList.add(`text-success`);
        element.innerHTML = `Hai vinto <br> Hai indovinato ${n} numeri`;
    } else {
        element.classList.add(`text-danger`);
        element.classList.remove(`text-success`);
        element.innerHTML = `Hai perso <br> Hai indovinato ${n} numeri`
    }
}

//Dichiarazione delle varaibili e recupero elementi necessari
let counter = document.getElementById(`countdown`); // Recupero il countdown e lo assegno alla variabile counter
let numbersList = document.getElementById(`numbers-list`); // Recupero l'elemento numbers-list e lo assegno a numbersList
let instruction = document.getElementById(`instructions`); // Recupero l'elemento instructions
let answersForm = document.getElementById(`answers-form`); // Recupero l'elemento answers-form
let numbers = document.querySelectorAll(`input`); // Recupero gli input del form
let btn = document.querySelector(`button`); // Reecupero il bottone
let finalMessage = document.getElementById(`message`); // Recupero l'lemento message
let duplicate = false;


const msPerSecond = 1000;

let count = 30; // Creo una variabile contatore che parte da 30
counter.innerHTML = count // Inserisco il valore di count all'interno dell'elemento
let numsGenerated = []; // Creo un array dove metto i numeri generati

// Genero i numeri casuali
for (let i = 0; i < 5; i++){
    let n = randomNumber(); // Richiamo la funzione e inserisco il valore ritornato nella variabile n
    for (let j = 0; j < numsGenerated.length && !duplicate; j++){ // Verifico che il valore in n non sia già presente nell'array
        duplicate = findDuplicate(numsGenerated[j], n); // Richiamo la funzione e assegno il valore booleano che ritorna alla variabile duplicate
    }
    if (duplicate){ // Se presente un duplicato
        i--; //decremento l'indice
        duplicate = false; // Faccio tornare la variabile a false
    } else { // Altrimenti se non viene trovato nessun duplicato
        numbersList.innerHTML += `<li>${n}</li>`; // Inserisco il numero generato contenuto in un tag <li> nella lista
        numsGenerated.push(n); // Pusho il numero nell'array
    }
    
}

const time = setInterval(function(){ // Creo un intervallo di 1 secondo
    count--; // Effettuo il decremento di count
    counter.innerHTML = count; // Inserisco il nuovo valore di count all'interno dell'elemento
}, 1000)

// creo un timeout per il setInerval che parte dopo 30s
setTimeout (function(){ 
    clearInterval(time);
}, 30 * msPerSecond)

btn.addEventListener(`click`, randomNumber)

// Creo un'altro timeout per nascondere il contatorre, i numeri e nel mentre modifica il testo dell'elemento instructions e mostra il form dove inserire i numeri
setTimeout(() => { 
    counter.classList.add(`d-none`);
    numbersList.classList.add(`d-none`);
    answersForm.classList.remove(`d-none`);
    instruction.classList.add(`text-center`, `mb-4`, `fs-3`);
    instruction.innerHTML = `<strong>Inserisci i numeri <br> L'ordine non è importante<strong>`;
    answersForm.classList.add(`d-block`);
}, 31 * msPerSecond);

// Imposto il comportamento del bottone al click
btn.addEventListener(`click`, (e) => {
    e.preventDefault(); // Evito che la pagina si racarichi
    let founded = 0; // Definisco una variabile che uso come contatore dei numeri trovati
    let check = false; // Dichiaro un varibile da usare come controllo del valore inserito dall'utente
    for (let i = 0; i < numbers.length; i++){ // Primo ciclo per scorrere l'array di numeri inseriti dall'utente
        let numbersValue = parseInt(numbers[i].value); // Per comodità definsco una variabile che mi contiene il valore di numbers[i] in formato numerico
        if (isNaN(numbersValue)){ // Blocco condizionale per verificare se il valore inserito sia un numero oppure no
            check = true;
        } else {
            for (let j = 0; j<numsGenerated.length; j++){ // Secondo cilco per scorrere l'array di numeri generati casualmente
                if (numbersValue === numsGenerated[j]){ // Verifico se sono uguali
                    founded++; // Se sono uguali incremento di 1 founded
                }
            }
        }
        
    }
    checkValue(check, finalMessage, founded); // Richiamo funzione checkValue
})

