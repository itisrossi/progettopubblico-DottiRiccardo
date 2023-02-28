// selectionSort
let numeri = [9,8,7,6,5,4,3,2,1];
let inizio = 0;
let fine = numeri.length - 1;

let dAstart = Date.now();
console.log(dAstart);
selectionSort(numeri,inizio,fine);
let dAfine = Date.now();
console.log(dAfine);
let durataA = dAfine - dAstart;
console.log(durataA);

function selectionSort(numeri,inizio,fine){
    let posMinimo=0;
    if(inizio === fine){
        return;
    }else{
        posMinimo = posizioneMinimo(numeri,inizio,fine);
        scambia(numeri,inizio,posMinimo);
        selectionSort(numeri,inizio+1,fine);
    }
}

function posizioneMinimo(numeri,inizio,fine){
    if(inizio === fine)
        return inizio;
    else{
        let posMinimoRestante = posizioneMinimo(numeri,inizio+1,fine);
        if(numeri[inizio]<numeri[posMinimoRestante])
            return inizio;
        else
            return posMinimoRestante;
    }
}

function scambia(numeri,i,j){
    let tmp=numeri[i];
    numeri[i]=numeri[j];
    numeri[j]=tmp;
}

selectionSort(numeri,0,numeri.length-1);
console.log(numeri);

//quickSort

numeri = [9,8,7,6,5,4,3,2,1];
inizio = 0;
fine = numeri.length - 1;

function quickSort(numeri,inizio,fine) {
    if(inizio < fine) {
        let posPivot=partition(numeri,inizio,fine);
        quickSort(numeri,inizio,posPivot-1);
        quickSort(numeri,posPivot+1,fine);
    } else {
        return;
    }
}

function partition(numeri,inizio,fine) {
    let pivot = numeri[fine];
    let i = (inizio - 1);
 
    for (let j = inizio; j <= fine - 1; j++) {
 
        // If current element is smaller than the pivot
        if (numeri[j] < pivot) {
            i++;
            scambia(numeri, i, j);
        }
    }
    scambia(numeri, i + 1, fine);
    return (i + 1);
}

let dBstart = Date.now();
console.log(dBstart);
quickSort(numeri,inizio,fine);
let dBfine = Date.now();
console.log(dBfine);
let durataB = dBfine - dBstart;
console.log(durataB);
console.log(numeri);

// mergeSort

numeri = [9,8,7,6,5,4,3,2,1];
inizio = 0;
fine = numeri.length - 1;

function mergeSort(numeri, inizio, fine) {
    let metà = (fine+inizio)/2;
    if (inizio < fine) {
        mergeSort(numeri, inizio, metà);
        mergeSort(inizio, metà+1, fine);
        merge(numeri, start, fine);
    } else {
        return;
    }
}

mergeSort(numeri,inizio,fine);
console.log(numeri);