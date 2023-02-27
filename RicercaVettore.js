console.log("Ricerca Ricorsiva");
let v = [1,6,23,53,123,323,3,6,7,21];
let e = 123;
let inizio = 0;
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

v = [1,6,23,53,123,323,3,6,7,21];
e = 20;
inizio = 0;
fine = v.length - 1;
ricercaBinaria(v, inizio, fine, e);

function ricercaBinaria(v, inizio, fine, e) {
    let metà = Math.trunc((inizio+fine)/2);
    if (metà == 1) {
        console.log(-1);
    } else {
        if (e == v[metà]) {
            console.log(metà + 1);
        } else if (e > v[metà]) {
            console.log(ricercaBinaria(v, metà, fine, e));
        } else {
            console.log(ricercaBinaria(v, inizio, metà - 1, e));
        }
    }
}