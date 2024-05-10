// Variabili e Data Type

const variabile1 = "stringa";

const variabile2 = 0;

const isActive = false;


// Unione Stringa + Numero = Stringa
const x = variabile1 + variabile2; // "Stringa0"

console.log(x);

console.log(1 + "dieci"); // "1Dieci"

// IF ELSE 
if(isActive) {
    console.log("è attivo");
} else if(isActive || variabile1 != 0) {
    
    console.log("non è attivo");
}

console.log("______________OBJECT_________________");
//Creo un oggetto
const user = {
    nome: "Roma",
    cognome: "El Allali",
    eta: 20,
    lavoro: "Developer"
};
console.log(user);

console.log("______________ARRAY_________________");
// Creo un Array
const colori = ["giallo", "verde", "rosso"];
// In un array posso mettere tutti i datatype che voglio
const mix = ["Cacao", 58, false, [23, "Luna"], user];
console.log(mix);

//metodi dell'array

// PUSH  Aggiunge un elemento alla fine dell'array
colori.push("nero");

console.log(colori);

// POP  Ci dice l'ultimo elemento
const colorePOP = colori.pop();
// console.log(colorePOP);

console.log("_______________CICLO FOR________________");
// Ciclo for (contatore, fino a quanto deve contare, aumento o diminuisco il contatore)
// Metodo lenght per prendere la lunghezza di tutto l'array
for (let i = 0; i < colori.length; i++){
    // console.log(i);
    console.log(colori[i]);
}

console.log("______________CICLO WHILE_________________");
// Ciclo While(condizione)
let y = 0;
while (y < mix.length) {
    console.log(mix[y]);
    // y++ viene messo alla fine
    y++
}

console.log("______________CICLO DO WHILE_________________");
//Ciclo Do While
let s = 0;
do {
    console.log(s);
    s++
} while ( s < 10);



console.log("______________FUNZIONI_________________");
// Funzioni
/* 
Una funzione è un blocco di codice che fai funzionare qunado richiami la funzione
una funzione nelle parentesi puoi passare dei parametri function calcolaNumeri(numero1, numero2)
I parametri puoi chiamarli come vuoi
una funzione ritorna sempre un valore, e si scrive return
**/

// una funzione che calcola 2 numeri

function calcolaNumeri(y, x) {
    //Scrivi il codice che ti serve
    let sum = y + x;
    // console.log(sum);
    //alla fine devi far tornare qualcosa mettendo RETURN davnti - NOn è obbligatorio il return
    return sum;
}

const richiamoFunzione = calcolaNumeri(50, 100);
const richiamoFunzione2 = calcolaNumeri(550, 100);

console.log(richiamoFunzione);
console.log(richiamoFunzione2);

function stampaArray(a) {
    for (let i = 0; i < a.length; i++){
        // console.log(i);
        console.log(a[i]);
    }
}

const coloriDaFunzione = stampaArray(colori);

const mixDaFunzione = stampaArray(mix);




// Manipolazione del DOM
// const nomi = ["Roma", "Giovanni", "Marco"];
// document.getElementById("nuovoID").innerHTML = nomi[0];

// console.log(nomi);

