console.log("Ricerca Ricorsiva");

let v = [];
let x = v;
let e = 123;
let inizio = 0;
for (let i = 0; i < 10; i++) {
    v[i] = Math.floor(Math.random() * 10);    
}
ricercaRicorsiva(v, inizio, e);

function ricercaRicorsiva (v, inizio, e) {
    if (inizio > v.length)
        console.log(-1);
    else {
        if (v[inizio] === e) {
            console.log(inizio+1);
        } else {
            ricercaRicorsiva(v, inizio + 1, e);
        }
    }
}

// CON RICERCA BINARIA

console.log("Ricerca Binaria");

v = x;
inizio = 0;
e = 123;
fine = v.length - 1;
ricercaBinaria(v, inizio, fine, e);

// function ricercaBinaria(v, inizio, fine, e) {
//     let metà = Math.trunc((inizio+fine)/2);
//     if (inizio === fine) {
//         console.log(-1);
//     } else {
//         if (e == v[metà]) {
//             console.log(metà + 1);
//         } else if (e > v[metà]) {
//             console.log(ricercaBinaria(v, metà, v.length, e));
//         } else {
//             console.log(ricercaBinaria(v, inizio, metà - 1, e));
//         }
//     }
// }

function ricercaBinaria(v, inizio, fine, e) {
    let metà = Math.trunc((inizio+fine)/2);
    if (e == v[metà]) {
        console.log(metà + 1);
    } else {
        if ((metà == inizio) || (metà == fine))
            return console.log(-1);
        if (e > v[metà]) {
            console.log(ricercaBinaria(v, metà, v.length, e));
        } else {
            console.log(ricercaBinaria(v, inizio, metà - 1, e));
        }
    }
}