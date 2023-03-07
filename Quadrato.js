let n = prompt("Dimmi un numero");

function qnumeri(n) {
    let start = Date.now();
    console.log(start);
    let elementi = 2*n-1;
    let matrix = new Array(elementi); // crea array vuoto
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(elementi); // crea le righe della matrice
    }
    for (let i = 0; i < n; i++) {
        let provv = n - i;
        let x = 2*provv-1;
        for (let k = 0; k < x; k++) { // righe
            if (provv === 1) {
                matrix [i][k+i] = provv;
                return stampaMatrix(matrix, start);
            } else {
                matrix [i][k+i] = provv;
                matrix [elementi-1-i][k+i] = provv;
            }
        }
        for (let k = 0; k < x; k++) { // colonne
            matrix [k+i][i] = provv;
            matrix [k+i][elementi-1-i] = provv;
        }
    }
}

function stampaMatrix(matrix, start) {
    let stampa = "<table>";
    for (let i = 0; i < matrix.length; i++) {
        stampa += "<tr>";
        for (let k = 0; k < matrix.length; k++) {
            stampa += "<td>" + matrix [i][k] + "</td>";
        }
        stampa += "<tr>";
    }
    stampa += "</table>";
    document.getElementById("Quadrato").innerHTML = stampa;
    let end = Date.now();
    console.log(end);
    let durata = end - start;
    console.log(durata);
}