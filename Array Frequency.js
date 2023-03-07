function Calcola() {
    console.log("Chiama funzione");
    let string = document.getElementById("string").value;
    let ris = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let k = 0; k < string.length; k++) {
        for (let i = 0; i <= 9; i++) {
            if (string[k] == i) {
                ris[i] += 1;
            }
        }
        console.log(k);        
    }
    console.log(ris);
    document.getElementById("Ris").innerHTML = ris;
}