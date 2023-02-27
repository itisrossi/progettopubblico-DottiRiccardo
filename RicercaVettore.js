let v = [1,6,23,53,123,323,3,6,7,21];
let e = 123;
let inizio = 0;

function ricercaRicorsiva (v, inizio, e) {
    if (inizio > v.length)
        console.log(-1);
    else {
        if (v[inizio] === e) {
            console.log(inizio);
        } else {
            console.log(ricercaRicorsiva(v, inizio + 1, e));
        }
    }
}
