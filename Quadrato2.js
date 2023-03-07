function qnumeri() {
    let n = prompt("Dimmi un numero");
    console.log(n);
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }
    for (let i = 0; i < n; i++) { // indica righe
        let l = i;
        for (let k = 0; k < n; k++) { // indice posizione colonna
            matrix[i][k] = n - (i-l);
            if (l != 0) {
                l -= 1;
            }
        }
    }
    stampa(matrix);
}

function stampa(matrix) {
    let stampa = "<table>"; // tr = righe td = colonne/posizione
    for (let i = 0; i < matrix.length; i++){
        stampa += "<tr>";
        for (let k = 0; k < matrix.length; k++) {
            stampa += "<td>" + matrix [i][k] + "</td>";
        }
        for (let k = matrix.length - 2; k >= 0; k--) {
            stampa += "<td>" + matrix [i][k] + "</td>";
        }
        stampa += "<tr>";
    }
    for (let i = matrix.length - 2;i >= 0; i--){
        stampa += "<tr>";
        for (let k = 0; k < matrix.length; k++) {
            stampa += "<td>" + matrix [i][k] + "</td>";
        }
        for (let k = matrix.length - 2; k >= 0; k--) {
            stampa += "<td>" + matrix [i][k] + "</td>";
        }
        stampa += "<tr>";
    }
    stampa += "</table>";
    document.getElementById("Quadrato").innerHTML = stampa;
}