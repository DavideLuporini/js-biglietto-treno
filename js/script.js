// TRACCIA

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere 
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
    per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// 1) CHIDERE IL NUMERO DI KM CHE SI DESIDERA PERCORRERE
// 2)CHIEDERE L'ETA' DEL PASSEGGERO
// 3)calcolare il presso per km (costante)
// 4)applicare il lo sconto per età

console.log('js ok');

// ask for the prefered distance

const distancePrefered = prompt('Quale distanza desideri percorrere? (in km)');
console.log(distancePrefered);

document.getElementById('distance').innerHTML = `LA distanza che desideri percorrere è: ${distancePrefered} KM `;


// ask the age

const age = prompt('Quanti anni hai?');
console.log(age);

document.getElementById('age').innerHTML = `la tua atà è: ${age} anni `;

// declaring price per km

const pricePerKm = 0.21;

// calculate pre discount price

const price = (distancePrefered * pricePerKm);
console.log(price);

// apply discount

if (age <= 18) {
    const afterDiscountPrice = (price - price * 20 / 100).toFixed(2);
    document.getElementById('price').innerHTML = `Il prezzo del biglietto per il tuo viaggio è: ${afterDiscountPrice} `;
    console.log(afterDiscountPrice)
}


if (age >= 65) {
    const afterDiscountPrice = (price - price * 40 / 100).toFixed(2);
    document.getElementById('price').innerHTML = `Il prezzo del biglietto per il tuo viaggio è: ${afterDiscountPrice} € `;
    console.log(afterDiscountPrice)
}