// TODO| Visualizzare in un alert 5 numeri casuali.
// TODO| 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, 
// TODO| uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// TODO| Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
// TODO| numeri da indovinare sono stati individuati.


// ! creo la costante che indica il numero di numeri da generare
const gameNumbers = 5;
// ! creo la costante con i secondi da far passare
const userSeconds = 1;
// ! converto i secondi in millisecondi per importarli nella funzione
const userMilliseconds = userSeconds * 1000;

// ! mi importo la funzione per generare i numeri casuali
// !creo l'array con i numeri gameNumbers
const gameNumbersArray = generateRandomNumbers(gameNumbers, 1, 100);
console.log("numeri casuali",gameNumbersArray);

// ! messaggio iniziale di alert
alert(`Memorizza questi numeri: ${gameNumbersArray}. Premi ok quando sei pronto`);

// ! faccio partire la function dopo i secondi prestabiliti
setTimeout(guessNumbers, userMilliseconds);




// function guessNumbers() {
//     const userNumberArray = [];
//     const guessedNumbersArray = [];

//     while(userNumberArray.length = gameNumbers ){
    
//         const userNumber = parseInt(prompt('Dimmi un numero'));

//         if(gameNumbersArray.includes(userNumber)) {
//             guessedNumbersArray.push(userNumber);
//             // userNumberArray.push(userNumber);

//         }else if (!gameNumbersArray.includes(userNumber)){
//             userNumberArray.push(userNumber);
//         }
//         console.log("numeri del giocatore",userNumberArray);
//         console.log("numeri indovinati", guessedNumbersArray);
//     }

// }


function guessNumbers() {
    const userNumberArray = [];
    const guessedNumbersArray = [];

 for ( let i = 1; i <= gameNumbers; i++){

    const userNumber = parseInt(prompt('Dimmi un numero'));

    if(gameNumbersArray.includes(userNumber)) {
        guessedNumbersArray.push(userNumber);
        // userNumberArray.push(userNumber);

    }else if (!gameNumbersArray.includes(userNumber)){
        userNumberArray.push(userNumber);
    }
    console.log("numeri del giocatore",userNumberArray);
    console.log("numeri indovinati", guessedNumbersArray);
 }



 }












// !||||||||||||||||||||||||||||||||||||||||||||||||
    // !        FUNCTIONS
// !|||||||||||||||||||||||||||||||||||||||||||||||||

 // ! funzione per generare numeri casuali
 function generateRandomNumbers(numberOfElements, rangeMin, rangeMax) {
    // ! creo l 'array vuoto da riempire
    const randomNumbersArray = [];
    // ! uso il ciclo while per mettere la condizione che deve scorrere finchè non trova solo numeri diversi,
    // ! gameMaxRange darà il range del livello scelto
    while(randomNumbersArray.length < numberOfElements) {
        const randomNumber = getRndInteger (rangeMin, rangeMax);
        if(!randomNumbersArray.includes(randomNumber)) {
            randomNumbersArray.push(randomNumber);
        }
    
    }
    return randomNumbersArray;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }












