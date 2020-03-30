// console.log("ciao");
// DESCRIZIONE:
// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola
var parola;
var risultato;
var parolaInversa;
var isPalindroma;

function isPalindroma(parola) {


    var parolaInversa = parola.reverse;

    if (parola==parolaInversa){
        risultato="well";
        console.log(risultato);
    }else {
        console.log();
    }
}

// devi dirmi se la parola è palindroma

var parolaPalindroma = isPalindroma("anna");

if (parolaPalindroma == true) {
console.log();
} else {
    console.log();
}
