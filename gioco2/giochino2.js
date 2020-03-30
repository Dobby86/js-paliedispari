// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

//primo lanciatore
var risultato;
var risultatoPiuAlto;

var lancio1 = Math.floor((Math.random("lancio 1")* 5)+ 1 );
console.log(" l ' utente1 dice pari e tira:" + lancio1);


//secondo lanciatore
var lancio2 = Math.floor((Math.random("lancio 2")* 5)+ 1 );

console.log("l ' utente2 dice dispari e tira:" + lancio2);

//
sommaNumeri();



function sommaNumeri() {
    risultato = lancio1+lancio2;
    console.log(risultato);

    if (risultato%2==0){
    risultato = "vince l' utente1 con :"+ "pari";

}else if (risultato % 4==0) {
   risultato = "vince utente1 con :" + "pari";
}else if (risultato % 3==0) {
   risultato = "vince utente2 con :" +"dispari";
}else if (risultato % 5==0) {
   risultato = "vince utente2 con :" + "dispari";
}else if (risultato % 7==0) {
   risultato = "vince utente2 con :" + "dispari";
}
}

document.getElementById("lancio").innerHTML = risultato;

// calcolo di maggioranza

// if (utente1 % 2==0) {
//     risultatoPiuAlto = "vince l' utente1 con :"+ utente1;
// } else if (utente1 % 4==0) {
//     risultatoPiuAlto = "vince utente1 con :" + utente1;
// }else if (utente2 % 3==0) {
//     risultatoPiuAlto = "vince utente2 con :" + utente2;
// }else if (utente2 % 1==0) {
//     risultatoPiuAlto = "vince utente2 con :" + utente2;
// }else if (utente2 %5==0) {
//     risultatoPiuAlto = "vince utente2 con :" + utente2;
// }else {
//     risultatoPiuAlto ="split=stesso risultato" ;
// }
