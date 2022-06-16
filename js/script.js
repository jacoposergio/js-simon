// TODO| Visualizzare in un alert 5 numeri casuali.
// TODO| 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, 
// TODO| uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// TODO| Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
// TODO| numeri da indovinare sono stati individuati.

// ! mi importo la funzione per generare i numeri casuali

// ! creo la costante che indica il numero di numeri da generare
const gameNumbers = 5;
// ! creo la costante con i secondi da far passare
const userSeconds = 30;
// ! converto i secondi in millisecondi per importarli nella funzione
const userMilliseconds = userSeconds * 1000;




// !creo l'array con i numeri gameNumbers
const gameNumbersArray = generateRandomNumbers(gameNumbers, 1, 100);
console.log("numeri casuali",gameNumbersArray);

// alert(`Memorizza questi numeri: ${gameNumbersArray}. Premi ok quando sei pronto`);

// setTimeout(guessNumbers, userMilliseconds)















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












